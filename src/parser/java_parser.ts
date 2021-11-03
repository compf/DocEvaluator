import { BaseParser } from "./base_parser";
import { ParseResult } from "./parse_result/ParseResult";
var JavaLexer = require("./antlr_files/java/JavaLexer").JavaLexer;
import { CharStream, RuleContext } from 'antlr4ts';
import { JavaParserVisitor } from "./antlr_files/java/JavaParserVisitor";
import { Accessibility, Component } from "./parse_result/Component";
import { CommentContext, JavaParser as Antlr_JavaParser,  TypeDeclarationContext, ClassDeclarationContext, MethodDeclarationContext, FieldDeclarationContext, ClassOrInterfaceModifierContext, TypeTypeContext, VariableDeclaratorsContext, FormalParameterListContext, ThrowListContext, ImplementInterfacesContext, ExtendClassContext, AnnotationContext } from "./antlr_files/java/JavaParser";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { StructuredComment } from "./parse_result/StructuredComment";
import { HierarchicalMember } from "./parse_result/HierarchicalMember";
import {  ClassMemberComponent } from "./parse_result/ClassMemberComponent";
import { MethodComponent } from "./parse_result/MethodComponent";
import { ClassComponent } from "./parse_result/ClassComponent";
import { ComponentMetaInformation, DefaultComponentMetaInformation } from "./parse_result/ComponentData";
import { JavaMethodData } from "./parse_result/java/JavaMethodData";
import { JavaClassData } from "./parse_result/java/JavaClassData";



export class JavaParser extends BaseParser {
    override parseString(content: string): ParseResult {
        let tokens = this.getTokens(content);
        tokens.fill()
        let parser = new Antlr_JavaParser(tokens);
        let visitor = new FileVisitor();
        let rel = parser.compilationUnit()
        console.log("hallo",rel.text);
        var res=visitor.visit(rel) as HierarchicalMember;
        //console.log(res);
        //console.log(tokens);
        return  {members:res};
    }
    public override getLexerType<T>(): { new(stream: CharStream): T; } {
        return JavaLexer;
    }

}
/*class ComponentVisitor  extends AbstractParseTreeVisitor<Component | null> implements JavaParserVisitor<Component | null>{
    protected defaultResult(): Component | null {
        return null;
    }
   /*visitComponent(ctx:ComponentContext){
        return this.visit(ctx.getChild(0))
    }
    private parent:Component|null;
    private comment:StructuredComment|null;
    constructor(parent:Component|null,comment:StructuredComment|null){
        super();
        this.parent=parent;
        this.comment=comment;
    }
    visitMethodDecl(meth: MethodDeclarationContext) {
        let methodVisitor = new MethodVisitor(this.parent,this.comment,new DefaultComponentMetaInformation(false));
        let methodDeclaration = methodVisitor.visit(meth);
        console.log("method " + meth.text)
        return methodDeclaration;
    }
    visitClassDec(cls:ClassDeclarationContext){
        return new ClassDecVisitor(this.parent,this.comment).visit(cls);
    }
    visitFieldDec(field:FieldDeclarationContext){
        return new FieldDecVisitor(this.parent,this.comment).visit(field);
    }

}*/
class FieldDecVisitor  extends AbstractParseTreeVisitor<Component | null> implements JavaParserVisitor<Component | null>{
    
    protected defaultResult(): Component | null {
        return null;
     }
     private type="";
     private parent:Component|null;
     private comment:StructuredComment|null;
     private meta: ComponentMetaInformation;
     private field:Component|null=null;
     /*visitId(ctx:IdContext){
         this.name=ctx.text;
         this.fieldComponent= new ClassMemberComponent(this.name,this.type,this.parent,this.comment,this.accessibility,this.isStatic)
         return null;
     }*/
     /*visitDataType(dt:DataTypeContext){
        this.type=dt.text;
        return null;
     }*/
     visitTypeType(ctx:TypeTypeContext){
         this.type=ctx.text;
         return null;
     }
     visit(ctx:RuleContext){
         super.visit(ctx);
         return this.field;
     }
     visitVariableDeclarators(ctx:VariableDeclaratorsContext){
         if(ctx.children!=undefined){
            if(ctx.children.length==1){
                let name=ctx.getChild(0).getChild(0).text;
                this.field= new ClassMemberComponent(name,this.type,this.parent,this.comment,this.meta)
            }
            else{
                //TODO find better solution in case of fields with comma separated names
                let names=ctx.children.map((c)=>c.getChild(0).text);
                let groupedField=new HierarchicalMember(names.join(","),this.parent,this.comment,this.meta);
                this.field=groupedField;
                for(let n of names){
                    let child= new ClassMemberComponent(n,this.type,this.parent,this.comment,this.meta)
                    groupedField.addChild(child)
                }
            }
         }
         return null;
         
     }
     


     constructor(parent:Component|null,comment:StructuredComment|null,meta:ComponentMetaInformation){
        super();
        this.parent=parent;
        this.comment=comment;
        this.meta=meta;
    }
}
class ClassExtendAndImplementVisitor extends AbstractParseTreeVisitor<{implementedInterfaces:string[],baseClass:string}>{
    protected defaultResult(): { implementedInterfaces: string[]; baseClass: string; } {
       return {baseClass:"",implementedInterfaces:[]}
    }
    visitImplementInterfaces(ctx:ImplementInterfacesContext){
        this.implementedInterface=ctx.getChild(0).text.split(",");
    }
    visitExtendClass(ctx:ExtendClassContext){
        this.baseClass=ctx.getChild(0).text;
    }
    private implementedInterface:string[]=[];
    private baseClass:string="";
    visit(ctx:RuleContext){
        super.visit(ctx);
        return {implementedInterfaces:this.implementedInterface,baseClass:this.baseClass};
    }
}
class ClassDecVisitor  extends AbstractParseTreeVisitor<Component | null> implements JavaParserVisitor<Component | null>{
    protected defaultResult(): Component | null {
       return null;
    }
    private className:string="";
    private parent:Component|null;
    private isPublic:boolean=false;
    private comment:StructuredComment|null;
    /*visitClassOrInterfaceModifier(mod:ClassOrInterfaceModifierContext){
        let modifier= new ModifierVisitor().visitClassOrInterfaceModifier(mod);
        this.isPublic=modifier.accessibilty==Accessibility.Public;;
        return null;

    }*/
    visitClassDeclaration(ctx:ClassDeclarationContext){
        this.className=ctx.getChild(1).text;
        let blck=ctx.classBody().classBodyDeclaration();
        let extendImplementData=new ClassExtendAndImplementVisitor().visit(ctx);
        let baseClass=extendImplementData.baseClass;
        let implementedInterfaces=extendImplementData.implementedInterfaces; 
        
        let clsComponent=new ClassComponent(this.className,this.parent,this.comment,new JavaClassData(this.isPublic,baseClass,implementedInterfaces));
        
        if(blck==undefined)return null;
        for(var child of blck){
            let visitor=new CommentComponentPairVisitor(clsComponent);
            var item=visitor.visit(child);
            if(item!=null){
                clsComponent?.addChild(item);

            }
        }
      
        return clsComponent;
        
    }
    /*visitClass(blck:ClassBodyContext){
        let visitor=new CommentComponentPairVisitor(this.clsComponent);
        if(blck.children==undefined)return null;
        for(var child of blck.children){
            var item=visitor.visit(child);
            if(item!=null){
                this.clsComponent?.addChild(item);

            }
        }
        return null;
    }*/
    
    constructor(parent:Component|null,comment:StructuredComment|null,isPublic:boolean){
        super();
        this.parent=parent;
        this.comment=comment;
        this.isPublic=isPublic;
    }


}
class FileVisitor extends AbstractParseTreeVisitor<Component | null> implements JavaParserVisitor<Component | null>{
    protected defaultResult(): null | Component {
        return null;
    }
    private parent:HierarchicalMember=new HierarchicalMember("",null,null,new DefaultComponentMetaInformation(true));
    visitTypeDeclaration(ctx:TypeDeclarationContext){
        
        let visitor=new CommentComponentPairVisitor(this.parent);
        let result=visitor.visit(ctx);
        if(result!=null){
            this.parent.addChild(result);
        }
        
        return this.parent;
    }
    visit(ctx:RuleContext){
        super.visit(ctx);
        return this.parent;
    }
}
class CommentComponentPairVisitor extends AbstractParseTreeVisitor<Component | null> implements JavaParserVisitor<Component | null>{
    protected defaultResult(): null | Component {
        return null;
    }
    private modifierVisitor=new ModifierVisitor();
    parent: Component | null = null;
    comment:StructuredComment|null=null;
    modifier:ModifiererInformation={accessibilty:Accessibility.Private,isOverride:false,isStatic:false}
    constructor(parent: Component | null) {
        super();
        this.parent = parent;
    }
    /*visitClassDeclaration(ctx:ClassDeclarationContext) :Component|null{
        let visitor=new ClassDecVisitor(this.parent,this.comment);
        return visitor.visit(ctx);
    }*/
    /*visitTypeDeclaration(ctx:TypeDeclarationContext){
        let visitor=new ClassDecVisitor(this.parent,this.comment,new DefaultComponentMetaInformation(this.modifier.accessibilty==Accessibility.Public) );
        return visitor.visit(ctx);
    }*/
    visitClassOrInterfaceModifier(ctx:ClassOrInterfaceModifierContext){
        this.modifier=this.modifierVisitor.visitClassOrInterfaceModifier(ctx);
        return null;
    }
    visitMethodDeclaration(ctx:MethodDeclarationContext){
        let visitor=new MethodVisitor(this.parent,this.comment,this.modifier?.accessibilty==Accessibility.Public,this.modifier.isOverride);
        return visitor.visit(ctx);

    }
    visitClassDeclaration(ctx:ClassDeclarationContext){
        let visitor=new ClassDecVisitor(this.parent,this.comment,(this.modifier.accessibilty==Accessibility.Public));
        return visitor.visit(ctx);
    }
    visitComment(ctx:CommentContext):null{
        this.comment=new StructuredComment(ctx.text);
        return null;
    }
    visitFieldDeclaration(ctx:FieldDeclarationContext){
        let visitor=new FieldDecVisitor(this.parent,this.comment,new DefaultComponentMetaInformation(this.modifier.accessibilty==Accessibility.Public));
        return visitor.visit(ctx);
    }
    /*visitCommentComponentPair(ctx: ParserRuleContext) {

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

    }*/
    /*visitCompilationUnit(ctx: CompilationUnitContext) {

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
    }*/



    



}

type ParamsAndThrow={params:{type:string,name:string}[],thrownException:string[]}
class MethodParamsAndThrowVisitor extends AbstractParseTreeVisitor<ParamsAndThrow>{
    protected defaultResult(): ParamsAndThrow {
        return {params:[],thrownException:[]}
    }
    private thrownException:string[]=[];
    private params:{type:string,name:string}[]=[];
    visitThrowList(ctx:ThrowListContext){
       this.thrownException=ctx.getChild(1).text.split(",");
    }
    visitFormalParameterList(ctx:FormalParameterListContext){
        if(ctx.children!=undefined){
            for(let param of ctx.children){
                let name=param.getChild(param.childCount-1).text;
                let type=param.getChild(param.childCount-2).text;
                this.params.push({type,name});
            }
        }
    }
    visit(ctx:RuleContext){
        super.visit(ctx);
        return {thrownException:this.thrownException,params:this.params}
    }
    
}
type ModifiererInformation = { accessibilty: Accessibility, isStatic: boolean, isOverride: boolean }
class MethodVisitor extends AbstractParseTreeVisitor<MethodComponent | void> implements JavaParserVisitor<MethodComponent | void>{
    private isOverriding: boolean;

    protected defaultResult(): void {

    }
    constructor(parent: Component | null,comment:StructuredComment|null,isPublic:boolean,isOverriding:boolean) {
        super();
        this.parent = parent;
        this.comment=comment;
        this.isPublic=isPublic;
        this.isOverriding=isOverriding;
    }
    private modifierVisitor = new ModifierVisitor()
    private modifiers = this.modifierVisitor.defaultResult();
    private comment:StructuredComment|null=null;
    private methodName = "";
    private returnType = "";
    private isPublic:boolean;
    private parent: Component | null;
    private methodParams:{type:string,name:string}[]=[];
    private thrownException:string[]=[];
    
    visitThrowList(ctx:ThrowListContext){
        console.log("hallo");
    }
    
    visitMethodDeclaration(ctx:MethodDeclarationContext){
        this.returnType=ctx.getChild(0).text
        this.methodName=ctx.getChild(1).text;
       let visitor=new MethodParamsAndThrowVisitor();
       let paramsThrow=visitor.visit(ctx);
       this.methodParams=paramsThrow.params;
       this.thrownException=paramsThrow.thrownException;
       console.log("test")
     
     
    }
    
    
    /*visitId(ctx: IdContext) {
        this.methodName = ctx.text;
        console.log(this.methodName);
    }
    visitDataType(ctx: DataTypeContext) {
        this.returnType = ctx.text;
        console.log("return " + this.returnType);
    }
    visitParam(param:FormalParameterContext){
        let type=param.getChild(0).text;
        let name=param.getChild(1).text;
        this.methodParams.push({type,name})
        console.log("param",type,name)
    }*/
    visit(ctx: RuleContext): MethodComponent {
        super.visit(ctx);
        return new MethodComponent(this.methodName,this.returnType, this.parent, this.comment, new JavaMethodData(this.isPublic,this.isOverriding,this.thrownException),this.methodParams)
    }

}
class ModifierVisitor extends AbstractParseTreeVisitor<ModifiererInformation> implements JavaParserVisitor<ModifiererInformation>{
    public defaultResult(): ModifiererInformation {
        return { accessibilty: Accessibility.Private, isStatic: false, isOverride: false };
    }

    private result:ModifiererInformation=this.defaultResult();
   
    visitClassOrInterfaceModifier(mod: ClassOrInterfaceModifierContext): ModifiererInformation {
        if (mod.children == undefined) {
            return this.defaultResult();
        }
        
        for (let child of mod.children) {
            console.log(child.text);
            switch (child.text.toLowerCase()) {
                case "public":
                    this.result.accessibilty = Accessibility.Public; break;
                case "private":
                    this.result.accessibilty = Accessibility.Private;break;
                case "protected":
                    this.result.accessibilty = Accessibility.Protected;break;
                case "static":
                    this.result.isStatic = true; break;
                case "@override":
                    this.result.isOverride = true; break;



            }
        }
        return this.result;

    }


}