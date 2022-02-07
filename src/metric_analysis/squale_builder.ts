import { LogMessage } from "./log_message";
import { InvalidMetricResult, MetricResult } from "./metric_result";
import { MetricResultBuilder } from "./metric_result_builder";

export class SqualeResultBuilder extends MetricResultBuilder{
    override getAggregatedResult(creator: string): MetricResult {
        let sum=0;
        let lambda=30;
        let allLogMessages:LogMessage[]=[];
        if(this.resultList.length==0)return new InvalidMetricResult();
        for(let partialResult of this.resultList){
            sum+=Math.pow(lambda,-partialResult.getResult());
            this.putAllLogMessages(partialResult.getLogMessages(), allLogMessages)

        }
        let averaged=sum/this.resultList.length;
        let result=-Math.log(averaged)/Math.log(lambda);
        return new MetricResult(result,allLogMessages,creator);

    }
   
    
}