
import chalk from "chalk";
import { DirectoryTraverser } from "./directory_traverser/directory_traverser";
import { BaseParser } from "./parser/base_parser";
import { ParseResult } from "./parser/parse_result/parse_result";
import { MetricManager } from "./metric_analysis/metric_manager";
import { MetricResultBuilder } from "./metric_analysis/metric_result_builder";
import { FileAnalyzer } from "./metric_analysis/file_analyzer";
import { EvaluatorConf, loadConf } from "./conf/EvaluatorConf";
import { ParserFactory } from "./parser/parser_factory";
import { DefaultFallbackResolver, PathWeightResolver, SimpleWeightResolver, StubResolver } from "./metric_analysis/weight_resolver";
import { DocumentationAnalysisMetric } from "./metric_analysis/metrics/documentation_analysis_metric";
import { StateManagerFactory } from "./conf/state_manager_factory";
import { LanguageSpecificHelperFactory } from "./metric_analysis/language_specific/language_specific_helper_factory";
import { LanguageSpecificHelper } from "./metric_analysis/language_specific/language_specific_helper";
import { LogMessage } from "./metric_analysis/log_message";
import { StateManager } from "./conf/state_manager";
import { MetricResult } from "./metric_analysis/metric_result";
/**
 * Describes a tuple  of objects that are shared and can be initialized at once
 */
interface SharedObjects {

    parser: BaseParser,
    fileAnalyzer: FileAnalyzer,
    componentResultBuilder: MetricResultBuilder,
    allFilesResultBulder: MetricResultBuilder,
    metricBuilder: MetricResultBuilder,
    metrics: DocumentationAnalysisMetric[],
    resultByMetric: Map<string, MetricResultBuilder>,
    languageHelper: LanguageSpecificHelper,
    stateManager:StateManager
}
export function main(args: string[]) {
    let workingDirectory=getWorkingDirectory(args);
    
    LogMessage.BasePath = workingDirectory; //TODO don't use global variables
    let conf = loadConf(workingDirectory);
    let objects=initializeObjects(conf,workingDirectory);
    let lastResult = objects.stateManager.load();
    

    let finalResult=calculateResult(workingDirectory,conf,objects);
    printLogsMessages(finalResult.getLogMessages());
    printResultByMetric(objects);
    console.log("The result was " + finalResult.getResult());
    objects.stateManager.save(finalResult.getResult());

    if (finalResult.getResult() < conf.absolute_threshold) {
        throw new Error("Threshold was not reached");
    }
    else if (lastResult != null && lastResult > finalResult.getResult() && Math.abs(lastResult - finalResult.getResult()) >= conf.relative_threshold) {
        throw new Error("Difference from last run is too high");

    }
}
function printResultByMetric(objects: SharedObjects) {
    console.log("Results by metric:");
    for (let m of objects.resultByMetric) {
        let res = m[1].getAggregatedResult("").getResult();
        console.log(m[0], res);
    }
}
function calculateResult(workingDirectory:string,conf:EvaluatorConf,objects:SharedObjects):MetricResult{
    let traverser = new DirectoryTraverser(workingDirectory, conf);
    const relevantFiles = traverser.getRelevantFiles();
    for (let relevantFile of relevantFiles) {
        processByFile(relevantFile, objects);
    }

    return objects.allFilesResultBulder.getAggregatedResult("");
}
function getWorkingDirectory(args:string[]):string{
    if (args.length < 1) {
        console.log(chalk.yellow("No directory provided. Using current directory"));
        return ".";
    }
    else {
        return args[0];
    }
}
function initializeObjects(conf: EvaluatorConf,workingDirectory:string):SharedObjects {
    let weightMap = new Map<string, number>();
    let metrics = conf.metrics.map((m) => MetricManager.createMetricByName(m.metric_name, m.unique_name, m.params));
    for (let m of conf.metrics) {
        weightMap.set(m.unique_name, m.weight);
    }
    let languageHelper = LanguageSpecificHelperFactory.loadHelper(conf.parser);
    let metricWeightResolver = new SimpleWeightResolver(weightMap);
    let filesWeightResolver = new PathWeightResolver(conf.path_weights, conf.default_path_weight);
    let parser = ParserFactory.createParser(conf.parser);
    let fileAnalyzer = new FileAnalyzer();
    let componentResultBuilder = MetricManager.getNewMetricResultBuilder(conf.component_result_builder, new DefaultFallbackResolver(conf.component_weights,conf.default_component_weight),conf.builder_params.component);
    let allFilesResultBulder = MetricManager.getNewMetricResultBuilder(conf.file_result_builder, filesWeightResolver,conf.builder_params.file);
    let metricBuilder = MetricManager.getNewMetricResultBuilder(conf.metric_result_builder, metricWeightResolver,conf.builder_params.metric);
    let resultByMetric: Map<string, MetricResultBuilder> = new Map();
    let stateManager = StateManagerFactory.load(conf.state_manager, workingDirectory);

    return { parser, fileAnalyzer, componentResultBuilder, allFilesResultBulder, metricBuilder, metrics, resultByMetric, languageHelper,stateManager };
}
function printLogsMessages(logMessages:LogMessage[]){
    for (let log of logMessages) {
        log.log();
    }
}
function processByMetric(root: ParseResult, metric: DocumentationAnalysisMetric, objects: SharedObjects) {
    console.log("Using metric", metric.getUniqueName())

    objects.fileAnalyzer.analyze(root, metric, objects.componentResultBuilder, objects.languageHelper);
    let partialResult = objects.componentResultBuilder.getAggregatedResult(metric.getUniqueName());
    if (!objects.resultByMetric.has(metric.getUniqueName())) {
        objects.resultByMetric.set(metric.getUniqueName(), new MetricResultBuilder());
    }
    objects.resultByMetric.get(metric.getUniqueName())?.processResult(partialResult);
    console.log("Partial result", partialResult.getResult());

    objects.metricBuilder.processResult(partialResult);
    objects.componentResultBuilder.reset();
    console.log();
}
function processByFile(relevantFile: string, objects: SharedObjects) {
    var root: ParseResult = { root: objects.parser.parse(relevantFile), path: relevantFile };
    console.log("Looking at " + root.path)
    for (let metric of objects.metrics) {
        processByMetric(root, metric, objects)
    }

    console.log();
    let metricResult = objects.metricBuilder.getAggregatedResult(root.path);
    objects.metricBuilder.reset();
    objects.allFilesResultBulder.processResult(metricResult);
}
if(require.main===module){
    main(process.argv.slice(2))
}
