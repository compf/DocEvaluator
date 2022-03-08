import { Component } from "../../parser/parse_result/component";
import { LogMessage } from "../log_message";
/**
 * This interface helps metric to deal with language specific stuff
 * For instance, don't check overriden methods or check additional tags
 */
export class LanguageSpecificHelper {
    /**
     * checks whether the documentation is complete by checking additional tags
     * @param component any component
     * @param results all numeric results will be pushed there
     * @param logMessages all log messages will be pushed there
     */
    rateDocumentationCompatibility(component: Component, results: number[], logMessages: LogMessage[]): void {

    }
    /**
     * Check whether the component should be analyzed
     * For instance, return false if the component is overriden
     * @param component a component to check
     */
    shallConsider(component: Component): boolean {
        return true;
    }
    /**
     *  return s aregular expression that will identify inline tag lements
     * @param text the text to search
     */

    /**
     * determines whether a tag is valid
     * @param tag a tag name
     * @returns true if the tag is valid
     */
    isValidBlockTag(tag: string): boolean {
        return true;
    }
    /**
     *
     * @returns a regex that never match
     */
    getImpossibleRegex() {
        // from https://stackoverflow.com/questions/1723182/a-regex-that-will-never-be-matched-by-anything
        // will never match anything
        return /(?!x)x/;
    }
    /**
     *
     * @returns a regex that match the text without tags or other non-natural things
     */
    getRawTextRegex() {
        return this.getImpossibleRegex();
    }
    /**
     * removes all non-natural things like html tags, inline tags etc from the given text
     * @param text the text as input
     * @returns the rat text without these elements
     */
    getRawText(text: string) {
        const regex = this.getRawTextRegex();
        let wordMatch = /\w+$/;
        let words = [];
        let matches = text.match(regex);
        if (matches == null)
            return "";
        for (let m of matches) {
            if (m.match(wordMatch) != undefined)
                words.push(m);
        }
        return words.join("");
    }
    /**
     * Checks whether a datatype could be null in this language
     * @param type a data type to check, may not be null
     * @returns true if the type could be nullable, falso otherwise
     */
    canTypeBeNull(type: string): boolean {
        return true;
    }
    /**
     * returs the null keyword for the programming language (e.g. null in Java and other languages
     * but nullptr would be the value in C++
     * @returns the keyword for a null value
     */
    getNullKeyword(): string {
        return "null";
    }
}