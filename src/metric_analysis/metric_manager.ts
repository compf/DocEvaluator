import { CommentedLinesRatioMetric } from "./metrics/commented_lines_ratio_metric";
import { DocumentationAnalysisMetric } from "./metrics/documentation_analysis_metric";
import { IgnoreGetterSetterMetric } from "./metrics/ignore_getters_setter_metric";
import { MedianResultBuilder } from "./median_result_builder";
import { MetricResultBuilder } from "./metric_result_builder";
import { SimpleCommentPresentMetric } from "./metrics/simple_comment_present_metric";
import { SimpleLargeMethodCommentedMetric } from "./metrics/simple_large_method_commented_metric";
import { SimpleMethodDocumentationMetric } from "./metrics/simple_method_documentation_metric";
import { SimplePublicMembersOnlyMetric } from "./metrics/simple_public_members_only_metric";
import { WeightedMedianResultBuilder } from "./weighted_median_result_builder";
import { WeightedMetricResultBuilder } from "./weighted_metric_result_builder";
import { FleschMetric } from "./metrics/flesch_metric";
import { WeightResolver } from "./weight_resolver";
import { CommentNameCoherenceMetric } from "./metrics/comment_name_coherence_metric";
import { CertainTermCountMetric } from "./metrics/certain_terms_count_metric";
import { FormattingGoodMetric } from "./metrics/formatting_good_metric";
class BiMap<K, V>{
    private k_to_v: Map<K, V> = new Map<K, V>();
    private v_to_k: Map<V, K> = new Map<V, K>();
    public getByKey(key: K): V {
        return this.k_to_v.get(key)!!;
    }
    public getByValue(val: V): K {
        return this.v_to_k.get(val)!!;
    }
    public add(k: K, v: V) {
        this.k_to_v.set(k, v);
        this.v_to_k.set(v, k);
    }
    public keys() {
        return this.k_to_v.keys();
    }
    public values() {
        this.v_to_k.keys();
    }
    public containsKey(key: K) {
        return this.k_to_v.has(key);
    }
}
export type MetricConstructor = new (name: string, params: any) => DocumentationAnalysisMetric;
export namespace MetricManager {
    /**
     * Method to create a metric based on key
     * @param metricName A valid metric name
     * @returns the new instance of the respective metric
     * @throws An error if key not present
     */
    export function createMetricByName(metricName: MetricNames, uniqueName: string, params: any): DocumentationAnalysisMetric {
        let type = allMetricTypes.getByKey(metricName)
        return createMetricByType(type, uniqueName, params);
    }
    /**
     * Creates a metric based on the given Metric Type constructor
     * @param type A constructor that is given (uniquename:string,params:any) and return a valid Metric
     * @param uniqueName the unique name of the new metric
     * @param params the params for this metric
     * @returns a valid metric instance
     */
    export function createMetricByType(type: new (name: string, params: any) => DocumentationAnalysisMetric, uniqueName: string, params: any): DocumentationAnalysisMetric {
        let defaultParams = MetricManager.getDefaultMetricParam(getMetricName(type));

        Object.assign(defaultParams, params);
        params = defaultParams;
        let instance = new type(uniqueName, params);
        allMetrics.set(uniqueName, instance);
        return instance;
    }
    /**
     * return the metric name of a metric type
     * @param type A constructor that is given (uniquename:string,params:any) and return a valid Metric
     * @returns a valid metric name
     * @throws a KeyError if this type is not a valid metric
     */
    export function getMetricName(type: new (name: string, params: any) => DocumentationAnalysisMetric): MetricNames {
        return allMetricTypes.getByValue(type);
    }
    export function getMetricByUniqueName(uniqueName: string): DocumentationAnalysisMetric {
        return allMetrics.get(uniqueName)!;
    }
    export enum MetricNames {
        simple_comment = "simple_comment",
        public_members_only = "public_members_only",
        large_method_commented = "large_method_commented",
        method_fully_documented = "method_fully_documented",
        commented_lines_ratio = "commented_lines_ratio",
        flesch = "flesch",
        comment_name_coherence = "comment_name_coherence",
        certain_terms = "certain_terms",
        formatting_good = "formatting_good"
    }
    const allMetrics: Map<string, DocumentationAnalysisMetric> = new Map<string, DocumentationAnalysisMetric>();
    const allMetricTypes: BiMap<MetricNames, new (name: string, params: any) => DocumentationAnalysisMetric> = new BiMap<MetricNames, new (name: string, params: any) => DocumentationAnalysisMetric>()
    function init() {
        allMetricTypes.add(MetricNames.simple_comment, SimpleCommentPresentMetric);
        allMetricTypes.add(MetricNames.public_members_only, SimplePublicMembersOnlyMetric);
        allMetricTypes.add(MetricNames.large_method_commented, SimpleLargeMethodCommentedMetric);
        allMetricTypes.add(MetricNames.method_fully_documented, SimpleMethodDocumentationMetric);
        allMetricTypes.add(MetricNames.commented_lines_ratio, CommentedLinesRatioMetric);
        allMetricTypes.add(MetricNames.flesch, FleschMetric)
        allMetricTypes.add(MetricNames.comment_name_coherence, CommentNameCoherenceMetric);
        allMetricTypes.add(MetricNames.certain_terms, CertainTermCountMetric);
        allMetricTypes.add(MetricNames.formatting_good, FormattingGoodMetric);

    }
    const uniqueNameCountMap: Map<string, number> = new Map<string, number>();
    /**
     * Creates a unique name by appending a number at the base name depending of how often this base name was used
     * E.g. if the input is test, the first invocation would return test0, the second invocation returns test1
     * @param baseName a bgase name where a number wil be attached so that an unique name can be created
     * @returns an unique name
     */
    export function getUniqueName(baseName: string): string {
        if (uniqueNameCountMap.has(baseName)) {
            const newCount = uniqueNameCountMap.get(baseName)! + 1;
            uniqueNameCountMap.set(baseName, newCount);
            return baseName + "_" + newCount;
        }
        else {
            uniqueNameCountMap.set(baseName, 0);
            return baseName + "_0";

        }
    }
    /**
     * Creates a new MetricResultBuilder instance based on the given name
     * @param builderName must be a valid name of a MetricResultBuilder (e.g. mean_builder or default_builder)
     * @param weightResolver an object to assign a weight to a given string, if the builder doesn't need a resolver it will be ignored
     * @returns a new MetricResultBuilder whose type depends on a the builderName
     */
    export function getNewMetricResultBuilder(builderName: string, weightResolver: WeightResolver | null): MetricResultBuilder {
        switch (builderName) {
            case "mean_builder":
            case "metric_result_builder":
            case "default_builder":
            case "default_result_builder":
                return new MetricResultBuilder();
            case "median_builder":
            case "median_result_builder":
                return new MedianResultBuilder();
            case "weighted_mean_builder":
            case "weighted_metric_result_builder":
            case "weighted_mean_result_builder":
                return new WeightedMetricResultBuilder(weightResolver!);
            case "weighted_median_result_builder":
            case "weighted_median_builder":
                return new WeightedMedianResultBuilder(weightResolver!);
        }
        throw new Error("Could not identify ResultBuilder");
    }




    /**
     * 
     * @returns All metric names that have been loaded from the config
     */
    export function getUsedMetricNames(): string[] {
        return Array.from(allMetrics.keys());
    }
    /**
     * @return all metric names that are implemented regardless if or how often they are used currently
     */
    export function getAllImplementedMetricNames(): string[] {
        return Array.from(allMetricTypes.keys());
    }
    /**
     * Get the default params for each metric
     * @param metricName a valid metric name 
     * @returns all default params or an empty object {} if metric name is not known or has no parameters
     */
    export function getDefaultMetricParam(metricName: MetricNames): any {
        switch (metricName) {
            case MetricNames.large_method_commented:
                return { ignore_lines: ["", "{", "}"], k: 0.2 }
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
                    max_lines_no_formatting:2
                };
            default:
                return {}
        }

    }
    init();

}