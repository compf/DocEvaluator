import { Component } from "../../parser/parse_result/component";
import { LogMessage } from "../log_message";
import { JavaSpecificHelper } from "./java_specific_helper";
import { LanguageSpecificHelper } from "./language_specific_helper";
/**
 * Creates a Language Specific helper based on a string
 */
export namespace LanguageSpecificHelperFactory{
    export function loadHelper(name:string){
        switch(name){
            case "java":
                return new JavaSpecificHelper();
            default:
                return new EmptyHelper();
        }
    }
    /**
     * Stub class so that not every language need a specific helper
     */
    class EmptyHelper implements LanguageSpecificHelper{
        rateDocumentationCompatibility(component: Component,results:number[],logMessages: LogMessage[]):void {
            return ;
        }
        shallConsider(component: Component): boolean {
            return true;
        }
        
    }
}