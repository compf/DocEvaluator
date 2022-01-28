import { Component } from "../../parser/parse_result/component";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { MetricResultBuilder } from "../metric_result_builder";
import { ComponentBasedMetric } from "./component_based_,metric";
import { HtmlValidate } from "html-validate";
import { Utils } from "./util";
import { MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";
interface ParamType {
    accept_no_formatting: boolean,
    only_public: boolean,
    k:number,
    allowed_tags:string[]
}
export class FormattingGoodMetric extends ComponentBasedMetric {
    analyze(component: Component, builder: MetricResultBuilder, langSpec: LanguageSpecificHelper): void {
        let errorCount=0;
        let params=this.getParams() as ParamType;
        if(component.getComment()==null || component.getComment()?.getGeneralDescription()==null)return;
        let text=component.getComment()!.getGeneralDescription()!;
        let logMessages=this.filterTagsNotNeedClose(this.findHtmlErrors(text))

        errorCount+=logMessages.length;

       let linksCount=langSpec.findSpecialElements(text).length;
       let htmlPresent=text.match(/<\w+( \w+=".*")*>/)!=null
       if(!params.accept_no_formatting && linksCount==0 && !htmlPresent)
       {
           logMessages.push("Documentation contains no formation like links or html");
           errorCount+=10;
       }
       for(let t of component.getComment()!.getTags()){
            if(!langSpec.isValidTag(t.getKind()!) && !params.allowed_tags.includes(t.getKind()!)){
                errorCount++;
                logMessages.push(t.getParam()+ " is not a valid tag");
            }
       }
       this.pushResult(builder,this.processResult(errorCount,logMessages),this.createLogMessages(logMessages,component));

    }
    protected processResult(result: number, logMessages: string[]): number {
    let params=this.getParams() as ParamType;

       return  Utils.boundedGrowth(MIN_SCORE,MAX_SCORE,params.k,result);
    }
    private filterTagsNotNeedClose(messages:string[]){
        return messages.filter((m)=>!this.needNotToBeClosed(m));
    }
    private findHtmlErrors(text: string) {
        const htmlvalidate = new HtmlValidate(
            {
                extends: ["html-validate:standard"],
            });
        let res = htmlvalidate.validateString(text);
        let messages = [];
        for (let r of res.results) {
            for (let m of r.messages) {
                messages.push(m.message);
            }
        }
        return messages;

    }
    private needNotToBeClosed(tag: string) {
        return  tag.includes("</p")|| tag.includes("</li");
    }

}