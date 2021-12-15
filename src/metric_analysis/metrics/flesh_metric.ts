import { Component } from "../../parser/parse_result/component";
import { LogMessage } from "../log_message";
import { MetricResult } from "../metric_result";
import { MetricResultBuilder } from "../metric_result_builder";
import { NLP_Helper, RelevantVariables } from "../NLP_Helper";
import { ComponentBasedMetric } from "./component_based_,metric";
import { MIN_SCORE } from "./documentation_analysis_metric";
export class FleshMetric extends ComponentBasedMetric {
    analyze(component: Component, builder: MetricResultBuilder, params: any): void {
        let textsToConsider = this.getTextToConsider(component, params);
        let logMessages:LogMessage[]=[]
        let nlp_helper=new NLP_Helper();
        if(textsToConsider.length==0){
            logMessages.push(new LogMessage(component.getQualifiedName() + "has no documentation and could be evaulated by the flesh formula"))
            builder.processResult(new MetricResult(MIN_SCORE,logMessages,this));
        }
        let sum = 0;

        for (let text of textsToConsider) {
            sum += this.calcFleshKincaid(nlp_helper.getRelevantVariables(text.replace("\n","")));
        }
        let score = sum / textsToConsider.length;
        let finalScore = 0;
        if (score <= 70) {
            finalScore = this.quadratic(0, 140, -1 / 49, score);
            if(score<40){
                logMessages.push(new LogMessage("The documentation of " +component.getQualifiedName()+" seems to be very difficult. Consider rewriting it"))
            }
        }
        else if(score>70 && score <100){
            finalScore=-(score-70)+100;
        }
        else {
            finalScore=70;
            logMessages.push(new LogMessage("The documentation of " +component.getQualifiedName()+" is a little bit too easy"))

        }
        builder.processResult(new MetricResult(finalScore, [], this));
    }
    quadratic(root1: number, root2: number, a: number, x: number) {
        return a * (x - root1) * (x - root2);
    }
    private getTextToConsider(component: Component, params: any): string[] {
        let textsToConsider: string[] = [];
        if (component.getComment() != null) {
            if (component.getComment()?.getGeneralDescription() != null) {
                textsToConsider.push(component.getComment()?.getGeneralDescription()!);
            }
            if (params.considerTags) {
                for (let tag of component.getComment()?.getTags()!) {
                    if (tag.getDescription() != null)
                        textsToConsider.push(tag.getDescription()!);
                }
            }
        }
        return textsToConsider;
    }
    private calcFleshKincaid(vars: RelevantVariables): number {
        let result = 206.835 - 1.015 * (vars.numWords / vars.numSentences) - 84.6 * (vars.numSyllables / vars.numWords);
        /*console.log("num words",vars.numWords);
        console.log("num sentences",vars.numSentences);
        console.log("num syl",vars.numSyllables);
        console.log("flesh",result)*/
        return result;
    }
    

}