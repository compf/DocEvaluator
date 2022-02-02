import { Component } from "../../parser/parse_result/component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { ComponentBasedMetric } from "./component_based_,metric";
/**
 * Punishes comments with abbreviation as they are usually harder to read
 */
export declare class CertainTermCountMetric extends ComponentBasedMetric {
    private nlp_helper;
    analyze(component: Component, builder: AbstractMetricBuilder, langSpec: LanguageSpecificHelper): void;
    constructor(uniqueName: string, params: any);
    private countSimilarTerms;
    protected processResult(result: number, logMessages: string[]): number;
}
