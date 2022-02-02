import { Component } from "../../parser/parse_result/component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { DocumentationAnalysisMetric } from "./documentation_analysis_metric";
/**
 * Defines metrics that consider the children of a hierarchical component
 */
export declare abstract class ChildrenBasedMetric extends DocumentationAnalysisMetric {
    shallConsider(component: Component): boolean;
    abstract analyze(component: Component, builder: AbstractMetricBuilder, langSpec: LanguageSpecificHelper): void;
}
