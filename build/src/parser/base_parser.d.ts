import { HierarchicalComponent } from "./parse_result/hierarchical_component";
export declare abstract class BaseParser {
    /**
     * Parse the specified  parser using the parser of the derived class
     * @param filepath a path to a source code file
     * @returns an A object that represent the parse result
     */
    parse(filepath: string): HierarchicalComponent;
    /**
     * Parse the string using the parser of the derived class
     * @param content the string that contains the source code to parse
     * @param filepath the file path of the content, might be null if the content is a direct string that does not come from a file
     * @returns A object that represent the parse result
     */
    abstract parseString(content: string, filepath: string | null): HierarchicalComponent;
}
