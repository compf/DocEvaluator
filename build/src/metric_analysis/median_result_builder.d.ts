import { MetricResult } from "./metric_result";
import { MetricResultBuilder } from "./metric_result_builder";
export declare class MedianResultBuilder extends MetricResultBuilder {
    getAggregatedResult(creator: string): MetricResult;
}
