import { LogMessage } from "./log_message";
import { MetricResult } from "./metric_result";
/**
 * This class should be called to aggregate many MetricResults and for example an average result
 * For each MetricResult, processResult should be called
 * the final average result can be obtained by getAggregatedResult 
 */
export class MetricResultBuilder{
    private sumResult=0
    private numberResults=0;
    private allLogMessages:LogMessage[]=[]
    /**
     * Process a MetricResult in order to  aggregate them
     * The log message of the result will be included in the new result
     * @param result  
     */
    processResult(result:MetricResult){
        this.sumResult+=result.getResult();
        this.numberResults++;
        for(let s of result.getLogMessages()){
            this.allLogMessages.push(s);
        }
    }
    /**
     * Creates the aggegrated MetricResult 
     * Should be called on last step
     * Will reset the builder to its original state
     * @returns some kind of aggregation of all results that have been processed
     */
    getAggregatedResult():MetricResult{
        //prevent numberResults from becoming 0
        let numberResults=this.numberResults>0?this.numberResults:1;
        let result= new MetricResult(this.sumResult/numberResults,this.allLogMessages);
        this.sumResult=0;
        this.numberResults=0;
        this.allLogMessages=[];
        return result;
    }
}