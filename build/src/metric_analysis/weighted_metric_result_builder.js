"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightedMetricResultBuilder = void 0;
const metric_result_1 = require("./metric_result");
const metric_result_builder_1 = require("./metric_result_builder");
class WeightedMetricResultBuilder extends metric_result_builder_1.MetricResultBuilder {
    constructor(weightResolver) {
        super();
        this.weightResolver = weightResolver;
    }
    getAggregatedResult(creator) {
        let resultSum = 0;
        let weightSum = 0;
        let allLogMessages = [];
        for (let partialResult of this.resultList) {
            let weight = this.weightResolver.resolveWeight(partialResult.getCreator());
            resultSum += (partialResult.getResult() * weight);
            weightSum += weight;
            this.putAllLogMessages(partialResult.getLogMessages(), allLogMessages);
        }
        if (weightSum == 0)
            weightSum = 1;
        return new metric_result_1.MetricResult(resultSum / weightSum, allLogMessages, creator);
    }
}
exports.WeightedMetricResultBuilder = WeightedMetricResultBuilder;
//# sourceMappingURL=weighted_metric_result_builder.js.map