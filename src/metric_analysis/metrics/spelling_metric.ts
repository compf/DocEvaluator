import { existsSync, readFileSync } from 'fs';
import path from 'path';
import SpellChecker from 'simple-spellchecker';
import { Component } from '../../parser/parse_result/component';
import { HierarchicalComponent } from '../../parser/parse_result/hierarchical_component';
import { MethodComponent } from '../../parser/parse_result/method_component';
import { LanguageSpecificHelper } from '../language_specific/language_specific_helper';
import { MetricResultBuilder } from '../metric_result_builder';
import { ComponentBasedMetric } from './component_based_,metric';
import { MAX_SCORE, MIN_SCORE } from './documentation_analysis_metric';
import { Utils } from './util';
function findDictionary() {
    let currPath = __dirname;
    while (!existsSync(path.join(currPath, "en-US.dic"))) {
        currPath = path.dirname(currPath);
    }
    return currPath;

}
const dictionary = SpellChecker.getDictionarySync("en-US", findDictionary())
interface ParamType {
    /**a list of additional words that should be deemed a correctly spelled */
    additional_words: string[],
    /**the growth factor */
    k: number,
    /**the path to a line-based dictionary for additional allowed words */
    dictionary_path: string
}
export class SpellingMetric extends ComponentBasedMetric {
    analyze(component: Component, builder: MetricResultBuilder, langSpec: LanguageSpecificHelper): void {
        let logMessages: string[] = [];
        let errorCount = 0;

        let rawText = langSpec.getRawText(component.getComment()!.getGeneralDescription()!);
        errorCount += this.getMisspellingCount(rawText, logMessages, component)

        for (let tag of component.getComment()!.getTags()) {
            if (tag.getDescription() != null) {
                let rawText = langSpec.getRawText(tag.getDescription()!);
                errorCount += this.getMisspellingCount(rawText, logMessages, component);
            }
        }
        let result = this.processResult(errorCount, logMessages);
        this.pushResult(builder, result, this.createLogMessages(logMessages, component), component);
    }
    shallConsider(component: Component): boolean {
        return super.shallConsider(component) && component.getComment() != null;
    }
    private additionalWords: Set<string>;
    protected processResult(result: number, logMessages: string[]): number {
        let params = this.getParams() as ParamType;
        return Utils.boundedGrowth(MIN_SCORE, MAX_SCORE, params.k, result);
    }
    /**
     * calculates how many words are probably misspelled
     * @param text the text to analyze
     * @param logMessages will be uesed to store log messages
     * @param component the current component, will be used to find whether a word is a name of another component defined in context
     * @returns the number of (probably) misspelled words
     */
    getMisspellingCount(text: string, logMessages: string[], component: Component): number {
        let errorCount = 0;
        let splitted = text.split(" ");
        for (let word of splitted) {
            if (word.length == 0) continue;
            if (!dictionary.spellCheck(word) && !this.additionalWords.has(word) && !this.isNameDefinedInContext(word, component)) {
                errorCount++;
                logMessages.push("Word " + word + " could be mispelled");
            }
        }
        return errorCount;
    }
    /**
     * finds out whether a word is a name of a component and caches
     *  name of components so that those names are not misspelled anymore
     * @param word the word to be searched
     * @param component a reference to the current component
     * @returns true if the word is indeed a name of a component 
     */
    isNameDefinedInContext(word: string, component: Component): boolean {
        if (word == component.getName()) return true;
        let topParent = component.getTopParent();
        return this.isNameDefinedInContextRec(word, topParent);
    }
    /**
     * recursively search whether the word could be a name of a parent component or defined elsewhere
     * @param word the  word to be searched
     * @param component a reference to the current component
     * @returns true if the word is indeed a name of a component 
     */
    isNameDefinedInContextRec(word: string, component: Component): boolean {
        this.additionalWords.add(component.getName());
        if (component.getName() == word) {
            return true;
        }
        else if (component instanceof MethodComponent) {
            let meth = component as MethodComponent;
            for (let param of meth.getParams()) {
                if (param.name == word) return true;
            }
            return false;
        }
        else if (component instanceof HierarchicalComponent) {
            let hierarch = component as HierarchicalComponent;
            for (let obj of hierarch.getChildren()) {
                if (this.isNameDefinedInContextRec(word, obj)) return true;
            }
            return false;
        }
        else {
            return false;
        }
    }
    constructor(uniqueName: string, params: any) {
        super(uniqueName, params);
        let par = params as ParamType;
        this.additionalWords = new Set(par.additional_words);
        if (par.dictionary_path != "") {
            for (let line of readFileSync(par.dictionary_path).toString().split("\n")) {
                this.additionalWords.add(line);
            }
        }
    }

}