import { FileAnalyzer } from "../../src/metric_analysis/file_analyzer";
import { JavaSpecificHelper } from "../../src/metric_analysis/language_specific/java_specific_helper";
import { MetricManager } from "../../src/metric_analysis/metric_manager";
import { MetricResultBuilder } from "../../src/metric_analysis/metric_result_builder";
import { JavaParser } from "../../src/parser/java_parser";
import { HierarchicalComponent } from "../../src/parser/parse_result/hierarchical_component";
import { ParseResult } from "../../src/parser/parse_result/parse_result";
let languageHelper = new JavaSpecificHelper();
let javaParser=new JavaParser();
export function parse(path:string): ParseResult {
    let root = javaParser.parse(path);
    return {root,path};
}
export function testParsedFile(res:ParseResult,metricName: MetricManager.MetricNames,params: any , expected: number, digits: number){
    let analyzer = new FileAnalyzer();
    let uniqueName=MetricManager.getUniqueName(metricName);
    let metric = MetricManager.createMetricByName(metricName, uniqueName, params);
    let builder = new MetricResultBuilder();
    if (params == undefined) {
        params = MetricManager.getDefaultMetricParam(metricName);
    }
    analyzer.analyze(res, metric, builder, languageHelper);
    let result = builder.getAggregatedResult([]);
    expect(result).toBeCloseTo(expected, digits);
}
export function parseAndTestFile(metricName: MetricManager.MetricNames, filename: string, params: any , expected: number, digits: number) {
  
    let root = javaParser.parse(filename);   
    testParsedFile({path:filename,root},metricName,params,expected,digits);
}