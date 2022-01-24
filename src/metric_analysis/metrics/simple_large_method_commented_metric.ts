import { Component } from "../../parser/parse_result/component";
import { MethodComponent } from "../../parser/parse_result/method_component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { ComponentBasedMetric } from "./component_based_,metric";
import { MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";
import { Utils } from "./util";
interface ParamsType{k:number,ignore_lines:string[]}
/**
 * This metric assume that methods with more lines of code should be commented more often
 * So methods without comments are punished if they are longer
 */
export class SimpleLargeMethodCommentedMetric extends ComponentBasedMetric {
   
    shallConsider(component: Component) {
        return super.shallConsider(component) && component instanceof MethodComponent;
    }
    override processResult(lines: number, logMessages: string[]): number {
        let l = lines;
        let params = this.getParams() as ParamsType;
        let result = 0;
        let k = params.k;
         /* calculating the result of the metric as limited growth function B(l)=S-(S-B(0))*e^(k*l)
            S ist the minimum score, B(0) is the max score, k is a factor that the metric user can choose
            
            The function si plit into two parts, one part deals with relatively small function <10 lines and tolerates
            some code lines, the part above 10 lines massively punnishes large function by using a large k-Factor
            */
        if (l < 10) {
            result = Utils.boundedGrowth(0.9 * MAX_SCORE, MAX_SCORE, k, l)
        }
        else {
            /*
            10 lines are subtracted because we are only interested in the excess lines
            */
            result = Utils.boundedGrowth(MIN_SCORE, 0.9 * MAX_SCORE, k, l - 10);
        }

        if (result < 50) {
            logMessages.push(" Method is relatively long and has no documentation")
        
        }
        return result;
    }
    analyze(component: Component, builder: AbstractMetricBuilder,langSpec:LanguageSpecificHelper): void {
        let params = this.getParams() as ParamsType;
        let logMessages: string[] = [];
        let result = 0;
        if (component.getComment() == null) {
            let ignoreLines = params.ignore_lines;
            let method = component as MethodComponent;
            let lines = method.getLinesOfCode(ignoreLines);
           
            result=this.processResult(lines,logMessages);
        }
        else {
            result = MAX_SCORE;
        }
       this.pushResult(builder,result,this.createLogMessages(logMessages,component));

    }


}