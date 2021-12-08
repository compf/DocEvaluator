import { CommentedLinesRatioMetric } from "./commented_lines_ratio_metric";
import { DocumentationAnalysisMetric } from "./documentation_analysis_metric";
import { IgnoreGetterSetterMetric } from "./ignore_getters_setter_metric";
import { SimpleCommentPresentMetric } from "./simple_comment_present_metric";
import { SimpleLargeMethodCommentedMetric } from "./simple_large_method_commented_metric";
import { SimpleMethodDocumentationMetric } from "./simple_method_documentation_metric";
import { SimplePublicMembersOnlyMetric } from "./simple_public_members_only_metric";
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
        allMetrics.add("simple_comment", new SimpleCommentPresentMetric());
        allMetrics.add("public_members_only", new SimplePublicMembersOnlyMetric());
        allMetrics.add("large_method_commented", new SimpleLargeMethodCommentedMetric());
        allMetrics.add("method_fully_documented", new SimpleMethodDocumentationMetric());
        allMetrics.add("commented_lines_ratio", new CommentedLinesRatioMetric());
        allMetrics.add("ignore_getters_setters", new IgnoreGetterSetterMetric());
    }
    function resolveMetricName(metricName:string):string{
        for(let metric of Object.entries(aliases)){
            if(metric[0]==metricName.toLowerCase() || metric[1].includes(metricName.toLowerCase())){
                return metric[0];
            }
        }
        throw new Error("Could not identify metric");
    }
    const aliases={
        "simple_comment":["comment_present","all_members","all_components","simple_documentation_present","documentation_present","sc"],
        "public_members_only":["public_members","public_components","only_public","pmo"],
        "large_method_commented":["punish_large_uncommented","punish_large_undocumented","lmc"],
        "method_fully_documented":["method_fully_commented","fully_documented","params_return_documented","params_return_commented","mfd"],
        "commented_lines_ratio":["ratio_commented_uncommented","ratio_documented_undocumented","clr"],
        "ignore_getters_setters":["getters_setters","ignore_properties","ignore_getter_setter","igs"]
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
            default:
                return {}
        }

    }
    init();

}