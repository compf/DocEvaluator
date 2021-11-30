import { Component } from "./component";
import { ComponentMetaInformation } from "./component_data";
import { StructuredComment } from "./structured_comment";
/**
 * A component that consists of other components, e.g. a class 
 */
export class HierarchicalComponent extends Component {
    private children: Component[];
    addChild(child: Component) {
        this.children.push(child);
    }
    getChildren(): Component[] {
        return this.children;
    }
    constructor(lineNumber: number, name: string, parent: Component | null, comment: StructuredComment | null, meta: ComponentMetaInformation) {
        super(lineNumber, name, parent, comment, meta)
        this.children = [];
    }

}