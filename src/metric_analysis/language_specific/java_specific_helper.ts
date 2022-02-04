import { Component } from "../../parser/parse_result/component";
import { JavaMethodData } from "../../parser/parse_result/java/JavaMethodData";
import { MethodComponent } from "../../parser/parse_result/method_component";
import { LogMessage } from "../log_message";
import { MAX_SCORE, MIN_SCORE } from "../metrics/documentation_analysis_metric";
import { LanguageSpecificHelper } from "./language_specific_helper";

export class JavaSpecificHelper extends LanguageSpecificHelper{
    rateDocumentationCompatibility(component: Component,results:number[],logMessages: LogMessage[]):void {       let methodData=component.getComponentMetaInformation() as JavaMethodData;
        let throwTags=component.getComment()?.getTags().filter((x)=>x.getKind()=="@throws");
        let throwParamInComment=new Set(throwTags?.map((x)=>x.getParam()));
        let throwParamInDecl=new Set(methodData.getThrownException());
        for( let s1 of throwParamInDecl){
            if(throwParamInComment.has(s1)){
                results.push(MAX_SCORE);
            }
            else{
                results.push(MIN_SCORE);
                logMessages.push(new LogMessage("Throw " +s1 +" is not documented",component))
            }
        }

    }
    shallConsider(component: Component): boolean {

        if(component instanceof MethodComponent){
            let methodData=component.getComponentMetaInformation() as JavaMethodData;
       
            return  !methodData.isOverriding();
        }
        
        return true;
    }
    override getInlineTagRegex(): RegExp {
        return /\{@\w+ \w*\}?/g;
       
    }
    private  blockTags=["@author", "@version", "@param", "@return", "@deprecated", "@since", "@throws", "@exception", "@see", "@serial", "@serialField", "@serialData"] ;
    // thes inline tags do not contain the cloding "}" because it might be missing
    private inlineTags=["{@code","{@docRoot","{@inheritDoc","{@link","{@linkplain","{@literal"]
    override isValidBlockTag(tag: string): boolean {
        return this.blockTags.includes(tag);
    }
    override isValidInlineTag(tag: string): boolean {
        return this.inlineTags.some((t)=>tag.startsWith(t) && tag.endsWith("}"));
    }
    override getRawTextRegex(): RegExp {
        return /( |^|\.|,|;)\w+}?/g;
    }
    override canTypeBeNull(type: string): boolean {
        switch(type){
           
            case "byte":
            case "short":
            case "int":
            case "long":
            case "float":
            case "double":
            case "boolean":
            case "char":
            case "void":
                return false;
            default:
                return true;
        }
    }

}