import { BaseParser } from "./base_parser";
import { ParseResult } from "./parse_result/ParseResult";
var JavaLexer = require("./antlr_files/java/JavaLexer").JavaLexer;
import antlr4, { CommonTokenStream } from 'antlr4';
import { CharStream, CharStreams, RuleContext } from 'antlr4ts';
import { JavaParserVisitor } from "./antlr_files/java/JavaParserVisitor";
import { Accessibility, Component } from "./parse_result/Component";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { CommentContext, JavaParser as Antlr_JavaParser, JavaFileContext, ComponentContext, ClassBlockContext } from "./antlr_files/java/JavaParser";
import { ClassDecContext, BlockStartContext, BlockEndContext, InterfaceDecContext, IdContext, CommentComponentPairContext, ModifiererContext, GenericsContext, MethodDeclContext, DataTypeContext, ParamsContext, ParamContext, FieldDecContext, AllRelevantComponentsContext } from "./antlr_files/java/JavaParser";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ContextSensitivityInfo } from "antlr4ts/atn/ContextSensitivityInfo";
import { StructuredComment } from "./parse_result/StructuredComment";
import { HierarchicalMember } from "./parse_result/HierarchicalMember";
import { tsParenthesizedType } from "@babel/types";
import {  ClassMemberComponent } from "./parse_result/ClassMemberComponent";
import { MethodComponent } from "./parse_result/MethodComponent";
import { ClassComponent } from "./parse_result/ClassComponent";
import { ConsoleErrorListener } from "antlr4/error/ErrorListener";



export class JavaParser extends BaseParser {
    override parseString(content: string): ParseResult {
        let tokens = this.getTokens(content);
        tokens.fill()
        let parser = new Antlr_JavaParser(tokens);
        let visitor = new CommentComponentPairVisitor(null);
        let rel = parser.allRelevantComponents()
        //console.log(rel.text);
        var res=visitor.visit(rel) as HierarchicalMember;
        //console.log(res);
        //console.log(tokens);
        return  {members:res};
    }
    public override getLexerType<T>(): { new(stream: CharStream): T; } {
        return JavaLexer;
    }

}
class ComponentVisitor  extends AbstractParseTreeVisitor<Component | null> implements JavaParserVisitor<Component | null>{
    protected defaultResult(): Component | null {
        return null;
    }
    visitComponent(ctx:ComponentContext){
        return this.visit(ctx.getChild(0))
    }
    private parent:Component|null;
    private comment:StructuredComment|null;
    constructor(parent:Component|null,comment:StructuredComment|null){
        super();
        this.parent=parent;
        this.comment=comment;
    }
    visitMethodDecl(meth: MethodDeclContext) {
        let methodVisitor = new MethodVisitor(this.parent,this.comment);
        let methodDeclaration = methodVisitor.visit(meth);
        console.log("method " + meth.text)
        return methodDeclaration;
    }
    visitClassDec(cls:ClassDecContext){
        return new ClassDecVisitor(this.parent,this.comment).visit(cls);
    }
    visitFieldDec(field:FieldDecContext){
        return new FieldDecVisitor(this.parent,this.comment).visit(field);
    }

}
class FieldDecVisitor  extends AbstractParseTreeVisitor<Component | null> implements JavaParserVisitor<Component | null>{
    protected defaultResult(): Component | null {
        return null;
     }
     private type="";
     private name="";
     private parent:Component|null;
     private accessibility=Accessibility.Public;
     private isStatic:boolean=false;
     private comment:StructuredComment|null;
     private fieldComponent:ClassMemberComponent|null=null;
     visitId(ctx:IdContext){
         this.name=ctx.text;
         this.fieldComponent= new ClassMemberComponent(this.name,this.type,this.parent,this.comment,this.accessibility,this.isStatic)
         return null;
     }
     visitDataType(dt:DataTypeContext){
        this.type=dt.text;
        return null;
     }
     visitModifierer(mod:ModifiererContext){
         let modifier= new ModifierVisitor().visitModifierer(mod);
         this.accessibility=modifier.accessibilty;
         this.isStatic=modifier.isStatic;
         return null;
 
     }
     visit(ctx:RuleContext){
         super.visit(ctx)
         return this.fieldComponent;
     }


     constructor(parent:Component|null,comment:StructuredComment|null){
        super();
        this.parent=parent;
        this.comment=comment;
    }
}

class ClassDecVisitor  extends AbstractParseTreeVisitor<Component | null> implements JavaParserVisitor<Component | null>{
    protected defaultResult(): Component | null {
       return null;
    }
    private className:string="";
    private parent:Component|null;
    private accessibility=Accessibility.Public;
    private isStatic:boolean=false;
    private comment:StructuredComment|null;
    private clsComponent:ClassComponent|null=null;
    visitId(ctx:IdContext){
        this.className=ctx.text;
        this.clsComponent= new ClassComponent(this.className,this.parent,this.comment,this.accessibility,this.isStatic)
        return null;
    }
    visitModifierer(mod:ModifiererContext){
        let modifier= new ModifierVisitor().visitModifierer(mod);
        this.accessibility=modifier.accessibilty;
        this.isStatic=modifier.isStatic;
        return null;

    }
    visitClassBlock(blck:ClassBlockContext){
        let visitor=new CommentComponentPairVisitor(this.clsComponent);
        if(blck.children==undefined)return null;
        for(var child of blck.children){
            var item=visitor.visit(child);
            if(item!=null){
                this.clsComponent?.addChild(item);

            }
        }
        return null;
    }
    visit(ctx:RuleContext){
        super.visit(ctx);
        console.log("visit ",ctx.text)
        return this.clsComponent;
    }
    constructor(parent:Component|null,comment:StructuredComment|null){
        super();
        this.parent=parent;
        this.comment=comment;
    }


}
class CommentComponentPairVisitor extends AbstractParseTreeVisitor<Component | null> implements JavaParserVisitor<Component | null>{
    protected defaultResult(): null | Component {
        return null;
    }
    
    parent: Component | null = null;
    constructor(parent: Component | null) {
        super();
        this.parent = parent;
    }
    visitCommentComponentPair(ctx: CommentComponentPairContext) {

        let comment: StructuredComment | null = null;
        let component: HierarchicalMember;
        let visitor;
        if (ctx.childCount == 2) {
            let commentText = ctx.getChild(0).text;
            comment = new StructuredComment(commentText);
           let declContext=ctx.getChild(1);
           let componentVisitor=new ComponentVisitor(this.parent,comment);
          return  componentVisitor.visit(declContext);
           
        }
        else if (ctx.childCount == 1) {
            let declContext=ctx.getChild(0);
           let componentVisitor=new ComponentVisitor(this.parent,comment);
          return  componentVisitor.visit(declContext);

        }
        else {
            return null;
        }

    }
    visitAllRelevantComponents(ctx: AllRelevantComponentsContext) {

        let hierarchical = new HierarchicalMember("", this.parent, null,Accessibility.Public,false);
        if (ctx.children == undefined) return null;
        for (let child of ctx.children) {
            let visitor = new CommentComponentPairVisitor(hierarchical);
            let component = visitor.visitCommentComponentPair(child as CommentComponentPairContext);

            if (component != null) {
                hierarchical.addChild(component);

            }
        }
        return hierarchical;
    }



    



}
type ModifiererInformation = { accessibilty: Accessibility, isStatic: boolean, isOverride: boolean }
class MethodVisitor extends AbstractParseTreeVisitor<MethodComponent | void> implements JavaParserVisitor<MethodComponent | void>{
    protected defaultResult(): void {

    }
    constructor(parent: Component | null,comment:StructuredComment|null) {
        super();
        this.parent = parent;
        this.comment=comment;
    }
    private modifierVisitor = new ModifierVisitor()
    private modifiers = this.modifierVisitor.defaultResult();
    private comment:StructuredComment|null=null;
    private methodName = "";
    private returnType = "";
    private parent: Component | null;
    private methodParams:{type:string,name:string}[]=[];
    visitModifierer(ctx: ModifiererContext) {
        this.modifiers = this.modifierVisitor.visitModifierer(ctx);
    }
    visitId(ctx: IdContext) {
        this.methodName = ctx.text;
        console.log(this.methodName);
    }
    visitDataType(ctx: DataTypeContext) {
        this.returnType = ctx.text;
        console.log("return " + this.returnType);
    }
    visitParam(param:ParamContext){
        let type=param.getChild(0).text;
        let name=param.getChild(1).text;
        this.methodParams.push({type,name})
        console.log("param",type,name)
    }
    visit(ctx: RuleContext): MethodComponent {
        super.visit(ctx);
        return new MethodComponent(this.methodName,this.returnType, this.parent, this.comment, this.modifiers.accessibilty, this.modifiers.isStatic, this.modifiers.isOverride,this.methodParams)
    }

}
class ModifierVisitor extends AbstractParseTreeVisitor<ModifiererInformation> implements JavaParserVisitor<ModifiererInformation>{
    public defaultResult(): ModifiererInformation {
        return { accessibilty: Accessibility.Public, isStatic: false, isOverride: false };
    }

   
    visitModifierer(mod: ModifiererContext): ModifiererInformation {
        if (mod.children == undefined) {
            return this.defaultResult();
        }
        let result = this.defaultResult();
        for (let child of mod.children) {
            console.log(child.text);
            switch (child.text.toLowerCase()) {
                case "public":
                    result.accessibilty = Accessibility.Public; break;
                case "private":
                    result.accessibilty = Accessibility.Private;break;
                case "protected":
                    result.accessibilty = Accessibility.Protected;break;
                case "static":
                    result.isStatic = true; break;
                case "@override":
                    result.isOverride = true; break;



            }
        }
        return result;

    }


}