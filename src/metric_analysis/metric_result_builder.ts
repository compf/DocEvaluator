import { LogMessage } from "./log_message";
import { InvalidMetricResult, MetricResult } from "./metric_result";
import { AbstractMetricBuilder } from "./abstract_metric_builder";
/**
 * This class should be called to aggregate many MetricResults and for example an average result
 * For each MetricResult, processResult should be called
 * the final average result can be obtained by getAggregatedResult 
 */
export class MetricResultBuilder extends AbstractMetricBuilder {
    protected resultList: MetricResult[] = []

    override processResult(result: MetricResult) {
        this.resultList.push(result)
    }
    protected putAllLogMessages(src: LogMessage[], dest: LogMessage[]) {
        for (let item of src) {
            dest.push(item)
        }
    }

    /**
     * Creates the aggegrated MetricResult 
     * @returns some kind of aggregation of all results that have been processed
     */
    getAggregatedResult(logMessages:LogMessage[]): number {
        //prevent numberResults from becoming 0
        let numberResults = this.resultList.length;
        if (numberResults == 0) return 0;
        let sum = 0;
        for (let partialResult of this.resultList) {
            if (partialResult instanceof InvalidMetricResult) continue;
            sum += partialResult.getResult();
            this.putAllLogMessages(partialResult.getLogMessages(), logMessages)
        }
        return sum/numberResults;;
    }
    /**
     * reset the builder  to default values
     */
    reset() {
        this.resultList = [];
    }
}