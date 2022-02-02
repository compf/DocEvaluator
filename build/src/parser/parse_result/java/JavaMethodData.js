"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaMethodData = void 0;
const component_data_1 = require("../component_data");
/**
 * Special data about java methods
 */
class JavaMethodData extends component_data_1.DefaultComponentMetaInformation {
    constructor(isPublic, isOverriding, exceptionThrown) {
        super(isPublic);
        this.overriding = isOverriding;
        this.exceptionThrown = exceptionThrown;
    }
    /**
     * gets all thrown exceptions as string array
     * @returns all thrown exception
     */
    getThrownException() {
        return this.exceptionThrown;
    }
    /**
     * getter to check whether method is overriding
     * @returns true if the method is overriding
     */
    isOverriding() {
        return this.overriding;
    }
}
exports.JavaMethodData = JavaMethodData;
//# sourceMappingURL=JavaMethodData.js.map