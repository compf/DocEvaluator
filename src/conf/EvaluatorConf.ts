import chalk from "chalk";
import path from "path";
import fs from "fs";
import { MetricManager } from "../metric_analysis/metric_manager";
import { env } from "process";
const defaultMetrics = MetricManager.getAllImplementedMetricNames();
const CONF_FILENAME = "comment_conf.json";
export const MiniMatchConf = { dot: true, matchBase: true };

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
    metrics: { weight: number, metric_name: MetricManager.MetricNames, params: any, unique_name: string }[] = [];

    /**
     * the global threshold that the average of all metrics should meet to pass the documentation check
     */
    absolute_threshold: number = 20.0;

    /**
     * The result builder for the metrics
     */
    metric_result_builder: string = "default_builder";

    /**
 * The result builder for the files
 */
    file_result_builder: string = "default_builder";

    /**
     * The result builder for the components
     */
    component_result_builder: string = "default_builder";

    /**
     * the parser to be used/ the programming languages to be analyzed
     */
    parser: string = "java";
    /**
     * An array of pairs of a glob pattern and a weight that will be used to make some paths more or less important for evaluation
     */
    path_weights: { path: string, weight: number }[] = [];


    /**
 * An array of pairs of the component  class name (for example MethodComponent) and a weight that will be used to make some components more  or less important for evaluation
 */
    component_weights: { name: string, weight: number }[] = [];

    /**
     * The default weight for a given path
     */
    default_path_weight: number = 1;

    /**
     * The default weight for a given component
     */
    default_component_weight: number = 1;


    /**
     * The state manager to store the result of the last run
     */
    state_manager: string = "file";
    /**
     * max tolerable absolute difference from current to last run
     */
    relative_threshold: number = 30;

    /**
     * parameters data for the builders,  most builder won't need them
     */
    builder_params: { file: any, component: any, metric: any } = { file: {}, component: {}, metric: {} }

    constructor() {
        for (let s of defaultMetrics) {
            this.metrics.push({ weight: 1.0, metric_name: s as MetricManager.MetricNames, params: MetricManager.getDefaultMetricParam(s as MetricManager.MetricNames), unique_name: MetricManager.getUniqueName(s) })
        }
    }


}


/**
     * load the configuration from the comment_conf.json file
     * @returns A valid DirectoryTraverserConfig that is set to default values if no config file is found
     */
export function loadConf(basePath: string): EvaluatorConf {
    let conf = new EvaluatorConf();
    let loaders = [new JSONCommentConfLoader(basePath), new EnvCommentConfLoader()];
    for (let loader of loaders) {
        loader.updateConf(conf);
    }
    return sanitize(conf);
}
function sanitize(conf: EvaluatorConf): EvaluatorConf {
    for (let m of conf.metrics) {
        if (m.unique_name == undefined) {
            m.unique_name = MetricManager.getUniqueName(m.metric_name);
        }
        if (m.params == undefined) {
            m.params = MetricManager.getDefaultMetricParam(m.metric_name);
        }
    }
    return conf;
}
export interface ConfLoader {
    updateConf(conf: EvaluatorConf): void;
}
export class JSONCommentConfLoader implements ConfLoader {
    private basePath: string;
    constructor(basePath: string) {
        this.basePath = basePath;

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
export class EnvCommentConfLoader implements ConfLoader {
    updateConf(conf: EvaluatorConf): void {
        //TODO make this automatic
        if (env.INPUT_INCLUDE) {
            conf.include = JSON.parse(env.INPUT_INCLUDE)
        }
        if (env.INPUT_EXCLUDE) {
            conf.exclude = JSON.parse(env.INPUT_EXCLUDE)
        }
        if (env.INPUT_ABSOLUTE_THRESHOLD) {
            conf.absolute_threshold = parseFloat(env.INPUT_ABSOLUTE_THRESHOLD);
        }
        if (env.INPUT_METRICS) {
            conf.metrics = JSON.parse(env.INPUT_METRICS)
        }
        if (env.INPUT_METRIC_RESULT_BUILDER) {
            conf.metric_result_builder = (env.INPUT_METRIC_RESULT_BUILDER)
        }
        if (env.INPUT_COMPONENT_RESULT_BUILDER) {
            conf.component_result_builder = (env.INPUT_COMPONENT_RESULT_BUILDER)
        }
        if (env.INPUT_FILE_RESULT_BUILDER) {
            conf.file_result_builder = (env.INPUT_FILE_RESULT_BUILDER)
        }
        if (env.INPUT_PARSER) {
            conf.parser = (env.INPUT_PARSER)
        }
        if (env.INPUT_PATH_WEIGHTS) {
            conf.path_weights = JSON.parse(env.INPUT_PATH_WEIGHTS)
        }
        if (env.INPUT_COMPONENT_WEIGHTS) {
            conf.component_weights = JSON.parse(env.INPUT_COMPONENT_WEIGHTS)
        }
        if (env.INPUT_DEFAULT_PATH_WEIGHT) {
            conf.default_path_weight = parseFloat(env.INPUT_DEFAULT_PATH_WEIGHT)
        }
        if (env.INPUT_STATE_MANAGER) {
            conf.state_manager = env.INPUT_STATE_MANAGER
        }
        if (env.INPUT_RELATIVE_THRESHOLD) {
            conf.relative_threshold = parseFloat(env.INPUT_RELATIVE_THRESHOLD)
        }
        if (env.INPUT_DEFAULT_COMPONENT_WEIGHT) {
            conf.default_component_weight = parseFloat(env.INPUT_DEFAULT_COMPONENT_WEIGHT)
        }
        if (env.INPUT_BUILDER_PARAMS) {
            conf.builder_params = JSON.parse(env.INPUT_BUILDER_PARAMS)
        }


    }

}