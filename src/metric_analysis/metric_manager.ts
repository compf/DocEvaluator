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
export namespace MetricManager {
    /**
     * Method to create a metric based on key
     * @param metricName A valid metric name
     * @returns the new instance of the respective metric
     * @throws An error if key not present
     */
    export function createMetricByName(metricName: string,uniqueName:string,params:any): DocumentationAnalysisMetric {
        let type=allMetricTypes.getByKey(metricName)
        let instance=   new  type(uniqueName,params);
        allMetrics.set(uniqueName,instance);
        return instance;
    }
    /**
     * Creates a metric based on the given Metric Type constructor
     * @param type A constructor that is given (uniquename:string,params:any) and return a valid Metric
     * @param uniqueName the unique name of the new metric
     * @param params the params for this metric
     * @returns a valid metric instance
     */
    export function createMetricByType(type:new (name: string, params: any) => DocumentationAnalysisMetric,uniqueName:string,params:any): DocumentationAnalysisMetric {
        let instance=   new type(uniqueName,params);
        allMetrics.set(uniqueName,instance);
        return instance;
    }
    /**
     * return the metric name of a metric type
     * @param type A constructor that is given (uniquename:string,params:any) and return a valid Metric
     * @returns a valid metric name
     * @throws a KeyError if this type is not a valid metric
     */
    export function getMetricName(type:new (name: string, params: any) => DocumentationAnalysisMetric):string{
        return allMetricTypes.getByValue(type);
    }
    export function getMetricByUniqueName(uniqueName:string):DocumentationAnalysisMetric{
        return allMetrics.get(uniqueName)!;
    }
    const allMetrics: Map<string, DocumentationAnalysisMetric> = new Map<string, DocumentationAnalysisMetric>();
    const allMetricTypes:BiMap<string,new (name: string, params: any) => DocumentationAnalysisMetric>=new BiMap<string,new (name: string, params: any) => DocumentationAnalysisMetric>()
    function init() {
        allMetricTypes.add("simple_comment", SimpleCommentPresentMetric);
        allMetricTypes.add("public_members_only", SimplePublicMembersOnlyMetric);
        allMetricTypes.add("large_method_commented", SimpleLargeMethodCommentedMetric);
        allMetricTypes.add("method_fully_documented", SimpleMethodDocumentationMetric);
        allMetricTypes.add("commented_lines_ratio", CommentedLinesRatioMetric);
        allMetricTypes.add("ignore_getters_setters", IgnoreGetterSetterMetric);
        allMetricTypes.add("flesch", FleschMetric)

       
    }
    const uniqueNameCountMap:Map<string,number>=new Map<string,number>();
    /**
     * Creates a unique name by appending a number at the base name depending of how often this base name was used
     * E.g. if the input is test, the first invocation would return test0, the second invocation returns test1
     * @param baseName a bgase name where a number wil be attached so that an unique name can be created
     * @returns an unique name
     */
    export  function  getUniqueName(baseName:string):string{
        if(uniqueNameCountMap.has(baseName)){
            const newCount=uniqueNameCountMap.get(baseName)!+1;
            uniqueNameCountMap.set(baseName,newCount);
            return baseName+newCount;
        }
        else{
            uniqueNameCountMap.set(baseName,0);
            return baseName+"0";

        }
    }
    /**
     * Creates a new MetricResultBuilder instance based on the given name
     * @param builderName must be a valid name of a MetricResultBuilder (e.g. mean_builder or default_builder)
     * @param weightResolver an object to assign a weight to a given string, if the builder doesn't need a resolver it will be ignored
     * @returns a new MetricResultBuilder whose type depends on a the builderName
     */
    export function getNewMetricResultBuilder(builderName: string, weightResolver: WeightResolver| null): MetricResultBuilder {
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
    export function getAllImplementedMetricNames():string[]{
        return Array.from(allMetricTypes.keys());
    }
    /**
     * Get the default params for each metric
     * @param metricName a valid metric name 
     * @returns all default params or an empty object {} if metric name is not known or has no parameters
     */
    export function getDefaultMetricParam(metricName: string): any {
        switch (metricName) {
            case "large_method_commented":
                return { ignoreLines: ["", "{", "}"], k: 0.2 }
            case "commented_lines_ratio":
                return { ignoreLines: ["", "{", "}"] };
            case "ignore_getters_setter":
                return { getterPattern: "(get.*)|(is.*)", setterPattern: "set.*" };
            case "flesch":
                return { considerTags: false };
            default:
                return {}
        }

    }
    init();

}