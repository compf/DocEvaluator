"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParserFactory = void 0;
const java_parser_1 = require("./java_parser");
var ParserFactory;
(function (ParserFactory) {
    function createParser(parserName) {
        switch (parserName.toLowerCase()) {
            case "java":
                return new java_parser_1.JavaParser();
            default:
                throw new Error("Could not find parser " + parserName);
        }
    }
    ParserFactory.createParser = createParser;
})(ParserFactory = exports.ParserFactory || (exports.ParserFactory = {}));
//# sourceMappingURL=parser_factory.js.map