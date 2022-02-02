"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaSpecificHelper = void 0;
const method_component_1 = require("../../parser/parse_result/method_component");
const log_message_1 = require("../log_message");
const documentation_analysis_metric_1 = require("../metrics/documentation_analysis_metric");
const language_specific_helper_1 = require("./language_specific_helper");
class JavaSpecificHelper extends language_specific_helper_1.LanguageSpecificHelper {
    constructor() {
        super(...arguments);
        this.blockTags = ["@author", "@version", "@param", "@return", "@deprecated", "@since", "@throws", "@exception", "@see", "@serial", "@serialField", "@serialData"];
        // thes inline tags do not contain the cloding "}" because it might be missing
        this.inlineTags = ["{@code", "{@docRoot", "{@inheritDoc", "{@link", "{@linkplain", "{@literal"];
    }
    rateDocumentationCompatibility(component, results, logMessages) {
        var _a;
        let methodData = component.getComponentMetaInformation();
        let throwTags = (_a = component.getComment()) === null || _a === void 0 ? void 0 : _a.getTags().filter((x) => x.getKind() == "@throws");
        let throwParamInComment = new Set(throwTags === null || throwTags === void 0 ? void 0 : throwTags.map((x) => x.getParam()));
        let throwParamInDecl = new Set(methodData.getThrownException());
        for (let s1 of throwParamInDecl) {
            if (throwParamInComment.has(s1)) {
                results.push(documentation_analysis_metric_1.MAX_SCORE);
            }
            else {
                results.push(documentation_analysis_metric_1.MIN_SCORE);
                logMessages.push(new log_message_1.LogMessage("Throw " + s1 + " is not documented", component));
            }
        }
    }
    shallConsider(component) {
        if (component instanceof method_component_1.MethodComponent) {
            let methodData = component.getComponentMetaInformation();
            return !methodData.isOverriding();
        }
        return true;
    }
    getInlineTagRegex() {
        return /\{@\w+ \w*\}?/g;
    }
    isValidBlockTag(tag) {
        return this.blockTags.includes(tag);
    }
    isValidInlineTag(tag) {
        return this.inlineTags.some((t) => tag.startsWith(t) && tag.endsWith("}"));
    }
    getRawTextRegex() {
        return /( |^|\.|,|;)\w+}?/g;
    }
}
exports.JavaSpecificHelper = JavaSpecificHelper;
//# sourceMappingURL=java_specific_helper.js.map