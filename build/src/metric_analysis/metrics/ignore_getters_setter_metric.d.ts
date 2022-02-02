import { Component } from "../../parser/parse_result/component";
export interface GetterSetterParamsType {
    getter_pattern: string;
    setter_pattern: string;
}
/**
 * This class expose a shallConsider method to ignore getters and setters
 */
export declare class IgnoreGetterSetterMetric {
    shallConsider(component: Component, params: GetterSetterParamsType): boolean;
    private isGetter;
    private isSetter;
}
