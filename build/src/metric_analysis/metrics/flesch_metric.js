"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleschMetric = void 0;
const NLP_Helper_1 = require("../NLP_Helper");
const component_based__metric_1 = require("./component_based_,metric");
/**
 * This metric calculate the flesh score which describes the readability of a text
 */
class FleschMetric extends component_based__metric_1.ComponentBasedMetric {
    analyze(component, builder, langSpec) {
        let params = this.getParams();
        let textsToConsider = this.getTextToConsider(component, params);
        if (textsToConsider.length == 0)
            return;
        let nlp_helper = new NLP_Helper_1.NLP_Helper();
        let sum = 0;
        for (let text of textsToConsider) {
            sum += this.calcFleshKincaid(nlp_helper.getRelevantVariables(text.replace("\n", "")));
        }
        let msgs = [];
        let score = sum / textsToConsider.length;
        let finalScore = this.processResult(score, msgs);
        this.pushResult(builder, finalScore, this.createLogMessages(msgs, component), component);
    }
    processResult(score, msgs) {
        let finalScore = 0;
        if (score <= 70) {
            finalScore = this.quadratic(0, 140, -1 / 49, score);
            if (score < 40) {
                msgs.push("The documentation seems to be very hard to read. Consider rewriting it");
            }
        }
        else if (score > 70 && score < 100) {
            finalScore = -(1 / 2) * (score - 70) + 100;
        }
        else {
            finalScore = 85;
            msgs.push("The documentation is a little bit too easy");
        }
        return finalScore;
    }
    quadratic(root1, root2, a, x) {
        return a * (x - root1) * (x - root2);
    }
    getTextToConsider(component, params) {
        var _a, _b, _c;
        let textsToConsider = [];
        if (component.getComment() != null) {
            if (((_a = component.getComment()) === null || _a === void 0 ? void 0 : _a.getGeneralDescription()) != null) {
                textsToConsider.push((_b = component.getComment()) === null || _b === void 0 ? void 0 : _b.getGeneralDescription());
            }
            if (params.consider_tags) {
                for (let tag of (_c = component.getComment()) === null || _c === void 0 ? void 0 : _c.getTags()) {
                    if (tag.getDescription() != null)
                        textsToConsider.push(tag.getDescription());
                }
            }
        }
        return textsToConsider;
    }
    calcFleshKincaid(vars) {
        return 206.835 - 1.015 * (vars.numWords / vars.numSentences) - 84.6 * (vars.numSyllables / vars.numWords);
    }
}
exports.FleschMetric = FleschMetric;
//# sourceMappingURL=flesch_metric.js.map