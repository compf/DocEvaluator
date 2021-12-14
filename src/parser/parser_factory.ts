import { BaseParser } from "./base_parser";
import { JavaParser } from "./java_parser";

export class ParserFactory{
    createParser(parserName:string):BaseParser{
        switch(parserName.toLowerCase()){
            case "java":
                return new JavaParser();
            default:
                throw new Error("Could not find parser "+parserName);
        }
    }
}