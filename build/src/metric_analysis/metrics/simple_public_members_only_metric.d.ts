import { Component } from "../../parser/parse_result/component";
import { SimpleCommentPresentMetric } from "./simple_comment_present_metric";
/**
 * This metric only consider public members but otherwise it works the same as the SimpleCommentPresent
 */
export declare class SimplePublicMembersOnlyMetric extends SimpleCommentPresentMetric {
    shallConsider(component: Component): boolean;
    protected processResult(result: number, logMessages: string[]): number;
}
