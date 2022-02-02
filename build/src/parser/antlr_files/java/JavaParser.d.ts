import { ATN } from "antlr4ts/atn/ATN";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { JavaParserVisitor } from "./JavaParserVisitor";
export declare class JavaParser extends Parser {
    static readonly ABSTRACT = 1;
    static readonly ASSERT = 2;
    static readonly BOOLEAN = 3;
    static readonly BREAK = 4;
    static readonly BYTE = 5;
    static readonly CASE = 6;
    static readonly CATCH = 7;
    static readonly CHAR = 8;
    static readonly CLASS = 9;
    static readonly CONST = 10;
    static readonly CONTINUE = 11;
    static readonly DEFAULT = 12;
    static readonly DO = 13;
    static readonly DOUBLE = 14;
    static readonly ELSE = 15;
    static readonly ENUM = 16;
    static readonly EXTENDS = 17;
    static readonly FINAL = 18;
    static readonly FINALLY = 19;
    static readonly FLOAT = 20;
    static readonly FOR = 21;
    static readonly IF = 22;
    static readonly GOTO = 23;
    static readonly IMPLEMENTS = 24;
    static readonly IMPORT = 25;
    static readonly INSTANCEOF = 26;
    static readonly INT = 27;
    static readonly INTERFACE = 28;
    static readonly LONG = 29;
    static readonly NATIVE = 30;
    static readonly NEW = 31;
    static readonly PACKAGE = 32;
    static readonly PRIVATE = 33;
    static readonly PROTECTED = 34;
    static readonly PUBLIC = 35;
    static readonly RETURN = 36;
    static readonly SHORT = 37;
    static readonly STATIC = 38;
    static readonly STRICTFP = 39;
    static readonly SUPER = 40;
    static readonly SWITCH = 41;
    static readonly SYNCHRONIZED = 42;
    static readonly THIS = 43;
    static readonly THROW = 44;
    static readonly THROWS = 45;
    static readonly TRANSIENT = 46;
    static readonly TRY = 47;
    static readonly VOID = 48;
    static readonly VOLATILE = 49;
    static readonly WHILE = 50;
    static readonly DECIMAL_LITERAL = 51;
    static readonly HEX_LITERAL = 52;
    static readonly OCT_LITERAL = 53;
    static readonly BINARY_LITERAL = 54;
    static readonly FLOAT_LITERAL = 55;
    static readonly HEX_FLOAT_LITERAL = 56;
    static readonly BOOL_LITERAL = 57;
    static readonly CHAR_LITERAL = 58;
    static readonly STRING_LITERAL = 59;
    static readonly NULL_LITERAL = 60;
    static readonly LPAREN = 61;
    static readonly RPAREN = 62;
    static readonly LBRACE = 63;
    static readonly RBRACE = 64;
    static readonly LBRACK = 65;
    static readonly RBRACK = 66;
    static readonly SEMI = 67;
    static readonly COMMA = 68;
    static readonly DOT = 69;
    static readonly ASSIGN = 70;
    static readonly GT = 71;
    static readonly LT = 72;
    static readonly BANG = 73;
    static readonly TILDE = 74;
    static readonly QUESTION = 75;
    static readonly COLON = 76;
    static readonly EQUAL = 77;
    static readonly LE = 78;
    static readonly GE = 79;
    static readonly NOTEQUAL = 80;
    static readonly AND = 81;
    static readonly OR = 82;
    static readonly INC = 83;
    static readonly DEC = 84;
    static readonly ADD = 85;
    static readonly SUB = 86;
    static readonly MUL = 87;
    static readonly DIV = 88;
    static readonly BITAND = 89;
    static readonly BITOR = 90;
    static readonly CARET = 91;
    static readonly MOD = 92;
    static readonly ADD_ASSIGN = 93;
    static readonly SUB_ASSIGN = 94;
    static readonly MUL_ASSIGN = 95;
    static readonly DIV_ASSIGN = 96;
    static readonly AND_ASSIGN = 97;
    static readonly OR_ASSIGN = 98;
    static readonly XOR_ASSIGN = 99;
    static readonly MOD_ASSIGN = 100;
    static readonly LSHIFT_ASSIGN = 101;
    static readonly RSHIFT_ASSIGN = 102;
    static readonly URSHIFT_ASSIGN = 103;
    static readonly ARROW = 104;
    static readonly COLONCOLON = 105;
    static readonly AT = 106;
    static readonly ELLIPSIS = 107;
    static readonly WS = 108;
    static readonly JCOMMENT = 109;
    static readonly COMMENT = 110;
    static readonly LINE_COMMENT = 111;
    static readonly IDENTIFIER = 112;
    static readonly RULE_compilationUnit = 0;
    static readonly RULE_packageDeclaration = 1;
    static readonly RULE_importDeclaration = 2;
    static readonly RULE_typeDeclaration = 3;
    static readonly RULE_modifier = 4;
    static readonly RULE_classOrInterfaceModifier = 5;
    static readonly RULE_variableModifier = 6;
    static readonly RULE_classDeclaration = 7;
    static readonly RULE_extendClass = 8;
    static readonly RULE_implementInterfaces = 9;
    static readonly RULE_typeParameters = 10;
    static readonly RULE_typeParameter = 11;
    static readonly RULE_typeBound = 12;
    static readonly RULE_enumDeclaration = 13;
    static readonly RULE_enumConstants = 14;
    static readonly RULE_enumConstant = 15;
    static readonly RULE_enumBodyDeclarations = 16;
    static readonly RULE_interfaceDeclaration = 17;
    static readonly RULE_extendInterface = 18;
    static readonly RULE_comment = 19;
    static readonly RULE_classBody = 20;
    static readonly RULE_interfaceBody = 21;
    static readonly RULE_classBodyDeclaration = 22;
    static readonly RULE_memberDeclaration = 23;
    static readonly RULE_methodDeclaration = 24;
    static readonly RULE_throwList = 25;
    static readonly RULE_methodBody = 26;
    static readonly RULE_typeTypeOrVoid = 27;
    static readonly RULE_genericMethodDeclaration = 28;
    static readonly RULE_genericConstructorDeclaration = 29;
    static readonly RULE_constructorDeclaration = 30;
    static readonly RULE_fieldDeclaration = 31;
    static readonly RULE_interfaceBodyDeclaration = 32;
    static readonly RULE_interfaceMemberDeclaration = 33;
    static readonly RULE_constDeclaration = 34;
    static readonly RULE_constantDeclarator = 35;
    static readonly RULE_interfaceMethodDeclaration = 36;
    static readonly RULE_interfaceMethodModifier = 37;
    static readonly RULE_genericInterfaceMethodDeclaration = 38;
    static readonly RULE_variableDeclarators = 39;
    static readonly RULE_variableDeclarator = 40;
    static readonly RULE_variableDeclaratorId = 41;
    static readonly RULE_variableInitializer = 42;
    static readonly RULE_arrayInitializer = 43;
    static readonly RULE_classOrInterfaceType = 44;
    static readonly RULE_typeArgument = 45;
    static readonly RULE_qualifiedNameList = 46;
    static readonly RULE_formalParameters = 47;
    static readonly RULE_formalParameterList = 48;
    static readonly RULE_formalParameter = 49;
    static readonly RULE_lastFormalParameter = 50;
    static readonly RULE_qualifiedName = 51;
    static readonly RULE_literal = 52;
    static readonly RULE_integerLiteral = 53;
    static readonly RULE_floatLiteral = 54;
    static readonly RULE_altAnnotationQualifiedName = 55;
    static readonly RULE_annotation = 56;
    static readonly RULE_elementValuePairs = 57;
    static readonly RULE_elementValuePair = 58;
    static readonly RULE_elementValue = 59;
    static readonly RULE_elementValueArrayInitializer = 60;
    static readonly RULE_annotationTypeDeclaration = 61;
    static readonly RULE_annotationTypeBody = 62;
    static readonly RULE_annotationTypeElementDeclaration = 63;
    static readonly RULE_annotationTypeElementRest = 64;
    static readonly RULE_annotationMethodOrConstantRest = 65;
    static readonly RULE_annotationMethodRest = 66;
    static readonly RULE_annotationConstantRest = 67;
    static readonly RULE_defaultValue = 68;
    static readonly RULE_block = 69;
    static readonly RULE_blockStatement = 70;
    static readonly RULE_localVariableDeclaration = 71;
    static readonly RULE_localTypeDeclaration = 72;
    static readonly RULE_statement = 73;
    static readonly RULE_catchClause = 74;
    static readonly RULE_catchType = 75;
    static readonly RULE_finallyBlock = 76;
    static readonly RULE_resourceSpecification = 77;
    static readonly RULE_resources = 78;
    static readonly RULE_resource = 79;
    static readonly RULE_switchBlockStatementGroup = 80;
    static readonly RULE_switchLabel = 81;
    static readonly RULE_forControl = 82;
    static readonly RULE_forInit = 83;
    static readonly RULE_enhancedForControl = 84;
    static readonly RULE_parExpression = 85;
    static readonly RULE_expressionList = 86;
    static readonly RULE_methodCall = 87;
    static readonly RULE_expression = 88;
    static readonly RULE_lambdaExpression = 89;
    static readonly RULE_lambdaParameters = 90;
    static readonly RULE_lambdaBody = 91;
    static readonly RULE_primary = 92;
    static readonly RULE_classType = 93;
    static readonly RULE_creator = 94;
    static readonly RULE_createdName = 95;
    static readonly RULE_innerCreator = 96;
    static readonly RULE_arrayCreatorRest = 97;
    static readonly RULE_classCreatorRest = 98;
    static readonly RULE_explicitGenericInvocation = 99;
    static readonly RULE_typeArgumentsOrDiamond = 100;
    static readonly RULE_nonWildcardTypeArgumentsOrDiamond = 101;
    static readonly RULE_nonWildcardTypeArguments = 102;
    static readonly RULE_typeList = 103;
    static readonly RULE_typeType = 104;
    static readonly RULE_primitiveType = 105;
    static readonly RULE_typeArguments = 106;
    static readonly RULE_superSuffix = 107;
    static readonly RULE_explicitGenericInvocationSuffix = 108;
    static readonly RULE_arguments = 109;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    compilationUnit(): CompilationUnitContext;
    packageDeclaration(): PackageDeclarationContext;
    importDeclaration(): ImportDeclarationContext;
    typeDeclaration(): TypeDeclarationContext;
    modifier(): ModifierContext;
    classOrInterfaceModifier(): ClassOrInterfaceModifierContext;
    variableModifier(): VariableModifierContext;
    classDeclaration(): ClassDeclarationContext;
    extendClass(): ExtendClassContext;
    implementInterfaces(): ImplementInterfacesContext;
    typeParameters(): TypeParametersContext;
    typeParameter(): TypeParameterContext;
    typeBound(): TypeBoundContext;
    enumDeclaration(): EnumDeclarationContext;
    enumConstants(): EnumConstantsContext;
    enumConstant(): EnumConstantContext;
    enumBodyDeclarations(): EnumBodyDeclarationsContext;
    interfaceDeclaration(): InterfaceDeclarationContext;
    extendInterface(): ExtendInterfaceContext;
    comment(): CommentContext;
    classBody(): ClassBodyContext;
    interfaceBody(): InterfaceBodyContext;
    classBodyDeclaration(): ClassBodyDeclarationContext;
    memberDeclaration(): MemberDeclarationContext;
    methodDeclaration(): MethodDeclarationContext;
    throwList(): ThrowListContext;
    methodBody(): MethodBodyContext;
    typeTypeOrVoid(): TypeTypeOrVoidContext;
    genericMethodDeclaration(): GenericMethodDeclarationContext;
    genericConstructorDeclaration(): GenericConstructorDeclarationContext;
    constructorDeclaration(): ConstructorDeclarationContext;
    fieldDeclaration(): FieldDeclarationContext;
    interfaceBodyDeclaration(): InterfaceBodyDeclarationContext;
    interfaceMemberDeclaration(): InterfaceMemberDeclarationContext;
    constDeclaration(): ConstDeclarationContext;
    constantDeclarator(): ConstantDeclaratorContext;
    interfaceMethodDeclaration(): InterfaceMethodDeclarationContext;
    interfaceMethodModifier(): InterfaceMethodModifierContext;
    genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext;
    variableDeclarators(): VariableDeclaratorsContext;
    variableDeclarator(): VariableDeclaratorContext;
    variableDeclaratorId(): VariableDeclaratorIdContext;
    variableInitializer(): VariableInitializerContext;
    arrayInitializer(): ArrayInitializerContext;
    classOrInterfaceType(): ClassOrInterfaceTypeContext;
    typeArgument(): TypeArgumentContext;
    qualifiedNameList(): QualifiedNameListContext;
    formalParameters(): FormalParametersContext;
    formalParameterList(): FormalParameterListContext;
    formalParameter(): FormalParameterContext;
    lastFormalParameter(): LastFormalParameterContext;
    qualifiedName(): QualifiedNameContext;
    literal(): LiteralContext;
    integerLiteral(): IntegerLiteralContext;
    floatLiteral(): FloatLiteralContext;
    altAnnotationQualifiedName(): AltAnnotationQualifiedNameContext;
    annotation(): AnnotationContext;
    elementValuePairs(): ElementValuePairsContext;
    elementValuePair(): ElementValuePairContext;
    elementValue(): ElementValueContext;
    elementValueArrayInitializer(): ElementValueArrayInitializerContext;
    annotationTypeDeclaration(): AnnotationTypeDeclarationContext;
    annotationTypeBody(): AnnotationTypeBodyContext;
    annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext;
    annotationTypeElementRest(): AnnotationTypeElementRestContext;
    annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext;
    annotationMethodRest(): AnnotationMethodRestContext;
    annotationConstantRest(): AnnotationConstantRestContext;
    defaultValue(): DefaultValueContext;
    block(): BlockContext;
    blockStatement(): BlockStatementContext;
    localVariableDeclaration(): LocalVariableDeclarationContext;
    localTypeDeclaration(): LocalTypeDeclarationContext;
    statement(): StatementContext;
    catchClause(): CatchClauseContext;
    catchType(): CatchTypeContext;
    finallyBlock(): FinallyBlockContext;
    resourceSpecification(): ResourceSpecificationContext;
    resources(): ResourcesContext;
    resource(): ResourceContext;
    switchBlockStatementGroup(): SwitchBlockStatementGroupContext;
    switchLabel(): SwitchLabelContext;
    forControl(): ForControlContext;
    forInit(): ForInitContext;
    enhancedForControl(): EnhancedForControlContext;
    parExpression(): ParExpressionContext;
    expressionList(): ExpressionListContext;
    methodCall(): MethodCallContext;
    expression(): ExpressionContext;
    expression(_p: number): ExpressionContext;
    lambdaExpression(): LambdaExpressionContext;
    lambdaParameters(): LambdaParametersContext;
    lambdaBody(): LambdaBodyContext;
    primary(): PrimaryContext;
    classType(): ClassTypeContext;
    creator(): CreatorContext;
    createdName(): CreatedNameContext;
    innerCreator(): InnerCreatorContext;
    arrayCreatorRest(): ArrayCreatorRestContext;
    classCreatorRest(): ClassCreatorRestContext;
    explicitGenericInvocation(): ExplicitGenericInvocationContext;
    typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext;
    nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext;
    nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext;
    typeList(): TypeListContext;
    typeType(): TypeTypeContext;
    primitiveType(): PrimitiveTypeContext;
    typeArguments(): TypeArgumentsContext;
    superSuffix(): SuperSuffixContext;
    explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext;
    arguments(): ArgumentsContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private expression_sempred;
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    private static readonly _serializedATNSegment2;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class CompilationUnitContext extends ParserRuleContext {
    EOF(): TerminalNode;
    packageDeclaration(): PackageDeclarationContext | undefined;
    importDeclaration(): ImportDeclarationContext[];
    importDeclaration(i: number): ImportDeclarationContext;
    typeDeclaration(): TypeDeclarationContext[];
    typeDeclaration(i: number): TypeDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class PackageDeclarationContext extends ParserRuleContext {
    PACKAGE(): TerminalNode;
    qualifiedName(): QualifiedNameContext;
    SEMI(): TerminalNode;
    comment(): CommentContext | undefined;
    annotation(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ImportDeclarationContext extends ParserRuleContext {
    IMPORT(): TerminalNode;
    qualifiedName(): QualifiedNameContext;
    SEMI(): TerminalNode;
    comment(): CommentContext | undefined;
    STATIC(): TerminalNode | undefined;
    DOT(): TerminalNode | undefined;
    MUL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class TypeDeclarationContext extends ParserRuleContext {
    classDeclaration(): ClassDeclarationContext | undefined;
    enumDeclaration(): EnumDeclarationContext | undefined;
    interfaceDeclaration(): InterfaceDeclarationContext | undefined;
    annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined;
    comment(): CommentContext | undefined;
    classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
    classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
    SEMI(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ModifierContext extends ParserRuleContext {
    classOrInterfaceModifier(): ClassOrInterfaceModifierContext | undefined;
    NATIVE(): TerminalNode | undefined;
    SYNCHRONIZED(): TerminalNode | undefined;
    TRANSIENT(): TerminalNode | undefined;
    VOLATILE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ClassOrInterfaceModifierContext extends ParserRuleContext {
    annotation(): AnnotationContext | undefined;
    PUBLIC(): TerminalNode | undefined;
    PROTECTED(): TerminalNode | undefined;
    PRIVATE(): TerminalNode | undefined;
    STATIC(): TerminalNode | undefined;
    ABSTRACT(): TerminalNode | undefined;
    FINAL(): TerminalNode | undefined;
    STRICTFP(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class VariableModifierContext extends ParserRuleContext {
    FINAL(): TerminalNode | undefined;
    annotation(): AnnotationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ClassDeclarationContext extends ParserRuleContext {
    CLASS(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    classBody(): ClassBodyContext;
    typeParameters(): TypeParametersContext | undefined;
    extendClass(): ExtendClassContext | undefined;
    implementInterfaces(): ImplementInterfacesContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ExtendClassContext extends ParserRuleContext {
    EXTENDS(): TerminalNode;
    typeType(): TypeTypeContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ImplementInterfacesContext extends ParserRuleContext {
    IMPLEMENTS(): TerminalNode | undefined;
    typeList(): TypeListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class TypeParametersContext extends ParserRuleContext {
    LT(): TerminalNode;
    typeParameter(): TypeParameterContext[];
    typeParameter(i: number): TypeParameterContext;
    GT(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class TypeParameterContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    annotation(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    EXTENDS(): TerminalNode | undefined;
    typeBound(): TypeBoundContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class TypeBoundContext extends ParserRuleContext {
    typeType(): TypeTypeContext[];
    typeType(i: number): TypeTypeContext;
    BITAND(): TerminalNode[];
    BITAND(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class EnumDeclarationContext extends ParserRuleContext {
    ENUM(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    IMPLEMENTS(): TerminalNode | undefined;
    typeList(): TypeListContext | undefined;
    enumConstants(): EnumConstantsContext | undefined;
    COMMA(): TerminalNode | undefined;
    enumBodyDeclarations(): EnumBodyDeclarationsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class EnumConstantsContext extends ParserRuleContext {
    enumConstant(): EnumConstantContext[];
    enumConstant(i: number): EnumConstantContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class EnumConstantContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    comment(): CommentContext | undefined;
    annotation(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    arguments(): ArgumentsContext | undefined;
    classBody(): ClassBodyContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class EnumBodyDeclarationsContext extends ParserRuleContext {
    SEMI(): TerminalNode;
    classBodyDeclaration(): ClassBodyDeclarationContext[];
    classBodyDeclaration(i: number): ClassBodyDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class InterfaceDeclarationContext extends ParserRuleContext {
    INTERFACE(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    interfaceBody(): InterfaceBodyContext;
    typeParameters(): TypeParametersContext | undefined;
    extendInterface(): ExtendInterfaceContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ExtendInterfaceContext extends ParserRuleContext {
    EXTENDS(): TerminalNode;
    typeList(): TypeListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class CommentContext extends ParserRuleContext {
    JCOMMENT(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ClassBodyContext extends ParserRuleContext {
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    classBodyDeclaration(): ClassBodyDeclarationContext[];
    classBodyDeclaration(i: number): ClassBodyDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class InterfaceBodyContext extends ParserRuleContext {
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    interfaceBodyDeclaration(): InterfaceBodyDeclarationContext[];
    interfaceBodyDeclaration(i: number): InterfaceBodyDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ClassBodyDeclarationContext extends ParserRuleContext {
    SEMI(): TerminalNode | undefined;
    block(): BlockContext | undefined;
    STATIC(): TerminalNode | undefined;
    memberDeclaration(): MemberDeclarationContext | undefined;
    comment(): CommentContext | undefined;
    modifier(): ModifierContext[];
    modifier(i: number): ModifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class MemberDeclarationContext extends ParserRuleContext {
    methodDeclaration(): MethodDeclarationContext | undefined;
    genericMethodDeclaration(): GenericMethodDeclarationContext | undefined;
    fieldDeclaration(): FieldDeclarationContext | undefined;
    constructorDeclaration(): ConstructorDeclarationContext | undefined;
    genericConstructorDeclaration(): GenericConstructorDeclarationContext | undefined;
    interfaceDeclaration(): InterfaceDeclarationContext | undefined;
    annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined;
    classDeclaration(): ClassDeclarationContext | undefined;
    enumDeclaration(): EnumDeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class MethodDeclarationContext extends ParserRuleContext {
    typeTypeOrVoid(): TypeTypeOrVoidContext;
    IDENTIFIER(): TerminalNode;
    formalParameters(): FormalParametersContext;
    methodBody(): MethodBodyContext;
    LBRACK(): TerminalNode[];
    LBRACK(i: number): TerminalNode;
    RBRACK(): TerminalNode[];
    RBRACK(i: number): TerminalNode;
    throwList(): ThrowListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ThrowListContext extends ParserRuleContext {
    THROWS(): TerminalNode | undefined;
    qualifiedNameList(): QualifiedNameListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class MethodBodyContext extends ParserRuleContext {
    block(): BlockContext | undefined;
    SEMI(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class TypeTypeOrVoidContext extends ParserRuleContext {
    typeType(): TypeTypeContext | undefined;
    VOID(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class GenericMethodDeclarationContext extends ParserRuleContext {
    typeParameters(): TypeParametersContext;
    methodDeclaration(): MethodDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class GenericConstructorDeclarationContext extends ParserRuleContext {
    typeParameters(): TypeParametersContext;
    constructorDeclaration(): ConstructorDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ConstructorDeclarationContext extends ParserRuleContext {
    _constructorBody: BlockContext;
    IDENTIFIER(): TerminalNode;
    formalParameters(): FormalParametersContext;
    block(): BlockContext;
    THROWS(): TerminalNode | undefined;
    qualifiedNameList(): QualifiedNameListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class FieldDeclarationContext extends ParserRuleContext {
    typeType(): TypeTypeContext;
    variableDeclarators(): VariableDeclaratorsContext;
    SEMI(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class InterfaceBodyDeclarationContext extends ParserRuleContext {
    interfaceMemberDeclaration(): InterfaceMemberDeclarationContext | undefined;
    comment(): CommentContext | undefined;
    modifier(): ModifierContext[];
    modifier(i: number): ModifierContext;
    SEMI(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class InterfaceMemberDeclarationContext extends ParserRuleContext {
    constDeclaration(): ConstDeclarationContext | undefined;
    interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | undefined;
    genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext | undefined;
    interfaceDeclaration(): InterfaceDeclarationContext | undefined;
    annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined;
    classDeclaration(): ClassDeclarationContext | undefined;
    enumDeclaration(): EnumDeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ConstDeclarationContext extends ParserRuleContext {
    typeType(): TypeTypeContext;
    constantDeclarator(): ConstantDeclaratorContext[];
    constantDeclarator(i: number): ConstantDeclaratorContext;
    SEMI(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ConstantDeclaratorContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    ASSIGN(): TerminalNode;
    variableInitializer(): VariableInitializerContext;
    LBRACK(): TerminalNode[];
    LBRACK(i: number): TerminalNode;
    RBRACK(): TerminalNode[];
    RBRACK(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class InterfaceMethodDeclarationContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    formalParameters(): FormalParametersContext;
    methodBody(): MethodBodyContext;
    typeTypeOrVoid(): TypeTypeOrVoidContext | undefined;
    typeParameters(): TypeParametersContext | undefined;
    interfaceMethodModifier(): InterfaceMethodModifierContext[];
    interfaceMethodModifier(i: number): InterfaceMethodModifierContext;
    LBRACK(): TerminalNode[];
    LBRACK(i: number): TerminalNode;
    RBRACK(): TerminalNode[];
    RBRACK(i: number): TerminalNode;
    throwList(): ThrowListContext | undefined;
    annotation(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class InterfaceMethodModifierContext extends ParserRuleContext {
    annotation(): AnnotationContext | undefined;
    PUBLIC(): TerminalNode | undefined;
    ABSTRACT(): TerminalNode | undefined;
    DEFAULT(): TerminalNode | undefined;
    STATIC(): TerminalNode | undefined;
    STRICTFP(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class GenericInterfaceMethodDeclarationContext extends ParserRuleContext {
    typeParameters(): TypeParametersContext;
    interfaceMethodDeclaration(): InterfaceMethodDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class VariableDeclaratorsContext extends ParserRuleContext {
    variableDeclarator(): VariableDeclaratorContext[];
    variableDeclarator(i: number): VariableDeclaratorContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class VariableDeclaratorContext extends ParserRuleContext {
    variableDeclaratorId(): VariableDeclaratorIdContext;
    ASSIGN(): TerminalNode | undefined;
    variableInitializer(): VariableInitializerContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class VariableDeclaratorIdContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    LBRACK(): TerminalNode[];
    LBRACK(i: number): TerminalNode;
    RBRACK(): TerminalNode[];
    RBRACK(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class VariableInitializerContext extends ParserRuleContext {
    arrayInitializer(): ArrayInitializerContext | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ArrayInitializerContext extends ParserRuleContext {
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    variableInitializer(): VariableInitializerContext[];
    variableInitializer(i: number): VariableInitializerContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ClassOrInterfaceTypeContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    typeArguments(): TypeArgumentsContext[];
    typeArguments(i: number): TypeArgumentsContext;
    DOT(): TerminalNode[];
    DOT(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class TypeArgumentContext extends ParserRuleContext {
    typeType(): TypeTypeContext | undefined;
    QUESTION(): TerminalNode | undefined;
    annotation(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    EXTENDS(): TerminalNode | undefined;
    SUPER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class QualifiedNameListContext extends ParserRuleContext {
    qualifiedName(): QualifiedNameContext[];
    qualifiedName(i: number): QualifiedNameContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class FormalParametersContext extends ParserRuleContext {
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    formalParameterList(): FormalParameterListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class FormalParameterListContext extends ParserRuleContext {
    formalParameter(): FormalParameterContext[];
    formalParameter(i: number): FormalParameterContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    lastFormalParameter(): LastFormalParameterContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class FormalParameterContext extends ParserRuleContext {
    typeType(): TypeTypeContext;
    variableDeclaratorId(): VariableDeclaratorIdContext;
    variableModifier(): VariableModifierContext[];
    variableModifier(i: number): VariableModifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class LastFormalParameterContext extends ParserRuleContext {
    typeType(): TypeTypeContext;
    ELLIPSIS(): TerminalNode;
    variableDeclaratorId(): VariableDeclaratorIdContext;
    variableModifier(): VariableModifierContext[];
    variableModifier(i: number): VariableModifierContext;
    annotation(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class QualifiedNameContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    DOT(): TerminalNode[];
    DOT(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class LiteralContext extends ParserRuleContext {
    integerLiteral(): IntegerLiteralContext | undefined;
    floatLiteral(): FloatLiteralContext | undefined;
    CHAR_LITERAL(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    BOOL_LITERAL(): TerminalNode | undefined;
    NULL_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class IntegerLiteralContext extends ParserRuleContext {
    DECIMAL_LITERAL(): TerminalNode | undefined;
    HEX_LITERAL(): TerminalNode | undefined;
    OCT_LITERAL(): TerminalNode | undefined;
    BINARY_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class FloatLiteralContext extends ParserRuleContext {
    FLOAT_LITERAL(): TerminalNode | undefined;
    HEX_FLOAT_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class AltAnnotationQualifiedNameContext extends ParserRuleContext {
    AT(): TerminalNode;
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    DOT(): TerminalNode[];
    DOT(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class AnnotationContext extends ParserRuleContext {
    AT(): TerminalNode | undefined;
    qualifiedName(): QualifiedNameContext | undefined;
    altAnnotationQualifiedName(): AltAnnotationQualifiedNameContext | undefined;
    LPAREN(): TerminalNode | undefined;
    RPAREN(): TerminalNode | undefined;
    elementValuePairs(): ElementValuePairsContext | undefined;
    elementValue(): ElementValueContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ElementValuePairsContext extends ParserRuleContext {
    elementValuePair(): ElementValuePairContext[];
    elementValuePair(i: number): ElementValuePairContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ElementValuePairContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    ASSIGN(): TerminalNode;
    elementValue(): ElementValueContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ElementValueContext extends ParserRuleContext {
    expression(): ExpressionContext | undefined;
    annotation(): AnnotationContext | undefined;
    elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ElementValueArrayInitializerContext extends ParserRuleContext {
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    elementValue(): ElementValueContext[];
    elementValue(i: number): ElementValueContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class AnnotationTypeDeclarationContext extends ParserRuleContext {
    AT(): TerminalNode;
    INTERFACE(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    annotationTypeBody(): AnnotationTypeBodyContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class AnnotationTypeBodyContext extends ParserRuleContext {
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext[];
    annotationTypeElementDeclaration(i: number): AnnotationTypeElementDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
    annotationTypeElementRest(): AnnotationTypeElementRestContext | undefined;
    modifier(): ModifierContext[];
    modifier(i: number): ModifierContext;
    SEMI(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class AnnotationTypeElementRestContext extends ParserRuleContext {
    typeType(): TypeTypeContext | undefined;
    annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext | undefined;
    SEMI(): TerminalNode | undefined;
    classDeclaration(): ClassDeclarationContext | undefined;
    interfaceDeclaration(): InterfaceDeclarationContext | undefined;
    enumDeclaration(): EnumDeclarationContext | undefined;
    annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class AnnotationMethodOrConstantRestContext extends ParserRuleContext {
    annotationMethodRest(): AnnotationMethodRestContext | undefined;
    annotationConstantRest(): AnnotationConstantRestContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class AnnotationMethodRestContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    defaultValue(): DefaultValueContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class AnnotationConstantRestContext extends ParserRuleContext {
    variableDeclarators(): VariableDeclaratorsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class DefaultValueContext extends ParserRuleContext {
    DEFAULT(): TerminalNode;
    elementValue(): ElementValueContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class BlockContext extends ParserRuleContext {
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    blockStatement(): BlockStatementContext[];
    blockStatement(i: number): BlockStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class BlockStatementContext extends ParserRuleContext {
    localVariableDeclaration(): LocalVariableDeclarationContext | undefined;
    SEMI(): TerminalNode | undefined;
    statement(): StatementContext | undefined;
    localTypeDeclaration(): LocalTypeDeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class LocalVariableDeclarationContext extends ParserRuleContext {
    typeType(): TypeTypeContext;
    variableDeclarators(): VariableDeclaratorsContext;
    variableModifier(): VariableModifierContext[];
    variableModifier(i: number): VariableModifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class LocalTypeDeclarationContext extends ParserRuleContext {
    classDeclaration(): ClassDeclarationContext | undefined;
    interfaceDeclaration(): InterfaceDeclarationContext | undefined;
    classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
    classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
    SEMI(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class StatementContext extends ParserRuleContext {
    _blockLabel: BlockContext;
    _statementExpression: ExpressionContext;
    _identifierLabel: Token;
    block(): BlockContext | undefined;
    ASSERT(): TerminalNode | undefined;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    SEMI(): TerminalNode | undefined;
    COLON(): TerminalNode | undefined;
    IF(): TerminalNode | undefined;
    parExpression(): ParExpressionContext | undefined;
    statement(): StatementContext[];
    statement(i: number): StatementContext;
    ELSE(): TerminalNode | undefined;
    FOR(): TerminalNode | undefined;
    LPAREN(): TerminalNode | undefined;
    forControl(): ForControlContext | undefined;
    RPAREN(): TerminalNode | undefined;
    WHILE(): TerminalNode | undefined;
    DO(): TerminalNode | undefined;
    TRY(): TerminalNode | undefined;
    finallyBlock(): FinallyBlockContext | undefined;
    catchClause(): CatchClauseContext[];
    catchClause(i: number): CatchClauseContext;
    resourceSpecification(): ResourceSpecificationContext | undefined;
    SWITCH(): TerminalNode | undefined;
    LBRACE(): TerminalNode | undefined;
    RBRACE(): TerminalNode | undefined;
    switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
    switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
    switchLabel(): SwitchLabelContext[];
    switchLabel(i: number): SwitchLabelContext;
    SYNCHRONIZED(): TerminalNode | undefined;
    RETURN(): TerminalNode | undefined;
    THROW(): TerminalNode | undefined;
    BREAK(): TerminalNode | undefined;
    IDENTIFIER(): TerminalNode | undefined;
    CONTINUE(): TerminalNode | undefined;
    comment(): CommentContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class CatchClauseContext extends ParserRuleContext {
    CATCH(): TerminalNode;
    LPAREN(): TerminalNode;
    catchType(): CatchTypeContext;
    IDENTIFIER(): TerminalNode;
    RPAREN(): TerminalNode;
    block(): BlockContext;
    variableModifier(): VariableModifierContext[];
    variableModifier(i: number): VariableModifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class CatchTypeContext extends ParserRuleContext {
    qualifiedName(): QualifiedNameContext[];
    qualifiedName(i: number): QualifiedNameContext;
    BITOR(): TerminalNode[];
    BITOR(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class FinallyBlockContext extends ParserRuleContext {
    FINALLY(): TerminalNode;
    block(): BlockContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ResourceSpecificationContext extends ParserRuleContext {
    LPAREN(): TerminalNode;
    resources(): ResourcesContext;
    RPAREN(): TerminalNode;
    SEMI(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ResourcesContext extends ParserRuleContext {
    resource(): ResourceContext[];
    resource(i: number): ResourceContext;
    SEMI(): TerminalNode[];
    SEMI(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ResourceContext extends ParserRuleContext {
    classOrInterfaceType(): ClassOrInterfaceTypeContext;
    variableDeclaratorId(): VariableDeclaratorIdContext;
    ASSIGN(): TerminalNode;
    expression(): ExpressionContext;
    variableModifier(): VariableModifierContext[];
    variableModifier(i: number): VariableModifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class SwitchBlockStatementGroupContext extends ParserRuleContext {
    switchLabel(): SwitchLabelContext[];
    switchLabel(i: number): SwitchLabelContext;
    blockStatement(): BlockStatementContext[];
    blockStatement(i: number): BlockStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class SwitchLabelContext extends ParserRuleContext {
    _constantExpression: ExpressionContext;
    _enumConstantName: Token;
    CASE(): TerminalNode | undefined;
    COLON(): TerminalNode;
    expression(): ExpressionContext | undefined;
    IDENTIFIER(): TerminalNode | undefined;
    DEFAULT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ForControlContext extends ParserRuleContext {
    _forUpdate: ExpressionListContext;
    enhancedForControl(): EnhancedForControlContext | undefined;
    SEMI(): TerminalNode[];
    SEMI(i: number): TerminalNode;
    forInit(): ForInitContext | undefined;
    expression(): ExpressionContext | undefined;
    expressionList(): ExpressionListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ForInitContext extends ParserRuleContext {
    localVariableDeclaration(): LocalVariableDeclarationContext | undefined;
    expressionList(): ExpressionListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class EnhancedForControlContext extends ParserRuleContext {
    typeType(): TypeTypeContext;
    variableDeclaratorId(): VariableDeclaratorIdContext;
    COLON(): TerminalNode;
    expression(): ExpressionContext;
    variableModifier(): VariableModifierContext[];
    variableModifier(i: number): VariableModifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ParExpressionContext extends ParserRuleContext {
    LPAREN(): TerminalNode;
    expression(): ExpressionContext;
    RPAREN(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ExpressionListContext extends ParserRuleContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class MethodCallContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode | undefined;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    expressionList(): ExpressionListContext | undefined;
    THIS(): TerminalNode | undefined;
    SUPER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ExpressionContext extends ParserRuleContext {
    _prefix: Token;
    _bop: Token;
    _postfix: Token;
    primary(): PrimaryContext | undefined;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    DOT(): TerminalNode | undefined;
    IDENTIFIER(): TerminalNode | undefined;
    methodCall(): MethodCallContext | undefined;
    THIS(): TerminalNode | undefined;
    NEW(): TerminalNode | undefined;
    innerCreator(): InnerCreatorContext | undefined;
    SUPER(): TerminalNode | undefined;
    superSuffix(): SuperSuffixContext | undefined;
    explicitGenericInvocation(): ExplicitGenericInvocationContext | undefined;
    nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined;
    LBRACK(): TerminalNode | undefined;
    RBRACK(): TerminalNode | undefined;
    creator(): CreatorContext | undefined;
    LPAREN(): TerminalNode | undefined;
    typeType(): TypeTypeContext[];
    typeType(i: number): TypeTypeContext;
    RPAREN(): TerminalNode | undefined;
    annotation(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    BITAND(): TerminalNode[];
    BITAND(i: number): TerminalNode;
    INC(): TerminalNode | undefined;
    DEC(): TerminalNode | undefined;
    ADD(): TerminalNode | undefined;
    SUB(): TerminalNode | undefined;
    TILDE(): TerminalNode | undefined;
    BANG(): TerminalNode | undefined;
    MUL(): TerminalNode | undefined;
    DIV(): TerminalNode | undefined;
    MOD(): TerminalNode | undefined;
    LT(): TerminalNode[];
    LT(i: number): TerminalNode;
    GT(): TerminalNode[];
    GT(i: number): TerminalNode;
    LE(): TerminalNode | undefined;
    GE(): TerminalNode | undefined;
    INSTANCEOF(): TerminalNode | undefined;
    EQUAL(): TerminalNode | undefined;
    NOTEQUAL(): TerminalNode | undefined;
    CARET(): TerminalNode | undefined;
    BITOR(): TerminalNode | undefined;
    AND(): TerminalNode | undefined;
    OR(): TerminalNode | undefined;
    COLON(): TerminalNode | undefined;
    QUESTION(): TerminalNode | undefined;
    ASSIGN(): TerminalNode | undefined;
    ADD_ASSIGN(): TerminalNode | undefined;
    SUB_ASSIGN(): TerminalNode | undefined;
    MUL_ASSIGN(): TerminalNode | undefined;
    DIV_ASSIGN(): TerminalNode | undefined;
    AND_ASSIGN(): TerminalNode | undefined;
    OR_ASSIGN(): TerminalNode | undefined;
    XOR_ASSIGN(): TerminalNode | undefined;
    RSHIFT_ASSIGN(): TerminalNode | undefined;
    URSHIFT_ASSIGN(): TerminalNode | undefined;
    LSHIFT_ASSIGN(): TerminalNode | undefined;
    MOD_ASSIGN(): TerminalNode | undefined;
    lambdaExpression(): LambdaExpressionContext | undefined;
    COLONCOLON(): TerminalNode | undefined;
    typeArguments(): TypeArgumentsContext | undefined;
    classType(): ClassTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class LambdaExpressionContext extends ParserRuleContext {
    lambdaParameters(): LambdaParametersContext;
    ARROW(): TerminalNode;
    lambdaBody(): LambdaBodyContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class LambdaParametersContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    LPAREN(): TerminalNode | undefined;
    RPAREN(): TerminalNode | undefined;
    formalParameterList(): FormalParameterListContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class LambdaBodyContext extends ParserRuleContext {
    expression(): ExpressionContext | undefined;
    block(): BlockContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class PrimaryContext extends ParserRuleContext {
    LPAREN(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    RPAREN(): TerminalNode | undefined;
    THIS(): TerminalNode | undefined;
    SUPER(): TerminalNode | undefined;
    literal(): LiteralContext | undefined;
    IDENTIFIER(): TerminalNode | undefined;
    typeTypeOrVoid(): TypeTypeOrVoidContext | undefined;
    DOT(): TerminalNode | undefined;
    CLASS(): TerminalNode | undefined;
    nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined;
    explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext | undefined;
    arguments(): ArgumentsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ClassTypeContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined;
    DOT(): TerminalNode | undefined;
    annotation(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    typeArguments(): TypeArgumentsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class CreatorContext extends ParserRuleContext {
    nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined;
    createdName(): CreatedNameContext;
    classCreatorRest(): ClassCreatorRestContext | undefined;
    arrayCreatorRest(): ArrayCreatorRestContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class CreatedNameContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext[];
    typeArgumentsOrDiamond(i: number): TypeArgumentsOrDiamondContext;
    DOT(): TerminalNode[];
    DOT(i: number): TerminalNode;
    primitiveType(): PrimitiveTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class InnerCreatorContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    classCreatorRest(): ClassCreatorRestContext;
    nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ArrayCreatorRestContext extends ParserRuleContext {
    LBRACK(): TerminalNode[];
    LBRACK(i: number): TerminalNode;
    RBRACK(): TerminalNode[];
    RBRACK(i: number): TerminalNode;
    arrayInitializer(): ArrayInitializerContext | undefined;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ClassCreatorRestContext extends ParserRuleContext {
    arguments(): ArgumentsContext;
    classBody(): ClassBodyContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ExplicitGenericInvocationContext extends ParserRuleContext {
    nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext;
    explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class TypeArgumentsOrDiamondContext extends ParserRuleContext {
    LT(): TerminalNode | undefined;
    GT(): TerminalNode | undefined;
    typeArguments(): TypeArgumentsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class NonWildcardTypeArgumentsOrDiamondContext extends ParserRuleContext {
    LT(): TerminalNode | undefined;
    GT(): TerminalNode | undefined;
    nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class NonWildcardTypeArgumentsContext extends ParserRuleContext {
    LT(): TerminalNode;
    typeList(): TypeListContext;
    GT(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class TypeListContext extends ParserRuleContext {
    typeType(): TypeTypeContext[];
    typeType(i: number): TypeTypeContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class TypeTypeContext extends ParserRuleContext {
    classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined;
    primitiveType(): PrimitiveTypeContext | undefined;
    annotation(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    LBRACK(): TerminalNode[];
    LBRACK(i: number): TerminalNode;
    RBRACK(): TerminalNode[];
    RBRACK(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class PrimitiveTypeContext extends ParserRuleContext {
    BOOLEAN(): TerminalNode | undefined;
    CHAR(): TerminalNode | undefined;
    BYTE(): TerminalNode | undefined;
    SHORT(): TerminalNode | undefined;
    INT(): TerminalNode | undefined;
    LONG(): TerminalNode | undefined;
    FLOAT(): TerminalNode | undefined;
    DOUBLE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class TypeArgumentsContext extends ParserRuleContext {
    LT(): TerminalNode;
    typeArgument(): TypeArgumentContext[];
    typeArgument(i: number): TypeArgumentContext;
    GT(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class SuperSuffixContext extends ParserRuleContext {
    arguments(): ArgumentsContext | undefined;
    DOT(): TerminalNode | undefined;
    IDENTIFIER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ExplicitGenericInvocationSuffixContext extends ParserRuleContext {
    SUPER(): TerminalNode | undefined;
    superSuffix(): SuperSuffixContext | undefined;
    IDENTIFIER(): TerminalNode | undefined;
    arguments(): ArgumentsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
export declare class ArgumentsContext extends ParserRuleContext {
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    expressionList(): ExpressionListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: JavaParserVisitor<Result>): Result;
}
