import { BaseParser } from "./base_parser";
import { JavaParser } from "./java_parser";

export namespace ParserFactory {
    /**
     * creates a new parser instance based on the given {@code parserName}
     * @param parserName a valid parser name. Should be a common term for a programming language 
     * @returns a new Parser instance
     */
    export function createParser(parserName: string): BaseParser {
        switch (parserName.toLowerCase()) {
            case "java":
                return new JavaParser();
            default:
                throw new Error("Could not find parser " + parserName);
        }
    }
}

