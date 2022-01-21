import { Component } from "../../parser/parse_result/component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { NLP_Helper } from "../NLP_Helper";
import { ComponentBasedMetric } from "./component_based_,metric";
import { MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";
import { Utils } from "./util";

interface ParamsType { k: number, consider_tags: boolean,terms:string[],levenshtein_distance:number }
/**
 * Punishes comments with abbreviation as they are usually harder to read 
 */
export class CertainTermCountMetric extends ComponentBasedMetric {
    private nlp_helper = new NLP_Helper();
    public analyze(component: Component, builder: AbstractMetricBuilder, langSpec: LanguageSpecificHelper): void {
        let params = this.getParams() as ParamsType;
        if (component.getComment() == null) return;
        let termCount = 0;
        if (component.getComment()!.getGeneralDescription() != null) {
            termCount += this.countSimilarTerms(component.getComment()!.getGeneralDescription()!)
        }
        if (params.consider_tags) {
            for (let tag of component.getComment()!.getTags()) {
                if (tag.getDescription() != null) {
                    termCount += this.countSimilarTerms(tag.getDescription()!)
                }
            }
        }
        let logMessages:string[]=[];
        let score=this.processResult(termCount,logMessages);
        this.pushResult(builder,score,this.createLogMessages(logMessages,component));

    }
    private countSimilarTerms(text:string):number{
        let params=this.getParams() as ParamsType;
        let count=0;
        let words=this.nlp_helper.getTokens(text);
        for(let w1 of words){
            for (let w2 of params.terms){
                if(this.nlp_helper.levenshtein(w1,w2)<=params.levenshtein_distance){
                    count++;
                }
            }
        }
        return count;

    }
    protected override  processResult(result: number, logMessages: string[]): number {
        let params=this.getParams() as ParamsType;
        if(result>1){
            logMessages.push("More than one forbidden term detected. Forbidden are ",params.terms.join(","));
        }
        return Utils.boundedGrowth(MIN_SCORE,MAX_SCORE,params.k,result);
    }


}