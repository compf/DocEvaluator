import exp from "constants";
import { stringify } from "querystring";
import { EvaluatorConf } from "../../src/conf/EvaluatorConf";
import { CommentedLinesRatioMetric } from "../../src/metric_analysis/commented_lines_ratio_metric";
import { DocumentationAnalysisMetric } from "../../src/metric_analysis/documentation_analysis_metric";
import { FileAnalyzer } from "../../src/metric_analysis/file_analyzer";
import { IgnoreGetterSetterMetric } from "../../src/metric_analysis/ignore_getters_setter_metric";
import { MedianResultBuilder } from "../../src/metric_analysis/median_result_builder";
import { MetricManager } from "../../src/metric_analysis/metric_manager";
import { MetricResult } from "../../src/metric_analysis/metric_result";
import { MetricResultBuilder } from "../../src/metric_analysis/metric_result_builder";
import { SimpleCommentPresentMetric } from "../../src/metric_analysis/simple_comment_present_metric";
import { SimpleLargeMethodCommentedMetric } from "../../src/metric_analysis/simple_large_method_commented_metric";
import { SimpleMethodDocumentationMetric } from "../../src/metric_analysis/simple_method_documentation_metric";
import { SimplePublicMembersOnlyMetric } from "../../src/metric_analysis/simple_public_members_only_metric";
import { WeightedMedianResultBuilder } from "../../src/metric_analysis/weighted_median_result_builder";
import { WeightedMetricResultBuilder } from "../../src/metric_analysis/weighted_metric_result_builder";
import { JavaParser } from "../../src/parser/java_parser";
import { HierarchicalComponent } from "../../src/parser/parse_result/hierarchical_component";
import { MethodComponent } from "../../src/parser/parse_result/method_component";
const path = "testDir/commented_class.java";
function getCommentedClassRoot(): HierarchicalComponent {
    let parser = new JavaParser();

    let root = parser.parse(path);
    return root;
}
test("test simple present metric on commented class", () => {
    let root = getCommentedClassRoot();
    let analyzer = new FileAnalyzer();
    let resultBuilder = new MetricResultBuilder();
    analyzer.analyze({ root, path }, new SimpleCommentPresentMetric(), resultBuilder, undefined);
    const expectedResult = (3 / 11) * 100;
    expect(resultBuilder.getAggregatedResult().getResult()).toBeCloseTo(expectedResult, 5)
});
test("test public only metric on commented class", () => {
    let root = getCommentedClassRoot();
    let resultBuilder = new MetricResultBuilder();
    let analyzer = new FileAnalyzer();
    analyzer.analyze({ root, path }, new SimplePublicMembersOnlyMetric(), resultBuilder, undefined);
    const expectedResult = (2 / 6) * 100;
    expect(resultBuilder.getAggregatedResult().getResult()).toBeCloseTo(expectedResult, 5)
});
test("test longer uncommented method", () => {
    let parser = new JavaParser();
    const path = "testDir/LargeMethodTest.java";
    let root = parser.parse(path);
    let builder = new MetricResultBuilder();
    let analyzer = new FileAnalyzer();
    let conf = { ignoreLines: ["", "{", "}"] }
    analyzer.analyze({ root, path }, new SimpleLargeMethodCommentedMetric(), builder, conf);
    let result = builder.getAggregatedResult();



    const shortCommentedMethodResult = 100;
    const shortUncommentedResult = 98.1873075307798;
    const longCommentedMethodResult = 100;
    const longUncommentedResult = 9.97228425261005;
    ;

    const expectedResult = (shortCommentedMethodResult + shortUncommentedResult + longCommentedMethodResult + longUncommentedResult) / 4;

    expect(result.getResult()).toBeCloseTo(expectedResult);


});
test("test commented ratio metric", () => {
    let parser = new JavaParser();
    const path = "testDir/LargeMethodTest.java";
    let root = parser.parse(path);
    let builder = new MetricResultBuilder();
    let analyzer = new FileAnalyzer();
    let conf = { ignoreLines: ["", "{", "}"] }
    analyzer.analyze({ root, path }, new CommentedLinesRatioMetric(), builder, conf);
    let result = builder.getAggregatedResult();
    expect(result.getResult()).toBe(50);
});
test("test median builder", () => {
    let oddCountArray = [7, 3, 6, 2, 1, 4, 2, 8, 10, 15, 19]
    let evenCountArray = [4, 80, 14, 12, 98, 36, 23, 101, 0, -1, 17, 5]

    expect(oddCountArray.length % 2 == 1).toBeTruthy();
    expect(evenCountArray.length % 2 == 0).toBeTruthy();
    let simple_metric = new SimpleCommentPresentMetric();
    let public_members = new SimplePublicMembersOnlyMetric();
    let medianBuilder = new MedianResultBuilder();
    for (let odd of oddCountArray) {
        medianBuilder.processResult(new MetricResult(odd, [], simple_metric))
    }
    let result = medianBuilder.getAggregatedResult();
    let expectedResult = 6;
    expect(result.getResult()).toBe(expectedResult)


    medianBuilder = new MedianResultBuilder();
    for (let even of evenCountArray) {
        medianBuilder.processResult(new MetricResult(even, [], simple_metric))
    }
    result = medianBuilder.getAggregatedResult();
    expectedResult = 15.5;
    expect(result.getResult()).toBe(expectedResult)



});
test("weighted median builder", () => {
    let oddCountArray = [7, 3, 6, 2, 1, 4, 2, 8, 10, 15, 19]
    let evenCountArray = [4, 80, 14, 12, 98, 36, 23, 101, 0, -1, 17, 5]

    expect(oddCountArray.length % 2 == 1).toBeTruthy();
    expect(evenCountArray.length % 2 == 0).toBeTruthy();
    let simple_metric = new SimpleCommentPresentMetric();
    let public_members = new SimplePublicMembersOnlyMetric();
    let func = (item: DocumentationAnalysisMetric | MetricResultBuilder) => {
        let metric = item as DocumentationAnalysisMetric;
        if (metric != null) {
            if (metric instanceof SimpleCommentPresentMetric) return 2;
            else if (metric instanceof SimplePublicMembersOnlyMetric) return 5;
        }
        return 1;
    };
    let medianBuilder = new WeightedMedianResultBuilder(func)
    for (let number of oddCountArray) {
        medianBuilder.processResult(new MetricResult(number, [], number % 2 == 0 ? simple_metric : public_members))
    }
    let result = medianBuilder.getAggregatedResult();
    let expectedResult = 3;
    expect(result.getResult()).toBe(expectedResult)



})
test("test method documentation compatible", () => {
    let parser = new JavaParser();
    const path = "testDir/CommentClass.java";
    let root = parser.parse(path);

    let builder = new MetricResultBuilder();
    let analyzer = new FileAnalyzer();
    let conf = undefined;
    analyzer.analyze({ root, path }, new SimpleMethodDocumentationMetric(), builder, conf);
    let result = builder.getAggregatedResult();

    const expected = 63.8888888;
    expect(result.getResult()).toBeCloseTo(expected);

});
test("weighted result builder", () => {
    let weightMap: Map<string, number> = new Map<string, number>();
    weightMap.set("simple_comment", 1);
    weightMap.set("public_members_only", 3);

    let parser = new JavaParser();
    const path = "testDir/commented_class.java";
    let root = parser.parse(path);
    let fn = (creator: DocumentationAnalysisMetric | MetricResultBuilder) => {
        let metric = creator as DocumentationAnalysisMetric;
        if (metric != null) {
            return weightMap.get(MetricManager.getMetricName(metric))!!;
        }
        console.log("null metric")
        return 1;
    }
    let builder = new WeightedMetricResultBuilder(fn);

    let firstBuilder = new MetricResultBuilder();
    let analyzer = new FileAnalyzer();
    analyzer.analyze({ root, path }, MetricManager.getMetric("simple_comment"), firstBuilder, undefined);
    const simpleCommentExpectedResult = (3 / 11) * 100;
    let simpleCommentResult = firstBuilder.getAggregatedResult();

    let secondBuilder = new MetricResultBuilder();

    analyzer.analyze({ root, path }, MetricManager.getMetric("public_members_only"), secondBuilder, undefined);
    let publicMembersOnlyResult = secondBuilder.getAggregatedResult();

    const publicMembersExpectedOnlyResult = (2 / 6) * 100;
    let simple_comment_weight = weightMap.get("simple_comment")!!;
    let public_members_weight = weightMap.get("public_members_only")!!;
    let expectedResult = (simpleCommentExpectedResult * simple_comment_weight + publicMembersExpectedOnlyResult * public_members_weight) / (simple_comment_weight + public_members_weight);
    builder.processResult(simpleCommentResult);
    builder.processResult(publicMembersOnlyResult);
    let actual = builder.getAggregatedResult().getResult();
    expect(actual).toBeCloseTo(expectedResult);

});
test("test ignore getters setter",()=>{
let parser=new JavaParser();
const path="testDir/GetterSetter.java"
let root=parser.parse(path);
let res={root,path};
let builder=new MetricResultBuilder();
let metric=new IgnoreGetterSetterMetric();
let analyzer=new FileAnalyzer();
let params={getterPattern:"(get.*)|(is.*)",setterPattern:"set.*"}
analyzer.analyze(res,metric,builder,params)
let result=builder.getAggregatedResult();
expect(result.getResult()).toBe(25);

});