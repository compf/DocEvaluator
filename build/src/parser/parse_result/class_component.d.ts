import { Component } from "./component";
import { ComponentMetaInformation } from "./component_data";
import { HierarchicalComponent } from "./hierarchical_component";
import { StructuredComment } from "./structured_comment";
/**
 * A component that represent a class
 */
export declare class ClassComponent extends HierarchicalComponent {
    private superTypes;
    constructor(lineNumber: number, name: string, parent: Component | null, comment: StructuredComment | null, meta: ComponentMetaInformation, superTypes: string[]);
    /**
     * Getter for all super types of a component, Base classes and interfaces are not distinguished
     * @returns A list of all super types (base class and implemented interfaces)
     */
    getSuperTypes(): string[];
}
