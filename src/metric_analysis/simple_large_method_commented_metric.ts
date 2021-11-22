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
        if(component instanceof MethodComponent  ){
            let logMessages:LogMessage[]=[];
            let result=0;
            if(component.getComment()==null){
                let ignoreLines=[""];
                if(params!=undefined && params.ignoreLines!=undefined){
                    ignoreLines=params.ignoreLines;
                }
                let method=component as MethodComponent;
                let lines=method.getMethodBody().split("\n").filter((s)=>!ignoreLines.includes( s.trim())).length;
                /* calculating the result of the metric as limited growth function B(l)=S-(S-B(0))*e^(k*l)
                S ist the minimum score, B(0) is the max score, k is a factor that the metric user can choose
                (default 0.03) and l is the number of lines of that method
                */
                let S=MIN_SCORE;
                let B0=MAX_SCORE;
                let k=0.03;
                if(params !=undefined && params!=null && params.growth!=undefined){
                    k=params.growth;
                }
                result=S-(S-B0)*Math.exp(-k*lines);
                if(result<50){
                    logMessages.push(new LogMessage(component.getName()+" is relatively long and has no documentation" ));
                }
            }
            else{
                result=MAX_SCORE;
            }
            let metricResult=new MetricResult(result,logMessages);
            builder.processResult(metricResult );
            
        }
        
        
    }
    

}