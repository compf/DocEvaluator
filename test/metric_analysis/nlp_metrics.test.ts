import nlp from "compromise";
import {syllable} from "syllable";
import { FileAnalyzer } from "../../src/metric_analysis/file_analyzer";
import { FleshMetric } from "../../src/metric_analysis/metrics/flesh_metric";
import { MetricManager } from "../../src/metric_analysis/metric_manager";
import { MetricResultBuilder } from "../../src/metric_analysis/metric_result_builder";
import { JavaParser } from "../../src/parser/java_parser";
test("Test syllables",()=>{
    const text="This is a sample text";
   let syllable_count= syllable(text);
   expect(syllable_count).toBe(6);
});
test("test flesch kincaid",()=>{
    const text="This is a longer text. It consists of multiple sentences."+
    " You should read this sentence carefully. Otherwise you might miss something";
    let corpus=nlp(text);
    console.log(text);
    const sent=corpus.sentences();
    /* Somehow typescript thinks this a method but it is a property 
    and this strange conversion needs to be done
    */
    const numSentences=(sent.length as unknown) as number; 
    const numWords=corpus.wordCount();
    const numSyllables=syllable(text);

    expect(numSentences).toBe(4);
    expect(numWords).toBe(21);
    expect(numSyllables).toBe(33);

    let flesh_kincaid=206.835-1.015*(numWords/numSentences)-84.6*(numSyllables/numWords);
    expect(flesh_kincaid).toBeCloseTo(68.563);

});
test("test complex flesh metric",()=>{
    const path="testDir/FleshTestComplex.java";
    let root=new JavaParser().parse(path);
    let res={path,root}
    let analyzer=new FileAnalyzer();
    let builder=new MetricResultBuilder();
    analyzer.analyze(res,new FleshMetric(),builder,MetricManager.getDefaultMetricParam("flesh"));
    let score=builder.getAggregatedResult().getResult();
    expect(score).toBeCloseTo(15.68);
});

test("test easy flesh metric",()=>{
    const path="testDir/FleshTestEasy.java";
    let root=new JavaParser().parse(path);
    let res={path,root}
    let analyzer=new FileAnalyzer();
    let builder=new MetricResultBuilder();
    analyzer.analyze(res,new FleshMetric(),builder,MetricManager.getDefaultMetricParam("flesh"));
    let score=builder.getAggregatedResult().getResult();
    expect(score).toBeCloseTo(70);
});



