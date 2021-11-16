import { Component } from "../parser/parse_result/component";
import { DocumentationAnalysisMetric } from "./documentation_analysis_metric";
import { MetricResultBuilder } from "./metric_result_builder";
import { SimpleCommentPresentMetric } from "./simple_comment_present_metric";

export class SimplePublicMembersOnlyMetric implements DocumentationAnalysisMetric{
    analyze(component: Component, builder: MetricResultBuilder): void {
        if(component.getComponentMetaInformation().isPublic()){
            return new SimpleCommentPresentMetric().analyze(component,builder);
        }
    }
    getName(){
        return "Simple_Public_Members_Only_Comment_present";
    }
    
}