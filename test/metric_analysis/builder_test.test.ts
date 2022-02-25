import { CommentedLinesRatioMetric } from "../../src/metric_analysis/metrics/commented_lines_ratio_metric";
import { FileAnalyzer } from "../../src/metric_analysis/file_analyzer";
import { MedianResultBuilder } from "../../src/metric_analysis/median_result_builder";
import { MetricManager } from "../../src/metric_analysis/metric_manager";
import { MetricResult } from "../../src/metric_analysis/metric_result";
import { MetricResultBuilder } from "../../src/metric_analysis/metric_result_builder";
import { SimpleCommentPresentMetric } from "../../src/metric_analysis/metrics/simple_comment_present_metric";
import { SimpleLargeMethodCommentedMetric } from "../../src/metric_analysis/metrics/simple_large_method_commented_metric";
import { SimpleMethodDocumentationMetric } from "../../src/metric_analysis/metrics/simple_method_documentation_metric";
import { SimplePublicMembersOnlyMetric } from "../../src/metric_analysis/metrics/simple_public_members_only_metric";
import { WeightedMedianResultBuilder } from "../../src/metric_analysis/weighted_median_result_builder";
import { WeightedMetricResultBuilder } from "../../src/metric_analysis/weighted_metric_result_builder";
import { JavaParser } from "../../src/parser/java_parser";
import { HierarchicalComponent } from "../../src/parser/parse_result/hierarchical_component";
import { PathWeightResolver, SimpleWeightResolver, StubResolver, WeightResolver } from "../../src/metric_analysis/weight_resolver";
import { LanguageSpecificHelperFactory } from "../../src/metric_analysis/language_specific/language_specific_helper_factory";
import { FormattingGoodMetric } from "../../src/metric_analysis/metrics/formatting_good_metric";
import { SqualeResultBuilder } from "../../src/metric_analysis/squale_builder";
const languageHelper = LanguageSpecificHelperFactory.loadHelper("java");





test("test median builder", () => {
    let oddCountArray = [7, 3, 6, 2, 1, 4, 2, 8, 10, 15, 19]
    let evenCountArray = [4, 80, 14, 12, 98, 36, 23, 101, 0, -1, 17, 5]

    expect(oddCountArray.length % 2 == 1).toBeTruthy();
    expect(evenCountArray.length % 2 == 0).toBeTruthy();
    const creatorTuple={path:"",component:"",metric:""};
    let medianBuilder = new MedianResultBuilder();
    for (let odd of oddCountArray) {
        medianBuilder.processResult(new MetricResult(odd, [], creatorTuple))
    }
    let result = medianBuilder.getAggregatedResult([]);
    let expectedResult = 6;
    expect(result).toBe(expectedResult)


    medianBuilder = new MedianResultBuilder();
    for (let even of evenCountArray) {
        medianBuilder.processResult(new MetricResult(even, [], creatorTuple))
    }
    result = medianBuilder.getAggregatedResult([]);
    expectedResult = 15.5;
    expect(result).toBe(expectedResult)



});
test("weighted median builder", () => {
    let oddCountArray = [7, 3, 6, 2, 1, 4, 2, 8, 10, 15, 19]
    let evenCountArray = [4, 80, 14, 12, 98, 36, 23, 101, 0, -1, 17, 5]

    expect(oddCountArray.length % 2 == 1).toBeTruthy();
    expect(evenCountArray.length % 2 == 0).toBeTruthy();
    let simple_metric = MetricManager.createMetricByType(SimpleCommentPresentMetric, "simple_comment_w_median", undefined)
    let public_members = MetricManager.createMetricByType(SimplePublicMembersOnlyMetric, "simple_public_w_median", undefined)
    let map = new Map<any, number>();
    map.set("simple_comment_w_median", 2);
    map.set("simple_public_w_median", 5);
    let resolverTuple={metrics:new SimpleWeightResolver(map),files:new StubResolver(),components:new StubResolver()}
    let medianBuilder = new WeightedMedianResultBuilder(resolverTuple)
    for (let number of oddCountArray) {
        medianBuilder.processResult(new MetricResult(number, [], {path:"",component:"",metric:number % 2 == 0 ? "simple_comment_w_median" : "simple_public_w_median"}))
    }
    let result = medianBuilder.getAggregatedResult([]);
    let expectedResult = 3;
    expect(result).toBe(expectedResult)



})

test("weighted result builder", () => {
    let weightMap: Map<any, number> = new Map<any, number>();
    const simple_comment = MetricManager.createMetricByType(SimpleCommentPresentMetric, "simple_comment_weighted", undefined);
    const public_members = MetricManager.createMetricByType(SimplePublicMembersOnlyMetric, "simple_public_weighted", undefined);

    weightMap.set("simple_comment_weighted", 1);
    weightMap.set("simple_public_weighted", 3);
    let resolverTuple={metrics:new SimpleWeightResolver(weightMap),files:new StubResolver(),components:new StubResolver()}

    let parser = new JavaParser();
    const path = "testDir/java/commented_class.java";
    let root = parser.parse(path);

    let builder = new WeightedMetricResultBuilder(resolverTuple);

    let firstBuilder = new MetricResultBuilder();
    let analyzer = new FileAnalyzer();
    analyzer.analyze({ root, path }, simple_comment, firstBuilder, languageHelper);
    const simpleCommentExpectedResult = (3 / 11) * 100;

    let simpleCommentResult =  new MetricResult(firstBuilder.getAggregatedResult([]),[],{path:"",metric:"simple_comment_weighted",component:""});

    let secondBuilder = new MetricResultBuilder();

    analyzer.analyze({ root, path }, public_members, secondBuilder, languageHelper);
    let publicMembersOnlyResult = new MetricResult(secondBuilder.getAggregatedResult([]),[],{path:"",metric:"simple_public_weighted",component:""});

    const publicMembersExpectedOnlyResult = (2 / 6) * 100;
    let simple_comment_weight = weightMap.get("simple_comment_weighted")!;
    let public_members_weight = weightMap.get("simple_public_weighted")!;
    let expectedResult = (simpleCommentExpectedResult * simple_comment_weight + publicMembersExpectedOnlyResult * public_members_weight) / (simple_comment_weight + public_members_weight);
    builder.processResult(simpleCommentResult);
    builder.processResult(publicMembersOnlyResult);
    let actual = builder.getAggregatedResult([]);
    expect(actual).toBeCloseTo(expectedResult);

});




test("test weighted path", () => {
    let paths = ["./testDir/java/CommentClass.java", "./testDir/java/commented_class.java", "./testDir/java/LargeMethodTest.java", "./testDir/java/GetterSetter.java"];
    let path_weights = [{ path: "*Class.java", weight: 5 }, { path: "*_class.java", weight: 5 }];
    let resolverTuple={metrics:new StubResolver(),files:new PathWeightResolver(path_weights, 1),components:new StubResolver()}

    let builder = new WeightedMetricResultBuilder(resolverTuple);
    let metric = MetricManager.createMetricByType(SimpleCommentPresentMetric, "simple_weighted_path", undefined);
    let parser = new JavaParser();
    let fileAnalyzer = new FileAnalyzer();
    for (let p of paths) {
        let root = parser.parse(p);
        fileAnalyzer.analyze({ path: p, root: root }, metric, builder, languageHelper);
     
    }
    let result = builder.getAggregatedResult([]);
    const expected=38.235;
    expect(result).toBeCloseTo(expected, 3);

});



class ComponentWeight implements WeightResolver {
    resolveWeight(key: string): number {
        switch (key) {
            case "ClassComponent":
                return 5;
            case "MethodComponent":
                return 1;
            default:
                return 1;
        }
    }

}
test("test component weighting", () => {
    const path = "testDir/java/CertainWordsTest.java";
    let parser = new JavaParser();
    let root = parser.parse(path);
    let result = { path, root };
    let params = MetricManager.getDefaultMetricParam(MetricManager.MetricNames.simple_comment);
    let doc = MetricManager.createMetricByType(SimpleCommentPresentMetric, "simple", params);
    let fileAnalyzer = new FileAnalyzer();
    let resolverTuple={metrics:new StubResolver(),components:new ComponentWeight(),files:new StubResolver()}



    let singleFileResultBuilder = new WeightedMetricResultBuilder(resolverTuple);
    fileAnalyzer.analyze(result, doc, singleFileResultBuilder, languageHelper);
    let finalResult = singleFileResultBuilder.getAggregatedResult([]);
    const expectedResult = 87.5;
    expect(finalResult).toBeCloseTo(expectedResult);
});

test("squale result builder", () => {
    let squale = new SqualeResultBuilder(undefined);
    let creatorTuple={path:"",component:"",metric:""};
    let metricResults = [100, 100, 90, 100, 100, 80, 0, 100, 100].map((i) => new MetricResult(i, [], creatorTuple));
    expect(metricResults).toHaveLength(9);
    for (let m of metricResults) {
        squale.processResult(m);
    }
    let finalResult = squale.getAggregatedResult([]);
    const expected = 33.092;
    expect(finalResult).toBeCloseTo(expected);
});