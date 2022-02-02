import { ComponentMetaInformation } from "./component_data";
import { StructuredComment } from "./structured_comment";
/**
 * A component could be a class, a method, a field or anything else that is part of the general structure of a program
 */
export declare class Component {
    private lineNumber;
    private parent;
    private name;
    private comment;
    private metaInformation;
    /**
     * Getter to obtain the parent of this component
     * @returns The parent of the component or null if no parent exists
     */
    getParent(): Component | null;
    /**
     * Getter to obtain teh component's name
     * @returns The name of the component
     */
    getName(): string;
    /**
     * Getter to obtain the @see{StructuredComment}
     * @returns The comment in a structured format or null if no comment exists
     */
    getComment(): StructuredComment | null;
    /**
     * Getter to obtain additional information about a component, at least whether the component is
     * considered to be public.
     * Can be used by programming languages to include language specific information
     * @returns the component meta information
     */
    getComponentMetaInformation(): ComponentMetaInformation;
    /**
     * Getter for the line number of the component, which is the first line the component appears,
     * e.g. line of class declaration
     * @returns The line number of the first line of the component
     */
    getLineNumber(): number;
    /**
     * Getter for the qualified name
     * @returns The name of the component and all of its parents separated by "."
     */
    getQualifiedName(): string;
    /**
     *
     * @returns the top parent component which should be the file the component is defined in
     */
    getTopParent(): Component;
    /**
     *
     * @param lineNumber Line number of the component
     * @param name  name of the component
     * @param parent the parent of the component if existent
     * @param comment The structured comment of this component
     * @param meta additional meta information about this comment(e.g. is it public or language specific)
     */
    constructor(lineNumber: number, name: string, parent: Component | null, comment: StructuredComment | null, meta: ComponentMetaInformation);
}
