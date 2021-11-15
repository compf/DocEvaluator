import { ParseResult } from "./parse_result/parse_result";

import antlr4 from 'antlr4';
import { CommonTokenStream } from 'antlr4ts';
import  fs  from 'fs';
import { TokenStream } from 'antlr4ts';
import { CharStream, CharStreams } from 'antlr4ts';
import { HierarchicalComponent } from "./parse_result/hierarchical_component";
export abstract class BaseParser{

    /**
     * Parse the specified  parser using the parser of the derived class
     * @param filepath a path to a source code file
     * @returns an A object that represent the parse result
     */
    public  parse(filepath:string):HierarchicalComponent{
        let input=fs.readFileSync(filepath).toString();
        return this.parseString(input,filepath);
    }
    /**
     * Parse the string using the parser of the derived class
     * @param content the string that contains the source code to parse
     * @param filepath the file path of the content, might be null if the content is a direct string that does not come from a file
     * @returns A object that represent the parse result
     */
    public abstract parseString(content:string,filepath:string|null):HierarchicalComponent;

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