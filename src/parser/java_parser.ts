import { BaseParser } from "./base_parser";
var JavaLexer = require("./antlr_files/java/JavaLexer").JavaLexer;
import { CharStreams, CommonTokenStream, ParserRuleContext, RuleContext } from 'antlr4ts';
import { JavaParserVisitor } from "./antlr_files/java/JavaParserVisitor";
import { Component } from "./parse_result/component";
import { CommentContext, JavaParser as Antlr_JavaParser, TypeDeclarationContext, ClassDeclarationContext, MethodDeclarationContext, FieldDeclarationContext, ClassOrInterfaceModifierContext, TypeTypeContext, VariableDeclaratorsContext, ThrowListContext, ImplementInterfacesContext, ExtendClassContext, InterfaceDeclarationContext, ExtendInterfaceContext, InterfaceMethodDeclarationContext, ConstructorDeclarationContext, FormalParameterContext, LastFormalParameterContext, MethodBodyContext, BlockContext } from "./antlr_files/java/JavaParser";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { StructuredComment, StructuredCommentTag } from "./parse_result/structured_comment";
import { HierarchicalComponent } from "./parse_result/hierarchical_component";
import { SingleMemberComponent } from "./parse_result/single_member_component";
import { MethodComponent } from "./parse_result/method_component";
import { ClassComponent } from "./parse_result/class_component";
import { ComponentMetaInformation, DefaultComponentMetaInformation } from "./parse_result/component_data";
import { JavaMethodData } from "./parse_result/java/JavaMethodData";
import { GroupedMemberComponent } from "./parse_result/grouped_member_component";
import { Interval } from "antlr4ts/misc/Interval";
import { FileComponent } from "./parse_result/file_component";

export class JavaParser extends BaseParser {
    /**
    * Reads all tokens from the source code file
    * @param content a string that contains valid source code
    * @returns a CommonTokenStream that contains all read tokens
    */
    public getTokens<T>(content: string): CommonTokenStream {

        let inputStream = CharStreams.fromString(content);
        let lexer = new JavaLexer(inputStream)
        let tokenStream = new CommonTokenStream(lexer as any)
        tokenStream.fill();
        return tokenStream;
    }
    override parseString(content: string, filepath: string | null): HierarchicalComponent {
        let tokens = this.getTokens(content);
        tokens.fill()
        let parser = new Antlr_JavaParser(tokens);
        let visitor = new FileVisitor(filepath ?? "");
        let rel = parser.compilationUnit()
        var res = visitor.visit(rel) as FileComponent;
        return res;
    }

}
/**
 * visit field declarations like fields
 */
class FieldDecVisitor extends AbstractParseTreeVisitor<Component | null> implements JavaParserVisitor<Component | null>{

    protected defaultResult(): Component | null {
        return null;
    }
    private type = "";
    private parent: Component | null;
    private comment: StructuredComment | null;
    private meta: ComponentMetaInformation;
    private field: Component | null = null;
    /**
     * visits the type of a field
     * @param ctx 
     * @returns 
     */
    visitTypeType(ctx: TypeTypeContext) {
        this.type = ctx.text;
        return null;
    }
    visit(ctx: RuleContext) {
        super.visit(ctx);
        return this.field;
    }
    /**
     * visit a field, 
     * returns a grouped component if the field is a grouped field (for example  "private int a, b")
     * 
     * @param ctx 
     * @returns 
     */
    visitVariableDeclarators(ctx: VariableDeclaratorsContext) {
        if (ctx.children != undefined) {
            let lineNumber = ctx.start.line;
            if (ctx.children.length == 1) {
                let name = ctx.getChild(0).getChild(0).text;

                this.field = new SingleMemberComponent(lineNumber, name, this.type, this.parent, this.comment, this.meta)
            }
            else {
                //TODO find better solution in case of fields with comma separated names
                let names = ctx.children.filter((c) => c.childCount > 0).map((c) => c.getChild(0).text);
                let groupedField = new GroupedMemberComponent(lineNumber, /*will be ignored*/"", this.type, this.parent, this.comment, this.meta);
                this.field = groupedField;
                for (let n of names) {

                    groupedField.addChildName(n)
                }
            }
        }
        return null;

    }



    constructor(parent: Component | null, comment: StructuredComment | null, meta: ComponentMetaInformation) {
        super();
        this.parent = parent;
        this.comment = comment;
        this.meta = meta;
    }
}
function addSuperTypes(superTypes: string[], ctx: ParserRuleContext) {
    let splitted = ctx.getChild(1).text.split(",");
    for (let s of splitted) {
        superTypes.push(s);
    }
}
/**
 * visits the all extends asn implements statement so that all classes and interface from which this class
 * inherits can be stored
 */
class ClassExtendAndImplementVisitor extends AbstractParseTreeVisitor<string[]>{
    protected defaultResult(): string[] {
        return []
    }
    visitImplementInterfaces(ctx: ImplementInterfacesContext) {
        addSuperTypes(this.superTypes, ctx);
    }
    visitExtendClass(ctx: ExtendClassContext) {
        this.superTypes.push(ctx.getChild(1).text);
    }
    private superTypes: string[] = [];

    visit(ctx: RuleContext) {
        super.visit(ctx);
        return this.superTypes;
    }
}
class InterfaceExtendVisitor extends AbstractParseTreeVisitor<string[]>{
    protected defaultResult(): string[] {
        return []
    }
    visitExtendInterface(ctx: ExtendInterfaceContext) {
        addSuperTypes(this.superTypes, ctx);
    }
    private superTypes: string[] = [];

    visit(ctx: RuleContext) {
        super.visit(ctx);
        return this.superTypes;
    }
}

class ClassDecVisitor extends AbstractParseTreeVisitor<Component | null> implements JavaParserVisitor<Component | null>{
    protected defaultResult(): Component | null {
        return null;
    }
    private className: string = "";
    private parent: Component | null;
    private isPublic: boolean = false;
    private comment: StructuredComment | null;
    visitClassDeclaration(ctx: ClassDeclarationContext) {
        this.className = ctx.getChild(1).text;
        let blck = ctx.classBody().classBodyDeclaration();
        let superTypes = new ClassExtendAndImplementVisitor().visit(ctx);
        let lineNumber = ctx.start.line;
        let clsComponent = new ClassComponent(lineNumber, this.className, this.parent, this.comment, new DefaultComponentMetaInformation(this.isPublic), superTypes);

        this.visitClassOrInterfaceMembers(blck, clsComponent);

        return clsComponent;

    }
    visitClassOrInterfaceMembers(blck: RuleContext[], clsComponent: ClassComponent) {

        if (blck == undefined) return null;
        for (var child of blck) {
            let visitor = new CommentComponentPairVisitor(clsComponent);
            var item = visitor.visit(child);
            if (item != null) {
                clsComponent?.addChild(item);

            }
        }
    }
    //TODO reduce duplication if possible
    visitInterfaceDeclaration(ctx: InterfaceDeclarationContext) {
        this.className = ctx.getChild(1).text;
        let blck = ctx.interfaceBody().interfaceBodyDeclaration();
        let superTypes = new InterfaceExtendVisitor().visit(ctx);
        let lineNumber = ctx.start.line;
        let clsComponent = new ClassComponent(lineNumber, this.className, this.parent, this.comment, new DefaultComponentMetaInformation(this.isPublic), superTypes);

        this.visitClassOrInterfaceMembers(blck, clsComponent);

        return clsComponent;
    }
    constructor(parent: Component | null, comment: StructuredComment | null, isPublic: boolean) {
        super();
        this.parent = parent;
        this.comment = comment;
        this.isPublic = isPublic;
    }


}
class FileVisitor extends AbstractParseTreeVisitor<Component | null> implements JavaParserVisitor<Component | null>{
    protected defaultResult(): null | Component {
        return null;
    }
    constructor(path: string) {
        super();
        this.filepath = path;
        this.parent = new FileComponent(0, this.filepath, null, null, new DefaultComponentMetaInformation(true));
    }
    private filepath: string;
    private parent: HierarchicalComponent;
    visitTypeDeclaration(ctx: TypeDeclarationContext) {

        let visitor = new CommentComponentPairVisitor(this.parent);
        let result = visitor.visit(ctx);
        if (result != null) {
            this.parent.addChild(result);
        }


        return this.parent;
    }
    visit(ctx: RuleContext) {
        super.visit(ctx);
        return this.parent;
    }
}
export class JavadocParser {
    private getElementOrDefault<T>(array: T[], index: number): T | null {
        if (index < array.length) {
            return array[index];
        }
        else return null;
    }
    /**
     * splits the string {@link max} times,
     * if the delimeter occurs more often than {@link max}, it will split the first {@link max} occurences
     * after that the remaining string appended at the last array element that will be returned
     * @param str the string to split
     * @param delim the delimeter that will be used to split
     * @param max determines how often the text should be splitted
     * @returns a strign array with the splitted text, the last array element will include the remaining text seperated by white spaces
     */
    private splitWithRemainder(str: string, delim: RegExp, max: number) {
        let splitted = str.split(delim).filter((c) => c != "");
        let result = []
        let last = []
        for (let i = 0; i < splitted.length; i++) {
            if (i < max - 1) {
                result.push(splitted[i])
            }
            else {
                last.push(splitted[i]);
            }
        }
        result.push(last.join(" "));
        return result;
    }
    /**
     * parses all important infromation from a line to extract the tag information
     * @param line the line to analyze
     * @returns an instance of a {@link StructuredCommentTag}
     */
    parseTag(line: string): StructuredCommentTag {
        let splitted: string[] = []
        // Tag is of form @tag param description
        if (this.hasParam(line)) {
            splitted = this.splitWithRemainder(line, /\s/, 3);

            let tag = this.getElementOrDefault(splitted, 0)!!
            let param = this.getElementOrDefault(splitted, 1)
            let descr = this.getElementOrDefault(splitted, 2)
            return new StructuredCommentTag(tag, param, descr);
        }
        // Tag is of from @tag description
        else {
            splitted = this.splitWithRemainder(line, /\s/, 2);
            let tag = this.getElementOrDefault(splitted, 0)!!
            let descr = this.getElementOrDefault(splitted, 1)
            return new StructuredCommentTag(tag, null, descr);
        }

    }
    hasParam(line: string): boolean {
        let tagsWithParams = ["@param", "@throws","@exception"];
        return tagsWithParams.some((t) => line.startsWith(t));
    }
    startsWithTag(line: string): boolean {
        return line.startsWith("@")
    }
    /**
     * parse the comment text by finding all tags of the general description
     * @param text the text to analyze
     * @returns a StructuredComment instance
     */
    parseCommentText(text: string): StructuredComment {
        let lines = text.split("\n");
        let originalLineLength=lines.length;
        let toReplace = ["/**", "*/", "*"]
        for (let i = 0; i < lines.length; i++) {
            for (let replace of toReplace) {
                lines[i] = lines[i].trim();
                if (lines[i].startsWith(replace)) {
                    lines[i] = lines[i].substring(replace.length);
                    lines[i] = lines[i].trim();
                }
            }
        }
        let descriptionLines: string[] = [];
        let tags: StructuredCommentTag[] = []
        let foundTag = false;
        for (let line of lines) {
            if (this.startsWithTag(line)) {
                let tag = this.parseTag(line);

                tags.push(tag);
                foundTag = true;
            }
            else if (line != "" && foundTag) {
                let oldTag = tags[tags.length - 1];
                tags[tags.length - 1] = new StructuredCommentTag(oldTag.getKind(), oldTag.getParam(), (oldTag.getDescription() ?? "") + "\n" + line)
            }
            else if (line != "") {
                descriptionLines.push(line)
            }
        }
        return new StructuredComment(descriptionLines.join("\n"), tags,originalLineLength);
    }
}
/**
 * Visits a component and the associated comments
 */
class CommentComponentPairVisitor extends AbstractParseTreeVisitor<Component | null> implements JavaParserVisitor<Component | null>{
    protected defaultResult(): null | Component {
        return null;
    }
    private modifierVisitor = new ModifierVisitor();
    parent: Component | null = null;
    comment: StructuredComment | null = null;
    modifier: ModifiererInformation = { accessibilty: Accessibility.Private, isOverride: false, isStatic: false }
    constructor(parent: Component | null) {
        super();
        this.parent = parent;
    }

    visitClassOrInterfaceModifier(ctx: ClassOrInterfaceModifierContext) {
        this.modifier = this.modifierVisitor.visitClassOrInterfaceModifier(ctx);
        return null;
    }
    visitMethodDeclaration(ctx: MethodDeclarationContext) {
        let visitor = new MethodVisitor(this.parent, this.comment, this.modifier?.accessibilty == Accessibility.Public, this.modifier.isOverride);
        return visitor.visit(ctx);

    }
    visitInterfaceMethodDeclaration(ctx: InterfaceMethodDeclarationContext) {
        let visitor = new MethodVisitor(this.parent, this.comment, this.modifier?.accessibilty == Accessibility.Public, this.modifier.isOverride);
        return visitor.visit(ctx);

    }
    visitConstructorDeclaration(ctx: ConstructorDeclarationContext) {
        let visitor = new MethodVisitor(this.parent, this.comment, this.modifier?.accessibilty == Accessibility.Public, this.modifier.isOverride);
        return visitor.visit(ctx);
    }
    visitClassDeclaration(ctx: ClassDeclarationContext) {
        let visitor = new ClassDecVisitor(this.parent, this.comment, (this.modifier.accessibilty == Accessibility.Public));
        return visitor.visit(ctx);
    }
    visitInterfaceDeclaration(ctx: InterfaceDeclarationContext) {
        // We are treating classes and interfaces to be equivalent, this is a compromise to have good compatibility with 
        // other oop languages
        let visitor = new ClassDecVisitor(this.parent, this.comment, (this.modifier.accessibilty == Accessibility.Public));
        return visitor.visit(ctx);
    }
    /**
     * visit a comment so that it will be associated with the current component
     * if there a multiple (Javadoc) comments the last will the final one
     * @param ctx 
     * @returns 
     */
    visitComment(ctx: CommentContext): null {
        let commentText = ctx.text;
        let parser = new JavadocParser();
        this.comment = parser.parseCommentText(commentText);
        return null;
    }
    visitFieldDeclaration(ctx: FieldDeclarationContext) {
        let visitor = new FieldDecVisitor(this.parent, this.comment, new DefaultComponentMetaInformation(this.modifier.accessibilty == Accessibility.Public));
        return visitor.visit(ctx);
    }


}

type ParamsAndThrow = { params: { type: string, name: string }[], thrownException: string[] }
/**
 * Visits the parameter and the thrown exception of a method
 */
class MethodParamsAndThrowVisitor extends AbstractParseTreeVisitor<ParamsAndThrow>{
    protected defaultResult(): ParamsAndThrow {
        return { params: [], thrownException: [] }
    }
    private thrownException: string[] = [];
    private params: { type: string, name: string }[] = [];
    visitThrowList(ctx: ThrowListContext) {
        this.thrownException = ctx.getChild(1).text.split(",");
    }
    visitFormalParameter(ctx: FormalParameterContext) {

        let name = ctx.variableDeclaratorId().text;
        let type = ctx.typeType().text;
        this.params.push({ type, name });
    }
    visitLastFormalParameter(ctx: LastFormalParameterContext) {

        let name = ctx.variableDeclaratorId().text;
        let type = ctx.typeType().text;
        // TODO error handling in case of varags in java, might lead to bugs so better solution should be looked for
        if (ctx.childCount == 3 && ctx.getChild(1).text == "...") {
            type += "[]";
        }
        this.params.push({ type, name });
    }
    visit(ctx: RuleContext) {
        super.visit(ctx);
        return { thrownException: this.thrownException, params: this.params }
    }

}
enum Accessibility {
    Public, Protected, Private
}
type ModifiererInformation = { accessibilty: Accessibility, isStatic: boolean, isOverride: boolean }
/**
 * visits the methody body and returns the whole text of the method body without parsing further structures
 */
class MethodBodyTextVisitor extends AbstractParseTreeVisitor<string>{
    protected defaultResult(): string {
        return "";
    }
    visitBlock(ctx: BlockContext) {
        return ctx.start.inputStream?.getText(Interval.of(ctx.start.startIndex, ctx.stop?.stopIndex ?? 0));
    }

}
class MethodVisitor extends AbstractParseTreeVisitor<MethodComponent | void> implements JavaParserVisitor<MethodComponent | void>{
    private isOverriding: boolean;

    protected defaultResult(): void {
        // do nothing
    }
    constructor(parent: Component | null, comment: StructuredComment | null, isPublic: boolean, isOverriding: boolean) {
        super();
        this.parent = parent;
        this.comment = comment;
        this.isPublic = isPublic;
        this.isOverriding = isOverriding;
    }
    private lineNumber: number = 0;
    private comment: StructuredComment | null = null;
    private methodName = "";
    private returnType = "";
    private isPublic: boolean;
    private parent: Component | null;
    private methodParams: { type: string, name: string }[] = [];
    private thrownException: string[] = [];
    private methodBody: string = "";


    visitMethodDeclaration(ctx: MethodDeclarationContext) {
        this.lineNumber = ctx.start.line;
        this.visitMethod(ctx);
    }

    visitInterfaceMethodDeclaration(ctx: InterfaceMethodDeclarationContext) {
        this.lineNumber = ctx.start.line;
        this.visitMethod(ctx as MethodDeclarationContext);
    }
    /**
     * visit a constructor
     * they are treated like methods but have the void return type and are named "constructor"
     * @param ctx 
     */
    visitConstructorDeclaration(ctx: ConstructorDeclarationContext) {
        this.lineNumber = ctx.start.line;
        this.returnType = "void";
        this.methodName = "constructor";
        let visitor = new MethodParamsAndThrowVisitor();
        let paramsThrow = visitor.visit(ctx.formalParameters());
        this.methodParams = paramsThrow.params;
        this.thrownException = paramsThrow.thrownException;
        this.methodBody = new MethodBodyTextVisitor().visit(ctx)

    }
    private visitMethod(ctx: MethodDeclarationContext) {
        this.returnType = ctx.getChild(0).text
        this.methodName = ctx.getChild(1).text;
        let visitor = new MethodParamsAndThrowVisitor();
        let paramsThrow = visitor.visit(ctx.formalParameters());
        if(ctx.throwList()){
            paramsThrow=visitor.visit(ctx.throwList()!);
        }
        this.methodParams = paramsThrow.params;
        this.thrownException = paramsThrow.thrownException;
        this.methodBody = new MethodBodyTextVisitor().visit(ctx)
    }

    visit(ctx: RuleContext): MethodComponent {
        super.visit(ctx);
        return new MethodComponent(this.lineNumber, this.methodName, this.returnType, this.parent, this.comment, new JavaMethodData(this.isPublic, this.isOverriding, this.thrownException), this.methodParams, this.methodBody)
    }

}
/**
 * visits a modifier so that this information could be used for metrics
 */
class ModifierVisitor extends AbstractParseTreeVisitor<ModifiererInformation> implements JavaParserVisitor<ModifiererInformation>{
    public defaultResult(): ModifiererInformation {
        return { accessibilty: Accessibility.Private, isStatic: false, isOverride: false };
    }

    private result: ModifiererInformation = this.defaultResult();

    visitClassOrInterfaceModifier(mod: ClassOrInterfaceModifierContext): ModifiererInformation {
        if (mod.children == undefined) {
            return this.defaultResult();
        }

        for (let child of mod.children) {

            switch (child.text.toLowerCase()) {
                case "public":
                    this.result.accessibilty = Accessibility.Public; break;
                case "private":
                    this.result.accessibilty = Accessibility.Private; break;
                case "protected":
                    this.result.accessibilty = Accessibility.Protected; break;
                case "static":
                    this.result.isStatic = true; break;
                case "@override":
                    this.result.isOverride = true; break;

            }
        }
        return this.result;

    }


}