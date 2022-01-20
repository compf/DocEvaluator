import { Component } from "../../parser/parse_result/component";
import { LogMessage } from "../log_message";

export interface LanguageSpecificHelper{
    rateDocumentaionCompatibility(component: Component,results:number[],logMessages: LogMessage[]):void;    shallConsider(component:Component):boolean;
}