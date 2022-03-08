import { MetricManager } from "../../src/metric_analysis/metric_manager";
import { parseAndTestFile } from "./shared";
const largeMethod="testDir/java/LargeMethodTest.java";
test("test longer uncommented method", () => {
    let conf = { ignore_lines: ["", "{", "}"], k: 0.2 };
    const shortCommentedMethodResult = 100;
    const shortUncommentedResult = 98.1873075307798;
    const longCommentedMethodResult = 100;
    const longUncommentedResult = 9.97228425261005;
    const expectedResult = (shortCommentedMethodResult + shortUncommentedResult + longCommentedMethodResult + longUncommentedResult) / 4;
    parseAndTestFile(MetricManager.MetricNames.large_method_commented,largeMethod,conf,expectedResult,2);
   
});
test("test good formatting", () => {
    const expectedResult = 87.9153;
    parseAndTestFile(MetricManager.MetricNames.formatting_good,"testDir/java/GoodFormattingTest.java",undefined,expectedResult,2);
    
});
test("test no formatting", () => {
    const expectedResult = 67.032;
    const params=MetricManager.getDefaultMetricParam(MetricManager.MetricNames.formatting_good);
    params.accept_no_formatting=false;
    parseAndTestFile(MetricManager.MetricNames.formatting_good,"testDir/java/NoFormattingTest.java",params,expectedResult,2);

});
test("not closed html ",()=>{
    const expected=81.873;
    parseAndTestFile(MetricManager.MetricNames.formatting_good,"testDir/java/InvalidTagTest.java",undefined,expected,3);

});
test("empty comment certain words",()=>{
    parseAndTestFile(MetricManager.MetricNames.certain_terms,"testDir/java/EmptyCommentTest.java",undefined,100,1);
});