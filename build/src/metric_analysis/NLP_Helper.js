"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NLP_Helper = void 0;
const compromise_1 = __importDefault(require("compromise"));
const levenshtein_1 = __importDefault(require("levenshtein"));
/**
 * This class exposes some methods to calculate word count, syllables, etc
 * This will be useful if I try other NLP libraries later so the metrics don't need to be changed
 */
class NLP_Helper {
    //TODO find better way to count syllable, try to use old lib again which require esm (https://www.npmjs.com/package/syllable)
    getRelevantVariables(text) {
        let corpus = (0, compromise_1.default)(text);
        compromise_1.default.extend(require('compromise-syllables'));
        const sent = corpus.sentences();
        /* Somehow typescript thinks this a method but it is a property
        and this strange conversion needs to be done
        */
        const numSentences = sent.length;
        const numWords = corpus.wordCount();
        let s = corpus.terms().syllables();
        const numSyllables = this.countSyllables(s);
        return { numSentences, numWords, numSyllables };
    }
    getTokens(text) {
        return compromise_1.default.tokenize(text).termList().map((x) => x.text);
    }
    countSyllables(words) {
        let sum = 0;
        for (let z of words) {
            sum += z.syllables.length;
        }
        return sum;
    }
    levenshtein(word1, word2) {
        return (new levenshtein_1.default(word1, word2)).distance;
    }
    countAbbreviations(text) {
        return (0, compromise_1.default)(text).abbreviations().length;
    }
}
exports.NLP_Helper = NLP_Helper;
//# sourceMappingURL=NLP_Helper.js.map