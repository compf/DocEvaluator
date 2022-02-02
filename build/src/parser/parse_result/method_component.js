"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodComponent = void 0;
const single_member_component_1 = require("./single_member_component");
/**
 * A component that represent a method in an oop language
 */
class MethodComponent extends single_member_component_1.SingleMemberComponent {
    constructor(lineNumber, name, type, parent, comment, meta, params, methodBody) {
        super(lineNumber, name, type, parent, comment, meta);
        this.methodBody = "";
        this.params = params;
        this.methodBody = methodBody;
    }
    /**
     * Getter for the method parameters. A parameter is a simply a pair of name and type both as string
     * @returns A list of all params
     */
    getParams() {
        return this.params;
    }
    getMethodBody() {
        return this.methodBody;
    }
    getLinesOfCode(ignoreLines) {
        return this.getMethodBody().split("\n").filter((s) => !ignoreLines.includes(s.trim())).length;
    }
}
exports.MethodComponent = MethodComponent;
//# sourceMappingURL=method_component.js.map