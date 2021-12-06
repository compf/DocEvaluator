import { JavadocParser, JavaParser } from "../../src/parser/java_parser";
import { JavaLexer } from "../../src/parser/antlr_files/java/JavaLexer";
import { Token } from "antlr4ts";
import { MethodComponent } from "../../src/parser/parse_result/method_component";
import { SingleMemberComponent } from "../../src/parser/parse_result/single_member_component";
import { ClassComponent } from "../../src/parser/parse_result/class_component";
import { GroupedMemberComponent } from "../../src/parser/parse_result/grouped_member_component";

let tokens: Token[] = []
const numberTokensMainJava = 33;

beforeAll(() => {
    const testCode = "public class Main{public static void main(String[] args){System.out.println(\"Hello World\");}}"
    const parser = new JavaParser();
    var stream = parser.getTokens(testCode);
    tokens = stream.getTokens();
});
test("Test java lexer token size", () => {
    expect(tokens.length).toBe(numberTokensMainJava);
});
test("test token types correct", () => {
    const correctTokens = [JavaLexer.PUBLIC, JavaLexer.WS, JavaLexer.CLASS, JavaLexer.WS, JavaLexer.IDENTIFIER, JavaLexer.LBRACE,
    JavaLexer.PUBLIC, JavaLexer.WS, JavaLexer.STATIC, JavaLexer.WS, JavaLexer.VOID, JavaLexer.WS,
    JavaLexer.IDENTIFIER, JavaLexer.LPAREN, JavaLexer.IDENTIFIER, JavaLexer.LBRACK, JavaLexer.RBRACK,
    JavaLexer.WS, JavaLexer.IDENTIFIER, JavaLexer.RPAREN, JavaLexer.LBRACE, JavaLexer.IDENTIFIER, JavaLexer.DOT,
    JavaLexer.IDENTIFIER, JavaLexer.DOT, JavaLexer.IDENTIFIER, JavaLexer.LPAREN, JavaLexer.STRING_LITERAL, JavaLexer.RPAREN,
    JavaLexer.SEMI, JavaLexer.RBRACE, JavaLexer.RBRACE, JavaLexer.EOF];

    let tokenTypes = tokens.map((x) => x.type);
    expect(tokenTypes).toStrictEqual(correctTokens);
    expect(correctTokens.length).toBe(numberTokensMainJava)
})
test("test java parser", () => {
    var parser = new JavaParser();
    const filepath = "testDir/commented_class.java";
    let res = parser.parse(filepath);
    expect(res.getTopParent().getName()).toBe(filepath);
    expect(res.getName()).toBe(filepath);
    expect(res.getChildren().length).toBe(3);
    let firstClass = res.getChildren()[0];
    expect(firstClass.getTopParent().getName()).toBe(filepath);


    expect(firstClass.getName()).toBe("Main");
    expect(firstClass.getComment()).not.toBe(null);
    let firstClassChildren = (firstClass as ClassComponent).getChildren();
    expect(firstClassChildren.length).toBe(3);
    expect(firstClass.getQualifiedName()).toBe("Main")


    let mainMethod = firstClassChildren[0] as MethodComponent
    expect(mainMethod.getName()).toBe("main");
    expect(mainMethod.getComment()).not.toBe(null);
    expect(mainMethod.getParams().length).toBe(1);
    let mainMethodParams = mainMethod.getParams();
    expect(mainMethodParams[0].name).toBe("args");
    expect(mainMethodParams[0].type).toBe("String[]");
    expect(mainMethod.getComponentMetaInformation().isPublic()).toBeTruthy();
    expect(mainMethod.getQualifiedName()).toBe("Main.main")
    expect(mainMethod.getTopParent().getName()).toBe(filepath);


    let field = firstClassChildren[1] as SingleMemberComponent
    expect(field.getName()).toBe("field");
    expect(field.getComment()).toBeNull();
    expect(field.getReturnType()).toBe("int");
    expect(field.getComponentMetaInformation().isPublic()).toBeFalsy();
    expect(field.getQualifiedName()).toBe("Main.field")
    expect(field.getTopParent().getName()).toBe(filepath);

    let interfaceChild = firstClassChildren[2] as ClassComponent;
    expect(interfaceChild).not.toBeNull();
    expect(interfaceChild.getName()).toBe("ISimpleInterface");
    let interfaceData = interfaceChild.getComponentMetaInformation()
    expect(interfaceData.isPublic()).toBeFalsy();
    expect(interfaceChild.getSuperTypes()).toStrictEqual(["IAnotherInterface"]);
    expect(interfaceChild.getQualifiedName()).toBe("Main.ISimpleInterface")
    expect(interfaceChild.getTopParent().getName()).toBe(filepath);

    expect(interfaceChild.getChildren()).toHaveLength(1);
    let interfaceMethod = interfaceChild.getChildren()[0] as MethodComponent;
    expect(interfaceMethod.getName()).toBe("testMethod");
    expect(interfaceMethod.getReturnType()).toBe("void");
    expect(interfaceMethod.getParams()).toHaveLength(1);
    let interfaceMethodParam = interfaceMethod.getParams()[0];
    expect(interfaceMethodParam).toStrictEqual({ type: "double", name: "arg" });
    expect(interfaceMethod.getQualifiedName()).toBe("Main.ISimpleInterface.testMethod")
    expect(interfaceMethod.getTopParent().getName()).toBe(filepath);


    let secondClass = res.getChildren()[1] as ClassComponent;
    expect(secondClass.getName()).toBe("SecondClass");
    expect(secondClass.getComment()).toBeNull();
    let secondClassChildren = (secondClass as ClassComponent).getChildren();
    expect(secondClassChildren).toHaveLength(3);
    let superClasses = ["Object", "List<Integer>"];
    expect(secondClass.getSuperTypes()).toStrictEqual(superClasses);
    expect(secondClass.getQualifiedName()).toBe("SecondClass")
    expect(secondClass.getTopParent().getName()).toBe(filepath);


    let testMethod = secondClassChildren[0] as MethodComponent;
    expect(testMethod.getName()).toBe("test");
    expect(testMethod.getComponentMetaInformation().isPublic()).toBeTruthy();
    expect(testMethod.getParams()).toHaveLength(1);
    expect(testMethod.getReturnType()).toBe("void");
    let testMethodParam = testMethod.getParams()[0];
    expect(testMethodParam.name).toBe("a");
    expect(testMethodParam.type).toBe("int");
    expect(testMethod.getQualifiedName()).toBe("SecondClass.test")
    expect(testMethod.getTopParent().getName()).toBe(filepath);


    let halloMethod = secondClassChildren[1] as MethodComponent;
    expect(halloMethod.getName()).toBe("hallo");
    expect(halloMethod.getReturnType()).toBe("String");
    expect(halloMethod.getComponentMetaInformation().isPublic()).toBeFalsy();
    expect(halloMethod.getParams()).toHaveLength(0);
    expect(halloMethod.getQualifiedName()).toBe("SecondClass.hallo")
    expect(halloMethod.getTopParent().getName()).toBe(filepath);


    let multipleFields = secondClassChildren[2] as GroupedMemberComponent
    expect(multipleFields).not.toBeNull();
    expect(multipleFields.getReturnType()).toBe("int");
    expect(multipleFields.getChildNames()).toHaveLength(2);
    let fieldChild1 = multipleFields.getChildNames()[0];
    expect(fieldChild1).toBe("multiple");

    let fieldChild2 = multipleFields.getChildNames()[1];
    expect(fieldChild2).toBe("many");
    expect(multipleFields.getQualifiedName()).toBe("SecondClass.multiple,many")
    expect(multipleFields.getTopParent().getName()).toBe(filepath);


    let thirdClass = res.getChildren()[2] as ClassComponent;
    expect(thirdClass.getName()).toBe("ThirdClass");
    expect(thirdClass.getComment()).toBeNull();
    expect(thirdClass.getChildren()).toHaveLength(1);
    expect(thirdClass.getQualifiedName()).toBe("ThirdClass")
    expect(thirdClass.getTopParent().getName()).toBe(filepath);


    let constructor = thirdClass.getChildren()[0] as MethodComponent;
    expect(constructor.getName()).toBe("constructor");
    expect(constructor.getParams()).toHaveLength(1);
    let constructorParam = constructor.getParams()[0];
    expect(constructorParam).toStrictEqual({ type: "float", name: "pr" });
    expect(constructor.getQualifiedName()).toBe("ThirdClass.constructor")
    expect(constructor.getTopParent().getName()).toBe(filepath);


});
test("test javadoc parser", () => {
    const testComment = "/**\n" +
        "This is test method\n" +
        "it has many features\n" +
        "@return a positive number\n" +
        "@param a a parameter\n" +
        "@throws Exception an exception\n" +"to be thrown\n*/";
    let parser = new JavadocParser();
    let comment = parser.parseCommentText(testComment);
    expect(comment.getGeneralDescription()).not.toBeNull();
    let descriptionLines = comment.getGeneralDescription()?.split("\n");
    expect(descriptionLines).toHaveLength(2);
    expect(comment.getTags()).toHaveLength(3);

    let returnTag = comment.getTags()[0];
    expect(returnTag.getKind()).toBe("@return");
    expect(returnTag.getParam()).toBeNull();
    expect(returnTag.getDescription()).toBe("a positive number");

    let paramTag = comment.getTags()[1];
    expect(paramTag.getKind()).toBe("@param");
    expect(paramTag.getParam()).toBe("a");
    expect(paramTag.getDescription()).toBe("a parameter");

    let throwTag = comment.getTags()[2];
    expect(throwTag.getKind()).toBe("@throws");
    expect(throwTag.getParam()).toBe("Exception");
    expect(throwTag.getDescription()).toBe("an exception\nto be thrown");
});