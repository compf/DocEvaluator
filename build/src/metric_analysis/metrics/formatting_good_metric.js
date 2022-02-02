"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormattingGoodMetric = void 0;
const component_based__metric_1 = require("./component_based_,metric");
const util_1 = require("./util");
const documentation_analysis_metric_1 = require("./documentation_analysis_metric");
class FormattingGoodMetric extends component_based__metric_1.ComponentBasedMetric {
    analyze(component, builder, langSpec) {
        var _a;
        let errorCount = 0;
        let params = this.getParams();
        if (component.getComment() == null || ((_a = component.getComment()) === null || _a === void 0 ? void 0 : _a.getGeneralDescription()) == null)
            return;
        let text = component.getComment().getGeneralDescription();
        let logMessages = this.filterTagsNotNeedClose(this.findHtmlErrors(text));
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
        let htmlPresent = text.match(/<\w+( \w+=".*")*>/) != null;
        if (!params.accept_no_formatting && validInlineTagCount == 0 && !htmlPresent) {
            logMessages.push("Documentation contains no formation like links or html");
            // add not less than 0 errors to the error count
            errorCount += Math.max(text.split("\n").length - params.max_lines_no_formatting, 0);
        }
        this.pushResult(builder, this.processResult(errorCount, logMessages), this.createLogMessages(logMessages, component), component);
    }
    getInvalidInlineTagCount(inlineTags, langSpec, logMessages) {
        let errorCount = 0;
        let params = this.getParams();
        for (let tag of inlineTags) {
            if (!langSpec.isValidInlineTag(tag) && !params.allowed_tags.some((t) => tag.startsWith(t))) {
                errorCount++;
                logMessages.push(tag + " is not a valid inline tag");
            }
        }
        return errorCount;
    }
    getInvalidBlockTagCount(text, langSpec, component, params, logMessages) {
        let errorCount = 0;
        for (let t of component.getComment().getTags()) {
            if (!langSpec.isValidBlockTag(t.getKind()) && !params.allowed_tags.includes(t.getKind())) {
                errorCount++;
                logMessages.push(t.getKind() + " is not a valid block tag");
            }
        }
        return errorCount;
    }
    processResult(result, logMessages) {
        let params = this.getParams();
        return util_1.Utils.boundedGrowth(documentation_analysis_metric_1.MIN_SCORE, documentation_analysis_metric_1.MAX_SCORE, params.k, result);
    }
    findTags(text, regex) {
        let matches = text.match(regex);
        let result = [];
        if (matches != null) {
            for (let m of matches) {
                result.push(m);
            }
            return result;
        }
        return [];
    }
    filterTagsNotNeedClose(messages) {
        return messages.filter((m) => !this.needNotToBeClosed(m));
    }
    findHtmlErrors(text) {
        let regex = /<\/?\w+/g;
        let stack = [];
        let matches = text.match(regex);
        let messages = [];
        if (matches != null) {
            for (let m of matches) {
                let isEndTag = m.includes("/");
                let tagName = isEndTag ? m.substring(2) : m.substring(1);
                if (isEndTag) {
                    let removed = stack.pop();
                    while (removed != undefined && removed != tagName) {
                        if (!this.needNotToBeClosed(removed)) {
                            messages.push("Tag " + removed + "not closed");
                        }
                        removed = stack.pop();
                    }
                }
                else {
                    stack.push(tagName);
                }
            }
            while (stack.length > 0) {
                let removed = stack.pop();
                messages.push("Tag " + removed + "not closed");
            }
            return messages;
        }
        return [];
    }
    needNotToBeClosed(tag) {
        return tag.includes("p") || tag.includes("li");
    }
}
exports.FormattingGoodMetric = FormattingGoodMetric;
//# sourceMappingURL=formatting_good_metric.js.map