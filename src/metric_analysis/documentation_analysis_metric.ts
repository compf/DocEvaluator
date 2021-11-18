import { EvaluatorConf } from "../conf/EvaluatorConf";
import { Component } from "../parser/parse_result/component";
import { MetricResult } from "./metric_result";
import { MetricResultBuilder } from "./metric_result_builder";
export const MAX_SCORE=100;
export const MIN_SCORE=0;
export interface DocumentationAnalysisMetric{
    /**
     * should analyze the documentation of a single component and processes the result of the analysis using the given @see[MetricResultBuilder]
     * @param component The Component to analyze
     * @param builder The builder to process all results of the component and its children
     */
    analyze(component:Component,builder:MetricResultBuilder,conf:EvaluatorConf):void
    /**
     * should return a unique name for a metric
     */
    getName():string;
    
}