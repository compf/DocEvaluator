"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const chalk_1 = __importDefault(require("chalk"));
const directory_traverser_1 = require("./directory_traverser/directory_traverser");
const metric_manager_1 = require("./metric_analysis/metric_manager");
const metric_result_builder_1 = require("./metric_analysis/metric_result_builder");
const file_analyzer_1 = require("./metric_analysis/file_analyzer");
const EvaluatorConf_1 = require("./conf/EvaluatorConf");
const parser_factory_1 = require("./parser/parser_factory");
const weight_resolver_1 = require("./metric_analysis/weight_resolver");
const state_manager_factory_1 = require("./conf/state_manager_factory");
const language_specific_helper_factory_1 = require("./metric_analysis/language_specific/language_specific_helper_factory");
const log_message_1 = require("./metric_analysis/log_message");
function main(args) {
    let workingDirectory = getWorkingDirectory(args);
    log_message_1.LogMessage.BasePath = workingDirectory; //TODO don't use global variables
    let conf = (0, EvaluatorConf_1.loadConf)(workingDirectory);
    let objects = initializeObjects(conf, workingDirectory);
    let lastResult = objects.stateManager.load();
    let finalResult = calculateResult(workingDirectory, conf, objects);
    printLogsMessages(finalResult.getLogMessages());
    printResultByMetric(objects);
    console.log("The result was " + finalResult.getResult());
    objects.stateManager.save(finalResult.getResult());
    if (finalResult.getResult() < conf.global_threshold) {
        throw new Error("Threshold was not reached");
    }
    else if (lastResult != null && lastResult > finalResult.getResult() && Math.abs(lastResult - finalResult.getResult()) >= conf.max_diff_last_run) {
        throw new Error("Difference from last run is too high");
    }
}
exports.main = main;
function printResultByMetric(objects) {
    console.log("Results by metric:");
    for (let m of objects.resultByMetric) {
        let res = m[1].getAggregatedResult("").getResult();
        console.log(m[0], res);
    }
}
function calculateResult(workingDirectory, conf, objects) {
    let traverser = new directory_traverser_1.DirectoryTraverser(workingDirectory, conf);
    const relevantFiles = traverser.getRelevantFiles();
    for (let relevantFile of relevantFiles) {
        processByFile(relevantFile, objects);
    }
    return objects.allFilesResultBulder.getAggregatedResult("");
}
function getWorkingDirectory(args) {
    if (args.length < 1) {
        console.log(chalk_1.default.yellow("No directory provided. Using current directory"));
        return ".";
    }
    else {
        return args[0];
    }
}
function initializeObjects(conf, workingDirectory) {
    let weightMap = new Map();
    let metrics = conf.metrics.map((m) => metric_manager_1.MetricManager.createMetricByName(m.metric_name, m.unique_name, m.params));
    for (let m of conf.metrics) {
        weightMap.set(m.unique_name, m.weight);
    }
    let languageHelper = language_specific_helper_factory_1.LanguageSpecificHelperFactory.loadHelper(conf.parser);
    let metricWeightResolver = new weight_resolver_1.SimpleWeightResolver(weightMap);
    let filesWeightResolver = new weight_resolver_1.PathWeightResolver(conf.path_weights, conf.default_path_weight);
    let parser = parser_factory_1.ParserFactory.createParser(conf.parser);
    let fileAnalyzer = new file_analyzer_1.FileAnalyzer();
    let componentResultBuilder = metric_manager_1.MetricManager.getNewMetricResultBuilder(conf.component_result_builder, new weight_resolver_1.DefaultFallbackResolver(conf.component_weights, conf.default_component_weight));
    let allFilesResultBulder = metric_manager_1.MetricManager.getNewMetricResultBuilder(conf.file_result_builder, filesWeightResolver);
    let metricBuilder = metric_manager_1.MetricManager.getNewMetricResultBuilder(conf.metric_result_builder, metricWeightResolver);
    let resultByMetric = new Map();
    let stateManager = state_manager_factory_1.StateManagerFactory.load(conf.state_manager, workingDirectory);
    return { parser, fileAnalyzer, componentResultBuilder, allFilesResultBulder, metricBuilder, metrics, resultByMetric, languageHelper, stateManager };
}
function printLogsMessages(logMessages) {
    for (let log of logMessages) {
        log.log();
    }
}
function processByMetric(root, metric, objects) {
    var _a;
    console.log("Using metric", metric.getUniqueName());
    objects.fileAnalyzer.analyze(root, metric, objects.componentResultBuilder, objects.languageHelper);
    let partialResult = objects.componentResultBuilder.getAggregatedResult(metric.getUniqueName());
    if (!objects.resultByMetric.has(metric.getUniqueName())) {
        objects.resultByMetric.set(metric.getUniqueName(), new metric_result_builder_1.MetricResultBuilder());
    }
    (_a = objects.resultByMetric.get(metric.getUniqueName())) === null || _a === void 0 ? void 0 : _a.processResult(partialResult);
    console.log("Partial result", partialResult.getResult());
    objects.metricBuilder.processResult(partialResult);
    objects.componentResultBuilder.reset();
    console.log();
}
function processByFile(relevantFile, objects) {
    var root = { root: objects.parser.parse(relevantFile), path: relevantFile };
    console.log("Looking at " + root.path);
    for (let metric of objects.metrics) {
        processByMetric(root, metric, objects);
    }
    console.log();
    let metricResult = objects.metricBuilder.getAggregatedResult(root.path);
    objects.metricBuilder.reset();
    objects.allFilesResultBulder.processResult(metricResult);
}
if (require.main === module) {
    main(process.argv.slice(2));
}
//# sourceMappingURL=index.js.map