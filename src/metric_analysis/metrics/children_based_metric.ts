import { Component } from "../../parser/parse_result/component";
import { HierarchicalComponent } from "../../parser/parse_result/hierarchical_component";
import { MetricResultBuilder } from "../metric_result_builder";
import { DocumentationAnalysisMetric } from "./documentation_analysis_metric";

export abstract class ChildrenBasedMetric implements DocumentationAnalysisMetric{
 shallConsider(component: Component, params: any): boolean {
     return component instanceof HierarchicalComponent;
 }
 abstract analyze(component: Component, builder: MetricResultBuilder, params: any): void;
 
}