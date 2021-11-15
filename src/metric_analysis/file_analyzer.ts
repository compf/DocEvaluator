import { Component } from "../parser/parse_result/component";
import { HierarchicalComponent } from "../parser/parse_result/hierarchical_component";
import { ParseResult } from "../parser/parse_result/parse_result";
import { DocumentationAnalysisMetric } from "./documentation_analysis_metric";
import { MetricResult } from "./metric_result";
import { MetricResultBuilder } from "./metric_result_builder";

export class FileAnalyzer{
    analyze(parse_result:ParseResult,analyzer:DocumentationAnalysisMetric,builder:MetricResultBuilder){
        // The root will not have a comment since it is a file so we will analyze all its children
        for(let rootComponent of parse_result.root.getChildren()){
            this.analyzeComponent(rootComponent,builder,analyzer); 
        }

    }
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