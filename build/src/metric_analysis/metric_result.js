"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricResult = void 0;
class MetricResult {
    constructor(res, msgs, creator) {
        this.result = res;
        this.logMessages = msgs;
        this.creator = creator;
    }
    /**
     * Getter to obtain the numerical score of the MetricResult
     * @returns The numerical score of the result
     */
    getResult() {
        return this.result;
    }
    /**
     * Getter for all LogMessages that are part of this result
     * @returns a list of log messages
     */
    getLogMessages() {
        return this.logMessages;
    }
    /**
     * Getter for the creator of this result. This could be a unique name of a metric, a path if the result is
     * of a file, or some other unique string
     * @returns the unique creator name
     */
    getCreator() {
        return this.creator;
    }
}
exports.MetricResult = MetricResult;
//# sourceMappingURL=metric_result.js.map