import { Component } from "../../parser/parse_result/component";
import { HierarchicalComponent } from "../../parser/parse_result/hierarchical_component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { DocumentationAnalysisMetric } from "./documentation_analysis_metric";
/**
 * Defines metrics that consider the children of a hierarchical component
 * Currently only one metric inherits from this class so it is worth considering whether to remove this class
 * and the {@link ComponentBasedMetric} class
 */
export abstract class ChildrenBasedMetric extends DocumentationAnalysisMetric {
    shallConsider(component: Component): boolean {
        return component instanceof HierarchicalComponent;
    }
    abstract analyze(component: Component, builder: AbstractMetricBuilder, langSpec: LanguageSpecificHelper): void;

}