import { Component } from "../../parser/parse_result/component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { NLP_Helper } from "../NLP_Helper";
import { ComponentBasedMetric } from "./component_based_,metric";
import { MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";
import { Utils } from "./util";

interface ParamsType { k: number, consider_tags: boolean }
/**
 * Punishes comments with abbreviation as they are usually harder to read 
 */
export class AbbreviationCountMetric extends ComponentBasedMetric {
    private nlp_helper = new NLP_Helper();
    public analyze(component: Component, builder: AbstractMetricBuilder, langSpec: LanguageSpecificHelper): void {
        let params = this.getParams() as ParamsType;
        if (component.getComment() == null) return;
        let abbrevCount = 0;
        if (component.getComment()!.getGeneralDescription() != null) {
            abbrevCount += this.nlp_helper.countAbbreviations(component.getComment()!.getGeneralDescription()!);
        }
        if (params.consider_tags) {
            for (let tag of component.getComment()!.getTags()) {
                if (tag.getDescription() != null) {
                    abbrevCount += this.nlp_helper.countAbbreviations(tag.getDescription()!);
                }
            }
        }
        let logMessages:string[]=[];
        let score=this.processResult(abbrevCount,logMessages);
        this.pushResult(builder,score,this.createLogMessages(logMessages,component));

    }
    protected override  processResult(result: number, logMessages: string[]): number {
        let params=this.getParams() as ParamsType;
        if(result>1){
            logMessages.push("More than one abbreviation detected");
        }
        return Utils.boundedGrowth(MIN_SCORE,MAX_SCORE,params.k,result);
    }


}