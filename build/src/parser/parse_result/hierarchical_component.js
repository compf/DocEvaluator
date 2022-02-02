"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HierarchicalComponent = void 0;
const component_1 = require("./component");
/**
 * A component that consists of other components, e.g. a class
 */
class HierarchicalComponent extends component_1.Component {
    constructor(lineNumber, name, parent, comment, meta) {
        super(lineNumber, name, parent, comment, meta);
        this.children = [];
    }
    addChild(child) {
        this.children.push(child);
    }
    getChildren() {
        return this.children;
    }
}
exports.HierarchicalComponent = HierarchicalComponent;
//# sourceMappingURL=hierarchical_component.js.map