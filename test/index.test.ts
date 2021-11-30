import { MetricManager } from "../src/metric_analysis/metric_manager";
class BaseClass{

}
class DerivedClass extends BaseClass{

}
test("test empty class instanceof works",()=>{
    let base=new BaseClass();
    let derive=new DerivedClass();

    expect(base instanceof BaseClass).toBeTruthy();
    expect(base instanceof DerivedClass).toBeFalsy();
    expect(derive instanceof BaseClass).toBeTruthy();
    expect(derive instanceof DerivedClass).toBeTruthy();
});
test("Test MetricManager instancing works",()=>{
    let simple_comment=MetricManager.getMetric("simple_comment");
    let simple_comment_name=MetricManager.getMetricName(simple_comment);
    expect(simple_comment_name).toBe("simple_comment");
    let second_instance=MetricManager.getMetric(simple_comment_name);
    expect(second_instance).toBe(simple_comment);

});