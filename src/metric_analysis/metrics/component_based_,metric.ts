import { Component } from "../../parser/parse_result/component";
import { FileComponent } from "../../parser/parse_result/file_component";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { MetricResultBuilder } from "../metric_result_builder";
import { DocumentationAnalysisMetric } from "./documentation_analysis_metric";
/**
 * Defines metrics that only check the comment associated with the component
 */
export abstract class ComponentBasedMetric extends DocumentationAnalysisMetric {
    shallConsider(component: Component): boolean {
        return !(component instanceof FileComponent);
    }
    abstract analyze(component: Component, builder: MetricResultBuilder, langSpec: LanguageSpecificHelper): void;
}