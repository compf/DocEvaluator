"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleMemberComponent = void 0;
const component_1 = require("./component");
/**
 * A member that has no children and returns something, for instance a field or method
 */
class SingleMemberComponent extends component_1.Component {
    constructor(lineNumber, name, type, parent, comment, meta) {
        super(lineNumber, name, parent, comment, meta);
        this.returnType = type;
    }
    getReturnType() {
        return this.returnType;
    }
}
exports.SingleMemberComponent = SingleMemberComponent;
//# sourceMappingURL=single_member_component.js.map