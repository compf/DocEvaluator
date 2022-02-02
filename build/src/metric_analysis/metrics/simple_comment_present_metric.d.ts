import { Component } from "../../parser/parse_result/component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { ComponentBasedMetric } from "./component_based_,metric";
/**
 * This metric simply check whether a comment is present
 */
export declare class SimpleCommentPresentMetric extends ComponentBasedMetric {
    private getterSetterMetric;
    analyze(component: Component, builder: AbstractMetricBuilder, langSpec: LanguageSpecificHelper): void;
    protected processResult(result: number, logMessages: string[]): number;
    shallConsider(component: Component): boolean;
}
