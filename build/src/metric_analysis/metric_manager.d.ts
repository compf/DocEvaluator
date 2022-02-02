import { DocumentationAnalysisMetric } from "./metrics/documentation_analysis_metric";
import { MetricResultBuilder } from "./metric_result_builder";
import { WeightResolver } from "./weight_resolver";
export declare type MetricConstructor = new (name: string, params: any) => DocumentationAnalysisMetric;
export declare namespace MetricManager {
    /**
     * Method to create a metric based on key
     * @param metricName A valid metric name
     * @returns the new instance of the respective metric
     * @throws An error if key not present
     */
    function createMetricByName(metricName: MetricNames, uniqueName: string, params: any): DocumentationAnalysisMetric;
    /**
     * Creates a metric based on the given Metric Type constructor
     * @param type A constructor that is given (uniquename:string,params:any) and return a valid Metric
     * @param uniqueName the unique name of the new metric
     * @param params the params for this metric
     * @returns a valid metric instance
     */
    function createMetricByType(type: new (name: string, params: any) => DocumentationAnalysisMetric, uniqueName: string, params: any): DocumentationAnalysisMetric;
    /**
     * return the metric name of a metric type
     * @param type A constructor that is given (uniquename:string,params:any) and return a valid Metric
     * @returns a valid metric name
     * @throws a KeyError if this type is not a valid metric
     */
    function getMetricName(type: new (name: string, params: any) => DocumentationAnalysisMetric): MetricNames;
    function getMetricByUniqueName(uniqueName: string): DocumentationAnalysisMetric;
    enum MetricNames {
        simple_comment = "simple_comment",
        public_members_only = "public_members_only",
        large_method_commented = "large_method_commented",
        method_fully_documented = "method_fully_documented",
        commented_lines_ratio = "commented_lines_ratio",
        flesch = "flesch",
        comment_name_coherence = "comment_name_coherence",
        certain_terms = "certain_terms",
        formatting_good = "formatting_good",
        spelling = "spelling"
    }
    /**
     * Creates a unique name by appending a number at the base name depending of how often this base name was used
     * E.g. if the input is test, the first invocation would return test0, the second invocation returns test1
     * @param baseName a bgase name where a number wil be attached so that an unique name can be created
     * @returns an unique name
     */
    function getUniqueName(baseName: string): string;
    /**
     * Creates a new MetricResultBuilder instance based on the given name
     * @param builderName must be a valid name of a MetricResultBuilder (e.g. mean_builder or default_builder)
     * @param weightResolver an object to assign a weight to a given string, if the builder doesn't need a resolver it will be ignored
     * @returns a new MetricResultBuilder whose type depends on a the builderName
     */
    function getNewMetricResultBuilder(builderName: string, weightResolver: WeightResolver | null): MetricResultBuilder;
    /**
     *
     * @returns All metric names that have been loaded from the config
     */
    function getUsedMetricNames(): string[];
    /**
     * @return all metric names that are implemented regardless if or how often they are used currently
     */
    function getAllImplementedMetricNames(): string[];
    /**
     * Get the default params for each metric
     * @param metricName a valid metric name
     * @returns all default params or an empty object {} if metric name is not known or has no parameters
     */
    function getDefaultMetricParam(metricName: MetricNames): any;
}
