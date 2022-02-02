"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogMessage = void 0;
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
class LogMessage {
    constructor(msg, component) {
        let p = chalk_1.default.green(path_1.default.relative(LogMessage.BasePath, component.getTopParent().getName()));
        let qualifiedName = chalk_1.default.yellow(component.getQualifiedName());
        let prefix = p + " " + qualifiedName + "(L. " + component.getLineNumber() + "): ";
        this.msg = prefix + msg;
    }
    /**
     * Log the message to the console
     */
    log() {
        console.log(this.msg);
    }
    /**
     *
     * @returns The string of the message
     */
    toString() {
        return this.msg;
    }
}
exports.LogMessage = LogMessage;
LogMessage.BasePath = ".";
//# sourceMappingURL=log_message.js.map