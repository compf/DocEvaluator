"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricResultBuilder = void 0;
const metric_result_1 = require("./metric_result");
const abstract_metric_builder_1 = require("./abstract_metric_builder");
/**
 * This class should be called to aggregate many MetricResults and for example an average result
 * For each MetricResult, processResult should be called
 * the final average result can be obtained by getAggregatedResult
 */
class MetricResultBuilder extends abstract_metric_builder_1.AbstractMetricBuilder {
    constructor() {
        super(...arguments);
        this.resultList = [];
    }
    processResult(result) {
        this.resultList.push(result);
    }
    putAllLogMessages(src, dest) {
        for (let item of src) {
            dest.push(item);
        }
    }
    /**
     * Creates the aggegrated MetricResult
     * @returns some kind of aggregation of all results that have been processed
     */
    getAggregatedResult(creator) {
        //prevent numberResults from becoming 0
        let numberResults = this.resultList.length;
        if (numberResults == 0)
            numberResults = 1;
        let sum = 0;
        let allLogMessages = [];
        for (let partialResult of this.resultList) {
            sum += partialResult.getResult();
            this.putAllLogMessages(partialResult.getLogMessages(), allLogMessages);
        }
        let result = new metric_result_1.MetricResult(sum / numberResults, allLogMessages, creator);
        return result;
    }
    /**
     * reset the builder  to default values
     */
    reset() {
        this.resultList = [];
    }
}
exports.MetricResultBuilder = MetricResultBuilder;
//# sourceMappingURL=metric_result_builder.js.map