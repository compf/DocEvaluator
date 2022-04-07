import { Component } from "../../parser/parse_result/component";
import { MIN_SCORE } from "./documentation_analysis_metric";
import { SimpleCommentPresentMetric } from "./simple_comment_present_metric";

/**
 * This metric only considers public members but otherwise it works the same as the SimpleCommentPresent
 */
export class SimplePublicMembersOnlyMetric extends SimpleCommentPresentMetric {
    shallConsider(component: Component) {
        return component.getComponentMetaInformation().isPublic() && super.shallConsider(component);
    }
    protected processResult(result: number, logMessages: string[]): number {
        if (result == MIN_SCORE)
            logMessages.push("Public member has no documentation");
        return result;

    }



}