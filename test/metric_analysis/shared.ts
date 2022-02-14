import { FileAnalyzer } from "../../src/metric_analysis/file_analyzer";
import { JavaSpecificHelper } from "../../src/metric_analysis/language_specific/java_specific_helper";
import { MetricManager } from "../../src/metric_analysis/metric_manager";
import { MetricResultBuilder } from "../../src/metric_analysis/metric_result_builder";
import { JavaParser } from "../../src/parser/java_parser";
let languageHelper = new JavaSpecificHelper();
export function testSimpleFile(metricName: MetricManager.MetricNames, filename: string, uniqueName: string, params: any | undefined, expected: number, digits: number) {
    if (params == undefined) {
        params = MetricManager.getDefaultMetricParam(metricName);
    }

    let spelling = MetricManager.createMetricByName(metricName, uniqueName, params);
    let builder = new MetricResultBuilder();
    let root = new JavaParser().parse(filename);

    let res = { path: filename, root: root }
    let analyzer = new FileAnalyzer();
    analyzer.analyze(res, spelling, builder, languageHelper);
    let result = builder.getAggregatedResult([]);
    expect(result).toBeCloseTo(expected, digits);

}