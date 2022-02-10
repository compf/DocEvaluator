import { Component } from "../../parser/parse_result/component";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { MetricResultBuilder } from "../metric_result_builder";
import { ComponentBasedMetric } from "./component_based_,metric";
import { Utils } from "./util";
import { MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";
interface ParamType {
    accept_no_formatting: boolean,
    only_public: boolean,
    k: number,
    allowed_tags: string[],
    max_lines_no_formatting: number
}
export class FormattingGoodMetric extends ComponentBasedMetric {
    analyze(component: Component, builder: MetricResultBuilder, langSpec: LanguageSpecificHelper): void {
        let errorCount = 0;
        let params = this.getParams() as ParamType;
        if (component.getComment() == null || component.getComment()?.getGeneralDescription() == null) return;



        let text = component.getComment()!.getGeneralDescription()!;

        let logMessages = this.filterTagsNotNeedClose(this.findHtmlErrors(text))
        // sum up number of error messages about wrong html
        errorCount += logMessages.length;
        // sum up number of error messages about wrong block tags
        errorCount += this.getInvalidBlockTagCount(text, langSpec, component, params, logMessages);


        let inlineTags = this.findTags(text, langSpec.getInlineTagRegex());
        let invalidInlineTagCount = this.getInvalidInlineTagCount(inlineTags, langSpec, logMessages);
        // sum up number of invalid inline tags
        errorCount += invalidInlineTagCount;

        // add number of lines to error count if no formatting is used
        let validInlineTagCount = inlineTags.length - invalidInlineTagCount;
        let htmlPresent = text.match(/<\w+( \w+=".*")*>/) != null
        if (!params.accept_no_formatting && validInlineTagCount == 0 && !htmlPresent) {
            logMessages.push("Documentation contains no formation like links or html");
            // add not less than 0 errors to the error count
            errorCount += Math.max(text.split("\n").length - params.max_lines_no_formatting, 0);
        }
        this.pushResult(builder, this.processResult(errorCount, logMessages), this.createLogMessages(logMessages, component), component);

    }
    private getInvalidInlineTagCount(inlineTags: string[], langSpec: LanguageSpecificHelper, logMessages: string[]) {
        let errorCount = 0;
        let params = this.getParams() as ParamType;
        for (let tag of inlineTags) {
            if (!langSpec.isValidInlineTag(tag) && !params.allowed_tags.some((t) => tag.startsWith(t))) {
                errorCount++;
                logMessages.push(tag + " is not a valid inline tag");
            }

        }
        return errorCount;
    }

    private getInvalidBlockTagCount(text: string, langSpec: LanguageSpecificHelper, component: Component, params: ParamType, logMessages: string[]) {
        let errorCount = 0;
        for (let t of component.getComment()!.getTags()) {
            if (!langSpec.isValidBlockTag(t.getKind()!) && !params.allowed_tags.includes(t.getKind()!)) {
                errorCount++;
                logMessages.push(t.getKind() + " is not a valid block tag");
            }
        }
        return errorCount;
    }
    protected processResult(result: number, logMessages: string[]): number {
        let params = this.getParams() as ParamType;

        return Utils.boundedGrowth(MIN_SCORE, MAX_SCORE, params.k, result);
    }
    private findTags(text: string, regex: RegExp): string[] {
        let matches = text.match(regex);
        let result: string[] = [];
        if (matches != null) {
            for (let m of matches) {
                result.push(m);
            }
            return result;
        }
        return [];
    }
    private filterTagsNotNeedClose(messages: string[]) {
        return messages.filter((m) => !this.needNotToBeClosed(m));
    }
    private findHtmlErrors(text: string) {

        let regex = /<\/?\w+/g;
        let stack: string[] = [];
        let matches = text.match(regex);
        let messages: string[] = [];
        if (matches != null) {
            for (let m of matches) {
                let isEndTag = m.includes("/");
                let tagName = isEndTag ? m.substring(2) : m.substring(1);
                if (isEndTag) {
                    let removed = stack.pop();
                    while (removed != undefined && removed != tagName) {
                        if (!this.needNotToBeClosed(removed)) {
                            messages.push("Tag " + removed + "not closed")
                        }

                        removed = stack.pop();

                    }
                }
                else {
                    stack.push(tagName);
                }
            }
            while (stack.length > 0) {
                let removed = stack.pop()!;
                messages.push("Tag " + removed + "not closed")
            }
            return messages;
        }
        return [];


    }
    private needNotToBeClosed(tag: string) {
        return tag.includes("p") || tag.includes("li");
    }

}