import { Component } from "../../parser/parse_result/component";
import { LanguageSpecificHelper } from "../language_specific/language_specific_helper";
import { MetricResultBuilder } from "../metric_result_builder";
import { ComponentBasedMetric } from "./component_based_,metric";
export declare class FormattingGoodMetric extends ComponentBasedMetric {
    analyze(component: Component, builder: MetricResultBuilder, langSpec: LanguageSpecificHelper): void;
    private getInvalidInlineTagCount;
    private getInvalidBlockTagCount;
    protected processResult(result: number, logMessages: string[]): number;
    private findTags;
    private filterTagsNotNeedClose;
    private findHtmlErrors;
    private needNotToBeClosed;
}
