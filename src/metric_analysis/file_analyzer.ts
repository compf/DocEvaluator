import { Component } from "../parser/parse_result/component";
import { HierarchicalComponent } from "../parser/parse_result/hierarchical_component";
import { ParseResult } from "../parser/parse_result/parse_result";
import { DocumentationAnalysisMetric } from "./documentation_analysis_metric";
import { MetricResultBuilder } from "./metric_result_builder";

export class FileAnalyzer{
    /**
     * analyse a file that is given by the ParseResult
     * @param parse_result A valid ParseResult with a HierarchicalComponent
     * @param analyzer The metric to evaluate the file
     * @param builder The result builder to process the several results
     */
    analyze(parse_result:ParseResult,analyzer:DocumentationAnalysisMetric,builder:MetricResultBuilder){
        // The root will not have a comment since it is a file so we will analyze all its children
        for(let rootComponent of parse_result.root.getChildren()){
            this.analyzeComponent(rootComponent,builder,analyzer); 
        }

    }
    /**
     * 
     * @param component Recursively analyze the component and processes the several result in the builder
     * @param builder  The result builder to process the several results
     * @param analyzer The metric to evaluate the file
     */
    private analyzeComponent(component:Component,builder:MetricResultBuilder,analyzer:DocumentationAnalysisMetric):void{
        analyzer.analyze(component,builder);
        if(component instanceof HierarchicalComponent ){
            let hierarchical=component as HierarchicalComponent;
            for(let c of hierarchical.getChildren()){
                this.analyzeComponent(c,builder,analyzer);
            }
        }
       
    }
}