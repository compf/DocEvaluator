import { Component } from "../parser/parse_result/component";
import { MetricResult } from "./metric_result";
import { MetricResultBuilder } from "./metric_result_builder";
export const MAX_SCORE=100;
export const MIN_SCORE=0;
export interface DocumentationAnalysisMetric{
    /**
     * should analyze the documentation of a single component and returns a @see{MetricResult}
     * that contains log messages and a numerical score of the documentation
     */
    analyze(component:Component,builder:MetricResultBuilder):void
    getName():string;
    
}