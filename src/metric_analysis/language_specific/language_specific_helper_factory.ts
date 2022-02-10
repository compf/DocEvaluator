import { JavaSpecificHelper } from "./java_specific_helper";
import { LanguageSpecificHelper } from "./language_specific_helper";
/**
 * Creates a Language Specific helper based on a string
 */
export namespace LanguageSpecificHelperFactory {
    export function loadHelper(name: string) {
        switch (name) {
            case "java":
                return new JavaSpecificHelper();
            default:
                return new LanguageSpecificHelper();
        }
    }

}