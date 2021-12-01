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
export class SimpleLargeMethodCommentedMetric implements DocumentationAnalysisMetric {
    boundedGrowth(S: number, B0: number, k: number, l: number): number {
        return S - (S - B0) * Math.exp(-k * l);
    }
    shallConsider(component: Component,params:any) {
        return component instanceof MethodComponent;
    }
    analyze(component: Component, builder: MetricResultBuilder, params: any | undefined): void {
        let logMessages: LogMessage[] = [];
        let result = 0;
        if (component.getComment() == null) {
            let ignoreLines = params.ignoreLines;
            let method = component as MethodComponent;
            let lines = method.getLinesOfCode(ignoreLines);
            /* calculating the result of the metric as limited growth function B(l)=S-(S-B(0))*e^(k*l)
            S ist the minimum score, B(0) is the max score, k is a factor that the metric user can choose
            
            The function si plit into two parts, one part deals with relatively small function <10 lines and tolerates
            some code lines, the part above 10 lines massively punnishes large function by using a large k-Factor
            */
            let l = lines;
            let k = params.k;
            if (l < 10) {
                result = this.boundedGrowth(0.9 * MAX_SCORE, MAX_SCORE, k, l)
            }
            else {
                /*
                10 lines are subtracted because we are only interested in the excess lines
                */
                result = this.boundedGrowth(MIN_SCORE, 0.9 * MAX_SCORE, k, l - 10);
            }

            if (result < 50) {
                logMessages.push(new LogMessage(component.getName() + " is relatively long and has no documentation"));
            }
        }
        else {
            result = MAX_SCORE;
        }
        let metricResult = new MetricResult(result, logMessages, this);
        builder.processResult(metricResult);

    }


}