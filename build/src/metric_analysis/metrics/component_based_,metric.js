"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentBasedMetric = void 0;
const file_component_1 = require("../../parser/parse_result/file_component");
const documentation_analysis_metric_1 = require("./documentation_analysis_metric");
/**
 * Defines metrics that only check the comment associated with the component
 */
class ComponentBasedMetric extends documentation_analysis_metric_1.DocumentationAnalysisMetric {
    shallConsider(component) {
        return !(component instanceof file_component_1.FileComponent);
    }
}
exports.ComponentBasedMetric = ComponentBasedMetric;
//# sourceMappingURL=component_based_,metric.js.map