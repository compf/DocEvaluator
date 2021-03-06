import { Component } from "../../parser/parse_result/component";
import { JavaMethodData } from "../../parser/parse_result/java/JavaMethodData";
import { MethodComponent } from "../../parser/parse_result/method_component";
import { LogMessage } from "../log_message";
import { MAX_SCORE, MIN_SCORE } from "../metrics/documentation_analysis_metric";
import { MetricManager } from "../metric_manager";
import { LanguageSpecificHelper } from "./language_specific_helper";
/**
 * Provides method to analyze java specific documentation informations
 */
export class JavaSpecificHelper extends LanguageSpecificHelper {
    rateDocumentationCompatibility(component: Component, results: number[], logMessages: LogMessage[]): void {
        let methodData = component.getComponentMetaInformation() as JavaMethodData;
        let throwTags = component.getComment()?.getTags().filter((x) => x.getKind() == "@throws" || x.getKind()=="@exception");
        let throwParamInComment = new Set(throwTags?.map((x) => x.getParam()));
        let throwParamInDecl = new Set(methodData.getThrownException());
        for (let s1 of throwParamInDecl) {
            if (throwParamInComment.has(s1)) {
                results.push(MAX_SCORE);
            }
            else {
                results.push(MIN_SCORE);
                logMessages.push(new LogMessage("Throw " + s1 + " is not documented", component,MetricManager.MetricNames.method_fully_documented))
            }
        }

    }
    shallConsider(component: Component): boolean {

        if (component instanceof MethodComponent) {
            let methodData = component.getComponentMetaInformation() as JavaMethodData;

            return !methodData.isOverriding();
        }

        return true;
    }
    private blockTags = ["@author", "@version", "@param", "@return", "@deprecated", "@since", "@throws", "@exception", "@see", "@serial", "@serialField", "@serialData"];
    // thes inline tags do not contain the cloding "}" because it might be missing
    override isValidBlockTag(tag: string): boolean {
        return this.blockTags.includes(tag);
    }
  
    override getRawTextRegex(): RegExp {
        return /( |^|\.|,|;)\w+}?/g;
    }
    override canTypeBeNull(type: string): boolean {
        switch (type) {

            case "byte":
            case "short":
            case "int":
            case "long":
            case "float":
            case "double":
            case "boolean":
            case "char":
            case "void":
                return false;
            default:
                return true;
        }
    }

}