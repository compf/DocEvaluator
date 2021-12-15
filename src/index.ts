
import chalk from "chalk";
import { DirectoryTraverser } from "./directory_traverser/directory_traverser";
import { BaseParser } from "./parser/base_parser";
import { ParseResult } from "./parser/parse_result/parse_result";
import { MetricManager } from "./metric_analysis/metric_manager";
import { MetricResultBuilder } from "./metric_analysis/metric_result_builder";
import { FileAnalyzer } from "./metric_analysis/file_analyzer";
import { loadConf } from "./conf/EvaluatorConf";
import { ParserFactory } from "./parser/parser_factory";
const factory=new ParserFactory();
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
    let metrics = conf.metrics;
    for(let m of metrics){
        weightMap.set(MetricManager.getMetric(m.metricName),m.weight);
    }
    let parser = factory.createParser(conf.parser);
    let fileAnaylzer = new FileAnalyzer();
    let singleFileResultBuilder =MetricManager.getNewMetricResultBuilder(conf.single_file_result_builder,weightMap);
    let allFilesResultBulder = MetricManager.getNewMetricResultBuilder(conf.files_result_builder,weightMap);
    let metricBuilder = MetricManager.getNewMetricResultBuilder(conf.metric_result_builder,weightMap)

    for (let metricInformation of metrics) {
        let params=MetricManager.getDefaultMetricParam(metricInformation.metricName);
        Object.assign(params,metricInformation.params);

        let metric = MetricManager.getMetric(metricInformation.metricName);
        console.log("Using metric", metricInformation.metricName)
        
        for (let relevantFile of relevantFiles) {
            var root: ParseResult = { root: parser.parse(relevantFile), path: relevantFile };
            console.log("Looking at " + root.path)
            fileAnaylzer.analyze(root, metric, singleFileResultBuilder, params);
            let partialResult = singleFileResultBuilder.getAggregatedResult();
            console.log("Partial result", partialResult.getResult());
    
            allFilesResultBulder.processResult(partialResult);
            singleFileResultBuilder.reset();
            console.log();

        }
        console.log();
        let fileResult = allFilesResultBulder.getAggregatedResult();
        allFilesResultBulder.reset();
        metricBuilder.processResult(fileResult);


    }
    let result = metricBuilder.getAggregatedResult();
    for (let log of result.getLogMessages()) {
        log.log();
    }
    metricBuilder.reset();
    console.log("The result was " + result.getResult());
    if (result.getResult() < conf.global_threshold) {
        throw new Error("Threshold was not reached");
    }
}

main(process.argv.slice(2))