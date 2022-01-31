import { Component } from "../../parser/parse_result/component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { NLP_Helper } from "../NLP_Helper";
import { ComponentBasedMetric } from "./component_based_,metric";
import { MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";
interface ParamType{upper_theshold:number,lower_threshold:number,levenshtein_distance:number}
/**
 * Measures the coherence of comment and name of component
 * This will ensure that a comment does not simply repeat the component's name but contains additional information
 * On the other hand comments that have nothing to do with the name will be punished
 */
export class CommentNameCoherenceMetric extends ComponentBasedMetric{

    analyze(component: Component, builder: AbstractMetricBuilder,langSpec:LanguageSpecificHelper): void {
        if(component.getComment()==null || component.getComment()?.getGeneralDescription()==null)return;
        let componentNameWords=this.splitByNameConvention(component.getName());
        let commentWords=this.nlp_helper.getTokens(component.getComment()!.getGeneralDescription()!);
        if(commentWords.length==0)return;
        let similarWordsCount=0;
        for(let componentWord of componentNameWords){
            for(let commentWord of commentWords){
                if(this.areSimilar(componentWord,commentWord)){
                    similarWordsCount++;
                }
            }
        }
        let messages: string[]=[];
        let result=this.processResult(similarWordsCount/commentWords.length,messages);
       this.pushResult(builder,result,this.createLogMessages(messages,component),component);

    }
    public override processResult(result:number,messages:string[]):number{
        let params=this.getParams() as ParamType;
        if(result<=params.lower_threshold){
            messages.push("Comment has nothing to do with the name of the component. Consider rewriting the comment")
            return MIN_SCORE;
        }
        else if(result>params.upper_theshold){
            messages.push("Comment and component name are very similar, consider adding more information");
            return MIN_SCORE
        }
        else return MAX_SCORE;
    }
    private nlp_helper=new NLP_Helper();
    private areSimilar(word1:string,word2:string):boolean{
        let params=this.getParams() as ParamType;
        return this.nlp_helper.levenshtein(word1,word2)<=params.levenshtein_distance;
    }
    public splitByNameConvention(name:string):string[]{
        let result:string[]=[];
        let buffer="";
        let lastChar:null|string=null;
        for(let c of name){
            if(c=="_" && buffer!=""){
                result.push(buffer);
                buffer="";
            }
            else if(lastChar!=null && lastChar?.match(/[a-z]/) && c.match(/[A-Z]/)){
                result.push(buffer)
                buffer=c;
            }
            else{
                buffer+=c;
            }
            lastChar=c;
        }
        if(buffer!=""){
            result.push(buffer);
        }
        return result;
    }
}