"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageSpecificHelper = void 0;
/**
 * This interface helps metric to deal with language specific stuff
 * For instance, don't check overriden methods or check additional tags
 */
class LanguageSpecificHelper {
    /**
     * checks whether the documentation is complete by checking additional tags
     * @param component any component
     * @param results all numeric results will be pushed there
     * @param logMessages all log messages will be pushed there
     */
    rateDocumentationCompatibility(component, results, logMessages) {
    }
    /**
     * Check whether the component should be analyzed
     * For instance, return false if the component is overriden
     * @param component a component to check
     */
    shallConsider(component) {
        return true;
    }
    /**
     *  return a aregular expression that will identify inline tag lements
     * @param text the text to search
     */
    getInlineTagRegex() {
        return this, this.getImpossibleRegex();
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
    getRawText(text) {
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
    isValidInlineTag(tagName) {
        return false;
    }
    /**
     * determines whether a tag is valid
     * @param tag a tag name
     * @returns true if the tag is valid
     */
    isValidBlockTag(tag) {
        return true;
    }
}
exports.LanguageSpecificHelper = LanguageSpecificHelper;
//# sourceMappingURL=language_specific_helper.js.map