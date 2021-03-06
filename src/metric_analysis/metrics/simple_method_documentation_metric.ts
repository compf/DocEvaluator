import { Component } from "../../parser/parse_result/component";
import { MethodComponent } from "../../parser/parse_result/method_component";
import { StructuredCommentTagKind } from "../../parser/parse_result/structured_comment";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { LogMessage } from "../log_message";
import { ComponentBasedMetric } from "./component_based_,metric";
import { MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";

/**
 * This metric checks whether the return value and all parameters of a method are documented
 */
export class SimpleMethodDocumentationMetric extends ComponentBasedMetric {
    shallConsider(component: Component) {
        return super.shallConsider(component) && component instanceof MethodComponent;
    }
    analyze(component: Component, builder: AbstractMetricBuilder, langSpec: LanguageSpecificHelper): void {
        let logMessages: LogMessage[] = [];
        let method = component as MethodComponent;
        let score = 0;
        if (method.getComment() != null) {
            let comment = method.getComment()!!;
            let paramsResult = this.checkMethodParams(method, logMessages);
            let nonExistingParamResult = this.checkNonExistingDocumentedParameters(method, logMessages);
            let returnExisting = method.getName() == "constructor" || method.getReturnType() == "void" || comment.getTags().some((t) => t.getKind() == StructuredCommentTagKind.RETURN && t.getDescription()!="");
            let returnExistingResult = returnExisting ? MAX_SCORE : MIN_SCORE;
            if(!returnExisting){
                this.pushLogMessage(method, "Return value is not documented" , logMessages)

            }
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
/**
 * checks whether parameters were documented although they don't exist
 * @param method the component to analyze
 * @param logMessages  will be used to push log messages
 * @returns  the number of documented parameters that are actually parameters
 */
    private checkNonExistingDocumentedParameters(method: MethodComponent, logMessages: LogMessage[]): number {
        let comment = method.getComment()!!
        let matchingParamsCount = 0;
        let paramsTags = comment.getTags().filter((t) => t.getKind() == StructuredCommentTagKind.PARAM);
        if (paramsTags.length == 0) {
            return MAX_SCORE;
        }
        for (let tag of paramsTags) {
            if (method.getParams().some((t) => t.name == tag.getParam())) {
                matchingParamsCount++;
            }
            else {
                let paramName = tag.getParam() ?? "Unnamed";
                this.pushLogMessage(method, "Parameter " + paramName + " is documented but has no matching method param", logMessages)
            }
        }
        return matchingParamsCount / paramsTags.length * 100;
    }
    private checkMethodParams(method: MethodComponent, logMessages: LogMessage[]): number {
        let comment = method.getComment()!!
        if (method.getParams().length == 0) {
            return MAX_SCORE;
        }

        let matchingParamsCount = 0
        for (let param of method.getParams()) {
            let tagMatchFound = comment.getTags().some((t) => t.getKind() == StructuredCommentTagKind.PARAM && t.getParam() == param.name && t.getDescription()!=null);
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