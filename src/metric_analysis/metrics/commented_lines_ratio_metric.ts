import { Component } from "../../parser/parse_result/component";
import { HierarchicalComponent } from "../../parser/parse_result/hierarchical_component";
import { MethodComponent } from "../../parser/parse_result/method_component";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { MetricResultBuilder } from "../metric_result_builder";
import { ChildrenBasedMetric } from "./children_based_metric";
import { MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";
interface ParamType {
    /**A list of strings to determine which lines should be ignored */
    ignore_lines: string[] | undefined
}
/**
 * This metric calculates how many lines of the hierarchical component are covered by 
 * undocumented methods and how many lines are covered by documented methods.
 * It returns the percentage of documented lines
 */
export class CommentedLinesRatioMetric extends ChildrenBasedMetric {
    analyze(component: Component, builder: MetricResultBuilder, langSpec: LanguageSpecificHelper): void {
        let params = this.getParams() as ParamType;
        let cls = component as HierarchicalComponent;
        let methods = cls.getChildren().filter((c) => c instanceof MethodComponent).map((c) => c as MethodComponent);
        let commentedLOC = 0;
        let uncommentedLOC = 0;
        let ignoreLines = [""];
        if (params != undefined && params.ignore_lines != undefined) {
            ignoreLines = params.ignore_lines;
        }
        for (let method of methods) {
            let loc = method.getLinesOfCode(ignoreLines);
            if (method.getComment() == null) {
                uncommentedLOC += loc;
            }
            else {
                commentedLOC += loc;
            }
        }
        if (commentedLOC + uncommentedLOC == 0) {
            uncommentedLOC = 1; // prevent divison by zero
        }
        let perc = commentedLOC / (commentedLOC + uncommentedLOC);
        let result = MIN_SCORE + (MAX_SCORE - MIN_SCORE) * perc;
        this.pushResult(builder, this.processResult(result, []), [], component);
    }
    shallConsider(component: Component,): boolean {
        return super.shallConsider(component) && (component as HierarchicalComponent).getChildren().filter((c) => c instanceof MethodComponent).length > 0
    }

}