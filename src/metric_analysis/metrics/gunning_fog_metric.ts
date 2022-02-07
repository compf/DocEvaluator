import { Component } from "../../parser/parse_result/component";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { MetricResultBuilder } from "../metric_result_builder";
import { RelevantVariables } from "../NLP_Helper";
import { ComponentBasedMetric } from "./component_based_,metric";
import { FleschMetric } from "./flesch_metric";
interface ParamsType{
    consider_tags:boolean
}
export class GunningFogMetric extends FleschMetric{
   
    protected calcReadability(vars: RelevantVariables): number {
        return 0.4*(vars.numWords/vars.numSentences+vars.numHardWords);
    }
    public processResult(score: number, msgs: string[]): number {
        let finalScore=0;
        if(score<0){
            finalScore=0;
            msgs.push("Invalid gunning fog value");
        }
        else if(score<=8){
            finalScore= (15/8)*score+85;
            if(score<=4){
                msgs.push("The comment is maybe a little bit to easy");
            }
        }
        else if(score<=16){
            finalScore=(-25/16)*score*(score-16);
        }
        else{
            finalScore=0;
        }
        return finalScore;
    }
   
    
}