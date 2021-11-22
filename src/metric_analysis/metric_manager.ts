import { DocumentationAnalysisMetric } from "./documentation_analysis_metric";
import { SimpleCommentPresentMetric } from "./simple_comment_present_metric";
import { SimpleLargeMethodCommentedMetric } from "./simple_large_method_commented_metric";
import { SimpleMethodDocumentationMetric } from "./simple_method_documentation_metric";
import { SimplePublicMembersOnlyMetric } from "./simple_public_members_only_metric";
class BiMap<K,V>{
    private k_to_v:Map<K,V>=new Map<K,V>();
    private v_to_k:Map<V,K>=new Map<V,K>();
    public getByKey(key:K):V{
        return this.k_to_v.get(key)!!;
    }
    public getByValue(val:V):K{
        return this.v_to_k.get(val)!!;
    }
    public add(k:K,v:V){
        this.k_to_v.set(k,v);
        this.v_to_k.set(v,k);
    }
    public keys(){
        return this.k_to_v.keys();
    }
    public values(){
        this.v_to_k.keys();
    }
}
export namespace MetricManager{
    /**
     * Method to get metric based on key
     * @param metricName A valid metric name
     * @returns the instance of the respective metric
     * @throws An error if key not present
     */
    export function getMetric(metricName:string):DocumentationAnalysisMetric{
        return allMetrics.getByKey(metricName)!!;
    }
    export function getMetricName(metric:DocumentationAnalysisMetric):string{
        return allMetrics.getByValue(metric)
    }
    const allMetrics:BiMap<string,DocumentationAnalysisMetric>=new BiMap<string,DocumentationAnalysisMetric>();
    function init(){
        allMetrics.add("simple_comment",new SimpleCommentPresentMetric());
        allMetrics.add("public_members_only",new SimplePublicMembersOnlyMetric());
        allMetrics.add("large_method_commented",new SimpleLargeMethodCommentedMetric());
    }   allMetrics.add("method_fully_documented",new SimpleMethodDocumentationMetric());


    /**
     * 
     * @returns All metric names that are declared
     */
    export function getMetricNames():string[]{
        return Array.from(allMetrics.keys());
    }
    export function getDefaultMetricParam(metricName:string):any{
        return {};
    }
    init();

}