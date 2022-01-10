
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
    let metrics = conf.metrics.map((m)=>MetricManager.createMetricByName(m.metricName,m.uniqueName,m.params));
    for(let m of conf.metrics){
        weightMap.set(MetricManager.getMetricByUniqueName(m.uniqueName),m.weight);
    }
    let metricWeightResolver=new SimpleWeightResolver(weightMap);
    let filesWeightResolver=new PathWeightResolver(conf.path_weights,conf.default_path_weight);
    let parser = factory.createParser(conf.parser);
    let fileAnaylzer = new FileAnalyzer();
    let singleFileResultBuilder =MetricManager.getNewMetricResultBuilder(conf.single_file_result_builder,metricWeightResolver);
    let allFilesResultBulder = MetricManager.getNewMetricResultBuilder(conf.files_result_builder,filesWeightResolver);
    let metricBuilder = MetricManager.getNewMetricResultBuilder(conf.metric_result_builder,metricWeightResolver)
    for (let relevantFile of relevantFiles)
     {
        var root: ParseResult = { root: parser.parse(relevantFile), path: relevantFile };
        console.log("Looking at " + root.path)       
        for (let metric of metrics)
         {
            console.log("Using metric", metric.getUniqueName())
           
            fileAnaylzer.analyze(root, metric, singleFileResultBuilder);
            let partialResult = singleFileResultBuilder.getAggregatedResult(metric.getUniqueName());
            console.log("Partial result", partialResult.getResult());
    
            metricBuilder.processResult(partialResult);
            singleFileResultBuilder.reset();
            console.log();

        }

        console.log();
        let metricResult = metricBuilder.getAggregatedResult(root.path);
        metricBuilder.reset();
        allFilesResultBulder.processResult(metricResult);


    }
    let result = allFilesResultBulder.getAggregatedResult("");
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