"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvCommentConfLoader = exports.JSONCommentConfLoader = exports.loadConf = exports.EvaluatorConf = exports.MiniMatchConf = void 0;
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const metric_manager_1 = require("../metric_analysis/metric_manager");
const process_1 = require("process");
const defaultMetrics = metric_manager_1.MetricManager.getAllImplementedMetricNames();
const CONF_FILENAME = "comment_conf.json";
exports.MiniMatchConf = { dot: true, matchBase: true };
/**
 * This class contains the configuration information for the tool
 */
class EvaluatorConf {
    constructor() {
        /**
         * All file names that should be included in the analysis should be defined here.
         * Use common Linux syntax (*) to indicate that a filename should start or end with a specific string
         */
        this.include = ["*.java"];
        /**
         * Similary as include but used to exclude specific files,
         * should be a subset of include
         */
        this.exclude = [];
        /**
         * define all metrics and their respective weights here
         */
        this.metrics = [];
        /**
         * the global threshold that the average of all metrics should meet to pass the documentation check
         */
        this.global_threshold = 20.0;
        /**
         * The result builder for the metrics
         */
        this.metric_result_builder = "default_builder";
        /**
     * The result builder for the files
     */
        this.file_result_builder = "default_builder";
        /**
         * The result builder for the components
         */
        this.component_result_builder = "default_builder";
        /**
         * the parser to be used/ the programming languages to be analyzed
         */
        this.parser = "java";
        /**
         * An array of pairs of a glob pattern and a weight that will be used to make some paths more or less important for evaluation
         */
        this.path_weights = [];
        /**
     * An array of pairs of the component  class name (for example MethodComponent) and a weight that will be used to make some components more  or less important for evaluation
     */
        this.component_weights = [];
        /**
         * The default weight for a given path
         */
        this.default_path_weight = 1;
        /**
         * The default weight for a given component
         */
        this.default_component_weight = 1;
        /**
         * The state manager to store the result of the last run
         */
        this.state_manager = "file";
        /**
         * max tolerable absolute difference from current to last run
         */
        this.max_diff_last_run = 30;
        for (let s of defaultMetrics) {
            this.metrics.push({ weight: 1.0, metric_name: s, params: metric_manager_1.MetricManager.getDefaultMetricParam(s), unique_name: metric_manager_1.MetricManager.getUniqueName(s) });
        }
    }
}
exports.EvaluatorConf = EvaluatorConf;
/**
     * load the configuration from the comment_conf.json file
     * @returns A valid DirectoryTraverserConfig that is set to default values if no config file is found
     */
function loadConf(basePath) {
    let conf = new EvaluatorConf();
    let loaders = [new JSONCommentConfLoader(basePath), new EnvCommentConfLoader()];
    for (let loader of loaders) {
        loader.updateConf(conf);
    }
    return sanitize(conf);
}
exports.loadConf = loadConf;
function sanitize(conf) {
    for (let m of conf.metrics) {
        if (m.unique_name == undefined) {
            m.unique_name = metric_manager_1.MetricManager.getUniqueName(m.metric_name);
        }
        if (m.params == undefined) {
            m.params = metric_manager_1.MetricManager.getDefaultMetricParam(m.metric_name);
        }
    }
    return conf;
}
class JSONCommentConfLoader {
    constructor(basePath) {
        this.basePath = basePath;
    }
    updateConf(conf) {
        try {
            let jsonContent = fs_1.default.readFileSync(path_1.default.join(this.basePath, CONF_FILENAME)).toString();
            let jsonObject = JSON.parse(jsonContent);
            Object.assign(conf, jsonObject);
        }
        catch (err) {
            console.log(chalk_1.default.yellow("No config file found. Using default values "));
        }
    }
}
exports.JSONCommentConfLoader = JSONCommentConfLoader;
class EnvCommentConfLoader {
    updateConf(conf) {
        //TODO make this automatic
        if (process_1.env.INPUT_INCLUDE) {
            conf.include = process_1.env.INPUT_INCLUDE.split(",");
        }
        if (process_1.env.INPUT_EXCLUDE) {
            conf.exclude = process_1.env.INPUT_EXCLUDE.split(",");
        }
        if (process_1.env.INPUT_GLOBAL_THRESHOLD) {
            conf.global_threshold = parseFloat(process_1.env.INPUT_GLOBAL_THRESHOLD);
        }
        if (process_1.env.INPUT_METRICS) {
            conf.metrics = JSON.parse(process_1.env.INPUT_METRICS);
        }
        if (process_1.env.INPUT_PARSER) {
            conf.parser = JSON.parse(process_1.env.INPUT_PARSER);
        }
        if (process_1.env.INPUT_METRIC_RESULT_BUILDER) {
            conf.metric_result_builder = JSON.parse(process_1.env.INPUT_METRIC_RESULT_BUILDER);
        }
        if (process_1.env.INPUT_COMPONENT_RESULT_BUILDER) {
            conf.component_result_builder = JSON.parse(process_1.env.INPUT_COMPONENT_RESULT_BUILDER);
        }
        if (process_1.env.INPUT_FILE_RESULT_BUILDER) {
            conf.file_result_builder = JSON.parse(process_1.env.INPUT_FILE_RESULT_BUILDER);
        }
        if (process_1.env.INPUT_PARSER) {
            conf.parser = (process_1.env.INPUT_PARSER);
        }
        if (process_1.env.INPUT_PATH_WEIGHTS) {
            conf.path_weights = JSON.parse(process_1.env.INPUT_PATH_WEIGHTS);
        }
        if (process_1.env.INPUT_COMPONENT_WEIGHTS) {
            conf.component_weights = JSON.parse(process_1.env.INPUT_COMPONENT_WEIGHTS);
        }
        if (process_1.env.INPUT_DEFAULT_PATH_WEIGHT) {
            conf.default_path_weight = parseFloat(process_1.env.INPUT_DEFAULT_PATH_WEIGHT);
        }
        if (process_1.env.INPUT_STATE_MANAGER) {
            conf.state_manager = process_1.env.INPUT_STATE_MANAGER;
        }
        if (process_1.env.INPUT_MAX_DIFF_LAST_RUN) {
            conf.max_diff_last_run = parseFloat(process_1.env.INPUT_MAX_DIFF_LAST_RUN);
        }
        if (process_1.env.INPUT_DEFAULT_COMPONENT_WEIGHT) {
            conf.default_component_weight = parseFloat(process_1.env.INPUT_DEFAULT_COMPONENT_WEIGHT);
        }
    }
}
exports.EnvCommentConfLoader = EnvCommentConfLoader;
//# sourceMappingURL=EvaluatorConf.js.map