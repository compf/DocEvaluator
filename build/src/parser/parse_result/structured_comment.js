"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructuredCommentTag = exports.StructuredCommentTagKind = exports.StructuredComment = void 0;
/**
 * This class contains a structured comment as it is common in Javadoc and similar documentation systems
 */
class StructuredComment {
    constructor(generalDescription, tags) {
        this.tags = [];
        this.generalDescription = generalDescription;
        this.tags = tags;
    }
    /**
     * Getter for the general description, these are usually the first lines until the  lines begin with (usually) "@"
     * @returns the general description of the component
     */
    getGeneralDescription() {
        return this.generalDescription;
    }
    /**
     * Getter for the documentation tags
     * @returns All documentation tags of the component
     */
    getTags() {
        return this.tags;
    }
}
exports.StructuredComment = StructuredComment;
var StructuredCommentTagKind;
(function (StructuredCommentTagKind) {
    StructuredCommentTagKind["PARAM"] = "@param";
    StructuredCommentTagKind["RETURN"] = "@return";
    StructuredCommentTagKind["THROWS"] = "@throws";
})(StructuredCommentTagKind = exports.StructuredCommentTagKind || (exports.StructuredCommentTagKind = {}));
/**
 * This class contains a single tag of the documentation
 * a tag explain a specific element of the component in a more detailed way,
* for instance the parameters of a method
 */
class StructuredCommentTag {
    constructor(kind, param, description) {
        this.kind = kind;
        this.param = param;
        this.description = description;
    }
    /**
     * Getter for the tag kind
     * @returns The kind of the tag with prefix "@" You can find default tags for many programming languages at "StructuredCommentTagKind"
     */
    getKind() {
        return this.kind;
    }
    /**
     * Getter for the parameter of the tag, for instance the name of a method parameter
     * @returns the param of the tag if is exist, otherwise null
     */
    getParam() {
        return this.param;
    }
    /**
     * Getter for general description of the tag, it should contain the other text after tag kind and param
     * have been processed
     * @returns the general description of the tag
     */
    getDescription() {
        return this.description;
    }
}
exports.StructuredCommentTag = StructuredCommentTag;
//# sourceMappingURL=structured_comment.js.map