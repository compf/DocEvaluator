
import { FileAnalyzer } from "../../src/metric_analysis/file_analyzer";
import { LanguageSpecificHelperFactory } from "../../src/metric_analysis/language_specific/language_specific_helper_factory";
import { CertainTermCountMetric } from "../../src/metric_analysis/metrics/certain_terms_count_metric";
import { CommentNameCoherenceMetric } from "../../src/metric_analysis/metrics/comment_name_coherence_metric";
import { MAX_SCORE, MIN_SCORE } from "../../src/metric_analysis/metrics/documentation_analysis_metric";
import { DEFAULT_EDGE_CASE_TERMS, EdgeCaseMetric } from "../../src/metric_analysis/metrics/edge_case_metric";
import { FleschMetric } from "../../src/metric_analysis/metrics/flesch_metric";
import { Utils } from "../../src/metric_analysis/metrics/util";
import { MetricManager } from "../../src/metric_analysis/metric_manager";
import { MetricResultBuilder } from "../../src/metric_analysis/metric_result_builder";
import { NLP_Helper } from "../../src/metric_analysis/NLP_Helper";
import { JavaParser } from "../../src/parser/java_parser";
import { parseAndTestFile,parse, testParsedFile } from "./shared";
const languageHelper = LanguageSpecificHelperFactory.loadHelper("java");
const emptyComment=parse("testDir/java/EmptyCommentTest.java");
const noComment=parse("testDir/java/NoCommentTest.java");
test("Test syllables", () => {
    const text = "This is a sample text";
    expect(NLP_Helper.getRelevantVariables(text).numSyllables).toBe(6);
});
test("test flesch kincaid", () => {
    const text = "This is a longer text. It consists of multiple sentences." +
        " You should read this sentence carefully. Otherwise you might miss something";
    let res = NLP_Helper.getRelevantVariables(text);
    expect(res.numSentences).toBe(4);
    expect(res.numWords).toBe(21);
    expect(res.numSyllables).toBe(34);

    let flesh_kincaid = 206.835 - 1.015 * (res.numWords / res.numSentences) - 84.6 * (res.numSyllables / res.numWords);
    expect(flesh_kincaid).toBeCloseTo(64.5348);

});
test("test complex flesh metric", () => {
    const expected=(15.68+0)/2;
    parseAndTestFile(MetricManager.MetricNames.flesch,"testDir/java/FleschTestComplex.java",undefined,expected,2);  
});

test("test easy flesh metric", () => {
    const expected=87.26;
    parseAndTestFile(MetricManager.MetricNames.flesch,"testDir/java/FleschTestEasy.java",undefined,expected,2);
});
test("test empty comment with flesh",()=>{
const expected=0;
testParsedFile(emptyComment,MetricManager.MetricNames.flesch,undefined,expected,1);
});
test("test method params with flesh",()=>{
    const expected=85;
    let params=MetricManager.getDefaultMetricParam(MetricManager.MetricNames.flesch);
    params.consider_tags=true;
    parseAndTestFile(MetricManager.MetricNames.flesch,"testDir/java/FleschTestEasyParams.java",params,expected,2);
});
test(" test get words", () => {
    const text = "This is a text";
    const splitted_expected = text.split(" ");
    let splitted = NLP_Helper.getTokens(text);
    expect(splitted).toMatchObject(splitted_expected);
});
test("test name convention splitting", () => {

    let coherence = new CommentNameCoherenceMetric("", null);
    let result = coherence.splitByNameConvention("getTest");
    expect(result).toMatchObject(["get", "Test"]);

    result = coherence.splitByNameConvention("get_Test");
    expect(result).toMatchObject(["get", "Test"]);

    result = coherence.splitByNameConvention("get_helloWorld");
    expect(result).toMatchObject(["get", "hello", "World"]);
});
test("test levenshtein", () => {
    let res = NLP_Helper.levenshtein("test", "tast");
    expect(res).toBe(1);
});
test("test method coherence", () => {
    const expected=50;
    parseAndTestFile(MetricManager.MetricNames.comment_name_coherence,"testDir/java/CommentCoherenceTest.java",undefined,expected,1);
});
test("test method coherence on empty comment", () => {
    const expected=0;
    testParsedFile(emptyComment,MetricManager.MetricNames.comment_name_coherence,undefined,expected,1);
});
test("test certain terms count", () => {
    const params=MetricManager.getDefaultMetricParam(MetricManager.MetricNames.certain_terms);
    params.consider_tags=true;
    const expected=88.188;
    parseAndTestFile(MetricManager.MetricNames.certain_terms,"testDir/java/CertainWordsTest.java",params,expected,2);
   
});
test("test certain term, use additional terms too",()=>{
    const params=MetricManager.getDefaultMetricParam(MetricManager.MetricNames.certain_terms);
    const paramsCopy=MetricManager.getDefaultMetricParam(MetricManager.MetricNames.certain_terms);

    params.use_default_terms_too=true;
    params.terms=["hallo","test"];
    for(let t of params.terms){
        paramsCopy.terms.push(t);
    }
    let metric=new CertainTermCountMetric("metric",params);

    expect(new Set(metric.getParams().terms)).toEqual(new Set(paramsCopy.terms));

   
})
test("test spelling", () => {
    let params=MetricManager.getDefaultMetricParam(MetricManager.MetricNames.spelling);
    params.consider_tags=true;
    parseAndTestFile(MetricManager.MetricNames.spelling, "testDir/java/SpellingTest.java",
     
        undefined, 86.07, 2)
});
test("test spelling with additional words", () => {
    let params = MetricManager.getDefaultMetricParam(MetricManager.MetricNames.spelling);
    params.dictionary_path = "testDir/spelling_dictionary.txt";
    params.additional_words.push("clas");
    parseAndTestFile(MetricManager.MetricNames.spelling, "testDir/java/SpellingTestWithAdditional.java",
        params, 95.122, 2)
});
test("test spelling with context",()=>{
    const expected=100;
    parseAndTestFile(MetricManager.MetricNames.spelling,"testDir/java/SpellingContextTest.java",undefined,expected,1);
});
test("nlp matching, null check", () => {

    let terms = DEFAULT_EDGE_CASE_TERMS.map((s) => s.replace("%null", "null"));
    let positiveCases = [
        "returns null if smaller than 0",
        "may not be null",
        "the value null will be treated as invalid",
        "not null",
        "never returns null",
        "cannot return null",
    ];
    for (let sentence of positiveCases) {
        expect(NLP_Helper.hasOneOfTerms(sentence, terms)).toBeTruthy();
    }
    let negativeCases = [
        "",
        "any value",
        "nullable",
        "can be none"
    ]
    for (let sentence of negativeCases) {
        expect(NLP_Helper.hasOneOfTerms(sentence, terms)).toBeFalsy();
    }


});
test("test edge case metric", () => {
    let params = MetricManager.getDefaultMetricParam(MetricManager.MetricNames.edge_case);
    const expected = 95.2418;
    parseAndTestFile(MetricManager.MetricNames.edge_case, "testDir/java/EdgeCaseTest.java", params, expected, 3);
});
test("test fog index", () => {
    const expected = (88.75+99.58)/2;
    parseAndTestFile(MetricManager.MetricNames.gunning_fog, "testDir/java/FleschTestEasy.java", MetricManager.getDefaultMetricParam(MetricManager.MetricNames.gunning_fog), expected, 2);
})
test("test fog index on empty comment", () => {
    const expected = 0;
    parseAndTestFile(MetricManager.MetricNames.gunning_fog, "testDir/java/EmptyCommentTest.java", MetricManager.getDefaultMetricParam(MetricManager.MetricNames.gunning_fog), expected, 3);
});
test("fog index on very complex sentence",()=>{
    const expected = 0;
    parseAndTestFile(MetricManager.MetricNames.gunning_fog, "testDir/java/FleschTestComplex.java", MetricManager.getDefaultMetricParam(MetricManager.MetricNames.gunning_fog), expected, 3);
})

