import { Component } from "../../parser/parse_result/component";
import { LogMessage } from "../log_message";
import { JavaSpecificHelper } from "./java_specific_helper";
import { LanguageSpecificHelper } from "./language_specific_helper";

export namespace LanguageSpecificHelperFactory{
    export function loadHelper(name:string){
        switch(name){
            case "java":
                return new JavaSpecificHelper();
            default:
                return new EmptyHelper();
        }
    }
    class EmptyHelper implements LanguageSpecificHelper{
        rateDocumentaionCompatibility(component: Component,results:number[],logMessages: LogMessage[]):void {
            return ;
        }
        shallConsider(component: Component): boolean {
            return true;
        }
        
    }
}