import { Component } from "../../parser/parse_result/component";
import { MetricResultBuilder } from "../metric_result_builder";

export const MAX_SCORE = 100;
export const MIN_SCORE = 0;
/**
 * This is the interface for all metrics
 */
export interface DocumentationAnalysisMetric {
    /**
     * should analyze the documentation of a single component and processes the result of the analysis using the given @see[MetricResultBuilder]
     * @param component The Component to analyze
     * @param builder The builder to process all results of the component and its children
     */
    analyze(component: Component, builder: MetricResultBuilder, params: any | undefined): void
    /**
     * 
     * @param component Determines whether a component is worth checking
     * @param params the parameter of the metric, should be the same if calling the analyze method
     */
    shallConsider(component: Component,params:any): boolean;

}