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
    public containsKey(key:K){
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
    export function getMetric(metricName: string): DocumentationAnalysisMetric {
        return allMetrics.getByKey(resolveMetricName(metricName))!!;
    }
    export function getMetricName(metric: DocumentationAnalysisMetric): string {
        return allMetrics.getByValue(metric)
    }
    const allMetrics: BiMap<string, DocumentationAnalysisMetric> = new BiMap<string, DocumentationAnalysisMetric>();
    function init() {
        // main metric names must be lower case
        allMetrics.add("simple_comment", new SimpleCommentPresentMetric());
        allMetrics.add("public_members_only", new SimplePublicMembersOnlyMetric());
        allMetrics.add("large_method_commented", new SimpleLargeMethodCommentedMetric());
        allMetrics.add("method_fully_documented", new SimpleMethodDocumentationMetric());
        allMetrics.add("commented_lines_ratio", new CommentedLinesRatioMetric());
        allMetrics.add("ignore_getters_setters", new IgnoreGetterSetterMetric());
        allMetrics.add("flesch",new FleschMetric())
    }
    export function getNewMetricResultBuilder(builderName:string, weightMap:Map<any,number>|null):MetricResultBuilder{
        switch(builderName){
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
    function resolveMetricName(metricName:string):string{
        if(allMetrics.containsKey(metricName.toLowerCase()))return metricName.toLowerCase();
        for(let metric of Object.entries(aliases)){
            if(metric[0]==metricName.toLowerCase() || metric[1].includes(metricName.toLowerCase())){
                return metric[0];
            }
        }
        throw new Error("Could not identify metric");
    }
    const aliases={
        "simple_comment":["comment_present","all_members","all_components","simple_documentation_present","documentation_present","sc",SimpleCommentPresentMetric.name],
        "public_members_only":["public_members","public_components","only_public","pmo",SimplePublicMembersOnlyMetric.name],
        "large_method_commented":["punish_large_uncommented","punish_large_undocumented","lmc",SimpleLargeMethodCommentedMetric.name],
        "method_fully_documented":["method_fully_commented","fully_documented","params_return_documented","params_return_commented","mfd",SimpleMethodDocumentationMetric.name],
        "commented_lines_ratio":["ratio_commented_uncommented","ratio_documented_undocumented","clr",CommentedLinesRatioMetric.name],
        "ignore_getters_setters":["getters_setters","ignore_properties","ignore_getter_setter","igs",IgnoreGetterSetterMetric.name]
    }

    /**
     * 
     * @returns All metric names that are declared
     */
    export function getMetricNames(): string[] {
        return Array.from(allMetrics.keys());
    }
    export function getDefaultMetricParam(metricName: string): any {
        metricName=resolveMetricName(metricName);
        switch(metricName){
            case "large_method_commented":
                return {ignoreLines:["", "{", "}"],k:0.2}
            case "commented_lines_ratio":
                return {ignoreLines:["", "{", "}"]};
            case "ignore_getters_setter":
                return {getterPattern:"(get.*)|(is.*)",setterPattern:"set.*"};
            case "flesch":
                return {considerTags:false};
            default:
                return {}
        }

    }
    init();

}