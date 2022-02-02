import { Component } from "../../parser/parse_result/component";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { MetricResultBuilder } from "../metric_result_builder";
import { ChildrenBasedMetric } from "./children_based_metric";
/**
 * This metric calculates how many lines of the hierarchical component are covered by
 * undocumented methods and how many lines are covered by documented methods.
 * It returns the percentage of documented lines
 */
export declare class CommentedLinesRatioMetric extends ChildrenBasedMetric {
    analyze(component: Component, builder: MetricResultBuilder, langSpec: LanguageSpecificHelper): void;
    shallConsider(component: Component): boolean;
}
