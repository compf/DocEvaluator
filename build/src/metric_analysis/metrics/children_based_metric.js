"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildrenBasedMetric = void 0;
const hierarchical_component_1 = require("../../parser/parse_result/hierarchical_component");
const documentation_analysis_metric_1 = require("./documentation_analysis_metric");
/**
 * Defines metrics that consider the children of a hierarchical component
 */
class ChildrenBasedMetric extends documentation_analysis_metric_1.DocumentationAnalysisMetric {
    shallConsider(component) {
        return component instanceof hierarchical_component_1.HierarchicalComponent;
    }
}
exports.ChildrenBasedMetric = ChildrenBasedMetric;
//# sourceMappingURL=children_based_metric.js.map