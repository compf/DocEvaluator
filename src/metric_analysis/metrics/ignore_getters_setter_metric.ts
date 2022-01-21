

import { Component } from "../../parser/parse_result/component";
import { FileComponent } from "../../parser/parse_result/file_component";
import { MethodComponent } from "../../parser/parse_result/method_component";
import { SimpleCommentPresentMetric } from "./simple_comment_present_metric";
export interface GetterSetterParamsType { getter_pattern: string, setter_pattern: string }
/**
 * This metric works the same as the simple comment present metric but ignores getter/setters
 */
export class IgnoreGetterSetterMetric {
    public shallConsider(component: Component, params: GetterSetterParamsType): boolean {

        if (component instanceof MethodComponent) {
            let method = component as MethodComponent;
            return !this.isGetter(method, params) && !this.isSetter(method, params);
        }
        else {
            return true;
        }
    }
    private isGetter(component: MethodComponent, params: GetterSetterParamsType): boolean {
        let name = component.getName();
        let nameValid = name.match(params.getter_pattern) != null;
        let noParameter = component.getParams().length == 0;
        let hasReturnType = component.getReturnType() != "void";
        return nameValid && noParameter && hasReturnType;
    }
    private isSetter(component: MethodComponent, params: GetterSetterParamsType): boolean {
        let name = component.getName();
        let nameValid = name.match(params.setter_pattern) != null;
        let oneParameter = component.getParams().length == 1;
        let hasNoReturnType = component.getReturnType() == "void";
        return nameValid && oneParameter && hasNoReturnType;
    }
}