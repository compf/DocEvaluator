import { EvaluatorConf } from "../../src/conf/EvaluatorConf";
import { FileAnalyzer } from "../../src/metric_analysis/file_analyzer";
import { MetricResultBuilder } from "../../src/metric_analysis/metric_result_builder";
import { SimpleCommentPresentMetric } from "../../src/metric_analysis/simple_comment_present_metric";
import { SimpleLargeMethodCommentedMetric } from "../../src/metric_analysis/simple_large_method_commented_metric";
import { SimplePublicMembersOnlyMetric } from "../../src/metric_analysis/simple_public_members_only_metric";
import { JavaParser } from "../../src/parser/java_parser";
import { HierarchicalComponent } from "../../src/parser/parse_result/hierarchical_component";
const path="testDir/commented_class.java";
function getCommentedClassRoot():HierarchicalComponent{
    let parser=new JavaParser();
   
    let root=parser.parse(path);
    return root;
}
test("test simple present metric on commented class",()=>{
   let root=getCommentedClassRoot();
    let analyzer=new FileAnalyzer();
    let resultBuilder=new MetricResultBuilder();
    analyzer.analyze({root,path},new SimpleCommentPresentMetric(),resultBuilder,undefined);
    const expectedResult=(3/11)*100;
    expect(resultBuilder.getAggregatedResult().getResult()).toBeCloseTo(expectedResult,5)
});
test("test public only metric on commented class",()=>{
    let root=getCommentedClassRoot();
    let resultBuilder=new MetricResultBuilder();
    let analyzer=new FileAnalyzer();
    analyzer.analyze({root,path},new SimplePublicMembersOnlyMetric(),resultBuilder,undefined);
    const expectedResult=(2/6)*100;
    expect(resultBuilder.getAggregatedResult().getResult()).toBeCloseTo(expectedResult,5)
});
test("test longer uncommented method",()=>{
    let parser=new JavaParser();
    const path="testDir/LargeMethodTest.java";
    let root=parser.parse(path);
    let builder=new MetricResultBuilder();
    let analyzer=new FileAnalyzer();
    let conf={ignoreLines:["","{","}"]}
    analyzer.analyze({root,path},new SimpleLargeMethodCommentedMetric(),builder,conf);
    let result=builder.getAggregatedResult();



    //expect(result.getLogMessages).toHaveLength(2);
    const shortCommentedMethodResult=100;
    const shortUncommentedResult=97.0445533548508;
    const longCommentedMethodResult=100;
    const longUncommentedResult=53.2591801006897
    ;

    const expectedResult=(shortCommentedMethodResult+shortUncommentedResult+longCommentedMethodResult+longUncommentedResult)/4;

    expect(result.getResult()).toBeCloseTo(expectedResult);


})