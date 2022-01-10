import nlp from "compromise";
import { FileAnalyzer } from "../../src/metric_analysis/file_analyzer";
import { FleschMetric } from "../../src/metric_analysis/metrics/flesch_metric";
import { MetricManager } from "../../src/metric_analysis/metric_manager";
import { MetricResultBuilder } from "../../src/metric_analysis/metric_result_builder";
import { NLP_Helper } from "../../src/metric_analysis/NLP_Helper";
import { JavaParser } from "../../src/parser/java_parser";
test("Test syllables",()=>{
    const text="This is a sample text";
    let nlp_helper=new NLP_Helper();
   expect(nlp_helper.getRelevantVariables(text).numSyllables).toBe(6);
});
test("test flesch kincaid",()=>{
    const text="This is a longer text. It consists of multiple sentences."+
    " You should read this sentence carefully. Otherwise you might miss something";
    let nlp_helper=new NLP_Helper();
    let res=nlp_helper.getRelevantVariables(text);
    expect(res.numSentences).toBe(4);
    expect(res.numWords).toBe(21);
    expect(res.numSyllables).toBe(34);

    let flesh_kincaid=206.835-1.015*(res.numWords/res.numSentences)-84.6*(res.numSyllables/res.numWords);
    expect(flesh_kincaid).toBeCloseTo(64.5348);

});
test("test complex flesh metric",()=>{
    const path="testDir/FleschTestComplex.java";
    let root=new JavaParser().parse(path);
    let res={path,root}
    let analyzer=new FileAnalyzer();
    let builder=new MetricResultBuilder();
    let params=MetricManager.getDefaultMetricParam("flesch");
    analyzer.analyze(res,MetricManager.createMetricByType(FleschMetric,"flesch_complex",params),builder,);
    let score=builder.getAggregatedResult().getResult();
    expect(score).toBeCloseTo(15.68);
});

test("test easy flesh metric",()=>{
    const path="testDir/FleschTestEasy.java";
    let root=new JavaParser().parse(path);
    let res={path,root}
    let analyzer=new FileAnalyzer();
    let builder=new MetricResultBuilder();
    let params=MetricManager.getDefaultMetricParam("flesch");

    analyzer.analyze(res,MetricManager.createMetricByType(FleschMetric,"flesch_complex",params),builder,);
    let score=builder.getAggregatedResult().getResult();
    expect(score).toBeCloseTo(85);
});



