"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileAnalyzer = void 0;
const hierarchical_component_1 = require("../parser/parse_result/hierarchical_component");
var IgnoreTags;
(function (IgnoreTags) {
    IgnoreTags["IGNORE_THIS"] = "%ignore_this%";
    IgnoreTags["IGNORE_NODE"] = "%ignore_node%";
})(IgnoreTags || (IgnoreTags = {}));
class FileAnalyzer {
    /**
     * analyse a file that is given by the ParseResult
     * @param parse_result A valid ParseResult with a HierarchicalComponent
     * @param analyzer The metric to evaluate the file
     * @param builder The result builder to process the several results
     */
    analyze(parse_result, analyzer, builder, langSpec) {
        this.analyzeComponent(parse_result.root, builder, analyzer, langSpec);
    }
    /**
     *
     * @param component Recursively analyze the component and processes the several result in the builder
     * @param builder  The result builder to process the several results
     * @param analyzer The metric to evaluate the file
     */
    analyzeComponent(component, builder, analyzer, langSpec) {
        let ignoreTag = this.getIgnoreFlag(component);
        //console.log(DocumentationAnalysisMetric.languageHelper);
        // Only analyze relevant component to this metric
        if (langSpec.shallConsider(component) && analyzer.shallConsider(component) && ignoreTag != IgnoreTags.IGNORE_THIS && ignoreTag != IgnoreTags.IGNORE_NODE) {
            analyzer.analyze(component, builder, langSpec);
        }
        /* Analyze the children of the component if it is a hierarchical one
        This will be done even if the parent was not considered because we don't want to miss
        something
        */
        if (component instanceof hierarchical_component_1.HierarchicalComponent && ignoreTag != IgnoreTags.IGNORE_NODE) {
            for (let c of component.getChildren()) {
                this.analyzeComponent(c, builder, analyzer, langSpec);
            }
        }
    }
    /**
     * Checks whether the component's comment contains the string "%ignore_comment%"
     * These component's will be ignored as they are presumed to be not relevant
     * @param component the component to check
     * @returns null if the component can be processed, otherwise "%ignore_this%",
     *  if only this component should be ignored, or "%ignore_node%" if also all potential children should be ignored
     */
    getIgnoreFlag(component) {
        var _a;
        let generalDescription = (_a = component.getComment()) === null || _a === void 0 ? void 0 : _a.getGeneralDescription();
        if (generalDescription != null && generalDescription != undefined) {
            if (generalDescription.includes(IgnoreTags.IGNORE_THIS)) {
                return IgnoreTags.IGNORE_THIS;
            }
            else if (generalDescription.includes(IgnoreTags.IGNORE_NODE)) {
                return IgnoreTags.IGNORE_NODE;
            }
        }
        return null;
    }
}
exports.FileAnalyzer = FileAnalyzer;
//# sourceMappingURL=file_analyzer.js.map