import { ParseResult } from "../parser/parse_result/parse_result";
import { AbstractMetricBuilder } from "./abstract_metric_builder";
import { LanguageSpecificHelper } from "./language_specific/language_specific_helper";
import { DocumentationAnalysisMetric } from "./metrics/documentation_analysis_metric";
export declare class FileAnalyzer {
    /**
     * analyse a file that is given by the ParseResult
     * @param parse_result A valid ParseResult with a HierarchicalComponent
     * @param analyzer The metric to evaluate the file
     * @param builder The result builder to process the several results
     */
    analyze(parse_result: ParseResult, analyzer: DocumentationAnalysisMetric, builder: AbstractMetricBuilder, langSpec: LanguageSpecificHelper): void;
    /**
     *
     * @param component Recursively analyze the component and processes the several result in the builder
     * @param builder  The result builder to process the several results
     * @param analyzer The metric to evaluate the file
     */
    private analyzeComponent;
    /**
     * Checks whether the component's comment contains the string "%ignore_comment%"
     * These component's will be ignored as they are presumed to be not relevant
     * @param component the component to check
     * @returns null if the component can be processed, otherwise "%ignore_this%",
     *  if only this component should be ignored, or "%ignore_node%" if also all potential children should be ignored
     */
    private getIgnoreFlag;
}
