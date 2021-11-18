import { EvaluatorConf } from "../conf/EvaluatorConf";
import { Component } from "../parser/parse_result/component";
import { MethodComponent } from "../parser/parse_result/method_component";
import { DocumentationAnalysisMetric, MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";
import { LogMessage } from "./log_message";
import { MetricResult } from "./metric_result";
import { MetricResultBuilder } from "./metric_result_builder";
/**
 * This metric assume that methods with more lines of code should be commented more often
 * So methods without comments are punished if they are longer
 */
export class SimpleLargeMethodCommentedMetric implements DocumentationAnalysisMetric{
    
    analyze(component: Component,builder:MetricResultBuilder,params:any|undefined): void {
        let method=component as MethodComponent;
        if(method.getMethodBody!=undefined && method.getComment()==null){
            let lines=method.getMethodBody().split("\n").length;
            /* calculating the result of the metric as limited growth function B(l)=S-(S-B(0))*e^(k*l)
            S ist the minimum score, B(0) is the max score, k is a factor that the metric user can choose
            (default 0.1) and l is the number of lines of that method
            */
            let S=MIN_SCORE;
            let B0=MAX_SCORE;
            let k=0.1;
            if(params !=undefined && params!=null && params.growth!=undefined){
                k=params.growth;
            }
            let result=S-(S-B0)*Math.exp(-k*lines)
            let metricResult=new MetricResult(result,[]);
            builder.processResult(metricResult );
            
        }
        
        
    }
    getName(){
        return "simple_large_method_commented_metric"
    }

}