"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleLargeMethodCommentedMetric = void 0;
const method_component_1 = require("../../parser/parse_result/method_component");
const component_based__metric_1 = require("./component_based_,metric");
const documentation_analysis_metric_1 = require("./documentation_analysis_metric");
const util_1 = require("./util");
/**
 * This metric assume that methods with more lines of code should be commented more often
 * So methods without comments are punished if they are longer
 */
class SimpleLargeMethodCommentedMetric extends component_based__metric_1.ComponentBasedMetric {
    shallConsider(component) {
        return super.shallConsider(component) && component instanceof method_component_1.MethodComponent;
    }
    processResult(lines, logMessages) {
        let l = lines;
        let params = this.getParams();
        let result = 0;
        let k = params.k;
        /* calculating the result of the metric as limited growth function B(l)=S-(S-B(0))*e^(k*l)
           S ist the minimum score, B(0) is the max score, k is a factor that the metric user can choose
           
           The function si plit into two parts, one part deals with relatively small function <10 lines and tolerates
           some code lines, the part above 10 lines massively punnishes large function by using a large k-Factor
           */
        if (l < 10) {
            result = util_1.Utils.boundedGrowth(0.9 * documentation_analysis_metric_1.MAX_SCORE, documentation_analysis_metric_1.MAX_SCORE, k, l);
        }
        else {
            /*
            10 lines are subtracted because we are only interested in the excess lines
            */
            result = util_1.Utils.boundedGrowth(documentation_analysis_metric_1.MIN_SCORE, 0.9 * documentation_analysis_metric_1.MAX_SCORE, k, l - 10);
        }
        if (result < 50) {
            logMessages.push(" Method is relatively long and has no documentation");
        }
        return result;
    }
    analyze(component, builder, langSpec) {
        let params = this.getParams();
        let logMessages = [];
        let result = 0;
        if (component.getComment() == null) {
            let ignoreLines = params.ignore_lines;
            let method = component;
            let lines = method.getLinesOfCode(ignoreLines);
            result = this.processResult(lines, logMessages);
        }
        else {
            result = documentation_analysis_metric_1.MAX_SCORE;
        }
        this.pushResult(builder, result, this.createLogMessages(logMessages, component), component);
    }
}
exports.SimpleLargeMethodCommentedMetric = SimpleLargeMethodCommentedMetric;
//# sourceMappingURL=simple_large_method_commented_metric.js.map