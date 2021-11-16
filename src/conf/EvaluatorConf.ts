import chalk from "chalk";
import minimatch, { Minimatch } from "minimatch"
import path from "path";
import fs from "fs";
import { MetricManager } from "../metric_analysis/metric_manager";
const defaultMetrics=MetricManager.getMetricNames();
const CONF_FILENAME = "comment_conf.json";

/**
 * This class contains the configuration information for the tool
 */
export class EvaluatorConf {
    /**
     * All file names that should be included in the analysis should be defined here.
     * Use common Linux syntax (*) to indicate that a filename should start or end with a specific string
     */
    include: string[]=["*.java"];
    
    /**
     * Similary as include but used to exclude specific files,
     * should be a subset of include
     */
    exclude: string[]=[];

    /**
     * define all metrics and their respective weights here
     */
    metrics:{weight:number,metricName:string}[]=[];

    /**
     * the global threshold that the average of all metrics should meet to pass the documentation check
     */
    global_threshold:number=20.0;
    constructor(){
       for(let s of defaultMetrics){
           this.metrics.push({weight:1.0,metricName:s})
       }
    }

    
}


/**
     * load the configuration from the comment_conf.json file
     * @returns A valid DirectoryTraverserConfig that is set to default values if no config file is found
     */
 export function loadConfFromFile(basePath:string):EvaluatorConf {
    try {
        let jsonContent = fs.readFileSync(path.join(basePath, CONF_FILENAME)).toString();
        let jsonObject=JSON.parse(jsonContent);
        return  jsonObject;
    }
    catch (err) {
        console.log(chalk.yellow("No config file found. Using default values "))
    }
    return new EvaluatorConf();
}