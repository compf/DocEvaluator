import { Component } from "../../parser/parse_result/component";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { MetricResultBuilder } from "../metric_result_builder";
import { DocumentationAnalysisMetric } from "./documentation_analysis_metric";
/**
 * Defines metrics that only check the comment associated with the component
 */
export declare abstract class ComponentBasedMetric extends DocumentationAnalysisMetric {
    shallConsider(component: Component): boolean;
    abstract analyze(component: Component, builder: MetricResultBuilder, langSpec: LanguageSpecificHelper): void;
}
