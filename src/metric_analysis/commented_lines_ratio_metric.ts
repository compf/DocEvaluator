import { Component } from "../parser/parse_result/component";
import { HierarchicalComponent } from "../parser/parse_result/hierarchical_component";
import { MethodComponent } from "../parser/parse_result/method_component";
import { DocumentationAnalysisMetric, MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";
import { MetricResult } from "./metric_result";
import { MetricResultBuilder } from "./metric_result_builder";

export class CommentedLinesRatioMetric implements DocumentationAnalysisMetric {
    analyze(component: Component, builder: MetricResultBuilder, params: any): void {
        let cls = component as HierarchicalComponent;
        let methods = cls.getChildren().filter((c) => c instanceof MethodComponent).map((c) => c as MethodComponent);
        let commentedLOC = 0;
        let unCommentedLOC = 0;
        let ignoreLines = [""];
        if (params != undefined && params.ignoreLines != undefined) {
            ignoreLines = params.ignoreLines;
        }
        for (let method of methods) {
            let loc = method.getLinesOfCode(ignoreLines);
            if (method.getComment() == null) {
                unCommentedLOC += loc;
            }
            else {
                commentedLOC += loc;
            }
        }
        let perc = commentedLOC / (commentedLOC + unCommentedLOC);
        let result = MIN_SCORE + (MAX_SCORE - MIN_SCORE) * perc;
        builder.processResult(new MetricResult(result, [], this));
    }
    shallConsider(component: Component,params:any): boolean {
        return component instanceof HierarchicalComponent && (component as HierarchicalComponent).getChildren().filter((c) => c instanceof MethodComponent).length > 0
    }

}