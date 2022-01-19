import { Component } from "../../parser/parse_result/component";
import { FileComponent } from "../../parser/parse_result/file_component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LogMessage } from "../log_message";
import { MetricResult } from "../metric_result";
import { MetricResultBuilder } from "../metric_result_builder";
import { ComponentBasedMetric } from "./component_based_,metric";
import { DocumentationAnalysisMetric, MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";

/**
 * This metric simply check whether a comment is present
 */
export class SimpleCommentPresentMetric extends ComponentBasedMetric {
    
    analyze(component: Component, builder: AbstractMetricBuilder): void {
        let score = 0;
        let logMessages: string[] = []
        if (component.getComment() != null) {
            score = MAX_SCORE;
        }
        else {
            score = MIN_SCORE;
        }
        score=this.processResult(score,logMessages)
       this.pushResult(builder,score,this.createLogMessages(logMessages,component));
    }
    protected processResult(result: number, logMessages: string[]): number {
        logMessages.push("Component has no documentation")
        return result;

    }


}