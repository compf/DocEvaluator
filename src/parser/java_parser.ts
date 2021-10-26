import {BaseParser} from "./base_parser";
import { ParseResult } from "./parse_result";
var  JavaLexer =require( "./antlr_files/java/JavaLexer").JavaLexer;
import antlr4, { CommonTokenStream } from 'antlr4';
import { CharStream, CharStreams } from 'antlr4ts';


export class JavaParser extends BaseParser{
    override parseString(filename:string):ParseResult{
        let tokens=this.getTokens(filename);
        tokens.fill()
        
        console.log(tokens);
        return new ParseResult();
    }
    public override getLexerType<T>():{ new(stream:CharStream): T ;}{
        return JavaLexer;
    }
    public override getParserType<T>():{ new(stream:antlr4.CommonTokenStream): T ;}{
        //TODO
        throw new Error("Not implemented yet")
    }
}