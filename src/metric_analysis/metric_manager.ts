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
     * Method to get metric based on key
     * @param metricName A valid metric name
     * @returns the instance of the respective metric
     * @throws An error if key not present
     */
    export function createMetricByName(metricName: string,uniqueName:string,params:any): DocumentationAnalysisMetric {
        let instance=   new (allMetricTypes.getByKey(metricName))(uniqueName,params);
        allMetrics.set(uniqueName,instance);
        return instance;
    }
    export function createMetricByType(type:new (name: string, params: any) => DocumentationAnalysisMetric,uniqueName:string,params:any): DocumentationAnalysisMetric {
        let instance=   new (type)(uniqueName,params);
        allMetrics.set(uniqueName,instance);
        return instance;
    }
    export function getMetricName(type:new (name: string, params: any) => DocumentationAnalysisMetric):string{
        return allMetricTypes.getByValue(type);
    }
    const allMetrics: Map<string, DocumentationAnalysisMetric> = new Map<string, DocumentationAnalysisMetric>();
    const allMetricTypes:BiMap<string,new (name: string, params: any) => DocumentationAnalysisMetric>=new BiMap<string,new (name: string, params: any) => DocumentationAnalysisMetric>()
    function init() {
        // main metric names must be lower case
        allMetricTypes.add("simple_comment", SimpleCommentPresentMetric);
        allMetricTypes.add("public_members_only", SimplePublicMembersOnlyMetric);
        allMetricTypes.add("large_method_commented", SimpleLargeMethodCommentedMetric);
        allMetricTypes.add("method_fully_documented", SimpleMethodDocumentationMetric);
        allMetricTypes.add("commented_lines_ratio", CommentedLinesRatioMetric);
        allMetricTypes.add("ignore_getters_setters", IgnoreGetterSetterMetric);
        allMetricTypes.add("flesch", FleschMetric)

       
    }
   
    export function getNewMetricResultBuilder(builderName: string, weightMap: Map<any, number> | null): MetricResultBuilder {
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
                return new WeightedMetricResultBuilder(weightMap!);
            case "weighted_median_result_builder":
            case "weighted_median_builder":
                return new WeightedMedianResultBuilder(weightMap!);
        }
        throw new Error("Could not identify ResultBuilder");
    }



    /**
     * 
     * @returns All metric names that are declared
     */
    export function getUsedMetricNames(): string[] {
        return Array.from(allMetrics.keys());
    }
    export function getAllImplementedMetricNames():string[]{
        return Array.from(allMetricTypes.keys());
    }
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