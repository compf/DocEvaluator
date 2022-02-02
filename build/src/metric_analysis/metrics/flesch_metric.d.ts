import { Component } from "../../parser/parse_result/component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { ComponentBasedMetric } from "./component_based_,metric";
/**
 * This metric calculate the flesh score which describes the readability of a text
 */
export declare class FleschMetric extends ComponentBasedMetric {
    analyze(component: Component, builder: AbstractMetricBuilder, langSpec: LanguageSpecificHelper): void;
    processResult(score: number, msgs: string[]): number;
    quadratic(root1: number, root2: number, a: number, x: number): number;
    private getTextToConsider;
    private calcFleshKincaid;
}
