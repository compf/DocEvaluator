import { Component } from "../../parser/parse_result/component";
import { MethodComponent } from "../../parser/parse_result/method_component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { ComponentBasedMetric } from "./component_based_,metric";
import { MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";
export interface ParamsType {

    /**the regex pattern to determine whether a method name is a getter */
    getter_pattern: string,
    /**the regex pattern to determine whether a method name is a setter */
    setter_pattern: string,

    /** if true ignore getters and setters */
    ignore_getter_setter: boolean
}
/**
 * This metric simply check whether a comment is present
 */
export class SimpleCommentPresentMetric extends ComponentBasedMetric {
    analyze(component: Component, builder: AbstractMetricBuilder, langSpec: LanguageSpecificHelper): void {
        let score = 0;
        let logMessages: string[] = []
        if (component.getComment() != null) {
            score = MAX_SCORE;
        }
        else {
            score = MIN_SCORE;
        }
        score = this.processResult(score, logMessages)
        this.pushResult(builder, score, this.createLogMessages(logMessages, component), component);
    }
    protected processResult(result: number, logMessages: string[]): number {
        if (result == MIN_SCORE)
            logMessages.push("Component has no documentation")
        return result;

    }
    /**
   * 
   * @param component checks whether a method could 
   * @param params 
   * @returns 
   */
    private isGetterOrSetter(component: Component, params: ParamsType): boolean {

        if (component instanceof MethodComponent) {
            return this.isGetter(component, params) || this.isSetter(component, params);
        }
        else {
            return false;
        }
    }
    private isGetter(component: MethodComponent, params: ParamsType): boolean {
        let name = component.getName();
        let nameValid = name.match(params.getter_pattern) != null;
        let noParameter = component.getParams().length == 0;
        let hasReturnType = component.getReturnType() != "void";
        return nameValid && noParameter && hasReturnType;
    }
    private isSetter(component: MethodComponent, params: ParamsType): boolean {
        let name = component.getName();
        let nameValid = name.match(params.setter_pattern) != null;
        let oneParameter = component.getParams().length == 1;
        let hasNoReturnType = component.getReturnType() == "void";
        return nameValid && oneParameter && hasNoReturnType;
    }
    override shallConsider(component: Component): boolean {
        let params = this.getParams() as ParamsType;
        let consider = super.shallConsider(component);
        if (params != undefined && params.ignore_getter_setter) {
            return consider && !this.isGetterOrSetter(component, params);
        }
        return consider;
    }


}