import { MetricManager } from "../src/metric_analysis/metric_manager";
import { MetricResultBuilder } from "../src/metric_analysis/metric_result_builder";
import { SimpleCommentPresentMetric } from "../src/metric_analysis/simple_comment_present_metric";
import { SimpleMethodDocumentationMetric } from "../src/metric_analysis/simple_method_documentation_metric";
import { WeightedMedianResultBuilder } from "../src/metric_analysis/weighted_median_result_builder";
class BaseClass {

}
class DerivedClass extends BaseClass {

}
test("test empty class instanceof works", () => {
    let base = new BaseClass();
    let derive = new DerivedClass();

    expect(base instanceof BaseClass).toBeTruthy();
    expect(base instanceof DerivedClass).toBeFalsy();
    expect(derive instanceof BaseClass).toBeTruthy();
    expect(derive instanceof DerivedClass).toBeTruthy();
});
test("Test MetricManager instancing works", () => {
    let simple_comment = MetricManager.getMetric("simple_comment");
    let simple_comment_name = MetricManager.getMetricName(simple_comment);
    expect(simple_comment_name).toBe("simple_comment");
    let second_instance = MetricManager.getMetric(simple_comment_name);
    expect(second_instance).toBe(simple_comment);

});
test("Test  get new result builder",()=>{
    expect(MetricManager.getNewMetricResultBuilder("default_builder",null) instanceof MetricResultBuilder).toBeTruthy();
    expect(MetricManager.getNewMetricResultBuilder("weighted_median_builder",new Map()) instanceof WeightedMedianResultBuilder).toBeTruthy();
    try {
        expect(MetricManager.getNewMetricResultBuilder("weighted_mean_builder",null) instanceof WeightedMedianResultBuilder).toBeTruthy();
        fail();
    } catch (error) {
        
    }

});
test("Test MetricManager aliasing works",()=>{
    const alias_simple_comment="all_components";
    const alias_method_fully_commented="params_return_documented";

    expect(MetricManager.getMetric(alias_method_fully_commented )instanceof SimpleMethodDocumentationMetric).toBeTruthy();
    try {
        expect(MetricManager.getMetric(alias_simple_comment+"1"));
        fail();
    } catch (error) {
        
    }
   
});

