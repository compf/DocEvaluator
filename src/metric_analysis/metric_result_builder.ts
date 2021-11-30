import { DocumentationAnalysisMetric } from "./documentation_analysis_metric";
import { LogMessage } from "./log_message";
import { MetricResult } from "./metric_result";
/**
 * This class should be called to aggregate many MetricResults and for example an average result
 * For each MetricResult, processResult should be called
 * the final average result can be obtained by getAggregatedResult 
 */
export class MetricResultBuilder {
    protected creator: DocumentationAnalysisMetric | MetricResultBuilder | null = null;
    protected resultList: MetricResult[] = []
    /**
     * Process a MetricResult in order to  aggregate them
     * The log message of the result will be included in the new result
     * @param result  
     */
    processResult(result: MetricResult) {
        this.resultList.push(result)
        if (this.creator == null) {
            this.creator = result.getCreator();
        }
        else if (this.creator != result.getCreator()) {
            this.creator = this;
        }

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
    getAggregatedResult(): MetricResult {
        //prevent numberResults from becoming 0
        let numberResults = this.resultList.length;
        if (numberResults == 0) numberResults = 1;
        let sum = 0;
        let allLogMessages: LogMessage[] = []
        for (let partialResult of this.resultList) {
            sum += partialResult.getResult();
            this.putAllLogMessages(partialResult.getLogMessages(), allLogMessages)
        }
        let result = new MetricResult(sum / numberResults, allLogMessages, this.creator!!);
        return result;
    }
    /**
     * reset the builder  to default values
     */
    reset() {
        this.resultList = [];
    }
}