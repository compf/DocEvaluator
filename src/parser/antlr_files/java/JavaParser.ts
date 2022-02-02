// Generated from JavaParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { JavaParserVisitor } from "./JavaParserVisitor";


export class JavaParser extends Parser {
	public static readonly ABSTRACT = 1;
	public static readonly ASSERT = 2;
	public static readonly BOOLEAN = 3;
	public static readonly BREAK = 4;
	public static readonly BYTE = 5;
	public static readonly CASE = 6;
	public static readonly CATCH = 7;
	public static readonly CHAR = 8;
	public static readonly CLASS = 9;
	public static readonly CONST = 10;
	public static readonly CONTINUE = 11;
	public static readonly DEFAULT = 12;
	public static readonly DO = 13;
	public static readonly DOUBLE = 14;
	public static readonly ELSE = 15;
	public static readonly ENUM = 16;
	public static readonly EXTENDS = 17;
	public static readonly FINAL = 18;
	public static readonly FINALLY = 19;
	public static readonly FLOAT = 20;
	public static readonly FOR = 21;
	public static readonly IF = 22;
	public static readonly GOTO = 23;
	public static readonly IMPLEMENTS = 24;
	public static readonly IMPORT = 25;
	public static readonly INSTANCEOF = 26;
	public static readonly INT = 27;
	public static readonly INTERFACE = 28;
	public static readonly LONG = 29;
	public static readonly NATIVE = 30;
	public static readonly NEW = 31;
	public static readonly PACKAGE = 32;
	public static readonly PRIVATE = 33;
	public static readonly PROTECTED = 34;
	public static readonly PUBLIC = 35;
	public static readonly RETURN = 36;
	public static readonly SHORT = 37;
	public static readonly STATIC = 38;
	public static readonly STRICTFP = 39;
	public static readonly SUPER = 40;
	public static readonly SWITCH = 41;
	public static readonly SYNCHRONIZED = 42;
	public static readonly THIS = 43;
	public static readonly THROW = 44;
	public static readonly THROWS = 45;
	public static readonly TRANSIENT = 46;
	public static readonly TRY = 47;
	public static readonly VOID = 48;
	public static readonly VOLATILE = 49;
	public static readonly WHILE = 50;
	public static readonly DECIMAL_LITERAL = 51;
	public static readonly HEX_LITERAL = 52;
	public static readonly OCT_LITERAL = 53;
	public static readonly BINARY_LITERAL = 54;
	public static readonly FLOAT_LITERAL = 55;
	public static readonly HEX_FLOAT_LITERAL = 56;
	public static readonly BOOL_LITERAL = 57;
	public static readonly CHAR_LITERAL = 58;
	public static readonly STRING_LITERAL = 59;
	public static readonly NULL_LITERAL = 60;
	public static readonly LPAREN = 61;
	public static readonly RPAREN = 62;
	public static readonly LBRACE = 63;
	public static readonly RBRACE = 64;
	public static readonly LBRACK = 65;
	public static readonly RBRACK = 66;
	public static readonly SEMI = 67;
	public static readonly COMMA = 68;
	public static readonly DOT = 69;
	public static readonly ASSIGN = 70;
	public static readonly GT = 71;
	public static readonly LT = 72;
	public static readonly BANG = 73;
	public static readonly TILDE = 74;
	public static readonly QUESTION = 75;
	public static readonly COLON = 76;
	public static readonly EQUAL = 77;
	public static readonly LE = 78;
	public static readonly GE = 79;
	public static readonly NOTEQUAL = 80;
	public static readonly AND = 81;
	public static readonly OR = 82;
	public static readonly INC = 83;
	public static readonly DEC = 84;
	public static readonly ADD = 85;
	public static readonly SUB = 86;
	public static readonly MUL = 87;
	public static readonly DIV = 88;
	public static readonly BITAND = 89;
	public static readonly BITOR = 90;
	public static readonly CARET = 91;
	public static readonly MOD = 92;
	public static readonly ADD_ASSIGN = 93;
	public static readonly SUB_ASSIGN = 94;
	public static readonly MUL_ASSIGN = 95;
	public static readonly DIV_ASSIGN = 96;
	public static readonly AND_ASSIGN = 97;
	public static readonly OR_ASSIGN = 98;
	public static readonly XOR_ASSIGN = 99;
	public static readonly MOD_ASSIGN = 100;
	public static readonly LSHIFT_ASSIGN = 101;
	public static readonly RSHIFT_ASSIGN = 102;
	public static readonly URSHIFT_ASSIGN = 103;
	public static readonly ARROW = 104;
	public static readonly COLONCOLON = 105;
	public static readonly AT = 106;
	public static readonly ELLIPSIS = 107;
	public static readonly WS = 108;
	public static readonly JCOMMENT = 109;
	public static readonly COMMENT = 110;
	public static readonly LINE_COMMENT = 111;
	public static readonly IDENTIFIER = 112;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_packageDeclaration = 1;
	public static readonly RULE_importDeclaration = 2;
	public static readonly RULE_typeDeclaration = 3;
	public static readonly RULE_modifier = 4;
	public static readonly RULE_classOrInterfaceModifier = 5;
	public static readonly RULE_variableModifier = 6;
	public static readonly RULE_classDeclaration = 7;
	public static readonly RULE_extendClass = 8;
	public static readonly RULE_implementInterfaces = 9;
	public static readonly RULE_typeParameters = 10;
	public static readonly RULE_typeParameter = 11;
	public static readonly RULE_typeBound = 12;
	public static readonly RULE_enumDeclaration = 13;
	public static readonly RULE_enumConstants = 14;
	public static readonly RULE_enumConstant = 15;
	public static readonly RULE_enumBodyDeclarations = 16;
	public static readonly RULE_interfaceDeclaration = 17;
	public static readonly RULE_extendInterface = 18;
	public static readonly RULE_comment = 19;
	public static readonly RULE_classBody = 20;
	public static readonly RULE_interfaceBody = 21;
	public static readonly RULE_classBodyDeclaration = 22;
	public static readonly RULE_memberDeclaration = 23;
	public static readonly RULE_methodDeclaration = 24;
	public static readonly RULE_throwList = 25;
	public static readonly RULE_methodBody = 26;
	public static readonly RULE_typeTypeOrVoid = 27;
	public static readonly RULE_genericMethodDeclaration = 28;
	public static readonly RULE_genericConstructorDeclaration = 29;
	public static readonly RULE_constructorDeclaration = 30;
	public static readonly RULE_fieldDeclaration = 31;
	public static readonly RULE_interfaceBodyDeclaration = 32;
	public static readonly RULE_interfaceMemberDeclaration = 33;
	public static readonly RULE_constDeclaration = 34;
	public static readonly RULE_constantDeclarator = 35;
	public static readonly RULE_interfaceMethodDeclaration = 36;
	public static readonly RULE_interfaceMethodModifier = 37;
	public static readonly RULE_genericInterfaceMethodDeclaration = 38;
	public static readonly RULE_variableDeclarators = 39;
	public static readonly RULE_variableDeclarator = 40;
	public static readonly RULE_variableDeclaratorId = 41;
	public static readonly RULE_variableInitializer = 42;
	public static readonly RULE_arrayInitializer = 43;
	public static readonly RULE_classOrInterfaceType = 44;
	public static readonly RULE_typeArgument = 45;
	public static readonly RULE_qualifiedNameList = 46;
	public static readonly RULE_formalParameters = 47;
	public static readonly RULE_formalParameterList = 48;
	public static readonly RULE_formalParameter = 49;
	public static readonly RULE_lastFormalParameter = 50;
	public static readonly RULE_qualifiedName = 51;
	public static readonly RULE_literal = 52;
	public static readonly RULE_integerLiteral = 53;
	public static readonly RULE_floatLiteral = 54;
	public static readonly RULE_altAnnotationQualifiedName = 55;
	public static readonly RULE_annotation = 56;
	public static readonly RULE_elementValuePairs = 57;
	public static readonly RULE_elementValuePair = 58;
	public static readonly RULE_elementValue = 59;
	public static readonly RULE_elementValueArrayInitializer = 60;
	public static readonly RULE_annotationTypeDeclaration = 61;
	public static readonly RULE_annotationTypeBody = 62;
	public static readonly RULE_annotationTypeElementDeclaration = 63;
	public static readonly RULE_annotationTypeElementRest = 64;
	public static readonly RULE_annotationMethodOrConstantRest = 65;
	public static readonly RULE_annotationMethodRest = 66;
	public static readonly RULE_annotationConstantRest = 67;
	public static readonly RULE_defaultValue = 68;
	public static readonly RULE_block = 69;
	public static readonly RULE_blockStatement = 70;
	public static readonly RULE_localVariableDeclaration = 71;
	public static readonly RULE_localTypeDeclaration = 72;
	public static readonly RULE_statement = 73;
	public static readonly RULE_catchClause = 74;
	public static readonly RULE_catchType = 75;
	public static readonly RULE_finallyBlock = 76;
	public static readonly RULE_resourceSpecification = 77;
	public static readonly RULE_resources = 78;
	public static readonly RULE_resource = 79;
	public static readonly RULE_switchBlockStatementGroup = 80;
	public static readonly RULE_switchLabel = 81;
	public static readonly RULE_forControl = 82;
	public static readonly RULE_forInit = 83;
	public static readonly RULE_enhancedForControl = 84;
	public static readonly RULE_parExpression = 85;
	public static readonly RULE_expressionList = 86;
	public static readonly RULE_methodCall = 87;
	public static readonly RULE_expression = 88;
	public static readonly RULE_lambdaExpression = 89;
	public static readonly RULE_lambdaParameters = 90;
	public static readonly RULE_lambdaBody = 91;
	public static readonly RULE_primary = 92;
	public static readonly RULE_classType = 93;
	public static readonly RULE_creator = 94;
	public static readonly RULE_createdName = 95;
	public static readonly RULE_innerCreator = 96;
	public static readonly RULE_arrayCreatorRest = 97;
	public static readonly RULE_classCreatorRest = 98;
	public static readonly RULE_explicitGenericInvocation = 99;
	public static readonly RULE_typeArgumentsOrDiamond = 100;
	public static readonly RULE_nonWildcardTypeArgumentsOrDiamond = 101;
	public static readonly RULE_nonWildcardTypeArguments = 102;
	public static readonly RULE_typeList = 103;
	public static readonly RULE_typeType = 104;
	public static readonly RULE_primitiveType = 105;
	public static readonly RULE_typeArguments = 106;
	public static readonly RULE_superSuffix = 107;
	public static readonly RULE_explicitGenericInvocationSuffix = 108;
	public static readonly RULE_arguments = 109;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "packageDeclaration", "importDeclaration", "typeDeclaration", 
		"modifier", "classOrInterfaceModifier", "variableModifier", "classDeclaration", 
		"extendClass", "implementInterfaces", "typeParameters", "typeParameter", 
		"typeBound", "enumDeclaration", "enumConstants", "enumConstant", "enumBodyDeclarations", 
		"interfaceDeclaration", "extendInterface", "comment", "classBody", "interfaceBody", 
		"classBodyDeclaration", "memberDeclaration", "methodDeclaration", "throwList", 
		"methodBody", "typeTypeOrVoid", "genericMethodDeclaration", "genericConstructorDeclaration", 
		"constructorDeclaration", "fieldDeclaration", "interfaceBodyDeclaration", 
		"interfaceMemberDeclaration", "constDeclaration", "constantDeclarator", 
		"interfaceMethodDeclaration", "interfaceMethodModifier", "genericInterfaceMethodDeclaration", 
		"variableDeclarators", "variableDeclarator", "variableDeclaratorId", "variableInitializer", 
		"arrayInitializer", "classOrInterfaceType", "typeArgument", "qualifiedNameList", 
		"formalParameters", "formalParameterList", "formalParameter", "lastFormalParameter", 
		"qualifiedName", "literal", "integerLiteral", "floatLiteral", "altAnnotationQualifiedName", 
		"annotation", "elementValuePairs", "elementValuePair", "elementValue", 
		"elementValueArrayInitializer", "annotationTypeDeclaration", "annotationTypeBody", 
		"annotationTypeElementDeclaration", "annotationTypeElementRest", "annotationMethodOrConstantRest", 
		"annotationMethodRest", "annotationConstantRest", "defaultValue", "block", 
		"blockStatement", "localVariableDeclaration", "localTypeDeclaration", 
		"statement", "catchClause", "catchType", "finallyBlock", "resourceSpecification", 
		"resources", "resource", "switchBlockStatementGroup", "switchLabel", "forControl", 
		"forInit", "enhancedForControl", "parExpression", "expressionList", "methodCall", 
		"expression", "lambdaExpression", "lambdaParameters", "lambdaBody", "primary", 
		"classType", "creator", "createdName", "innerCreator", "arrayCreatorRest", 
		"classCreatorRest", "explicitGenericInvocation", "typeArgumentsOrDiamond", 
		"nonWildcardTypeArgumentsOrDiamond", "nonWildcardTypeArguments", "typeList", 
		"typeType", "primitiveType", "typeArguments", "superSuffix", "explicitGenericInvocationSuffix", 
		"arguments",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'abstract'", "'assert'", "'boolean'", "'break'", "'byte'", 
		"'case'", "'catch'", "'char'", "'class'", "'const'", "'continue'", "'default'", 
		"'do'", "'double'", "'else'", "'enum'", "'extends'", "'final'", "'finally'", 
		"'float'", "'for'", "'if'", "'goto'", "'implements'", "'import'", "'instanceof'", 
		"'int'", "'interface'", "'long'", "'native'", "'new'", "'package'", "'private'", 
		"'protected'", "'public'", "'return'", "'short'", "'static'", "'strictfp'", 
		"'super'", "'switch'", "'synchronized'", "'this'", "'throw'", "'throws'", 
		"'transient'", "'try'", "'void'", "'volatile'", "'while'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'null'", "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", 
		"','", "'.'", "'='", "'>'", "'<'", "'!'", "'~'", "'?'", "':'", "'=='", 
		"'<='", "'>='", "'!='", "'&&'", "'||'", "'++'", "'--'", "'+'", "'-'", 
		"'*'", "'/'", "'&'", "'|'", "'^'", "'%'", "'+='", "'-='", "'*='", "'/='", 
		"'&='", "'|='", "'^='", "'%='", "'<<='", "'>>='", "'>>>='", "'->'", "'::'", 
		"'@'", "'...'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", "CASE", "CATCH", 
		"CHAR", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO", "DOUBLE", "ELSE", 
		"ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT", "FOR", "IF", "GOTO", "IMPLEMENTS", 
		"IMPORT", "INSTANCEOF", "INT", "INTERFACE", "LONG", "NATIVE", "NEW", "PACKAGE", 
		"PRIVATE", "PROTECTED", "PUBLIC", "RETURN", "SHORT", "STATIC", "STRICTFP", 
		"SUPER", "SWITCH", "SYNCHRONIZED", "THIS", "THROW", "THROWS", "TRANSIENT", 
		"TRY", "VOID", "VOLATILE", "WHILE", "DECIMAL_LITERAL", "HEX_LITERAL", 
		"OCT_LITERAL", "BINARY_LITERAL", "FLOAT_LITERAL", "HEX_FLOAT_LITERAL", 
		"BOOL_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", "NULL_LITERAL", "LPAREN", 
		"RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", 
		"ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL", "LE", 
		"GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL", "DIV", 
		"BITAND", "BITOR", "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", 
		"DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", 
		"RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "ARROW", "COLONCOLON", "AT", "ELLIPSIS", 
		"WS", "JCOMMENT", "COMMENT", "LINE_COMMENT", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JavaParser._LITERAL_NAMES, JavaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JavaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "JavaParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return JavaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JavaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JavaParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JavaParser.RULE_compilationUnit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 220;
				this.packageDeclaration();
				}
				break;
			}
			this.state = 226;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 223;
					this.importDeclaration();
					}
					}
				}
				this.state = 228;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.CLASS) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.INTERFACE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)))) !== 0) || _la === JavaParser.SEMI || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.JCOMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0)) {
				{
				{
				this.state = 229;
				this.typeDeclaration();
				}
				}
				this.state = 234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 235;
			this.match(JavaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		let _localctx: PackageDeclarationContext = new PackageDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JavaParser.RULE_packageDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.JCOMMENT) {
				{
				{
				this.state = 237;
				this.comment();
				}
				}
				this.state = 242;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				{
				this.state = 243;
				this.annotation();
				}
				}
				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 249;
			this.match(JavaParser.PACKAGE);
			this.state = 250;
			this.qualifiedName();
			this.state = 251;
			this.match(JavaParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JavaParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.JCOMMENT) {
				{
				{
				this.state = 253;
				this.comment();
				}
				}
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 259;
			this.match(JavaParser.IMPORT);
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.STATIC) {
				{
				this.state = 260;
				this.match(JavaParser.STATIC);
				}
			}

			this.state = 263;
			this.qualifiedName();
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.DOT) {
				{
				this.state = 264;
				this.match(JavaParser.DOT);
				this.state = 265;
				this.match(JavaParser.MUL);
				}
			}

			this.state = 268;
			this.match(JavaParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JavaParser.RULE_typeDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 289;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.ABSTRACT:
			case JavaParser.CLASS:
			case JavaParser.ENUM:
			case JavaParser.FINAL:
			case JavaParser.INTERFACE:
			case JavaParser.PRIVATE:
			case JavaParser.PROTECTED:
			case JavaParser.PUBLIC:
			case JavaParser.STATIC:
			case JavaParser.STRICTFP:
			case JavaParser.AT:
			case JavaParser.JCOMMENT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.JCOMMENT) {
					{
					{
					this.state = 270;
					this.comment();
					}
					}
					this.state = 275;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 279;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 276;
						this.classOrInterfaceModifier();
						}
						}
					}
					this.state = 281;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				}
				this.state = 286;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.CLASS:
					{
					this.state = 282;
					this.classDeclaration();
					}
					break;
				case JavaParser.ENUM:
					{
					this.state = 283;
					this.enumDeclaration();
					}
					break;
				case JavaParser.INTERFACE:
					{
					this.state = 284;
					this.interfaceDeclaration();
					}
					break;
				case JavaParser.AT:
					{
					this.state = 285;
					this.annotationTypeDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case JavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 288;
				this.match(JavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JavaParser.RULE_modifier);
		try {
			this.state = 296;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.ABSTRACT:
			case JavaParser.FINAL:
			case JavaParser.PRIVATE:
			case JavaParser.PROTECTED:
			case JavaParser.PUBLIC:
			case JavaParser.STATIC:
			case JavaParser.STRICTFP:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 291;
				this.classOrInterfaceModifier();
				}
				break;
			case JavaParser.NATIVE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 292;
				this.match(JavaParser.NATIVE);
				}
				break;
			case JavaParser.SYNCHRONIZED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 293;
				this.match(JavaParser.SYNCHRONIZED);
				}
				break;
			case JavaParser.TRANSIENT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 294;
				this.match(JavaParser.TRANSIENT);
				}
				break;
			case JavaParser.VOLATILE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 295;
				this.match(JavaParser.VOLATILE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
		let _localctx: ClassOrInterfaceModifierContext = new ClassOrInterfaceModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JavaParser.RULE_classOrInterfaceModifier);
		try {
			this.state = 306;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 298;
				this.annotation();
				}
				break;
			case JavaParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 299;
				this.match(JavaParser.PUBLIC);
				}
				break;
			case JavaParser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 300;
				this.match(JavaParser.PROTECTED);
				}
				break;
			case JavaParser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 301;
				this.match(JavaParser.PRIVATE);
				}
				break;
			case JavaParser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 302;
				this.match(JavaParser.STATIC);
				}
				break;
			case JavaParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 303;
				this.match(JavaParser.ABSTRACT);
				}
				break;
			case JavaParser.FINAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 304;
				this.match(JavaParser.FINAL);
				}
				break;
			case JavaParser.STRICTFP:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 305;
				this.match(JavaParser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableModifier(): VariableModifierContext {
		let _localctx: VariableModifierContext = new VariableModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JavaParser.RULE_variableModifier);
		try {
			this.state = 310;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.FINAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 308;
				this.match(JavaParser.FINAL);
				}
				break;
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 309;
				this.annotation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, JavaParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this.match(JavaParser.CLASS);
			this.state = 313;
			this.match(JavaParser.IDENTIFIER);
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LT) {
				{
				this.state = 314;
				this.typeParameters();
				}
			}

			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.EXTENDS) {
				{
				this.state = 317;
				this.extendClass();
				}
			}

			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.IMPLEMENTS) {
				{
				this.state = 320;
				this.implementInterfaces();
				}
			}

			this.state = 323;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extendClass(): ExtendClassContext {
		let _localctx: ExtendClassContext = new ExtendClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, JavaParser.RULE_extendClass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.match(JavaParser.EXTENDS);
			this.state = 326;
			this.typeType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implementInterfaces(): ImplementInterfacesContext {
		let _localctx: ImplementInterfacesContext = new ImplementInterfacesContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, JavaParser.RULE_implementInterfaces);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 328;
			this.match(JavaParser.IMPLEMENTS);
			this.state = 329;
			this.typeList();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, JavaParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this.match(JavaParser.LT);
			this.state = 332;
			this.typeParameter();
			this.state = 337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 333;
				this.match(JavaParser.COMMA);
				this.state = 334;
				this.typeParameter();
				}
				}
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 340;
			this.match(JavaParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, JavaParser.RULE_typeParameter);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 342;
					this.annotation();
					}
					}
				}
				this.state = 347;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 348;
			this.match(JavaParser.IDENTIFIER);
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.EXTENDS) {
				{
				this.state = 349;
				this.match(JavaParser.EXTENDS);
				this.state = 353;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 350;
						this.annotation();
						}
						}
					}
					this.state = 355;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				}
				this.state = 356;
				this.typeBound();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeBound(): TypeBoundContext {
		let _localctx: TypeBoundContext = new TypeBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, JavaParser.RULE_typeBound);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 359;
			this.typeType();
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.BITAND) {
				{
				{
				this.state = 360;
				this.match(JavaParser.BITAND);
				this.state = 361;
				this.typeType();
				}
				}
				this.state = 366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, JavaParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			this.match(JavaParser.ENUM);
			this.state = 368;
			this.match(JavaParser.IDENTIFIER);
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.IMPLEMENTS) {
				{
				this.state = 369;
				this.match(JavaParser.IMPLEMENTS);
				this.state = 370;
				this.typeList();
				}
			}

			this.state = 373;
			this.match(JavaParser.LBRACE);
			this.state = 375;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.JCOMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0)) {
				{
				this.state = 374;
				this.enumConstants();
				}
			}

			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.COMMA) {
				{
				this.state = 377;
				this.match(JavaParser.COMMA);
				}
			}

			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.SEMI) {
				{
				this.state = 380;
				this.enumBodyDeclarations();
				}
			}

			this.state = 383;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstants(): EnumConstantsContext {
		let _localctx: EnumConstantsContext = new EnumConstantsContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, JavaParser.RULE_enumConstants);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
			this.enumConstant();
			this.state = 390;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 386;
					this.match(JavaParser.COMMA);
					this.state = 387;
					this.enumConstant();
					}
					}
				}
				this.state = 392;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, JavaParser.RULE_enumConstant);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.JCOMMENT) {
				{
				{
				this.state = 393;
				this.comment();
				}
				}
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 402;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 399;
					this.annotation();
					}
					}
				}
				this.state = 404;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			}
			this.state = 405;
			this.match(JavaParser.IDENTIFIER);
			this.state = 407;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LPAREN) {
				{
				this.state = 406;
				this.arguments();
				}
			}

			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LBRACE) {
				{
				this.state = 409;
				this.classBody();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		let _localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, JavaParser.RULE_enumBodyDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 412;
			this.match(JavaParser.SEMI);
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.LT || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.JCOMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0)) {
				{
				{
				this.state = 413;
				this.classBodyDeclaration();
				}
				}
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, JavaParser.RULE_interfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this.match(JavaParser.INTERFACE);
			this.state = 420;
			this.match(JavaParser.IDENTIFIER);
			this.state = 422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LT) {
				{
				this.state = 421;
				this.typeParameters();
				}
			}

			this.state = 425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.EXTENDS) {
				{
				this.state = 424;
				this.extendInterface();
				}
			}

			this.state = 427;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extendInterface(): ExtendInterfaceContext {
		let _localctx: ExtendInterfaceContext = new ExtendInterfaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, JavaParser.RULE_extendInterface);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.match(JavaParser.EXTENDS);
			this.state = 430;
			this.typeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, JavaParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.match(JavaParser.JCOMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, JavaParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 434;
			this.match(JavaParser.LBRACE);
			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.LT || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.JCOMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0)) {
				{
				{
				this.state = 435;
				this.classBodyDeclaration();
				}
				}
				this.state = 440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 441;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, JavaParser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this.match(JavaParser.LBRACE);
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DEFAULT) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.LT || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.JCOMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0)) {
				{
				{
				this.state = 444;
				this.interfaceBodyDeclaration();
				}
				}
				this.state = 449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 450;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, JavaParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 476;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 452;
				this.match(JavaParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.JCOMMENT) {
					{
					{
					this.state = 453;
					this.comment();
					}
					}
					this.state = 458;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 460;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.STATIC) {
					{
					this.state = 459;
					this.match(JavaParser.STATIC);
					}
				}

				this.state = 462;
				this.block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.JCOMMENT) {
					{
					{
					this.state = 463;
					this.comment();
					}
					}
					this.state = 468;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 472;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 469;
						this.modifier();
						}
						}
					}
					this.state = 474;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				}
				this.state = 475;
				this.memberDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberDeclaration(): MemberDeclarationContext {
		let _localctx: MemberDeclarationContext = new MemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, JavaParser.RULE_memberDeclaration);
		try {
			this.state = 487;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 478;
				this.methodDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 479;
				this.genericMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 480;
				this.fieldDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 481;
				this.constructorDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 482;
				this.genericConstructorDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 483;
				this.interfaceDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 484;
				this.annotationTypeDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 485;
				this.classDeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 486;
				this.enumDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, JavaParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.typeTypeOrVoid();
			this.state = 490;
			this.match(JavaParser.IDENTIFIER);
			this.state = 491;
			this.formalParameters();
			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.LBRACK) {
				{
				{
				this.state = 492;
				this.match(JavaParser.LBRACK);
				this.state = 493;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 500;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.THROWS) {
				{
				this.state = 499;
				this.throwList();
				}
			}

			this.state = 502;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwList(): ThrowListContext {
		let _localctx: ThrowListContext = new ThrowListContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, JavaParser.RULE_throwList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 504;
			this.match(JavaParser.THROWS);
			this.state = 505;
			this.qualifiedNameList();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodBody(): MethodBodyContext {
		let _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, JavaParser.RULE_methodBody);
		try {
			this.state = 509;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 507;
				this.block();
				}
				break;
			case JavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 508;
				this.match(JavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		let _localctx: TypeTypeOrVoidContext = new TypeTypeOrVoidContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, JavaParser.RULE_typeTypeOrVoid);
		try {
			this.state = 513;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.SHORT:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 511;
				this.typeType();
				}
				break;
			case JavaParser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 512;
				this.match(JavaParser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericMethodDeclaration(): GenericMethodDeclarationContext {
		let _localctx: GenericMethodDeclarationContext = new GenericMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, JavaParser.RULE_genericMethodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			this.typeParameters();
			this.state = 516;
			this.methodDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext {
		let _localctx: GenericConstructorDeclarationContext = new GenericConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, JavaParser.RULE_genericConstructorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this.typeParameters();
			this.state = 519;
			this.constructorDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, JavaParser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this.match(JavaParser.IDENTIFIER);
			this.state = 522;
			this.formalParameters();
			this.state = 525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.THROWS) {
				{
				this.state = 523;
				this.match(JavaParser.THROWS);
				this.state = 524;
				this.qualifiedNameList();
				}
			}

			this.state = 527;
			_localctx._constructorBody = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, JavaParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.typeType();
			this.state = 530;
			this.variableDeclarators();
			this.state = 531;
			this.match(JavaParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext {
		let _localctx: InterfaceBodyDeclarationContext = new InterfaceBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, JavaParser.RULE_interfaceBodyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 547;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.ABSTRACT:
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.CLASS:
			case JavaParser.DEFAULT:
			case JavaParser.DOUBLE:
			case JavaParser.ENUM:
			case JavaParser.FINAL:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.INTERFACE:
			case JavaParser.LONG:
			case JavaParser.NATIVE:
			case JavaParser.PRIVATE:
			case JavaParser.PROTECTED:
			case JavaParser.PUBLIC:
			case JavaParser.SHORT:
			case JavaParser.STATIC:
			case JavaParser.STRICTFP:
			case JavaParser.SYNCHRONIZED:
			case JavaParser.TRANSIENT:
			case JavaParser.VOID:
			case JavaParser.VOLATILE:
			case JavaParser.LT:
			case JavaParser.AT:
			case JavaParser.JCOMMENT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.JCOMMENT) {
					{
					{
					this.state = 533;
					this.comment();
					}
					}
					this.state = 538;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 542;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 539;
						this.modifier();
						}
						}
					}
					this.state = 544;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
				}
				this.state = 545;
				this.interfaceMemberDeclaration();
				}
				break;
			case JavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 546;
				this.match(JavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
		let _localctx: InterfaceMemberDeclarationContext = new InterfaceMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, JavaParser.RULE_interfaceMemberDeclaration);
		try {
			this.state = 556;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 549;
				this.constDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 550;
				this.interfaceMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 551;
				this.genericInterfaceMethodDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 552;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 553;
				this.annotationTypeDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 554;
				this.classDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 555;
				this.enumDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constDeclaration(): ConstDeclarationContext {
		let _localctx: ConstDeclarationContext = new ConstDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, JavaParser.RULE_constDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this.typeType();
			this.state = 559;
			this.constantDeclarator();
			this.state = 564;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 560;
				this.match(JavaParser.COMMA);
				this.state = 561;
				this.constantDeclarator();
				}
				}
				this.state = 566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 567;
			this.match(JavaParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantDeclarator(): ConstantDeclaratorContext {
		let _localctx: ConstantDeclaratorContext = new ConstantDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, JavaParser.RULE_constantDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 569;
			this.match(JavaParser.IDENTIFIER);
			this.state = 574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.LBRACK) {
				{
				{
				this.state = 570;
				this.match(JavaParser.LBRACK);
				this.state = 571;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 577;
			this.match(JavaParser.ASSIGN);
			this.state = 578;
			this.variableInitializer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let _localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, JavaParser.RULE_interfaceMethodDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 583;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 580;
					this.interfaceMethodModifier();
					}
					}
				}
				this.state = 585;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			}
			this.state = 596;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.SHORT:
			case JavaParser.VOID:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				{
				this.state = 586;
				this.typeTypeOrVoid();
				}
				break;
			case JavaParser.LT:
				{
				this.state = 587;
				this.typeParameters();
				this.state = 591;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 588;
						this.annotation();
						}
						}
					}
					this.state = 593;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				}
				this.state = 594;
				this.typeTypeOrVoid();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 598;
			this.match(JavaParser.IDENTIFIER);
			this.state = 599;
			this.formalParameters();
			this.state = 604;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.LBRACK) {
				{
				{
				this.state = 600;
				this.match(JavaParser.LBRACK);
				this.state = 601;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 606;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 608;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.THROWS) {
				{
				this.state = 607;
				this.throwList();
				}
			}

			this.state = 610;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodModifier(): InterfaceMethodModifierContext {
		let _localctx: InterfaceMethodModifierContext = new InterfaceMethodModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, JavaParser.RULE_interfaceMethodModifier);
		try {
			this.state = 618;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 612;
				this.annotation();
				}
				break;
			case JavaParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 613;
				this.match(JavaParser.PUBLIC);
				}
				break;
			case JavaParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 614;
				this.match(JavaParser.ABSTRACT);
				}
				break;
			case JavaParser.DEFAULT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 615;
				this.match(JavaParser.DEFAULT);
				}
				break;
			case JavaParser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 616;
				this.match(JavaParser.STATIC);
				}
				break;
			case JavaParser.STRICTFP:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 617;
				this.match(JavaParser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext {
		let _localctx: GenericInterfaceMethodDeclarationContext = new GenericInterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, JavaParser.RULE_genericInterfaceMethodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 620;
			this.typeParameters();
			this.state = 621;
			this.interfaceMethodDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarators(): VariableDeclaratorsContext {
		let _localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, JavaParser.RULE_variableDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			this.variableDeclarator();
			this.state = 628;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 624;
				this.match(JavaParser.COMMA);
				this.state = 625;
				this.variableDeclarator();
				}
				}
				this.state = 630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, JavaParser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this.variableDeclaratorId();
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.ASSIGN) {
				{
				this.state = 632;
				this.match(JavaParser.ASSIGN);
				this.state = 633;
				this.variableInitializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		let _localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, JavaParser.RULE_variableDeclaratorId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this.match(JavaParser.IDENTIFIER);
			this.state = 641;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.LBRACK) {
				{
				{
				this.state = 637;
				this.match(JavaParser.LBRACK);
				this.state = 638;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, JavaParser.RULE_variableInitializer);
		try {
			this.state = 646;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 644;
				this.arrayInitializer();
				}
				break;
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.NEW:
			case JavaParser.SHORT:
			case JavaParser.SUPER:
			case JavaParser.THIS:
			case JavaParser.VOID:
			case JavaParser.DECIMAL_LITERAL:
			case JavaParser.HEX_LITERAL:
			case JavaParser.OCT_LITERAL:
			case JavaParser.BINARY_LITERAL:
			case JavaParser.FLOAT_LITERAL:
			case JavaParser.HEX_FLOAT_LITERAL:
			case JavaParser.BOOL_LITERAL:
			case JavaParser.CHAR_LITERAL:
			case JavaParser.STRING_LITERAL:
			case JavaParser.NULL_LITERAL:
			case JavaParser.LPAREN:
			case JavaParser.LT:
			case JavaParser.BANG:
			case JavaParser.TILDE:
			case JavaParser.INC:
			case JavaParser.DEC:
			case JavaParser.ADD:
			case JavaParser.SUB:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 645;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, JavaParser.RULE_arrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 648;
			this.match(JavaParser.LBRACE);
			this.state = 660;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LBRACE - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				this.state = 649;
				this.variableInitializer();
				this.state = 654;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 650;
						this.match(JavaParser.COMMA);
						this.state = 651;
						this.variableInitializer();
						}
						}
					}
					this.state = 656;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				}
				this.state = 658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.COMMA) {
					{
					this.state = 657;
					this.match(JavaParser.COMMA);
					}
				}

				}
			}

			this.state = 662;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, JavaParser.RULE_classOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 664;
			this.match(JavaParser.IDENTIFIER);
			this.state = 666;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 665;
				this.typeArguments();
				}
				break;
			}
			this.state = 675;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 668;
					this.match(JavaParser.DOT);
					this.state = 669;
					this.match(JavaParser.IDENTIFIER);
					this.state = 671;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
					case 1:
						{
						this.state = 670;
						this.typeArguments();
						}
						break;
					}
					}
					}
				}
				this.state = 677;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, JavaParser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 690;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 678;
				this.typeType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 682;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					{
					this.state = 679;
					this.annotation();
					}
					}
					this.state = 684;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 685;
				this.match(JavaParser.QUESTION);
				this.state = 688;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.EXTENDS || _la === JavaParser.SUPER) {
					{
					this.state = 686;
					_la = this._input.LA(1);
					if (!(_la === JavaParser.EXTENDS || _la === JavaParser.SUPER)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 687;
					this.typeType();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedNameList(): QualifiedNameListContext {
		let _localctx: QualifiedNameListContext = new QualifiedNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, JavaParser.RULE_qualifiedNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 692;
			this.qualifiedName();
			this.state = 697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 693;
				this.match(JavaParser.COMMA);
				this.state = 694;
				this.qualifiedName();
				}
				}
				this.state = 699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, JavaParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 700;
			this.match(JavaParser.LPAREN);
			this.state = 702;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la === JavaParser.SHORT || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				this.state = 701;
				this.formalParameterList();
				}
			}

			this.state = 704;
			this.match(JavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, JavaParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 719;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 706;
				this.formalParameter();
				this.state = 711;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 707;
						this.match(JavaParser.COMMA);
						this.state = 708;
						this.formalParameter();
						}
						}
					}
					this.state = 713;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
				}
				this.state = 716;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.COMMA) {
					{
					this.state = 714;
					this.match(JavaParser.COMMA);
					this.state = 715;
					this.lastFormalParameter();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 718;
				this.lastFormalParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, JavaParser.RULE_formalParameter);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 721;
					this.variableModifier();
					}
					}
				}
				this.state = 726;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			}
			this.state = 727;
			this.typeType();
			this.state = 728;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lastFormalParameter(): LastFormalParameterContext {
		let _localctx: LastFormalParameterContext = new LastFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, JavaParser.RULE_lastFormalParameter);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 733;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 730;
					this.variableModifier();
					}
					}
				}
				this.state = 735;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			}
			this.state = 736;
			this.typeType();
			this.state = 740;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				{
				this.state = 737;
				this.annotation();
				}
				}
				this.state = 742;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 743;
			this.match(JavaParser.ELLIPSIS);
			this.state = 744;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, JavaParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 746;
			this.match(JavaParser.IDENTIFIER);
			this.state = 751;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 747;
					this.match(JavaParser.DOT);
					this.state = 748;
					this.match(JavaParser.IDENTIFIER);
					}
					}
				}
				this.state = 753;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, JavaParser.RULE_literal);
		try {
			this.state = 760;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.DECIMAL_LITERAL:
			case JavaParser.HEX_LITERAL:
			case JavaParser.OCT_LITERAL:
			case JavaParser.BINARY_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 754;
				this.integerLiteral();
				}
				break;
			case JavaParser.FLOAT_LITERAL:
			case JavaParser.HEX_FLOAT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 755;
				this.floatLiteral();
				}
				break;
			case JavaParser.CHAR_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 756;
				this.match(JavaParser.CHAR_LITERAL);
				}
				break;
			case JavaParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 757;
				this.match(JavaParser.STRING_LITERAL);
				}
				break;
			case JavaParser.BOOL_LITERAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 758;
				this.match(JavaParser.BOOL_LITERAL);
				}
				break;
			case JavaParser.NULL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 759;
				this.match(JavaParser.NULL_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integerLiteral(): IntegerLiteralContext {
		let _localctx: IntegerLiteralContext = new IntegerLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, JavaParser.RULE_integerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 762;
			_la = this._input.LA(1);
			if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.DECIMAL_LITERAL - 51)) | (1 << (JavaParser.HEX_LITERAL - 51)) | (1 << (JavaParser.OCT_LITERAL - 51)) | (1 << (JavaParser.BINARY_LITERAL - 51)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floatLiteral(): FloatLiteralContext {
		let _localctx: FloatLiteralContext = new FloatLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, JavaParser.RULE_floatLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 764;
			_la = this._input.LA(1);
			if (!(_la === JavaParser.FLOAT_LITERAL || _la === JavaParser.HEX_FLOAT_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public altAnnotationQualifiedName(): AltAnnotationQualifiedNameContext {
		let _localctx: AltAnnotationQualifiedNameContext = new AltAnnotationQualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, JavaParser.RULE_altAnnotationQualifiedName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 770;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.IDENTIFIER) {
				{
				{
				this.state = 766;
				this.match(JavaParser.IDENTIFIER);
				this.state = 767;
				this.match(JavaParser.DOT);
				}
				}
				this.state = 772;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 773;
			this.match(JavaParser.AT);
			this.state = 774;
			this.match(JavaParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, JavaParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 779;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 776;
				this.match(JavaParser.AT);
				this.state = 777;
				this.qualifiedName();
				}
				break;

			case 2:
				{
				this.state = 778;
				this.altAnnotationQualifiedName();
				}
				break;
			}
			this.state = 787;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LPAREN) {
				{
				this.state = 781;
				this.match(JavaParser.LPAREN);
				this.state = 784;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
				case 1:
					{
					this.state = 782;
					this.elementValuePairs();
					}
					break;

				case 2:
					{
					this.state = 783;
					this.elementValue();
					}
					break;
				}
				this.state = 786;
				this.match(JavaParser.RPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePairs(): ElementValuePairsContext {
		let _localctx: ElementValuePairsContext = new ElementValuePairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, JavaParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.elementValuePair();
			this.state = 794;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 790;
				this.match(JavaParser.COMMA);
				this.state = 791;
				this.elementValuePair();
				}
				}
				this.state = 796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, JavaParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 797;
			this.match(JavaParser.IDENTIFIER);
			this.state = 798;
			this.match(JavaParser.ASSIGN);
			this.state = 799;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		let _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, JavaParser.RULE_elementValue);
		try {
			this.state = 804;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 801;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 802;
				this.annotation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 803;
				this.elementValueArrayInitializer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, JavaParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 806;
			this.match(JavaParser.LBRACE);
			this.state = 815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LBRACE - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				this.state = 807;
				this.elementValue();
				this.state = 812;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 808;
						this.match(JavaParser.COMMA);
						this.state = 809;
						this.elementValue();
						}
						}
					}
					this.state = 814;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
				}
				}
			}

			this.state = 818;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.COMMA) {
				{
				this.state = 817;
				this.match(JavaParser.COMMA);
				}
			}

			this.state = 820;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		let _localctx: AnnotationTypeDeclarationContext = new AnnotationTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, JavaParser.RULE_annotationTypeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 822;
			this.match(JavaParser.AT);
			this.state = 823;
			this.match(JavaParser.INTERFACE);
			this.state = 824;
			this.match(JavaParser.IDENTIFIER);
			this.state = 825;
			this.annotationTypeBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeBody(): AnnotationTypeBodyContext {
		let _localctx: AnnotationTypeBodyContext = new AnnotationTypeBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, JavaParser.RULE_annotationTypeBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 827;
			this.match(JavaParser.LBRACE);
			this.state = 831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOLATILE - 33)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				{
				this.state = 828;
				this.annotationTypeElementDeclaration();
				}
				}
				this.state = 833;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 834;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
		let _localctx: AnnotationTypeElementDeclarationContext = new AnnotationTypeElementDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, JavaParser.RULE_annotationTypeElementDeclaration);
		try {
			let _alt: number;
			this.state = 844;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.ABSTRACT:
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.CLASS:
			case JavaParser.DOUBLE:
			case JavaParser.ENUM:
			case JavaParser.FINAL:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.INTERFACE:
			case JavaParser.LONG:
			case JavaParser.NATIVE:
			case JavaParser.PRIVATE:
			case JavaParser.PROTECTED:
			case JavaParser.PUBLIC:
			case JavaParser.SHORT:
			case JavaParser.STATIC:
			case JavaParser.STRICTFP:
			case JavaParser.SYNCHRONIZED:
			case JavaParser.TRANSIENT:
			case JavaParser.VOLATILE:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 839;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 836;
						this.modifier();
						}
						}
					}
					this.state = 841;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
				}
				this.state = 842;
				this.annotationTypeElementRest();
				}
				break;
			case JavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 843;
				this.match(JavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementRest(): AnnotationTypeElementRestContext {
		let _localctx: AnnotationTypeElementRestContext = new AnnotationTypeElementRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, JavaParser.RULE_annotationTypeElementRest);
		try {
			this.state = 866;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 846;
				this.typeType();
				this.state = 847;
				this.annotationMethodOrConstantRest();
				this.state = 848;
				this.match(JavaParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 850;
				this.classDeclaration();
				this.state = 852;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
				case 1:
					{
					this.state = 851;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 854;
				this.interfaceDeclaration();
				this.state = 856;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
				case 1:
					{
					this.state = 855;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 858;
				this.enumDeclaration();
				this.state = 860;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
				case 1:
					{
					this.state = 859;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 862;
				this.annotationTypeDeclaration();
				this.state = 864;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
				case 1:
					{
					this.state = 863;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext {
		let _localctx: AnnotationMethodOrConstantRestContext = new AnnotationMethodOrConstantRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, JavaParser.RULE_annotationMethodOrConstantRest);
		try {
			this.state = 870;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 868;
				this.annotationMethodRest();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 869;
				this.annotationConstantRest();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationMethodRest(): AnnotationMethodRestContext {
		let _localctx: AnnotationMethodRestContext = new AnnotationMethodRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, JavaParser.RULE_annotationMethodRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 872;
			this.match(JavaParser.IDENTIFIER);
			this.state = 873;
			this.match(JavaParser.LPAREN);
			this.state = 874;
			this.match(JavaParser.RPAREN);
			this.state = 876;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.DEFAULT) {
				{
				this.state = 875;
				this.defaultValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationConstantRest(): AnnotationConstantRestContext {
		let _localctx: AnnotationConstantRestContext = new AnnotationConstantRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, JavaParser.RULE_annotationConstantRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 878;
			this.variableDeclarators();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultValue(): DefaultValueContext {
		let _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, JavaParser.RULE_defaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 880;
			this.match(JavaParser.DEFAULT);
			this.state = 881;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, JavaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 883;
			this.match(JavaParser.LBRACE);
			this.state = 887;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.DECIMAL_LITERAL - 33)) | (1 << (JavaParser.HEX_LITERAL - 33)) | (1 << (JavaParser.OCT_LITERAL - 33)) | (1 << (JavaParser.BINARY_LITERAL - 33)) | (1 << (JavaParser.FLOAT_LITERAL - 33)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 33)) | (1 << (JavaParser.BOOL_LITERAL - 33)) | (1 << (JavaParser.CHAR_LITERAL - 33)) | (1 << (JavaParser.STRING_LITERAL - 33)) | (1 << (JavaParser.NULL_LITERAL - 33)) | (1 << (JavaParser.LPAREN - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JavaParser.SEMI - 67)) | (1 << (JavaParser.LT - 67)) | (1 << (JavaParser.BANG - 67)) | (1 << (JavaParser.TILDE - 67)) | (1 << (JavaParser.INC - 67)) | (1 << (JavaParser.DEC - 67)) | (1 << (JavaParser.ADD - 67)) | (1 << (JavaParser.SUB - 67)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.JCOMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0)) {
				{
				{
				this.state = 884;
				this.blockStatement();
				}
				}
				this.state = 889;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 890;
			this.match(JavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, JavaParser.RULE_blockStatement);
		try {
			this.state = 897;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 892;
				this.localVariableDeclaration();
				this.state = 893;
				this.match(JavaParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 895;
				this.statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 896;
				this.localTypeDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, JavaParser.RULE_localVariableDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 902;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 899;
					this.variableModifier();
					}
					}
				}
				this.state = 904;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			}
			this.state = 905;
			this.typeType();
			this.state = 906;
			this.variableDeclarators();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localTypeDeclaration(): LocalTypeDeclarationContext {
		let _localctx: LocalTypeDeclarationContext = new LocalTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, JavaParser.RULE_localTypeDeclaration);
		let _la: number;
		try {
			this.state = 919;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.ABSTRACT:
			case JavaParser.CLASS:
			case JavaParser.FINAL:
			case JavaParser.INTERFACE:
			case JavaParser.PRIVATE:
			case JavaParser.PROTECTED:
			case JavaParser.PUBLIC:
			case JavaParser.STATIC:
			case JavaParser.STRICTFP:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 911;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.ABSTRACT || _la === JavaParser.FINAL || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					{
					this.state = 908;
					this.classOrInterfaceModifier();
					}
					}
					this.state = 913;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 916;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.CLASS:
					{
					this.state = 914;
					this.classDeclaration();
					}
					break;
				case JavaParser.INTERFACE:
					{
					this.state = 915;
					this.interfaceDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case JavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 918;
				this.match(JavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, JavaParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1026;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 921;
				_localctx._blockLabel = this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 922;
				this.match(JavaParser.ASSERT);
				this.state = 923;
				this.expression(0);
				this.state = 926;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.COLON) {
					{
					this.state = 924;
					this.match(JavaParser.COLON);
					this.state = 925;
					this.expression(0);
					}
				}

				this.state = 928;
				this.match(JavaParser.SEMI);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 930;
				this.match(JavaParser.IF);
				this.state = 931;
				this.parExpression();
				this.state = 932;
				this.statement();
				this.state = 935;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 933;
					this.match(JavaParser.ELSE);
					this.state = 934;
					this.statement();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 937;
				this.match(JavaParser.FOR);
				this.state = 938;
				this.match(JavaParser.LPAREN);
				this.state = 939;
				this.forControl();
				this.state = 940;
				this.match(JavaParser.RPAREN);
				this.state = 941;
				this.statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 943;
				this.match(JavaParser.WHILE);
				this.state = 944;
				this.parExpression();
				this.state = 945;
				this.statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 947;
				this.match(JavaParser.DO);
				this.state = 948;
				this.statement();
				this.state = 949;
				this.match(JavaParser.WHILE);
				this.state = 950;
				this.parExpression();
				this.state = 951;
				this.match(JavaParser.SEMI);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 953;
				this.match(JavaParser.TRY);
				this.state = 954;
				this.block();
				this.state = 964;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.CATCH:
					{
					this.state = 956;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 955;
						this.catchClause();
						}
						}
						this.state = 958;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === JavaParser.CATCH);
					this.state = 961;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JavaParser.FINALLY) {
						{
						this.state = 960;
						this.finallyBlock();
						}
					}

					}
					break;
				case JavaParser.FINALLY:
					{
					this.state = 963;
					this.finallyBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 966;
				this.match(JavaParser.TRY);
				this.state = 967;
				this.resourceSpecification();
				this.state = 968;
				this.block();
				this.state = 972;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.CATCH) {
					{
					{
					this.state = 969;
					this.catchClause();
					}
					}
					this.state = 974;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 976;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.FINALLY) {
					{
					this.state = 975;
					this.finallyBlock();
					}
				}

				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 978;
				this.match(JavaParser.SWITCH);
				this.state = 979;
				this.parExpression();
				this.state = 980;
				this.match(JavaParser.LBRACE);
				this.state = 984;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 981;
						this.switchBlockStatementGroup();
						}
						}
					}
					this.state = 986;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
				}
				this.state = 990;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT) {
					{
					{
					this.state = 987;
					this.switchLabel();
					}
					}
					this.state = 992;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 993;
				this.match(JavaParser.RBRACE);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 995;
				this.match(JavaParser.SYNCHRONIZED);
				this.state = 996;
				this.parExpression();
				this.state = 997;
				this.block();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 999;
				this.match(JavaParser.RETURN);
				this.state = 1001;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1000;
					this.expression(0);
					}
				}

				this.state = 1003;
				this.match(JavaParser.SEMI);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1004;
				this.match(JavaParser.THROW);
				this.state = 1005;
				this.expression(0);
				this.state = 1006;
				this.match(JavaParser.SEMI);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1008;
				this.match(JavaParser.BREAK);
				this.state = 1010;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.IDENTIFIER) {
					{
					this.state = 1009;
					this.match(JavaParser.IDENTIFIER);
					}
				}

				this.state = 1012;
				this.match(JavaParser.SEMI);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1013;
				this.match(JavaParser.CONTINUE);
				this.state = 1015;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.IDENTIFIER) {
					{
					this.state = 1014;
					this.match(JavaParser.IDENTIFIER);
					}
				}

				this.state = 1017;
				this.match(JavaParser.SEMI);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1018;
				this.match(JavaParser.SEMI);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1019;
				this.comment();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1020;
				_localctx._statementExpression = this.expression(0);
				this.state = 1021;
				this.match(JavaParser.SEMI);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1023;
				_localctx._identifierLabel = this.match(JavaParser.IDENTIFIER);
				this.state = 1024;
				this.match(JavaParser.COLON);
				this.state = 1025;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, JavaParser.RULE_catchClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1028;
			this.match(JavaParser.CATCH);
			this.state = 1029;
			this.match(JavaParser.LPAREN);
			this.state = 1033;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1030;
					this.variableModifier();
					}
					}
				}
				this.state = 1035;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
			}
			this.state = 1036;
			this.catchType();
			this.state = 1037;
			this.match(JavaParser.IDENTIFIER);
			this.state = 1038;
			this.match(JavaParser.RPAREN);
			this.state = 1039;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchType(): CatchTypeContext {
		let _localctx: CatchTypeContext = new CatchTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, JavaParser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1041;
			this.qualifiedName();
			this.state = 1046;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.BITOR) {
				{
				{
				this.state = 1042;
				this.match(JavaParser.BITOR);
				this.state = 1043;
				this.qualifiedName();
				}
				}
				this.state = 1048;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyBlock(): FinallyBlockContext {
		let _localctx: FinallyBlockContext = new FinallyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, JavaParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1049;
			this.match(JavaParser.FINALLY);
			this.state = 1050;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resourceSpecification(): ResourceSpecificationContext {
		let _localctx: ResourceSpecificationContext = new ResourceSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, JavaParser.RULE_resourceSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1052;
			this.match(JavaParser.LPAREN);
			this.state = 1053;
			this.resources();
			this.state = 1055;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.SEMI) {
				{
				this.state = 1054;
				this.match(JavaParser.SEMI);
				}
			}

			this.state = 1057;
			this.match(JavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resources(): ResourcesContext {
		let _localctx: ResourcesContext = new ResourcesContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, JavaParser.RULE_resources);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1059;
			this.resource();
			this.state = 1064;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1060;
					this.match(JavaParser.SEMI);
					this.state = 1061;
					this.resource();
					}
					}
				}
				this.state = 1066;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resource(): ResourceContext {
		let _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, JavaParser.RULE_resource);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1070;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1067;
					this.variableModifier();
					}
					}
				}
				this.state = 1072;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			}
			this.state = 1073;
			this.classOrInterfaceType();
			this.state = 1074;
			this.variableDeclaratorId();
			this.state = 1075;
			this.match(JavaParser.ASSIGN);
			this.state = 1076;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let _localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, JavaParser.RULE_switchBlockStatementGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1079;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1078;
				this.switchLabel();
				}
				}
				this.state = 1081;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT);
			this.state = 1084;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1083;
				this.blockStatement();
				}
				}
				this.state = 1086;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.DECIMAL_LITERAL - 33)) | (1 << (JavaParser.HEX_LITERAL - 33)) | (1 << (JavaParser.OCT_LITERAL - 33)) | (1 << (JavaParser.BINARY_LITERAL - 33)) | (1 << (JavaParser.FLOAT_LITERAL - 33)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 33)) | (1 << (JavaParser.BOOL_LITERAL - 33)) | (1 << (JavaParser.CHAR_LITERAL - 33)) | (1 << (JavaParser.STRING_LITERAL - 33)) | (1 << (JavaParser.NULL_LITERAL - 33)) | (1 << (JavaParser.LPAREN - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JavaParser.SEMI - 67)) | (1 << (JavaParser.LT - 67)) | (1 << (JavaParser.BANG - 67)) | (1 << (JavaParser.TILDE - 67)) | (1 << (JavaParser.INC - 67)) | (1 << (JavaParser.DEC - 67)) | (1 << (JavaParser.ADD - 67)) | (1 << (JavaParser.SUB - 67)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.JCOMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		let _localctx: SwitchLabelContext = new SwitchLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, JavaParser.RULE_switchLabel);
		try {
			this.state = 1096;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1088;
				this.match(JavaParser.CASE);
				this.state = 1091;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
				case 1:
					{
					this.state = 1089;
					_localctx._constantExpression = this.expression(0);
					}
					break;

				case 2:
					{
					this.state = 1090;
					_localctx._enumConstantName = this.match(JavaParser.IDENTIFIER);
					}
					break;
				}
				this.state = 1093;
				this.match(JavaParser.COLON);
				}
				break;
			case JavaParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1094;
				this.match(JavaParser.DEFAULT);
				this.state = 1095;
				this.match(JavaParser.COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forControl(): ForControlContext {
		let _localctx: ForControlContext = new ForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, JavaParser.RULE_forControl);
		let _la: number;
		try {
			this.state = 1110;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1098;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1099;
					this.forInit();
					}
				}

				this.state = 1102;
				this.match(JavaParser.SEMI);
				this.state = 1104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1103;
					this.expression(0);
					}
				}

				this.state = 1106;
				this.match(JavaParser.SEMI);
				this.state = 1108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1107;
					_localctx._forUpdate = this.expressionList();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, JavaParser.RULE_forInit);
		try {
			this.state = 1114;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1112;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1113;
				this.expressionList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForControl(): EnhancedForControlContext {
		let _localctx: EnhancedForControlContext = new EnhancedForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, JavaParser.RULE_enhancedForControl);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1119;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1116;
					this.variableModifier();
					}
					}
				}
				this.state = 1121;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
			}
			this.state = 1122;
			this.typeType();
			this.state = 1123;
			this.variableDeclaratorId();
			this.state = 1124;
			this.match(JavaParser.COLON);
			this.state = 1125;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parExpression(): ParExpressionContext {
		let _localctx: ParExpressionContext = new ParExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, JavaParser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1127;
			this.match(JavaParser.LPAREN);
			this.state = 1128;
			this.expression(0);
			this.state = 1129;
			this.match(JavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, JavaParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1131;
			this.expression(0);
			this.state = 1136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 1132;
				this.match(JavaParser.COMMA);
				this.state = 1133;
				this.expression(0);
				}
				}
				this.state = 1138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodCall(): MethodCallContext {
		let _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, JavaParser.RULE_methodCall);
		let _la: number;
		try {
			this.state = 1157;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1139;
				this.match(JavaParser.IDENTIFIER);
				this.state = 1140;
				this.match(JavaParser.LPAREN);
				this.state = 1142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1141;
					this.expressionList();
					}
				}

				this.state = 1144;
				this.match(JavaParser.RPAREN);
				}
				break;
			case JavaParser.THIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1145;
				this.match(JavaParser.THIS);
				this.state = 1146;
				this.match(JavaParser.LPAREN);
				this.state = 1148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1147;
					this.expressionList();
					}
				}

				this.state = 1150;
				this.match(JavaParser.RPAREN);
				}
				break;
			case JavaParser.SUPER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1151;
				this.match(JavaParser.SUPER);
				this.state = 1152;
				this.match(JavaParser.LPAREN);
				this.state = 1154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1153;
					this.expressionList();
					}
				}

				this.state = 1156;
				this.match(JavaParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 176;
		this.enterRecursionRule(_localctx, 176, JavaParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1203;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1160;
				this.primary();
				}
				break;

			case 2:
				{
				this.state = 1161;
				this.methodCall();
				}
				break;

			case 3:
				{
				this.state = 1162;
				this.match(JavaParser.NEW);
				this.state = 1163;
				this.creator();
				}
				break;

			case 4:
				{
				this.state = 1164;
				this.match(JavaParser.LPAREN);
				this.state = 1168;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1165;
						this.annotation();
						}
						}
					}
					this.state = 1170;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
				}
				this.state = 1171;
				this.typeType();
				this.state = 1176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.BITAND) {
					{
					{
					this.state = 1172;
					this.match(JavaParser.BITAND);
					this.state = 1173;
					this.typeType();
					}
					}
					this.state = 1178;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1179;
				this.match(JavaParser.RPAREN);
				this.state = 1180;
				this.expression(21);
				}
				break;

			case 5:
				{
				this.state = 1182;
				_localctx._prefix = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (JavaParser.INC - 83)) | (1 << (JavaParser.DEC - 83)) | (1 << (JavaParser.ADD - 83)) | (1 << (JavaParser.SUB - 83)))) !== 0))) {
					_localctx._prefix = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1183;
				this.expression(19);
				}
				break;

			case 6:
				{
				this.state = 1184;
				_localctx._prefix = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JavaParser.BANG || _la === JavaParser.TILDE)) {
					_localctx._prefix = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1185;
				this.expression(18);
				}
				break;

			case 7:
				{
				this.state = 1186;
				this.lambdaExpression();
				}
				break;

			case 8:
				{
				this.state = 1187;
				this.typeType();
				this.state = 1188;
				this.match(JavaParser.COLONCOLON);
				this.state = 1194;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.LT:
				case JavaParser.IDENTIFIER:
					{
					this.state = 1190;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JavaParser.LT) {
						{
						this.state = 1189;
						this.typeArguments();
						}
					}

					this.state = 1192;
					this.match(JavaParser.IDENTIFIER);
					}
					break;
				case JavaParser.NEW:
					{
					this.state = 1193;
					this.match(JavaParser.NEW);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 9:
				{
				this.state = 1196;
				this.classType();
				this.state = 1197;
				this.match(JavaParser.COLONCOLON);
				this.state = 1199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.LT) {
					{
					this.state = 1198;
					this.typeArguments();
					}
				}

				this.state = 1201;
				this.match(JavaParser.NEW);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1285;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1283;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1205;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1206;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (JavaParser.MUL - 87)) | (1 << (JavaParser.DIV - 87)) | (1 << (JavaParser.MOD - 87)))) !== 0))) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1207;
						this.expression(18);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1208;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 1209;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === JavaParser.ADD || _la === JavaParser.SUB)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1210;
						this.expression(17);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1211;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1219;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
						case 1:
							{
							this.state = 1212;
							this.match(JavaParser.LT);
							this.state = 1213;
							this.match(JavaParser.LT);
							}
							break;

						case 2:
							{
							this.state = 1214;
							this.match(JavaParser.GT);
							this.state = 1215;
							this.match(JavaParser.GT);
							this.state = 1216;
							this.match(JavaParser.GT);
							}
							break;

						case 3:
							{
							this.state = 1217;
							this.match(JavaParser.GT);
							this.state = 1218;
							this.match(JavaParser.GT);
							}
							break;
						}
						this.state = 1221;
						this.expression(16);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1222;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 1223;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (JavaParser.GT - 71)) | (1 << (JavaParser.LT - 71)) | (1 << (JavaParser.LE - 71)) | (1 << (JavaParser.GE - 71)))) !== 0))) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1224;
						this.expression(15);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1225;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1226;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === JavaParser.EQUAL || _la === JavaParser.NOTEQUAL)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1227;
						this.expression(13);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1228;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1229;
						_localctx._bop = this.match(JavaParser.BITAND);
						this.state = 1230;
						this.expression(12);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1231;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1232;
						_localctx._bop = this.match(JavaParser.CARET);
						this.state = 1233;
						this.expression(11);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1234;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1235;
						_localctx._bop = this.match(JavaParser.BITOR);
						this.state = 1236;
						this.expression(10);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1237;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1238;
						_localctx._bop = this.match(JavaParser.AND);
						this.state = 1239;
						this.expression(9);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1240;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1241;
						_localctx._bop = this.match(JavaParser.OR);
						this.state = 1242;
						this.expression(8);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1243;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1244;
						_localctx._bop = this.match(JavaParser.QUESTION);
						this.state = 1245;
						this.expression(0);
						this.state = 1246;
						this.match(JavaParser.COLON);
						this.state = 1247;
						this.expression(6);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1249;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1250;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JavaParser.ASSIGN - 70)) | (1 << (JavaParser.ADD_ASSIGN - 70)) | (1 << (JavaParser.SUB_ASSIGN - 70)) | (1 << (JavaParser.MUL_ASSIGN - 70)) | (1 << (JavaParser.DIV_ASSIGN - 70)) | (1 << (JavaParser.AND_ASSIGN - 70)) | (1 << (JavaParser.OR_ASSIGN - 70)) | (1 << (JavaParser.XOR_ASSIGN - 70)) | (1 << (JavaParser.MOD_ASSIGN - 70)) | (1 << (JavaParser.LSHIFT_ASSIGN - 70)))) !== 0) || _la === JavaParser.RSHIFT_ASSIGN || _la === JavaParser.URSHIFT_ASSIGN)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1251;
						this.expression(5);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1252;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 1253;
						_localctx._bop = this.match(JavaParser.DOT);
						this.state = 1265;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
						case 1:
							{
							this.state = 1254;
							this.match(JavaParser.IDENTIFIER);
							}
							break;

						case 2:
							{
							this.state = 1255;
							this.methodCall();
							}
							break;

						case 3:
							{
							this.state = 1256;
							this.match(JavaParser.THIS);
							}
							break;

						case 4:
							{
							this.state = 1257;
							this.match(JavaParser.NEW);
							this.state = 1259;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === JavaParser.LT) {
								{
								this.state = 1258;
								this.nonWildcardTypeArguments();
								}
							}

							this.state = 1261;
							this.innerCreator();
							}
							break;

						case 5:
							{
							this.state = 1262;
							this.match(JavaParser.SUPER);
							this.state = 1263;
							this.superSuffix();
							}
							break;

						case 6:
							{
							this.state = 1264;
							this.explicitGenericInvocation();
							}
							break;
						}
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1267;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 1268;
						this.match(JavaParser.LBRACK);
						this.state = 1269;
						this.expression(0);
						this.state = 1270;
						this.match(JavaParser.RBRACK);
						}
						break;

					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1272;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 1273;
						_localctx._postfix = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === JavaParser.INC || _la === JavaParser.DEC)) {
							_localctx._postfix = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1274;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1275;
						_localctx._bop = this.match(JavaParser.INSTANCEOF);
						this.state = 1276;
						this.typeType();
						}
						break;

					case 17:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1277;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1278;
						this.match(JavaParser.COLONCOLON);
						this.state = 1280;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JavaParser.LT) {
							{
							this.state = 1279;
							this.typeArguments();
							}
						}

						this.state = 1282;
						this.match(JavaParser.IDENTIFIER);
						}
						break;
					}
					}
				}
				this.state = 1287;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		let _localctx: LambdaExpressionContext = new LambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, JavaParser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1288;
			this.lambdaParameters();
			this.state = 1289;
			this.match(JavaParser.ARROW);
			this.state = 1290;
			this.lambdaBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaParameters(): LambdaParametersContext {
		let _localctx: LambdaParametersContext = new LambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, JavaParser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.state = 1308;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1292;
				this.match(JavaParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1293;
				this.match(JavaParser.LPAREN);
				this.state = 1295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la === JavaParser.SHORT || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1294;
					this.formalParameterList();
					}
				}

				this.state = 1297;
				this.match(JavaParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1298;
				this.match(JavaParser.LPAREN);
				this.state = 1299;
				this.match(JavaParser.IDENTIFIER);
				this.state = 1304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.COMMA) {
					{
					{
					this.state = 1300;
					this.match(JavaParser.COMMA);
					this.state = 1301;
					this.match(JavaParser.IDENTIFIER);
					}
					}
					this.state = 1306;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1307;
				this.match(JavaParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaBody(): LambdaBodyContext {
		let _localctx: LambdaBodyContext = new LambdaBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, JavaParser.RULE_lambdaBody);
		try {
			this.state = 1312;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.NEW:
			case JavaParser.SHORT:
			case JavaParser.SUPER:
			case JavaParser.THIS:
			case JavaParser.VOID:
			case JavaParser.DECIMAL_LITERAL:
			case JavaParser.HEX_LITERAL:
			case JavaParser.OCT_LITERAL:
			case JavaParser.BINARY_LITERAL:
			case JavaParser.FLOAT_LITERAL:
			case JavaParser.HEX_FLOAT_LITERAL:
			case JavaParser.BOOL_LITERAL:
			case JavaParser.CHAR_LITERAL:
			case JavaParser.STRING_LITERAL:
			case JavaParser.NULL_LITERAL:
			case JavaParser.LPAREN:
			case JavaParser.LT:
			case JavaParser.BANG:
			case JavaParser.TILDE:
			case JavaParser.INC:
			case JavaParser.DEC:
			case JavaParser.ADD:
			case JavaParser.SUB:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1310;
				this.expression(0);
				}
				break;
			case JavaParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1311;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, JavaParser.RULE_primary);
		try {
			this.state = 1332;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1314;
				this.match(JavaParser.LPAREN);
				this.state = 1315;
				this.expression(0);
				this.state = 1316;
				this.match(JavaParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1318;
				this.match(JavaParser.THIS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1319;
				this.match(JavaParser.SUPER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1320;
				this.literal();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1321;
				this.match(JavaParser.IDENTIFIER);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1322;
				this.typeTypeOrVoid();
				this.state = 1323;
				this.match(JavaParser.DOT);
				this.state = 1324;
				this.match(JavaParser.CLASS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1326;
				this.nonWildcardTypeArguments();
				this.state = 1330;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.SUPER:
				case JavaParser.IDENTIFIER:
					{
					this.state = 1327;
					this.explicitGenericInvocationSuffix();
					}
					break;
				case JavaParser.THIS:
					{
					this.state = 1328;
					this.match(JavaParser.THIS);
					this.state = 1329;
					this.arguments();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classType(): ClassTypeContext {
		let _localctx: ClassTypeContext = new ClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, JavaParser.RULE_classType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1337;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				{
				this.state = 1334;
				this.classOrInterfaceType();
				this.state = 1335;
				this.match(JavaParser.DOT);
				}
				break;
			}
			this.state = 1342;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1339;
					this.annotation();
					}
					}
				}
				this.state = 1344;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
			}
			this.state = 1345;
			this.match(JavaParser.IDENTIFIER);
			this.state = 1347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LT) {
				{
				this.state = 1346;
				this.typeArguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public creator(): CreatorContext {
		let _localctx: CreatorContext = new CreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, JavaParser.RULE_creator);
		try {
			this.state = 1358;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.LT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1349;
				this.nonWildcardTypeArguments();
				this.state = 1350;
				this.createdName();
				this.state = 1351;
				this.classCreatorRest();
				}
				break;
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.SHORT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1353;
				this.createdName();
				this.state = 1356;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.LBRACK:
					{
					this.state = 1354;
					this.arrayCreatorRest();
					}
					break;
				case JavaParser.LPAREN:
					{
					this.state = 1355;
					this.classCreatorRest();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createdName(): CreatedNameContext {
		let _localctx: CreatedNameContext = new CreatedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, JavaParser.RULE_createdName);
		let _la: number;
		try {
			this.state = 1375;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1360;
				this.match(JavaParser.IDENTIFIER);
				this.state = 1362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.LT) {
					{
					this.state = 1361;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 1371;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.DOT) {
					{
					{
					this.state = 1364;
					this.match(JavaParser.DOT);
					this.state = 1365;
					this.match(JavaParser.IDENTIFIER);
					this.state = 1367;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JavaParser.LT) {
						{
						this.state = 1366;
						this.typeArgumentsOrDiamond();
						}
					}

					}
					}
					this.state = 1373;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.SHORT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1374;
				this.primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public innerCreator(): InnerCreatorContext {
		let _localctx: InnerCreatorContext = new InnerCreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, JavaParser.RULE_innerCreator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1377;
			this.match(JavaParser.IDENTIFIER);
			this.state = 1379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LT) {
				{
				this.state = 1378;
				this.nonWildcardTypeArgumentsOrDiamond();
				}
			}

			this.state = 1381;
			this.classCreatorRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayCreatorRest(): ArrayCreatorRestContext {
		let _localctx: ArrayCreatorRestContext = new ArrayCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, JavaParser.RULE_arrayCreatorRest);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1383;
			this.match(JavaParser.LBRACK);
			this.state = 1411;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.RBRACK:
				{
				this.state = 1384;
				this.match(JavaParser.RBRACK);
				this.state = 1389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.LBRACK) {
					{
					{
					this.state = 1385;
					this.match(JavaParser.LBRACK);
					this.state = 1386;
					this.match(JavaParser.RBRACK);
					}
					}
					this.state = 1391;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1392;
				this.arrayInitializer();
				}
				break;
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.NEW:
			case JavaParser.SHORT:
			case JavaParser.SUPER:
			case JavaParser.THIS:
			case JavaParser.VOID:
			case JavaParser.DECIMAL_LITERAL:
			case JavaParser.HEX_LITERAL:
			case JavaParser.OCT_LITERAL:
			case JavaParser.BINARY_LITERAL:
			case JavaParser.FLOAT_LITERAL:
			case JavaParser.HEX_FLOAT_LITERAL:
			case JavaParser.BOOL_LITERAL:
			case JavaParser.CHAR_LITERAL:
			case JavaParser.STRING_LITERAL:
			case JavaParser.NULL_LITERAL:
			case JavaParser.LPAREN:
			case JavaParser.LT:
			case JavaParser.BANG:
			case JavaParser.TILDE:
			case JavaParser.INC:
			case JavaParser.DEC:
			case JavaParser.ADD:
			case JavaParser.SUB:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				{
				this.state = 1393;
				this.expression(0);
				this.state = 1394;
				this.match(JavaParser.RBRACK);
				this.state = 1401;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1395;
						this.match(JavaParser.LBRACK);
						this.state = 1396;
						this.expression(0);
						this.state = 1397;
						this.match(JavaParser.RBRACK);
						}
						}
					}
					this.state = 1403;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
				}
				this.state = 1408;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1404;
						this.match(JavaParser.LBRACK);
						this.state = 1405;
						this.match(JavaParser.RBRACK);
						}
						}
					}
					this.state = 1410;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classCreatorRest(): ClassCreatorRestContext {
		let _localctx: ClassCreatorRestContext = new ClassCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, JavaParser.RULE_classCreatorRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1413;
			this.arguments();
			this.state = 1415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				{
				this.state = 1414;
				this.classBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitGenericInvocation(): ExplicitGenericInvocationContext {
		let _localctx: ExplicitGenericInvocationContext = new ExplicitGenericInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, JavaParser.RULE_explicitGenericInvocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1417;
			this.nonWildcardTypeArguments();
			this.state = 1418;
			this.explicitGenericInvocationSuffix();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		let _localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, JavaParser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 1423;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1420;
				this.match(JavaParser.LT);
				this.state = 1421;
				this.match(JavaParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1422;
				this.typeArguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext {
		let _localctx: NonWildcardTypeArgumentsOrDiamondContext = new NonWildcardTypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond);
		try {
			this.state = 1428;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1425;
				this.match(JavaParser.LT);
				this.state = 1426;
				this.match(JavaParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1427;
				this.nonWildcardTypeArguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		let _localctx: NonWildcardTypeArgumentsContext = new NonWildcardTypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, JavaParser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1430;
			this.match(JavaParser.LT);
			this.state = 1431;
			this.typeList();
			this.state = 1432;
			this.match(JavaParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, JavaParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1434;
			this.typeType();
			this.state = 1439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 1435;
				this.match(JavaParser.COMMA);
				this.state = 1436;
				this.typeType();
				}
				}
				this.state = 1441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeType(): TypeTypeContext {
		let _localctx: TypeTypeContext = new TypeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, JavaParser.RULE_typeType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1445;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1442;
					this.annotation();
					}
					}
				}
				this.state = 1447;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
			}
			this.state = 1450;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.IDENTIFIER:
				{
				this.state = 1448;
				this.classOrInterfaceType();
				}
				break;
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.SHORT:
				{
				this.state = 1449;
				this.primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1462;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1455;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
						{
						{
						this.state = 1452;
						this.annotation();
						}
						}
						this.state = 1457;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1458;
					this.match(JavaParser.LBRACK);
					this.state = 1459;
					this.match(JavaParser.RBRACK);
					}
					}
				}
				this.state = 1464;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, JavaParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1465;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la === JavaParser.SHORT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, JavaParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1467;
			this.match(JavaParser.LT);
			this.state = 1468;
			this.typeArgument();
			this.state = 1473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 1469;
				this.match(JavaParser.COMMA);
				this.state = 1470;
				this.typeArgument();
				}
				}
				this.state = 1475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1476;
			this.match(JavaParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public superSuffix(): SuperSuffixContext {
		let _localctx: SuperSuffixContext = new SuperSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, JavaParser.RULE_superSuffix);
		try {
			this.state = 1484;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1478;
				this.arguments();
				}
				break;
			case JavaParser.DOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1479;
				this.match(JavaParser.DOT);
				this.state = 1480;
				this.match(JavaParser.IDENTIFIER);
				this.state = 1482;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 182, this._ctx) ) {
				case 1:
					{
					this.state = 1481;
					this.arguments();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		let _localctx: ExplicitGenericInvocationSuffixContext = new ExplicitGenericInvocationSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, JavaParser.RULE_explicitGenericInvocationSuffix);
		try {
			this.state = 1490;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.SUPER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1486;
				this.match(JavaParser.SUPER);
				this.state = 1487;
				this.superSuffix();
				}
				break;
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1488;
				this.match(JavaParser.IDENTIFIER);
				this.state = 1489;
				this.arguments();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, JavaParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1492;
			this.match(JavaParser.LPAREN);
			this.state = 1494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				this.state = 1493;
				this.expressionList();
				}
			}

			this.state = 1496;
			this.match(JavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 88:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 17);

		case 1:
			return this.precpred(this._ctx, 16);

		case 2:
			return this.precpred(this._ctx, 15);

		case 3:
			return this.precpred(this._ctx, 14);

		case 4:
			return this.precpred(this._ctx, 12);

		case 5:
			return this.precpred(this._ctx, 11);

		case 6:
			return this.precpred(this._ctx, 10);

		case 7:
			return this.precpred(this._ctx, 9);

		case 8:
			return this.precpred(this._ctx, 8);

		case 9:
			return this.precpred(this._ctx, 7);

		case 10:
			return this.precpred(this._ctx, 6);

		case 11:
			return this.precpred(this._ctx, 5);

		case 12:
			return this.precpred(this._ctx, 25);

		case 13:
			return this.precpred(this._ctx, 24);

		case 14:
			return this.precpred(this._ctx, 20);

		case 15:
			return this.precpred(this._ctx, 13);

		case 16:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03r\u05DD\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x03\x02\x05\x02\xE0" +
		"\n\x02\x03\x02\x07\x02\xE3\n\x02\f\x02\x0E\x02\xE6\v\x02\x03\x02\x07\x02" +
		"\xE9\n\x02\f\x02\x0E\x02\xEC\v\x02\x03\x02\x03\x02\x03\x03\x07\x03\xF1" +
		"\n\x03\f\x03\x0E\x03\xF4\v\x03\x03\x03\x07\x03\xF7\n\x03\f\x03\x0E\x03" +
		"\xFA\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x07\x04\u0101\n\x04" +
		"\f\x04\x0E\x04\u0104\v\x04\x03\x04\x03\x04\x05\x04\u0108\n\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x04\u010D\n\x04\x03\x04\x03\x04\x03\x05\x07\x05\u0112" +
		"\n\x05\f\x05\x0E\x05\u0115\v\x05\x03\x05\x07\x05\u0118\n\x05\f\x05\x0E" +
		"\x05\u011B\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0121\n\x05\x03" +
		"\x05\x05\x05\u0124\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"\u012B\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\u0135\n\x07\x03\b\x03\b\x05\b\u0139\n\b\x03\t\x03\t\x03\t" +
		"\x05\t\u013E\n\t\x03\t\x05\t\u0141\n\t\x03\t\x05\t\u0144\n\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x07\f\u0152" +
		"\n\f\f\f\x0E\f\u0155\v\f\x03\f\x03\f\x03\r\x07\r\u015A\n\r\f\r\x0E\r\u015D" +
		"\v\r\x03\r\x03\r\x03\r\x07\r\u0162\n\r\f\r\x0E\r\u0165\v\r\x03\r\x05\r" +
		"\u0168\n\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u016D\n\x0E\f\x0E\x0E\x0E\u0170" +
		"\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0176\n\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u017A\n\x0F\x03\x0F\x05\x0F\u017D\n\x0F\x03\x0F\x05\x0F\u0180" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u0187\n\x10\f\x10" +
		"\x0E\x10\u018A\v\x10\x03\x11\x07\x11\u018D\n\x11\f\x11\x0E\x11\u0190\v" +
		"\x11\x03\x11\x07\x11\u0193\n\x11\f\x11\x0E\x11\u0196\v\x11\x03\x11\x03" +
		"\x11\x05\x11\u019A\n\x11\x03\x11\x05\x11\u019D\n\x11\x03\x12\x03\x12\x07" +
		"\x12\u01A1\n\x12\f\x12\x0E\x12\u01A4\v\x12\x03\x13\x03\x13\x03\x13\x05" +
		"\x13\u01A9\n\x13\x03\x13\x05\x13\u01AC\n\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x07\x16\u01B7\n\x16\f\x16" +
		"\x0E\x16\u01BA\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x07\x17\u01C0\n\x17" +
		"\f\x17\x0E\x17\u01C3\v\x17\x03\x17\x03\x17\x03\x18\x03\x18\x07\x18\u01C9" +
		"\n\x18\f\x18\x0E\x18\u01CC\v\x18\x03\x18\x05\x18\u01CF\n\x18\x03\x18\x03" +
		"\x18\x07\x18\u01D3\n\x18\f\x18\x0E\x18\u01D6\v\x18\x03\x18\x07\x18\u01D9" +
		"\n\x18\f\x18\x0E\x18\u01DC\v\x18\x03\x18\x05\x18\u01DF\n\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01EA" +
		"\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u01F1\n\x1A\f\x1A" +
		"\x0E\x1A\u01F4\v\x1A\x03\x1A\x05\x1A\u01F7\n\x1A\x03\x1A\x03\x1A\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C\u0200\n\x1C\x03\x1D\x03\x1D\x05" +
		"\x1D\u0204\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03 \x03 \x05 \u0210\n \x03 \x03 \x03!\x03!\x03!\x03!\x03\"\x07" +
		"\"\u0219\n\"\f\"\x0E\"\u021C\v\"\x03\"\x07\"\u021F\n\"\f\"\x0E\"\u0222" +
		"\v\"\x03\"\x03\"\x05\"\u0226\n\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05" +
		"#\u022F\n#\x03$\x03$\x03$\x03$\x07$\u0235\n$\f$\x0E$\u0238\v$\x03$\x03" +
		"$\x03%\x03%\x03%\x07%\u023F\n%\f%\x0E%\u0242\v%\x03%\x03%\x03%\x03&\x07" +
		"&\u0248\n&\f&\x0E&\u024B\v&\x03&\x03&\x03&\x07&\u0250\n&\f&\x0E&\u0253" +
		"\v&\x03&\x03&\x05&\u0257\n&\x03&\x03&\x03&\x03&\x07&\u025D\n&\f&\x0E&" +
		"\u0260\v&\x03&\x05&\u0263\n&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x05\'\u026D\n\'\x03(\x03(\x03(\x03)\x03)\x03)\x07)\u0275\n)\f)\x0E" +
		")\u0278\v)\x03*\x03*\x03*\x05*\u027D\n*\x03+\x03+\x03+\x07+\u0282\n+\f" +
		"+\x0E+\u0285\v+\x03,\x03,\x05,\u0289\n,\x03-\x03-\x03-\x03-\x07-\u028F" +
		"\n-\f-\x0E-\u0292\v-\x03-\x05-\u0295\n-\x05-\u0297\n-\x03-\x03-\x03.\x03" +
		".\x05.\u029D\n.\x03.\x03.\x03.\x05.\u02A2\n.\x07.\u02A4\n.\f.\x0E.\u02A7" +
		"\v.\x03/\x03/\x07/\u02AB\n/\f/\x0E/\u02AE\v/\x03/\x03/\x03/\x05/\u02B3" +
		"\n/\x05/\u02B5\n/\x030\x030\x030\x070\u02BA\n0\f0\x0E0\u02BD\v0\x031\x03" +
		"1\x051\u02C1\n1\x031\x031\x032\x032\x032\x072\u02C8\n2\f2\x0E2\u02CB\v" +
		"2\x032\x032\x052\u02CF\n2\x032\x052\u02D2\n2\x033\x073\u02D5\n3\f3\x0E" +
		"3\u02D8\v3\x033\x033\x033\x034\x074\u02DE\n4\f4\x0E4\u02E1\v4\x034\x03" +
		"4\x074\u02E5\n4\f4\x0E4\u02E8\v4\x034\x034\x034\x035\x035\x035\x075\u02F0" +
		"\n5\f5\x0E5\u02F3\v5\x036\x036\x036\x036\x036\x036\x056\u02FB\n6\x037" +
		"\x037\x038\x038\x039\x039\x079\u0303\n9\f9\x0E9\u0306\v9\x039\x039\x03" +
		"9\x03:\x03:\x03:\x05:\u030E\n:\x03:\x03:\x03:\x05:\u0313\n:\x03:\x05:" +
		"\u0316\n:\x03;\x03;\x03;\x07;\u031B\n;\f;\x0E;\u031E\v;\x03<\x03<\x03" +
		"<\x03<\x03=\x03=\x03=\x05=\u0327\n=\x03>\x03>\x03>\x03>\x07>\u032D\n>" +
		"\f>\x0E>\u0330\v>\x05>\u0332\n>\x03>\x05>\u0335\n>\x03>\x03>\x03?\x03" +
		"?\x03?\x03?\x03?\x03@\x03@\x07@\u0340\n@\f@\x0E@\u0343\v@\x03@\x03@\x03" +
		"A\x07A\u0348\nA\fA\x0EA\u034B\vA\x03A\x03A\x05A\u034F\nA\x03B\x03B\x03" +
		"B\x03B\x03B\x03B\x05B\u0357\nB\x03B\x03B\x05B\u035B\nB\x03B\x03B\x05B" +
		"\u035F\nB\x03B\x03B\x05B\u0363\nB\x05B\u0365\nB\x03C\x03C\x05C\u0369\n" +
		"C\x03D\x03D\x03D\x03D\x05D\u036F\nD\x03E\x03E\x03F\x03F\x03F\x03G\x03" +
		"G\x07G\u0378\nG\fG\x0EG\u037B\vG\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x05" +
		"H\u0384\nH\x03I\x07I\u0387\nI\fI\x0EI\u038A\vI\x03I\x03I\x03I\x03J\x07" +
		"J\u0390\nJ\fJ\x0EJ\u0393\vJ\x03J\x03J\x05J\u0397\nJ\x03J\x05J\u039A\n" +
		"J\x03K\x03K\x03K\x03K\x03K\x05K\u03A1\nK\x03K\x03K\x03K\x03K\x03K\x03" +
		"K\x03K\x05K\u03AA\nK\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
		"K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x06K\u03BF\nK\rK\x0EK\u03C0" +
		"\x03K\x05K\u03C4\nK\x03K\x05K\u03C7\nK\x03K\x03K\x03K\x03K\x07K\u03CD" +
		"\nK\fK\x0EK\u03D0\vK\x03K\x05K\u03D3\nK\x03K\x03K\x03K\x03K\x07K\u03D9" +
		"\nK\fK\x0EK\u03DC\vK\x03K\x07K\u03DF\nK\fK\x0EK\u03E2\vK\x03K\x03K\x03" +
		"K\x03K\x03K\x03K\x03K\x03K\x05K\u03EC\nK\x03K\x03K\x03K\x03K\x03K\x03" +
		"K\x03K\x05K\u03F5\nK\x03K\x03K\x03K\x05K\u03FA\nK\x03K\x03K\x03K\x03K" +
		"\x03K\x03K\x03K\x03K\x03K\x05K\u0405\nK\x03L\x03L\x03L\x07L\u040A\nL\f" +
		"L\x0EL\u040D\vL\x03L\x03L\x03L\x03L\x03L\x03M\x03M\x03M\x07M\u0417\nM" +
		"\fM\x0EM\u041A\vM\x03N\x03N\x03N\x03O\x03O\x03O\x05O\u0422\nO\x03O\x03" +
		"O\x03P\x03P\x03P\x07P\u0429\nP\fP\x0EP\u042C\vP\x03Q\x07Q\u042F\nQ\fQ" +
		"\x0EQ\u0432\vQ\x03Q\x03Q\x03Q\x03Q\x03Q\x03R\x06R\u043A\nR\rR\x0ER\u043B" +
		"\x03R\x06R\u043F\nR\rR\x0ER\u0440\x03S\x03S\x03S\x05S\u0446\nS\x03S\x03" +
		"S\x03S\x05S\u044B\nS\x03T\x03T\x05T\u044F\nT\x03T\x03T\x05T\u0453\nT\x03" +
		"T\x03T\x05T\u0457\nT\x05T\u0459\nT\x03U\x03U\x05U\u045D\nU\x03V\x07V\u0460" +
		"\nV\fV\x0EV\u0463\vV\x03V\x03V\x03V\x03V\x03V\x03W\x03W\x03W\x03W\x03" +
		"X\x03X\x03X\x07X\u0471\nX\fX\x0EX\u0474\vX\x03Y\x03Y\x03Y\x05Y\u0479\n" +
		"Y\x03Y\x03Y\x03Y\x03Y\x05Y\u047F\nY\x03Y\x03Y\x03Y\x03Y\x05Y\u0485\nY" +
		"\x03Y\x05Y\u0488\nY\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x07Z\u0491\nZ\f" +
		"Z\x0EZ\u0494\vZ\x03Z\x03Z\x03Z\x07Z\u0499\nZ\fZ\x0EZ\u049C\vZ\x03Z\x03" +
		"Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u04A9\nZ\x03Z\x03" +
		"Z\x05Z\u04AD\nZ\x03Z\x03Z\x03Z\x05Z\u04B2\nZ\x03Z\x03Z\x05Z\u04B6\nZ\x03" +
		"Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05" +
		"Z\u04C6\nZ\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
		"Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
		"Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u04EE" +
		"\nZ\x03Z\x03Z\x03Z\x03Z\x05Z\u04F4\nZ\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
		"Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u0503\nZ\x03Z\x07Z\u0506\nZ\fZ\x0E" +
		"Z\u0509\vZ\x03[\x03[\x03[\x03[\x03\\\x03\\\x03\\\x05\\\u0512\n\\\x03\\" +
		"\x03\\\x03\\\x03\\\x03\\\x07\\\u0519\n\\\f\\\x0E\\\u051C\v\\\x03\\\x05" +
		"\\\u051F\n\\\x03]\x03]\x05]\u0523\n]\x03^\x03^\x03^\x03^\x03^\x03^\x03" +
		"^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u0535\n^\x05^\u0537" +
		"\n^\x03_\x03_\x03_\x05_\u053C\n_\x03_\x07_\u053F\n_\f_\x0E_\u0542\v_\x03" +
		"_\x03_\x05_\u0546\n_\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x05`\u054F\n`" +
		"\x05`\u0551\n`\x03a\x03a\x05a\u0555\na\x03a\x03a\x03a\x05a\u055A\na\x07" +
		"a\u055C\na\fa\x0Ea\u055F\va\x03a\x05a\u0562\na\x03b\x03b\x05b\u0566\n" +
		"b\x03b\x03b\x03c\x03c\x03c\x03c\x07c\u056E\nc\fc\x0Ec\u0571\vc\x03c\x03" +
		"c\x03c\x03c\x03c\x03c\x03c\x07c\u057A\nc\fc\x0Ec\u057D\vc\x03c\x03c\x07" +
		"c\u0581\nc\fc\x0Ec\u0584\vc\x05c\u0586\nc\x03d\x03d\x05d\u058A\nd\x03" +
		"e\x03e\x03e\x03f\x03f\x03f\x05f\u0592\nf\x03g\x03g\x03g\x05g\u0597\ng" +
		"\x03h\x03h\x03h\x03h\x03i\x03i\x03i\x07i\u05A0\ni\fi\x0Ei\u05A3\vi\x03" +
		"j\x07j\u05A6\nj\fj\x0Ej\u05A9\vj\x03j\x03j\x05j\u05AD\nj\x03j\x07j\u05B0" +
		"\nj\fj\x0Ej\u05B3\vj\x03j\x03j\x07j\u05B7\nj\fj\x0Ej\u05BA\vj\x03k\x03" +
		"k\x03l\x03l\x03l\x03l\x07l\u05C2\nl\fl\x0El\u05C5\vl\x03l\x03l\x03m\x03" +
		"m\x03m\x03m\x05m\u05CD\nm\x05m\u05CF\nm\x03n\x03n\x03n\x03n\x05n\u05D5" +
		"\nn\x03o\x03o\x05o\u05D9\no\x03o\x03o\x03o\x02\x02\x03\xB2p\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
		"\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
		"\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
		"\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6" +
		"\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8" +
		"\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA" +
		"\x02\xDC\x02\x02\x0E\x04\x02\x13\x13**\x03\x0258\x03\x029:\x03\x02UX\x03" +
		"\x02KL\x04\x02YZ^^\x03\x02WX\x04\x02IJPQ\x04\x02OORR\x04\x02HH_i\x03\x02" +
		"UV\n\x02\x05\x05\x07\x07\n\n\x10\x10\x16\x16\x1D\x1D\x1F\x1F\'\'\x02\u0680" +
		"\x02\xDF\x03\x02\x02\x02\x04\xF2\x03\x02\x02\x02\x06\u0102\x03\x02\x02" +
		"\x02\b\u0123\x03\x02\x02\x02\n\u012A\x03\x02\x02\x02\f\u0134\x03\x02\x02" +
		"\x02\x0E\u0138\x03\x02\x02\x02\x10\u013A\x03\x02\x02\x02\x12\u0147\x03" +
		"\x02\x02\x02\x14\u014A\x03\x02\x02\x02\x16\u014D\x03\x02\x02\x02\x18\u015B" +
		"\x03\x02\x02\x02\x1A\u0169\x03\x02\x02\x02\x1C\u0171\x03\x02\x02\x02\x1E" +
		"\u0183\x03\x02\x02\x02 \u018E\x03\x02\x02\x02\"\u019E\x03\x02\x02\x02" +
		"$\u01A5\x03\x02\x02\x02&\u01AF\x03\x02\x02\x02(\u01B2\x03\x02\x02\x02" +
		"*\u01B4\x03\x02\x02\x02,\u01BD\x03\x02\x02\x02.\u01DE\x03\x02\x02\x02" +
		"0\u01E9\x03\x02\x02\x022\u01EB\x03\x02\x02\x024\u01FA\x03\x02\x02\x02" +
		"6\u01FF\x03\x02\x02\x028\u0203\x03\x02\x02\x02:\u0205\x03\x02\x02\x02" +
		"<\u0208\x03\x02\x02\x02>\u020B\x03\x02\x02\x02@\u0213\x03\x02\x02\x02" +
		"B\u0225\x03\x02\x02\x02D\u022E\x03\x02\x02\x02F\u0230\x03\x02\x02\x02" +
		"H\u023B\x03\x02\x02\x02J\u0249\x03\x02\x02\x02L\u026C\x03\x02\x02\x02" +
		"N\u026E\x03\x02\x02\x02P\u0271\x03\x02\x02\x02R\u0279\x03\x02\x02\x02" +
		"T\u027E\x03\x02\x02\x02V\u0288\x03\x02\x02\x02X\u028A\x03\x02\x02\x02" +
		"Z\u029A\x03\x02\x02\x02\\\u02B4\x03\x02\x02\x02^\u02B6\x03\x02\x02\x02" +
		"`\u02BE\x03\x02\x02\x02b\u02D1\x03\x02\x02\x02d\u02D6\x03\x02\x02\x02" +
		"f\u02DF\x03\x02\x02\x02h\u02EC\x03\x02\x02\x02j\u02FA\x03\x02\x02\x02" +
		"l\u02FC\x03\x02\x02\x02n\u02FE\x03\x02\x02\x02p\u0304\x03\x02\x02\x02" +
		"r\u030D\x03\x02\x02\x02t\u0317\x03\x02\x02\x02v\u031F\x03\x02\x02\x02" +
		"x\u0326\x03\x02\x02\x02z\u0328\x03\x02\x02\x02|\u0338\x03\x02\x02\x02" +
		"~\u033D\x03\x02\x02\x02\x80\u034E\x03\x02\x02\x02\x82\u0364\x03\x02\x02" +
		"\x02\x84\u0368\x03\x02\x02\x02\x86\u036A\x03\x02\x02\x02\x88\u0370\x03" +
		"\x02\x02\x02\x8A\u0372\x03\x02\x02\x02\x8C\u0375\x03\x02\x02\x02\x8E\u0383" +
		"\x03\x02\x02\x02\x90\u0388\x03\x02\x02\x02\x92\u0399\x03\x02\x02\x02\x94" +
		"\u0404\x03\x02\x02\x02\x96\u0406\x03\x02\x02\x02\x98\u0413\x03\x02\x02" +
		"\x02\x9A\u041B\x03\x02\x02\x02\x9C\u041E\x03\x02\x02\x02\x9E\u0425\x03" +
		"\x02\x02\x02\xA0\u0430\x03\x02\x02\x02\xA2\u0439\x03\x02\x02\x02\xA4\u044A" +
		"\x03\x02\x02\x02\xA6\u0458\x03\x02\x02\x02\xA8\u045C\x03\x02\x02\x02\xAA" +
		"\u0461\x03\x02\x02\x02\xAC\u0469\x03\x02\x02\x02\xAE\u046D\x03\x02\x02" +
		"\x02\xB0\u0487\x03\x02\x02\x02\xB2\u04B5\x03\x02\x02\x02\xB4\u050A\x03" +
		"\x02\x02\x02\xB6\u051E\x03\x02\x02\x02\xB8\u0522\x03\x02\x02\x02\xBA\u0536" +
		"\x03\x02\x02\x02\xBC\u053B\x03\x02\x02\x02\xBE\u0550\x03\x02\x02\x02\xC0" +
		"\u0561\x03\x02\x02\x02\xC2\u0563\x03\x02\x02\x02\xC4\u0569\x03\x02\x02" +
		"\x02\xC6\u0587\x03\x02\x02\x02\xC8\u058B\x03\x02\x02\x02\xCA\u0591\x03" +
		"\x02\x02\x02\xCC\u0596\x03\x02\x02\x02\xCE\u0598\x03\x02\x02\x02\xD0\u059C" +
		"\x03\x02\x02\x02\xD2\u05A7\x03\x02\x02\x02\xD4\u05BB\x03\x02\x02\x02\xD6" +
		"\u05BD\x03\x02\x02\x02\xD8\u05CE\x03\x02\x02\x02\xDA\u05D4\x03\x02\x02" +
		"\x02\xDC\u05D6\x03\x02\x02\x02\xDE\xE0\x05\x04\x03\x02\xDF\xDE\x03\x02" +
		"\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE4\x03\x02\x02\x02\xE1\xE3\x05\x06" +
		"\x04\x02\xE2\xE1\x03\x02\x02\x02\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02" +
		"\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xEA\x03\x02\x02\x02\xE6\xE4\x03\x02" +
		"\x02\x02\xE7\xE9\x05\b\x05\x02\xE8\xE7\x03\x02\x02\x02\xE9\xEC\x03\x02" +
		"\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xED\x03\x02" +
		"\x02\x02\xEC\xEA\x03\x02\x02\x02\xED\xEE\x07\x02\x02\x03\xEE\x03\x03\x02" +
		"\x02\x02\xEF\xF1\x05(\x15\x02\xF0\xEF\x03\x02\x02\x02\xF1\xF4\x03\x02" +
		"\x02\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF8\x03\x02" +
		"\x02\x02\xF4\xF2\x03\x02\x02\x02\xF5\xF7\x05r:\x02\xF6\xF5\x03\x02\x02" +
		"\x02\xF7\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02" +
		"\x02\xF9\xFB\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFC\x07\"\x02" +
		"\x02\xFC\xFD\x05h5\x02\xFD\xFE\x07E\x02\x02\xFE\x05\x03\x02\x02\x02\xFF" +
		"\u0101\x05(\x15\x02\u0100\xFF\x03\x02\x02\x02\u0101\u0104\x03\x02\x02" +
		"\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0105" +
		"\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0105\u0107\x07\x1B\x02\x02" +
		"\u0106\u0108\x07(\x02\x02\u0107\u0106\x03\x02\x02\x02\u0107\u0108\x03" +
		"\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010C\x05h5\x02\u010A\u010B" +
		"\x07G\x02\x02\u010B\u010D\x07Y\x02\x02\u010C\u010A\x03\x02\x02\x02\u010C" +
		"\u010D\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F\x07E\x02" +
		"\x02\u010F\x07\x03\x02\x02\x02\u0110\u0112\x05(\x15\x02\u0111\u0110\x03" +
		"\x02\x02\x02\u0112\u0115\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0113" +
		"\u0114\x03\x02\x02\x02\u0114\u0119\x03\x02\x02\x02\u0115\u0113\x03\x02" +
		"\x02\x02\u0116\u0118\x05\f\x07\x02\u0117\u0116\x03\x02\x02\x02\u0118\u011B" +
		"\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02" +
		"\u011A\u0120\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011C\u0121\x05" +
		"\x10\t\x02\u011D\u0121\x05\x1C\x0F\x02\u011E\u0121\x05$\x13\x02\u011F" +
		"\u0121\x05|?\x02\u0120\u011C\x03\x02\x02\x02\u0120\u011D\x03\x02\x02\x02" +
		"\u0120\u011E\x03\x02\x02\x02\u0120\u011F\x03\x02\x02\x02\u0121\u0124\x03" +
		"\x02\x02\x02\u0122\u0124\x07E\x02\x02\u0123\u0113\x03\x02\x02\x02\u0123" +
		"\u0122\x03\x02\x02\x02\u0124\t\x03\x02\x02\x02\u0125\u012B\x05\f\x07\x02" +
		"\u0126\u012B\x07 \x02\x02\u0127\u012B\x07,\x02\x02\u0128\u012B\x070\x02" +
		"\x02\u0129\u012B\x073\x02\x02\u012A\u0125\x03\x02\x02\x02\u012A\u0126" +
		"\x03\x02\x02\x02\u012A\u0127\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02" +
		"\u012A\u0129\x03\x02\x02\x02\u012B\v\x03\x02\x02\x02\u012C\u0135\x05r" +
		":\x02\u012D\u0135\x07%\x02\x02\u012E\u0135\x07$\x02\x02\u012F\u0135\x07" +
		"#\x02\x02\u0130\u0135\x07(\x02\x02\u0131\u0135\x07\x03\x02\x02\u0132\u0135" +
		"\x07\x14\x02\x02\u0133\u0135\x07)\x02\x02\u0134\u012C\x03\x02\x02\x02" +
		"\u0134\u012D\x03\x02\x02\x02\u0134\u012E\x03\x02\x02\x02\u0134\u012F\x03" +
		"\x02\x02\x02\u0134\u0130\x03\x02\x02\x02\u0134\u0131\x03\x02\x02\x02\u0134" +
		"\u0132\x03\x02\x02\x02\u0134\u0133\x03\x02\x02\x02\u0135\r\x03\x02\x02" +
		"\x02\u0136\u0139\x07\x14\x02\x02\u0137\u0139\x05r:\x02\u0138\u0136\x03" +
		"\x02\x02\x02\u0138\u0137\x03\x02\x02\x02\u0139\x0F\x03\x02\x02\x02\u013A" +
		"\u013B\x07\v\x02\x02\u013B\u013D\x07r\x02\x02\u013C\u013E\x05\x16\f\x02" +
		"\u013D\u013C\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0140\x03" +
		"\x02\x02\x02\u013F\u0141\x05\x12\n\x02\u0140\u013F\x03\x02\x02\x02\u0140" +
		"\u0141\x03\x02\x02\x02\u0141\u0143\x03\x02\x02\x02\u0142\u0144\x05";
	private static readonly _serializedATNSegment1: string =
		"\x14\v\x02\u0143\u0142\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144" +
		"\u0145\x03\x02\x02\x02\u0145\u0146\x05*\x16\x02\u0146\x11\x03\x02\x02" +
		"\x02\u0147\u0148\x07\x13\x02\x02\u0148\u0149\x05\xD2j\x02\u0149\x13\x03" +
		"\x02\x02\x02\u014A\u014B\x07\x1A\x02\x02\u014B\u014C\x05\xD0i\x02\u014C" +
		"\x15\x03\x02\x02\x02\u014D\u014E\x07J\x02\x02\u014E\u0153\x05\x18\r\x02" +
		"\u014F\u0150\x07F\x02\x02\u0150\u0152\x05\x18\r\x02\u0151\u014F\x03\x02" +
		"\x02\x02\u0152\u0155\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153" +
		"\u0154\x03\x02\x02\x02\u0154\u0156\x03\x02\x02\x02\u0155\u0153\x03\x02" +
		"\x02\x02\u0156\u0157\x07I\x02\x02\u0157\x17\x03\x02\x02\x02\u0158\u015A" +
		"\x05r:\x02\u0159\u0158\x03\x02\x02\x02\u015A\u015D\x03\x02\x02\x02\u015B" +
		"\u0159\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\u015E\x03\x02" +
		"\x02\x02\u015D\u015B\x03\x02\x02\x02\u015E\u0167\x07r\x02\x02\u015F\u0163" +
		"\x07\x13\x02\x02\u0160\u0162\x05r:\x02\u0161\u0160\x03\x02\x02\x02\u0162" +
		"\u0165\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02" +
		"\x02\x02\u0164\u0166\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0166" +
		"\u0168\x05\x1A\x0E\x02\u0167\u015F\x03\x02\x02\x02\u0167\u0168\x03\x02" +
		"\x02\x02\u0168\x19\x03\x02\x02\x02\u0169\u016E\x05\xD2j\x02\u016A\u016B" +
		"\x07[\x02\x02\u016B\u016D\x05\xD2j\x02\u016C\u016A\x03\x02\x02\x02\u016D" +
		"\u0170\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02" +
		"\x02\x02\u016F\x1B\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0172" +
		"\x07\x12\x02\x02\u0172\u0175\x07r\x02\x02\u0173\u0174\x07\x1A\x02\x02" +
		"\u0174\u0176\x05\xD0i\x02\u0175\u0173\x03\x02\x02\x02\u0175\u0176\x03" +
		"\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0179\x07A\x02\x02\u0178" +
		"\u017A\x05\x1E\x10\x02\u0179\u0178\x03\x02\x02\x02\u0179\u017A\x03\x02" +
		"\x02\x02\u017A\u017C\x03\x02\x02\x02\u017B\u017D\x07F\x02\x02\u017C\u017B" +
		"\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017F\x03\x02\x02\x02" +
		"\u017E\u0180\x05\"\x12\x02\u017F\u017E\x03\x02\x02\x02\u017F\u0180\x03" +
		"\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0182\x07B\x02\x02\u0182" +
		"\x1D\x03\x02\x02\x02\u0183\u0188\x05 \x11\x02\u0184\u0185\x07F\x02\x02" +
		"\u0185\u0187\x05 \x11\x02\u0186\u0184\x03\x02\x02\x02\u0187\u018A\x03" +
		"\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189" +
		"\x1F\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018B\u018D\x05(\x15" +
		"\x02\u018C\u018B\x03\x02\x02\x02\u018D\u0190\x03\x02\x02\x02\u018E\u018C" +
		"\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0194\x03\x02\x02\x02" +
		"\u0190\u018E\x03\x02\x02\x02\u0191\u0193\x05r:\x02\u0192\u0191\x03\x02" +
		"\x02\x02\u0193\u0196\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194" +
		"\u0195\x03\x02\x02\x02\u0195\u0197\x03\x02\x02\x02\u0196\u0194\x03\x02" +
		"\x02\x02\u0197\u0199\x07r\x02\x02\u0198\u019A\x05\xDCo\x02\u0199\u0198" +
		"\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019C\x03\x02\x02\x02" +
		"\u019B\u019D\x05*\x16\x02\u019C\u019B\x03\x02\x02\x02\u019C\u019D\x03" +
		"\x02\x02\x02\u019D!\x03\x02\x02\x02\u019E\u01A2\x07E\x02\x02\u019F\u01A1" +
		"\x05.\x18\x02\u01A0\u019F\x03\x02\x02\x02\u01A1\u01A4\x03\x02\x02\x02" +
		"\u01A2\u01A0\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3#\x03\x02" +
		"\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A5\u01A6\x07\x1E\x02\x02\u01A6" +
		"\u01A8\x07r\x02\x02\u01A7\u01A9\x05\x16\f\x02\u01A8\u01A7\x03\x02\x02" +
		"\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02\u01AA\u01AC" +
		"\x05&\x14\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02" +
		"\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AE\x05,\x17\x02\u01AE%\x03\x02\x02" +
		"\x02\u01AF\u01B0\x07\x13\x02\x02\u01B0\u01B1\x05\xD0i\x02\u01B1\'\x03" +
		"\x02\x02\x02\u01B2\u01B3\x07o\x02\x02\u01B3)\x03\x02\x02\x02\u01B4\u01B8" +
		"\x07A\x02\x02\u01B5\u01B7\x05.\x18\x02\u01B6\u01B5\x03\x02\x02\x02\u01B7" +
		"\u01BA\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B9\x03\x02" +
		"\x02\x02\u01B9\u01BB\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BB" +
		"\u01BC\x07B\x02\x02\u01BC+\x03\x02\x02\x02\u01BD\u01C1\x07A\x02\x02\u01BE" +
		"\u01C0\x05B\"\x02\u01BF\u01BE\x03\x02\x02\x02\u01C0\u01C3\x03\x02\x02" +
		"\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C4" +
		"\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C4\u01C5\x07B\x02\x02" +
		"\u01C5-\x03\x02\x02\x02\u01C6\u01DF\x07E\x02\x02\u01C7\u01C9\x05(\x15" +
		"\x02\u01C8\u01C7\x03\x02\x02\x02\u01C9\u01CC\x03\x02\x02\x02\u01CA\u01C8" +
		"\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CE\x03\x02\x02\x02" +
		"\u01CC\u01CA\x03\x02\x02\x02\u01CD\u01CF\x07(\x02\x02\u01CE\u01CD\x03" +
		"\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0" +
		"\u01DF\x05\x8CG\x02\u01D1\u01D3\x05(\x15\x02\u01D2\u01D1\x03\x02\x02\x02" +
		"\u01D3\u01D6\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03" +
		"\x02\x02\x02\u01D5\u01DA\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7" +
		"\u01D9\x05\n\x06\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02" +
		"\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DD" +
		"\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01DF\x050\x19\x02" +
		"\u01DE\u01C6\x03\x02\x02\x02\u01DE\u01CA\x03\x02\x02\x02\u01DE\u01D4\x03" +
		"\x02\x02\x02\u01DF/\x03\x02\x02\x02\u01E0\u01EA\x052\x1A\x02\u01E1\u01EA" +
		"\x05:\x1E\x02\u01E2\u01EA\x05@!\x02\u01E3\u01EA\x05> \x02\u01E4\u01EA" +
		"\x05<\x1F\x02\u01E5\u01EA\x05$\x13\x02\u01E6\u01EA\x05|?\x02\u01E7\u01EA" +
		"\x05\x10\t\x02\u01E8\u01EA\x05\x1C\x0F\x02\u01E9\u01E0\x03\x02\x02\x02" +
		"\u01E9\u01E1\x03\x02\x02\x02\u01E9\u01E2\x03\x02\x02\x02\u01E9\u01E3\x03" +
		"\x02\x02\x02\u01E9\u01E4\x03\x02\x02\x02\u01E9\u01E5\x03\x02\x02\x02\u01E9" +
		"\u01E6\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01E8\x03\x02" +
		"\x02\x02\u01EA1\x03\x02\x02\x02\u01EB\u01EC\x058\x1D\x02\u01EC\u01ED\x07" +
		"r\x02\x02\u01ED\u01F2\x05`1\x02\u01EE\u01EF\x07C\x02\x02\u01EF\u01F1\x07" +
		"D\x02\x02\u01F0\u01EE\x03\x02\x02\x02\u01F1\u01F4\x03\x02\x02\x02\u01F2" +
		"\u01F0\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F6\x03\x02" +
		"\x02\x02\u01F4\u01F2\x03\x02\x02\x02\u01F5\u01F7\x054\x1B\x02\u01F6\u01F5" +
		"\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02" +
		"\u01F8\u01F9\x056\x1C\x02\u01F93\x03\x02\x02\x02\u01FA\u01FB\x07/\x02" +
		"\x02\u01FB\u01FC\x05^0\x02\u01FC5\x03\x02\x02\x02\u01FD\u0200\x05\x8C" +
		"G\x02\u01FE\u0200\x07E\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u01FF\u01FE" +
		"\x03\x02\x02\x02\u02007\x03\x02\x02\x02\u0201\u0204\x05\xD2j\x02\u0202" +
		"\u0204\x072\x02\x02\u0203\u0201\x03\x02\x02\x02\u0203\u0202\x03\x02\x02" +
		"\x02\u02049\x03\x02\x02\x02\u0205\u0206\x05\x16\f\x02\u0206\u0207\x05" +
		"2\x1A\x02\u0207;\x03\x02\x02\x02\u0208\u0209\x05\x16\f\x02\u0209\u020A" +
		"\x05> \x02\u020A=\x03\x02\x02\x02\u020B\u020C\x07r\x02\x02\u020C\u020F" +
		"\x05`1\x02\u020D\u020E\x07/\x02\x02\u020E\u0210\x05^0\x02\u020F\u020D" +
		"\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02" +
		"\u0211\u0212\x05\x8CG\x02\u0212?\x03\x02\x02\x02\u0213\u0214\x05\xD2j" +
		"\x02\u0214\u0215\x05P)\x02\u0215\u0216\x07E\x02\x02\u0216A\x03\x02\x02" +
		"\x02\u0217\u0219\x05(\x15\x02\u0218\u0217\x03\x02\x02\x02\u0219\u021C" +
		"\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02" +
		"\u021B\u0220\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021D\u021F\x05" +
		"\n\x06\x02\u021E\u021D\x03\x02\x02\x02\u021F\u0222\x03\x02\x02\x02\u0220" +
		"\u021E\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0223\x03\x02" +
		"\x02\x02\u0222\u0220\x03\x02\x02\x02\u0223\u0226\x05D#\x02\u0224\u0226" +
		"\x07E\x02\x02\u0225\u021A\x03\x02\x02\x02\u0225\u0224\x03\x02\x02\x02" +
		"\u0226C\x03\x02\x02\x02\u0227\u022F\x05F$\x02\u0228\u022F\x05J&\x02\u0229" +
		"\u022F\x05N(\x02\u022A\u022F\x05$\x13\x02\u022B\u022F\x05|?\x02\u022C" +
		"\u022F\x05\x10\t\x02\u022D\u022F\x05\x1C\x0F\x02\u022E\u0227\x03\x02\x02" +
		"\x02\u022E\u0228\x03\x02\x02\x02\u022E\u0229\x03\x02\x02\x02\u022E\u022A" +
		"\x03\x02\x02\x02\u022E\u022B\x03\x02\x02\x02\u022E\u022C\x03\x02\x02\x02" +
		"\u022E\u022D\x03\x02\x02\x02\u022FE\x03\x02\x02\x02\u0230\u0231\x05\xD2" +
		"j\x02\u0231\u0236\x05H%\x02\u0232\u0233\x07F\x02\x02\u0233\u0235\x05H" +
		"%\x02\u0234\u0232\x03\x02\x02\x02\u0235\u0238\x03\x02\x02\x02\u0236\u0234" +
		"\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u0239\x03\x02\x02\x02" +
		"\u0238\u0236\x03\x02\x02\x02\u0239\u023A\x07E\x02\x02\u023AG\x03\x02\x02" +
		"\x02\u023B\u0240\x07r\x02\x02\u023C\u023D\x07C\x02\x02\u023D\u023F\x07" +
		"D\x02\x02\u023E\u023C\x03\x02\x02\x02\u023F\u0242\x03\x02\x02\x02\u0240" +
		"\u023E\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241\u0243\x03\x02" +
		"\x02\x02\u0242\u0240\x03\x02\x02\x02\u0243\u0244\x07H\x02\x02\u0244\u0245" +
		"\x05V,\x02\u0245I\x03\x02\x02\x02\u0246\u0248\x05L\'\x02\u0247\u0246\x03" +
		"\x02\x02\x02\u0248\u024B\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02\u0249" +
		"\u024A\x03\x02\x02\x02\u024A\u0256\x03\x02\x02\x02\u024B\u0249\x03\x02" +
		"\x02\x02\u024C\u0257\x058\x1D\x02\u024D\u0251\x05\x16\f\x02\u024E\u0250" +
		"\x05r:\x02\u024F\u024E\x03\x02\x02\x02\u0250\u0253\x03\x02\x02\x02\u0251" +
		"\u024F\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252\u0254\x03\x02" +
		"\x02\x02\u0253\u0251\x03\x02\x02\x02\u0254\u0255\x058\x1D\x02\u0255\u0257" +
		"\x03\x02\x02\x02\u0256\u024C\x03\x02\x02\x02\u0256\u024D\x03\x02\x02\x02" +
		"\u0257\u0258\x03\x02\x02\x02\u0258\u0259\x07r\x02\x02\u0259\u025E\x05" +
		"`1\x02\u025A\u025B\x07C\x02\x02\u025B\u025D\x07D\x02\x02\u025C\u025A\x03" +
		"\x02\x02\x02\u025D\u0260\x03\x02\x02\x02\u025E\u025C\x03\x02\x02\x02\u025E" +
		"\u025F\x03\x02\x02\x02\u025F\u0262\x03\x02\x02\x02\u0260\u025E\x03\x02" +
		"\x02\x02\u0261\u0263\x054\x1B\x02\u0262\u0261\x03\x02\x02\x02\u0262\u0263" +
		"\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0265\x056\x1C\x02" +
		"\u0265K\x03\x02\x02\x02\u0266\u026D\x05r:\x02\u0267\u026D\x07%\x02\x02" +
		"\u0268\u026D\x07\x03\x02\x02\u0269\u026D\x07\x0E\x02\x02\u026A\u026D\x07" +
		"(\x02\x02\u026B\u026D\x07)\x02\x02\u026C\u0266\x03\x02\x02\x02\u026C\u0267" +
		"\x03\x02\x02\x02\u026C\u0268\x03\x02\x02\x02\u026C\u0269\x03\x02\x02\x02" +
		"\u026C\u026A\x03\x02\x02\x02\u026C\u026B\x03\x02\x02\x02\u026DM\x03\x02" +
		"\x02\x02\u026E\u026F\x05\x16\f\x02\u026F\u0270\x05J&\x02\u0270O\x03\x02" +
		"\x02\x02\u0271\u0276\x05R*\x02\u0272\u0273\x07F\x02\x02\u0273\u0275\x05" +
		"R*\x02\u0274\u0272\x03\x02\x02\x02\u0275\u0278\x03\x02\x02\x02\u0276\u0274" +
		"\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277Q\x03\x02\x02\x02\u0278" +
		"\u0276\x03\x02\x02\x02\u0279\u027C\x05T+\x02\u027A\u027B\x07H\x02\x02" +
		"\u027B\u027D\x05V,\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027D\x03\x02" +
		"\x02\x02\u027DS\x03\x02\x02\x02\u027E\u0283\x07r\x02\x02\u027F\u0280\x07" +
		"C\x02\x02\u0280\u0282\x07D\x02\x02\u0281\u027F\x03\x02\x02\x02\u0282\u0285" +
		"\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0283\u0284\x03\x02\x02\x02" +
		"\u0284U\x03\x02\x02\x02\u0285\u0283\x03\x02\x02\x02\u0286\u0289\x05X-" +
		"\x02\u0287\u0289\x05\xB2Z\x02\u0288\u0286\x03\x02\x02\x02\u0288\u0287" +
		"\x03\x02\x02\x02\u0289W\x03\x02\x02\x02\u028A\u0296\x07A\x02\x02\u028B" +
		"\u0290\x05V,\x02\u028C\u028D\x07F\x02\x02\u028D\u028F\x05V,\x02\u028E" +
		"\u028C\x03\x02\x02\x02\u028F\u0292\x03\x02\x02\x02\u0290\u028E\x03\x02" +
		"\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291\u0294\x03\x02\x02\x02\u0292" +
		"\u0290\x03\x02\x02\x02\u0293\u0295\x07F\x02\x02\u0294\u0293\x03\x02\x02" +
		"\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0297\x03\x02\x02\x02\u0296\u028B" +
		"\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02" +
		"\u0298\u0299\x07B\x02\x02\u0299Y\x03\x02\x02\x02\u029A\u029C\x07r\x02" +
		"\x02\u029B\u029D\x05\xD6l\x02\u029C\u029B\x03\x02\x02\x02\u029C\u029D" +
		"\x03\x02\x02\x02\u029D\u02A5\x03\x02\x02\x02\u029E\u029F\x07G\x02\x02" +
		"\u029F\u02A1\x07r\x02\x02\u02A0\u02A2\x05\xD6l\x02\u02A1\u02A0\x03\x02" +
		"\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A4\x03\x02\x02\x02\u02A3" +
		"\u029E\x03\x02\x02\x02\u02A4\u02A7\x03\x02\x02\x02\u02A5\u02A3\x03\x02" +
		"\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6[\x03\x02\x02\x02\u02A7\u02A5" +
		"\x03\x02\x02\x02\u02A8\u02B5\x05\xD2j\x02\u02A9\u02AB\x05r:\x02\u02AA" +
		"\u02A9\x03\x02\x02\x02\u02AB\u02AE\x03\x02\x02\x02\u02AC\u02AA\x03\x02" +
		"\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD\u02AF\x03\x02\x02\x02\u02AE" +
		"\u02AC\x03\x02\x02\x02\u02AF\u02B2\x07M\x02\x02\u02B0\u02B1\t\x02\x02" +
		"\x02\u02B1\u02B3\x05\xD2j\x02\u02B2\u02B0\x03\x02\x02\x02\u02B2\u02B3" +
		"\x03\x02\x02\x02\u02B3\u02B5\x03\x02\x02\x02\u02B4\u02A8\x03\x02\x02\x02" +
		"\u02B4\u02AC\x03\x02\x02\x02\u02B5]\x03\x02\x02\x02\u02B6\u02BB\x05h5" +
		"\x02\u02B7\u02B8\x07F\x02\x02\u02B8\u02BA\x05h5\x02\u02B9\u02B7\x03\x02" +
		"\x02\x02\u02BA\u02BD\x03\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BB" +
		"\u02BC\x03\x02\x02\x02\u02BC_\x03\x02\x02\x02\u02BD\u02BB\x03\x02\x02" +
		"\x02\u02BE\u02C0\x07?\x02\x02\u02BF\u02C1\x05b2\x02\u02C0\u02BF\x03\x02" +
		"\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2" +
		"\u02C3\x07@\x02\x02\u02C3a\x03\x02\x02\x02\u02C4\u02C9\x05d3\x02\u02C5" +
		"\u02C6\x07F\x02\x02\u02C6\u02C8\x05d3\x02\u02C7\u02C5\x03\x02\x02\x02" +
		"\u02C8\u02CB\x03\x02\x02\x02\u02C9\u02C7\x03\x02\x02\x02\u02C9\u02CA\x03" +
		"\x02\x02\x02\u02CA\u02CE\x03\x02\x02\x02\u02CB\u02C9\x03\x02\x02\x02\u02CC" +
		"\u02CD\x07F\x02\x02\u02CD\u02CF\x05f4\x02\u02CE\u02CC\x03\x02\x02\x02" +
		"\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02D2\x03\x02\x02\x02\u02D0\u02D2\x05" +
		"f4\x02\u02D1\u02C4\x03\x02\x02\x02\u02D1\u02D0\x03\x02\x02\x02\u02D2c" +
		"\x03\x02\x02\x02\u02D3\u02D5\x05\x0E\b\x02\u02D4\u02D3\x03\x02\x02\x02" +
		"\u02D5\u02D8\x03\x02\x02\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6\u02D7\x03" +
		"\x02\x02\x02\u02D7\u02D9\x03\x02\x02\x02\u02D8\u02D6\x03\x02\x02\x02\u02D9" +
		"\u02DA\x05\xD2j\x02\u02DA\u02DB\x05T+\x02\u02DBe\x03\x02\x02\x02\u02DC" +
		"\u02DE\x05\x0E\b\x02\u02DD\u02DC\x03\x02\x02\x02\u02DE\u02E1\x03\x02\x02" +
		"\x02\u02DF\u02DD\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\u02E2" +
		"\x03\x02\x02\x02\u02E1\u02DF\x03\x02\x02\x02\u02E2\u02E6\x05\xD2j\x02" +
		"\u02E3\u02E5\x05r:\x02\u02E4\u02E3\x03\x02\x02\x02\u02E5\u02E8\x03\x02" +
		"\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E6\u02E7\x03\x02\x02\x02\u02E7" +
		"\u02E9\x03\x02\x02\x02\u02E8\u02E6\x03\x02\x02\x02\u02E9\u02EA\x07m\x02" +
		"\x02\u02EA\u02EB\x05T+\x02\u02EBg\x03\x02\x02\x02\u02EC\u02F1\x07r\x02" +
		"\x02\u02ED\u02EE\x07G\x02\x02\u02EE\u02F0\x07r\x02\x02\u02EF\u02ED\x03" +
		"\x02\x02\x02\u02F0\u02F3\x03\x02\x02\x02\u02F1\u02EF\x03\x02\x02\x02\u02F1" +
		"\u02F2\x03\x02\x02\x02\u02F2i\x03\x02\x02\x02\u02F3\u02F1\x03\x02\x02" +
		"\x02\u02F4\u02FB\x05l7\x02\u02F5\u02FB\x05n8\x02\u02F6\u02FB\x07<\x02" +
		"\x02\u02F7\u02FB\x07=\x02\x02\u02F8\u02FB\x07;\x02\x02\u02F9\u02FB\x07" +
		">\x02\x02\u02FA\u02F4\x03\x02\x02\x02\u02FA\u02F5\x03\x02\x02\x02\u02FA" +
		"\u02F6\x03\x02\x02\x02\u02FA\u02F7\x03\x02\x02\x02\u02FA\u02F8\x03\x02" +
		"\x02\x02\u02FA\u02F9\x03\x02\x02\x02\u02FBk\x03\x02\x02\x02\u02FC\u02FD" +
		"\t\x03\x02\x02\u02FDm\x03\x02\x02\x02\u02FE\u02FF\t\x04\x02\x02\u02FF" +
		"o\x03\x02\x02\x02\u0300\u0301\x07r\x02\x02\u0301\u0303\x07G\x02\x02\u0302" +
		"\u0300\x03\x02\x02\x02\u0303\u0306\x03\x02\x02\x02\u0304\u0302\x03\x02" +
		"\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305\u0307\x03\x02\x02\x02\u0306" +
		"\u0304\x03\x02\x02\x02\u0307\u0308\x07l\x02\x02\u0308\u0309\x07r\x02\x02" +
		"\u0309q\x03\x02\x02\x02\u030A\u030B\x07l\x02\x02\u030B\u030E\x05h5\x02" +
		"\u030C\u030E\x05p9\x02\u030D\u030A\x03\x02\x02\x02\u030D\u030C\x03\x02" +
		"\x02\x02\u030E\u0315\x03\x02\x02\x02\u030F\u0312\x07?\x02\x02\u0310\u0313" +
		"\x05t;\x02\u0311\u0313\x05x=\x02\u0312\u0310\x03\x02\x02\x02\u0312\u0311" +
		"\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0314\x03\x02\x02\x02" +
		"\u0314\u0316\x07@\x02\x02\u0315\u030F\x03\x02\x02\x02\u0315\u0316\x03" +
		"\x02\x02\x02\u0316s\x03\x02\x02\x02\u0317\u031C\x05v<\x02\u0318\u0319" +
		"\x07F\x02\x02\u0319\u031B\x05v<\x02\u031A\u0318\x03\x02\x02\x02\u031B" +
		"\u031E\x03\x02\x02\x02\u031C\u031A\x03\x02\x02\x02\u031C\u031D\x03\x02" +
		"\x02\x02\u031Du\x03\x02\x02\x02\u031E\u031C\x03\x02\x02\x02\u031F\u0320" +
		"\x07r\x02\x02\u0320\u0321\x07H\x02\x02\u0321\u0322\x05x=\x02\u0322w\x03" +
		"\x02\x02\x02\u0323\u0327\x05\xB2Z\x02\u0324\u0327\x05r:\x02\u0325\u0327" +
		"\x05z>\x02\u0326\u0323\x03\x02\x02\x02\u0326\u0324\x03\x02\x02\x02\u0326" +
		"\u0325\x03\x02\x02\x02\u0327y\x03\x02\x02\x02\u0328\u0331\x07A\x02\x02" +
		"\u0329\u032E\x05x=\x02\u032A\u032B\x07F\x02\x02\u032B\u032D\x05x=\x02" +
		"\u032C\u032A\x03\x02\x02\x02\u032D\u0330\x03\x02\x02\x02\u032E\u032C\x03" +
		"\x02\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u0332\x03\x02\x02\x02\u0330" +
		"\u032E\x03\x02\x02\x02\u0331\u0329\x03\x02\x02\x02\u0331\u0332\x03\x02" +
		"\x02\x02\u0332\u0334\x03\x02\x02\x02\u0333\u0335\x07F\x02\x02\u0334\u0333" +
		"\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335\u0336\x03\x02\x02\x02" +
		"\u0336\u0337\x07B\x02\x02\u0337{\x03\x02\x02\x02\u0338\u0339\x07l\x02" +
		"\x02\u0339\u033A\x07\x1E\x02\x02\u033A\u033B\x07r\x02\x02\u033B\u033C" +
		"\x05~@\x02\u033C}\x03\x02\x02\x02\u033D\u0341\x07A\x02\x02\u033E\u0340" +
		"\x05\x80A\x02\u033F\u033E\x03\x02\x02\x02\u0340\u0343\x03\x02\x02\x02" +
		"\u0341\u033F\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0344\x03" +
		"\x02\x02\x02\u0343\u0341\x03\x02\x02\x02\u0344\u0345\x07B\x02\x02\u0345" +
		"\x7F\x03\x02\x02\x02\u0346\u0348\x05\n\x06\x02\u0347\u0346\x03\x02\x02" +
		"\x02\u0348\u034B\x03\x02\x02\x02\u0349\u0347\x03\x02\x02\x02\u0349\u034A" +
		"\x03\x02\x02\x02\u034A\u034C\x03\x02\x02\x02\u034B\u0349\x03\x02\x02\x02" +
		"\u034C\u034F\x05\x82B\x02\u034D\u034F\x07E\x02\x02\u034E\u0349\x03\x02" +
		"\x02\x02\u034E\u034D\x03\x02\x02\x02\u034F\x81\x03\x02\x02\x02\u0350\u0351" +
		"\x05\xD2j\x02\u0351\u0352\x05\x84C\x02\u0352\u0353\x07E\x02\x02\u0353" +
		"\u0365\x03\x02\x02\x02\u0354\u0356\x05\x10\t\x02\u0355\u0357\x07E\x02" +
		"\x02\u0356\u0355\x03\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357\u0365" +
		"\x03\x02\x02\x02\u0358\u035A\x05$\x13\x02\u0359\u035B\x07E\x02\x02\u035A" +
		"\u0359\x03\x02\x02\x02\u035A\u035B\x03\x02\x02\x02\u035B\u0365\x03\x02" +
		"\x02\x02\u035C\u035E\x05\x1C\x0F\x02\u035D\u035F\x07E\x02\x02\u035E\u035D" +
		"\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\u0365\x03\x02\x02\x02" +
		"\u0360\u0362\x05|?\x02\u0361\u0363\x07E\x02\x02\u0362\u0361\x03\x02\x02" +
		"\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0365\x03\x02\x02\x02\u0364\u0350" +
		"\x03\x02\x02\x02\u0364\u0354\x03\x02\x02\x02\u0364\u0358\x03\x02\x02\x02" +
		"\u0364\u035C\x03\x02\x02\x02\u0364\u0360\x03\x02\x02\x02\u0365\x83\x03" +
		"\x02\x02\x02\u0366\u0369\x05\x86D\x02\u0367\u0369\x05\x88E\x02\u0368\u0366" +
		"\x03\x02\x02\x02\u0368\u0367\x03\x02\x02\x02\u0369\x85\x03\x02\x02\x02" +
		"\u036A\u036B\x07r\x02\x02\u036B\u036C\x07?\x02\x02\u036C\u036E\x07@\x02" +
		"\x02\u036D\u036F\x05\x8AF\x02\u036E\u036D\x03\x02\x02\x02\u036E\u036F" +
		"\x03\x02\x02\x02\u036F\x87\x03\x02\x02\x02\u0370\u0371\x05P)\x02\u0371" +
		"\x89\x03\x02\x02\x02\u0372\u0373\x07\x0E\x02\x02\u0373\u0374\x05x=\x02" +
		"\u0374\x8B\x03\x02\x02\x02\u0375\u0379\x07A\x02\x02\u0376\u0378\x05\x8E" +
		"H\x02\u0377\u0376\x03\x02\x02\x02\u0378\u037B\x03\x02\x02\x02\u0379\u0377" +
		"\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\u037C\x03\x02\x02\x02" +
		"\u037B\u0379\x03\x02\x02\x02\u037C\u037D\x07B\x02\x02\u037D\x8D\x03\x02" +
		"\x02\x02\u037E\u037F\x05\x90I\x02\u037F\u0380\x07E\x02\x02\u0380\u0384" +
		"\x03\x02\x02\x02\u0381\u0384\x05\x94K\x02\u0382\u0384\x05\x92J\x02\u0383" +
		"\u037E\x03\x02\x02\x02\u0383\u0381\x03\x02\x02\x02\u0383\u0382\x03\x02" +
		"\x02\x02\u0384\x8F\x03\x02\x02\x02\u0385\u0387\x05\x0E\b\x02\u0386\u0385" +
		"\x03\x02\x02\x02\u0387\u038A\x03\x02\x02\x02\u0388\u0386\x03\x02\x02\x02" +
		"\u0388\u0389\x03\x02\x02\x02\u0389\u038B\x03\x02\x02\x02\u038A\u0388\x03" +
		"\x02\x02\x02\u038B\u038C\x05\xD2j\x02\u038C\u038D\x05P)\x02\u038D\x91" +
		"\x03\x02\x02\x02\u038E\u0390\x05\f\x07\x02\u038F\u038E\x03\x02\x02\x02" +
		"\u0390\u0393\x03\x02\x02\x02\u0391\u038F\x03\x02\x02\x02\u0391\u0392\x03" +
		"\x02\x02\x02\u0392\u0396\x03\x02\x02\x02\u0393\u0391\x03\x02\x02\x02\u0394" +
		"\u0397\x05\x10\t\x02\u0395\u0397\x05$\x13\x02\u0396\u0394\x03\x02\x02" +
		"\x02\u0396\u0395\x03\x02\x02\x02\u0397\u039A\x03\x02\x02\x02\u0398\u039A" +
		"\x07E\x02\x02\u0399\u0391\x03\x02\x02\x02\u0399\u0398\x03\x02\x02\x02" +
		"\u039A\x93\x03\x02\x02\x02\u039B\u0405\x05\x8CG\x02\u039C\u039D\x07\x04" +
		"\x02\x02\u039D\u03A0\x05\xB2Z\x02\u039E\u039F\x07N\x02\x02\u039F\u03A1" +
		"\x05\xB2Z\x02\u03A0\u039E\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02" +
		"\u03A1\u03A2\x03\x02\x02\x02\u03A2\u03A3\x07E\x02\x02\u03A3\u0405\x03" +
		"\x02\x02\x02\u03A4\u03A5\x07\x18\x02\x02\u03A5\u03A6\x05\xACW\x02\u03A6" +
		"\u03A9\x05\x94K\x02\u03A7\u03A8\x07\x11\x02\x02\u03A8\u03AA\x05\x94K\x02" +
		"\u03A9\u03A7\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u0405\x03" +
		"\x02\x02\x02\u03AB\u03AC\x07\x17\x02\x02\u03AC\u03AD\x07?\x02\x02\u03AD" +
		"\u03AE\x05\xA6T\x02\u03AE\u03AF\x07@\x02\x02\u03AF\u03B0\x05\x94K\x02" +
		"\u03B0\u0405\x03\x02\x02\x02\u03B1\u03B2\x074\x02\x02\u03B2\u03B3\x05" +
		"\xACW\x02\u03B3\u03B4\x05\x94K\x02\u03B4\u0405\x03\x02\x02\x02\u03B5\u03B6" +
		"\x07\x0F\x02\x02\u03B6\u03B7\x05\x94K\x02\u03B7\u03B8\x074\x02\x02\u03B8" +
		"\u03B9\x05\xACW\x02\u03B9\u03BA\x07E\x02\x02\u03BA\u0405\x03\x02\x02\x02" +
		"\u03BB\u03BC\x071\x02\x02\u03BC\u03C6\x05\x8CG\x02\u03BD\u03BF\x05\x96" +
		"L\x02\u03BE\u03BD\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0\u03BE" +
		"\x03\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03C3\x03\x02\x02\x02" +
		"\u03C2\u03C4\x05\x9AN\x02\u03C3\u03C2\x03\x02\x02\x02\u03C3\u03C4\x03" +
		"\x02\x02\x02\u03C4\u03C7\x03\x02\x02\x02\u03C5\u03C7\x05\x9AN\x02\u03C6" +
		"\u03BE\x03\x02\x02\x02\u03C6\u03C5\x03\x02\x02\x02\u03C7\u0405\x03\x02" +
		"\x02\x02\u03C8\u03C9\x071\x02\x02\u03C9\u03CA\x05\x9CO\x02\u03CA\u03CE" +
		"\x05\x8CG\x02\u03CB\u03CD\x05\x96L\x02\u03CC\u03CB\x03\x02\x02\x02\u03CD" +
		"\u03D0\x03\x02\x02\x02\u03CE\u03CC\x03\x02\x02\x02\u03CE\u03CF\x03\x02" +
		"\x02\x02\u03CF\u03D2\x03\x02\x02\x02\u03D0\u03CE\x03\x02\x02\x02\u03D1" +
		"\u03D3\x05\x9AN\x02\u03D2\u03D1\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02" +
		"\x02\u03D3\u0405\x03\x02\x02\x02\u03D4\u03D5\x07+\x02\x02\u03D5\u03D6" +
		"\x05\xACW\x02\u03D6\u03DA\x07A\x02\x02\u03D7\u03D9\x05\xA2R\x02\u03D8" +
		"\u03D7\x03\x02\x02\x02\u03D9\u03DC\x03\x02\x02\x02\u03DA\u03D8\x03\x02" +
		"\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03E0\x03\x02\x02\x02\u03DC" +
		"\u03DA\x03\x02\x02\x02\u03DD\u03DF\x05\xA4S\x02\u03DE\u03DD\x03\x02\x02" +
		"\x02\u03DF\u03E2\x03\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02\u03E0\u03E1" +
		"\x03\x02\x02\x02\u03E1\u03E3\x03\x02\x02\x02\u03E2\u03E0\x03\x02\x02\x02" +
		"\u03E3\u03E4\x07B\x02\x02\u03E4\u0405\x03\x02\x02\x02\u03E5\u03E6\x07" +
		",\x02\x02\u03E6\u03E7\x05\xACW\x02\u03E7\u03E8\x05\x8CG\x02\u03E8\u0405" +
		"\x03\x02\x02\x02\u03E9\u03EB\x07&\x02\x02\u03EA\u03EC\x05\xB2Z\x02\u03EB" +
		"\u03EA\x03\x02\x02\x02\u03EB\u03EC\x03\x02\x02\x02\u03EC\u03ED\x03\x02" +
		"\x02\x02\u03ED\u0405\x07E\x02\x02\u03EE\u03EF\x07.\x02\x02\u03EF\u03F0" +
		"\x05\xB2Z\x02\u03F0\u03F1\x07E\x02\x02\u03F1\u0405\x03\x02\x02\x02\u03F2" +
		"\u03F4\x07\x06\x02\x02\u03F3\u03F5\x07r\x02\x02\u03F4\u03F3\x03\x02\x02" +
		"\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u0405" +
		"\x07E\x02\x02\u03F7\u03F9\x07\r\x02\x02\u03F8\u03FA\x07r\x02\x02\u03F9" +
		"\u03F8\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA\u03FB\x03\x02" +
		"\x02\x02\u03FB\u0405\x07E\x02\x02\u03FC\u0405\x07E\x02\x02\u03FD\u0405" +
		"\x05(\x15\x02\u03FE\u03FF\x05\xB2Z\x02\u03FF\u0400\x07E\x02\x02\u0400" +
		"\u0405\x03\x02\x02\x02\u0401\u0402\x07r\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u0402\u0403\x07N\x02\x02\u0403\u0405\x05\x94K\x02\u0404\u039B\x03" +
		"\x02\x02\x02\u0404\u039C\x03\x02\x02\x02\u0404\u03A4\x03\x02\x02\x02\u0404" +
		"\u03AB\x03\x02\x02\x02\u0404\u03B1\x03\x02\x02\x02\u0404\u03B5\x03\x02" +
		"\x02\x02\u0404\u03BB\x03\x02\x02\x02\u0404\u03C8\x03\x02\x02\x02\u0404" +
		"\u03D4\x03\x02\x02\x02\u0404\u03E5\x03\x02\x02\x02\u0404\u03E9\x03\x02" +
		"\x02\x02\u0404\u03EE\x03\x02\x02\x02\u0404\u03F2\x03\x02\x02\x02\u0404" +
		"\u03F7\x03\x02\x02\x02\u0404\u03FC\x03\x02\x02\x02\u0404\u03FD\x03\x02" +
		"\x02\x02\u0404\u03FE\x03\x02\x02\x02\u0404\u0401\x03\x02\x02\x02\u0405" +
		"\x95\x03\x02\x02\x02\u0406\u0407\x07\t\x02\x02\u0407\u040B\x07?\x02\x02" +
		"\u0408\u040A\x05\x0E\b\x02\u0409\u0408\x03\x02\x02\x02\u040A\u040D\x03" +
		"\x02\x02\x02\u040B\u0409\x03\x02\x02\x02\u040B\u040C\x03\x02\x02\x02\u040C" +
		"\u040E\x03\x02\x02\x02\u040D\u040B\x03\x02\x02\x02\u040E\u040F\x05\x98" +
		"M\x02\u040F\u0410\x07r\x02\x02\u0410\u0411\x07@\x02\x02\u0411\u0412\x05" +
		"\x8CG\x02\u0412\x97\x03\x02\x02\x02\u0413\u0418\x05h5\x02\u0414\u0415" +
		"\x07\\\x02\x02\u0415\u0417\x05h5\x02\u0416\u0414\x03\x02\x02\x02\u0417" +
		"\u041A\x03\x02\x02\x02\u0418\u0416\x03\x02\x02\x02\u0418\u0419\x03\x02" +
		"\x02\x02\u0419\x99\x03\x02\x02\x02\u041A\u0418\x03\x02\x02\x02\u041B\u041C" +
		"\x07\x15\x02\x02\u041C\u041D\x05\x8CG\x02\u041D\x9B\x03\x02\x02\x02\u041E" +
		"\u041F\x07?\x02\x02\u041F\u0421\x05\x9EP\x02\u0420\u0422\x07E\x02\x02" +
		"\u0421\u0420\x03\x02\x02\x02\u0421\u0422\x03\x02\x02\x02\u0422\u0423\x03" +
		"\x02\x02\x02\u0423\u0424\x07@\x02\x02\u0424\x9D\x03\x02\x02\x02\u0425" +
		"\u042A\x05\xA0Q\x02\u0426\u0427\x07E\x02\x02\u0427\u0429\x05\xA0Q\x02" +
		"\u0428\u0426\x03\x02\x02\x02\u0429\u042C\x03\x02\x02\x02\u042A\u0428\x03" +
		"\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\x9F\x03\x02\x02\x02\u042C" +
		"\u042A\x03\x02\x02\x02\u042D\u042F\x05\x0E\b\x02\u042E\u042D\x03\x02\x02" +
		"\x02\u042F\u0432\x03\x02\x02\x02\u0430\u042E\x03\x02\x02\x02\u0430\u0431" +
		"\x03\x02\x02\x02\u0431\u0433\x03\x02\x02\x02\u0432\u0430\x03\x02\x02\x02" +
		"\u0433\u0434\x05Z.\x02\u0434\u0435\x05T+\x02\u0435\u0436\x07H\x02\x02" +
		"\u0436\u0437\x05\xB2Z\x02\u0437\xA1\x03\x02\x02\x02\u0438\u043A\x05\xA4" +
		"S\x02\u0439\u0438\x03\x02\x02\x02\u043A\u043B\x03\x02\x02\x02\u043B\u0439" +
		"\x03\x02\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C\u043E\x03\x02\x02\x02" +
		"\u043D\u043F\x05\x8EH\x02\u043E\u043D\x03\x02\x02\x02\u043F\u0440\x03" +
		"\x02\x02\x02\u0440\u043E\x03\x02\x02\x02\u0440\u0441\x03\x02\x02\x02\u0441" +
		"\xA3\x03\x02\x02\x02\u0442\u0445\x07\b\x02\x02\u0443\u0446\x05\xB2Z\x02" +
		"\u0444\u0446\x07r\x02\x02\u0445\u0443\x03\x02\x02\x02\u0445\u0444\x03" +
		"\x02\x02\x02\u0446\u0447\x03\x02\x02\x02\u0447\u044B\x07N\x02\x02\u0448" +
		"\u0449\x07\x0E\x02\x02\u0449\u044B\x07N\x02\x02\u044A\u0442\x03\x02\x02" +
		"\x02\u044A\u0448\x03\x02\x02\x02\u044B\xA5\x03\x02\x02\x02\u044C\u0459" +
		"\x05\xAAV\x02\u044D\u044F\x05\xA8U\x02\u044E\u044D\x03\x02\x02\x02\u044E" +
		"\u044F\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450\u0452\x07E\x02" +
		"\x02\u0451\u0453\x05\xB2Z\x02\u0452\u0451\x03\x02\x02\x02\u0452\u0453" +
		"\x03\x02\x02\x02\u0453\u0454\x03\x02\x02\x02\u0454\u0456\x07E\x02\x02" +
		"\u0455\u0457\x05\xAEX\x02\u0456\u0455\x03\x02\x02\x02\u0456\u0457\x03" +
		"\x02\x02\x02\u0457\u0459\x03\x02\x02\x02\u0458\u044C\x03\x02\x02\x02\u0458" +
		"\u044E\x03\x02\x02\x02\u0459\xA7\x03\x02\x02\x02\u045A\u045D\x05\x90I" +
		"\x02\u045B\u045D\x05\xAEX\x02\u045C\u045A\x03\x02\x02\x02\u045C\u045B" +
		"\x03\x02\x02\x02\u045D\xA9\x03\x02\x02\x02\u045E\u0460\x05\x0E\b\x02\u045F" +
		"\u045E\x03\x02\x02\x02\u0460\u0463\x03\x02\x02\x02\u0461\u045F\x03\x02" +
		"\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462\u0464\x03\x02\x02\x02\u0463" +
		"\u0461\x03\x02\x02\x02\u0464\u0465\x05\xD2j\x02\u0465\u0466\x05T+\x02" +
		"\u0466\u0467\x07N\x02\x02\u0467\u0468\x05\xB2Z\x02\u0468\xAB\x03\x02\x02" +
		"\x02\u0469\u046A\x07?\x02\x02\u046A\u046B\x05\xB2Z\x02\u046B\u046C\x07" +
		"@\x02\x02\u046C\xAD\x03\x02\x02\x02\u046D\u0472\x05\xB2Z\x02\u046E\u046F" +
		"\x07F\x02\x02\u046F\u0471\x05\xB2Z\x02\u0470\u046E\x03\x02\x02\x02\u0471" +
		"\u0474\x03\x02\x02\x02\u0472\u0470\x03\x02\x02\x02\u0472\u0473\x03\x02" +
		"\x02\x02\u0473\xAF\x03\x02\x02\x02\u0474\u0472\x03\x02\x02\x02\u0475\u0476" +
		"\x07r\x02\x02\u0476\u0478\x07?\x02\x02\u0477\u0479\x05\xAEX\x02\u0478" +
		"\u0477\x03\x02\x02\x02\u0478\u0479\x03\x02\x02\x02\u0479\u047A\x03\x02" +
		"\x02\x02\u047A\u0488\x07@\x02\x02\u047B\u047C\x07-\x02\x02\u047C\u047E" +
		"\x07?\x02\x02\u047D\u047F\x05\xAEX\x02\u047E\u047D\x03\x02\x02\x02\u047E" +
		"\u047F\x03\x02\x02\x02\u047F\u0480\x03\x02\x02\x02\u0480\u0488\x07@\x02" +
		"\x02\u0481\u0482\x07*\x02\x02\u0482\u0484\x07?\x02\x02\u0483\u0485\x05" +
		"\xAEX\x02\u0484\u0483\x03\x02\x02\x02\u0484\u0485\x03\x02\x02\x02\u0485" +
		"\u0486\x03\x02\x02\x02\u0486\u0488\x07@\x02\x02\u0487\u0475\x03\x02\x02" +
		"\x02\u0487\u047B\x03\x02\x02\x02\u0487\u0481\x03\x02\x02\x02\u0488\xB1" +
		"\x03\x02\x02\x02\u0489\u048A\bZ\x01\x02\u048A\u04B6\x05\xBA^\x02\u048B" +
		"\u04B6\x05\xB0Y\x02\u048C\u048D\x07!\x02\x02\u048D\u04B6\x05\xBE`\x02" +
		"\u048E\u0492\x07?\x02\x02\u048F\u0491\x05r:\x02\u0490\u048F\x03\x02\x02" +
		"\x02\u0491\u0494\x03\x02\x02\x02\u0492\u0490\x03\x02\x02\x02\u0492\u0493" +
		"\x03\x02\x02\x02\u0493\u0495\x03\x02\x02\x02\u0494\u0492\x03\x02\x02\x02" +
		"\u0495\u049A\x05\xD2j\x02\u0496\u0497\x07[\x02\x02\u0497\u0499\x05\xD2" +
		"j\x02\u0498\u0496\x03\x02\x02\x02\u0499\u049C\x03\x02\x02\x02\u049A\u0498" +
		"\x03\x02\x02\x02\u049A\u049B\x03\x02\x02\x02\u049B\u049D\x03\x02\x02\x02" +
		"\u049C\u049A\x03\x02\x02\x02\u049D\u049E\x07@\x02\x02\u049E\u049F\x05" +
		"\xB2Z\x17\u049F\u04B6\x03\x02\x02\x02\u04A0\u04A1\t\x05\x02\x02\u04A1" +
		"\u04B6\x05\xB2Z\x15\u04A2\u04A3\t\x06\x02\x02\u04A3\u04B6\x05\xB2Z\x14" +
		"\u04A4\u04B6\x05\xB4[\x02\u04A5\u04A6\x05\xD2j\x02\u04A6\u04AC\x07k\x02" +
		"\x02\u04A7\u04A9\x05\xD6l\x02\u04A8\u04A7\x03\x02\x02\x02\u04A8\u04A9" +
		"\x03\x02\x02\x02\u04A9\u04AA\x03\x02\x02\x02\u04AA\u04AD\x07r\x02\x02" +
		"\u04AB\u04AD\x07!\x02\x02\u04AC\u04A8\x03\x02\x02\x02\u04AC\u04AB\x03" +
		"\x02\x02\x02\u04AD\u04B6\x03\x02\x02\x02\u04AE\u04AF\x05\xBC_\x02\u04AF" +
		"\u04B1\x07k\x02\x02\u04B0\u04B2\x05\xD6l\x02\u04B1\u04B0\x03\x02\x02\x02" +
		"\u04B1\u04B2\x03\x02\x02\x02\u04B2\u04B3\x03\x02\x02\x02\u04B3\u04B4\x07" +
		"!\x02\x02\u04B4\u04B6\x03\x02\x02\x02\u04B5\u0489\x03\x02\x02\x02\u04B5" +
		"\u048B\x03\x02\x02\x02\u04B5\u048C\x03\x02\x02\x02\u04B5\u048E\x03\x02" +
		"\x02\x02\u04B5\u04A0\x03\x02\x02\x02\u04B5\u04A2\x03\x02\x02\x02\u04B5" +
		"\u04A4\x03\x02\x02\x02\u04B5\u04A5\x03\x02\x02\x02\u04B5\u04AE\x03\x02" +
		"\x02\x02\u04B6\u0507\x03\x02\x02\x02\u04B7\u04B8\f\x13\x02\x02\u04B8\u04B9" +
		"\t\x07\x02\x02\u04B9\u0506\x05\xB2Z\x14\u04BA\u04BB\f\x12\x02\x02\u04BB" +
		"\u04BC\t\b\x02\x02\u04BC\u0506\x05\xB2Z\x13\u04BD\u04C5\f\x11\x02\x02" +
		"\u04BE\u04BF\x07J\x02\x02\u04BF\u04C6\x07J\x02\x02\u04C0\u04C1\x07I\x02" +
		"\x02\u04C1\u04C2\x07I\x02\x02\u04C2\u04C6\x07I\x02\x02\u04C3\u04C4\x07" +
		"I\x02\x02\u04C4\u04C6\x07I\x02\x02\u04C5\u04BE\x03\x02\x02\x02\u04C5\u04C0" +
		"\x03\x02\x02\x02\u04C5\u04C3\x03\x02\x02\x02\u04C6\u04C7\x03\x02\x02\x02" +
		"\u04C7\u0506\x05\xB2Z\x12\u04C8\u04C9\f\x10\x02\x02\u04C9\u04CA\t\t\x02" +
		"\x02\u04CA\u0506\x05\xB2Z\x11\u04CB\u04CC\f\x0E\x02\x02\u04CC\u04CD\t" +
		"\n\x02\x02\u04CD\u0506\x05\xB2Z\x0F\u04CE\u04CF\f\r\x02\x02\u04CF\u04D0" +
		"\x07[\x02\x02\u04D0\u0506\x05\xB2Z\x0E\u04D1\u04D2\f\f\x02\x02\u04D2\u04D3" +
		"\x07]\x02\x02\u04D3\u0506\x05\xB2Z\r\u04D4\u04D5\f\v\x02\x02\u04D5\u04D6" +
		"\x07\\\x02\x02\u04D6\u0506\x05\xB2Z\f\u04D7\u04D8\f\n\x02\x02\u04D8\u04D9" +
		"\x07S\x02\x02\u04D9\u0506\x05\xB2Z\v\u04DA\u04DB\f\t\x02\x02\u04DB\u04DC" +
		"\x07T\x02\x02\u04DC\u0506\x05\xB2Z\n\u04DD\u04DE\f\b\x02\x02\u04DE\u04DF" +
		"\x07M\x02\x02\u04DF\u04E0\x05\xB2Z\x02\u04E0\u04E1\x07N\x02\x02\u04E1" +
		"\u04E2\x05\xB2Z\b\u04E2\u0506\x03\x02\x02\x02\u04E3\u04E4\f\x07\x02\x02" +
		"\u04E4\u04E5\t\v\x02\x02\u04E5\u0506\x05\xB2Z\x07\u04E6\u04E7\f\x1B\x02" +
		"\x02\u04E7\u04F3\x07G\x02\x02\u04E8\u04F4\x07r\x02\x02\u04E9\u04F4\x05" +
		"\xB0Y\x02\u04EA\u04F4\x07-\x02\x02\u04EB\u04ED\x07!\x02\x02\u04EC\u04EE" +
		"\x05\xCEh\x02\u04ED\u04EC\x03\x02\x02\x02\u04ED\u04EE\x03\x02\x02\x02" +
		"\u04EE\u04EF\x03\x02\x02\x02\u04EF\u04F4\x05\xC2b\x02\u04F0\u04F1\x07" +
		"*\x02\x02\u04F1\u04F4\x05\xD8m\x02\u04F2\u04F4\x05\xC8e\x02\u04F3\u04E8" +
		"\x03\x02\x02\x02\u04F3\u04E9\x03\x02\x02\x02\u04F3\u04EA\x03\x02\x02\x02" +
		"\u04F3\u04EB\x03\x02\x02\x02\u04F3\u04F0\x03\x02\x02\x02\u04F3\u04F2\x03" +
		"\x02\x02\x02\u04F4\u0506\x03\x02\x02\x02\u04F5\u04F6\f\x1A\x02\x02\u04F6" +
		"\u04F7\x07C\x02\x02\u04F7\u04F8\x05\xB2Z\x02\u04F8\u04F9\x07D\x02\x02" +
		"\u04F9\u0506\x03\x02\x02\x02\u04FA\u04FB\f\x16\x02\x02\u04FB\u0506\t\f" +
		"\x02\x02\u04FC\u04FD\f\x0F\x02\x02\u04FD\u04FE\x07\x1C\x02\x02\u04FE\u0506" +
		"\x05\xD2j\x02\u04FF\u0500\f\x05\x02\x02\u0500\u0502\x07k\x02\x02\u0501" +
		"\u0503\x05\xD6l\x02\u0502\u0501\x03\x02\x02\x02\u0502\u0503\x03\x02\x02" +
		"\x02\u0503\u0504\x03\x02\x02\x02\u0504\u0506\x07r\x02\x02\u0505\u04B7" +
		"\x03\x02\x02\x02\u0505\u04BA\x03\x02\x02\x02\u0505\u04BD\x03\x02\x02\x02" +
		"\u0505\u04C8\x03\x02\x02\x02\u0505\u04CB\x03\x02\x02\x02\u0505\u04CE\x03" +
		"\x02\x02\x02\u0505\u04D1\x03\x02\x02\x02\u0505\u04D4\x03\x02\x02\x02\u0505" +
		"\u04D7\x03\x02\x02\x02\u0505\u04DA\x03\x02\x02\x02\u0505\u04DD\x03\x02" +
		"\x02\x02\u0505\u04E3\x03\x02\x02\x02\u0505\u04E6\x03\x02\x02\x02\u0505" +
		"\u04F5\x03\x02\x02\x02\u0505\u04FA\x03\x02\x02\x02\u0505\u04FC\x03\x02" +
		"\x02\x02\u0505\u04FF\x03\x02\x02\x02\u0506\u0509\x03\x02\x02\x02\u0507" +
		"\u0505\x03\x02\x02\x02\u0507\u0508\x03\x02\x02\x02\u0508\xB3\x03\x02\x02" +
		"\x02\u0509\u0507\x03\x02\x02\x02\u050A\u050B\x05\xB6\\\x02\u050B\u050C" +
		"\x07j\x02\x02\u050C\u050D\x05\xB8]\x02\u050D\xB5\x03\x02\x02\x02\u050E" +
		"\u051F\x07r\x02\x02\u050F\u0511\x07?\x02\x02\u0510\u0512\x05b2\x02\u0511" +
		"\u0510\x03\x02\x02\x02\u0511\u0512\x03\x02\x02\x02\u0512\u0513\x03\x02" +
		"\x02\x02\u0513\u051F\x07@\x02\x02\u0514\u0515\x07?\x02\x02\u0515\u051A" +
		"\x07r\x02\x02\u0516\u0517\x07F\x02\x02\u0517\u0519\x07r\x02\x02\u0518" +
		"\u0516\x03\x02\x02\x02\u0519\u051C\x03\x02\x02\x02\u051A\u0518\x03\x02" +
		"\x02\x02\u051A\u051B\x03\x02\x02\x02\u051B\u051D\x03\x02\x02\x02\u051C" +
		"\u051A\x03\x02\x02\x02\u051D\u051F\x07@\x02\x02\u051E\u050E\x03\x02\x02" +
		"\x02\u051E\u050F\x03\x02\x02\x02\u051E\u0514\x03\x02\x02\x02\u051F\xB7" +
		"\x03\x02\x02\x02\u0520\u0523\x05\xB2Z\x02\u0521\u0523\x05\x8CG\x02\u0522" +
		"\u0520\x03\x02\x02\x02\u0522\u0521\x03\x02\x02\x02\u0523\xB9\x03\x02\x02" +
		"\x02\u0524\u0525\x07?\x02\x02\u0525\u0526\x05\xB2Z\x02\u0526\u0527\x07" +
		"@\x02\x02\u0527\u0537\x03\x02\x02\x02\u0528\u0537\x07-\x02\x02\u0529\u0537" +
		"\x07*\x02\x02\u052A\u0537\x05j6\x02\u052B\u0537\x07r\x02\x02\u052C\u052D" +
		"\x058\x1D\x02\u052D\u052E\x07G\x02\x02\u052E\u052F\x07\v\x02\x02\u052F" +
		"\u0537\x03\x02\x02\x02\u0530\u0534\x05\xCEh\x02\u0531\u0535\x05\xDAn\x02" +
		"\u0532\u0533\x07-\x02\x02\u0533\u0535\x05\xDCo\x02\u0534\u0531\x03\x02" +
		"\x02\x02\u0534\u0532\x03\x02\x02\x02\u0535\u0537\x03\x02\x02\x02\u0536" +
		"\u0524\x03\x02\x02\x02\u0536\u0528\x03\x02\x02\x02\u0536\u0529\x03\x02" +
		"\x02\x02\u0536\u052A\x03\x02\x02\x02\u0536\u052B\x03\x02\x02\x02\u0536" +
		"\u052C\x03\x02\x02\x02\u0536\u0530\x03\x02\x02\x02\u0537\xBB\x03\x02\x02" +
		"\x02\u0538\u0539\x05Z.\x02\u0539\u053A\x07G\x02\x02\u053A\u053C\x03\x02" +
		"\x02\x02\u053B\u0538\x03\x02\x02\x02\u053B\u053C\x03\x02\x02\x02\u053C" +
		"\u0540\x03\x02\x02\x02\u053D\u053F\x05r:\x02\u053E\u053D\x03\x02\x02\x02" +
		"\u053F\u0542\x03\x02\x02\x02\u0540\u053E\x03\x02\x02\x02\u0540\u0541\x03" +
		"\x02\x02\x02\u0541\u0543\x03\x02\x02\x02\u0542\u0540\x03\x02\x02\x02\u0543" +
		"\u0545\x07r\x02\x02\u0544\u0546\x05\xD6l\x02\u0545\u0544\x03\x02\x02\x02" +
		"\u0545\u0546\x03\x02\x02\x02\u0546\xBD\x03\x02\x02\x02\u0547\u0548\x05" +
		"\xCEh\x02\u0548\u0549\x05\xC0a\x02\u0549\u054A\x05\xC6d\x02\u054A\u0551" +
		"\x03\x02\x02\x02\u054B\u054E\x05\xC0a\x02\u054C\u054F\x05\xC4c\x02\u054D" +
		"\u054F\x05\xC6d\x02\u054E\u054C\x03\x02\x02\x02\u054E\u054D\x03\x02\x02" +
		"\x02\u054F\u0551\x03\x02\x02\x02\u0550\u0547\x03\x02\x02\x02\u0550\u054B" +
		"\x03\x02\x02\x02\u0551\xBF\x03\x02\x02\x02\u0552\u0554\x07r\x02\x02\u0553" +
		"\u0555\x05\xCAf\x02\u0554\u0553\x03\x02\x02\x02\u0554\u0555\x03\x02\x02" +
		"\x02\u0555\u055D\x03\x02\x02\x02\u0556\u0557\x07G\x02\x02\u0557\u0559" +
		"\x07r\x02\x02\u0558\u055A\x05\xCAf\x02\u0559\u0558\x03\x02\x02\x02\u0559" +
		"\u055A\x03\x02\x02\x02\u055A\u055C\x03\x02\x02\x02\u055B\u0556\x03\x02" +
		"\x02\x02\u055C\u055F\x03\x02\x02\x02\u055D\u055B\x03\x02\x02\x02\u055D" +
		"\u055E\x03\x02\x02\x02\u055E\u0562\x03\x02\x02\x02\u055F\u055D\x03\x02" +
		"\x02\x02\u0560\u0562\x05\xD4k\x02\u0561\u0552\x03\x02\x02\x02\u0561\u0560" +
		"\x03\x02\x02\x02\u0562\xC1\x03\x02\x02\x02\u0563\u0565\x07r\x02\x02\u0564" +
		"\u0566\x05\xCCg\x02\u0565\u0564\x03\x02\x02\x02\u0565\u0566\x03\x02\x02" +
		"\x02\u0566\u0567\x03\x02\x02\x02\u0567\u0568\x05\xC6d\x02\u0568\xC3\x03" +
		"\x02\x02\x02\u0569\u0585\x07C\x02\x02\u056A\u056F\x07D\x02\x02\u056B\u056C" +
		"\x07C\x02\x02\u056C\u056E\x07D\x02\x02\u056D\u056B\x03\x02\x02\x02\u056E" +
		"\u0571\x03\x02\x02\x02\u056F\u056D\x03\x02\x02\x02\u056F\u0570\x03\x02" +
		"\x02\x02\u0570\u0572\x03\x02\x02\x02\u0571\u056F\x03\x02\x02\x02\u0572" +
		"\u0586\x05X-\x02\u0573\u0574\x05\xB2Z\x02\u0574\u057B\x07D\x02\x02\u0575" +
		"\u0576\x07C\x02\x02\u0576\u0577\x05\xB2Z\x02\u0577\u0578\x07D\x02\x02" +
		"\u0578\u057A\x03\x02\x02\x02\u0579\u0575\x03\x02\x02\x02\u057A\u057D\x03" +
		"\x02\x02\x02\u057B\u0579\x03\x02\x02\x02\u057B\u057C\x03\x02\x02\x02\u057C" +
		"\u0582\x03\x02\x02\x02\u057D\u057B\x03\x02\x02\x02\u057E\u057F\x07C\x02" +
		"\x02\u057F\u0581\x07D\x02\x02\u0580\u057E\x03\x02\x02\x02\u0581\u0584" +
		"\x03\x02\x02\x02\u0582\u0580\x03\x02\x02\x02\u0582\u0583\x03\x02\x02\x02" +
		"\u0583\u0586\x03\x02\x02\x02\u0584\u0582\x03\x02\x02\x02\u0585\u056A\x03" +
		"\x02\x02\x02\u0585\u0573\x03\x02\x02\x02\u0586\xC5\x03\x02\x02\x02\u0587" +
		"\u0589\x05\xDCo\x02\u0588\u058A\x05*\x16\x02\u0589\u0588\x03\x02\x02\x02" +
		"\u0589\u058A\x03\x02\x02\x02\u058A\xC7\x03\x02\x02\x02\u058B\u058C\x05" +
		"\xCEh\x02\u058C\u058D\x05\xDAn\x02\u058D\xC9\x03\x02\x02\x02\u058E\u058F" +
		"\x07J\x02\x02\u058F\u0592\x07I\x02\x02\u0590\u0592\x05\xD6l\x02\u0591" +
		"\u058E\x03\x02\x02\x02\u0591\u0590\x03\x02\x02\x02\u0592\xCB\x03\x02\x02" +
		"\x02\u0593\u0594\x07J\x02\x02\u0594\u0597\x07I\x02\x02\u0595\u0597\x05" +
		"\xCEh\x02\u0596\u0593\x03\x02\x02\x02\u0596\u0595\x03\x02\x02\x02\u0597" +
		"\xCD\x03\x02\x02\x02\u0598\u0599\x07J\x02\x02\u0599\u059A\x05\xD0i\x02" +
		"\u059A\u059B\x07I\x02\x02\u059B\xCF\x03\x02\x02\x02\u059C\u05A1\x05\xD2" +
		"j\x02\u059D\u059E\x07F\x02\x02\u059E\u05A0\x05\xD2j\x02\u059F\u059D\x03" +
		"\x02\x02\x02\u05A0\u05A3\x03\x02\x02\x02\u05A1\u059F\x03\x02\x02\x02\u05A1" +
		"\u05A2\x03\x02\x02\x02\u05A2\xD1\x03\x02\x02\x02\u05A3\u05A1\x03\x02\x02" +
		"\x02\u05A4\u05A6\x05r:\x02\u05A5\u05A4\x03\x02\x02\x02\u05A6\u05A9\x03" +
		"\x02\x02\x02\u05A7\u05A5\x03\x02\x02\x02\u05A7\u05A8\x03\x02\x02\x02\u05A8" +
		"\u05AC\x03\x02\x02\x02\u05A9\u05A7\x03\x02\x02\x02\u05AA\u05AD\x05Z.\x02" +
		"\u05AB\u05AD\x05\xD4k\x02\u05AC\u05AA\x03\x02\x02\x02\u05AC\u05AB\x03" +
		"\x02\x02\x02\u05AD\u05B8\x03\x02\x02\x02\u05AE\u05B0\x05r:\x02\u05AF\u05AE" +
		"\x03\x02\x02\x02\u05B0\u05B3\x03\x02\x02\x02\u05B1\u05AF\x03\x02\x02\x02" +
		"\u05B1\u05B2\x03\x02\x02\x02\u05B2\u05B4\x03\x02\x02\x02\u05B3\u05B1\x03" +
		"\x02\x02\x02\u05B4\u05B5\x07C\x02\x02\u05B5\u05B7\x07D\x02\x02\u05B6\u05B1" +
		"\x03\x02\x02\x02\u05B7\u05BA\x03\x02\x02\x02\u05B8\u05B6\x03\x02\x02\x02" +
		"\u05B8\u05B9\x03\x02\x02\x02\u05B9\xD3\x03\x02\x02\x02\u05BA\u05B8\x03" +
		"\x02\x02\x02\u05BB\u05BC\t\r\x02\x02\u05BC\xD5\x03\x02\x02\x02\u05BD\u05BE" +
		"\x07J\x02\x02\u05BE\u05C3\x05\\/\x02\u05BF\u05C0\x07F\x02\x02\u05C0\u05C2" +
		"\x05\\/\x02\u05C1\u05BF\x03\x02\x02\x02\u05C2\u05C5\x03\x02\x02\x02\u05C3" +
		"\u05C1\x03\x02\x02\x02\u05C3\u05C4\x03\x02\x02\x02\u05C4\u05C6\x03\x02" +
		"\x02\x02\u05C5\u05C3\x03\x02\x02\x02\u05C6\u05C7\x07I\x02\x02\u05C7\xD7" +
		"\x03\x02\x02\x02\u05C8\u05CF\x05\xDCo\x02\u05C9\u05CA\x07G\x02\x02\u05CA" +
		"\u05CC\x07r\x02\x02\u05CB\u05CD\x05\xDCo\x02\u05CC\u05CB\x03\x02\x02\x02" +
		"\u05CC\u05CD\x03\x02\x02\x02\u05CD\u05CF\x03\x02\x02\x02\u05CE\u05C8\x03" +
		"\x02\x02\x02\u05CE\u05C9\x03\x02\x02\x02\u05CF\xD9\x03\x02\x02\x02\u05D0" +
		"\u05D1\x07*\x02\x02\u05D1\u05D5\x05\xD8m\x02\u05D2\u05D3\x07r\x02\x02" +
		"\u05D3\u05D5\x05\xDCo\x02\u05D4\u05D0\x03\x02\x02\x02\u05D4\u05D2\x03" +
		"\x02\x02\x02\u05D5\xDB\x03\x02\x02\x02\u05D6\u05D8\x07?\x02\x02\u05D7" +
		"\u05D9\x05\xAEX\x02\u05D8\u05D7\x03\x02\x02\x02\u05D8\u05D9\x03\x02\x02" +
		"\x02\u05D9\u05DA\x03\x02\x02\x02\u05DA\u05DB\x07@\x02\x02\u05DB\xDD\x03" +
		"\x02\x02\x02\xBC\xDF\xE4\xEA\xF2\xF8\u0102\u0107\u010C\u0113\u0119\u0120" +
		"\u0123\u012A\u0134\u0138\u013D\u0140\u0143\u0153\u015B\u0163\u0167\u016E" +
		"\u0175\u0179\u017C\u017F\u0188\u018E\u0194\u0199\u019C\u01A2\u01A8\u01AB" +
		"\u01B8\u01C1\u01CA\u01CE\u01D4\u01DA\u01DE\u01E9\u01F2\u01F6\u01FF\u0203" +
		"\u020F\u021A\u0220\u0225\u022E\u0236\u0240\u0249\u0251\u0256\u025E\u0262" +
		"\u026C\u0276\u027C\u0283\u0288\u0290\u0294\u0296\u029C\u02A1\u02A5\u02AC" +
		"\u02B2\u02B4\u02BB\u02C0\u02C9\u02CE\u02D1\u02D6\u02DF\u02E6\u02F1\u02FA" +
		"\u0304\u030D\u0312\u0315\u031C\u0326\u032E\u0331\u0334\u0341\u0349\u034E" +
		"\u0356\u035A\u035E\u0362\u0364\u0368\u036E\u0379\u0383\u0388\u0391\u0396" +
		"\u0399\u03A0\u03A9\u03C0\u03C3\u03C6\u03CE\u03D2\u03DA\u03E0\u03EB\u03F4" +
		"\u03F9\u0404\u040B\u0418\u0421\u042A\u0430\u043B\u0440\u0445\u044A\u044E" +
		"\u0452\u0456\u0458\u045C\u0461\u0472\u0478\u047E\u0484\u0487\u0492\u049A" +
		"\u04A8\u04AC\u04B1\u04B5\u04C5\u04ED\u04F3\u0502\u0505\u0507\u0511\u051A" +
		"\u051E\u0522\u0534\u0536\u053B\u0540\u0545\u054E\u0550\u0554\u0559\u055D" +
		"\u0561\u0565\u056F\u057B\u0582\u0585\u0589\u0591\u0596\u05A1\u05A7\u05AC" +
		"\u05B1\u05B8\u05C3\u05CC\u05CE\u05D4\u05D8";
	public static readonly _serializedATN: string = Utils.join(
		[
			JavaParser._serializedATNSegment0,
			JavaParser._serializedATNSegment1,
			JavaParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JavaParser.__ATN) {
			JavaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JavaParser._serializedATN));
		}

		return JavaParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(JavaParser.EOF, 0); }
	public packageDeclaration(): PackageDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PackageDeclarationContext);
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	public typeDeclaration(): TypeDeclarationContext[];
	public typeDeclaration(i: number): TypeDeclarationContext;
	public typeDeclaration(i?: number): TypeDeclarationContext | TypeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDeclarationContext);
		} else {
			return this.getRuleContext(i, TypeDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_compilationUnit; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	public PACKAGE(): TerminalNode { return this.getToken(JavaParser.PACKAGE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(JavaParser.SEMI, 0); }
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_packageDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitPackageDeclaration) {
			return visitor.visitPackageDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(JavaParser.IMPORT, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(JavaParser.SEMI, 0); }
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STATIC, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DOT, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_importDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceModifierContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceModifierContext);
	}
	public NATIVE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.NATIVE, 0); }
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SYNCHRONIZED, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.TRANSIENT, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.VOLATILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_modifier; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitModifier) {
			return visitor.visitModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PRIVATE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STATIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ABSTRACT, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FINAL, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classOrInterfaceModifier; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceModifier) {
			return visitor.visitClassOrInterfaceModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableModifierContext extends ParserRuleContext {
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FINAL, 0); }
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_variableModifier; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitVariableModifier) {
			return visitor.visitVariableModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(JavaParser.CLASS, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public extendClass(): ExtendClassContext | undefined {
		return this.tryGetRuleContext(0, ExtendClassContext);
	}
	public implementInterfaces(): ImplementInterfacesContext | undefined {
		return this.tryGetRuleContext(0, ImplementInterfacesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtendClassContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode { return this.getToken(JavaParser.EXTENDS, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_extendClass; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitExtendClass) {
			return visitor.visitExtendClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementInterfacesContext extends ParserRuleContext {
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_implementInterfaces; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitImplementInterfaces) {
			return visitor.visitImplementInterfaces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(JavaParser.LT, 0); }
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(JavaParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeParameters; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.EXTENDS, 0); }
	public typeBound(): TypeBoundContext | undefined {
		return this.tryGetRuleContext(0, TypeBoundContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeParameter; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeBoundContext extends ParserRuleContext {
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public BITAND(): TerminalNode[];
	public BITAND(i: number): TerminalNode;
	public BITAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.BITAND);
		} else {
			return this.getToken(JavaParser.BITAND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeBound; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitTypeBound) {
			return visitor.visitTypeBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(JavaParser.ENUM, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	public enumConstants(): EnumConstantsContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantsContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(JavaParser.COMMA, 0); }
	public enumBodyDeclarations(): EnumBodyDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_enumDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantsContext extends ParserRuleContext {
	public enumConstant(): EnumConstantContext[];
	public enumConstant(i: number): EnumConstantContext;
	public enumConstant(i?: number): EnumConstantContext | EnumConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantContext);
		} else {
			return this.getRuleContext(i, EnumConstantContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_enumConstants; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitEnumConstants) {
			return visitor.visitEnumConstants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_enumConstant; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitEnumConstant) {
			return visitor.visitEnumConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyDeclarationsContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(JavaParser.SEMI, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_enumBodyDeclarations; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitEnumBodyDeclarations) {
			return visitor.visitEnumBodyDeclarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(JavaParser.INTERFACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public extendInterface(): ExtendInterfaceContext | undefined {
		return this.tryGetRuleContext(0, ExtendInterfaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDeclaration) {
			return visitor.visitInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtendInterfaceContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode { return this.getToken(JavaParser.EXTENDS, 0); }
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_extendInterface; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitExtendInterface) {
			return visitor.visitExtendInterface(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public JCOMMENT(): TerminalNode { return this.getToken(JavaParser.JCOMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_comment; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classBody; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitClassBody) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext[];
	public interfaceBodyDeclaration(i: number): InterfaceBodyDeclarationContext;
	public interfaceBodyDeclaration(i?: number): InterfaceBodyDeclarationContext | InterfaceBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceBody; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitInterfaceBody) {
			return visitor.visitInterfaceBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STATIC, 0); }
	public memberDeclaration(): MemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classBodyDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitClassBodyDeclaration) {
			return visitor.visitClassBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberDeclarationContext extends ParserRuleContext {
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public genericMethodDeclaration(): GenericMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericMethodDeclarationContext);
	}
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericConstructorDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_memberDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitMemberDeclaration) {
			return visitor.visitMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		return this.getRuleContext(0, TypeTypeOrVoidContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.LBRACK);
		} else {
			return this.getToken(JavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.RBRACK);
		} else {
			return this.getToken(JavaParser.RBRACK, i);
		}
	}
	public throwList(): ThrowListContext | undefined {
		return this.tryGetRuleContext(0, ThrowListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_methodDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowListContext extends ParserRuleContext {
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_throwList; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitThrowList) {
			return visitor.visitThrowList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodBodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_methodBody; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitMethodBody) {
			return visitor.visitMethodBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTypeOrVoidContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(JavaParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeTypeOrVoid; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitTypeTypeOrVoid) {
			return visitor.visitTypeTypeOrVoid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public methodDeclaration(): MethodDeclarationContext {
		return this.getRuleContext(0, MethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_genericMethodDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitGenericMethodDeclaration) {
			return visitor.visitGenericMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericConstructorDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext {
		return this.getRuleContext(0, ConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_genericConstructorDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitGenericConstructorDeclaration) {
			return visitor.visitGenericConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public _constructorBody!: BlockContext;
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_constructorDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitConstructorDeclaration) {
			return visitor.visitConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public SEMI(): TerminalNode { return this.getToken(JavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_fieldDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyDeclarationContext extends ParserRuleContext {
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMemberDeclarationContext);
	}
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceBodyDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitInterfaceBodyDeclaration) {
			return visitor.visitInterfaceBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMemberDeclarationContext extends ParserRuleContext {
	public constDeclaration(): ConstDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclarationContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
	}
	public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericInterfaceMethodDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceMemberDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMemberDeclaration) {
			return visitor.visitInterfaceMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public constantDeclarator(): ConstantDeclaratorContext[];
	public constantDeclarator(i: number): ConstantDeclaratorContext;
	public constantDeclarator(i?: number): ConstantDeclaratorContext | ConstantDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantDeclaratorContext);
		} else {
			return this.getRuleContext(i, ConstantDeclaratorContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(JavaParser.SEMI, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_constDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitConstDeclaration) {
			return visitor.visitConstDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclaratorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(JavaParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext {
		return this.getRuleContext(0, VariableInitializerContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.LBRACK);
		} else {
			return this.getToken(JavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.RBRACK);
		} else {
			return this.getToken(JavaParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_constantDeclarator; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitConstantDeclarator) {
			return visitor.visitConstantDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public typeTypeOrVoid(): TypeTypeOrVoidContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public interfaceMethodModifier(): InterfaceMethodModifierContext[];
	public interfaceMethodModifier(i: number): InterfaceMethodModifierContext;
	public interfaceMethodModifier(i?: number): InterfaceMethodModifierContext | InterfaceMethodModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMethodModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceMethodModifierContext);
		}
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.LBRACK);
		} else {
			return this.getToken(JavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.RBRACK);
		} else {
			return this.getToken(JavaParser.RBRACK, i);
		}
	}
	public throwList(): ThrowListContext | undefined {
		return this.tryGetRuleContext(0, ThrowListContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceMethodDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodDeclaration) {
			return visitor.visitInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PUBLIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ABSTRACT, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DEFAULT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STATIC, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceMethodModifier; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodModifier) {
			return visitor.visitInterfaceMethodModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericInterfaceMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		return this.getRuleContext(0, InterfaceMethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_genericInterfaceMethodDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitGenericInterfaceMethodDeclaration) {
			return visitor.visitGenericInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorsContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_variableDeclarators; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarators) {
			return visitor.visitVariableDeclarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_variableDeclarator; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarator) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.LBRACK);
		} else {
			return this.getToken(JavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.RBRACK);
		} else {
			return this.getToken(JavaParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_variableDeclaratorId; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorId) {
			return visitor.visitVariableDeclaratorId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_variableInitializer; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializer) {
			return visitor.visitVariableInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public variableInitializer(): VariableInitializerContext[];
	public variableInitializer(i: number): VariableInitializerContext;
	public variableInitializer(i?: number): VariableInitializerContext | VariableInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableInitializerContext);
		} else {
			return this.getRuleContext(i, VariableInitializerContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_arrayInitializer; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitArrayInitializer) {
			return visitor.visitArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.IDENTIFIER);
		} else {
			return this.getToken(JavaParser.IDENTIFIER, i);
		}
	}
	public typeArguments(): TypeArgumentsContext[];
	public typeArguments(i: number): TypeArgumentsContext;
	public typeArguments(i?: number): TypeArgumentsContext | TypeArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.DOT);
		} else {
			return this.getToken(JavaParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classOrInterfaceType; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceType) {
			return visitor.visitClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(JavaParser.QUESTION, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.EXTENDS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeArgument; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitTypeArgument) {
			return visitor.visitTypeArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameListContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_qualifiedNameList; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitQualifiedNameList) {
			return visitor.visitQualifiedNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(JavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(JavaParser.RPAREN, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_formalParameters; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitFormalParameters) {
			return visitor.visitFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	public lastFormalParameter(): LastFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, LastFormalParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_formalParameterList; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_formalParameter; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LastFormalParameterContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public ELLIPSIS(): TerminalNode { return this.getToken(JavaParser.ELLIPSIS, 0); }
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_lastFormalParameter; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitLastFormalParameter) {
			return visitor.visitLastFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.IDENTIFIER);
		} else {
			return this.getToken(JavaParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.DOT);
		} else {
			return this.getToken(JavaParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_qualifiedName; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public integerLiteral(): IntegerLiteralContext | undefined {
		return this.tryGetRuleContext(0, IntegerLiteralContext);
	}
	public floatLiteral(): FloatLiteralContext | undefined {
		return this.tryGetRuleContext(0, FloatLiteralContext);
	}
	public CHAR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CHAR_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STRING_LITERAL, 0); }
	public BOOL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BOOL_LITERAL, 0); }
	public NULL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.NULL_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_literal; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerLiteralContext extends ParserRuleContext {
	public DECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DECIMAL_LITERAL, 0); }
	public HEX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.HEX_LITERAL, 0); }
	public OCT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.OCT_LITERAL, 0); }
	public BINARY_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BINARY_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_integerLiteral; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatLiteralContext extends ParserRuleContext {
	public FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FLOAT_LITERAL, 0); }
	public HEX_FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.HEX_FLOAT_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_floatLiteral; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitFloatLiteral) {
			return visitor.visitFloatLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AltAnnotationQualifiedNameContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(JavaParser.AT, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.IDENTIFIER);
		} else {
			return this.getToken(JavaParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.DOT);
		} else {
			return this.getToken(JavaParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_altAnnotationQualifiedName; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitAltAnnotationQualifiedName) {
			return visitor.visitAltAnnotationQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.AT, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public altAnnotationQualifiedName(): AltAnnotationQualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, AltAnnotationQualifiedNameContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RPAREN, 0); }
	public elementValuePairs(): ElementValuePairsContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairsContext);
	}
	public elementValue(): ElementValueContext | undefined {
		return this.tryGetRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotation; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairsContext extends ParserRuleContext {
	public elementValuePair(): ElementValuePairContext[];
	public elementValuePair(i: number): ElementValuePairContext;
	public elementValuePair(i?: number): ElementValuePairContext | ElementValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValuePairContext);
		} else {
			return this.getRuleContext(i, ElementValuePairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_elementValuePairs; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitElementValuePairs) {
			return visitor.visitElementValuePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(JavaParser.ASSIGN, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_elementValuePair; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitElementValuePair) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_elementValue; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public elementValue(): ElementValueContext[];
	public elementValue(i: number): ElementValueContext;
	public elementValue(i?: number): ElementValueContext | ElementValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext(i, ElementValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_elementValueArrayInitializer; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeDeclarationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(JavaParser.AT, 0); }
	public INTERFACE(): TerminalNode { return this.getToken(JavaParser.INTERFACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public annotationTypeBody(): AnnotationTypeBodyContext {
		return this.getRuleContext(0, AnnotationTypeBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationTypeDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeDeclaration) {
			return visitor.visitAnnotationTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext[];
	public annotationTypeElementDeclaration(i: number): AnnotationTypeElementDeclarationContext;
	public annotationTypeElementDeclaration(i?: number): AnnotationTypeElementDeclarationContext | AnnotationTypeElementDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationTypeElementDeclarationContext);
		} else {
			return this.getRuleContext(i, AnnotationTypeElementDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationTypeBody; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeBody) {
			return visitor.visitAnnotationTypeBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
	public annotationTypeElementRest(): AnnotationTypeElementRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeElementRestContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationTypeElementDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementDeclaration) {
			return visitor.visitAnnotationTypeElementDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementRestContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodOrConstantRestContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationTypeElementRest; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementRest) {
			return visitor.visitAnnotationTypeElementRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationMethodOrConstantRestContext extends ParserRuleContext {
	public annotationMethodRest(): AnnotationMethodRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodRestContext);
	}
	public annotationConstantRest(): AnnotationConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationConstantRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationMethodOrConstantRest; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitAnnotationMethodOrConstantRest) {
			return visitor.visitAnnotationMethodOrConstantRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationMethodRestContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(JavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(JavaParser.RPAREN, 0); }
	public defaultValue(): DefaultValueContext | undefined {
		return this.tryGetRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationMethodRest; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitAnnotationMethodRest) {
			return visitor.visitAnnotationMethodRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationConstantRestContext extends ParserRuleContext {
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationConstantRest; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitAnnotationConstantRest) {
			return visitor.visitAnnotationConstantRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(JavaParser.DEFAULT, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_defaultValue; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitDefaultValue) {
			return visitor.visitDefaultValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_block; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public localTypeDeclaration(): LocalTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalTypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_blockStatement; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitBlockStatement) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_localVariableDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalTypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceModifierContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_localTypeDeclaration; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitLocalTypeDeclaration) {
			return visitor.visitLocalTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public _blockLabel!: BlockContext;
	public _statementExpression!: ExpressionContext;
	public _identifierLabel!: Token;
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ASSERT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ASSERT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(JavaParser.COLON, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IF, 0); }
	public parExpression(): ParExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ELSE, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FOR, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LPAREN, 0); }
	public forControl(): ForControlContext | undefined {
		return this.tryGetRuleContext(0, ForControlContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RPAREN, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.WHILE, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DO, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(JavaParser.TRY, 0); }
	public finallyBlock(): FinallyBlockContext | undefined {
		return this.tryGetRuleContext(0, FinallyBlockContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	public resourceSpecification(): ResourceSpecificationContext | undefined {
		return this.tryGetRuleContext(0, ResourceSpecificationContext);
	}
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SWITCH, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RBRACE, 0); }
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
	public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext | SwitchBlockStatementGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchBlockStatementGroupContext);
		} else {
			return this.getRuleContext(i, SwitchBlockStatementGroupContext);
		}
	}
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SYNCHRONIZED, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RETURN, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THROW, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BREAK, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CONTINUE, 0); }
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_statement; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(JavaParser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(JavaParser.LPAREN, 0); }
	public catchType(): CatchTypeContext {
		return this.getRuleContext(0, CatchTypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public RPAREN(): TerminalNode { return this.getToken(JavaParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_catchClause; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchTypeContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public BITOR(): TerminalNode[];
	public BITOR(i: number): TerminalNode;
	public BITOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.BITOR);
		} else {
			return this.getToken(JavaParser.BITOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_catchType; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitCatchType) {
			return visitor.visitCatchType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyBlockContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(JavaParser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_finallyBlock; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitFinallyBlock) {
			return visitor.visitFinallyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceSpecificationContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(JavaParser.LPAREN, 0); }
	public resources(): ResourcesContext {
		return this.getRuleContext(0, ResourcesContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(JavaParser.RPAREN, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_resourceSpecification; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitResourceSpecification) {
			return visitor.visitResourceSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourcesContext extends ParserRuleContext {
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.SEMI);
		} else {
			return this.getToken(JavaParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_resources; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitResources) {
			return visitor.visitResources(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(JavaParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_resource; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitResource) {
			return visitor.visitResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_switchBlockStatementGroup; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementGroup) {
			return visitor.visitSwitchBlockStatementGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	public _constantExpression!: ExpressionContext;
	public _enumConstantName!: Token;
	public CASE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CASE, 0); }
	public COLON(): TerminalNode { return this.getToken(JavaParser.COLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_switchLabel; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitSwitchLabel) {
			return visitor.visitSwitchLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForControlContext extends ParserRuleContext {
	public _forUpdate!: ExpressionListContext;
	public enhancedForControl(): EnhancedForControlContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForControlContext);
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.SEMI);
		} else {
			return this.getToken(JavaParser.SEMI, i);
		}
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_forControl; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitForControl) {
			return visitor.visitForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_forInit; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForControlContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public COLON(): TerminalNode { return this.getToken(JavaParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_enhancedForControl; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForControl) {
			return visitor.visitEnhancedForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(JavaParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(JavaParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_parExpression; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitParExpression) {
			return visitor.visitParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_expressionList; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodCallContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(JavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(JavaParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_methodCall; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitMethodCall) {
			return visitor.visitMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _prefix!: Token;
	public _bop!: Token;
	public _postfix!: Token;
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
	public methodCall(): MethodCallContext | undefined {
		return this.tryGetRuleContext(0, MethodCallContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THIS, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(JavaParser.NEW, 0); }
	public innerCreator(): InnerCreatorContext | undefined {
		return this.tryGetRuleContext(0, InnerCreatorContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUPER, 0); }
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public explicitGenericInvocation(): ExplicitGenericInvocationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationContext);
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RBRACK, 0); }
	public creator(): CreatorContext | undefined {
		return this.tryGetRuleContext(0, CreatorContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LPAREN, 0); }
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RPAREN, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public BITAND(): TerminalNode[];
	public BITAND(i: number): TerminalNode;
	public BITAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.BITAND);
		} else {
			return this.getToken(JavaParser.BITAND, i);
		}
	}
	public INC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DEC, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUB, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.TILDE, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BANG, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(JavaParser.MOD, 0); }
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.LT);
		} else {
			return this.getToken(JavaParser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.GT);
		} else {
			return this.getToken(JavaParser.GT, i);
		}
	}
	public LE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.GE, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(JavaParser.INSTANCEOF, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.NOTEQUAL, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CARET, 0); }
	public BITOR(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BITOR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(JavaParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(JavaParser.OR, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(JavaParser.COLON, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(JavaParser.QUESTION, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUB_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DIV_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.AND_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.OR_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.XOR_ASSIGN, 0); }
	public RSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RSHIFT_ASSIGN, 0); }
	public URSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.URSHIFT_ASSIGN, 0); }
	public LSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LSHIFT_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.MOD_ASSIGN, 0); }
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	public COLONCOLON(): TerminalNode | undefined { return this.tryGetToken(JavaParser.COLONCOLON, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_expression; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	public lambdaParameters(): LambdaParametersContext {
		return this.getRuleContext(0, LambdaParametersContext);
	}
	public ARROW(): TerminalNode { return this.getToken(JavaParser.ARROW, 0); }
	public lambdaBody(): LambdaBodyContext {
		return this.getRuleContext(0, LambdaBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_lambdaExpression; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParametersContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.IDENTIFIER);
		} else {
			return this.getToken(JavaParser.IDENTIFIER, i);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RPAREN, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_lambdaParameters; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitLambdaParameters) {
			return visitor.visitLambdaParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaBodyContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_lambdaBody; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitLambdaBody) {
			return visitor.visitLambdaBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RPAREN, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUPER, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
	public typeTypeOrVoid(): TypeTypeOrVoidContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DOT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CLASS, 0); }
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_primary; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassTypeContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DOT, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classType; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitClassType) {
			return visitor.visitClassType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatorContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public createdName(): CreatedNameContext {
		return this.getRuleContext(0, CreatedNameContext);
	}
	public classCreatorRest(): ClassCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ClassCreatorRestContext);
	}
	public arrayCreatorRest(): ArrayCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreatorRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_creator; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitCreator) {
			return visitor.visitCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatedNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.IDENTIFIER);
		} else {
			return this.getToken(JavaParser.IDENTIFIER, i);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext[];
	public typeArgumentsOrDiamond(i: number): TypeArgumentsOrDiamondContext;
	public typeArgumentsOrDiamond(i?: number): TypeArgumentsOrDiamondContext | TypeArgumentsOrDiamondContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsOrDiamondContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsOrDiamondContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.DOT);
		} else {
			return this.getToken(JavaParser.DOT, i);
		}
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_createdName; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitCreatedName) {
			return visitor.visitCreatedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InnerCreatorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public classCreatorRest(): ClassCreatorRestContext {
		return this.getRuleContext(0, ClassCreatorRestContext);
	}
	public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsOrDiamondContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_innerCreator; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitInnerCreator) {
			return visitor.visitInnerCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreatorRestContext extends ParserRuleContext {
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.LBRACK);
		} else {
			return this.getToken(JavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.RBRACK);
		} else {
			return this.getToken(JavaParser.RBRACK, i);
		}
	}
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_arrayCreatorRest; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitArrayCreatorRest) {
			return visitor.visitArrayCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassCreatorRestContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classCreatorRest; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitClassCreatorRest) {
			return visitor.visitClassCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitGenericInvocationContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		return this.getRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_explicitGenericInvocation; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitExplicitGenericInvocation) {
			return visitor.visitExplicitGenericInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.GT, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeArgumentsOrDiamond; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentsOrDiamond) {
			return visitor.visitTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonWildcardTypeArgumentsOrDiamondContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.GT, 0); }
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitNonWildcardTypeArgumentsOrDiamond) {
			return visitor.visitNonWildcardTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonWildcardTypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(JavaParser.LT, 0); }
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	public GT(): TerminalNode { return this.getToken(JavaParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_nonWildcardTypeArguments; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitNonWildcardTypeArguments) {
			return visitor.visitNonWildcardTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeList; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTypeContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.LBRACK);
		} else {
			return this.getToken(JavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.RBRACK);
		} else {
			return this.getToken(JavaParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeType; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitTypeType) {
			return visitor.visitTypeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BOOLEAN, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CHAR, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BYTE, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SHORT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.INT, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LONG, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FLOAT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_primitiveType; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(JavaParser.LT, 0); }
	public typeArgument(): TypeArgumentContext[];
	public typeArgument(i: number): TypeArgumentContext;
	public typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext(i, TypeArgumentContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(JavaParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.COMMA);
		} else {
			return this.getToken(JavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeArguments; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuperSuffixContext extends ParserRuleContext {
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_superSuffix; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitSuperSuffix) {
			return visitor.visitSuperSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitGenericInvocationSuffixContext extends ParserRuleContext {
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUPER, 0); }
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_explicitGenericInvocationSuffix; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitExplicitGenericInvocationSuffix) {
			return visitor.visitExplicitGenericInvocationSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(JavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(JavaParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_arguments; }
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


