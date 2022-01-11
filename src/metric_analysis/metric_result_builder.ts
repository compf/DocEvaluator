import { DocumentationAnalysisMetric } from "./metrics/documentation_analysis_metric";
import { LogMessage } from "./log_message";
import { MetricResult } from "./metric_result";
/**
 * This class should be called to aggregate many MetricResults and for example an average result
 * For each MetricResult, processResult should be called
 * the final average result can be obtained by getAggregatedResult 
 */
export class MetricResultBuilder {
    protected resultList: MetricResult[] = []
    /**
     * Process a MetricResult in order to  aggregate them
     * The log message of the result will be included in the new result
     * @param result  
     */
    processResult(result: MetricResult) {
        this.resultList.push(result)
    }
    protected putAllLogMessages(src: LogMessage[], dest: LogMessage[]) {
        for (let item of src) {
            dest.push(item)
        }
    }
    /**
     * Find the creator of all results
     * If the there is only one unqie creator in the resultList, this will be the creator
     * Otherwise the creator given will be used
     * @param creator the creator to be used if there are different creators in the resultList
     * @returns a valid creator
     */
    protected resolveCreator(creator:string):string{
        let result_creator_set=new Set(this.resultList.map((r)=>r.getCreator()));
        if(result_creator_set.size>1){
            return creator;
        }
        else{
            for(let s of result_creator_set){
                return s;
            }
            return "";
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