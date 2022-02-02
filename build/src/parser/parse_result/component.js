"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
/**
 * A component could be a class, a method, a field or anything else that is part of the general structure of a program
 */
class Component {
    /**
     *
     * @param lineNumber Line number of the component
     * @param name  name of the component
     * @param parent the parent of the component if existent
     * @param comment The structured comment of this component
     * @param meta additional meta information about this comment(e.g. is it public or language specific)
     */
    constructor(lineNumber, name, parent, comment, meta) {
        this.name = name;
        this.comment = comment;
        this.parent = parent;
        this.metaInformation = meta;
        this.lineNumber = lineNumber;
    }
    /**
     * Getter to obtain the parent of this component
     * @returns The parent of the component or null if no parent exists
     */
    getParent() {
        return this.parent;
    }
    /**
     * Getter to obtain teh component's name
     * @returns The name of the component
     */
    getName() {
        return this.name;
    }
    /**
     * Getter to obtain the @see{StructuredComment}
     * @returns The comment in a structured format or null if no comment exists
     */
    getComment() {
        return this.comment;
    }
    /**
     * Getter to obtain additional information about a component, at least whether the component is
     * considered to be public.
     * Can be used by programming languages to include language specific information
     * @returns the component meta information
     */
    getComponentMetaInformation() {
        return this.metaInformation;
    }
    /**
     * Getter for the line number of the component, which is the first line the component appears,
     * e.g. line of class declaration
     * @returns The line number of the first line of the component
     */
    getLineNumber() {
        return this.lineNumber;
    }
    /**
     * Getter for the qualified name
     * @returns The name of the component and all of its parents separated by "."
     */
    getQualifiedName() {
        let names = [];
        let curr = this;
        while (curr != null && curr.getParent() != null) {
            names.unshift(curr.getName());
            curr = curr.getParent();
        }
        return names.join(".");
    }
    /**
     *
     * @returns the top parent component which should be the file the component is defined in
     */
    getTopParent() {
        let curr = this;
        while (curr.getParent() != null) {
            curr = curr.getParent();
        }
        return curr;
    }
}
exports.Component = Component;
//# sourceMappingURL=component.js.map