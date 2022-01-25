import { DocumentationAnalysisMetric } from "./metrics/documentation_analysis_metric";
import { LogMessage } from "./log_message";
import { MetricResult } from "./metric_result";
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
    getAggregatedResult(creator:string): MetricResult {
        //prevent numberResults from becoming 0
        let numberResults = this.resultList.length;
        if (numberResults == 0) numberResults = 1;
        let sum = 0;
        let allLogMessages: LogMessage[] = []
        for (let partialResult of this.resultList) {
            sum += partialResult.getResult();
            this.putAllLogMessages(partialResult.getLogMessages(), allLogMessages)
        }
        let result = new MetricResult(sum / numberResults, allLogMessages, creator);
        return result;
    }
    /**
     * reset the builder  to default values
     */
    reset() {
        this.resultList = [];
    }
}