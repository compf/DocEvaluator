/**
 * This class contains a structured comment as it is common in Javadoc and similar documentation systems
 */
export class StructuredComment {
    private generalDescription: string;
    private tags: StructuredCommentTag[] = []
    private commentLineCount:number=0
    constructor(generalDescription: string, tags: StructuredCommentTag[],commentLineCount:number) {
        this.generalDescription = generalDescription;
        this.tags = tags;
        this.commentLineCount=commentLineCount;
    }
    /**
     * Getter for the general description, these are usually the first lines until the  lines begin with (usually) "@"
     * @returns the general description of the component
     */
    getGeneralDescription(): string  {
        return this.generalDescription;
    }
    /**
     * Getter for the documentation tags 
     * @returns All documentation tags of the component
     */
    getTags(): StructuredCommentTag[] {
        return this.tags;
    }
    /**
     * getter for the number of lines of this comment, including empty lines
     * @returns  the number of lines
     */
    getCommentLinesCount():number{
        return this.commentLineCount;
    }

}
/**
 * all block tags that have important meaning for tags
 * other block tags can be defined as a string
 */
export enum StructuredCommentTagKind {
    PARAM = "@param",
    RETURN = "@return",
    THROWS = "@throws"
}
/**
 * This class contains a single tag of the documentation
 * a tag explain a specific element of the component in a more detailed way,
* for instance the parameters of a method
 */
export class StructuredCommentTag {
    private kind: StructuredCommentTagKind | string;
    private param: string | null;
    private description: string | null;

    constructor(kind: StructuredCommentTagKind | string, param: string | null, description: string | null) {
        this.kind = kind;
        this.param = param;
        this.description = description;
    }
    /**
     * Getter for the tag kind
     * @returns The kind of the tag with prefix "@" You can find default tags for many programming languages at "StructuredCommentTagKind"
     */
    getKind(): StructuredCommentTagKind | string {
        return this.kind;
    }
    /**
     * Getter for the parameter of the tag, for instance the name of a method parameter
     * @returns the param of the tag if is exist, otherwise null
     */
    getParam(): string | null {
        return this.param;
    }
    /**
     * Getter for general description of the tag, it should contain the other text after tag kind and param 
     * have been processed
     * @returns the general description of the tag
     */
    getDescription(): string | null {
        return this.description;
    }

}
