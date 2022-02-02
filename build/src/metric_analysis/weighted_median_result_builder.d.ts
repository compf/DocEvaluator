import { MetricResult } from "./metric_result";
import { WeightedMetricResultBuilder } from "./weighted_metric_result_builder";
export declare class WeightedMedianResultBuilder extends WeightedMetricResultBuilder {
    getAggregatedResult(creator: string): MetricResult;
}
