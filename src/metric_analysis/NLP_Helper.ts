import nlp from "compromise";

import Levenshtein from "levenshtein"
export type RelevantVariables = { numSentences: number, numWords: number, numSyllables: number, numHardWords: number }

/**
 * This class exposes some methods to calculate word count, syllables, etc
 * This will be useful if I try other NLP libraries later so the metrics don't need to be changed
 */
export namespace NLP_Helper {
    //TODO find better way to count syllable, try to use old lib again which require esm (https://www.npmjs.com/package/syllable)
    export function getRelevantVariables(text: string): RelevantVariables {
        let corpus = nlp(text);
        nlp.extend(require('compromise-syllables'));
        const sent = corpus.sentences();
        /* Somehow typescript thinks this a method but it is a property 
        and this strange conversion needs to be done
        */
        const numSentences = (sent.length as unknown) as number;
        const numWords = corpus.wordCount();
        let syllables = (corpus.terms() as any).syllables() as { text: string, syllables: string[] }[]
        const numSyllables = countSyllables(syllables)
        let numHardWords = syllables.filter((s) => s.syllables.length > 2).length;
        return { numSentences, numWords, numSyllables, numHardWords };
    }
    /**
     * Extract all tokens from a text.
     * A token could be a word, a number etc.
     * @param text any text to extract tokens, may not be null
     * @returns  a list of tokens
     */
    export function getTokens(text: string): string[] {
        return nlp.tokenize(text).termList().map((x) => x.text);
    }
   
    function countSyllables(words: { text: string, syllables: string[] }[]): number {
        let sum = 0;
        for (let z of words) {
            sum += z.syllables.length;
        }
        return sum;
    }
    /**
     * calculate the levenshtein distance of two words
     * @param word1  any word
     * @param word2 any word
     * @returns a number representing the levenshtein distance
     */
    export function levenshtein(word1: string, word2: string): number {
        return (new Levenshtein(word1, word2)).distance
    }
    /**
     * Checks whether a text could be matched by one of the provided terms
     * @param text a text to analyze
     * @param terms a list of terms that could match this text
     * @returns true, if a match has been found
     */
    export function hasOneOfTerms(text: string, terms: string[]): boolean {
        let corp = nlp(text);
        corp.cache({ root: true })
        return terms.some((w) => corp.has(w));
    }

}


