import { Component } from "../../parser/parse_result/component";
import { FileComponent } from "../../parser/parse_result/file_component";
import { LogMessage } from "../log_message";
import { MetricResult } from "../metric_result";
import { MetricResultBuilder } from "../metric_result_builder";
import { ComponentBasedMetric } from "./component_based_,metric";
import { DocumentationAnalysisMetric, MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";


export class SimplePublicMembersOnlyMetric extends ComponentBasedMetric {
    shallConsider(component: Component,params:any) {
        return component.getComponentMetaInformation().isPublic() && super.shallConsider(component,params);
    }
    analyze(component: Component, builder: MetricResultBuilder, params: any | undefined): void {
        if (component.getComment() != null) {
            builder.processResult(new MetricResult(MAX_SCORE, [], this))
        }
        else {
            let logMessage = new LogMessage("Public component " + component.getQualifiedName() + " is not documented");
            builder.processResult(new MetricResult(MIN_SCORE, [logMessage], this))
        }
    }


}