import { DocumentationAnalysisMetric } from "./metrics/documentation_analysis_metric";
import { LogMessage } from "./log_message";
import { MetricResult } from "./metric_result";
import { MetricResultBuilder } from "./metric_result_builder";

export class WeightedMetricResultBuilder extends MetricResultBuilder {
    protected weightMap: Map<any,number>;
    constructor(weightMap:Map<any,number> ) {
        super();
        this.weightMap = weightMap;
    }
    override getAggregatedResult(): MetricResult {
        let resultSum = 0;
        let weightSum = 0;
        let allLogMessages: LogMessage[] = [];
        for (let partialResult of this.resultList) {
            let weight = this.weightMap.get(partialResult.getCreator())!;
            resultSum += (partialResult.getResult() * weight);
            weightSum += weight;
            this.putAllLogMessages(partialResult.getLogMessages(), allLogMessages)
        }
        if (weightSum == 0) weightSum = 1;
        return new MetricResult(resultSum / weightSum, allLogMessages, this.creator!!);
    }
}