import chalk from "chalk";
import { Component } from "../../parser/parse_result/component";
import { AbstractMetricBuilder } from "../abstract_metric_builder";
import { LogMessage } from "../log_message";
import { MetricResult } from "../metric_result";
import { MetricResultBuilder } from "../metric_result_builder";

export const MAX_SCORE = 100;
export const MIN_SCORE = 0;
/**
 * This is the abstract base class for all metrics
 */
export  abstract class DocumentationAnalysisMetric {
    private uniqueName:string;
    private params:any;
    /**
     * should analyze the documentation of a single component and processes the result of the analysis using the given @see[MetricResultBuilder]
     * @param component The Component to analyze
     * @param builder The builder to process all results of the component and its children
     */
    public abstract analyze(component: Component, builder: AbstractMetricBuilder| undefined): void
    /**
     * 
     * @param component Determines whether a component is worth checking
     */
    public abstract shallConsider(component: Component): boolean;

    public constructor(name:string,params:any){
        this.uniqueName=name;
        this.params=params;
    }
    /**
     * returns an unique name for this metric
     */
    public getUniqueName():string{
        return this.uniqueName;
    }
    /**
     * 
     * @returns  the param of this metric instance
     */
    public getParams():any{
        return this.params;
    }
    protected processResult(result:number,logMessages:string[]):number{
        return result;
    }
    protected pushResult(builder:AbstractMetricBuilder,score:number,logMessages:LogMessage[]){
        builder.processResult(new MetricResult(score,logMessages,this.getUniqueName()));
    }
    protected pushLogMessage(component:Component,msg:string,logMessages:LogMessage[]){
        let path= chalk.green( component.getTopParent().getName());
        let qualifiedName=chalk.yellow(component.getQualifiedName())
        let prefix=path+ " "+ qualifiedName + "(L. "+component.getLineNumber()+"): ";
        logMessages.push(new LogMessage(prefix+msg));
    }
    protected createLogMessages(messages:string[],component:Component){
        let result:LogMessage[]=[]
        for(let msg of messages){
            this.pushLogMessage(component,msg,result);
        }
        return result;
    }

}