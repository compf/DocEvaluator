import { MetricResult } from "./metric_result";
import { MetricResultBuilder } from "./metric_result_builder";
import { WeightResolver } from "./weight_resolver";
export declare class WeightedMetricResultBuilder extends MetricResultBuilder {
    protected weightResolver: WeightResolver;
    constructor(weightResolver: WeightResolver);
    getAggregatedResult(creator: string): MetricResult;
}
