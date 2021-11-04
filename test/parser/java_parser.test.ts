import { JavadocParser, JavaParser } from "../../src/parser/java_parser";
import fs from "fs"
import { JavaLexer } from "../../src/parser/antlr_files/java/JavaLexer";
import exp, { WSA_E_CANCELLED } from "constants";
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
    expect(res.members.getChildren().length).toBe(3);
    let firstClass=res.members.getChildren()[0];
    let secondClass=res.members.getChildren()[1] as ClassComponent;

    expect(firstClass.getName()).toBe("Main");
    expect(firstClass.getComment()).not.toBe(null);
    let firstClassChildren=(firstClass as ClassComponent).getChildren();
    expect(firstClassChildren.length).toBe(3);

    let mainMethod=firstClassChildren[0] as MethodComponent
    expect(mainMethod.getName()).toBe("main");
    expect(mainMethod.getComment()).not.toBe(null);
    expect(mainMethod.getParams().length).toBe(1);
    let mainMethodParams=mainMethod.getParams();
    expect(mainMethodParams[0].name).toBe("args");
    expect(mainMethodParams[0].type).toBe("String[]");

    //expect(mainMethod.getType()).toBe("void");
    //expect(mainMethod.getAccessibilty()).toBe(Accessibility.Public);
    expect(mainMethod.getComponentMetaInformation().isPublic()).toBeTruthy();

    let field=firstClassChildren[1] as ClassMemberComponent
    expect(field.getName()).toBe("field");
    expect(field.getComment()).toBeNull();
    expect(field.getReturnType()).toBe("int");
    //expect(field.getAccessibilty()).toBe(Accessibility.Private);
    expect(field.getComponentMetaInformation().isPublic()).toBeFalsy();


    let interfaceChild=firstClassChildren[2] as ClassComponent;
    expect(interfaceChild).not.toBeNull();
    expect(interfaceChild.getName()).toBe("ISimpleInterface");
   let interfaceData=interfaceChild.getComponentMetaInformation()
    expect(interfaceData.isPublic()).toBeFalsy();
    expect(interfaceChild.getSuperTypes()).toStrictEqual(["IAnotherInterface"]);
    
    expect(interfaceChild.getChildren()).toHaveLength(1);
    let interfaceMethod=interfaceChild.getChildren()[0] as MethodComponent;
    expect(interfaceMethod.getName()).toBe("testMethod");
    expect(interfaceMethod.getReturnType()).toBe("void");
    expect(interfaceMethod.getParams()).toHaveLength(1);
    let interfaceMethodParam=interfaceMethod.getParams()[0];
    expect(interfaceMethodParam).toStrictEqual({type:"double",name:"arg"});

    expect(secondClass.getName()).toBe("SecondClass");
    expect(secondClass.getComment()).toBeNull();
    let secondClassChildren=(secondClass as ClassComponent).getChildren();
    expect(secondClassChildren).toHaveLength(3);

    
    let superClasses=["Object","List<Integer>"];
    expect(secondClass.getSuperTypes()).toStrictEqual(superClasses);
    /*expect(secondClassData.getBaseClass()).toBe("Object");
    expect(secondClassData.getImplementedInterfaces()).toHaveLength(1);
    expect(secondClassData.getImplementedInterfaces()[0]).toBe("List<Integer>");*/

    let testMethod=secondClassChildren[0] as MethodComponent;
    expect(testMethod.getName()).toBe("test");
    expect(testMethod.getComponentMetaInformation().isPublic()).toBeTruthy();

    expect(testMethod.getParams()).toHaveLength(1);
    expect(testMethod.getReturnType()).toBe("void");
    let testMethodParam=testMethod.getParams()[0];
    expect(testMethodParam.name).toBe("a");
    expect(testMethodParam.type).toBe("int");

    let halloMethod=secondClassChildren[1] as MethodComponent;
    expect(halloMethod.getName()).toBe("hallo");
    expect(halloMethod.getReturnType()).toBe("String");

    //expect(halloMethod.getAccessibilty()).toBe(Accessibility.Private)
    expect(halloMethod.getComponentMetaInformation().isPublic()).toBeFalsy();
    expect(halloMethod.getParams()).toHaveLength(0);

    let multipleFields=secondClassChildren[2] as HierarchicalMember
    expect(multipleFields).not.toBeNull();
    expect(multipleFields.getChildren()).toHaveLength(2);
   let fieldChild1=multipleFields.getChildren()[0] as ClassMemberComponent; 
   expect(fieldChild1).not.toBeNull();
   expect(fieldChild1.getReturnType()).toBe("int"); 
   expect(fieldChild1.getName()).toBe("multiple");

   let fieldChild2=multipleFields.getChildren()[1] as ClassMemberComponent; 
   expect(fieldChild2).not.toBeNull();
   expect(fieldChild2.getReturnType()).toBe("int"); 
   expect(fieldChild2.getName()).toBe("many");


    let thirdClass=res.members.getChildren()[2] as ClassComponent;
    expect(thirdClass.getName()).toBe("ThirdClass");
    expect(thirdClass.getComment()).toBeNull();
    expect(thirdClass.getChildren()).toHaveLength(1);
    let constructor=thirdClass.getChildren()[0] as MethodComponent;
    expect(constructor.getName()).toBe("constructor");
    expect(constructor.getParams()).toHaveLength(1);
    let constructorParam=constructor.getParams()[0];
    expect(constructorParam).toStrictEqual({type:"float",name:"pr"});


});
test("test javadoc parser",()=>{
    const testComment="/**\n"+
    "This is test method\n"+
    "it has many features\n"+
    "@return a positive number\n"+
    "@param a a parameter\n"+
    "@throws Exception an exception to be thrown\n*/";
let parser=new JavadocParser();
let comment=parser.parseCommentText(testComment);
expect(comment.getGeneralDescription()).not.toBeNull();
let descriptionLines=comment.getGeneralDescription()?.split("\n");
expect(descriptionLines).toHaveLength(2);
expect(comment.getTags()).toHaveLength(3);

let returnTag=comment.getTags()[0];
expect(returnTag.getKind()).toBe("@return");
expect(returnTag.getParam()).toBeNull();
expect(returnTag.getDescription()).toBe("a positive number");

let paramTag=comment.getTags()[1];
expect(paramTag.getKind()).toBe("@param");
expect(paramTag.getParam()).toBe("a");
expect(paramTag.getDescription()).toBe("a parameter");

let throwTag=comment.getTags()[2];
expect(throwTag.getKind()).toBe("@throws");
expect(throwTag.getParam()).toBe("Exception");
expect(throwTag.getDescription()).toBe("an exception to be thrown");
});