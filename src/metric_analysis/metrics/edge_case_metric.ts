import { Component } from "../../parser/parse_result/component";
import { MethodComponent } from "../../parser/parse_result/method_component";
import { StructuredCommentTagKind } from "../../parser/parse_result/structured_comment";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { MetricResultBuilder } from "../metric_result_builder";
import { NLP_Helper } from "../NLP_Helper";
import { ComponentBasedMetric } from "./component_based_,metric";
import { MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";
import { Utils } from "./util";
interface ParamsType{only_public:boolean,terms:string[],k:number}
export class EdgeCaseMetric extends ComponentBasedMetric{
    analyze(component: Component, builder: MetricResultBuilder, langSpec: LanguageSpecificHelper): void {
        if(!(component instanceof MethodComponent) || component.getComment()==null)return;
        let method=component as MethodComponent;
        let errorCount=0;
        let params=this.getParams() as ParamsType;
        let logMessages:string[]=[];
        let typeDescriptionPairs=this.getTypeDescriptionPairs(method,langSpec);
        for(let pair of typeDescriptionPairs){
            if(!NLP_Helper.hasOneOfTerms(pair.text,params.terms)){
                errorCount++;
                logMessages.push(pair.name +" may not mention handling of null values");
            }
        }
        let result=this.processResult(errorCount,logMessages);
        this.pushResult(builder,result,this.createLogMessages(logMessages,component),component);
    }
    shallConsider(component: Component): boolean {
        let params=this.getParams() as ParamsType;
        let consider=params.only_public?component.getComponentMetaInformation().isPublic() :true;
        return consider && super.shallConsider(component);

    }
    protected processResult(result: number, logMessages: string[]): number {
        let params=this.getParams() as ParamsType;
        return Utils.boundedGrowth(MIN_SCORE,MAX_SCORE,params.k,result);
    }
    private getTypeDescriptionPairs(component:MethodComponent,langSpec:LanguageSpecificHelper):{name:string,type:string,text:string}[]{
        let result:{name:string,type:string,text:string}[]=[];
        let docParams=component.getComment()!.getTags();
        let params=component.getParams();
        for(let param of params){
            if(langSpec.canTypeBeNull(param.type)){
                let paramDescr=docParams.filter((p)=>p.getKind()== StructuredCommentTagKind.PARAM && p.getParam()==param.name);
                if(paramDescr.length==0 || paramDescr.length==1 && paramDescr[0].getDescription()==null){
                    result.push({name:param.name,type:param.type,text:""});
                }
                else{
                    result.push({name:param.name,type:param.type,text:paramDescr[0].getDescription()!});
                }
            }
        }
        if(langSpec.canTypeBeNull(component.getReturnType())){
            let returnTags=(docParams.filter((p)=>p.getKind()==StructuredCommentTagKind.RETURN))
            if(returnTags.length>0  && returnTags[0].getDescription()!=null){
                result.push({name:"return",type:component.getReturnType(),text:returnTags[0].getDescription()!});
            }
            else{
                result.push({name:"return",type:component.getReturnType(),text:""})

            }
        }
       
        return result;
    }

}