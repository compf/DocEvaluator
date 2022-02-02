"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavadocParser = exports.JavaParser = void 0;
const base_parser_1 = require("./base_parser");
var JavaLexer = require("./antlr_files/java/JavaLexer").JavaLexer;
const antlr4ts_1 = require("antlr4ts");
const JavaParser_1 = require("./antlr_files/java/JavaParser");
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const structured_comment_1 = require("./parse_result/structured_comment");
const single_member_component_1 = require("./parse_result/single_member_component");
const method_component_1 = require("./parse_result/method_component");
const class_component_1 = require("./parse_result/class_component");
const component_data_1 = require("./parse_result/component_data");
const JavaMethodData_1 = require("./parse_result/java/JavaMethodData");
const grouped_member_component_1 = require("./parse_result/grouped_member_component");
const Interval_1 = require("antlr4ts/misc/Interval");
const file_component_1 = require("./parse_result/file_component");
class JavaParser extends base_parser_1.BaseParser {
    /**
    * Reads all tokens from the source code file
    * @param content a string that contains valid source code
    * @returns a CommonTokenStream that contains all read tokens
    */
    getTokens(content) {
        let inputStream = antlr4ts_1.CharStreams.fromString(content);
        let lexer = new JavaLexer(inputStream);
        let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        tokenStream.fill();
        return tokenStream;
    }
    parseString(content, filepath) {
        let tokens = this.getTokens(content);
        tokens.fill();
        let parser = new JavaParser_1.JavaParser(tokens);
        //parser.removeErrorListener(ConsoleErrorListener.INSTANCE)
        let visitor = new FileVisitor(filepath !== null && filepath !== void 0 ? filepath : "");
        let rel = parser.compilationUnit();
        var res = visitor.visit(rel);
        return res;
    }
}
exports.JavaParser = JavaParser;
class FieldDecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor(parent, comment, meta) {
        super();
        this.type = "";
        this.field = null;
        this.parent = parent;
        this.comment = comment;
        this.meta = meta;
    }
    defaultResult() {
        return null;
    }
    visitTypeType(ctx) {
        this.type = ctx.text;
        return null;
    }
    visit(ctx) {
        super.visit(ctx);
        return this.field;
    }
    visitVariableDeclarators(ctx) {
        if (ctx.children != undefined) {
            let lineNumber = ctx.start.line;
            if (ctx.children.length == 1) {
                let name = ctx.getChild(0).getChild(0).text;
                this.field = new single_member_component_1.SingleMemberComponent(lineNumber, name, this.type, this.parent, this.comment, this.meta);
            }
            else {
                //TODO find better solution in case of fields with comma separated names
                let names = ctx.children.filter((c) => c.childCount > 0).map((c) => c.getChild(0).text);
                let groupedField = new grouped_member_component_1.GroupedMemberComponent(lineNumber, /*will be ignored*/ "", this.type, this.parent, this.comment, this.meta);
                this.field = groupedField;
                for (let n of names) {
                    groupedField.addChildName(n);
                }
            }
        }
        return null;
    }
}
function addSuperTypes(superTypes, ctx) {
    let splitted = ctx.getChild(1).text.split(",");
    for (let s of splitted) {
        superTypes.push(s);
    }
}
class ClassExtendAndImplementVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor() {
        super(...arguments);
        this.superTypes = [];
    }
    defaultResult() {
        return [];
    }
    visitImplementInterfaces(ctx) {
        addSuperTypes(this.superTypes, ctx);
    }
    visitExtendClass(ctx) {
        this.superTypes.push(ctx.getChild(1).text);
    }
    visit(ctx) {
        super.visit(ctx);
        return this.superTypes;
    }
}
class InterfaceExtendVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor() {
        super(...arguments);
        this.superTypes = [];
    }
    defaultResult() {
        return [];
    }
    visitExtendInterface(ctx) {
        addSuperTypes(this.superTypes, ctx);
    }
    visit(ctx) {
        super.visit(ctx);
        return this.superTypes;
    }
}
class ClassDecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor(parent, comment, isPublic) {
        super();
        this.className = "";
        this.isPublic = false;
        this.parent = parent;
        this.comment = comment;
        this.isPublic = isPublic;
    }
    defaultResult() {
        return null;
    }
    visitClassDeclaration(ctx) {
        this.className = ctx.getChild(1).text;
        let blck = ctx.classBody().classBodyDeclaration();
        let superTypes = new ClassExtendAndImplementVisitor().visit(ctx);
        let lineNumber = ctx.start.line;
        let clsComponent = new class_component_1.ClassComponent(lineNumber, this.className, this.parent, this.comment, new component_data_1.DefaultComponentMetaInformation(this.isPublic), superTypes);
        this.visitClassOrInterfaceMembers(blck, clsComponent);
        return clsComponent;
    }
    visitClassOrInterfaceMembers(blck, clsComponent) {
        if (blck == undefined)
            return null;
        for (var child of blck) {
            let visitor = new CommentComponentPairVisitor(clsComponent);
            var item = visitor.visit(child);
            if (item != null) {
                clsComponent === null || clsComponent === void 0 ? void 0 : clsComponent.addChild(item);
            }
        }
    }
    //TODO reduce duplication if possible
    visitInterfaceDeclaration(ctx) {
        this.className = ctx.getChild(1).text;
        let blck = ctx.interfaceBody().interfaceBodyDeclaration();
        let superTypes = new InterfaceExtendVisitor().visit(ctx);
        let lineNumber = ctx.start.line;
        let clsComponent = new class_component_1.ClassComponent(lineNumber, this.className, this.parent, this.comment, new component_data_1.DefaultComponentMetaInformation(this.isPublic), superTypes);
        this.visitClassOrInterfaceMembers(blck, clsComponent);
        return clsComponent;
    }
}
class FileVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor(path) {
        super();
        this.filepath = path;
        this.parent = new file_component_1.FileComponent(0, this.filepath, null, null, new component_data_1.DefaultComponentMetaInformation(true));
    }
    defaultResult() {
        return null;
    }
    visitTypeDeclaration(ctx) {
        let visitor = new CommentComponentPairVisitor(this.parent);
        let result = visitor.visit(ctx);
        if (result != null) {
            this.parent.addChild(result);
        }
        return this.parent;
    }
    visit(ctx) {
        super.visit(ctx);
        return this.parent;
    }
}
class JavadocParser {
    getElementOrDefault(array, index) {
        if (index < array.length) {
            return array[index];
        }
        else
            return null;
    }
    splitWithRemainder(str, delim, max) {
        let splitted = str.split(delim).filter((c) => c != "");
        let result = [];
        let last = "";
        for (let i = 0; i < splitted.length; i++) {
            if (i < max - 1) {
                result.push(splitted[i]);
            }
            else {
                last += splitted[i] + " ";
            }
        }
        result.push(last.trim());
        return result;
    }
    parseTag(line) {
        let splitted = [];
        if (this.hasParam(line)) {
            splitted = this.splitWithRemainder(line, /\s/, 3);
            let tag = this.getElementOrDefault(splitted, 0);
            let param = this.getElementOrDefault(splitted, 1);
            let descr = this.getElementOrDefault(splitted, 2);
            return new structured_comment_1.StructuredCommentTag(tag, param, descr);
        }
        else {
            splitted = this.splitWithRemainder(line, /\s/, 2);
            let tag = this.getElementOrDefault(splitted, 0);
            let descr = this.getElementOrDefault(splitted, 1);
            return new structured_comment_1.StructuredCommentTag(tag, null, descr);
        }
    }
    hasParam(line) {
        let tagsWithParams = ["@param", "@throws"];
        return tagsWithParams.some((t) => line.startsWith(t));
    }
    startsWithTag(line) {
        return line.startsWith("@");
    }
    parseCommentText(text) {
        var _a;
        let lines = text.split("\n");
        let toReplace = ["/**", "*/", "*"];
        for (let i = 0; i < lines.length; i++) {
            for (let replace of toReplace) {
                lines[i] = lines[i].trim();
                if (lines[i].startsWith(replace)) {
                    lines[i] = lines[i].substring(replace.length);
                    lines[i] = lines[i].trim();
                }
            }
        }
        let descriptionLines = [];
        let tags = [];
        let foundTag = false;
        for (let line of lines) {
            if (this.startsWithTag(line)) {
                let tag = this.parseTag(line);
                tags.push(tag);
                foundTag = true;
            }
            else if (line != "" && foundTag) {
                let oldTag = tags[tags.length - 1];
                tags[tags.length - 1] = new structured_comment_1.StructuredCommentTag(oldTag.getKind(), oldTag.getParam(), ((_a = oldTag.getDescription()) !== null && _a !== void 0 ? _a : "") + "\n" + line);
            }
            else if (line != "") {
                descriptionLines.push(line);
            }
        }
        return new structured_comment_1.StructuredComment(descriptionLines.join("\n"), tags);
    }
}
exports.JavadocParser = JavadocParser;
class CommentComponentPairVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor(parent) {
        super();
        this.modifierVisitor = new ModifierVisitor();
        this.parent = null;
        this.comment = null;
        this.modifier = { accessibilty: Accessibility.Private, isOverride: false, isStatic: false };
        this.parent = parent;
    }
    defaultResult() {
        return null;
    }
    visitClassOrInterfaceModifier(ctx) {
        this.modifier = this.modifierVisitor.visitClassOrInterfaceModifier(ctx);
        return null;
    }
    visitMethodDeclaration(ctx) {
        var _a;
        let visitor = new MethodVisitor(this.parent, this.comment, ((_a = this.modifier) === null || _a === void 0 ? void 0 : _a.accessibilty) == Accessibility.Public, this.modifier.isOverride);
        return visitor.visit(ctx);
    }
    visitInterfaceMethodDeclaration(ctx) {
        var _a;
        let visitor = new MethodVisitor(this.parent, this.comment, ((_a = this.modifier) === null || _a === void 0 ? void 0 : _a.accessibilty) == Accessibility.Public, this.modifier.isOverride);
        return visitor.visit(ctx);
    }
    visitConstructorDeclaration(ctx) {
        var _a;
        let visitor = new MethodVisitor(this.parent, this.comment, ((_a = this.modifier) === null || _a === void 0 ? void 0 : _a.accessibilty) == Accessibility.Public, this.modifier.isOverride);
        return visitor.visit(ctx);
    }
    visitClassDeclaration(ctx) {
        let visitor = new ClassDecVisitor(this.parent, this.comment, (this.modifier.accessibilty == Accessibility.Public));
        return visitor.visit(ctx);
    }
    visitInterfaceDeclaration(ctx) {
        // We are treating classes and interfaces to be equivalent, this is a compromise to have good compatibility with 
        // other oop languages
        let visitor = new ClassDecVisitor(this.parent, this.comment, (this.modifier.accessibilty == Accessibility.Public));
        return visitor.visit(ctx);
    }
    visitComment(ctx) {
        let commentText = ctx.text;
        let parser = new JavadocParser();
        this.comment = parser.parseCommentText(commentText);
        return null;
    }
    visitFieldDeclaration(ctx) {
        let visitor = new FieldDecVisitor(this.parent, this.comment, new component_data_1.DefaultComponentMetaInformation(this.modifier.accessibilty == Accessibility.Public));
        return visitor.visit(ctx);
    }
}
class MethodParamsAndThrowVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor() {
        super(...arguments);
        this.thrownException = [];
        this.params = [];
    }
    defaultResult() {
        return { params: [], thrownException: [] };
    }
    visitThrowList(ctx) {
        this.thrownException = ctx.getChild(1).text.split(",");
    }
    visitFormalParameter(ctx) {
        let name = ctx.variableDeclaratorId().text;
        let type = ctx.typeType().text;
        this.params.push({ type, name });
    }
    visitLastFormalParameter(ctx) {
        let name = ctx.variableDeclaratorId().text;
        let type = ctx.typeType().text;
        // TODO error handling in case of varags in java, might lead to bugs so better solution should be looked for
        if (ctx.childCount == 3 && ctx.getChild(1).text == "...") {
            type += "[]";
        }
        this.params.push({ type, name });
    }
    visit(ctx) {
        super.visit(ctx);
        return { thrownException: this.thrownException, params: this.params };
    }
}
var Accessibility;
(function (Accessibility) {
    Accessibility[Accessibility["Public"] = 0] = "Public";
    Accessibility[Accessibility["Protected"] = 1] = "Protected";
    Accessibility[Accessibility["Private"] = 2] = "Private";
})(Accessibility || (Accessibility = {}));
class MethodBodyTextVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return "";
    }
    visitBlock(ctx) {
        var _a, _b, _c;
        return (_a = ctx.start.inputStream) === null || _a === void 0 ? void 0 : _a.getText(Interval_1.Interval.of(ctx.start.startIndex, (_c = (_b = ctx.stop) === null || _b === void 0 ? void 0 : _b.stopIndex) !== null && _c !== void 0 ? _c : 0));
    }
}
class MethodVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor(parent, comment, isPublic, isOverriding) {
        super();
        this.modifierVisitor = new ModifierVisitor();
        this.lineNumber = 0;
        this.comment = null;
        this.methodName = "";
        this.returnType = "";
        this.methodParams = [];
        this.thrownException = [];
        this.methodBody = "";
        this.parent = parent;
        this.comment = comment;
        this.isPublic = isPublic;
        this.isOverriding = isOverriding;
    }
    defaultResult() {
        // do nothing
    }
    visitMethodDeclaration(ctx) {
        this.lineNumber = ctx.start.line;
        this.visitMethod(ctx);
    }
    visitInterfaceMethodDeclaration(ctx) {
        this.lineNumber = ctx.start.line;
        this.visitMethod(ctx);
    }
    visitConstructorDeclaration(ctx) {
        this.lineNumber = ctx.start.line;
        this.returnType = "void";
        this.methodName = "constructor";
        let visitor = new MethodParamsAndThrowVisitor();
        let paramsThrow = visitor.visit(ctx);
        this.methodParams = paramsThrow.params;
        this.thrownException = paramsThrow.thrownException;
        this.methodBody = new MethodBodyTextVisitor().visit(ctx);
    }
    visitMethod(ctx) {
        this.returnType = ctx.getChild(0).text;
        this.methodName = ctx.getChild(1).text;
        let visitor = new MethodParamsAndThrowVisitor();
        let paramsThrow = visitor.visit(ctx);
        this.methodParams = paramsThrow.params;
        this.thrownException = paramsThrow.thrownException;
        this.methodBody = new MethodBodyTextVisitor().visit(ctx);
    }
    visit(ctx) {
        super.visit(ctx);
        return new method_component_1.MethodComponent(this.lineNumber, this.methodName, this.returnType, this.parent, this.comment, new JavaMethodData_1.JavaMethodData(this.isPublic, this.isOverriding, this.thrownException), this.methodParams, this.methodBody);
    }
}
class ModifierVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor() {
        super(...arguments);
        this.result = this.defaultResult();
    }
    defaultResult() {
        return { accessibilty: Accessibility.Private, isStatic: false, isOverride: false };
    }
    visitClassOrInterfaceModifier(mod) {
        if (mod.children == undefined) {
            return this.defaultResult();
        }
        for (let child of mod.children) {
            switch (child.text.toLowerCase()) {
                case "public":
                    this.result.accessibilty = Accessibility.Public;
                    break;
                case "private":
                    this.result.accessibilty = Accessibility.Private;
                    break;
                case "protected":
                    this.result.accessibilty = Accessibility.Protected;
                    break;
                case "static":
                    this.result.isStatic = true;
                    break;
                case "@override":
                    this.result.isOverride = true;
                    break;
            }
        }
        return this.result;
    }
}
//# sourceMappingURL=java_parser.js.map