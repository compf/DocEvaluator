import { EvaluatorConf } from "../conf/EvaluatorConf";
import { Component } from "../parser/parse_result/component";
import { DocumentationAnalysisMetric, MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";
import { LogMessage } from "./log_message";
import { MetricResult } from "./metric_result";
import { MetricResultBuilder } from "./metric_result_builder";

export class SimpleCommentPresentMetric implements DocumentationAnalysisMetric{
    
    analyze(component: Component,builder:MetricResultBuilder,params:any|undefined): void {
        let score=0;
        let logMessages:LogMessage[]=[]
        if(component.getComment()!=null){
            score=MAX_SCORE;
        }
        else{
            score=MIN_SCORE;
            logMessages.push(new LogMessage(`Component ${component.getQualifiedName()} has no documentation`))
        }
        builder.processResult(new MetricResult(score,logMessages));
    }
    getName(){
        return "Simple_comment_present";
    }

}