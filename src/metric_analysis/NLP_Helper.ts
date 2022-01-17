import nlp from "compromise";

import Levenshtein from "levenshtein"
export type RelevantVariables = { numSentences: number, numWords: number, numSyllables: number }

/**
 * This class exposes some methods to calculate word count, syllables, etc
 * This will be useful if I try other NLP libraries later so the metrics don't need to be changed
 */
 export class NLP_Helper{
     //TODO find better way to count syllable, try to use old lib again which require esm (https://www.npmjs.com/package/syllable)
    public getRelevantVariables(text: string): RelevantVariables {
        let corpus = nlp(text);
        nlp.extend(require('compromise-syllables'));

        //console.log(text);
        const sent = corpus.sentences();
        /* Somehow typescript thinks this a method but it is a property 
        and this strange conversion needs to be done
        */
        const numSentences = (sent.length as unknown) as number;
        const numWords = corpus.wordCount();
        let s=(corpus.terms() as any).syllables()
        //console.log("syllable",s)
        const numSyllables =this.countSyllables(s)
        return { numSentences, numWords, numSyllables };
    }
    public getTokens(text:string):string[]{
        return nlp.tokenize(text).termList().map((x)=>x.text);
    }
    
    private countSyllables(words:{text:string,syllables:string[]}[]):number{
        let sum=0;
        for(let z of words){
            sum+=z.syllables.length;
        }
        return sum;
    }
    public levenshtein(word1:string,word2:string):number{
        return (new Levenshtein(word1,word2)).distance
    }

}


