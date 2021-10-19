import { ParseResult } from './parse_result';
import antlr4, { CommonTokenStream } from 'antlr4';
import  fs  from 'fs';
import { CharStream, CharStreams } from 'antlr4ts';
//import {antlr4} from "antlr4/index"
export abstract class BaseParser{
    public abstract parse(filepath:string):ParseResult;
    public getTokens<T>(filepath:string,lexerType:{ new(stream:CharStream): T ;}):antlr4.CommonTokenStream{
        let input=fs.readFileSync(filepath).toString();
        let inputStream= CharStreams.fromString(input);
        let lexer=new lexerType(inputStream)
        let tokenStream= new CommonTokenStream(lexer as any)
        tokenStream.fill();
        return tokenStream;
    }
    public getParser<T>(tokens:antlr4.CommonTokenStream,parserType:{ new(stream:antlr4.CommonTokenStream): T ;}){
        let parser= new parserType(tokens) as unknown as antlr4.Parser;
        parser.buildParseTrees=true;
        return parser;
    }
}