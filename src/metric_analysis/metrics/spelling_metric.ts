import { existsSync, readFileSync } from 'fs';
import path from 'path';
import SpellChecker from 'simple-spellchecker';
import { Component } from '../../parser/parse_result/component';
import { HierarchicalComponent } from '../../parser/parse_result/hierarchical_component';
import { MethodComponent } from '../../parser/parse_result/method_component';
import { LanguageSpecificHelper } from '../language_specific/language_specific_helper';
import { MetricResultBuilder } from '../metric_result_builder';
import { ComponentBasedMetric } from './component_based_,metric';
import { MAX_SCORE, MIN_SCORE } from './documentation_analysis_metric';
import { Utils } from './util';
function findDictionary(){
    let currPath=__dirname;
    while(!existsSync(path.join(currPath,"en-US.dic"))){
        currPath=path.dirname(currPath);
    }
    return currPath;

}
const dictionary=SpellChecker.getDictionarySync("en-US",findDictionary())
interface ParamType{additional_words:string[],k:number,dictionary_path:string}
export class SpellingMetric extends ComponentBasedMetric{
    analyze(component: Component, builder: MetricResultBuilder, langSpec: LanguageSpecificHelper): void {
        if(component.getComment()==null)return;
        let logMessages:string[]=[];
        let errorCount=0;
        if(component.getComment()!.getGeneralDescription()!=null){
            let rawtext=langSpec.getRawText(component.getComment()!.getGeneralDescription()!);
            errorCount+=this.getMisspellingCount(rawtext,logMessages,component)
        }
        for(let tag of component.getComment()!.getTags()){
            if(tag.getDescription()!=null){
                errorCount+=this.getMisspellingCount(tag.getDescription()!,logMessages,component);
            }
        }
        let result=this.processResult(errorCount,logMessages);
        this.pushResult(builder,result,this.createLogMessages(logMessages,component),component);
    }
    private additionalWords:Set<string>;
    protected processResult(result: number, logMessages: string[]): number {
        let params=this.getParams() as ParamType;
        return Utils.boundedGrowth(MIN_SCORE,MAX_SCORE,params.k,result);
    }
    getMisspellingCount(text:string,logMessages:string[],component:Component):number{
        let errorCount=0;
        let params=this.getParams() as ParamType;
        let splitted=text.split(" ");
        for(let word of splitted){
            if(!dictionary.spellCheck(word) && !this.additionalWords.has(word) && !this.isNameDefinedInContext(word,component) ){
                errorCount++;
                logMessages.push("Word "+word +" could be mispelled");
            }
        }
        return errorCount;
    }
    isNameDefinedInContext(word:string,component:Component):boolean{
        if(word==component.getName())return true;
        let topParent=component.getTopParent();
        return this.isNameDefinedInContextRec(word,topParent);
    }
    isNameDefinedInContextRec(word:string,component:Component):boolean{
        this.additionalWords.add(component.getName());
        if(component.getName()==word){
            return true;
        }
        else if(component instanceof MethodComponent ){
            let meth=component as MethodComponent;
            for(let param of meth.getParams()){
                if(param.name==word)return true;
            }
            return false;
        }
       else if(component instanceof HierarchicalComponent){
            let hierarch=component as HierarchicalComponent;
            for(let obj of hierarch.getChildren()){
                if(this.isNameDefinedInContextRec(word,obj))return true;
            }
            return false;
       }
       else{
           return false;
       }
    }
    constructor(uniqueName:string,params:any){
        super(uniqueName,params);
        let par=params as ParamType;
        this.additionalWords=new Set(par.additional_words);
        if(par.dictionary_path!=""){
            for(let line of  readFileSync(par.dictionary_path).toString().split("\n")){
                this.additionalWords.add(line);
            }
        }
    }

}