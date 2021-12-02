import chalk from "chalk";
import path from "path";
import fs from "fs";
import { MetricManager } from "../metric_analysis/metric_manager";
import { env } from "process";
import { json } from "stream/consumers";
const defaultMetrics = MetricManager.getMetricNames();
const CONF_FILENAME = "comment_conf.json";

/**
 * This class contains the configuration information for the tool
 */
export class EvaluatorConf {
    /**
     * All file names that should be included in the analysis should be defined here.
     * Use common Linux syntax (*) to indicate that a filename should start or end with a specific string
     */
    include: string[] = ["*.java"];

    /**
     * Similary as include but used to exclude specific files,
     * should be a subset of include
     */
    exclude: string[] = [];

    /**
     * define all metrics and their respective weights here
     */
    metrics: { weight: number, metricName: string, params: any }[] = [];

    /**
     * the global threshold that the average of all metrics should meet to pass the documentation check
     */
    global_threshold: number = 20.0;
    constructor() {
        for (let s of defaultMetrics) {
            this.metrics.push({ weight: 1.0, metricName: s, params: MetricManager.getDefaultMetricParam(s) })
        }
    }


}


/**
     * load the configuration from the comment_conf.json file
     * @returns A valid DirectoryTraverserConfig that is set to default values if no config file is found
     */
export function loadConf(basePath: string): EvaluatorConf {
    let conf=new EvaluatorConf();
    let loaders=[new JSONCommentConfLoader(basePath),new EnvCommentConfLoader()];
    for(let loader of loaders){
    loader.updateConf(conf);
    }
    return conf;
}
export interface ConfLoader {
    updateConf(conf: EvaluatorConf): void;
}
export class JSONCommentConfLoader implements ConfLoader {
    private basePath:string;
    constructor(basePath: string) {
        this.basePath=basePath;

    }
    updateConf(conf: EvaluatorConf): void {
        try {
            let jsonContent = fs.readFileSync(path.join(this.basePath, CONF_FILENAME)).toString();
            let jsonObject = JSON.parse(jsonContent);
            Object.assign(conf, jsonObject);

        }
        catch (err) {
            console.log(chalk.yellow("No config file found. Using default values "))
        }
    }
}
export class EnvCommentConfLoader implements ConfLoader{
    updateConf(conf: EvaluatorConf): void {
    if(env.INPUT_INCLUDE){
        conf.include=env.INPUT_INCLUDE.split(",")
    }
    if(env.INPUT_EXCLUDE){
        conf.exclude=env.INPUT_EXCLUDE.split(",")
    }
    if(env.INPUT_GLOBAL_THRESHOLD){
    conf.global_threshold=parseFloat(env.INPUT_GLOBAL_THRESHOLD);
    }
    if(env.INPUT_METRICS){
    conf.metrics=JSON.parse(env.INPUT_METRICS)
    }
        
       
    }

}