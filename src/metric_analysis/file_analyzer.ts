import { Component } from "../parser/parse_result/component";
import { HierarchicalComponent } from "../parser/parse_result/hierarchical_component";
import { ParseResult } from "../parser/parse_result/parse_result";
import { AbstractMetricBuilder } from "./abstract_metric_builder";
import { LanguageSpecificHelper } from "./language_specific/language_specific_helper";
import { DocumentationAnalysisMetric } from "./metrics/documentation_analysis_metric";

enum IgnoreTags{IGNORE_THIS="%ignore_this%",IGNORE_NODE="%ignore_node%"}
export class FileAnalyzer {
    /**
     * analyse a file that is given by the ParseResult
     * @param parse_result A valid ParseResult with a HierarchicalComponent
     * @param analyzer The metric to evaluate the file
     * @param builder The result builder to process the several results
     */
    analyze(parse_result: ParseResult, analyzer: DocumentationAnalysisMetric, builder: AbstractMetricBuilder,langSpec:LanguageSpecificHelper) {
        this.analyzeComponent(parse_result.root, builder, analyzer,langSpec);
    }
    /**
     * 
     * @param component Recursively analyze the component and processes the several result in the builder
     * @param builder  The result builder to process the several results
     * @param analyzer The metric to evaluate the file
     */
    private analyzeComponent(component: Component, builder: AbstractMetricBuilder, analyzer: DocumentationAnalysisMetric,langSpec:LanguageSpecificHelper): void {
        let ignoreTag=this.getIgnoreFlag(component);
        //console.log(DocumentationAnalysisMetric.languageHelper);
        // Only analyze relevant component to this metric
        if ( langSpec.shallConsider(component) && analyzer.shallConsider(component) && ignoreTag!=IgnoreTags.IGNORE_THIS && ignoreTag!=IgnoreTags.IGNORE_NODE) {
            analyzer.analyze(component, builder,langSpec);
        }
        /* Analyze the children of the component if it is a hierarchical one
        This will be done even if the parent was not considered because we don't want to miss
        something
        */
        if (component instanceof HierarchicalComponent && ignoreTag!=IgnoreTags.IGNORE_NODE) {
            for (let c of component.getChildren()) {
                this.analyzeComponent(c, builder, analyzer,langSpec);
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
    private getIgnoreFlag(component:Component):IgnoreTags|null{
        let generalDescription=component.getComment()?.getGeneralDescription();
        if(generalDescription!=null && generalDescription!=undefined ){
            if(generalDescription.includes(IgnoreTags.IGNORE_THIS)){
                return IgnoreTags.IGNORE_THIS;
            }
            else if(generalDescription.includes(IgnoreTags.IGNORE_NODE)){
                return IgnoreTags.IGNORE_NODE;
            }
        }
        return null;

    }
}