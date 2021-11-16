import { DocumentationAnalysisMetric } from "./documentation_analysis_metric";
import { SimpleCommentPresentMetric } from "./simple_comment_present_metric";
import { SimplePublicMembersOnlyMetric } from "./simple_public_members_only_metric";

export namespace MetricManager{
    /**
     * Method to get metric based on key
     * @param metricName A valid metric name
     * @returns the instance of the respective metric
     * @throws An error if key not present
     */
    export function getMetric(metricName:string):DocumentationAnalysisMetric{
        return allMetrics.get(metricName)!!;
    }
    const allMetrics:Map<string,DocumentationAnalysisMetric>=new Map<string,DocumentationAnalysisMetric>();
    function init(){
        allMetrics.set("simple_comment",new SimpleCommentPresentMetric());
        allMetrics.set("public_members_only",new SimplePublicMembersOnlyMetric());
    }
    /**
     * 
     * @returns All metric names that are declared
     */
    export function getMetricNames():string[]{
        return Array.from(allMetrics.keys());
    }
    init();

}