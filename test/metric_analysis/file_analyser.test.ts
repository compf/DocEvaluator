import { EvaluatorConf } from "../../src/conf/EvaluatorConf";
import { FileAnalyzer } from "../../src/metric_analysis/file_analyzer";
import { MetricResultBuilder } from "../../src/metric_analysis/metric_result_builder";
import { SimpleCommentPresentMetric } from "../../src/metric_analysis/simple_comment_present_metric";
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
    const conf=new EvaluatorConf();

    let resultBuilder=new MetricResultBuilder();
    analyzer.analyze({root,path},new SimpleCommentPresentMetric(),resultBuilder,conf);
    const expectedResult=(3/11)*100;
    expect(resultBuilder.getAggregatedResult().getResult()).toBeCloseTo(expectedResult,5)
});
test("test public only metric on commented class",()=>{
    let root=getCommentedClassRoot();
    let resultBuilder=new MetricResultBuilder();
    let analyzer=new FileAnalyzer();
    const conf=new EvaluatorConf();
    analyzer.analyze({root,path},new SimplePublicMembersOnlyMetric(),resultBuilder,conf);
    const expectedResult=(2/6)*100;
    expect(resultBuilder.getAggregatedResult().getResult()).toBeCloseTo(expectedResult,5)
})