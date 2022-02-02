import { Component } from "../../parser/parse_result/component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { LogMessage } from "../log_message";
export declare const MAX_SCORE = 100;
export declare const MIN_SCORE = 0;
/**
 * This is the abstract base class for all metrics
 */
export declare abstract class DocumentationAnalysisMetric {
    private uniqueName;
    private params;
    /**
     * should analyze the documentation of a single component and processes the result of the analysis using the given @see[MetricResultBuilder]
     * @param component The Component to analyze
     * @param builder The builder to process all results of the component and its children
     */
    abstract analyze(component: Component, builder: AbstractMetricBuilder, langSpec: LanguageSpecificHelper): void;
    /**
     *
     * @param component Determines whether a component is worth checking
     */
    abstract shallConsider(component: Component): boolean;
    constructor(name: string, params: any);
    /**
     * returns an unique name for this metric
     */
    getUniqueName(): string;
    /**
     *
     * @returns  the param of this metric instance
     */
    getParams(): any;
    protected processResult(result: number, logMessages: string[]): number;
    protected pushResult(builder: AbstractMetricBuilder, score: number, logMessages: LogMessage[], component: Component): void;
    protected pushLogMessage(component: Component, msg: string, logMessages: LogMessage[]): void;
    protected createLogMessages(messages: string[], component: Component): LogMessage[];
}
