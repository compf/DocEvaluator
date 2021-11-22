import { MetricManager } from "../src/metric_analysis/metric_manager";

test("test",()=>expect(5).toBe(5));
test("Test MetricManager instancing works",()=>{
    let simple_comment=MetricManager.getMetric("simple_comment");
    let simple_comment_name=MetricManager.getMetricName(simple_comment);
    expect(simple_comment_name).toBe("simple_comment");
    let second_instance=MetricManager.getMetric(simple_comment_name);
    expect(second_instance).toBe(simple_comment);

});