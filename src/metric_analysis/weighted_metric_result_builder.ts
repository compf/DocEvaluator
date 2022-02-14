import { LogMessage } from "./log_message";
import { CreatorTuple, InvalidMetricResult, MetricResult } from "./metric_result";
import { MetricResultBuilder } from "./metric_result_builder";
import { WeightResolver } from "./weight_resolver";
export type WeightResolverTuple={
    files:WeightResolver,
    metrics:WeightResolver,
    components:WeightResolver
}
export class WeightedMetricResultBuilder extends MetricResultBuilder {
    protected weightResolverTuple: WeightResolverTuple;
    constructor(weightResolverTuple: WeightResolverTuple) {
        super();
        this.weightResolverTuple = weightResolverTuple;
    }
    protected calcWeightProduct(creatorTuple:CreatorTuple):number{
        const fileWeight=this.weightResolverTuple.files.resolveWeight(creatorTuple.path);
        const componentWeight=this.weightResolverTuple.components.resolveWeight(creatorTuple.component);
        const metricWeight=this.weightResolverTuple.metrics.resolveWeight(creatorTuple.metric);
        //console.log("mulitiplying ",fileWeight,componentWeight,metricWeight);
        return fileWeight*componentWeight*metricWeight;
    }
    override getAggregatedResult(logMessages:LogMessage[]): number {
        let resultSum = 0;
        let weightSum = 0;
        for (let partialResult of this.resultList) {
            if (partialResult instanceof InvalidMetricResult) continue;
            let weight = this.calcWeightProduct(partialResult.getCreators());
            //console.log(partialResult.getCreators(),weight);
            resultSum += (partialResult.getResult() * weight);
            weightSum += weight;
            this.putAllLogMessages(partialResult.getLogMessages(), logMessages)
        }
        if (weightSum == 0) return 0;
        //console.log("result tuple",resultSum,weightSum)
        return resultSum/weightSum;
    }
}