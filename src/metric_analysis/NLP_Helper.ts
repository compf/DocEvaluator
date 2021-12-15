import nlp from "compromise";
import { syllable } from "syllable";

export type RelevantVariables = { numSentences: number, numWords: number, numSyllables: number }

/**
 * This class exposes some methods to calculate word count, syllables, etc
 * This will be useful if I try other NLP libraries later so the metrics don't need to be changed
 */
 export class NLP_Helper{
    public getRelevantVariables(text: string): RelevantVariables {
        let corpus = nlp(text);
        //console.log(text);
        const sent = corpus.sentences();
        /* Somehow typescript thinks this a method but it is a property 
        and this strange conversion needs to be done
        */
        const numSentences = (sent.length as unknown) as number;
        const numWords = corpus.wordCount();
        const numSyllables = syllable(text);
        return { numSentences, numWords, numSyllables };
    }

}


