"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertainTermCountMetric = void 0;
const metric_manager_1 = require("../metric_manager");
const NLP_Helper_1 = require("../NLP_Helper");
const component_based__metric_1 = require("./component_based_,metric");
const documentation_analysis_metric_1 = require("./documentation_analysis_metric");
const util_1 = require("./util");
/**
 * Punishes comments with abbreviation as they are usually harder to read
 */
class CertainTermCountMetric extends component_based__metric_1.ComponentBasedMetric {
    constructor(uniqueName, params) {
        super(uniqueName, params);
        this.nlp_helper = new NLP_Helper_1.NLP_Helper();
        let p = this.getParams();
        if (p.use_default_terms_too) {
            let defaultValue = metric_manager_1.MetricManager.getDefaultMetricParam(metric_manager_1.MetricManager.MetricNames.certain_terms);
            for (let t of defaultValue.terms) {
                if (!p.terms.includes(t))
                    p.terms.push(t);
            }
        }
    }
    analyze(component, builder, langSpec) {
        let params = this.getParams();
        if (component.getComment() == null)
            return;
        let termCount = 0;
        if (component.getComment().getGeneralDescription() != null) {
            termCount += this.countSimilarTerms(component.getComment().getGeneralDescription());
        }
        if (params.consider_tags) {
            for (let tag of component.getComment().getTags()) {
                if (tag.getDescription() != null) {
                    termCount += this.countSimilarTerms(tag.getDescription());
                }
            }
        }
        let logMessages = [];
        let score = this.processResult(termCount, logMessages);
        this.pushResult(builder, score, this.createLogMessages(logMessages, component), component);
    }
    countSimilarTerms(text) {
        let params = this.getParams();
        let count = 0;
        let words = this.nlp_helper.getTokens(text);
        for (let w1 of words) {
            for (let w2 of params.terms) {
                if (this.nlp_helper.levenshtein(w1, w2) <= params.levenshtein_distance) {
                    count++;
                }
            }
        }
        return count;
    }
    processResult(result, logMessages) {
        let params = this.getParams();
        if (result > 1) {
            logMessages.push("More than one forbidden term detected. Forbidden are ", params.terms.join(","));
        }
        return util_1.Utils.boundedGrowth(documentation_analysis_metric_1.MIN_SCORE, documentation_analysis_metric_1.MAX_SCORE, params.k, result);
    }
}
exports.CertainTermCountMetric = CertainTermCountMetric;
//# sourceMappingURL=certain_terms_count_metric.js.map