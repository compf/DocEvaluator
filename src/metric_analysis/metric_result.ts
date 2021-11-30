import { DocumentationAnalysisMetric } from "./documentation_analysis_metric";
import { LogMessage } from "./log_message";
import { MetricResultBuilder } from "./metric_result_builder";

export class MetricResult {
    private result: number;
    private logMessages: LogMessage[];
    private creator: DocumentationAnalysisMetric | MetricResultBuilder;
    constructor(res: number, msgs: LogMessage[], creator: DocumentationAnalysisMetric | MetricResultBuilder) {
        this.result = res;
        this.logMessages = msgs;
        this.creator = creator;
    }
    /**
     * Getter to obtain the numerical score of the MetricResult
     * @returns The numerical score of the result
     */
    public getResult(): number {
        return this.result;
    }
    /**
     * Getter for all LogMessages that are part of this result
     * @returns a list of log messages
     */
    public getLogMessages(): LogMessage[] {
        return this.logMessages;
    }

    /**
     * Getter for the creator of this result. This could be a metric or a builder depending on whether the result
     * was created by a metric or is an aggregrated result by a builder
     * @returns 
     */
    public getCreator(): DocumentationAnalysisMetric | MetricResultBuilder {
        return this.creator;
    }
}