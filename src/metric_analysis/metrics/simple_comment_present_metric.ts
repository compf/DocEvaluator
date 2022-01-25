import { Component } from "../../parser/parse_result/component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { ComponentBasedMetric } from "./component_based_,metric";
import { MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";
import { GetterSetterParamsType,IgnoreGetterSetterMetric } from "./ignore_getters_setter_metric";
interface  ParamsType extends GetterSetterParamsType{ignore_getter_setter:boolean} 
/**
 * This metric simply check whether a comment is present
 */
export class SimpleCommentPresentMetric extends ComponentBasedMetric {
    private getterSetterMetric: IgnoreGetterSetterMetric=new IgnoreGetterSetterMetric();
    analyze(component: Component, builder: AbstractMetricBuilder, langSpec: LanguageSpecificHelper): void {
        let score = 0;
        let logMessages: string[] = []
        if (component.getComment() != null) {
            score = MAX_SCORE;
        }
        else {
            score = MIN_SCORE;
        }
        score = this.processResult(score, logMessages)
        this.pushResult(builder, score, this.createLogMessages(logMessages, component));
    }
    protected processResult(result: number, logMessages: string[]): number {
        if(result==MIN_SCORE)
            logMessages.push("Component has no documentation")
        return result;

    }
    override shallConsider(component: Component): boolean {
            let params=this.getParams() as ParamsType;
            let consider=super.shallConsider(component);
            if(params !=undefined && params.ignore_getter_setter){
                return  consider && this.getterSetterMetric.shallConsider(component,params)
            }
            return consider;
    }


}