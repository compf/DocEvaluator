import { Component } from "../../parser/parse_result/component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { ComponentBasedMetric } from "./component_based_,metric";
/**
 * This metric assume that methods with more lines of code should be commented more often
 * So methods without comments are punished if they are longer
 */
export declare class SimpleLargeMethodCommentedMetric extends ComponentBasedMetric {
    shallConsider(component: Component): boolean;
    processResult(lines: number, logMessages: string[]): number;
    analyze(component: Component, builder: AbstractMetricBuilder, langSpec: LanguageSpecificHelper): void;
}
