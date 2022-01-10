import { Component } from "../../parser/parse_result/component";
import { HierarchicalComponent } from "../../parser/parse_result/hierarchical_component";
import { MetricResultBuilder } from "../metric_result_builder";
import { DocumentationAnalysisMetric } from "./documentation_analysis_metric";
/**
 * Defines metrics that consider the children of a hierarchical component
 */
export abstract class ChildrenBasedMetric extends DocumentationAnalysisMetric{
 shallConsider(component: Component): boolean {
     return component instanceof HierarchicalComponent;
 }
 abstract analyze(component: Component, builder: MetricResultBuilder): void;
 
}