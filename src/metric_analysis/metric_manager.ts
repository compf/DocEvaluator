import { INVALID_INTERVAL } from "antlr4/tree/Tree";
import { DocumentationAnalysisMetric } from "./documentation_analysis_metric";
import { SimpleCommentPresentMetric } from "./simple_comment_present_metric";
import { SimplePublicMembersOnlyMetric } from "./simple_public_members_only_metric";

export namespace MetricManager{
    export function getMetric(metricName:string):DocumentationAnalysisMetric{
        return allMetrics.get(metricName)!!;
    }
    const allMetrics:Map<string,DocumentationAnalysisMetric>=new Map<string,DocumentationAnalysisMetric>();
    function init(){
        allMetrics.set("simple_comment",new SimpleCommentPresentMetric());
        allMetrics.set("public_members_only",new SimplePublicMembersOnlyMetric());
    }
    export function getMetricNames():string[]{
        return Array.from(allMetrics.keys());
    }
    init();

}