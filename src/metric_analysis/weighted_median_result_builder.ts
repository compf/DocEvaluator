import { LogMessage } from "./log_message";
import { InvalidMetricResult, MetricResult } from "./metric_result";
import { WeightedMetricResultBuilder } from "./weighted_metric_result_builder"

export class WeightedMedianResultBuilder extends WeightedMetricResultBuilder {
    override getAggregatedResult(creator:string): MetricResult {
        let weightResultList: { weight: number, result: number }[] = []
        let weightSum = 0;
        let allLogMessages: LogMessage[] = [];
        for (let partialResult of this.resultList) {
            if(partialResult instanceof InvalidMetricResult)continue;
            let weight = this.weightResolver.resolveWeight(partialResult.getCreator())!;
            weightResultList.push({ weight: weight, result: partialResult.getResult() })
            weightSum += weight;
            this.putAllLogMessages(partialResult.getLogMessages(), allLogMessages);
        }

        if(weightSum==0)return new InvalidMetricResult();
        weightResultList.sort((a, b) => a.weight - b.weight);
        let sum = 0
        for (let weight_result of weightResultList) {
            sum += weight_result.weight;
            if (sum > weightSum / 2) { // might not be totally correct
                return new MetricResult(weight_result.result, allLogMessages, creator);
            }
        }
        return new MetricResult(weightResultList[weightResultList.length - 1].result, allLogMessages, creator);
    }
}