import { JavaParser } from "../../src/parser/java_parser";
import fs from "fs"
import { JavaLexer } from "../../src/parser/antlr_files/java/JavaLexer";
import { WSA_E_CANCELLED } from "constants";
import { Token } from "antlr4ts";
import { HierarchicalMember } from "../../src/parser/parse_result/HierarchicalMember";
import { MethodComponent } from "../../src/parser/parse_result/MethodComponent";
import { ClassMemberComponent } from "../../src/parser/parse_result/ClassMemberComponent";
import { Accessibility } from "../../src/parser/parse_result/Component";
import { ClassComponent } from "../../src/parser/parse_result/ClassComponent";

let tokens:Token[]=[]
const numberTokensMainJava=33;

beforeAll(()=>{
    const testCode="public class Main{public static void main(String[] args){System.out.println(\"Hello World\");}}"
    // prevent unnecessary writing to disk if file is unchanged
    const expectedFileSize=93;
   
    
    const parser=new JavaParser();
    var stream=parser.getTokens(testCode);
    tokens=stream.getTokens();
});
test("Test java lexer token size",()=>{
    console.log(tokens);
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
test("test java parser",()=>{
    var parser=new JavaParser();
    let res=parser.parse("testDir/commented_class.java");
    expect(res.members.getChildren().length).toBe(2);
    let firstClass=res.members.getChildren()[0];
    let secondClass=res.members.getChildren()[1];

    expect(firstClass.getName()).toBe("Main");
    expect(firstClass.getComment()).not.toBe(null);
    let firstClassChildren=(firstClass as ClassComponent).getChildren();
    expect(firstClassChildren.length).toBe(2);

    let mainMethod=firstClassChildren[0] as MethodComponent
    expect(mainMethod.getName()).toBe("main");
    expect(mainMethod.getComment()).not.toBe(null);
    expect(mainMethod.getParams().length).toBe(1);
    let mainMethodParams=mainMethod.getParams();
    expect(mainMethodParams[0].name).toBe("args");
    expect(mainMethodParams[0].type).toBe("String[]");

    expect(mainMethod.getType()).toBe("void");
    expect(mainMethod.getAccessibilty()).toBe(Accessibility.Public);
    expect(mainMethod.isStatic()).toBeTruthy();

    let field=firstClassChildren[1] as ClassMemberComponent
    expect(field.getName()).toBe("field");
    expect(field.getComment()).toBeNull();
    expect(field.getType()).toBe("int");
    expect(field.getAccessibilty()).toBe(Accessibility.Private);
    expect(field.isStatic()).toBeFalsy();

    expect(secondClass.getName()).toBe("SecondClass");
    expect(secondClass.getComment()).toBeNull();
    let secondClassChildren=(secondClass as ClassComponent).getChildren();
    expect(secondClassChildren).toHaveLength(2);

    let testMethod=secondClassChildren[0] as MethodComponent;
    expect(testMethod.getName()).toBe("test");
    expect(testMethod.getAccessibilty()).toBe(Accessibility.Public)
    expect(testMethod.isStatic()).toBeFalsy();
    expect(testMethod.getParams()).toHaveLength(1);
    expect(testMethod.getType()).toBe("void");
    let testMethodParam=testMethod.getParams()[0];
    expect(testMethodParam.name).toBe("a");
    expect(testMethodParam.type).toBe("int");

    let halloMethod=secondClassChildren[1] as MethodComponent;
    expect(halloMethod.getName()).toBe("hallo");
    expect(halloMethod.getType()).toBe("String");

    expect(halloMethod.getAccessibilty()).toBe(Accessibility.Private)
    expect(halloMethod.isStatic()).toBeFalsy();
    expect(halloMethod.getParams()).toHaveLength(0);
    




});