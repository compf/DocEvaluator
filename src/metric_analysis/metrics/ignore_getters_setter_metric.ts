

import { Component } from "../../parser/parse_result/component";
import { MethodComponent } from "../../parser/parse_result/method_component";
export interface GetterSetterParamsType { 
    /**the regex pattern to determine whether a method name is a getter */
    getter_pattern: string,
    /**the regex pattern to determine whether a method name is a setter */
     setter_pattern: string 
    }
/**
 * This class expose a shallConsider method to ignore getters and setters
 */
export class IgnoreGetterSetterMetric {
    public shallConsider(component: Component, params: GetterSetterParamsType): boolean {

        if (component instanceof MethodComponent) {
            return !this.isGetter(component, params) && !this.isSetter(component, params);
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