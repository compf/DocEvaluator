"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimplePublicMembersOnlyMetric = void 0;
const documentation_analysis_metric_1 = require("./documentation_analysis_metric");
const simple_comment_present_metric_1 = require("./simple_comment_present_metric");
/**
 * This metric only consider public members but otherwise it works the same as the SimpleCommentPresent
 */
class SimplePublicMembersOnlyMetric extends simple_comment_present_metric_1.SimpleCommentPresentMetric {
    shallConsider(component) {
        return component.getComponentMetaInformation().isPublic() && super.shallConsider(component);
    }
    processResult(result, logMessages) {
        if (result == documentation_analysis_metric_1.MIN_SCORE)
            logMessages.push("Public member has no documentation");
        return result;
    }
}
exports.SimplePublicMembersOnlyMetric = SimplePublicMembersOnlyMetric;
//# sourceMappingURL=simple_public_members_only_metric.js.map