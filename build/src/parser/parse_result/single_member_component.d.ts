import { Component } from "./component";
import { ComponentMetaInformation } from "./component_data";
import { StructuredComment } from "./structured_comment";
/**
 * A member that has no children and returns something, for instance a field or method
 */
export declare class SingleMemberComponent extends Component {
    private returnType;
    getReturnType(): string;
    constructor(lineNumber: number, name: string, type: string, parent: Component | null, comment: StructuredComment | null, meta: ComponentMetaInformation);
}
