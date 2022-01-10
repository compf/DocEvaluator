import { DocumentationAnalysisMetric } from "./metrics/documentation_analysis_metric";
import { LogMessage } from "./log_message";
import { MetricResult } from "./metric_result";
import { MetricResultBuilder } from "./metric_result_builder";
import { WeightResolver } from "./weight_resolver";

export class WeightedMetricResultBuilder extends MetricResultBuilder {
    protected weightResolver: WeightResolver;
    constructor(weightResolver:WeightResolver ) {
        super();
        this.weightResolver = weightResolver;
    }
    override getAggregatedResult(): MetricResult {
        let resultSum = 0;
        let weightSum = 0;
        let allLogMessages: LogMessage[] = [];
        for (let partialResult of this.resultList) {
            let weight = this.weightResolver.resolveWeight(partialResult.getCreator())!;
            resultSum += (partialResult.getResult() * weight);
            weightSum += weight;
            this.putAllLogMessages(partialResult.getLogMessages(), allLogMessages)
        }
        if (weightSum == 0) weightSum = 1;
        return new MetricResult(resultSum / weightSum, allLogMessages, this.creator!!);
    }
}