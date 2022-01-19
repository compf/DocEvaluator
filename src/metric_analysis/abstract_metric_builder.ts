import { MetricResult } from "./metric_result";

export abstract class AbstractMetricBuilder{
     /**
     * Process a MetricResult in order to  aggregate them
     * The log message of the result will be included in the new result
     * @param result  
     */
      public abstract processResult(result: MetricResult):void;
        
    
}