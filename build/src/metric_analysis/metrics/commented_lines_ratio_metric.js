"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentedLinesRatioMetric = void 0;
const method_component_1 = require("../../parser/parse_result/method_component");
const children_based_metric_1 = require("./children_based_metric");
const documentation_analysis_metric_1 = require("./documentation_analysis_metric");
/**
 * This metric calculates how many lines of the hierarchical component are covered by
 * undocumented methods and how many lines are covered by documented methods.
 * It returns the percentage of documented lines
 */
class CommentedLinesRatioMetric extends children_based_metric_1.ChildrenBasedMetric {
    analyze(component, builder, langSpec) {
        let params = this.getParams();
        let cls = component;
        let methods = cls.getChildren().filter((c) => c instanceof method_component_1.MethodComponent).map((c) => c);
        let commentedLOC = 0;
        let unCommentedLOC = 0;
        let ignoreLines = [""];
        if (params != undefined && params.ignore_lines != undefined) {
            ignoreLines = params.ignore_lines;
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
        if (commentedLOC + unCommentedLOC == 0) {
            unCommentedLOC = 1; // prevent divison by zero
        }
        let perc = commentedLOC / (commentedLOC + unCommentedLOC);
        let result = documentation_analysis_metric_1.MIN_SCORE + (documentation_analysis_metric_1.MAX_SCORE - documentation_analysis_metric_1.MIN_SCORE) * perc;
        this.pushResult(builder, this.processResult(result, []), [], component);
    }
    shallConsider(component) {
        return super.shallConsider(component) && component.getChildren().filter((c) => c instanceof method_component_1.MethodComponent).length > 0;
    }
}
exports.CommentedLinesRatioMetric = CommentedLinesRatioMetric;
//# sourceMappingURL=commented_lines_ratio_metric.js.map