"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassComponent = void 0;
const hierarchical_component_1 = require("./hierarchical_component");
/**
 * A component that represent a class
 */
class ClassComponent extends hierarchical_component_1.HierarchicalComponent {
    constructor(lineNumber, name, parent, comment, meta, superTypes) {
        super(lineNumber, name, parent, comment, meta);
        this.superTypes = superTypes;
    }
    /**
     * Getter for all super types of a component, Base classes and interfaces are not distinguished
     * @returns A list of all super types (base class and implemented interfaces)
     */
    getSuperTypes() {
        return this.superTypes;
    }
}
exports.ClassComponent = ClassComponent;
//# sourceMappingURL=class_component.js.map