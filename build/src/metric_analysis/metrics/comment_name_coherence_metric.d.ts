import { Component } from "../../parser/parse_result/component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { ComponentBasedMetric } from "./component_based_,metric";
/**
 * Measures the coherence of comment and name of component
 * This will ensure that a comment does not simply repeat the component's name but contains additional information
 * On the other hand comments that have nothing to do with the name will be punished
 */
export declare class CommentNameCoherenceMetric extends ComponentBasedMetric {
    analyze(component: Component, builder: AbstractMetricBuilder, langSpec: LanguageSpecificHelper): void;
    processResult(result: number, messages: string[]): number;
    private nlp_helper;
    private areSimilar;
    splitByNameConvention(name: string): string[];
}
