import { Component } from "../../parser/parse_result/component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { NLP_Helper, RelevantVariables } from "../NLP_Helper";
import { ComponentBasedMetric } from "./component_based_,metric";
interface ParamsType {
    /**If true also calculate the flesh score for the block tags of the components and calculate the average of them */
    consider_tags: boolean
}
/**
 * This metric calculate the flesh score which describes the readability of a text
 */
export class FleschMetric extends ComponentBasedMetric {
    analyze(component: Component, builder: AbstractMetricBuilder, langSpec: LanguageSpecificHelper): void {
        let params = this.getParams();

        let textsToConsider = this.getTextsToConsider(component, params as ParamsType, langSpec);
        if (textsToConsider.length == 0) return;
        let sum = 0;

        for (let text of textsToConsider) {
            sum += this.calcReadability(NLP_Helper.getRelevantVariables(text.replace("\n", " ")));
        }
        let msgs: string[] = [];
        let score = sum / textsToConsider.length;
        let finalScore = this.processResult(score, msgs);

        this.pushResult(builder, finalScore, this.createLogMessages(msgs, component), component)
    }
    override shallConsider(component: Component): boolean {
        return super.shallConsider(component) && component.getComment()!=null;
    }
    public override  processResult(score: number, msgs: string[]): number {
        let finalScore = 0;
        if (score < 0) {
            finalScore = 0;
            msgs.push("Flesh score is in invalid range");
        }
        else if (score <= 70) {
            finalScore = this.quadratic(0, 140, -1 / 49, score);
            if (score < 40) {
                msgs.push("The documentation seems to be very hard to read. Consider rewriting it");
            }
        }
        else if (score > 70 && score < 100) {
            finalScore = -(1 / 2) * (score - 70) + 100;
        }
        else {
            finalScore = 85;
            msgs.push("The documentation is a little bit too easy");

        }
        return finalScore
    }
    quadratic(root1: number, root2: number, a: number, x: number) {
        return a * (x - root1) * (x - root2);
    }
    /**
     * collects all text form the genral description and params
     * only returns the raw text
     * @param component the component of which the text should be considered
     * @param params the params of this metric
     * @param langHelper the language specific information that will be used extract the raw text
     * @returns 
     */
    protected getTextsToConsider(component: Component, params: ParamsType, langHelper: LanguageSpecificHelper): string[] {
        let textsToConsider: string[] = [];
            if (component.getComment()?.getGeneralDescription() != null) {
                let rawText = langHelper.getRawText(component.getComment()?.getGeneralDescription()!)
                if(rawText!=""){
                    textsToConsider.push(rawText);
                }
                
            }
            if (params.consider_tags) {
                for (let tag of component.getComment()?.getTags()!) {
                    if (tag.getDescription() != null) {
                        let rawText = langHelper.getRawText(component.getComment()?.getGeneralDescription()!)
                        if(rawText!=""){
                            textsToConsider.push(tag.getDescription()!);
                        }
                      
                    }

                }
        }
        return textsToConsider;
    }
    /**
     * calcuates the readability based on the flesh score
     * but could be overriden to use another formula
     * @param vars The stats of the text, like number of words, syllables
     * @returns 
     */
    protected calcReadability(vars: RelevantVariables): number {
        return  206.835 - 1.015 * (vars.numWords / vars.numSentences) - 84.6 * (vars.numSyllables / vars.numWords);
    }


}