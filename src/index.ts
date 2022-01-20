
import chalk from "chalk";
import { DirectoryTraverser } from "./directory_traverser/directory_traverser";
import { BaseParser } from "./parser/base_parser";
import { ParseResult } from "./parser/parse_result/parse_result";
import { MetricManager } from "./metric_analysis/metric_manager";
import { MetricResultBuilder } from "./metric_analysis/metric_result_builder";
import { FileAnalyzer } from "./metric_analysis/file_analyzer";
import { loadConf } from "./conf/EvaluatorConf";
import { ParserFactory } from "./parser/parser_factory";
import { PathWeightResolver, SimpleWeightResolver } from "./metric_analysis/weight_resolver";
import { DocumentationAnalysisMetric } from "./metric_analysis/metrics/documentation_analysis_metric";
import { MetricResult } from "./metric_analysis/metric_result";
import { StateManagerFactory } from "./conf/state_manager_factory";
import { LanguageSpecificHelperFactory } from "./metric_analysis/language_specific/language_specific_helper_factory";
import { LanguageSpecificHelper } from "./metric_analysis/language_specific/language_specific_helper";
interface Parameters{
  
     parser:BaseParser,
     fileAnalyzer: FileAnalyzer,
     singleFileResultBuilder:MetricResultBuilder,
     allFilesResultBulder:MetricResultBuilder,
     metricBuilder :MetricResultBuilder,
     metrics:DocumentationAnalysisMetric[],
     resultByMetric:Map<string,MetricResultBuilder>,
     languageHelper:LanguageSpecificHelper
} 
function main(args: Array<string>) {
    var workingDirectory = "";
    if (args.length < 1) {
        console.log(chalk.yellow("No directory provided. Using current directory"));
        workingDirectory = ".";
    }
    else {
        workingDirectory = args[0];
    }
    let conf = loadConf(workingDirectory);
    let traverser = new DirectoryTraverser(workingDirectory, conf);
    const relevantFiles = traverser.getRelevantFiles();

    let weightMap=new Map<any,number>();
    let metrics = conf.metrics.map((m)=>MetricManager.createMetricByName(m.metric_name,m.unique_name,m.params));
    for(let m of conf.metrics){
        weightMap.set(MetricManager.getMetricByUniqueName(m.unique_name),m.weight);
    }
    let languageHelper=LanguageSpecificHelperFactory.loadHelper(conf.parser);
    let metricWeightResolver=new SimpleWeightResolver(weightMap);
    let filesWeightResolver=new PathWeightResolver(conf.path_weights,conf.default_path_weight);
    let parser = ParserFactory.createParser(conf.parser);
    let fileAnalyzer = new FileAnalyzer();
    let singleFileResultBuilder =MetricManager.getNewMetricResultBuilder(conf.single_file_result_builder,metricWeightResolver);
    let allFilesResultBulder = MetricManager.getNewMetricResultBuilder(conf.files_result_builder,filesWeightResolver);
    let metricBuilder = MetricManager.getNewMetricResultBuilder(conf.metric_result_builder,metricWeightResolver)
    let resultByMetric:Map<string,MetricResultBuilder>=new Map();
    let stateManager=StateManagerFactory.load(conf.state_manager,workingDirectory);
    let lastResult=stateManager.load();
    console.log("last result",lastResult);

    let params:Parameters={parser,fileAnalyzer,singleFileResultBuilder,allFilesResultBulder,metricBuilder,metrics,resultByMetric,languageHelper};
    for (let relevantFile of relevantFiles)
     {   
        processByFile(relevantFile,params);
    }
    let result = allFilesResultBulder.getAggregatedResult("");
    for (let log of result.getLogMessages()) {
        log.log();
    }
    metricBuilder.reset();
    console.log("Results by metric:");
    for(let m of params.resultByMetric){
       let res= m[1].getAggregatedResult("").getResult();
       console.log(m[0],res);
    }
    console.log("The result was " + result.getResult());
    stateManager.save(result.getResult());
    if (result.getResult() < conf.global_threshold) {
        throw new Error("Threshold was not reached");
    }
    else if( lastResult!=null && lastResult<result.getResult() && Math.abs(lastResult-result.getResult())>=conf.max_diff_last_run){
        throw new Error("Difference from last run is too high");

    }
}
function processByMetric(root:ParseResult,metric:DocumentationAnalysisMetric, params:Parameters){
    console.log("Using metric", metric.getUniqueName())
           
    params.fileAnalyzer.analyze(root, metric, params.singleFileResultBuilder,params.languageHelper);
    let partialResult = params.singleFileResultBuilder.getAggregatedResult(metric.getUniqueName());
    if(!params.resultByMetric.has(metric.getUniqueName())){
        params.resultByMetric.set(metric.getUniqueName(),new MetricResultBuilder());
    }
    params.resultByMetric.get(metric.getUniqueName())?.processResult(partialResult);
    console.log("Partial result", partialResult.getResult());

    params.metricBuilder.processResult(partialResult);
    params.singleFileResultBuilder.reset();
    console.log();
}
function processByFile(relevantFile:string,params:Parameters){
    var root: ParseResult = { root: params.parser.parse(relevantFile), path: relevantFile };
    console.log("Looking at " + root.path)       
    for (let metric of params.metrics)
     {
        processByMetric(root,metric,params)
    }

    console.log();
    let metricResult = params.metricBuilder.getAggregatedResult(root.path);
    params.metricBuilder.reset();
    params.allFilesResultBulder.processResult(metricResult);
}
main(process.argv.slice(2))