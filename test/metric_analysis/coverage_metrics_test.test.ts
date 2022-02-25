import { FileAnalyzer } from "../../src/metric_analysis/file_analyzer";
import { SimpleCommentPresentMetric } from "../../src/metric_analysis/metrics/simple_comment_present_metric";
import { SimplePublicMembersOnlyMetric } from "../../src/metric_analysis/metrics/simple_public_members_only_metric";
import { MetricManager } from "../../src/metric_analysis/metric_manager";
import { MetricResultBuilder } from "../../src/metric_analysis/metric_result_builder";
import { parseAndTestFile,testParsedFile,parse } from "./shared";
let MetricNames=MetricManager.MetricNames;
const commented_class=parse("testDir/java/commented_class.java");
const noComment=parse("testDir/java/NoCommentTest.java");
test("test simple present metric on commented class", () => {
    const expected=(3 / 11) * 100;
    testParsedFile(commented_class,MetricNames.simple_comment,undefined,expected,5)
});

test("test public only metric on commented class", () => {
    const expected= (2 / 6) * 100
    testParsedFile(commented_class,MetricNames.public_members_only,undefined,expected,5)
});
test("test commented ratio metric", () => {
    const expected= 50;
    parseAndTestFile(MetricNames.commented_lines_ratio,"testDir/java/LargeMethodTest.java",undefined,expected,5)
});
test("test ignore getters setters", () => {
    const expected=25;
    const params={ getterPattern: "(get.*)|(is.*)", setterPattern: "set.*", ignore_getter_setter: true }
    parseAndTestFile(MetricNames.simple_comment,"testDir/java/GetterSetter.java",params,expected,1);

});
test("test coverage metrics on no comment",()=>{
    let coverageMetrics=[MetricNames.simple_comment,MetricNames.public_members_only,MetricNames.commented_lines_ratio]

    const expected=0;
    for(let metric of coverageMetrics){
        testParsedFile(noComment,metric,undefined,expected,5)
    }    


});
test("test ignore comments", () => {
    const expected=50;
    parseAndTestFile(MetricNames.simple_comment,"testDir/java/TestIgnoreComments.java",undefined,expected,1);
   
});
test("test method documentation compatible", () => {
    const expected = 63.8888888;
    parseAndTestFile(MetricNames.method_fully_documented,"testDir/java/CommentClass.java",undefined,expected,2);

});

test("test overriding and java throws", () => {
    const path = "testDir/java/OverridingTest.java";
    const expectedResult = 80;
    parseAndTestFile(MetricNames.method_fully_documented,path,undefined,expectedResult,1);
   
});