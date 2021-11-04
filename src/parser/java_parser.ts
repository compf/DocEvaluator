import { BaseParser } from "./base_parser";
import { ParseResult } from "./parse_result/ParseResult";
var JavaLexer = require("./antlr_files/java/JavaLexer").JavaLexer;
import { CharStream, CharStreams, CommonTokenStream, RuleContext } from 'antlr4ts';
import { JavaParserVisitor } from "./antlr_files/java/JavaParserVisitor";
import { Accessibility, Component } from "./parse_result/Component";
import { CommentContext, JavaParser as Antlr_JavaParser, TypeDeclarationContext, ClassDeclarationContext, MethodDeclarationContext, FieldDeclarationContext, ClassOrInterfaceModifierContext, TypeTypeContext, VariableDeclaratorsContext, FormalParameterListContext, ThrowListContext, ImplementInterfacesContext, ExtendClassContext, AnnotationContext, InterfaceDeclarationContext, ExtendInterfaceContext, InterfaceMethodDeclarationContext, ConstructorDeclarationContext } from "./antlr_files/java/JavaParser";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { StructuredComment, StructuredCommentTag } from "./parse_result/StructuredComment";
import { HierarchicalMember } from "./parse_result/HierarchicalMember";
import { ClassMemberComponent } from "./parse_result/ClassMemberComponent";
import { MethodComponent } from "./parse_result/MethodComponent";
import { ClassComponent } from "./parse_result/ClassComponent";
import { ComponentMetaInformation, DefaultComponentMetaInformation } from "./parse_result/ComponentData";
import { JavaMethodData } from "./parse_result/java/JavaMethodData";
import { JavaClassData } from "./parse_result/java/JavaClassData";
import { arrayBuffer } from "stream/consumers";
import { stringify } from "querystring";
//import { JavadocLexer } from "./antlr_files/javadoc/JavadocLexer";
//import { DescriptionContext, JavadocParser } from "./antlr_files/javadoc/JavadocParser";



export class JavaParser extends BaseParser {
    override parseString(content: string): ParseResult {
        let tokens = this.getTokens(content);
        tokens.fill()
        let parser = new Antlr_JavaParser(tokens);
        let visitor = new FileVisitor();
        let rel = parser.compilationUnit()
        var res = visitor.visit(rel) as HierarchicalMember;
        return { members: res };
    }
    public override getLexerType<T>(): { new(stream: CharStream): T; } {
        return JavaLexer;
    }

}
/*class JavaDocVisitor extends AbstractParseTreeVisitor<StructuredComment|null>{
    protected defaultResult(): StructuredComment | null {
        return null;
    }
    private description:string=""
    private tags:StructuredCommentTag[]=[]
    visitDescription(ctx:DescriptionContext){
        this.description=ctx.text;
    }
    

}*/
class FieldDecVisitor extends AbstractParseTreeVisitor<Component | null> implements JavaParserVisitor<Component | null>{

    protected defaultResult(): Component | null {
        return null;
    }
    private type = "";
    private parent: Component | null;
    private comment: StructuredComment | null;
    private meta: ComponentMetaInformation;
    private field: Component | null = null;
    visitTypeType(ctx: TypeTypeContext) {
        this.type = ctx.text;
        return null;
    }
    visit(ctx: RuleContext) {
        super.visit(ctx);
        return this.field;
    }
    visitVariableDeclarators(ctx: VariableDeclaratorsContext) {
        if (ctx.children != undefined) {
            let lineNumber = ctx.start.line;
            if (ctx.children.length == 1) {
                let name = ctx.getChild(0).getChild(0).text;

                this.field = new ClassMemberComponent(lineNumber, name, this.type, this.parent, this.comment, this.meta)
            }
            else {
                //TODO find better solution in case of fields with comma separated names
                let names = ctx.children.filter((c) => c.childCount > 0).map((c) => c.getChild(0).text);
                let groupedField = new HierarchicalMember(lineNumber, names.join(","), this.parent, this.comment, this.meta);
                this.field = groupedField;
                for (let n of names) {
                    let child = new ClassMemberComponent(lineNumber, n, this.type, this.parent, this.comment, this.meta)
                    groupedField.addChild(child)
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
class ClassExtendAndImplementVisitor extends AbstractParseTreeVisitor<string[]>{
    protected defaultResult(): string[] {
        return []
    }
    visitImplementInterfaces(ctx: ImplementInterfacesContext) {
        let splitted= ctx.getChild(1).text.split(",");
        for(let s of splitted){
            this.superTypes.push(s);
        }
    }
    visitExtendClass(ctx: ExtendClassContext) {
        this.superTypes.push( ctx.getChild(1).text);
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
        let splitted= ctx.getChild(1).text.split(",");
        for(let s of splitted){
            this.superTypes.push(s);
        }
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
        let clsComponent = new ClassComponent(lineNumber, this.className, this.parent, this.comment, new JavaClassData(this.isPublic, superTypes));

        this.visitClassOrInterfaceMembers(blck,clsComponent);

        return clsComponent;

    }
    visitClassOrInterfaceMembers(blck:RuleContext[],clsComponent:ClassComponent){

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
    visitInterfaceDeclaration(ctx:InterfaceDeclarationContext){
        this.className = ctx.getChild(1).text;
        let blck = ctx.interfaceBody().interfaceBodyDeclaration();
        let superTypes = new InterfaceExtendVisitor().visit(ctx);
        let lineNumber = ctx.start.line;
        let clsComponent = new ClassComponent(lineNumber, this.className, this.parent, this.comment, new JavaClassData(this.isPublic, superTypes));

        this.visitClassOrInterfaceMembers(blck,clsComponent);

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
    private parent: HierarchicalMember = new HierarchicalMember(0, "", null, null, new DefaultComponentMetaInformation(true));
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
export class JavadocParser{
    private getElementOrDefault<T>(array: T[], index: number): T | null {
        if (index < array.length) {
            return array[index];
        }
        else return null;
    }
    private splitWithRemainder(str:string,delim:string,max:number){
        let splitted=str.split(delim);
        let result=[]
        let last="";
        for(let i=0;i<splitted.length;i++){
            if(i<max-1){
                result.push(splitted[i])
            }
            else{
                last+=splitted[i]+" ";
            }
            
        }
        result.push(last.trim());
        return result;
    }
    parseTag(line: string): StructuredCommentTag {
        let splitted: string[] = []
        if (this.hasParam(line)) {
            splitted = this.splitWithRemainder(line," ",3);
            let tag = this.getElementOrDefault(splitted, 0)
            let param = this.getElementOrDefault(splitted, 1)
            let descr = this.getElementOrDefault(splitted, 2)
            return new StructuredCommentTag(tag, param, descr);
        }
        else {
            splitted = this.splitWithRemainder(line," ",2);
            let tag = this.getElementOrDefault(splitted, 0)
            let descr = this.getElementOrDefault(splitted, 1)
            return new StructuredCommentTag(tag, null, descr);
        }

    }
    hasParam(line: string): boolean {
        let tagsWithParams = ["@param", "@throws"];
        return tagsWithParams.some((t) => line.startsWith(t));
    }
    parseCommentText(text: string): StructuredComment {
        let lines = text.split("\n");
        let toReplace = ["/**", "*/", "*"]
        for (let i = 0; i < lines.length; i++) {
            for (let replace of toReplace) {
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
            if (line.startsWith("@")) {
                let tag = this.parseTag(line);
                tags.push(tag);
                foundTag = true;
            }
            else if(line!="") {
                descriptionLines.push(line)
            }
        }
        return new StructuredComment(descriptionLines.join("\n"), tags);
    }
}
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
    visitConstructorDeclaration(ctx:ConstructorDeclarationContext){
        let visitor = new MethodVisitor(this.parent, this.comment, this.modifier?.accessibilty == Accessibility.Public, this.modifier.isOverride);
        return visitor.visit(ctx);
    }
    visitClassDeclaration(ctx: ClassDeclarationContext) {
        let visitor = new ClassDecVisitor(this.parent, this.comment, (this.modifier.accessibilty == Accessibility.Public));
        return visitor.visit(ctx);
    }
    visitInterfaceDeclaration(ctx:InterfaceDeclarationContext){
        // We are treating classes and interfaces to be equivalent, this is a compromise to have good compatibility with 
        // other oop languages
        let visitor = new ClassDecVisitor(this.parent, this.comment, (this.modifier.accessibilty == Accessibility.Public));
        return visitor.visit(ctx);
    }
    visitComment(ctx: CommentContext): null {
        let commentText = ctx.text;
        let parser=new JavadocParser();
        this.comment = parser.parseCommentText(commentText);
        return null;
    }
    visitFieldDeclaration(ctx: FieldDeclarationContext) {
        let visitor = new FieldDecVisitor(this.parent, this.comment, new DefaultComponentMetaInformation(this.modifier.accessibilty == Accessibility.Public));
        return visitor.visit(ctx);
    }


}

type ParamsAndThrow = { params: { type: string, name: string }[], thrownException: string[] }
class MethodParamsAndThrowVisitor extends AbstractParseTreeVisitor<ParamsAndThrow>{
    protected defaultResult(): ParamsAndThrow {
        return { params: [], thrownException: [] }
    }
    private thrownException: string[] = [];
    private params: { type: string, name: string }[] = [];
    visitThrowList(ctx: ThrowListContext) {
        this.thrownException = ctx.getChild(1).text.split(",");
    }
    visitFormalParameterList(ctx: FormalParameterListContext) {
        if (ctx.children != undefined) {
            for (let param of ctx.children) {
                let name = param.getChild(param.childCount - 1).text;
                let type = param.getChild(param.childCount - 2).text;
                this.params.push({ type, name });
            }
        }
    }
    visit(ctx: RuleContext) {
        super.visit(ctx);
        return { thrownException: this.thrownException, params: this.params }
    }

}
type ModifiererInformation = { accessibilty: Accessibility, isStatic: boolean, isOverride: boolean }
class MethodVisitor extends AbstractParseTreeVisitor<MethodComponent | void> implements JavaParserVisitor<MethodComponent | void>{
    private isOverriding: boolean;

    protected defaultResult(): void {

    }
    constructor(parent: Component | null, comment: StructuredComment | null, isPublic: boolean, isOverriding: boolean) {
        super();
        this.parent = parent;
        this.comment = comment;
        this.isPublic = isPublic;
        this.isOverriding = isOverriding;
    }
    private modifierVisitor = new ModifierVisitor()
    private lineNumber: number = 0;
    private comment: StructuredComment | null = null;
    private methodName = "";
    private returnType = "";
    private isPublic: boolean;
    private parent: Component | null;
    private methodParams: { type: string, name: string }[] = [];
    private thrownException: string[] = [];



    visitMethodDeclaration(ctx: MethodDeclarationContext) {
        this.lineNumber = ctx.start.line;
        this.visitMethod(ctx);
    }
    visitInterfaceMethodDeclaration(ctx:InterfaceMethodDeclarationContext){
        this.lineNumber = ctx.start.line;
        this.visitMethod(ctx);
    }
    visitConstructorDeclaration(ctx:ConstructorDeclarationContext){
        this.lineNumber = ctx.start.line;
        this.returnType="void";
        this.methodName="constructor";
        let visitor = new MethodParamsAndThrowVisitor();
        let paramsThrow = visitor.visit(ctx);
        this.methodParams = paramsThrow.params;
        this.thrownException = paramsThrow.thrownException;
    }
    private visitMethod(ctx:RuleContext){
        this.returnType = ctx.getChild(0).text
        this.methodName = ctx.getChild(1).text;
        let visitor = new MethodParamsAndThrowVisitor();
        let paramsThrow = visitor.visit(ctx);
        this.methodParams = paramsThrow.params;
        this.thrownException = paramsThrow.thrownException;
    }

    visit(ctx: RuleContext): MethodComponent {
        super.visit(ctx);
        return new MethodComponent(this.lineNumber, this.methodName, this.returnType, this.parent, this.comment, new JavaMethodData(this.isPublic, this.isOverriding, this.thrownException), this.methodParams)
    }

}
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