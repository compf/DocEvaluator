import {BaseParser} from "./base_parser";
import { ParseResult } from "./parse_result";
var  JavaLexer =require( "./antlr_files/java/JavaLexer").JavaLexer;
import antlr4, { CommonTokenStream } from 'antlr4';
import { CharStream, CharStreams, RuleContext } from 'antlr4ts';
import { JavaParserVisitor } from "./antlr_files/java/JavaParserVisitor";
import { Component } from "./parse_result/Component";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { CommentContext, JavaParser as Antlr_JavaParser, JavaFileContext } from "./antlr_files/java/JavaParser";
import { ClassDecContext, BlockStartContext, BlockEndContext, InterfaceDecContext, RelevantComponentContext, ModifiererContext, GenericsContext, MethodDeclContext, DataTypeContext, ParamsContext, ParamContext, FieldDecContext,AllRelevantComponentsContext } from "./antlr_files/java/JavaParser";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'

export class JavaParser extends BaseParser{
    override parseString(content:string):ParseResult{
        let tokens=this.getTokens(content);
        tokens.fill()
        let parser=new Antlr_JavaParser(tokens);
       let visitor=new RelevantComponentVisitor();
       visitor.visit(parser.javaFile());
        //console.log(tokens);
        return new ParseResult();
    }
    public override getLexerType<T>():{ new(stream:CharStream): T ;}{
        return JavaLexer;
    }
   
}
class RelevantComponentVisitor extends AbstractParseTreeVisitor<Component|void> implements JavaParserVisitor<Component|void>{
    protected defaultResult(): void | Component {
        
    }

   visitRelevantComponent(ctx:RelevantComponentContext){
       console.log(ctx.text);
       if(ctx.childCount==2){
           console.log("has comments");
       }
       else if(ctx.childCount==1){
        console.log("no comments");
       }
      
   }
   visitJavaFile(ctx:JavaFileContext){
       if(ctx.children==undefined)return;
       for(let child of ctx.children){
            this.visitRelevantComponent(child as RelevantComponentContext);
       }
   }

   
  
   visitComment(ctx:CommentContext){
       console.log(ctx.text);
   }
      

    

}
