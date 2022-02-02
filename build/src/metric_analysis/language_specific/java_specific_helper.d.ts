import { Component } from "../../parser/parse_result/component";
import { LogMessage } from "../log_message";
import { LanguageSpecificHelper } from "./language_specific_helper";
export declare class JavaSpecificHelper extends LanguageSpecificHelper {
    rateDocumentationCompatibility(component: Component, results: number[], logMessages: LogMessage[]): void;
    shallConsider(component: Component): boolean;
    getInlineTagRegex(): RegExp;
    private blockTags;
    private inlineTags;
    isValidBlockTag(tag: string): boolean;
    isValidInlineTag(tag: string): boolean;
    getRawTextRegex(): RegExp;
}
