import { BaseParser } from "./base_parser";
import { CommonTokenStream } from 'antlr4ts';
import { StructuredComment, StructuredCommentTag } from "./parse_result/structured_comment";
import { HierarchicalComponent } from "./parse_result/hierarchical_component";
export declare class JavaParser extends BaseParser {
    /**
    * Reads all tokens from the source code file
    * @param content a string that contains valid source code
    * @returns a CommonTokenStream that contains all read tokens
    */
    getTokens<T>(content: string): CommonTokenStream;
    parseString(content: string, filepath: string | null): HierarchicalComponent;
}
export declare class JavadocParser {
    private getElementOrDefault;
    private splitWithRemainder;
    parseTag(line: string): StructuredCommentTag;
    hasParam(line: string): boolean;
    startsWithTag(line: string): boolean;
    parseCommentText(text: string): StructuredComment;
}
