import { MetricManager } from "../src/metric_analysis/metric_manager";
import { MetricResultBuilder } from "../src/metric_analysis/metric_result_builder";
import { SimpleCommentPresentMetric } from "../src/metric_analysis/metrics/simple_comment_present_metric";
import { SimpleMethodDocumentationMetric } from "../src/metric_analysis/metrics/simple_method_documentation_metric";
import { WeightedMedianResultBuilder } from "../src/metric_analysis/weighted_median_result_builder";
import { WeightResolver } from "../src/metric_analysis/weight_resolver";
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
class DummyWeightResolver implements WeightResolver{
    resolveWeight(key: any): number {
        return 0;
    }
    
}
test("Test  get new result builder",()=>{
    expect(MetricManager.getNewMetricResultBuilder("default_builder",null) instanceof MetricResultBuilder).toBeTruthy();
    expect(MetricManager.getNewMetricResultBuilder("weighted_median_builder",new DummyWeightResolver()) instanceof WeightedMedianResultBuilder).toBeTruthy();
    try {
        expect(MetricManager.getNewMetricResultBuilder("weighted_mean_builder",null) instanceof WeightedMedianResultBuilder).toBeTruthy();
        fail();
    } catch (error) {
        
    }

});
test("test unique name from MetricManager",()=>{
    const test="test";
    for(let i=0;i<3;i++){
        const expectedName=test+"_"+i;
        const receivedName=MetricManager.getUniqueName(test);
        expect(receivedName).toBe(expectedName);
    }
});


