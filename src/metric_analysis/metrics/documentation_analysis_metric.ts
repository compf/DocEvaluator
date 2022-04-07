import { Component } from "../../parser/parse_result/component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { LogMessage } from "../log_message";
import { MetricResult } from "../metric_result";

export const MAX_SCORE = 100;
export const MIN_SCORE = 0;
/**
 * This is the abstract base class for all metrics
 */
export abstract class DocumentationAnalysisMetric {
    private uniqueName: string;
    private params: any;
    /**
     * should analyze the documentation of a single component and processes the result of the analysis using the given @see[MetricResultBuilder]
     * @param component The Component to analyze
     * @param builder The builder to process all results of the component and its children
     */
    public abstract analyze(component: Component, builder: AbstractMetricBuilder, langSpec: LanguageSpecificHelper): void
    /**
     *  Determines whether a component is worth checking
     * @param component the component to check
     */
    public abstract shallConsider(component: Component): boolean;

    public constructor(name: string, params: any) {
        this.uniqueName = name;
        this.params = params;
    }
    /**
     * returns an unique name for this metric
     */
    public getUniqueName(): string {
        return this.uniqueName;
    }
    /**
     * 
     * @returns  the param of this metric instance
     */
    public getParams(): any {
        return this.params;
    }
    protected processResult(result: number, logMessages: string[]): number {
        return result;
    }
    /**
     * a helper method to reduce complexity in metrics
     * adds a result to the builder and used information from the metric
     * @param builder the MetricResultBuilder
     * @param score the score of the metric result
     * @param logMessages  all log messages that have been generated
     * @param component the component currently analyzed
     */
    protected pushResult(builder: AbstractMetricBuilder, score: number, logMessages: LogMessage[], component: Component) {
        const componentName=component.constructor.name;
        const uniqueName=this.getUniqueName();
        const filePath=component.getTopParent().getName();
        const creatorTuple={path:filePath,metric:uniqueName,component:componentName};
        builder.processResult(new MetricResult(score, logMessages, creatorTuple));
    }
    /**push all log messages to the logMessages array
     * 
     * @param component the component this log message applies to
     * @param msg the log message that contains the relevant information
     * @param logMessages the list of log messages to be returned by the metric
     */
    protected pushLogMessage(component: Component, msg: string, logMessages: LogMessage[]) {

        logMessages.push(new LogMessage(msg, component,this.getUniqueName()));
    }
    /**
     * 
     * @param messages a list of log messages from a metric
     * @param component a component the log messages apply to
     * @returns 
     */
    protected createLogMessages(messages: string[], component: Component) {
        let result: LogMessage[] = []
        for (let msg of messages) {
            this.pushLogMessage(component, msg, result);
        }
        return result;
    }

}