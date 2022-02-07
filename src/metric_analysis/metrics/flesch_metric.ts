import { Component } from "../../parser/parse_result/component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { NLP_Helper, RelevantVariables } from "../NLP_Helper";
import { ComponentBasedMetric } from "./component_based_,metric";
interface ParamsType{consider_tags:boolean}
/**
 * This metric calculate the flesh score which describes the readability of a text
 */
export class FleschMetric extends ComponentBasedMetric {
    analyze(component: Component, builder: AbstractMetricBuilder,langSpec:LanguageSpecificHelper): void {
        let params=this.getParams();

        let textsToConsider = this.getTextToConsider(component, params as ParamsType);
        if(textsToConsider.length==0)return;
        let sum = 0;

        for (let text of textsToConsider) {
            let rawText=langSpec.getRawText(text);
            sum += this.calcReadability(NLP_Helper.getRelevantVariables(rawText.replace("\n"," ")));
        }
        let msgs:string[]=[];
        let score = sum / textsToConsider.length;
        let finalScore = this.processResult(score,msgs);
        
        this.pushResult(builder,finalScore,this.createLogMessages(msgs,component),component)
    }
    public override  processResult(score: number,msgs:string[]): number {
        let finalScore=0;
        if(score<0){
            finalScore=0;
            msgs.push("Flesh score is in invalid range");
        }
        else if (score <= 70) {
            finalScore = this.quadratic(0, 140, -1 / 49, score);
            if(score<40){
                msgs.push("The documentation seems to be very hard to read. Consider rewriting it");
            }
        }
        else if(score>70 && score <100){
            finalScore=-(1/2)*(score-70)+100;
        }
        else {
            finalScore=85;
            msgs.push("The documentation is a little bit too easy");

        }
        return finalScore
    }
    quadratic(root1: number, root2: number, a: number, x: number) {
        return a * (x - root1) * (x - root2);
    }
    protected getTextToConsider(component: Component, params: ParamsType): string[] {
        let textsToConsider: string[] = [];
        if (component.getComment() != null) {
            if (component.getComment()?.getGeneralDescription() != null) {
                textsToConsider.push(component.getComment()?.getGeneralDescription()!);
            }
            if (params.consider_tags) {
                for (let tag of component.getComment()?.getTags()!) {
                    if (tag.getDescription() != null)
                        textsToConsider.push(tag.getDescription()!);
                }
            }
        }
        return textsToConsider;
    }
    protected calcReadability(vars: RelevantVariables): number {
        return  206.835 - 1.015 * (vars.numWords / vars.numSentences) - 84.6 * (vars.numSyllables / vars.numWords);
    }
    

}