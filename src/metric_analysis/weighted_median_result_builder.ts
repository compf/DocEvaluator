import { LogMessage } from "./log_message";
import { InvalidMetricResult, MetricResult } from "./metric_result";
import { WeightedMetricResultBuilder } from "./weighted_metric_result_builder"

export class WeightedMedianResultBuilder extends WeightedMetricResultBuilder {
    override getAggregatedResult(logMessages:LogMessage[]): number {
        let weightResultList: { weight: number, result: number }[] = []
        let weightSum = 0;
        for (let partialResult of this.resultList) {
            if (partialResult instanceof InvalidMetricResult) continue;
            let weight = this.calcWeightProduct(partialResult.getCreators())
            weightResultList.push({ weight: weight, result: partialResult.getResult() })
            weightSum += weight;
            this.putAllLogMessages(partialResult.getLogMessages(), logMessages);
        }

        if (weightSum == 0) return 0;
        weightResultList.sort((a, b) => a.weight - b.weight);
        let sum = 0
        for (let weight_result of weightResultList) {
            sum += weight_result.weight;
            if (sum > weightSum / 2) { // might not be totally correct
                return weight_result.result
            }
        }
        return weightResultList[weightResultList.length - 1].result;
    }
}