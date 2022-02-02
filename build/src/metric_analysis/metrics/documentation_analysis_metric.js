"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentationAnalysisMetric = exports.MIN_SCORE = exports.MAX_SCORE = void 0;
const log_message_1 = require("../log_message");
const metric_result_1 = require("../metric_result");
exports.MAX_SCORE = 100;
exports.MIN_SCORE = 0;
/**
 * This is the abstract base class for all metrics
 */
class DocumentationAnalysisMetric {
    constructor(name, params) {
        this.uniqueName = name;
        this.params = params;
    }
    /**
     * returns an unique name for this metric
     */
    getUniqueName() {
        return this.uniqueName;
    }
    /**
     *
     * @returns  the param of this metric instance
     */
    getParams() {
        return this.params;
    }
    processResult(result, logMessages) {
        return result;
    }
    pushResult(builder, score, logMessages, component) {
        builder.processResult(new metric_result_1.MetricResult(score, logMessages, component.constructor.name));
    }
    pushLogMessage(component, msg, logMessages) {
        logMessages.push(new log_message_1.LogMessage(msg, component));
    }
    createLogMessages(messages, component) {
        let result = [];
        for (let msg of messages) {
            this.pushLogMessage(component, msg, result);
        }
        return result;
    }
}
exports.DocumentationAnalysisMetric = DocumentationAnalysisMetric;
//# sourceMappingURL=documentation_analysis_metric.js.map