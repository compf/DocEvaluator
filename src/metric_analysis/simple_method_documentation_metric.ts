import { Component } from "../parser/parse_result/component";
import { MethodComponent } from "../parser/parse_result/method_component";
import { StructuredComment, StructuredCommentTagKind } from "../parser/parse_result/structured_comment";
import { DocumentationAnalysisMetric, MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";
import { LogMessage } from "./log_message";
import { MetricResult } from "./metric_result";
import { MetricResultBuilder } from "./metric_result_builder";

export class SimpleMethodDocumentationMetric implements DocumentationAnalysisMetric {
    analyze(component: Component, builder: MetricResultBuilder, params: any): void {
        let logMessages:LogMessage[]=[];
        if(component instanceof MethodComponent){
            let method=component as MethodComponent;
            let score=0;
            if(method.getComment() != null){
                let comment=method.getComment()!!;
                let paramsResult=this.checkMethodParams(method,logMessages);
                let nonExistingParamResult=this.checkNonExistingDocumentedParameters(method,logMessages);
                let returnExisting=method.getName()=="constructor" || method.getReturnType()=="void" || comment.getTags().some((t)=>t.getKind()==StructuredCommentTagKind.RETURN);
                let returnExistingResult=returnExisting ? MAX_SCORE:MIN_SCORE;
                score=(paramsResult+nonExistingParamResult+returnExistingResult)/3;
            }
            builder.processResult(new MetricResult(score,logMessages));
        }
    }
    private checkNonExistingDocumentedParameters(method:MethodComponent,logMessages:LogMessage[]):number{
        let comment=method.getComment()!!
        let matchingParamsCount=0;
        let paramsTags=comment.getTags().filter((t)=>t.getKind()==StructuredCommentTagKind.PARAM);
        if(paramsTags.length==0){
            return MAX_SCORE;
        }
        for(let tag of paramsTags){
            if( method.getParams().some((t)=>t.name==tag.getParam())){
                matchingParamsCount++;
            }
            else{
                let paramName=tag.getParam()??"Unnamed";
                logMessages.push(new LogMessage("Parameter "+paramName +" is documented but has no matching method param"))
            }
        }
        return matchingParamsCount/paramsTags.length*100;
    }
    private checkMethodParams(method:MethodComponent,logMessages:LogMessage[]):number{
        let comment=method.getComment()!!
        if(method.getParams().length==0){
            return MAX_SCORE;  
        }
       
        let matchingParamsCount=0
        for(let param of method.getParams()){
            let tagMatchFound=comment.getTags().some((t)=>t.getKind()==StructuredCommentTagKind.PARAM && t.getParam()==param.name);
            if(tagMatchFound){
                matchingParamsCount++;
            }
            else{
                logMessages.push(new LogMessage("Parameter " +param.name +" is not documented"))
            }
        }
        return matchingParamsCount/method.getParams().length*100;
    }
    

}