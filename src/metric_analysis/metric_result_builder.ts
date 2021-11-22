import { DocumentationAnalysisMetric } from "./documentation_analysis_metric";
import { LogMessage } from "./log_message";
import { MetricResult } from "./metric_result";
/**
 * This class should be called to aggregate many MetricResults and for example an average result
 * For each MetricResult, processResult should be called
 * the final average result can be obtained by getAggregatedResult 
 */
export class MetricResultBuilder{
    protected sumResult=0
    protected numberResults=0;
    protected creator:DocumentationAnalysisMetric | MetricResultBuilder|null=null;
    protected allLogMessages:LogMessage[]=[]
    /**
     * Process a MetricResult in order to  aggregate them
     * The log message of the result will be included in the new result
     * @param result  
     */
    processResult(result:MetricResult){
        this.sumResult+=result.getResult();
        this.numberResults++;
        if(this.creator==null){
            this.creator=result.getCreator();
        }
        else if(this.creator!=result.getCreator()){
            this.creator=this;
        }
        this.pushAllLogMessages(result.getLogMessages());
      
    }
    protected pushAllLogMessages(msgs:LogMessage[]){
        for(let s of msgs){
            this.allLogMessages.push(s);
        }
    }
    /**
     * Creates the aggegrated MetricResult 
     * @returns some kind of aggregation of all results that have been processed
     */
    getAggregatedResult():MetricResult{
        //prevent numberResults from becoming 0
        let numberResults=this.numberResults>0?this.numberResults:1;
        let result= new MetricResult(this.sumResult/numberResults,this.allLogMessages,this.creator!!);
       
        return result;
    }
    /**
     * reset the builder  to default values
     */
    reset(){
        this.sumResult=0;
        this.numberResults=0;
        this.allLogMessages=[];
    }
}