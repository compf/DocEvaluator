import { EvaluatorConf } from "../conf/EvaluatorConf";
import { Component } from "../parser/parse_result/component";
import { FileComponent } from "../parser/parse_result/file_component";
import { DocumentationAnalysisMetric, MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";
import { LogMessage } from "./log_message";
import { MetricResult } from "./metric_result";
import { MetricResultBuilder } from "./metric_result_builder";
import { SimpleCommentPresentMetric } from "./simple_comment_present_metric";

export class SimplePublicMembersOnlyMetric implements DocumentationAnalysisMetric{
    shallConsider(component:Component){
        return component.getComponentMetaInformation().isPublic() && !(component instanceof FileComponent);
    }
    analyze(component: Component, builder: MetricResultBuilder,params:any|undefined): void {
            if(component.getComment()!=null){
                builder.processResult(new MetricResult(MAX_SCORE,[],this))
            }
            else{
                let logMessage=new LogMessage("Public component " + component.getQualifiedName()+" is not documented");
                builder.processResult(new MetricResult(MIN_SCORE,[logMessage],this))
            }
    }
    
    
}