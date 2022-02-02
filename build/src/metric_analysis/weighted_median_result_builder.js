"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightedMedianResultBuilder = void 0;
const metric_result_1 = require("./metric_result");
const weighted_metric_result_builder_1 = require("./weighted_metric_result_builder");
class WeightedMedianResultBuilder extends weighted_metric_result_builder_1.WeightedMetricResultBuilder {
    getAggregatedResult(creator) {
        let weightResultList = [];
        let weightSum = 0;
        let allLogMessages = [];
        for (let partialResult of this.resultList) {
            let weight = this.weightResolver.resolveWeight(partialResult.getCreator());
            weightResultList.push({ weight: weight, result: partialResult.getResult() });
            weightSum += weight;
            this.putAllLogMessages(partialResult.getLogMessages(), allLogMessages);
        }
        weightResultList.sort((a, b) => a.weight - b.weight);
        let sum = 0;
        for (let weight_result of weightResultList) {
            sum += weight_result.weight;
            if (sum > weightSum / 2) { // might not be totally correct
                return new metric_result_1.MetricResult(weight_result.result, allLogMessages, creator);
            }
        }
        return new metric_result_1.MetricResult(weightResultList[weightResultList.length - 1].result, allLogMessages, creator);
    }
}
exports.WeightedMedianResultBuilder = WeightedMedianResultBuilder;
//# sourceMappingURL=weighted_median_result_builder.js.map