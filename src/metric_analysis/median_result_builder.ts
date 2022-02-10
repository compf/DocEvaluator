import { LogMessage } from "./log_message";
import { InvalidMetricResult, MetricResult } from "./metric_result";
import { MetricResultBuilder } from "./metric_result_builder";

export class MedianResultBuilder extends MetricResultBuilder {
    override getAggregatedResult(creator: string): MetricResult {
        if (this.resultList.length == 0) return new InvalidMetricResult();
        this.resultList = this.resultList.filter((x) => !(x instanceof InvalidMetricResult));
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
        let allLogMessages: LogMessage[] = []
        for (let partialResult of this.resultList) {
            this.putAllLogMessages(partialResult.getLogMessages(), allLogMessages);
        }
        return new MetricResult(median, allLogMessages, creator);


    }
}