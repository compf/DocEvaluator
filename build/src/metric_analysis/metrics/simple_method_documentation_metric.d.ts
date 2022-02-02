import { Component } from "../../parser/parse_result/component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { ComponentBasedMetric } from "./component_based_,metric";
/**
 * This metric checks whether the return value and all parameters of a method are documented
 */
export declare class SimpleMethodDocumentationMetric extends ComponentBasedMetric {
    shallConsider(component: Component): boolean;
    analyze(component: Component, builder: AbstractMetricBuilder, langSpec: LanguageSpecificHelper): void;
    private checkNonExistingDocumentedParameters;
    private checkMethodParams;
}
