"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseParser = void 0;
const fs_1 = __importDefault(require("fs"));
class BaseParser {
    /**
     * Parse the specified  parser using the parser of the derived class
     * @param filepath a path to a source code file
     * @returns an A object that represent the parse result
     */
    parse(filepath) {
        let input = fs_1.default.readFileSync(filepath).toString();
        return this.parseString(input, filepath);
    }
}
exports.BaseParser = BaseParser;
//# sourceMappingURL=base_parser.js.map