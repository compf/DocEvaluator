import { SingleMemberComponent } from "./single_member_component";
import { Component } from "./component";
import { ComponentMetaInformation } from "./component_data";
import { StructuredComment } from "./structured_comment";
/**
 * A component that represent a method in an oop language
 */
export declare class MethodComponent extends SingleMemberComponent {
    private params;
    private methodBody;
    constructor(lineNumber: number, name: string, type: string, parent: Component | null, comment: StructuredComment | null, meta: ComponentMetaInformation, params: {
        type: string;
        name: string;
    }[], methodBody: string);
    /**
     * Getter for the method parameters. A parameter is a simply a pair of name and type both as string
     * @returns A list of all params
     */
    getParams(): {
        type: string;
        name: string;
    }[];
    getMethodBody(): string;
    getLinesOfCode(ignoreLines: string[]): number;
}
