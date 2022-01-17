import { Component } from "../../parser/parse_result/component";
import { FileComponent } from "../../parser/parse_result/file_component";
import { LogMessage } from "../log_message";
import { MetricResult } from "../metric_result";
import { MetricResultBuilder } from "../metric_result_builder";
import { ComponentBasedMetric } from "./component_based_,metric";
import { DocumentationAnalysisMetric, MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";
import { SimpleCommentPresentMetric } from "./simple_comment_present_metric";

/**
 * This metric only consider public members but otherwise it works the same as the SimpleCommentPresent
 */
export class SimplePublicMembersOnlyMetric extends SimpleCommentPresentMetric {
    shallConsider(component: Component) {
        return component.getComponentMetaInformation().isPublic() && super.shallConsider(component);
    }
    protected processResult(result: number, logMessages: string[]): number {
        logMessages.push("Public member has no documentation");
        return result;

    }
  


}