import { DocumentationAnalysisMetric } from "./documentation_analysis_metric";
import { MetricResult } from "./metric_result";
import { MetricResultBuilder } from "./metric_result_builder";

export class WeightedMetricResultBuilder extends MetricResultBuilder{
    private weightLambda:{(creator:DocumentationAnalysisMetric|MetricResultBuilder):number};
    constructor(weightLambda:{(creator:DocumentationAnalysisMetric|MetricResultBuilder):number}){
        super();
        this.weightLambda=weightLambda;
    }
    override processResult(result:MetricResult){
        let weight=this.weightLambda(result.getCreator())
        this.sumResult+=(result.getResult()*weight);
        this.numberResults+=weight;
        this.pushAllLogMessages(result.getLogMessages());
        
    }
}