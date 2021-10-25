import { ParseResult } from './parse_result';
import antlr4, { CommonTokenStream } from 'antlr4';
import  fs  from 'fs';
import { CharStream, CharStreams } from 'antlr4ts';
//import {antlr4} from "antlr4/index"
export abstract class BaseParser{
    public abstract parse(filepath:string):ParseResult;
    public getTokens<T>(filepath:string):antlr4.CommonTokenStream{
        let input=fs.readFileSync(filepath).toString();
        let inputStream= CharStreams.fromString(input);
        const lexerType=this.getLexerType();
        let lexer=new lexerType(inputStream)
        let tokenStream= new CommonTokenStream(lexer as any)
        tokenStream.fill();
        return tokenStream;
    }
    public abstract getLexerType<T>():{ new(stream:CharStream): T ;}
    public abstract getParserType<T>():{ new(stream:antlr4.CommonTokenStream): T ;};

    public getParser<T>(tokens:antlr4.CommonTokenStream):antlr4.Parser{
        const parserType=this.getParserType();
        let parser= new parserType(tokens) as unknown as antlr4.Parser;
        parser.buildParseTrees=true;
        return parser;
    }
}