export declare type RelevantVariables = {
    numSentences: number;
    numWords: number;
    numSyllables: number;
};
/**
 * This class exposes some methods to calculate word count, syllables, etc
 * This will be useful if I try other NLP libraries later so the metrics don't need to be changed
 */
export declare class NLP_Helper {
    getRelevantVariables(text: string): RelevantVariables;
    getTokens(text: string): string[];
    private countSyllables;
    levenshtein(word1: string, word2: string): number;
    countAbbreviations(text: string): number;
}
