"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleMethodDocumentationMetric = void 0;
const method_component_1 = require("../../parser/parse_result/method_component");
const structured_comment_1 = require("../../parser/parse_result/structured_comment");
const component_based__metric_1 = require("./component_based_,metric");
const documentation_analysis_metric_1 = require("./documentation_analysis_metric");
/**
 * This metric checks whether the return value and all parameters of a method are documented
 */
class SimpleMethodDocumentationMetric extends component_based__metric_1.ComponentBasedMetric {
    shallConsider(component) {
        return super.shallConsider(component) && component instanceof method_component_1.MethodComponent;
    }
    analyze(component, builder, langSpec) {
        let logMessages = [];
        let method = component;
        let score = 0;
        if (method.getComment() != null) {
            let comment = method.getComment();
            let paramsResult = this.checkMethodParams(method, logMessages);
            let nonExistingParamResult = this.checkNonExistingDocumentedParameters(method, logMessages);
            let returnExisting = method.getName() == "constructor" || method.getReturnType() == "void" || comment.getTags().some((t) => t.getKind() == structured_comment_1.StructuredCommentTagKind.RETURN);
            let returnExistingResult = returnExisting ? documentation_analysis_metric_1.MAX_SCORE : documentation_analysis_metric_1.MIN_SCORE;
            let results = [paramsResult, nonExistingParamResult, returnExistingResult];
            langSpec.rateDocumentationCompatibility(component, results, logMessages);
            let sum = 0;
            for (let s of results) {
                sum += s;
            }
            score = sum / results.length;
        }
        this.pushResult(builder, score, logMessages, component);
    }
    checkNonExistingDocumentedParameters(method, logMessages) {
        var _a;
        let comment = method.getComment();
        let matchingParamsCount = 0;
        let paramsTags = comment.getTags().filter((t) => t.getKind() == structured_comment_1.StructuredCommentTagKind.PARAM);
        if (paramsTags.length == 0) {
            return documentation_analysis_metric_1.MAX_SCORE;
        }
        for (let tag of paramsTags) {
            if (method.getParams().some((t) => t.name == tag.getParam())) {
                matchingParamsCount++;
            }
            else {
                let paramName = (_a = tag.getParam()) !== null && _a !== void 0 ? _a : "Unnamed";
                this.pushLogMessage(method, "Parameter " + paramName + " is documented but has no matching method param", logMessages);
            }
        }
        return matchingParamsCount / paramsTags.length * 100;
    }
    checkMethodParams(method, logMessages) {
        let comment = method.getComment();
        if (method.getParams().length == 0) {
            return documentation_analysis_metric_1.MAX_SCORE;
        }
        let matchingParamsCount = 0;
        for (let param of method.getParams()) {
            let tagMatchFound = comment.getTags().some((t) => t.getKind() == structured_comment_1.StructuredCommentTagKind.PARAM && t.getParam() == param.name);
            if (tagMatchFound) {
                matchingParamsCount++;
            }
            else {
                this.pushLogMessage(method, "Parameter " + param.name + " is not documented", logMessages);
            }
        }
        return matchingParamsCount / method.getParams().length * 100;
    }
}
exports.SimpleMethodDocumentationMetric = SimpleMethodDocumentationMetric;
//# sourceMappingURL=simple_method_documentation_metric.js.map