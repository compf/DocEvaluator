
import chalk from "chalk";
import internal from "stream";
import {DirectoryTraverser} from "./directory_traverser/directory_traverser";
import {JavaParser} from "./parser/java_parser"
import { BaseParser } from "./parser/base_parser";
import { ParseResult } from "./parser/parse_result/parse_result";
import { loadConfFromFile } from "./conf/EvaluatorConf";
import { MetricManager } from "./metric_analysis/metric_manager";
import { MetricResultBuilder } from "./metric_analysis/metric_result_builder";
import { rootCertificates } from "tls";
import { FileAnalyzer } from "./metric_analysis/file_analyzer";
function main(args:Array<string>){
    var workingDirectory="";
    if(args.length<1){
        console.log(chalk.yellow("No directory provided. Using current directory"));
        workingDirectory=".";
    }
    else{
        workingDirectory=args[0];
    }
    let conf=loadConfFromFile(workingDirectory);
    let traverser= new DirectoryTraverser(workingDirectory,conf);
    const relevantFiles=traverser.getRelevantFiles();
    let metrics=conf.metrics;
    let parser:BaseParser=new JavaParser();
    let fileAnaylzer=new FileAnalyzer();
    let singleFileResultBuilder=new MetricResultBuilder();
    let allFilesResultBulder=new MetricResultBuilder
    let singleMetricBuilder=new MetricResultBuilder();
   for(let relevantFile of relevantFiles){
    var root:ParseResult={root: parser.parse(relevantFile),path:relevantFile};
    console.log("Looking at " +root.path)
    for(let metricInformation of metrics){
       
        let metric=MetricManager.getMetric(metricInformation.metricName);
        console.log("Using metric", metricInformation.metricName)
        fileAnaylzer.analyze(root,metric,singleMetricBuilder,metricInformation.params);
        let partialResult=singleMetricBuilder.getAggregatedResult();
        console.log("Partial result",partialResult.getResult());
            for(let log of partialResult.getLogMessages()){
                log.log();
            }
        singleFileResultBuilder.processResult(partialResult);
        singleMetricBuilder.reset();
        console.log();
        
     
    }
    console.log();
    let fileResult=singleFileResultBuilder.getAggregatedResult();
    singleFileResultBuilder.reset();
    allFilesResultBulder.processResult(fileResult);
    
   
   }
   let result=allFilesResultBulder.getAggregatedResult();
   for(let log of result.getLogMessages()){
       log.log();
   }
   allFilesResultBulder.reset();
   console.log("The result was " +result.getResult());
   if(result.getResult()<conf.global_threshold){
       throw new Error("Threshold was not reached");
   }
   
   //console.log(tokens);
}

main(process.argv.slice(2))