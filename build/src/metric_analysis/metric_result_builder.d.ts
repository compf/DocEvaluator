import { LogMessage } from "./log_message";
import { MetricResult } from "./metric_result";
import { AbstractMetricBuilder } from "./abstract_metric_builder";
/**
 * This class should be called to aggregate many MetricResults and for example an average result
 * For each MetricResult, processResult should be called
 * the final average result can be obtained by getAggregatedResult
 */
export declare class MetricResultBuilder extends AbstractMetricBuilder {
    protected resultList: MetricResult[];
    processResult(result: MetricResult): void;
    protected putAllLogMessages(src: LogMessage[], dest: LogMessage[]): void;
    /**
     * Creates the aggegrated MetricResult
     * @returns some kind of aggregation of all results that have been processed
     */
    getAggregatedResult(creator: string): MetricResult;
    /**
     * reset the builder  to default values
     */
    reset(): void;
}
