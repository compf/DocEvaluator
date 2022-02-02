import { Component } from "./component";
import { ComponentMetaInformation } from "./component_data";
import { StructuredComment } from "./structured_comment";
/**
 * A component that consists of other components, e.g. a class
 */
export declare class HierarchicalComponent extends Component {
    private children;
    addChild(child: Component): void;
    getChildren(): Component[];
    constructor(lineNumber: number, name: string, parent: Component | null, comment: StructuredComment | null, meta: ComponentMetaInformation);
}
