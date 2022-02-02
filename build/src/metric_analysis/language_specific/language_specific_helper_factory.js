"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageSpecificHelperFactory = void 0;
const java_specific_helper_1 = require("./java_specific_helper");
const language_specific_helper_1 = require("./language_specific_helper");
/**
 * Creates a Language Specific helper based on a string
 */
var LanguageSpecificHelperFactory;
(function (LanguageSpecificHelperFactory) {
    function loadHelper(name) {
        switch (name) {
            case "java":
                return new java_specific_helper_1.JavaSpecificHelper();
            default:
                return new language_specific_helper_1.LanguageSpecificHelper();
        }
    }
    LanguageSpecificHelperFactory.loadHelper = loadHelper;
})(LanguageSpecificHelperFactory = exports.LanguageSpecificHelperFactory || (exports.LanguageSpecificHelperFactory = {}));
//# sourceMappingURL=language_specific_helper_factory.js.map