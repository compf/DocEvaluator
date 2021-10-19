import {BaseParser} from "./base_parser";
import { ParseResult } from "./parse_result";
var  JavaLexer =require( "./antlr_files/java/JavaLexer").JavaLexer;


export class JavaParser extends BaseParser{
    override parse(filename:string):ParseResult{
        let tokens=this.getTokens(filename,JavaLexer);
        tokens.fill()
        console.log(tokens);
        return new ParseResult();
    }
}