import { JavaParser } from "../../src/parser/java_parser";
import fs from "fs"
import { JavaLexer } from "../../src/parser/antlr_files/java/JavaLexer";
import { WSA_E_CANCELLED } from "constants";
import { Token } from "antlr4";

let tokens:Token[]=[]
const numberTokensMainJava=33;

beforeAll(()=>{
    const testCode="public class Main{public static void main(String[] args){System.out.println(\"Hello World\");}}"
    // prevent unnecessary writing to disk if file is unchanged
    const expectedFileSize=93;
    if(fs.statSync("testDir/Main.java").size!=expectedFileSize){
        console.log("other");
        fs.writeFileSync("testDir/Main.java",testCode);
    }
    
    const parser=new JavaParser();
    tokens=parser.getTokens("testDir/Main.java").tokens;
});
test("Test java lexer token size",()=>{
    expect(tokens.length).toBe(numberTokensMainJava);  
});
test("test token types correct",()=>{
const correctTokens=[JavaLexer.PUBLIC,JavaLexer.WS,JavaLexer.CLASS,JavaLexer.WS,JavaLexer.IDENTIFIER,JavaLexer.LBRACE,
JavaLexer.PUBLIC,JavaLexer.WS,JavaLexer.STATIC,JavaLexer.WS,JavaLexer.VOID,JavaLexer.WS,
JavaLexer.IDENTIFIER,JavaLexer.LPAREN,JavaLexer.IDENTIFIER,JavaLexer.LBRACK,JavaLexer.RBRACK,
JavaLexer.WS,JavaLexer.IDENTIFIER,JavaLexer.RPAREN,JavaLexer.LBRACE,JavaLexer.IDENTIFIER,JavaLexer.DOT,
JavaLexer.IDENTIFIER,JavaLexer.DOT,JavaLexer.IDENTIFIER,JavaLexer.LPAREN,JavaLexer.STRING_LITERAL,JavaLexer.RPAREN,
JavaLexer.SEMI,JavaLexer.RBRACE,JavaLexer.RBRACE,JavaLexer.EOF];

let tokenTypes=tokens.map((x)=>x.type);
expect(tokenTypes).toStrictEqual(correctTokens);
expect(correctTokens.length).toBe(numberTokensMainJava)
})