"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupedMemberComponent = void 0;
const single_member_component_1 = require("./single_member_component");
/**
 * This class defines fields that are declared in the same line.
 * e.g. "int a,b" in java
 */
class GroupedMemberComponent extends single_member_component_1.SingleMemberComponent {
    constructor() {
        super(...arguments);
        this.child_names = [];
    }
    getName() {
        return this.child_names.join(",");
    }
    addChildName(name) {
        this.child_names.push(name);
    }
    getChildNames() {
        return this.child_names;
    }
}
exports.GroupedMemberComponent = GroupedMemberComponent;
//# sourceMappingURL=grouped_member_component.js.map