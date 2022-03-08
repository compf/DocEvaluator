import { Component } from "../../parser/parse_result/component";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { MetricResultBuilder } from "../metric_result_builder";
import { ComponentBasedMetric } from "./component_based_,metric";
import { Utils } from "./util";
import { MAX_SCORE, MIN_SCORE } from "./documentation_analysis_metric";
interface ParamType {
    /**if true accept a documentation without any formatting without punishing */
    accept_no_formatting: boolean,
    /**the growth factor */
    k: number,
    /**all allowed block tags that a user can use in the documentation */
    allowed_tags: string[],
    /** Maximum number of lines that are allowed if a documentation is unformatted*/
    max_lines_no_formatting: number
}
/**
 * Checks whether the formatting of a comment is good
 * Will check whether html tags are closed and whether unknown block tags are used
 * will punish long methods that have no formatting
 */
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


        let htmlPresent = text.match(/<[A-Za-z]\w+( \w+=".*")*>/) != null
        if (!params.accept_no_formatting &&  !htmlPresent) {
            logMessages.push("Documentation contains no formation like links or html");
            // add not less than 0 errors to the error count
            errorCount += Math.max(text.split("\n").length - params.max_lines_no_formatting, 0);
        }
        this.pushResult(builder, this.processResult(errorCount, logMessages), this.createLogMessages(logMessages, component), component);

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
    /**
     * find all html tags in the given text and checks whether the html is valid
     * It will only check for unclosed tags
     * @param text a text to search
     * @returns a list of errors that occur if the html is not valid
     */
    private findHtmlErrors(text: string) {

        let regex = /<\/?[a-zA-Z]\w*/g;
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
                            messages.push("Tag " + removed + " not closed")
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
                messages.push("Tag " + removed + " not closed")
            }
            return messages;
        }
        return [];


    }
    private needNotToBeClosed(tag: string) {
        tag=tag.toLowerCase();
        return tag.includes("p") || tag.includes("li") || tag.includes("tr") ||
         tag.includes("td") || tag.includes("th") || tag.includes("dd") ||  tag.includes("dt")|| tag.includes("br");
    }

}