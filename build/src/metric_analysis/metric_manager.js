"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricManager = void 0;
const commented_lines_ratio_metric_1 = require("./metrics/commented_lines_ratio_metric");
const median_result_builder_1 = require("./median_result_builder");
const metric_result_builder_1 = require("./metric_result_builder");
const simple_comment_present_metric_1 = require("./metrics/simple_comment_present_metric");
const simple_large_method_commented_metric_1 = require("./metrics/simple_large_method_commented_metric");
const simple_method_documentation_metric_1 = require("./metrics/simple_method_documentation_metric");
const simple_public_members_only_metric_1 = require("./metrics/simple_public_members_only_metric");
const weighted_median_result_builder_1 = require("./weighted_median_result_builder");
const weighted_metric_result_builder_1 = require("./weighted_metric_result_builder");
const flesch_metric_1 = require("./metrics/flesch_metric");
const comment_name_coherence_metric_1 = require("./metrics/comment_name_coherence_metric");
const certain_terms_count_metric_1 = require("./metrics/certain_terms_count_metric");
const formatting_good_metric_1 = require("./metrics/formatting_good_metric");
const spelling_metric_1 = require("./metrics/spelling_metric");
class BiMap {
    constructor() {
        this.k_to_v = new Map();
        this.v_to_k = new Map();
    }
    getByKey(key) {
        return this.k_to_v.get(key);
    }
    getByValue(val) {
        return this.v_to_k.get(val);
    }
    add(k, v) {
        this.k_to_v.set(k, v);
        this.v_to_k.set(v, k);
    }
    keys() {
        return this.k_to_v.keys();
    }
    values() {
        this.v_to_k.keys();
    }
    containsKey(key) {
        return this.k_to_v.has(key);
    }
}
var MetricManager;
(function (MetricManager) {
    /**
     * Method to create a metric based on key
     * @param metricName A valid metric name
     * @returns the new instance of the respective metric
     * @throws An error if key not present
     */
    function createMetricByName(metricName, uniqueName, params) {
        let type = allMetricTypes.getByKey(metricName);
        return createMetricByType(type, uniqueName, params);
    }
    MetricManager.createMetricByName = createMetricByName;
    /**
     * Creates a metric based on the given Metric Type constructor
     * @param type A constructor that is given (uniquename:string,params:any) and return a valid Metric
     * @param uniqueName the unique name of the new metric
     * @param params the params for this metric
     * @returns a valid metric instance
     */
    function createMetricByType(type, uniqueName, params) {
        let defaultParams = MetricManager.getDefaultMetricParam(getMetricName(type));
        Object.assign(defaultParams, params);
        params = defaultParams;
        let instance = new type(uniqueName, params);
        allMetrics.set(uniqueName, instance);
        return instance;
    }
    MetricManager.createMetricByType = createMetricByType;
    /**
     * return the metric name of a metric type
     * @param type A constructor that is given (uniquename:string,params:any) and return a valid Metric
     * @returns a valid metric name
     * @throws a KeyError if this type is not a valid metric
     */
    function getMetricName(type) {
        return allMetricTypes.getByValue(type);
    }
    MetricManager.getMetricName = getMetricName;
    function getMetricByUniqueName(uniqueName) {
        return allMetrics.get(uniqueName);
    }
    MetricManager.getMetricByUniqueName = getMetricByUniqueName;
    let MetricNames;
    (function (MetricNames) {
        MetricNames["simple_comment"] = "simple_comment";
        MetricNames["public_members_only"] = "public_members_only";
        MetricNames["large_method_commented"] = "large_method_commented";
        MetricNames["method_fully_documented"] = "method_fully_documented";
        MetricNames["commented_lines_ratio"] = "commented_lines_ratio";
        MetricNames["flesch"] = "flesch";
        MetricNames["comment_name_coherence"] = "comment_name_coherence";
        MetricNames["certain_terms"] = "certain_terms";
        MetricNames["formatting_good"] = "formatting_good";
        MetricNames["spelling"] = "spelling";
    })(MetricNames = MetricManager.MetricNames || (MetricManager.MetricNames = {}));
    const allMetrics = new Map();
    const allMetricTypes = new BiMap();
    function init() {
        allMetricTypes.add(MetricNames.simple_comment, simple_comment_present_metric_1.SimpleCommentPresentMetric);
        allMetricTypes.add(MetricNames.public_members_only, simple_public_members_only_metric_1.SimplePublicMembersOnlyMetric);
        allMetricTypes.add(MetricNames.large_method_commented, simple_large_method_commented_metric_1.SimpleLargeMethodCommentedMetric);
        allMetricTypes.add(MetricNames.method_fully_documented, simple_method_documentation_metric_1.SimpleMethodDocumentationMetric);
        allMetricTypes.add(MetricNames.commented_lines_ratio, commented_lines_ratio_metric_1.CommentedLinesRatioMetric);
        allMetricTypes.add(MetricNames.flesch, flesch_metric_1.FleschMetric);
        allMetricTypes.add(MetricNames.comment_name_coherence, comment_name_coherence_metric_1.CommentNameCoherenceMetric);
        allMetricTypes.add(MetricNames.certain_terms, certain_terms_count_metric_1.CertainTermCountMetric);
        allMetricTypes.add(MetricNames.formatting_good, formatting_good_metric_1.FormattingGoodMetric);
        allMetricTypes.add(MetricNames.spelling, spelling_metric_1.SpellingMetric);
    }
    const uniqueNameCountMap = new Map();
    /**
     * Creates a unique name by appending a number at the base name depending of how often this base name was used
     * E.g. if the input is test, the first invocation would return test0, the second invocation returns test1
     * @param baseName a bgase name where a number wil be attached so that an unique name can be created
     * @returns an unique name
     */
    function getUniqueName(baseName) {
        if (uniqueNameCountMap.has(baseName)) {
            const newCount = uniqueNameCountMap.get(baseName) + 1;
            uniqueNameCountMap.set(baseName, newCount);
            return baseName + "_" + newCount;
        }
        else {
            uniqueNameCountMap.set(baseName, 0);
            return baseName + "_0";
        }
    }
    MetricManager.getUniqueName = getUniqueName;
    /**
     * Creates a new MetricResultBuilder instance based on the given name
     * @param builderName must be a valid name of a MetricResultBuilder (e.g. mean_builder or default_builder)
     * @param weightResolver an object to assign a weight to a given string, if the builder doesn't need a resolver it will be ignored
     * @returns a new MetricResultBuilder whose type depends on a the builderName
     */
    function getNewMetricResultBuilder(builderName, weightResolver) {
        switch (builderName) {
            case "mean_builder":
            case "metric_result_builder":
            case "default_builder":
            case "default_result_builder":
                return new metric_result_builder_1.MetricResultBuilder();
            case "median_builder":
            case "median_result_builder":
                return new median_result_builder_1.MedianResultBuilder();
            case "weighted_mean_builder":
            case "weighted_metric_result_builder":
            case "weighted_mean_result_builder":
                return new weighted_metric_result_builder_1.WeightedMetricResultBuilder(weightResolver);
            case "weighted_median_result_builder":
            case "weighted_median_builder":
                return new weighted_median_result_builder_1.WeightedMedianResultBuilder(weightResolver);
        }
        throw new Error("Could not identify ResultBuilder");
    }
    MetricManager.getNewMetricResultBuilder = getNewMetricResultBuilder;
    /**
     *
     * @returns All metric names that have been loaded from the config
     */
    function getUsedMetricNames() {
        return Array.from(allMetrics.keys());
    }
    MetricManager.getUsedMetricNames = getUsedMetricNames;
    /**
     * @return all metric names that are implemented regardless if or how often they are used currently
     */
    function getAllImplementedMetricNames() {
        return Array.from(allMetricTypes.keys());
    }
    MetricManager.getAllImplementedMetricNames = getAllImplementedMetricNames;
    /**
     * Get the default params for each metric
     * @param metricName a valid metric name
     * @returns all default params or an empty object {} if metric name is not known or has no parameters
     */
    function getDefaultMetricParam(metricName) {
        switch (metricName) {
            case MetricNames.large_method_commented:
                return { ignore_lines: ["", "{", "}"], k: 0.2 };
            case MetricNames.commented_lines_ratio:
                return { ignore_ines: ["", "{", "}"] };
            case MetricNames.simple_comment:
            case MetricNames.public_members_only:
                return { getter_pattern: "(get.*)|(is.*)", setter_pattern: "set.*", ignore_getter_setter: false };
            case MetricNames.flesch:
                return { consider_tags: false };
            case MetricNames.comment_name_coherence:
                return { upper_theshold: 0.5, lower_threshold: 0, levenshtein_distance: 1 };
            case MetricNames.certain_terms:
                return { consider_tags: false, k: 0.1, levenshtein_distance: 1, terms: ["aka", "e.g.", "viz", "i.e."], use_default_terms_too: false };
            case MetricNames.formatting_good:
                return {
                    accept_no_formatting: true,
                    only_public: true,
                    k: 0.2,
                    allowed_tags: [],
                    max_lines_no_formatting: 2
                };
            case MetricNames.spelling:
                return { k: 0.05, additional_words: [] };
            default:
                return {};
        }
    }
    MetricManager.getDefaultMetricParam = getDefaultMetricParam;
    init();
})(MetricManager = exports.MetricManager || (exports.MetricManager = {}));
//# sourceMappingURL=metric_manager.js.map