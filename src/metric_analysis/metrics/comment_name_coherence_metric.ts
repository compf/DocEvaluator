import { Component } from "../../parser/parse_result/component";
import { MetricResult } from "../metric_result";
import { MetricResultBuilder } from "../metric_result_builder";
import { NLP_Helper } from "../NLP_Helper";
import { ComponentBasedMetric } from "./component_based_,metric";
import { MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";

export class CommentNameCoherenceMetric extends ComponentBasedMetric{
    analyze(component: Component, builder: MetricResultBuilder): void {
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
        let result=this.mapResult(similarWordsCount/commentWords.length);
        builder.processResult(new MetricResult(result,[],this.getUniqueName()));

    }
    public mapResult(result:number):number{
        if(result==0)return MIN_SCORE;
        else if(result>0.5)return MIN_SCORE;
        else return MAX_SCORE;
    }
    private nlp_helper=new NLP_Helper();
    private areSimilar(word1:string,word2:string):boolean{
        return this.nlp_helper.levenshtein(word1,word2)<2;
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