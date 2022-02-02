"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedianResultBuilder = void 0;
const metric_result_1 = require("./metric_result");
const metric_result_builder_1 = require("./metric_result_builder");
class MedianResultBuilder extends metric_result_builder_1.MetricResultBuilder {
    getAggregatedResult(creator) {
        this.resultList.sort((a, b) => a.getResult() - b.getResult());
        let median = 0;
        if (this.resultList.length % 2 == 0) {
            let middleIndex = Math.floor((this.resultList.length - 1) / 2);
            median = (this.resultList[middleIndex].getResult() + this.resultList[middleIndex + 1].getResult()) / 2;
        }
        else {
            let middleIndex = Math.floor(this.resultList.length / 2);
            median = this.resultList[middleIndex].getResult();
        }
        let allLogMessages = [];
        for (let partialResult of this.resultList) {
            this.putAllLogMessages(partialResult.getLogMessages(), allLogMessages);
        }
        return new metric_result_1.MetricResult(median, allLogMessages, creator);
    }
}
exports.MedianResultBuilder = MedianResultBuilder;
//# sourceMappingURL=median_result_builder.js.map