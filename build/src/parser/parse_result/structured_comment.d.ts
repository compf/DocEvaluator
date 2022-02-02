/**
 * This class contains a structured comment as it is common in Javadoc and similar documentation systems
 */
export declare class StructuredComment {
    private generalDescription;
    private tags;
    constructor(generalDescription: string, tags: StructuredCommentTag[]);
    /**
     * Getter for the general description, these are usually the first lines until the  lines begin with (usually) "@"
     * @returns the general description of the component
     */
    getGeneralDescription(): string | null;
    /**
     * Getter for the documentation tags
     * @returns All documentation tags of the component
     */
    getTags(): StructuredCommentTag[];
}
export declare enum StructuredCommentTagKind {
    PARAM = "@param",
    RETURN = "@return",
    THROWS = "@throws"
}
/**
 * This class contains a single tag of the documentation
 * a tag explain a specific element of the component in a more detailed way,
* for instance the parameters of a method
 */
export declare class StructuredCommentTag {
    private kind;
    private param;
    private description;
    constructor(kind: StructuredCommentTagKind | string, param: string | null, description: string | null);
    /**
     * Getter for the tag kind
     * @returns The kind of the tag with prefix "@" You can find default tags for many programming languages at "StructuredCommentTagKind"
     */
    getKind(): StructuredCommentTagKind | string;
    /**
     * Getter for the parameter of the tag, for instance the name of a method parameter
     * @returns the param of the tag if is exist, otherwise null
     */
    getParam(): string | null;
    /**
     * Getter for general description of the tag, it should contain the other text after tag kind and param
     * have been processed
     * @returns the general description of the tag
     */
    getDescription(): string | null;
}
