import { Component } from "../../parser/parse_result/component";
import { LogMessage } from "../log_message";
/**
 * This interface helps metric to deal with language specific stuff
 * For instance, don't check overriden methods or check additional tags
 */
export declare class LanguageSpecificHelper {
    /**
     * checks whether the documentation is complete by checking additional tags
     * @param component any component
     * @param results all numeric results will be pushed there
     * @param logMessages all log messages will be pushed there
     */
    rateDocumentationCompatibility(component: Component, results: number[], logMessages: LogMessage[]): void;
    /**
     * Check whether the component should be analyzed
     * For instance, return false if the component is overriden
     * @param component a component to check
     */
    shallConsider(component: Component): boolean;
    /**
     *  return a aregular expression that will identify inline tag lements
     * @param text the text to search
     */
    getInlineTagRegex(): RegExp;
    /**
     *
     * @returns a regex that never match
     */
    private getImpossibleRegex;
    /**
     *
     * @returns a regex that match the text without tags or other non-natural things
     */
    getRawTextRegex(): RegExp;
    /**
     * removes all non-natural things like html tags, inline tags etc from the given text
     * @param text the text as input
     * @returns the rat text without these elements
     */
    getRawText(text: string): string;
    isValidInlineTag(tagName: string): boolean;
    /**
     * determines whether a tag is valid
     * @param tag a tag name
     * @returns true if the tag is valid
     */
    isValidBlockTag(tag: string): boolean;
}
