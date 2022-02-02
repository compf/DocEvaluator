"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpellingMetric = void 0;
const component_based__metric_1 = require("./component_based_,metric");
const spellchecker_1 = __importDefault(require("spellchecker"));
const util_1 = require("./util");
const documentation_analysis_metric_1 = require("./documentation_analysis_metric");
class SpellingMetric extends component_based__metric_1.ComponentBasedMetric {
    analyze(component, builder, langSpec) {
        var _a;
        if (component.getComment() == null)
            return;
        let params = this.getParams();
        for (let word of params.additional_words) {
            spellchecker_1.default.add(word);
        }
        let logMessages = [];
        let mistakes = 0;
        if (((_a = component.getComment()) === null || _a === void 0 ? void 0 : _a.getGeneralDescription()) != null) {
            let text = langSpec.getRawText(component.getComment().getGeneralDescription());
            mistakes += this.getSpellingErrorsCount(text, logMessages);
        }
        for (let tag of component.getComment().getTags()) {
            if (tag.getDescription() != null) {
                mistakes += this.getSpellingErrorsCount(tag.getDescription(), logMessages);
            }
        }
        let result = this.processResult(mistakes, logMessages);
        this.pushResult(builder, result, this.createLogMessages(logMessages, component), component);
    }
    processResult(result, logMessages) {
        let params = this.getParams();
        return util_1.Utils.boundedGrowth(documentation_analysis_metric_1.MIN_SCORE, documentation_analysis_metric_1.MAX_SCORE, params.k, result);
    }
    getSpellingErrorsCount(text, logMessages) {
        let mistakes = spellchecker_1.default.checkSpelling(text);
        for (let range of mistakes) {
            let word = text.substring(range.start, range.end);
            logMessages.push("Word " + word + " could be misspelled");
        }
        return mistakes.length;
    }
}
exports.SpellingMetric = SpellingMetric;
//# sourceMappingURL=spelling_metric.js.map