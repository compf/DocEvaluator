"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleCommentPresentMetric = void 0;
const component_based__metric_1 = require("./component_based_,metric");
const documentation_analysis_metric_1 = require("./documentation_analysis_metric");
const ignore_getters_setter_metric_1 = require("./ignore_getters_setter_metric");
/**
 * This metric simply check whether a comment is present
 */
class SimpleCommentPresentMetric extends component_based__metric_1.ComponentBasedMetric {
    constructor() {
        super(...arguments);
        this.getterSetterMetric = new ignore_getters_setter_metric_1.IgnoreGetterSetterMetric();
    }
    analyze(component, builder, langSpec) {
        let score = 0;
        let logMessages = [];
        if (component.getComment() != null) {
            score = documentation_analysis_metric_1.MAX_SCORE;
        }
        else {
            score = documentation_analysis_metric_1.MIN_SCORE;
        }
        score = this.processResult(score, logMessages);
        this.pushResult(builder, score, this.createLogMessages(logMessages, component), component);
    }
    processResult(result, logMessages) {
        if (result == documentation_analysis_metric_1.MIN_SCORE)
            logMessages.push("Component has no documentation");
        return result;
    }
    shallConsider(component) {
        let params = this.getParams();
        let consider = super.shallConsider(component);
        if (params != undefined && params.ignore_getter_setter) {
            return consider && this.getterSetterMetric.shallConsider(component, params);
        }
        return consider;
    }
}
exports.SimpleCommentPresentMetric = SimpleCommentPresentMetric;
//# sourceMappingURL=simple_comment_present_metric.js.map