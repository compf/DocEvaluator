import { ParseResult } from "./parse_result/ParseResult";

import antlr4 from 'antlr4';
import { CommonTokenStream } from 'antlr4ts';
import  fs  from 'fs';
import { TokenStream } from 'antlr4ts';
import { CharStream, CharStreams } from 'antlr4ts';
export abstract class BaseParser{
    /**
     * Parse the specified  parser using the parser of the derived class
     * @param filepath a path to a source code file
     * @returns an A object that represent the parse result
     */
    public  parse(filepath:string):ParseResult{
        let input=fs.readFileSync(filepath).toString();
        return this.parseString(input);
    }
    /**
     * Parse the string using the parser of the derived class
     * @param content the string that contains the source code to parse
     * @returns A object that represent the parse result
     */
    public abstract parseString(content:string):ParseResult;

    /**
     * Reads all tokens from the source code file
     * @param content a string that contains valid source code
     * @returns a CommonTokenStream that contains all read tokens
     */
    public getTokens<T>(content:string):CommonTokenStream{
       
        let inputStream= CharStreams.fromString(content);
        const lexerType=this.getLexerType();
        let lexer=new lexerType(inputStream)
        let tokenStream= new CommonTokenStream(lexer as any)
        tokenStream.fill();
        return tokenStream;
    }
    /**
     * Returns the type of the lexer which will be used to simply instantiate the lexer
     */
    public abstract getLexerType<T>():{ new(stream:CharStream): T ;}

 
}