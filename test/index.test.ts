import { MetricManager } from "../src/metric_analysis/metric_manager";
import { MetricResultBuilder } from "../src/metric_analysis/metric_result_builder";
import { WeightedMedianResultBuilder } from "../src/metric_analysis/weighted_median_result_builder";
import { WeightResolver } from "../src/metric_analysis/weight_resolver";
import { main } from "../src";
import { existsSync, fstat, readFileSync } from "fs";
import { JavaSpecificHelper } from "../src/metric_analysis/language_specific/java_specific_helper";


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
class DummyWeightResolver implements WeightResolver {
    resolveWeight(key: any): number {
        return 0;
    }

}
test("Test  get new result builder", () => {
    expect(MetricManager.getNewMetricResultBuilder("default_builder", null, undefined) instanceof MetricResultBuilder).toBeTruthy();
    expect(MetricManager.getNewMetricResultBuilder("weighted_median_builder", new DummyWeightResolver(), undefined) instanceof WeightedMedianResultBuilder).toBeTruthy();
    try {
        expect(MetricManager.getNewMetricResultBuilder("weighted_mean_builder", null, undefined) instanceof WeightedMedianResultBuilder).toBeTruthy();
        fail();
    } catch (error) {

    }

});
test("test unique name from MetricManager", () => {
    const test = "test";
    for (let i = 0; i < 3; i++) {
        const expectedName = test + "_" + i;
        const receivedName = MetricManager.getUniqueName(test);
        expect(receivedName).toBe(expectedName);
    }
});
test("normal main program works", () => {
    if (existsSync("test_main.txt")) {
        main(["testDir/expr"])
        let actual = parseFloat(readFileSync("testDir/expr/.evaluator_last_state.txt").toString());
        const expected = 44.669;
        expect(actual).toBeCloseTo(expected, 3);
    }

});
test("test raw text", () => {
    const text = "this is a test <html> with some {@see test} words";
    const raw = "this is a test with some words";
    let langSpec = new JavaSpecificHelper();
    let result = langSpec.getRawText(text);
    expect(result).toBe(raw);
});


