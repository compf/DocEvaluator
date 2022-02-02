"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentNameCoherenceMetric = void 0;
const NLP_Helper_1 = require("../NLP_Helper");
const component_based__metric_1 = require("./component_based_,metric");
const documentation_analysis_metric_1 = require("./documentation_analysis_metric");
/**
 * Measures the coherence of comment and name of component
 * This will ensure that a comment does not simply repeat the component's name but contains additional information
 * On the other hand comments that have nothing to do with the name will be punished
 */
class CommentNameCoherenceMetric extends component_based__metric_1.ComponentBasedMetric {
    constructor() {
        super(...arguments);
        this.nlp_helper = new NLP_Helper_1.NLP_Helper();
    }
    analyze(component, builder, langSpec) {
        var _a;
        if (component.getComment() == null || ((_a = component.getComment()) === null || _a === void 0 ? void 0 : _a.getGeneralDescription()) == null)
            return;
        let componentNameWords = this.splitByNameConvention(component.getName());
        let commentWords = this.nlp_helper.getTokens(component.getComment().getGeneralDescription());
        if (commentWords.length == 0)
            return;
        let similarWordsCount = 0;
        for (let componentWord of componentNameWords) {
            for (let commentWord of commentWords) {
                if (this.areSimilar(componentWord, commentWord)) {
                    similarWordsCount++;
                }
            }
        }
        let messages = [];
        let result = this.processResult(similarWordsCount / commentWords.length, messages);
        this.pushResult(builder, result, this.createLogMessages(messages, component), component);
    }
    processResult(result, messages) {
        let params = this.getParams();
        if (result <= params.lower_threshold) {
            messages.push("Comment has nothing to do with the name of the component. Consider rewriting the comment");
            return documentation_analysis_metric_1.MIN_SCORE;
        }
        else if (result > params.upper_theshold) {
            messages.push("Comment and component name are very similar, consider adding more information");
            return documentation_analysis_metric_1.MIN_SCORE;
        }
        else
            return documentation_analysis_metric_1.MAX_SCORE;
    }
    areSimilar(word1, word2) {
        let params = this.getParams();
        return this.nlp_helper.levenshtein(word1, word2) <= params.levenshtein_distance;
    }
    splitByNameConvention(name) {
        let result = [];
        let buffer = "";
        let lastChar = null;
        for (let c of name) {
            if (c == "_" && buffer != "") {
                result.push(buffer);
                buffer = "";
            }
            else if (lastChar != null && (lastChar === null || lastChar === void 0 ? void 0 : lastChar.match(/[a-z]/)) && c.match(/[A-Z]/)) {
                result.push(buffer);
                buffer = c;
            }
            else {
                buffer += c;
            }
            lastChar = c;
        }
        if (buffer != "") {
            result.push(buffer);
        }
        return result;
    }
}
exports.CommentNameCoherenceMetric = CommentNameCoherenceMetric;
//# sourceMappingURL=comment_name_coherence_metric.js.map