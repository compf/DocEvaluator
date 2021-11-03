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
	public static readonly COMMENT = 109;
	public static readonly LINE_COMMENT = 110;
	public static readonly IDENTIFIER = 111;
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
	public static readonly RULE_comment = 18;
	public static readonly RULE_classBody = 19;
	public static readonly RULE_interfaceBody = 20;
	public static readonly RULE_classBodyDeclaration = 21;
	public static readonly RULE_memberDeclaration = 22;
	public static readonly RULE_methodDeclaration = 23;
	public static readonly RULE_throwList = 24;
	public static readonly RULE_methodBody = 25;
	public static readonly RULE_typeTypeOrVoid = 26;
	public static readonly RULE_genericMethodDeclaration = 27;
	public static readonly RULE_genericConstructorDeclaration = 28;
	public static readonly RULE_constructorDeclaration = 29;
	public static readonly RULE_fieldDeclaration = 30;
	public static readonly RULE_interfaceBodyDeclaration = 31;
	public static readonly RULE_interfaceMemberDeclaration = 32;
	public static readonly RULE_constDeclaration = 33;
	public static readonly RULE_constantDeclarator = 34;
	public static readonly RULE_interfaceMethodDeclaration = 35;
	public static readonly RULE_interfaceMethodModifier = 36;
	public static readonly RULE_genericInterfaceMethodDeclaration = 37;
	public static readonly RULE_variableDeclarators = 38;
	public static readonly RULE_variableDeclarator = 39;
	public static readonly RULE_variableDeclaratorId = 40;
	public static readonly RULE_variableInitializer = 41;
	public static readonly RULE_arrayInitializer = 42;
	public static readonly RULE_classOrInterfaceType = 43;
	public static readonly RULE_typeArgument = 44;
	public static readonly RULE_qualifiedNameList = 45;
	public static readonly RULE_formalParameters = 46;
	public static readonly RULE_formalParameterList = 47;
	public static readonly RULE_formalParameter = 48;
	public static readonly RULE_lastFormalParameter = 49;
	public static readonly RULE_qualifiedName = 50;
	public static readonly RULE_literal = 51;
	public static readonly RULE_integerLiteral = 52;
	public static readonly RULE_floatLiteral = 53;
	public static readonly RULE_altAnnotationQualifiedName = 54;
	public static readonly RULE_annotation = 55;
	public static readonly RULE_elementValuePairs = 56;
	public static readonly RULE_elementValuePair = 57;
	public static readonly RULE_elementValue = 58;
	public static readonly RULE_elementValueArrayInitializer = 59;
	public static readonly RULE_annotationTypeDeclaration = 60;
	public static readonly RULE_annotationTypeBody = 61;
	public static readonly RULE_annotationTypeElementDeclaration = 62;
	public static readonly RULE_annotationTypeElementRest = 63;
	public static readonly RULE_annotationMethodOrConstantRest = 64;
	public static readonly RULE_annotationMethodRest = 65;
	public static readonly RULE_annotationConstantRest = 66;
	public static readonly RULE_defaultValue = 67;
	public static readonly RULE_block = 68;
	public static readonly RULE_blockStatement = 69;
	public static readonly RULE_localVariableDeclaration = 70;
	public static readonly RULE_localTypeDeclaration = 71;
	public static readonly RULE_statement = 72;
	public static readonly RULE_catchClause = 73;
	public static readonly RULE_catchType = 74;
	public static readonly RULE_finallyBlock = 75;
	public static readonly RULE_resourceSpecification = 76;
	public static readonly RULE_resources = 77;
	public static readonly RULE_resource = 78;
	public static readonly RULE_switchBlockStatementGroup = 79;
	public static readonly RULE_switchLabel = 80;
	public static readonly RULE_forControl = 81;
	public static readonly RULE_forInit = 82;
	public static readonly RULE_enhancedForControl = 83;
	public static readonly RULE_parExpression = 84;
	public static readonly RULE_expressionList = 85;
	public static readonly RULE_methodCall = 86;
	public static readonly RULE_expression = 87;
	public static readonly RULE_lambdaExpression = 88;
	public static readonly RULE_lambdaParameters = 89;
	public static readonly RULE_lambdaBody = 90;
	public static readonly RULE_primary = 91;
	public static readonly RULE_classType = 92;
	public static readonly RULE_creator = 93;
	public static readonly RULE_createdName = 94;
	public static readonly RULE_innerCreator = 95;
	public static readonly RULE_arrayCreatorRest = 96;
	public static readonly RULE_classCreatorRest = 97;
	public static readonly RULE_explicitGenericInvocation = 98;
	public static readonly RULE_typeArgumentsOrDiamond = 99;
	public static readonly RULE_nonWildcardTypeArgumentsOrDiamond = 100;
	public static readonly RULE_nonWildcardTypeArguments = 101;
	public static readonly RULE_typeList = 102;
	public static readonly RULE_typeType = 103;
	public static readonly RULE_primitiveType = 104;
	public static readonly RULE_typeArguments = 105;
	public static readonly RULE_superSuffix = 106;
	public static readonly RULE_explicitGenericInvocationSuffix = 107;
	public static readonly RULE_arguments = 108;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "packageDeclaration", "importDeclaration", "typeDeclaration", 
		"modifier", "classOrInterfaceModifier", "variableModifier", "classDeclaration", 
		"extendClass", "implementInterfaces", "typeParameters", "typeParameter", 
		"typeBound", "enumDeclaration", "enumConstants", "enumConstant", "enumBodyDeclarations", 
		"interfaceDeclaration", "comment", "classBody", "interfaceBody", "classBodyDeclaration", 
		"memberDeclaration", "methodDeclaration", "throwList", "methodBody", "typeTypeOrVoid", 
		"genericMethodDeclaration", "genericConstructorDeclaration", "constructorDeclaration", 
		"fieldDeclaration", "interfaceBodyDeclaration", "interfaceMemberDeclaration", 
		"constDeclaration", "constantDeclarator", "interfaceMethodDeclaration", 
		"interfaceMethodModifier", "genericInterfaceMethodDeclaration", "variableDeclarators", 
		"variableDeclarator", "variableDeclaratorId", "variableInitializer", "arrayInitializer", 
		"classOrInterfaceType", "typeArgument", "qualifiedNameList", "formalParameters", 
		"formalParameterList", "formalParameter", "lastFormalParameter", "qualifiedName", 
		"literal", "integerLiteral", "floatLiteral", "altAnnotationQualifiedName", 
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
		"WS", "COMMENT", "LINE_COMMENT", "IDENTIFIER",
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 218;
				this.packageDeclaration();
				}
				break;
			}
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.IMPORT) {
				{
				{
				this.state = 221;
				this.importDeclaration();
				}
				}
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.CLASS) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.INTERFACE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)))) !== 0) || _la === JavaParser.SEMI || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.COMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0)) {
				{
				{
				this.state = 227;
				this.typeDeclaration();
				}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 233;
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
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				{
				this.state = 235;
				this.annotation();
				}
				}
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 241;
			this.match(JavaParser.PACKAGE);
			this.state = 242;
			this.qualifiedName();
			this.state = 243;
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
			this.state = 245;
			this.match(JavaParser.IMPORT);
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.STATIC) {
				{
				this.state = 246;
				this.match(JavaParser.STATIC);
				}
			}

			this.state = 249;
			this.qualifiedName();
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.DOT) {
				{
				this.state = 250;
				this.match(JavaParser.DOT);
				this.state = 251;
				this.match(JavaParser.MUL);
				}
			}

			this.state = 254;
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
			this.state = 272;
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
			case JavaParser.COMMENT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.COMMENT) {
					{
					this.state = 256;
					this.comment();
					}
				}

				this.state = 262;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 259;
						this.classOrInterfaceModifier();
						}
						}
					}
					this.state = 264;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				}
				this.state = 269;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.CLASS:
					{
					this.state = 265;
					this.classDeclaration();
					}
					break;
				case JavaParser.ENUM:
					{
					this.state = 266;
					this.enumDeclaration();
					}
					break;
				case JavaParser.INTERFACE:
					{
					this.state = 267;
					this.interfaceDeclaration();
					}
					break;
				case JavaParser.AT:
					{
					this.state = 268;
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
				this.state = 271;
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
			this.state = 279;
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
				this.state = 274;
				this.classOrInterfaceModifier();
				}
				break;
			case JavaParser.NATIVE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 275;
				this.match(JavaParser.NATIVE);
				}
				break;
			case JavaParser.SYNCHRONIZED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 276;
				this.match(JavaParser.SYNCHRONIZED);
				}
				break;
			case JavaParser.TRANSIENT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 277;
				this.match(JavaParser.TRANSIENT);
				}
				break;
			case JavaParser.VOLATILE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 278;
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
			this.state = 289;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 281;
				this.annotation();
				}
				break;
			case JavaParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 282;
				this.match(JavaParser.PUBLIC);
				}
				break;
			case JavaParser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 283;
				this.match(JavaParser.PROTECTED);
				}
				break;
			case JavaParser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 284;
				this.match(JavaParser.PRIVATE);
				}
				break;
			case JavaParser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 285;
				this.match(JavaParser.STATIC);
				}
				break;
			case JavaParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 286;
				this.match(JavaParser.ABSTRACT);
				}
				break;
			case JavaParser.FINAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 287;
				this.match(JavaParser.FINAL);
				}
				break;
			case JavaParser.STRICTFP:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 288;
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
			this.state = 293;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.FINAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 291;
				this.match(JavaParser.FINAL);
				}
				break;
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 292;
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
			this.state = 295;
			this.match(JavaParser.CLASS);
			this.state = 296;
			this.match(JavaParser.IDENTIFIER);
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LT) {
				{
				this.state = 297;
				this.typeParameters();
				}
			}

			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.EXTENDS) {
				{
				this.state = 300;
				this.extendClass();
				}
			}

			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.IMPLEMENTS) {
				{
				this.state = 303;
				this.implementInterfaces();
				}
			}

			this.state = 306;
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
			this.state = 308;
			this.match(JavaParser.EXTENDS);
			this.state = 309;
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
			this.state = 311;
			this.match(JavaParser.IMPLEMENTS);
			this.state = 312;
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
			this.state = 314;
			this.match(JavaParser.LT);
			this.state = 315;
			this.typeParameter();
			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 316;
				this.match(JavaParser.COMMA);
				this.state = 317;
				this.typeParameter();
				}
				}
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 323;
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
			this.state = 328;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 325;
					this.annotation();
					}
					}
				}
				this.state = 330;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			this.state = 331;
			this.match(JavaParser.IDENTIFIER);
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.EXTENDS) {
				{
				this.state = 332;
				this.match(JavaParser.EXTENDS);
				this.state = 336;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 333;
						this.annotation();
						}
						}
					}
					this.state = 338;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				}
				this.state = 339;
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
			this.state = 342;
			this.typeType();
			this.state = 347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.BITAND) {
				{
				{
				this.state = 343;
				this.match(JavaParser.BITAND);
				this.state = 344;
				this.typeType();
				}
				}
				this.state = 349;
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
			this.state = 350;
			this.match(JavaParser.ENUM);
			this.state = 351;
			this.match(JavaParser.IDENTIFIER);
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.IMPLEMENTS) {
				{
				this.state = 352;
				this.match(JavaParser.IMPLEMENTS);
				this.state = 353;
				this.typeList();
				}
			}

			this.state = 356;
			this.match(JavaParser.LBRACE);
			this.state = 358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				this.state = 357;
				this.enumConstants();
				}
			}

			this.state = 361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.COMMA) {
				{
				this.state = 360;
				this.match(JavaParser.COMMA);
				}
			}

			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.SEMI) {
				{
				this.state = 363;
				this.enumBodyDeclarations();
				}
			}

			this.state = 366;
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
			this.state = 368;
			this.enumConstant();
			this.state = 373;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 369;
					this.match(JavaParser.COMMA);
					this.state = 370;
					this.enumConstant();
					}
					}
				}
				this.state = 375;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
			this.state = 379;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 376;
					this.annotation();
					}
					}
				}
				this.state = 381;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 382;
			this.match(JavaParser.IDENTIFIER);
			this.state = 384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LPAREN) {
				{
				this.state = 383;
				this.arguments();
				}
			}

			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LBRACE) {
				{
				this.state = 386;
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
			this.state = 389;
			this.match(JavaParser.SEMI);
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.LT || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.COMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0)) {
				{
				{
				this.state = 390;
				this.classBodyDeclaration();
				}
				}
				this.state = 395;
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
			this.state = 396;
			this.match(JavaParser.INTERFACE);
			this.state = 397;
			this.match(JavaParser.IDENTIFIER);
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LT) {
				{
				this.state = 398;
				this.typeParameters();
				}
			}

			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.EXTENDS) {
				{
				this.state = 401;
				this.match(JavaParser.EXTENDS);
				this.state = 402;
				this.typeList();
				}
			}

			this.state = 405;
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
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, JavaParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this.match(JavaParser.COMMENT);
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
		this.enterRule(_localctx, 38, JavaParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this.match(JavaParser.LBRACE);
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.LT || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.COMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0)) {
				{
				{
				this.state = 410;
				this.classBodyDeclaration();
				}
				}
				this.state = 415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 416;
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
		this.enterRule(_localctx, 40, JavaParser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this.match(JavaParser.LBRACE);
			this.state = 422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DEFAULT) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.LT || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				{
				this.state = 419;
				this.interfaceBodyDeclaration();
				}
				}
				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 425;
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
		this.enterRule(_localctx, 42, JavaParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 442;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 427;
				this.match(JavaParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.STATIC) {
					{
					this.state = 428;
					this.match(JavaParser.STATIC);
					}
				}

				this.state = 431;
				this.block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.COMMENT) {
					{
					this.state = 432;
					this.comment();
					}
				}

				this.state = 438;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 435;
						this.modifier();
						}
						}
					}
					this.state = 440;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				}
				this.state = 441;
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
		this.enterRule(_localctx, 44, JavaParser.RULE_memberDeclaration);
		try {
			this.state = 453;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 444;
				this.methodDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 445;
				this.genericMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 446;
				this.fieldDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 447;
				this.constructorDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 448;
				this.genericConstructorDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 449;
				this.interfaceDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 450;
				this.annotationTypeDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 451;
				this.classDeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 452;
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
		this.enterRule(_localctx, 46, JavaParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.typeTypeOrVoid();
			this.state = 456;
			this.match(JavaParser.IDENTIFIER);
			this.state = 457;
			this.formalParameters();
			this.state = 462;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.LBRACK) {
				{
				{
				this.state = 458;
				this.match(JavaParser.LBRACK);
				this.state = 459;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 464;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.THROWS) {
				{
				this.state = 465;
				this.throwList();
				}
			}

			this.state = 468;
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
		this.enterRule(_localctx, 48, JavaParser.RULE_throwList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 470;
			this.match(JavaParser.THROWS);
			this.state = 471;
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
		this.enterRule(_localctx, 50, JavaParser.RULE_methodBody);
		try {
			this.state = 475;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 473;
				this.block();
				}
				break;
			case JavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 474;
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
		this.enterRule(_localctx, 52, JavaParser.RULE_typeTypeOrVoid);
		try {
			this.state = 479;
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
				this.state = 477;
				this.typeType();
				}
				break;
			case JavaParser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 478;
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
		this.enterRule(_localctx, 54, JavaParser.RULE_genericMethodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this.typeParameters();
			this.state = 482;
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
		this.enterRule(_localctx, 56, JavaParser.RULE_genericConstructorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
			this.typeParameters();
			this.state = 485;
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
		this.enterRule(_localctx, 58, JavaParser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this.match(JavaParser.IDENTIFIER);
			this.state = 488;
			this.formalParameters();
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.THROWS) {
				{
				this.state = 489;
				this.match(JavaParser.THROWS);
				this.state = 490;
				this.qualifiedNameList();
				}
			}

			this.state = 493;
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
		this.enterRule(_localctx, 60, JavaParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.typeType();
			this.state = 496;
			this.variableDeclarators();
			this.state = 497;
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
		this.enterRule(_localctx, 62, JavaParser.RULE_interfaceBodyDeclaration);
		try {
			let _alt: number;
			this.state = 507;
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
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 502;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 499;
						this.modifier();
						}
						}
					}
					this.state = 504;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
				}
				this.state = 505;
				this.interfaceMemberDeclaration();
				}
				break;
			case JavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 506;
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
		this.enterRule(_localctx, 64, JavaParser.RULE_interfaceMemberDeclaration);
		try {
			this.state = 516;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 509;
				this.constDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 510;
				this.interfaceMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 511;
				this.genericInterfaceMethodDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 512;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 513;
				this.annotationTypeDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 514;
				this.classDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 515;
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
		this.enterRule(_localctx, 66, JavaParser.RULE_constDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this.typeType();
			this.state = 519;
			this.constantDeclarator();
			this.state = 524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 520;
				this.match(JavaParser.COMMA);
				this.state = 521;
				this.constantDeclarator();
				}
				}
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 527;
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
		this.enterRule(_localctx, 68, JavaParser.RULE_constantDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.match(JavaParser.IDENTIFIER);
			this.state = 534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.LBRACK) {
				{
				{
				this.state = 530;
				this.match(JavaParser.LBRACK);
				this.state = 531;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 537;
			this.match(JavaParser.ASSIGN);
			this.state = 538;
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
		this.enterRule(_localctx, 70, JavaParser.RULE_interfaceMethodDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 540;
					this.interfaceMethodModifier();
					}
					}
				}
				this.state = 545;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			}
			this.state = 556;
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
				this.state = 546;
				this.typeTypeOrVoid();
				}
				break;
			case JavaParser.LT:
				{
				this.state = 547;
				this.typeParameters();
				this.state = 551;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 548;
						this.annotation();
						}
						}
					}
					this.state = 553;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
				}
				this.state = 554;
				this.typeTypeOrVoid();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 558;
			this.match(JavaParser.IDENTIFIER);
			this.state = 559;
			this.formalParameters();
			this.state = 564;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.LBRACK) {
				{
				{
				this.state = 560;
				this.match(JavaParser.LBRACK);
				this.state = 561;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 569;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.THROWS) {
				{
				this.state = 567;
				this.match(JavaParser.THROWS);
				this.state = 568;
				this.qualifiedNameList();
				}
			}

			this.state = 571;
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
		this.enterRule(_localctx, 72, JavaParser.RULE_interfaceMethodModifier);
		try {
			this.state = 579;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 573;
				this.annotation();
				}
				break;
			case JavaParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 574;
				this.match(JavaParser.PUBLIC);
				}
				break;
			case JavaParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 575;
				this.match(JavaParser.ABSTRACT);
				}
				break;
			case JavaParser.DEFAULT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 576;
				this.match(JavaParser.DEFAULT);
				}
				break;
			case JavaParser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 577;
				this.match(JavaParser.STATIC);
				}
				break;
			case JavaParser.STRICTFP:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 578;
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
		this.enterRule(_localctx, 74, JavaParser.RULE_genericInterfaceMethodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 581;
			this.typeParameters();
			this.state = 582;
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
		this.enterRule(_localctx, 76, JavaParser.RULE_variableDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this.variableDeclarator();
			this.state = 589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 585;
				this.match(JavaParser.COMMA);
				this.state = 586;
				this.variableDeclarator();
				}
				}
				this.state = 591;
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
		this.enterRule(_localctx, 78, JavaParser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.variableDeclaratorId();
			this.state = 595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.ASSIGN) {
				{
				this.state = 593;
				this.match(JavaParser.ASSIGN);
				this.state = 594;
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
		this.enterRule(_localctx, 80, JavaParser.RULE_variableDeclaratorId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 597;
			this.match(JavaParser.IDENTIFIER);
			this.state = 602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.LBRACK) {
				{
				{
				this.state = 598;
				this.match(JavaParser.LBRACK);
				this.state = 599;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 604;
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
		this.enterRule(_localctx, 82, JavaParser.RULE_variableInitializer);
		try {
			this.state = 607;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 605;
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
				this.state = 606;
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
		this.enterRule(_localctx, 84, JavaParser.RULE_arrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 609;
			this.match(JavaParser.LBRACE);
			this.state = 621;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LBRACE - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				this.state = 610;
				this.variableInitializer();
				this.state = 615;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 611;
						this.match(JavaParser.COMMA);
						this.state = 612;
						this.variableInitializer();
						}
						}
					}
					this.state = 617;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				}
				this.state = 619;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.COMMA) {
					{
					this.state = 618;
					this.match(JavaParser.COMMA);
					}
				}

				}
			}

			this.state = 623;
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
		this.enterRule(_localctx, 86, JavaParser.RULE_classOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 625;
			this.match(JavaParser.IDENTIFIER);
			this.state = 627;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 626;
				this.typeArguments();
				}
				break;
			}
			this.state = 636;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 629;
					this.match(JavaParser.DOT);
					this.state = 630;
					this.match(JavaParser.IDENTIFIER);
					this.state = 632;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
					case 1:
						{
						this.state = 631;
						this.typeArguments();
						}
						break;
					}
					}
					}
				}
				this.state = 638;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
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
		this.enterRule(_localctx, 88, JavaParser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 651;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 639;
				this.typeType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					{
					this.state = 640;
					this.annotation();
					}
					}
					this.state = 645;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 646;
				this.match(JavaParser.QUESTION);
				this.state = 649;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.EXTENDS || _la === JavaParser.SUPER) {
					{
					this.state = 647;
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
					this.state = 648;
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
		this.enterRule(_localctx, 90, JavaParser.RULE_qualifiedNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
			this.qualifiedName();
			this.state = 658;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 654;
				this.match(JavaParser.COMMA);
				this.state = 655;
				this.qualifiedName();
				}
				}
				this.state = 660;
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
		this.enterRule(_localctx, 92, JavaParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this.match(JavaParser.LPAREN);
			this.state = 663;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la === JavaParser.SHORT || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				this.state = 662;
				this.formalParameterList();
				}
			}

			this.state = 665;
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
		this.enterRule(_localctx, 94, JavaParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 680;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 667;
				this.formalParameter();
				this.state = 672;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 668;
						this.match(JavaParser.COMMA);
						this.state = 669;
						this.formalParameter();
						}
						}
					}
					this.state = 674;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				}
				this.state = 677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.COMMA) {
					{
					this.state = 675;
					this.match(JavaParser.COMMA);
					this.state = 676;
					this.lastFormalParameter();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 679;
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
		this.enterRule(_localctx, 96, JavaParser.RULE_formalParameter);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 685;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 682;
					this.variableModifier();
					}
					}
				}
				this.state = 687;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			}
			this.state = 688;
			this.typeType();
			this.state = 689;
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
		this.enterRule(_localctx, 98, JavaParser.RULE_lastFormalParameter);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 694;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 691;
					this.variableModifier();
					}
					}
				}
				this.state = 696;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			}
			this.state = 697;
			this.typeType();
			this.state = 701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				{
				this.state = 698;
				this.annotation();
				}
				}
				this.state = 703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 704;
			this.match(JavaParser.ELLIPSIS);
			this.state = 705;
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
		this.enterRule(_localctx, 100, JavaParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this.match(JavaParser.IDENTIFIER);
			this.state = 712;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 708;
					this.match(JavaParser.DOT);
					this.state = 709;
					this.match(JavaParser.IDENTIFIER);
					}
					}
				}
				this.state = 714;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
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
		this.enterRule(_localctx, 102, JavaParser.RULE_literal);
		try {
			this.state = 721;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.DECIMAL_LITERAL:
			case JavaParser.HEX_LITERAL:
			case JavaParser.OCT_LITERAL:
			case JavaParser.BINARY_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 715;
				this.integerLiteral();
				}
				break;
			case JavaParser.FLOAT_LITERAL:
			case JavaParser.HEX_FLOAT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 716;
				this.floatLiteral();
				}
				break;
			case JavaParser.CHAR_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 717;
				this.match(JavaParser.CHAR_LITERAL);
				}
				break;
			case JavaParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 718;
				this.match(JavaParser.STRING_LITERAL);
				}
				break;
			case JavaParser.BOOL_LITERAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 719;
				this.match(JavaParser.BOOL_LITERAL);
				}
				break;
			case JavaParser.NULL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 720;
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
		this.enterRule(_localctx, 104, JavaParser.RULE_integerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 723;
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
		this.enterRule(_localctx, 106, JavaParser.RULE_floatLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 725;
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
		this.enterRule(_localctx, 108, JavaParser.RULE_altAnnotationQualifiedName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 731;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.IDENTIFIER) {
				{
				{
				this.state = 727;
				this.match(JavaParser.IDENTIFIER);
				this.state = 728;
				this.match(JavaParser.DOT);
				}
				}
				this.state = 733;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 734;
			this.match(JavaParser.AT);
			this.state = 735;
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
		this.enterRule(_localctx, 110, JavaParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 740;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 737;
				this.match(JavaParser.AT);
				this.state = 738;
				this.qualifiedName();
				}
				break;

			case 2:
				{
				this.state = 739;
				this.altAnnotationQualifiedName();
				}
				break;
			}
			this.state = 748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LPAREN) {
				{
				this.state = 742;
				this.match(JavaParser.LPAREN);
				this.state = 745;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
				case 1:
					{
					this.state = 743;
					this.elementValuePairs();
					}
					break;

				case 2:
					{
					this.state = 744;
					this.elementValue();
					}
					break;
				}
				this.state = 747;
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
		this.enterRule(_localctx, 112, JavaParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 750;
			this.elementValuePair();
			this.state = 755;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 751;
				this.match(JavaParser.COMMA);
				this.state = 752;
				this.elementValuePair();
				}
				}
				this.state = 757;
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
		this.enterRule(_localctx, 114, JavaParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 758;
			this.match(JavaParser.IDENTIFIER);
			this.state = 759;
			this.match(JavaParser.ASSIGN);
			this.state = 760;
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
		this.enterRule(_localctx, 116, JavaParser.RULE_elementValue);
		try {
			this.state = 765;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 762;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 763;
				this.annotation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 764;
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
		this.enterRule(_localctx, 118, JavaParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			this.match(JavaParser.LBRACE);
			this.state = 776;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LBRACE - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				this.state = 768;
				this.elementValue();
				this.state = 773;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 769;
						this.match(JavaParser.COMMA);
						this.state = 770;
						this.elementValue();
						}
						}
					}
					this.state = 775;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
				}
				}
			}

			this.state = 779;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.COMMA) {
				{
				this.state = 778;
				this.match(JavaParser.COMMA);
				}
			}

			this.state = 781;
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
		this.enterRule(_localctx, 120, JavaParser.RULE_annotationTypeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 783;
			this.match(JavaParser.AT);
			this.state = 784;
			this.match(JavaParser.INTERFACE);
			this.state = 785;
			this.match(JavaParser.IDENTIFIER);
			this.state = 786;
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
		this.enterRule(_localctx, 122, JavaParser.RULE_annotationTypeBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 788;
			this.match(JavaParser.LBRACE);
			this.state = 792;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOLATILE - 33)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				{
				this.state = 789;
				this.annotationTypeElementDeclaration();
				}
				}
				this.state = 794;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 795;
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
		this.enterRule(_localctx, 124, JavaParser.RULE_annotationTypeElementDeclaration);
		try {
			let _alt: number;
			this.state = 805;
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
				this.state = 800;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 797;
						this.modifier();
						}
						}
					}
					this.state = 802;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
				}
				this.state = 803;
				this.annotationTypeElementRest();
				}
				break;
			case JavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 804;
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
		this.enterRule(_localctx, 126, JavaParser.RULE_annotationTypeElementRest);
		try {
			this.state = 827;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 807;
				this.typeType();
				this.state = 808;
				this.annotationMethodOrConstantRest();
				this.state = 809;
				this.match(JavaParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 811;
				this.classDeclaration();
				this.state = 813;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
				case 1:
					{
					this.state = 812;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 815;
				this.interfaceDeclaration();
				this.state = 817;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
				case 1:
					{
					this.state = 816;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 819;
				this.enumDeclaration();
				this.state = 821;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
				case 1:
					{
					this.state = 820;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 823;
				this.annotationTypeDeclaration();
				this.state = 825;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
				case 1:
					{
					this.state = 824;
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
		this.enterRule(_localctx, 128, JavaParser.RULE_annotationMethodOrConstantRest);
		try {
			this.state = 831;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 829;
				this.annotationMethodRest();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 830;
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
		this.enterRule(_localctx, 130, JavaParser.RULE_annotationMethodRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 833;
			this.match(JavaParser.IDENTIFIER);
			this.state = 834;
			this.match(JavaParser.LPAREN);
			this.state = 835;
			this.match(JavaParser.RPAREN);
			this.state = 837;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.DEFAULT) {
				{
				this.state = 836;
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
		this.enterRule(_localctx, 132, JavaParser.RULE_annotationConstantRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 839;
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
		this.enterRule(_localctx, 134, JavaParser.RULE_defaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 841;
			this.match(JavaParser.DEFAULT);
			this.state = 842;
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
		this.enterRule(_localctx, 136, JavaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 844;
			this.match(JavaParser.LBRACE);
			this.state = 848;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.DECIMAL_LITERAL - 33)) | (1 << (JavaParser.HEX_LITERAL - 33)) | (1 << (JavaParser.OCT_LITERAL - 33)) | (1 << (JavaParser.BINARY_LITERAL - 33)) | (1 << (JavaParser.FLOAT_LITERAL - 33)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 33)) | (1 << (JavaParser.BOOL_LITERAL - 33)) | (1 << (JavaParser.CHAR_LITERAL - 33)) | (1 << (JavaParser.STRING_LITERAL - 33)) | (1 << (JavaParser.NULL_LITERAL - 33)) | (1 << (JavaParser.LPAREN - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JavaParser.SEMI - 67)) | (1 << (JavaParser.LT - 67)) | (1 << (JavaParser.BANG - 67)) | (1 << (JavaParser.TILDE - 67)) | (1 << (JavaParser.INC - 67)) | (1 << (JavaParser.DEC - 67)) | (1 << (JavaParser.ADD - 67)) | (1 << (JavaParser.SUB - 67)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				{
				this.state = 845;
				this.blockStatement();
				}
				}
				this.state = 850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 851;
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
		this.enterRule(_localctx, 138, JavaParser.RULE_blockStatement);
		try {
			this.state = 858;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 853;
				this.localVariableDeclaration();
				this.state = 854;
				this.match(JavaParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 856;
				this.statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 857;
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
		this.enterRule(_localctx, 140, JavaParser.RULE_localVariableDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 863;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 860;
					this.variableModifier();
					}
					}
				}
				this.state = 865;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			}
			this.state = 866;
			this.typeType();
			this.state = 867;
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
		this.enterRule(_localctx, 142, JavaParser.RULE_localTypeDeclaration);
		let _la: number;
		try {
			this.state = 880;
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
				this.state = 872;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.ABSTRACT || _la === JavaParser.FINAL || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					{
					this.state = 869;
					this.classOrInterfaceModifier();
					}
					}
					this.state = 874;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 877;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.CLASS:
					{
					this.state = 875;
					this.classDeclaration();
					}
					break;
				case JavaParser.INTERFACE:
					{
					this.state = 876;
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
				this.state = 879;
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
		this.enterRule(_localctx, 144, JavaParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 986;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 882;
				_localctx._blockLabel = this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 883;
				this.match(JavaParser.ASSERT);
				this.state = 884;
				this.expression(0);
				this.state = 887;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.COLON) {
					{
					this.state = 885;
					this.match(JavaParser.COLON);
					this.state = 886;
					this.expression(0);
					}
				}

				this.state = 889;
				this.match(JavaParser.SEMI);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 891;
				this.match(JavaParser.IF);
				this.state = 892;
				this.parExpression();
				this.state = 893;
				this.statement();
				this.state = 896;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 894;
					this.match(JavaParser.ELSE);
					this.state = 895;
					this.statement();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 898;
				this.match(JavaParser.FOR);
				this.state = 899;
				this.match(JavaParser.LPAREN);
				this.state = 900;
				this.forControl();
				this.state = 901;
				this.match(JavaParser.RPAREN);
				this.state = 902;
				this.statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 904;
				this.match(JavaParser.WHILE);
				this.state = 905;
				this.parExpression();
				this.state = 906;
				this.statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 908;
				this.match(JavaParser.DO);
				this.state = 909;
				this.statement();
				this.state = 910;
				this.match(JavaParser.WHILE);
				this.state = 911;
				this.parExpression();
				this.state = 912;
				this.match(JavaParser.SEMI);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 914;
				this.match(JavaParser.TRY);
				this.state = 915;
				this.block();
				this.state = 925;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.CATCH:
					{
					this.state = 917;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 916;
						this.catchClause();
						}
						}
						this.state = 919;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === JavaParser.CATCH);
					this.state = 922;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JavaParser.FINALLY) {
						{
						this.state = 921;
						this.finallyBlock();
						}
					}

					}
					break;
				case JavaParser.FINALLY:
					{
					this.state = 924;
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
				this.state = 927;
				this.match(JavaParser.TRY);
				this.state = 928;
				this.resourceSpecification();
				this.state = 929;
				this.block();
				this.state = 933;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.CATCH) {
					{
					{
					this.state = 930;
					this.catchClause();
					}
					}
					this.state = 935;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 937;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.FINALLY) {
					{
					this.state = 936;
					this.finallyBlock();
					}
				}

				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 939;
				this.match(JavaParser.SWITCH);
				this.state = 940;
				this.parExpression();
				this.state = 941;
				this.match(JavaParser.LBRACE);
				this.state = 945;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 942;
						this.switchBlockStatementGroup();
						}
						}
					}
					this.state = 947;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
				}
				this.state = 951;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT) {
					{
					{
					this.state = 948;
					this.switchLabel();
					}
					}
					this.state = 953;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 954;
				this.match(JavaParser.RBRACE);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 956;
				this.match(JavaParser.SYNCHRONIZED);
				this.state = 957;
				this.parExpression();
				this.state = 958;
				this.block();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 960;
				this.match(JavaParser.RETURN);
				this.state = 962;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 961;
					this.expression(0);
					}
				}

				this.state = 964;
				this.match(JavaParser.SEMI);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 965;
				this.match(JavaParser.THROW);
				this.state = 966;
				this.expression(0);
				this.state = 967;
				this.match(JavaParser.SEMI);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 969;
				this.match(JavaParser.BREAK);
				this.state = 971;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.IDENTIFIER) {
					{
					this.state = 970;
					this.match(JavaParser.IDENTIFIER);
					}
				}

				this.state = 973;
				this.match(JavaParser.SEMI);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 974;
				this.match(JavaParser.CONTINUE);
				this.state = 976;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.IDENTIFIER) {
					{
					this.state = 975;
					this.match(JavaParser.IDENTIFIER);
					}
				}

				this.state = 978;
				this.match(JavaParser.SEMI);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 979;
				this.match(JavaParser.SEMI);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 980;
				_localctx._statementExpression = this.expression(0);
				this.state = 981;
				this.match(JavaParser.SEMI);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 983;
				_localctx._identifierLabel = this.match(JavaParser.IDENTIFIER);
				this.state = 984;
				this.match(JavaParser.COLON);
				this.state = 985;
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
		this.enterRule(_localctx, 146, JavaParser.RULE_catchClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 988;
			this.match(JavaParser.CATCH);
			this.state = 989;
			this.match(JavaParser.LPAREN);
			this.state = 993;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 990;
					this.variableModifier();
					}
					}
				}
				this.state = 995;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			}
			this.state = 996;
			this.catchType();
			this.state = 997;
			this.match(JavaParser.IDENTIFIER);
			this.state = 998;
			this.match(JavaParser.RPAREN);
			this.state = 999;
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
		this.enterRule(_localctx, 148, JavaParser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1001;
			this.qualifiedName();
			this.state = 1006;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.BITOR) {
				{
				{
				this.state = 1002;
				this.match(JavaParser.BITOR);
				this.state = 1003;
				this.qualifiedName();
				}
				}
				this.state = 1008;
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
		this.enterRule(_localctx, 150, JavaParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1009;
			this.match(JavaParser.FINALLY);
			this.state = 1010;
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
		this.enterRule(_localctx, 152, JavaParser.RULE_resourceSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1012;
			this.match(JavaParser.LPAREN);
			this.state = 1013;
			this.resources();
			this.state = 1015;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.SEMI) {
				{
				this.state = 1014;
				this.match(JavaParser.SEMI);
				}
			}

			this.state = 1017;
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
		this.enterRule(_localctx, 154, JavaParser.RULE_resources);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1019;
			this.resource();
			this.state = 1024;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1020;
					this.match(JavaParser.SEMI);
					this.state = 1021;
					this.resource();
					}
					}
				}
				this.state = 1026;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
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
		this.enterRule(_localctx, 156, JavaParser.RULE_resource);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1030;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1027;
					this.variableModifier();
					}
					}
				}
				this.state = 1032;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			}
			this.state = 1033;
			this.classOrInterfaceType();
			this.state = 1034;
			this.variableDeclaratorId();
			this.state = 1035;
			this.match(JavaParser.ASSIGN);
			this.state = 1036;
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
		this.enterRule(_localctx, 158, JavaParser.RULE_switchBlockStatementGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1039;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1038;
				this.switchLabel();
				}
				}
				this.state = 1041;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT);
			this.state = 1044;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1043;
				this.blockStatement();
				}
				}
				this.state = 1046;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.DECIMAL_LITERAL - 33)) | (1 << (JavaParser.HEX_LITERAL - 33)) | (1 << (JavaParser.OCT_LITERAL - 33)) | (1 << (JavaParser.BINARY_LITERAL - 33)) | (1 << (JavaParser.FLOAT_LITERAL - 33)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 33)) | (1 << (JavaParser.BOOL_LITERAL - 33)) | (1 << (JavaParser.CHAR_LITERAL - 33)) | (1 << (JavaParser.STRING_LITERAL - 33)) | (1 << (JavaParser.NULL_LITERAL - 33)) | (1 << (JavaParser.LPAREN - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JavaParser.SEMI - 67)) | (1 << (JavaParser.LT - 67)) | (1 << (JavaParser.BANG - 67)) | (1 << (JavaParser.TILDE - 67)) | (1 << (JavaParser.INC - 67)) | (1 << (JavaParser.DEC - 67)) | (1 << (JavaParser.ADD - 67)) | (1 << (JavaParser.SUB - 67)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER);
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
		this.enterRule(_localctx, 160, JavaParser.RULE_switchLabel);
		try {
			this.state = 1056;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1048;
				this.match(JavaParser.CASE);
				this.state = 1051;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 1049;
					_localctx._constantExpression = this.expression(0);
					}
					break;

				case 2:
					{
					this.state = 1050;
					_localctx._enumConstantName = this.match(JavaParser.IDENTIFIER);
					}
					break;
				}
				this.state = 1053;
				this.match(JavaParser.COLON);
				}
				break;
			case JavaParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1054;
				this.match(JavaParser.DEFAULT);
				this.state = 1055;
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
		this.enterRule(_localctx, 162, JavaParser.RULE_forControl);
		let _la: number;
		try {
			this.state = 1070;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1058;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1060;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1059;
					this.forInit();
					}
				}

				this.state = 1062;
				this.match(JavaParser.SEMI);
				this.state = 1064;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1063;
					this.expression(0);
					}
				}

				this.state = 1066;
				this.match(JavaParser.SEMI);
				this.state = 1068;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1067;
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
		this.enterRule(_localctx, 164, JavaParser.RULE_forInit);
		try {
			this.state = 1074;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1072;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1073;
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
		this.enterRule(_localctx, 166, JavaParser.RULE_enhancedForControl);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1079;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1076;
					this.variableModifier();
					}
					}
				}
				this.state = 1081;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
			}
			this.state = 1082;
			this.typeType();
			this.state = 1083;
			this.variableDeclaratorId();
			this.state = 1084;
			this.match(JavaParser.COLON);
			this.state = 1085;
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
		this.enterRule(_localctx, 168, JavaParser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1087;
			this.match(JavaParser.LPAREN);
			this.state = 1088;
			this.expression(0);
			this.state = 1089;
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
		this.enterRule(_localctx, 170, JavaParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1091;
			this.expression(0);
			this.state = 1096;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 1092;
				this.match(JavaParser.COMMA);
				this.state = 1093;
				this.expression(0);
				}
				}
				this.state = 1098;
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
		this.enterRule(_localctx, 172, JavaParser.RULE_methodCall);
		let _la: number;
		try {
			this.state = 1117;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1099;
				this.match(JavaParser.IDENTIFIER);
				this.state = 1100;
				this.match(JavaParser.LPAREN);
				this.state = 1102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1101;
					this.expressionList();
					}
				}

				this.state = 1104;
				this.match(JavaParser.RPAREN);
				}
				break;
			case JavaParser.THIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1105;
				this.match(JavaParser.THIS);
				this.state = 1106;
				this.match(JavaParser.LPAREN);
				this.state = 1108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1107;
					this.expressionList();
					}
				}

				this.state = 1110;
				this.match(JavaParser.RPAREN);
				}
				break;
			case JavaParser.SUPER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1111;
				this.match(JavaParser.SUPER);
				this.state = 1112;
				this.match(JavaParser.LPAREN);
				this.state = 1114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1113;
					this.expressionList();
					}
				}

				this.state = 1116;
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
		let _startState: number = 174;
		this.enterRecursionRule(_localctx, 174, JavaParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1163;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 1120;
				this.primary();
				}
				break;

			case 2:
				{
				this.state = 1121;
				this.methodCall();
				}
				break;

			case 3:
				{
				this.state = 1122;
				this.match(JavaParser.NEW);
				this.state = 1123;
				this.creator();
				}
				break;

			case 4:
				{
				this.state = 1124;
				this.match(JavaParser.LPAREN);
				this.state = 1128;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1125;
						this.annotation();
						}
						}
					}
					this.state = 1130;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
				}
				this.state = 1131;
				this.typeType();
				this.state = 1136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.BITAND) {
					{
					{
					this.state = 1132;
					this.match(JavaParser.BITAND);
					this.state = 1133;
					this.typeType();
					}
					}
					this.state = 1138;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1139;
				this.match(JavaParser.RPAREN);
				this.state = 1140;
				this.expression(21);
				}
				break;

			case 5:
				{
				this.state = 1142;
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
				this.state = 1143;
				this.expression(19);
				}
				break;

			case 6:
				{
				this.state = 1144;
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
				this.state = 1145;
				this.expression(18);
				}
				break;

			case 7:
				{
				this.state = 1146;
				this.lambdaExpression();
				}
				break;

			case 8:
				{
				this.state = 1147;
				this.typeType();
				this.state = 1148;
				this.match(JavaParser.COLONCOLON);
				this.state = 1154;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.LT:
				case JavaParser.IDENTIFIER:
					{
					this.state = 1150;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JavaParser.LT) {
						{
						this.state = 1149;
						this.typeArguments();
						}
					}

					this.state = 1152;
					this.match(JavaParser.IDENTIFIER);
					}
					break;
				case JavaParser.NEW:
					{
					this.state = 1153;
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
				this.state = 1156;
				this.classType();
				this.state = 1157;
				this.match(JavaParser.COLONCOLON);
				this.state = 1159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.LT) {
					{
					this.state = 1158;
					this.typeArguments();
					}
				}

				this.state = 1161;
				this.match(JavaParser.NEW);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1245;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1243;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1165;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1166;
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
						this.state = 1167;
						this.expression(18);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1168;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 1169;
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
						this.state = 1170;
						this.expression(17);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1171;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1179;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
						case 1:
							{
							this.state = 1172;
							this.match(JavaParser.LT);
							this.state = 1173;
							this.match(JavaParser.LT);
							}
							break;

						case 2:
							{
							this.state = 1174;
							this.match(JavaParser.GT);
							this.state = 1175;
							this.match(JavaParser.GT);
							this.state = 1176;
							this.match(JavaParser.GT);
							}
							break;

						case 3:
							{
							this.state = 1177;
							this.match(JavaParser.GT);
							this.state = 1178;
							this.match(JavaParser.GT);
							}
							break;
						}
						this.state = 1181;
						this.expression(16);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1182;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 1183;
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
						this.state = 1184;
						this.expression(15);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1185;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1186;
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
						this.state = 1187;
						this.expression(13);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1188;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1189;
						_localctx._bop = this.match(JavaParser.BITAND);
						this.state = 1190;
						this.expression(12);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1191;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1192;
						_localctx._bop = this.match(JavaParser.CARET);
						this.state = 1193;
						this.expression(11);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1194;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1195;
						_localctx._bop = this.match(JavaParser.BITOR);
						this.state = 1196;
						this.expression(10);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1197;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1198;
						_localctx._bop = this.match(JavaParser.AND);
						this.state = 1199;
						this.expression(9);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1200;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1201;
						_localctx._bop = this.match(JavaParser.OR);
						this.state = 1202;
						this.expression(8);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1203;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1204;
						_localctx._bop = this.match(JavaParser.QUESTION);
						this.state = 1205;
						this.expression(0);
						this.state = 1206;
						this.match(JavaParser.COLON);
						this.state = 1207;
						this.expression(6);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1209;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1210;
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
						this.state = 1211;
						this.expression(5);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1212;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 1213;
						_localctx._bop = this.match(JavaParser.DOT);
						this.state = 1225;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
						case 1:
							{
							this.state = 1214;
							this.match(JavaParser.IDENTIFIER);
							}
							break;

						case 2:
							{
							this.state = 1215;
							this.methodCall();
							}
							break;

						case 3:
							{
							this.state = 1216;
							this.match(JavaParser.THIS);
							}
							break;

						case 4:
							{
							this.state = 1217;
							this.match(JavaParser.NEW);
							this.state = 1219;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === JavaParser.LT) {
								{
								this.state = 1218;
								this.nonWildcardTypeArguments();
								}
							}

							this.state = 1221;
							this.innerCreator();
							}
							break;

						case 5:
							{
							this.state = 1222;
							this.match(JavaParser.SUPER);
							this.state = 1223;
							this.superSuffix();
							}
							break;

						case 6:
							{
							this.state = 1224;
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
						this.state = 1227;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 1228;
						this.match(JavaParser.LBRACK);
						this.state = 1229;
						this.expression(0);
						this.state = 1230;
						this.match(JavaParser.RBRACK);
						}
						break;

					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1232;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 1233;
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
						this.state = 1234;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1235;
						_localctx._bop = this.match(JavaParser.INSTANCEOF);
						this.state = 1236;
						this.typeType();
						}
						break;

					case 17:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1237;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1238;
						this.match(JavaParser.COLONCOLON);
						this.state = 1240;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JavaParser.LT) {
							{
							this.state = 1239;
							this.typeArguments();
							}
						}

						this.state = 1242;
						this.match(JavaParser.IDENTIFIER);
						}
						break;
					}
					}
				}
				this.state = 1247;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
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
		this.enterRule(_localctx, 176, JavaParser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1248;
			this.lambdaParameters();
			this.state = 1249;
			this.match(JavaParser.ARROW);
			this.state = 1250;
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
		this.enterRule(_localctx, 178, JavaParser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.state = 1268;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1252;
				this.match(JavaParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1253;
				this.match(JavaParser.LPAREN);
				this.state = 1255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la === JavaParser.SHORT || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
					{
					this.state = 1254;
					this.formalParameterList();
					}
				}

				this.state = 1257;
				this.match(JavaParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1258;
				this.match(JavaParser.LPAREN);
				this.state = 1259;
				this.match(JavaParser.IDENTIFIER);
				this.state = 1264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.COMMA) {
					{
					{
					this.state = 1260;
					this.match(JavaParser.COMMA);
					this.state = 1261;
					this.match(JavaParser.IDENTIFIER);
					}
					}
					this.state = 1266;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1267;
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
		this.enterRule(_localctx, 180, JavaParser.RULE_lambdaBody);
		try {
			this.state = 1272;
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
				this.state = 1270;
				this.expression(0);
				}
				break;
			case JavaParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1271;
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
		this.enterRule(_localctx, 182, JavaParser.RULE_primary);
		try {
			this.state = 1292;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1274;
				this.match(JavaParser.LPAREN);
				this.state = 1275;
				this.expression(0);
				this.state = 1276;
				this.match(JavaParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1278;
				this.match(JavaParser.THIS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1279;
				this.match(JavaParser.SUPER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1280;
				this.literal();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1281;
				this.match(JavaParser.IDENTIFIER);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1282;
				this.typeTypeOrVoid();
				this.state = 1283;
				this.match(JavaParser.DOT);
				this.state = 1284;
				this.match(JavaParser.CLASS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1286;
				this.nonWildcardTypeArguments();
				this.state = 1290;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.SUPER:
				case JavaParser.IDENTIFIER:
					{
					this.state = 1287;
					this.explicitGenericInvocationSuffix();
					}
					break;
				case JavaParser.THIS:
					{
					this.state = 1288;
					this.match(JavaParser.THIS);
					this.state = 1289;
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
		this.enterRule(_localctx, 184, JavaParser.RULE_classType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				{
				this.state = 1294;
				this.classOrInterfaceType();
				this.state = 1295;
				this.match(JavaParser.DOT);
				}
				break;
			}
			this.state = 1302;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1299;
					this.annotation();
					}
					}
				}
				this.state = 1304;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
			}
			this.state = 1305;
			this.match(JavaParser.IDENTIFIER);
			this.state = 1307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LT) {
				{
				this.state = 1306;
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
		this.enterRule(_localctx, 186, JavaParser.RULE_creator);
		try {
			this.state = 1318;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.LT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1309;
				this.nonWildcardTypeArguments();
				this.state = 1310;
				this.createdName();
				this.state = 1311;
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
				this.state = 1313;
				this.createdName();
				this.state = 1316;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.LBRACK:
					{
					this.state = 1314;
					this.arrayCreatorRest();
					}
					break;
				case JavaParser.LPAREN:
					{
					this.state = 1315;
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
		this.enterRule(_localctx, 188, JavaParser.RULE_createdName);
		let _la: number;
		try {
			this.state = 1335;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1320;
				this.match(JavaParser.IDENTIFIER);
				this.state = 1322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.LT) {
					{
					this.state = 1321;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 1331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.DOT) {
					{
					{
					this.state = 1324;
					this.match(JavaParser.DOT);
					this.state = 1325;
					this.match(JavaParser.IDENTIFIER);
					this.state = 1327;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JavaParser.LT) {
						{
						this.state = 1326;
						this.typeArgumentsOrDiamond();
						}
					}

					}
					}
					this.state = 1333;
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
				this.state = 1334;
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
		this.enterRule(_localctx, 190, JavaParser.RULE_innerCreator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1337;
			this.match(JavaParser.IDENTIFIER);
			this.state = 1339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LT) {
				{
				this.state = 1338;
				this.nonWildcardTypeArgumentsOrDiamond();
				}
			}

			this.state = 1341;
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
		this.enterRule(_localctx, 192, JavaParser.RULE_arrayCreatorRest);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1343;
			this.match(JavaParser.LBRACK);
			this.state = 1371;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.RBRACK:
				{
				this.state = 1344;
				this.match(JavaParser.RBRACK);
				this.state = 1349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.LBRACK) {
					{
					{
					this.state = 1345;
					this.match(JavaParser.LBRACK);
					this.state = 1346;
					this.match(JavaParser.RBRACK);
					}
					}
					this.state = 1351;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1352;
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
				this.state = 1353;
				this.expression(0);
				this.state = 1354;
				this.match(JavaParser.RBRACK);
				this.state = 1361;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1355;
						this.match(JavaParser.LBRACK);
						this.state = 1356;
						this.expression(0);
						this.state = 1357;
						this.match(JavaParser.RBRACK);
						}
						}
					}
					this.state = 1363;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
				}
				this.state = 1368;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1364;
						this.match(JavaParser.LBRACK);
						this.state = 1365;
						this.match(JavaParser.RBRACK);
						}
						}
					}
					this.state = 1370;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
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
		this.enterRule(_localctx, 194, JavaParser.RULE_classCreatorRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1373;
			this.arguments();
			this.state = 1375;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				{
				this.state = 1374;
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
		this.enterRule(_localctx, 196, JavaParser.RULE_explicitGenericInvocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1377;
			this.nonWildcardTypeArguments();
			this.state = 1378;
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
		this.enterRule(_localctx, 198, JavaParser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 1383;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1380;
				this.match(JavaParser.LT);
				this.state = 1381;
				this.match(JavaParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1382;
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
		this.enterRule(_localctx, 200, JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond);
		try {
			this.state = 1388;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1385;
				this.match(JavaParser.LT);
				this.state = 1386;
				this.match(JavaParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1387;
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
		this.enterRule(_localctx, 202, JavaParser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1390;
			this.match(JavaParser.LT);
			this.state = 1391;
			this.typeList();
			this.state = 1392;
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
		this.enterRule(_localctx, 204, JavaParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1394;
			this.typeType();
			this.state = 1399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 1395;
				this.match(JavaParser.COMMA);
				this.state = 1396;
				this.typeType();
				}
				}
				this.state = 1401;
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
		this.enterRule(_localctx, 206, JavaParser.RULE_typeType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1405;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1402;
					this.annotation();
					}
					}
				}
				this.state = 1407;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
			}
			this.state = 1410;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.IDENTIFIER:
				{
				this.state = 1408;
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
				this.state = 1409;
				this.primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1422;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1415;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
						{
						{
						this.state = 1412;
						this.annotation();
						}
						}
						this.state = 1417;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1418;
					this.match(JavaParser.LBRACK);
					this.state = 1419;
					this.match(JavaParser.RBRACK);
					}
					}
				}
				this.state = 1424;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
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
		this.enterRule(_localctx, 208, JavaParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1425;
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
		this.enterRule(_localctx, 210, JavaParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1427;
			this.match(JavaParser.LT);
			this.state = 1428;
			this.typeArgument();
			this.state = 1433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 1429;
				this.match(JavaParser.COMMA);
				this.state = 1430;
				this.typeArgument();
				}
				}
				this.state = 1435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1436;
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
		this.enterRule(_localctx, 212, JavaParser.RULE_superSuffix);
		try {
			this.state = 1444;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1438;
				this.arguments();
				}
				break;
			case JavaParser.DOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1439;
				this.match(JavaParser.DOT);
				this.state = 1440;
				this.match(JavaParser.IDENTIFIER);
				this.state = 1442;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
				case 1:
					{
					this.state = 1441;
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
		this.enterRule(_localctx, 214, JavaParser.RULE_explicitGenericInvocationSuffix);
		try {
			this.state = 1450;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.SUPER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1446;
				this.match(JavaParser.SUPER);
				this.state = 1447;
				this.superSuffix();
				}
				break;
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1448;
				this.match(JavaParser.IDENTIFIER);
				this.state = 1449;
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
		this.enterRule(_localctx, 216, JavaParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1452;
			this.match(JavaParser.LPAREN);
			this.state = 1454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
				{
				this.state = 1453;
				this.expressionList();
				}
			}

			this.state = 1456;
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
		case 87:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03q\u05B5\x04\x02" +
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
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x03\x02\x05\x02\xDE\n\x02" +
		"\x03\x02\x07\x02\xE1\n\x02\f\x02\x0E\x02\xE4\v\x02\x03\x02\x07\x02\xE7" +
		"\n\x02\f\x02\x0E\x02\xEA\v\x02\x03\x02\x03\x02\x03\x03\x07\x03\xEF\n\x03" +
		"\f\x03\x0E\x03\xF2\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x05\x04\xFA\n\x04\x03\x04\x03\x04\x03\x04\x05\x04\xFF\n\x04\x03\x04\x03" +
		"\x04\x03\x05\x05\x05\u0104\n\x05\x03\x05\x07\x05\u0107\n\x05\f\x05\x0E" +
		"\x05\u010A\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0110\n\x05\x03" +
		"\x05\x05\x05\u0113\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"\u011A\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\u0124\n\x07\x03\b\x03\b\x05\b\u0128\n\b\x03\t\x03\t\x03\t" +
		"\x05\t\u012D\n\t\x03\t\x05\t\u0130\n\t\x03\t\x05\t\u0133\n\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x07\f\u0141" +
		"\n\f\f\f\x0E\f\u0144\v\f\x03\f\x03\f\x03\r\x07\r\u0149\n\r\f\r\x0E\r\u014C" +
		"\v\r\x03\r\x03\r\x03\r\x07\r\u0151\n\r\f\r\x0E\r\u0154\v\r\x03\r\x05\r" +
		"\u0157\n\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u015C\n\x0E\f\x0E\x0E\x0E\u015F" +
		"\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0165\n\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u0169\n\x0F\x03\x0F\x05\x0F\u016C\n\x0F\x03\x0F\x05\x0F\u016F" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u0176\n\x10\f\x10" +
		"\x0E\x10\u0179\v\x10\x03\x11\x07\x11\u017C\n\x11\f\x11\x0E\x11\u017F\v" +
		"\x11\x03\x11\x03\x11\x05\x11\u0183\n\x11\x03\x11\x05\x11\u0186\n\x11\x03" +
		"\x12\x03\x12\x07\x12\u018A\n\x12\f\x12\x0E\x12\u018D\v\x12\x03\x13\x03" +
		"\x13\x03\x13\x05\x13\u0192\n\x13\x03\x13\x03\x13\x05\x13\u0196\n\x13\x03" +
		"\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x07\x15\u019E\n\x15\f\x15" +
		"\x0E\x15\u01A1\v\x15\x03\x15\x03\x15\x03\x16\x03\x16\x07\x16\u01A7\n\x16" +
		"\f\x16\x0E\x16\u01AA\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x05\x17\u01B0" +
		"\n\x17\x03\x17\x03\x17\x05\x17\u01B4\n\x17\x03\x17\x07\x17\u01B7\n\x17" +
		"\f\x17\x0E\x17\u01BA\v\x17\x03\x17\x05\x17\u01BD\n\x17\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u01C8" +
		"\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u01CF\n\x19\f\x19" +
		"\x0E\x19\u01D2\v\x19\x03\x19\x05\x19\u01D5\n\x19\x03\x19\x03\x19\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\u01DE\n\x1B\x03\x1C\x03\x1C\x05" +
		"\x1C\u01E2\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01EE\n\x1F\x03\x1F\x03\x1F\x03 \x03" +
		" \x03 \x03 \x03!\x07!\u01F7\n!\f!\x0E!\u01FA\v!\x03!\x03!\x05!\u01FE\n" +
		"!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0207\n\"\x03#\x03#" +
		"\x03#\x03#\x07#\u020D\n#\f#\x0E#\u0210\v#\x03#\x03#\x03$\x03$\x03$\x07" +
		"$\u0217\n$\f$\x0E$\u021A\v$\x03$\x03$\x03$\x03%\x07%\u0220\n%\f%\x0E%" +
		"\u0223\v%\x03%\x03%\x03%\x07%\u0228\n%\f%\x0E%\u022B\v%\x03%\x03%\x05" +
		"%\u022F\n%\x03%\x03%\x03%\x03%\x07%\u0235\n%\f%\x0E%\u0238\v%\x03%\x03" +
		"%\x05%\u023C\n%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u0246\n&" +
		"\x03\'\x03\'\x03\'\x03(\x03(\x03(\x07(\u024E\n(\f(\x0E(\u0251\v(\x03)" +
		"\x03)\x03)\x05)\u0256\n)\x03*\x03*\x03*\x07*\u025B\n*\f*\x0E*\u025E\v" +
		"*\x03+\x03+\x05+\u0262\n+\x03,\x03,\x03,\x03,\x07,\u0268\n,\f,\x0E,\u026B" +
		"\v,\x03,\x05,\u026E\n,\x05,\u0270\n,\x03,\x03,\x03-\x03-\x05-\u0276\n" +
		"-\x03-\x03-\x03-\x05-\u027B\n-\x07-\u027D\n-\f-\x0E-\u0280\v-\x03.\x03" +
		".\x07.\u0284\n.\f.\x0E.\u0287\v.\x03.\x03.\x03.\x05.\u028C\n.\x05.\u028E" +
		"\n.\x03/\x03/\x03/\x07/\u0293\n/\f/\x0E/\u0296\v/\x030\x030\x050\u029A" +
		"\n0\x030\x030\x031\x031\x031\x071\u02A1\n1\f1\x0E1\u02A4\v1\x031\x031" +
		"\x051\u02A8\n1\x031\x051\u02AB\n1\x032\x072\u02AE\n2\f2\x0E2\u02B1\v2" +
		"\x032\x032\x032\x033\x073\u02B7\n3\f3\x0E3\u02BA\v3\x033\x033\x073\u02BE" +
		"\n3\f3\x0E3\u02C1\v3\x033\x033\x033\x034\x034\x034\x074\u02C9\n4\f4\x0E" +
		"4\u02CC\v4\x035\x035\x035\x035\x035\x035\x055\u02D4\n5\x036\x036\x037" +
		"\x037\x038\x038\x078\u02DC\n8\f8\x0E8\u02DF\v8\x038\x038\x038\x039\x03" +
		"9\x039\x059\u02E7\n9\x039\x039\x039\x059\u02EC\n9\x039\x059\u02EF\n9\x03" +
		":\x03:\x03:\x07:\u02F4\n:\f:\x0E:\u02F7\v:\x03;\x03;\x03;\x03;\x03<\x03" +
		"<\x03<\x05<\u0300\n<\x03=\x03=\x03=\x03=\x07=\u0306\n=\f=\x0E=\u0309\v" +
		"=\x05=\u030B\n=\x03=\x05=\u030E\n=\x03=\x03=\x03>\x03>\x03>\x03>\x03>" +
		"\x03?\x03?\x07?\u0319\n?\f?\x0E?\u031C\v?\x03?\x03?\x03@\x07@\u0321\n" +
		"@\f@\x0E@\u0324\v@\x03@\x03@\x05@\u0328\n@\x03A\x03A\x03A\x03A\x03A\x03" +
		"A\x05A\u0330\nA\x03A\x03A\x05A\u0334\nA\x03A\x03A\x05A\u0338\nA\x03A\x03" +
		"A\x05A\u033C\nA\x05A\u033E\nA\x03B\x03B\x05B\u0342\nB\x03C\x03C\x03C\x03" +
		"C\x05C\u0348\nC\x03D\x03D\x03E\x03E\x03E\x03F\x03F\x07F\u0351\nF\fF\x0E" +
		"F\u0354\vF\x03F\x03F\x03G\x03G\x03G\x03G\x03G\x05G\u035D\nG\x03H\x07H" +
		"\u0360\nH\fH\x0EH\u0363\vH\x03H\x03H\x03H\x03I\x07I\u0369\nI\fI\x0EI\u036C" +
		"\vI\x03I\x03I\x05I\u0370\nI\x03I\x05I\u0373\nI\x03J\x03J\x03J\x03J\x03" +
		"J\x05J\u037A\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u0383\nJ\x03J" +
		"\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x06J\u0398\nJ\rJ\x0EJ\u0399\x03J\x05J\u039D\nJ\x03" +
		"J\x05J\u03A0\nJ\x03J\x03J\x03J\x03J\x07J\u03A6\nJ\fJ\x0EJ\u03A9\vJ\x03" +
		"J\x05J\u03AC\nJ\x03J\x03J\x03J\x03J\x07J\u03B2\nJ\fJ\x0EJ\u03B5\vJ\x03" +
		"J\x07J\u03B8\nJ\fJ\x0EJ\u03BB\vJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x05J\u03C5\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u03CE\nJ\x03J" +
		"\x03J\x03J\x05J\u03D3\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J" +
		"\u03DD\nJ\x03K\x03K\x03K\x07K\u03E2\nK\fK\x0EK\u03E5\vK\x03K\x03K\x03" +
		"K\x03K\x03K\x03L\x03L\x03L\x07L\u03EF\nL\fL\x0EL\u03F2\vL\x03M\x03M\x03" +
		"M\x03N\x03N\x03N\x05N\u03FA\nN\x03N\x03N\x03O\x03O\x03O\x07O\u0401\nO" +
		"\fO\x0EO\u0404\vO\x03P\x07P\u0407\nP\fP\x0EP\u040A\vP\x03P\x03P\x03P\x03" +
		"P\x03P\x03Q\x06Q\u0412\nQ\rQ\x0EQ\u0413\x03Q\x06Q\u0417\nQ\rQ\x0EQ\u0418" +
		"\x03R\x03R\x03R\x05R\u041E\nR\x03R\x03R\x03R\x05R\u0423\nR\x03S\x03S\x05" +
		"S\u0427\nS\x03S\x03S\x05S\u042B\nS\x03S\x03S\x05S\u042F\nS\x05S\u0431" +
		"\nS\x03T\x03T\x05T\u0435\nT\x03U\x07U\u0438\nU\fU\x0EU\u043B\vU\x03U\x03" +
		"U\x03U\x03U\x03U\x03V\x03V\x03V\x03V\x03W\x03W\x03W\x07W\u0449\nW\fW\x0E" +
		"W\u044C\vW\x03X\x03X\x03X\x05X\u0451\nX\x03X\x03X\x03X\x03X\x05X\u0457" +
		"\nX\x03X\x03X\x03X\x03X\x05X\u045D\nX\x03X\x05X\u0460\nX\x03Y\x03Y\x03" +
		"Y\x03Y\x03Y\x03Y\x03Y\x07Y\u0469\nY\fY\x0EY\u046C\vY\x03Y\x03Y\x03Y\x07" +
		"Y\u0471\nY\fY\x0EY\u0474\vY\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03" +
		"Y\x03Y\x03Y\x05Y\u0481\nY\x03Y\x03Y\x05Y\u0485\nY\x03Y\x03Y\x03Y\x05Y" +
		"\u048A\nY\x03Y\x03Y\x05Y\u048E\nY\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03" +
		"Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u049E\nY\x03Y\x03Y\x03Y\x03Y\x03" +
		"Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03" +
		"Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03" +
		"Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u04C6\nY\x03Y\x03Y\x03Y\x03Y\x05Y\u04CC" +
		"\nY\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05" +
		"Y\u04DB\nY\x03Y\x07Y\u04DE\nY\fY\x0EY\u04E1\vY\x03Z\x03Z\x03Z\x03Z\x03" +
		"[\x03[\x03[\x05[\u04EA\n[\x03[\x03[\x03[\x03[\x03[\x07[\u04F1\n[\f[\x0E" +
		"[\u04F4\v[\x03[\x05[\u04F7\n[\x03\\\x03\\\x05\\\u04FB\n\\\x03]\x03]\x03" +
		"]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x05" +
		"]\u050D\n]\x05]\u050F\n]\x03^\x03^\x03^\x05^\u0514\n^\x03^\x07^\u0517" +
		"\n^\f^\x0E^\u051A\v^\x03^\x03^\x05^\u051E\n^\x03_\x03_\x03_\x03_\x03_" +
		"\x03_\x03_\x05_\u0527\n_\x05_\u0529\n_\x03`\x03`\x05`\u052D\n`\x03`\x03" +
		"`\x03`\x05`\u0532\n`\x07`\u0534\n`\f`\x0E`\u0537\v`\x03`\x05`\u053A\n" +
		"`\x03a\x03a\x05a\u053E\na\x03a\x03a\x03b\x03b\x03b\x03b\x07b\u0546\nb" +
		"\fb\x0Eb\u0549\vb\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x07b\u0552\nb\fb" +
		"\x0Eb\u0555\vb\x03b\x03b\x07b\u0559\nb\fb\x0Eb\u055C\vb\x05b\u055E\nb" +
		"\x03c\x03c\x05c\u0562\nc\x03d\x03d\x03d\x03e\x03e\x03e\x05e\u056A\ne\x03" +
		"f\x03f\x03f\x05f\u056F\nf\x03g\x03g\x03g\x03g\x03h\x03h\x03h\x07h\u0578" +
		"\nh\fh\x0Eh\u057B\vh\x03i\x07i\u057E\ni\fi\x0Ei\u0581\vi\x03i\x03i\x05" +
		"i\u0585\ni\x03i\x07i\u0588\ni\fi\x0Ei\u058B\vi\x03i\x03i\x07i\u058F\n" +
		"i\fi\x0Ei\u0592\vi\x03j\x03j\x03k\x03k\x03k\x03k\x07k\u059A\nk\fk\x0E" +
		"k\u059D\vk\x03k\x03k\x03l\x03l\x03l\x03l\x05l\u05A5\nl\x05l\u05A7\nl\x03" +
		"m\x03m\x03m\x03m\x05m\u05AD\nm\x03n\x03n\x05n\u05B1\nn\x03n\x03n\x03n" +
		"\x02\x02\x03\xB0o\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
		"\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
		"x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
		"\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
		"\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0" +
		"\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2" +
		"\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4" +
		"\x02\xD6\x02\xD8\x02\xDA\x02\x02\x0E\x04\x02\x13\x13**\x03\x0258\x03\x02" +
		"9:\x03\x02UX\x03\x02KL\x04\x02YZ^^\x03\x02WX\x04\x02IJPQ\x04\x02OORR\x04" +
		"\x02HH_i\x03\x02UV\n\x02\x05\x05\x07\x07\n\n\x10\x10\x16\x16\x1D\x1D\x1F" +
		"\x1F\'\'\x02\u0653\x02\xDD\x03\x02\x02\x02\x04\xF0\x03\x02\x02\x02\x06" +
		"\xF7\x03\x02\x02\x02\b\u0112\x03\x02\x02\x02\n\u0119\x03\x02\x02\x02\f" +
		"\u0123\x03\x02\x02\x02\x0E\u0127\x03\x02\x02\x02\x10\u0129\x03\x02\x02" +
		"\x02\x12\u0136\x03\x02\x02\x02\x14\u0139\x03\x02\x02\x02\x16\u013C\x03" +
		"\x02\x02\x02\x18\u014A\x03\x02\x02\x02\x1A\u0158\x03\x02\x02\x02\x1C\u0160" +
		"\x03\x02\x02\x02\x1E\u0172\x03\x02\x02\x02 \u017D\x03\x02\x02\x02\"\u0187" +
		"\x03\x02\x02\x02$\u018E\x03\x02\x02\x02&\u0199\x03\x02\x02\x02(\u019B" +
		"\x03\x02\x02\x02*\u01A4\x03\x02\x02\x02,\u01BC\x03\x02\x02\x02.\u01C7" +
		"\x03\x02\x02\x020\u01C9\x03\x02\x02\x022\u01D8\x03\x02\x02\x024\u01DD" +
		"\x03\x02\x02\x026\u01E1\x03\x02\x02\x028\u01E3\x03\x02\x02\x02:\u01E6" +
		"\x03\x02\x02\x02<\u01E9\x03\x02\x02\x02>\u01F1\x03\x02\x02\x02@\u01FD" +
		"\x03\x02\x02\x02B\u0206\x03\x02\x02\x02D\u0208\x03\x02\x02\x02F\u0213" +
		"\x03\x02\x02\x02H\u0221\x03\x02\x02\x02J\u0245\x03\x02\x02\x02L\u0247" +
		"\x03\x02\x02\x02N\u024A\x03\x02\x02\x02P\u0252\x03\x02\x02\x02R\u0257" +
		"\x03\x02\x02\x02T\u0261\x03\x02\x02\x02V\u0263\x03\x02\x02\x02X\u0273" +
		"\x03\x02\x02\x02Z\u028D\x03\x02\x02\x02\\\u028F\x03\x02\x02\x02^\u0297" +
		"\x03\x02\x02\x02`\u02AA\x03\x02\x02\x02b\u02AF\x03\x02\x02\x02d\u02B8" +
		"\x03\x02\x02\x02f\u02C5\x03\x02\x02\x02h\u02D3\x03\x02\x02\x02j\u02D5" +
		"\x03\x02\x02\x02l\u02D7\x03\x02\x02\x02n\u02DD\x03\x02\x02\x02p\u02E6" +
		"\x03\x02\x02\x02r\u02F0\x03\x02\x02\x02t\u02F8\x03\x02\x02\x02v\u02FF" +
		"\x03\x02\x02\x02x\u0301\x03\x02\x02\x02z\u0311\x03\x02\x02\x02|\u0316" +
		"\x03\x02\x02\x02~\u0327\x03\x02\x02\x02\x80\u033D\x03\x02\x02\x02\x82" +
		"\u0341\x03\x02\x02\x02\x84\u0343\x03\x02\x02\x02\x86\u0349\x03\x02\x02" +
		"\x02\x88\u034B\x03\x02\x02\x02\x8A\u034E\x03\x02\x02\x02\x8C\u035C\x03" +
		"\x02\x02\x02\x8E\u0361\x03\x02\x02\x02\x90\u0372\x03\x02\x02\x02\x92\u03DC" +
		"\x03\x02\x02\x02\x94\u03DE\x03\x02\x02\x02\x96\u03EB\x03\x02\x02\x02\x98" +
		"\u03F3\x03\x02\x02\x02\x9A\u03F6\x03\x02\x02\x02\x9C\u03FD\x03\x02\x02" +
		"\x02\x9E\u0408\x03\x02\x02\x02\xA0\u0411\x03\x02\x02\x02\xA2\u0422\x03" +
		"\x02\x02\x02\xA4\u0430\x03\x02\x02\x02\xA6\u0434\x03\x02\x02\x02\xA8\u0439" +
		"\x03\x02\x02\x02\xAA\u0441\x03\x02\x02\x02\xAC\u0445\x03\x02\x02\x02\xAE" +
		"\u045F\x03\x02\x02\x02\xB0\u048D\x03\x02\x02\x02\xB2\u04E2\x03\x02\x02" +
		"\x02\xB4\u04F6\x03\x02\x02\x02\xB6\u04FA\x03\x02\x02\x02\xB8\u050E\x03" +
		"\x02\x02\x02\xBA\u0513\x03\x02\x02\x02\xBC\u0528\x03\x02\x02\x02\xBE\u0539" +
		"\x03\x02\x02\x02\xC0\u053B\x03\x02\x02\x02\xC2\u0541\x03\x02\x02\x02\xC4" +
		"\u055F\x03\x02\x02\x02\xC6\u0563\x03\x02\x02\x02\xC8\u0569\x03\x02\x02" +
		"\x02\xCA\u056E\x03\x02\x02\x02\xCC\u0570\x03\x02\x02\x02\xCE\u0574\x03" +
		"\x02\x02\x02\xD0\u057F\x03\x02\x02\x02\xD2\u0593\x03\x02\x02\x02\xD4\u0595" +
		"\x03\x02\x02\x02\xD6\u05A6\x03\x02\x02\x02\xD8\u05AC\x03\x02\x02\x02\xDA" +
		"\u05AE\x03\x02\x02\x02\xDC\xDE\x05\x04\x03\x02\xDD\xDC\x03\x02\x02\x02" +
		"\xDD\xDE\x03\x02\x02\x02\xDE\xE2\x03\x02\x02\x02\xDF\xE1\x05\x06\x04\x02" +
		"\xE0\xDF\x03\x02\x02\x02\xE1\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02" +
		"\xE2\xE3\x03\x02\x02\x02\xE3\xE8\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02" +
		"\xE5\xE7\x05\b\x05\x02\xE6\xE5\x03\x02\x02\x02\xE7\xEA\x03\x02\x02\x02" +
		"\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEB\x03\x02\x02\x02" +
		"\xEA\xE8\x03\x02\x02\x02\xEB\xEC\x07\x02\x02\x03\xEC\x03\x03\x02\x02\x02" +
		"\xED\xEF\x05p9\x02\xEE\xED\x03\x02\x02\x02\xEF\xF2\x03\x02\x02\x02\xF0" +
		"\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF3\x03\x02\x02\x02\xF2" +
		"\xF0\x03\x02\x02\x02\xF3\xF4\x07\"\x02\x02\xF4\xF5\x05f4\x02\xF5\xF6\x07" +
		"E\x02\x02\xF6\x05\x03\x02\x02\x02\xF7\xF9\x07\x1B\x02\x02\xF8\xFA\x07" +
		"(\x02\x02\xF9\xF8\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFB\x03" +
		"\x02\x02\x02\xFB\xFE\x05f4\x02\xFC\xFD\x07G\x02\x02\xFD\xFF\x07Y\x02\x02" +
		"\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02" +
		"\x02\u0100\u0101\x07E\x02\x02\u0101\x07\x03\x02\x02\x02\u0102\u0104\x05" +
		"&\x14\x02\u0103\u0102\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104" +
		"\u0108\x03\x02\x02\x02\u0105\u0107\x05\f\x07\x02\u0106\u0105\x03\x02\x02" +
		"\x02\u0107\u010A\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109" +
		"\x03\x02\x02\x02\u0109\u010F\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02" +
		"\u010B\u0110\x05\x10\t\x02\u010C\u0110\x05\x1C\x0F\x02\u010D\u0110\x05" +
		"$\x13\x02\u010E\u0110\x05z>\x02\u010F\u010B\x03\x02\x02\x02\u010F\u010C" +
		"\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u010F\u010E\x03\x02\x02\x02" +
		"\u0110\u0113\x03\x02\x02\x02\u0111\u0113\x07E\x02\x02\u0112\u0103\x03" +
		"\x02\x02\x02\u0112\u0111\x03\x02\x02\x02\u0113\t\x03\x02\x02\x02\u0114" +
		"\u011A\x05\f\x07\x02\u0115\u011A\x07 \x02\x02\u0116\u011A\x07,\x02\x02" +
		"\u0117\u011A\x070\x02\x02\u0118\u011A\x073\x02\x02\u0119\u0114\x03\x02" +
		"\x02\x02\u0119\u0115\x03\x02\x02\x02\u0119\u0116\x03\x02\x02\x02\u0119" +
		"\u0117\x03\x02\x02\x02\u0119\u0118\x03\x02\x02\x02\u011A\v\x03\x02\x02" +
		"\x02\u011B\u0124\x05p9\x02\u011C\u0124\x07%\x02\x02\u011D\u0124\x07$\x02" +
		"\x02\u011E\u0124\x07#\x02\x02\u011F\u0124\x07(\x02\x02\u0120\u0124\x07" +
		"\x03\x02\x02\u0121\u0124\x07\x14\x02\x02\u0122\u0124\x07)\x02\x02\u0123" +
		"\u011B\x03\x02\x02\x02\u0123\u011C\x03\x02\x02\x02\u0123\u011D\x03\x02" +
		"\x02\x02\u0123\u011E\x03\x02\x02\x02\u0123\u011F\x03\x02\x02\x02\u0123" +
		"\u0120\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0122\x03\x02" +
		"\x02\x02\u0124\r\x03\x02\x02\x02\u0125\u0128\x07\x14\x02\x02\u0126\u0128" +
		"\x05p9\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0126\x03\x02\x02\x02\u0128" +
		"\x0F\x03\x02\x02\x02\u0129\u012A\x07\v\x02\x02\u012A\u012C\x07q\x02\x02" +
		"\u012B\u012D\x05\x16\f\x02\u012C\u012B\x03\x02\x02\x02\u012C\u012D\x03" +
		"\x02\x02\x02\u012D\u012F\x03\x02\x02\x02\u012E\u0130\x05\x12\n\x02\u012F" +
		"\u012E\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0132\x03\x02" +
		"\x02\x02\u0131\u0133\x05\x14\v\x02\u0132\u0131\x03\x02\x02\x02\u0132\u0133" +
		"\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x05(\x15\x02" +
		"\u0135\x11\x03\x02\x02\x02\u0136\u0137\x07\x13\x02\x02\u0137\u0138\x05" +
		"\xD0i\x02\u0138\x13\x03\x02\x02\x02\u0139\u013A\x07\x1A\x02\x02\u013A" +
		"\u013B\x05\xCEh\x02\u013B\x15\x03\x02\x02\x02\u013C\u013D\x07J\x02\x02" +
		"\u013D\u0142\x05\x18\r\x02\u013E\u013F\x07F\x02\x02\u013F\u0141\x05\x18" +
		"\r\x02\u0140\u013E\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140" +
		"\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0145\x03\x02\x02\x02" +
		"\u0144\u0142\x03\x02\x02\x02\u0145\u0146\x07I\x02\x02\u0146\x17\x03\x02" +
		"\x02\x02\u0147\u0149\x05p9\x02\u0148\u0147\x03\x02\x02\x02\u0149\u014C" +
		"\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02" +
		"\u014B\u014D\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014D\u0156\x07" +
		"q\x02\x02\u014E\u0152\x07\x13\x02\x02\u014F\u0151\x05p9\x02\u0150";
	private static readonly _serializedATNSegment1: string =
		"\u014F\x03\x02\x02\x02\u0151\u0154\x03\x02\x02\x02\u0152\u0150\x03\x02" +
		"\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0155\x03\x02\x02\x02\u0154" +
		"\u0152\x03\x02\x02\x02\u0155\u0157\x05\x1A\x0E\x02\u0156\u014E\x03\x02" +
		"\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\x19\x03\x02\x02\x02\u0158\u015D" +
		"\x05\xD0i\x02\u0159\u015A\x07[\x02\x02\u015A\u015C\x05\xD0i\x02\u015B" +
		"\u0159\x03\x02\x02\x02\u015C\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02" +
		"\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\x1B\x03\x02\x02\x02\u015F\u015D" +
		"\x03\x02\x02\x02\u0160\u0161\x07\x12\x02\x02\u0161\u0164\x07q\x02\x02" +
		"\u0162\u0163\x07\x1A\x02\x02\u0163\u0165\x05\xCEh\x02\u0164\u0162\x03" +
		"\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166" +
		"\u0168\x07A\x02\x02\u0167\u0169\x05\x1E\x10\x02\u0168\u0167\x03\x02\x02" +
		"\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016B\x03\x02\x02\x02\u016A\u016C" +
		"\x07F\x02\x02\u016B\u016A\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02" +
		"\u016C\u016E\x03\x02\x02\x02\u016D\u016F\x05\"\x12\x02\u016E\u016D\x03" +
		"\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170" +
		"\u0171\x07B\x02\x02\u0171\x1D\x03\x02\x02\x02\u0172\u0177\x05 \x11\x02" +
		"\u0173\u0174\x07F\x02\x02\u0174\u0176\x05 \x11\x02\u0175\u0173\x03\x02" +
		"\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177" +
		"\u0178\x03\x02\x02\x02\u0178\x1F\x03\x02\x02\x02\u0179\u0177\x03\x02\x02" +
		"\x02\u017A\u017C\x05p9\x02\u017B\u017A\x03\x02\x02\x02\u017C\u017F\x03" +
		"\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E" +
		"\u0180\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u0180\u0182\x07q\x02" +
		"\x02\u0181\u0183\x05\xDAn\x02\u0182\u0181\x03\x02\x02\x02\u0182\u0183" +
		"\x03\x02\x02\x02\u0183\u0185\x03\x02\x02\x02\u0184\u0186\x05(\x15\x02" +
		"\u0185\u0184\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186!\x03\x02" +
		"\x02\x02\u0187\u018B\x07E\x02\x02\u0188\u018A\x05,\x17\x02\u0189\u0188" +
		"\x03\x02\x02\x02\u018A\u018D\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02" +
		"\u018B\u018C\x03\x02\x02\x02\u018C#\x03\x02\x02\x02\u018D\u018B\x03\x02" +
		"\x02\x02\u018E\u018F\x07\x1E\x02\x02\u018F\u0191\x07q\x02\x02\u0190\u0192" +
		"\x05\x16\f\x02\u0191\u0190\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02" +
		"\u0192\u0195\x03\x02\x02\x02\u0193\u0194\x07\x13\x02\x02\u0194\u0196\x05" +
		"\xCEh\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196" +
		"\u0197\x03\x02\x02\x02\u0197\u0198\x05*\x16\x02\u0198%\x03\x02\x02\x02" +
		"\u0199\u019A\x07o\x02\x02\u019A\'\x03\x02\x02\x02\u019B\u019F\x07A\x02" +
		"\x02\u019C\u019E\x05,\x17\x02\u019D\u019C\x03\x02\x02\x02\u019E\u01A1" +
		"\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02" +
		"\u01A0\u01A2\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A2\u01A3\x07" +
		"B\x02\x02\u01A3)\x03\x02\x02\x02\u01A4\u01A8\x07A\x02\x02\u01A5\u01A7" +
		"\x05@!\x02\u01A6\u01A5\x03\x02\x02\x02\u01A7\u01AA\x03\x02\x02\x02\u01A8" +
		"\u01A6\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02" +
		"\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AB\u01AC\x07B\x02\x02\u01AC+\x03" +
		"\x02\x02\x02\u01AD\u01BD\x07E\x02\x02\u01AE\u01B0\x07(\x02\x02\u01AF\u01AE" +
		"\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02" +
		"\u01B1\u01BD\x05\x8AF\x02\u01B2\u01B4\x05&\x14\x02\u01B3\u01B2\x03\x02" +
		"\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B8\x03\x02\x02\x02\u01B5" +
		"\u01B7\x05\n\x06\x02\u01B6\u01B5\x03\x02\x02\x02\u01B7\u01BA\x03\x02\x02" +
		"\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BB" +
		"\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BB\u01BD\x05.\x18\x02" +
		"\u01BC\u01AD\x03\x02\x02\x02\u01BC\u01AF\x03\x02\x02\x02\u01BC\u01B3\x03" +
		"\x02\x02\x02\u01BD-\x03\x02\x02\x02\u01BE\u01C8\x050\x19\x02\u01BF\u01C8" +
		"\x058\x1D\x02\u01C0\u01C8\x05> \x02\u01C1\u01C8\x05<\x1F\x02\u01C2\u01C8" +
		"\x05:\x1E\x02\u01C3\u01C8\x05$\x13\x02\u01C4\u01C8\x05z>\x02\u01C5\u01C8" +
		"\x05\x10\t\x02\u01C6\u01C8\x05\x1C\x0F\x02\u01C7\u01BE\x03\x02\x02\x02" +
		"\u01C7\u01BF\x03\x02\x02\x02\u01C7\u01C0\x03\x02\x02\x02\u01C7\u01C1\x03" +
		"\x02\x02\x02\u01C7\u01C2\x03\x02\x02\x02\u01C7\u01C3\x03\x02\x02\x02\u01C7" +
		"\u01C4\x03\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C6\x03\x02" +
		"\x02\x02\u01C8/\x03\x02\x02\x02\u01C9\u01CA\x056\x1C\x02\u01CA\u01CB\x07" +
		"q\x02\x02\u01CB\u01D0\x05^0\x02\u01CC\u01CD\x07C\x02\x02\u01CD\u01CF\x07" +
		"D\x02\x02\u01CE\u01CC\x03\x02\x02\x02\u01CF\u01D2\x03\x02\x02\x02\u01D0" +
		"\u01CE\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D4\x03\x02" +
		"\x02\x02\u01D2\u01D0\x03\x02\x02\x02\u01D3\u01D5\x052\x1A\x02\u01D4\u01D3" +
		"\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02" +
		"\u01D6\u01D7\x054\x1B\x02\u01D71\x03\x02\x02\x02\u01D8\u01D9\x07/\x02" +
		"\x02\u01D9\u01DA\x05\\/\x02\u01DA3\x03\x02\x02\x02\u01DB\u01DE\x05\x8A" +
		"F\x02\u01DC\u01DE\x07E\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DC" +
		"\x03\x02\x02\x02\u01DE5\x03\x02\x02\x02\u01DF\u01E2\x05\xD0i\x02\u01E0" +
		"\u01E2\x072\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E0\x03\x02\x02" +
		"\x02\u01E27\x03\x02\x02\x02\u01E3\u01E4\x05\x16\f\x02\u01E4\u01E5\x05" +
		"0\x19\x02\u01E59\x03\x02\x02\x02\u01E6\u01E7\x05\x16\f\x02\u01E7\u01E8" +
		"\x05<\x1F\x02\u01E8;\x03\x02\x02\x02\u01E9\u01EA\x07q\x02\x02\u01EA\u01ED" +
		"\x05^0\x02\u01EB\u01EC\x07/\x02\x02\u01EC\u01EE\x05\\/\x02\u01ED\u01EB" +
		"\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02" +
		"\u01EF\u01F0\x05\x8AF\x02\u01F0=\x03\x02\x02\x02\u01F1\u01F2\x05\xD0i" +
		"\x02\u01F2\u01F3\x05N(\x02\u01F3\u01F4\x07E\x02\x02\u01F4?\x03\x02\x02" +
		"\x02\u01F5\u01F7\x05\n\x06\x02\u01F6\u01F5\x03\x02\x02\x02\u01F7\u01FA" +
		"\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02" +
		"\u01F9\u01FB\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FB\u01FE\x05" +
		"B\"\x02\u01FC\u01FE\x07E\x02\x02\u01FD\u01F8\x03\x02\x02\x02\u01FD\u01FC" +
		"\x03\x02\x02\x02\u01FEA\x03\x02\x02\x02\u01FF\u0207\x05D#\x02\u0200\u0207" +
		"\x05H%\x02\u0201\u0207\x05L\'\x02\u0202\u0207\x05$\x13\x02\u0203\u0207" +
		"\x05z>\x02\u0204\u0207\x05\x10\t\x02\u0205\u0207\x05\x1C\x0F\x02\u0206" +
		"\u01FF\x03\x02\x02\x02\u0206\u0200\x03\x02\x02\x02\u0206\u0201\x03\x02" +
		"\x02\x02\u0206\u0202\x03\x02\x02\x02\u0206\u0203\x03\x02\x02\x02\u0206" +
		"\u0204\x03\x02\x02\x02\u0206\u0205\x03\x02\x02\x02\u0207C\x03\x02\x02" +
		"\x02\u0208\u0209\x05\xD0i\x02\u0209\u020E\x05F$\x02\u020A\u020B\x07F\x02" +
		"\x02\u020B\u020D\x05F$\x02\u020C\u020A\x03\x02\x02\x02\u020D\u0210\x03" +
		"\x02\x02\x02\u020E\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F" +
		"\u0211\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0211\u0212\x07E\x02" +
		"\x02\u0212E\x03\x02\x02\x02\u0213\u0218\x07q\x02\x02\u0214\u0215\x07C" +
		"\x02\x02\u0215\u0217\x07D\x02\x02\u0216\u0214\x03\x02\x02\x02\u0217\u021A" +
		"\x03\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02" +
		"\u0219\u021B\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021B\u021C\x07" +
		"H\x02\x02\u021C\u021D\x05T+\x02\u021DG\x03\x02\x02\x02\u021E\u0220\x05" +
		"J&\x02\u021F\u021E\x03\x02\x02\x02\u0220\u0223\x03\x02\x02\x02\u0221\u021F" +
		"\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u022E\x03\x02\x02\x02" +
		"\u0223\u0221\x03\x02\x02\x02\u0224\u022F\x056\x1C\x02\u0225\u0229\x05" +
		"\x16\f\x02\u0226\u0228\x05p9\x02\u0227\u0226\x03\x02\x02\x02\u0228\u022B" +
		"\x03\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02" +
		"\u022A\u022C\x03\x02\x02\x02\u022B\u0229\x03\x02\x02\x02\u022C\u022D\x05" +
		"6\x1C\x02\u022D\u022F\x03\x02\x02\x02\u022E\u0224\x03\x02\x02\x02\u022E" +
		"\u0225\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230\u0231\x07q\x02" +
		"\x02\u0231\u0236\x05^0\x02\u0232\u0233\x07C\x02\x02\u0233\u0235\x07D\x02" +
		"\x02\u0234\u0232\x03\x02\x02\x02\u0235\u0238\x03\x02\x02\x02\u0236\u0234" +
		"\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u023B\x03\x02\x02\x02" +
		"\u0238\u0236\x03\x02\x02\x02\u0239\u023A\x07/\x02\x02\u023A\u023C\x05" +
		"\\/\x02\u023B\u0239\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C" +
		"\u023D\x03\x02\x02\x02\u023D\u023E\x054\x1B\x02\u023EI\x03\x02\x02\x02" +
		"\u023F\u0246\x05p9\x02\u0240\u0246\x07%\x02\x02\u0241\u0246\x07\x03\x02" +
		"\x02\u0242\u0246\x07\x0E\x02\x02\u0243\u0246\x07(\x02\x02\u0244\u0246" +
		"\x07)\x02\x02\u0245\u023F\x03\x02\x02\x02\u0245\u0240\x03\x02\x02\x02" +
		"\u0245\u0241\x03\x02\x02\x02\u0245\u0242\x03\x02\x02\x02\u0245\u0243\x03" +
		"\x02\x02\x02\u0245\u0244\x03\x02\x02\x02\u0246K\x03\x02\x02\x02\u0247" +
		"\u0248\x05\x16\f\x02\u0248\u0249\x05H%\x02\u0249M\x03\x02\x02\x02\u024A" +
		"\u024F\x05P)\x02\u024B\u024C\x07F\x02\x02\u024C\u024E\x05P)\x02\u024D" +
		"\u024B\x03\x02\x02\x02\u024E\u0251\x03\x02\x02\x02\u024F\u024D\x03\x02" +
		"\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250O\x03\x02\x02\x02\u0251\u024F" +
		"\x03\x02\x02\x02\u0252\u0255\x05R*\x02\u0253\u0254\x07H\x02\x02\u0254" +
		"\u0256\x05T+\x02\u0255\u0253\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02" +
		"\u0256Q\x03\x02\x02\x02\u0257\u025C\x07q\x02\x02\u0258\u0259\x07C\x02" +
		"\x02\u0259\u025B\x07D\x02\x02\u025A\u0258\x03\x02\x02\x02\u025B\u025E" +
		"\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02" +
		"\u025DS\x03\x02\x02\x02\u025E\u025C\x03\x02\x02\x02\u025F\u0262\x05V," +
		"\x02\u0260\u0262\x05\xB0Y\x02\u0261\u025F\x03\x02\x02\x02\u0261\u0260" +
		"\x03\x02\x02\x02\u0262U\x03\x02\x02\x02\u0263\u026F\x07A\x02\x02\u0264" +
		"\u0269\x05T+\x02\u0265\u0266\x07F\x02\x02\u0266\u0268\x05T+\x02\u0267" +
		"\u0265\x03\x02\x02\x02\u0268\u026B\x03\x02\x02\x02\u0269\u0267\x03\x02" +
		"\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026D\x03\x02\x02\x02\u026B" +
		"\u0269\x03\x02\x02\x02\u026C\u026E\x07F\x02\x02\u026D\u026C\x03\x02\x02" +
		"\x02\u026D\u026E\x03\x02\x02\x02\u026E\u0270\x03\x02\x02\x02\u026F\u0264" +
		"\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02" +
		"\u0271\u0272\x07B\x02\x02\u0272W\x03\x02\x02\x02\u0273\u0275\x07q\x02" +
		"\x02\u0274\u0276\x05\xD4k\x02\u0275\u0274\x03\x02\x02\x02\u0275\u0276" +
		"\x03\x02\x02\x02\u0276\u027E\x03\x02\x02\x02\u0277\u0278\x07G\x02\x02" +
		"\u0278\u027A\x07q\x02\x02\u0279\u027B\x05\xD4k\x02\u027A\u0279\x03\x02" +
		"\x02\x02\u027A\u027B\x03\x02\x02\x02\u027B\u027D\x03\x02\x02\x02\u027C" +
		"\u0277\x03\x02\x02\x02\u027D\u0280\x03\x02\x02\x02\u027E\u027C\x03\x02" +
		"\x02\x02\u027E\u027F\x03\x02\x02\x02\u027FY\x03\x02\x02\x02\u0280\u027E" +
		"\x03\x02\x02\x02\u0281\u028E\x05\xD0i\x02\u0282\u0284\x05p9\x02\u0283" +
		"\u0282\x03\x02\x02\x02\u0284\u0287\x03\x02\x02\x02\u0285\u0283\x03\x02" +
		"\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0288\x03\x02\x02\x02\u0287" +
		"\u0285\x03\x02\x02\x02\u0288\u028B\x07M\x02\x02\u0289\u028A\t\x02\x02" +
		"\x02\u028A\u028C\x05\xD0i\x02\u028B\u0289\x03\x02\x02\x02\u028B\u028C" +
		"\x03\x02\x02\x02\u028C\u028E\x03\x02\x02\x02\u028D\u0281\x03\x02\x02\x02" +
		"\u028D\u0285\x03\x02\x02\x02\u028E[\x03\x02\x02\x02\u028F\u0294\x05f4" +
		"\x02\u0290\u0291\x07F\x02\x02\u0291\u0293\x05f4\x02\u0292\u0290\x03\x02" +
		"\x02\x02\u0293\u0296\x03\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0294" +
		"\u0295\x03\x02\x02\x02\u0295]\x03\x02\x02\x02\u0296\u0294\x03\x02\x02" +
		"\x02\u0297\u0299\x07?\x02\x02\u0298\u029A\x05`1\x02\u0299\u0298\x03\x02" +
		"\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B" +
		"\u029C\x07@\x02\x02\u029C_\x03\x02\x02\x02\u029D\u02A2\x05b2\x02\u029E" +
		"\u029F\x07F\x02\x02\u029F\u02A1\x05b2\x02\u02A0\u029E\x03\x02\x02\x02" +
		"\u02A1\u02A4\x03\x02\x02\x02\u02A2\u02A0\x03\x02\x02\x02\u02A2\u02A3\x03" +
		"\x02\x02\x02\u02A3\u02A7\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A5" +
		"\u02A6\x07F\x02\x02\u02A6\u02A8\x05d3\x02\u02A7\u02A5\x03\x02\x02\x02" +
		"\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02AB\x03\x02\x02\x02\u02A9\u02AB\x05" +
		"d3\x02\u02AA\u029D\x03\x02\x02\x02\u02AA\u02A9\x03\x02\x02\x02\u02ABa" +
		"\x03\x02\x02\x02\u02AC\u02AE\x05\x0E\b\x02\u02AD\u02AC\x03\x02\x02\x02" +
		"\u02AE\u02B1\x03\x02\x02\x02\u02AF\u02AD\x03\x02\x02\x02\u02AF\u02B0\x03" +
		"\x02\x02\x02\u02B0\u02B2\x03\x02\x02\x02\u02B1\u02AF\x03\x02\x02\x02\u02B2" +
		"\u02B3\x05\xD0i\x02\u02B3\u02B4\x05R*\x02\u02B4c\x03\x02\x02\x02\u02B5" +
		"\u02B7\x05\x0E\b\x02\u02B6\u02B5\x03\x02\x02\x02\u02B7\u02BA\x03\x02\x02" +
		"\x02\u02B8\u02B6\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BB" +
		"\x03\x02\x02\x02\u02BA\u02B8\x03\x02\x02\x02\u02BB\u02BF\x05\xD0i\x02" +
		"\u02BC\u02BE\x05p9\x02\u02BD\u02BC\x03\x02\x02\x02\u02BE\u02C1\x03\x02" +
		"\x02\x02\u02BF\u02BD\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0" +
		"\u02C2\x03\x02\x02\x02\u02C1\u02BF\x03\x02\x02\x02\u02C2\u02C3\x07m\x02" +
		"\x02\u02C3\u02C4\x05R*\x02\u02C4e\x03\x02\x02\x02\u02C5\u02CA\x07q\x02" +
		"\x02\u02C6\u02C7\x07G\x02\x02\u02C7\u02C9\x07q\x02\x02\u02C8\u02C6\x03" +
		"\x02\x02\x02\u02C9\u02CC\x03\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA" +
		"\u02CB\x03\x02\x02\x02\u02CBg\x03\x02\x02\x02\u02CC\u02CA\x03\x02\x02" +
		"\x02\u02CD\u02D4\x05j6\x02\u02CE\u02D4\x05l7\x02\u02CF\u02D4\x07<\x02" +
		"\x02\u02D0\u02D4\x07=\x02\x02\u02D1\u02D4\x07;\x02\x02\u02D2\u02D4\x07" +
		">\x02\x02\u02D3\u02CD\x03\x02\x02\x02\u02D3\u02CE\x03\x02\x02\x02\u02D3" +
		"\u02CF\x03\x02\x02\x02\u02D3\u02D0\x03\x02\x02\x02\u02D3\u02D1\x03\x02" +
		"\x02\x02\u02D3\u02D2\x03\x02\x02\x02\u02D4i\x03\x02\x02\x02\u02D5\u02D6" +
		"\t\x03\x02\x02\u02D6k\x03\x02\x02\x02\u02D7\u02D8\t\x04\x02\x02\u02D8" +
		"m\x03\x02\x02\x02\u02D9\u02DA\x07q\x02\x02\u02DA\u02DC\x07G\x02\x02\u02DB" +
		"\u02D9\x03\x02\x02\x02\u02DC\u02DF\x03\x02\x02\x02\u02DD\u02DB\x03\x02" +
		"\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02E0\x03\x02\x02\x02\u02DF" +
		"\u02DD\x03\x02\x02\x02\u02E0\u02E1\x07l\x02\x02\u02E1\u02E2\x07q\x02\x02" +
		"\u02E2o\x03\x02\x02\x02\u02E3\u02E4\x07l\x02\x02\u02E4\u02E7\x05f4\x02" +
		"\u02E5\u02E7\x05n8\x02\u02E6\u02E3\x03\x02\x02\x02\u02E6\u02E5\x03\x02" +
		"\x02\x02\u02E7\u02EE\x03\x02\x02\x02\u02E8\u02EB\x07?\x02\x02\u02E9\u02EC" +
		"\x05r:\x02\u02EA\u02EC\x05v<\x02\u02EB\u02E9\x03\x02\x02\x02\u02EB\u02EA" +
		"\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02ED\x03\x02\x02\x02" +
		"\u02ED\u02EF\x07@\x02\x02\u02EE\u02E8\x03\x02\x02\x02\u02EE\u02EF\x03" +
		"\x02\x02\x02\u02EFq\x03\x02\x02\x02\u02F0\u02F5\x05t;\x02\u02F1\u02F2" +
		"\x07F\x02\x02\u02F2\u02F4\x05t;\x02\u02F3\u02F1\x03\x02\x02\x02\u02F4" +
		"\u02F7\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F5\u02F6\x03\x02" +
		"\x02\x02\u02F6s\x03\x02\x02\x02\u02F7\u02F5\x03\x02\x02\x02\u02F8\u02F9" +
		"\x07q\x02\x02\u02F9\u02FA\x07H\x02\x02\u02FA\u02FB\x05v<\x02\u02FBu\x03" +
		"\x02\x02\x02\u02FC\u0300\x05\xB0Y\x02\u02FD\u0300\x05p9\x02\u02FE\u0300" +
		"\x05x=\x02\u02FF\u02FC\x03\x02\x02\x02\u02FF\u02FD\x03\x02\x02\x02\u02FF" +
		"\u02FE\x03\x02\x02\x02\u0300w\x03\x02\x02\x02\u0301\u030A\x07A\x02\x02" +
		"\u0302\u0307\x05v<\x02\u0303\u0304\x07F\x02\x02\u0304\u0306\x05v<\x02" +
		"\u0305\u0303\x03\x02\x02\x02\u0306\u0309\x03\x02\x02\x02\u0307\u0305\x03" +
		"\x02\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308\u030B\x03\x02\x02\x02\u0309" +
		"\u0307\x03\x02\x02\x02\u030A\u0302\x03\x02\x02\x02\u030A\u030B\x03\x02" +
		"\x02\x02\u030B\u030D\x03\x02\x02\x02\u030C\u030E\x07F\x02\x02\u030D\u030C" +
		"\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02" +
		"\u030F\u0310\x07B\x02\x02\u0310y\x03\x02\x02\x02\u0311\u0312\x07l\x02" +
		"\x02\u0312\u0313\x07\x1E\x02\x02\u0313\u0314\x07q\x02\x02\u0314\u0315" +
		"\x05|?\x02\u0315{\x03\x02\x02\x02\u0316\u031A\x07A\x02\x02\u0317\u0319" +
		"\x05~@\x02\u0318\u0317\x03\x02\x02\x02\u0319\u031C\x03\x02\x02\x02\u031A" +
		"\u0318\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02\u031B\u031D\x03\x02" +
		"\x02\x02\u031C\u031A\x03\x02\x02\x02\u031D\u031E\x07B\x02\x02\u031E}\x03" +
		"\x02\x02\x02\u031F\u0321\x05\n\x06\x02\u0320\u031F\x03\x02\x02\x02\u0321" +
		"\u0324\x03\x02\x02\x02\u0322\u0320\x03\x02\x02\x02\u0322\u0323\x03\x02" +
		"\x02\x02\u0323\u0325\x03\x02\x02\x02\u0324\u0322\x03\x02\x02\x02\u0325" +
		"\u0328\x05\x80A\x02\u0326\u0328\x07E\x02\x02\u0327\u0322\x03\x02\x02\x02" +
		"\u0327\u0326\x03\x02\x02\x02\u0328\x7F\x03\x02\x02\x02\u0329\u032A\x05" +
		"\xD0i\x02\u032A\u032B\x05\x82B\x02\u032B\u032C\x07E\x02\x02\u032C\u033E" +
		"\x03\x02\x02\x02\u032D\u032F\x05\x10\t\x02\u032E\u0330\x07E\x02\x02\u032F" +
		"\u032E\x03\x02\x02\x02\u032F\u0330\x03\x02\x02\x02\u0330\u033E\x03\x02" +
		"\x02\x02\u0331\u0333\x05$\x13\x02\u0332\u0334\x07E\x02\x02\u0333\u0332" +
		"\x03\x02\x02\x02\u0333\u0334\x03\x02\x02\x02\u0334\u033E\x03\x02\x02\x02" +
		"\u0335\u0337\x05\x1C\x0F\x02\u0336\u0338\x07E\x02\x02\u0337\u0336\x03" +
		"\x02\x02\x02\u0337\u0338\x03\x02\x02\x02\u0338\u033E\x03\x02\x02\x02\u0339" +
		"\u033B\x05z>\x02\u033A\u033C\x07E\x02\x02\u033B\u033A\x03\x02\x02\x02" +
		"\u033B\u033C\x03\x02\x02\x02\u033C\u033E\x03\x02\x02\x02\u033D\u0329\x03" +
		"\x02\x02\x02\u033D\u032D\x03\x02\x02\x02\u033D\u0331\x03\x02\x02\x02\u033D" +
		"\u0335\x03\x02\x02\x02\u033D\u0339\x03\x02\x02\x02\u033E\x81\x03\x02\x02" +
		"\x02\u033F\u0342\x05\x84C\x02\u0340\u0342\x05\x86D\x02\u0341\u033F\x03" +
		"\x02\x02\x02\u0341\u0340\x03\x02\x02\x02\u0342\x83\x03\x02\x02\x02\u0343" +
		"\u0344\x07q\x02\x02\u0344\u0345\x07?\x02\x02\u0345\u0347\x07@\x02\x02" +
		"\u0346\u0348\x05\x88E\x02\u0347\u0346\x03\x02\x02\x02\u0347\u0348\x03" +
		"\x02\x02\x02\u0348\x85\x03\x02\x02\x02\u0349\u034A\x05N(\x02\u034A\x87" +
		"\x03\x02\x02\x02\u034B\u034C\x07\x0E\x02\x02\u034C\u034D\x05v<\x02\u034D" +
		"\x89\x03\x02\x02\x02\u034E\u0352\x07A\x02\x02\u034F\u0351\x05\x8CG\x02" +
		"\u0350\u034F\x03\x02\x02\x02\u0351\u0354\x03\x02\x02\x02\u0352\u0350\x03" +
		"\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353\u0355\x03\x02\x02\x02\u0354" +
		"\u0352\x03\x02\x02\x02\u0355\u0356\x07B\x02\x02\u0356\x8B\x03\x02\x02" +
		"\x02\u0357\u0358\x05\x8EH\x02\u0358\u0359\x07E\x02\x02\u0359\u035D\x03" +
		"\x02\x02\x02\u035A\u035D\x05\x92J\x02\u035B\u035D\x05\x90I\x02\u035C\u0357" +
		"\x03\x02\x02\x02\u035C\u035A\x03\x02\x02\x02\u035C\u035B\x03\x02\x02\x02" +
		"\u035D\x8D\x03\x02\x02\x02\u035E\u0360\x05\x0E\b\x02\u035F\u035E\x03\x02" +
		"\x02\x02\u0360\u0363\x03\x02\x02\x02\u0361\u035F\x03\x02\x02\x02\u0361" +
		"\u0362\x03\x02\x02\x02\u0362\u0364\x03\x02\x02\x02\u0363\u0361\x03\x02" +
		"\x02\x02\u0364\u0365\x05\xD0i\x02\u0365\u0366\x05N(\x02\u0366\x8F\x03" +
		"\x02\x02\x02\u0367\u0369\x05\f\x07\x02\u0368\u0367\x03\x02\x02\x02\u0369" +
		"\u036C\x03\x02\x02\x02\u036A\u0368\x03\x02\x02\x02\u036A\u036B\x03\x02" +
		"\x02\x02\u036B\u036F\x03\x02\x02\x02\u036C\u036A\x03\x02\x02\x02\u036D" +
		"\u0370\x05\x10\t\x02\u036E\u0370\x05$\x13\x02\u036F\u036D\x03\x02\x02" +
		"\x02\u036F\u036E\x03\x02\x02\x02\u0370\u0373\x03\x02\x02\x02\u0371\u0373" +
		"\x07E\x02\x02\u0372\u036A\x03\x02\x02\x02\u0372\u0371\x03\x02\x02\x02" +
		"\u0373\x91\x03\x02\x02\x02\u0374\u03DD\x05\x8AF\x02\u0375\u0376\x07\x04" +
		"\x02\x02\u0376\u0379\x05\xB0Y\x02\u0377\u0378\x07N\x02\x02\u0378\u037A" +
		"\x05\xB0Y\x02\u0379\u0377\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02" +
		"\u037A\u037B\x03\x02\x02\x02\u037B\u037C\x07E\x02\x02\u037C\u03DD\x03" +
		"\x02\x02\x02\u037D\u037E\x07\x18\x02\x02\u037E\u037F\x05\xAAV\x02\u037F" +
		"\u0382\x05\x92J\x02\u0380\u0381\x07\x11\x02\x02\u0381\u0383\x05\x92J\x02" +
		"\u0382\u0380\x03\x02\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383\u03DD\x03" +
		"\x02\x02\x02\u0384\u0385\x07\x17\x02\x02\u0385\u0386\x07?\x02\x02\u0386" +
		"\u0387\x05\xA4S\x02\u0387\u0388\x07@\x02\x02\u0388\u0389\x05\x92J\x02" +
		"\u0389\u03DD\x03\x02\x02\x02\u038A\u038B\x074\x02\x02\u038B\u038C\x05" +
		"\xAAV\x02\u038C\u038D\x05\x92J\x02\u038D\u03DD\x03\x02\x02\x02\u038E\u038F" +
		"\x07\x0F\x02\x02\u038F\u0390\x05\x92J\x02\u0390\u0391\x074\x02\x02\u0391" +
		"\u0392\x05\xAAV\x02\u0392\u0393\x07E\x02\x02\u0393\u03DD\x03\x02\x02\x02" +
		"\u0394\u0395\x071\x02\x02\u0395\u039F\x05\x8AF\x02\u0396\u0398\x05\x94" +
		"K\x02\u0397\u0396\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399\u0397" +
		"\x03\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A\u039C\x03\x02\x02\x02" +
		"\u039B\u039D\x05\x98M\x02\u039C\u039B\x03\x02\x02\x02\u039C\u039D\x03" +
		"\x02\x02\x02\u039D\u03A0\x03\x02\x02\x02\u039E\u03A0\x05\x98M\x02\u039F" +
		"\u0397\x03\x02\x02\x02\u039F\u039E\x03\x02\x02\x02\u03A0\u03DD\x03\x02" +
		"\x02\x02\u03A1\u03A2\x071\x02\x02\u03A2\u03A3\x05\x9AN\x02\u03A3\u03A7" +
		"\x05\x8AF\x02\u03A4\u03A6\x05\x94K\x02\u03A5\u03A4\x03\x02\x02\x02\u03A6" +
		"\u03A9\x03\x02\x02\x02\u03A7\u03A5\x03\x02\x02\x02\u03A7\u03A8\x03\x02" +
		"\x02\x02\u03A8\u03AB\x03\x02\x02\x02\u03A9\u03A7\x03\x02\x02\x02\u03AA" +
		"\u03AC\x05\x98M\x02\u03AB\u03AA\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02" +
		"\x02\u03AC\u03DD\x03\x02\x02\x02\u03AD\u03AE\x07+\x02\x02\u03AE\u03AF" +
		"\x05\xAAV\x02\u03AF\u03B3\x07A\x02\x02\u03B0\u03B2\x05\xA0Q\x02\u03B1" +
		"\u03B0\x03\x02\x02\x02\u03B2\u03B5\x03\x02\x02\x02\u03B3\u03B1\x03\x02" +
		"\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B9\x03\x02\x02\x02\u03B5" +
		"\u03B3\x03\x02\x02\x02\u03B6\u03B8\x05\xA2R\x02\u03B7\u03B6\x03\x02\x02" +
		"\x02\u03B8\u03BB\x03\x02\x02\x02\u03B9\u03B7\x03\x02\x02\x02\u03B9\u03BA" +
		"\x03\x02\x02\x02\u03BA\u03BC\x03\x02\x02\x02\u03BB\u03B9\x03\x02\x02\x02" +
		"\u03BC\u03BD\x07B\x02\x02\u03BD\u03DD\x03\x02\x02\x02\u03BE\u03BF\x07" +
		",\x02\x02\u03BF\u03C0\x05\xAAV\x02\u03C0\u03C1\x05\x8AF\x02\u03C1\u03DD" +
		"\x03\x02\x02\x02\u03C2\u03C4\x07&\x02\x02\u03C3\u03C5\x05\xB0Y\x02\u03C4" +
		"\u03C3\x03\x02\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5\u03C6\x03\x02" +
		"\x02\x02\u03C6\u03DD\x07E\x02\x02\u03C7\u03C8\x07.\x02\x02\u03C8\u03C9" +
		"\x05\xB0Y\x02\u03C9\u03CA\x07E\x02\x02\u03CA\u03DD\x03\x02\x02\x02\u03CB" +
		"\u03CD\x07\x06\x02\x02\u03CC\u03CE\x07q\x02\x02\u03CD\u03CC\x03\x02\x02" +
		"\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02\u03CF\u03DD" +
		"\x07E\x02\x02\u03D0\u03D2\x07\r\x02\x02\u03D1\u03D3\x07q\x02\x02\u03D2" +
		"\u03D1\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3\u03D4\x03\x02" +
		"\x02\x02\u03D4\u03DD\x07E\x02\x02\u03D5\u03DD\x07E\x02\x02\u03D6\u03D7" +
		"\x05\xB0Y\x02\u03D7\u03D8\x07E\x02\x02\u03D8\u03DD\x03\x02\x02\x02\u03D9" +
		"\u03DA\x07q\x02\x02\u03DA\u03DB\x07N\x02\x02\u03DB\u03DD\x05\x92J\x02" +
		"\u03DC\u0374\x03\x02\x02\x02\u03DC\u0375\x03\x02\x02\x02\u03DC\u037D\x03" +
		"\x02\x02\x02\u03DC\u0384\x03\x02\x02\x02\u03DC\u038A\x03\x02\x02\x02\u03DC" +
		"\u038E\x03\x02\x02\x02\u03DC\u0394\x03\x02\x02\x02\u03DC\u03A1\x03\x02" +
		"\x02\x02\u03DC\u03AD\x03\x02\x02\x02\u03DC\u03BE\x03\x02\x02\x02\u03DC" +
		"\u03C2\x03\x02\x02\x02\u03DC\u03C7\x03\x02\x02\x02\u03DC\u03CB\x03\x02" +
		"\x02\x02\u03DC\u03D0\x03\x02\x02\x02\u03DC\u03D5\x03\x02\x02\x02\u03DC" +
		"\u03D6\x03\x02\x02\x02\u03DC\u03D9\x03\x02\x02\x02\u03DD\x93\x03\x02\x02" +
		"\x02\u03DE\u03DF\x07\t\x02\x02\u03DF\u03E3\x07?\x02\x02\u03E0\u03E2\x05" +
		"\x0E\b\x02\u03E1\u03E0\x03\x02\x02\x02\u03E2\u03E5\x03\x02\x02\x02\u03E3" +
		"\u03E1\x03\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E6\x03\x02" +
		"\x02\x02\u03E5\u03E3\x03\x02\x02\x02\u03E6\u03E7\x05\x96L\x02\u03E7\u03E8" +
		"\x07q\x02\x02\u03E8\u03E9\x07@\x02\x02\u03E9\u03EA\x05\x8AF\x02\u03EA" +
		"\x95\x03\x02\x02\x02\u03EB\u03F0\x05f4\x02\u03EC\u03ED\x07\\\x02\x02\u03ED" +
		"\u03EF\x05f4\x02\u03EE\u03EC\x03\x02\x02\x02\u03EF\u03F2\x03\x02\x02\x02" +
		"\u03F0\u03EE\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\x97\x03" +
		"\x02\x02\x02\u03F2\u03F0\x03\x02\x02\x02\u03F3\u03F4\x07\x15\x02\x02\u03F4" +
		"\u03F5\x05\x8AF\x02\u03F5\x99\x03\x02\x02\x02\u03F6\u03F7\x07?\x02\x02" +
		"\u03F7\u03F9\x05\x9CO\x02\u03F8\u03FA\x07E\x02\x02\u03F9\u03F8\x03\x02" +
		"\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB" +
		"\u03FC\x07@\x02\x02\u03FC\x9B\x03\x02\x02\x02\u03FD\u0402\x05\x9EP\x02" +
		"\u03FE\u03FF\x07E\x02\x02\u03FF\u0401\x05\x9EP\x02\u0400\u03FE\x03\x02" +
		"\x02\x02\u0401\u0404\x03\x02\x02\x02\u0402\u0400\x03";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\x02\u0402\u0403\x03\x02\x02\x02\u0403\x9D\x03\x02\x02\x02\u0404" +
		"\u0402\x03\x02\x02\x02\u0405\u0407\x05\x0E\b\x02\u0406\u0405\x03\x02\x02" +
		"\x02\u0407\u040A\x03\x02\x02\x02\u0408\u0406\x03\x02\x02\x02\u0408\u0409" +
		"\x03\x02\x02\x02\u0409\u040B\x03\x02\x02\x02\u040A\u0408\x03\x02\x02\x02" +
		"\u040B\u040C\x05X-\x02\u040C\u040D\x05R*\x02\u040D\u040E\x07H\x02\x02" +
		"\u040E\u040F\x05\xB0Y\x02\u040F\x9F\x03\x02\x02\x02\u0410\u0412\x05\xA2" +
		"R\x02\u0411\u0410\x03\x02\x02\x02\u0412\u0413\x03\x02\x02\x02\u0413\u0411" +
		"\x03\x02\x02\x02\u0413\u0414\x03\x02\x02\x02\u0414\u0416\x03\x02\x02\x02" +
		"\u0415\u0417\x05\x8CG\x02\u0416\u0415\x03\x02\x02\x02\u0417\u0418\x03" +
		"\x02\x02\x02\u0418\u0416\x03\x02\x02\x02\u0418\u0419\x03\x02\x02\x02\u0419" +
		"\xA1\x03\x02\x02\x02\u041A\u041D\x07\b\x02\x02\u041B\u041E\x05\xB0Y\x02" +
		"\u041C\u041E\x07q\x02\x02\u041D\u041B\x03\x02\x02\x02\u041D\u041C\x03" +
		"\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F\u0423\x07N\x02\x02\u0420" +
		"\u0421\x07\x0E\x02\x02\u0421\u0423\x07N\x02\x02\u0422\u041A\x03\x02\x02" +
		"\x02\u0422\u0420\x03\x02\x02\x02\u0423\xA3\x03\x02\x02\x02\u0424\u0431" +
		"\x05\xA8U\x02\u0425\u0427\x05\xA6T\x02\u0426\u0425\x03\x02\x02\x02\u0426" +
		"\u0427\x03\x02\x02\x02\u0427\u0428\x03\x02\x02\x02\u0428\u042A\x07E\x02" +
		"\x02\u0429\u042B\x05\xB0Y\x02\u042A\u0429\x03\x02\x02\x02\u042A\u042B" +
		"\x03\x02\x02\x02\u042B\u042C\x03\x02\x02\x02\u042C\u042E\x07E\x02\x02" +
		"\u042D\u042F\x05\xACW\x02\u042E\u042D\x03\x02\x02\x02\u042E\u042F\x03" +
		"\x02\x02\x02\u042F\u0431\x03\x02\x02\x02\u0430\u0424\x03\x02\x02\x02\u0430" +
		"\u0426\x03\x02\x02\x02\u0431\xA5\x03\x02\x02\x02\u0432\u0435\x05\x8EH" +
		"\x02\u0433\u0435\x05\xACW\x02\u0434\u0432\x03\x02\x02\x02\u0434\u0433" +
		"\x03\x02\x02\x02\u0435\xA7\x03\x02\x02\x02\u0436\u0438\x05\x0E\b\x02\u0437" +
		"\u0436\x03\x02\x02\x02\u0438\u043B\x03\x02\x02\x02\u0439\u0437\x03\x02" +
		"\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A\u043C\x03\x02\x02\x02\u043B" +
		"\u0439\x03\x02\x02\x02\u043C\u043D\x05\xD0i\x02\u043D\u043E\x05R*\x02" +
		"\u043E\u043F\x07N\x02\x02\u043F\u0440\x05\xB0Y\x02\u0440\xA9\x03\x02\x02" +
		"\x02\u0441\u0442\x07?\x02\x02\u0442\u0443\x05\xB0Y\x02\u0443\u0444\x07" +
		"@\x02\x02\u0444\xAB\x03\x02\x02\x02\u0445\u044A\x05\xB0Y\x02\u0446\u0447" +
		"\x07F\x02\x02\u0447\u0449\x05\xB0Y\x02\u0448\u0446\x03\x02\x02\x02\u0449" +
		"\u044C\x03\x02\x02\x02\u044A\u0448\x03\x02\x02\x02\u044A\u044B\x03\x02" +
		"\x02\x02\u044B\xAD\x03\x02\x02\x02\u044C\u044A\x03\x02\x02\x02\u044D\u044E" +
		"\x07q\x02\x02\u044E\u0450\x07?\x02\x02\u044F\u0451\x05\xACW\x02\u0450" +
		"\u044F\x03\x02\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451\u0452\x03\x02" +
		"\x02\x02\u0452\u0460\x07@\x02\x02\u0453\u0454\x07-\x02\x02\u0454\u0456" +
		"\x07?\x02\x02\u0455\u0457\x05\xACW\x02\u0456\u0455\x03\x02\x02\x02\u0456" +
		"\u0457\x03\x02\x02\x02\u0457\u0458\x03\x02\x02\x02\u0458\u0460\x07@\x02" +
		"\x02\u0459\u045A\x07*\x02\x02\u045A\u045C\x07?\x02\x02\u045B\u045D\x05" +
		"\xACW\x02\u045C\u045B\x03\x02\x02\x02\u045C\u045D\x03\x02\x02\x02\u045D" +
		"\u045E\x03\x02\x02\x02\u045E\u0460\x07@\x02\x02\u045F\u044D\x03\x02\x02" +
		"\x02\u045F\u0453\x03\x02\x02\x02\u045F\u0459\x03\x02\x02\x02\u0460\xAF" +
		"\x03\x02\x02\x02\u0461\u0462\bY\x01\x02\u0462\u048E\x05\xB8]\x02\u0463" +
		"\u048E\x05\xAEX\x02\u0464\u0465\x07!\x02\x02\u0465\u048E\x05\xBC_\x02" +
		"\u0466\u046A\x07?\x02\x02\u0467\u0469\x05p9\x02\u0468\u0467\x03\x02\x02" +
		"\x02\u0469\u046C\x03\x02\x02\x02\u046A\u0468\x03\x02\x02\x02\u046A\u046B" +
		"\x03\x02\x02\x02\u046B\u046D\x03\x02\x02\x02\u046C\u046A\x03\x02\x02\x02" +
		"\u046D\u0472\x05\xD0i\x02\u046E\u046F\x07[\x02\x02\u046F\u0471\x05\xD0" +
		"i\x02\u0470\u046E\x03\x02\x02\x02\u0471\u0474\x03\x02\x02\x02\u0472\u0470" +
		"\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473\u0475\x03\x02\x02\x02" +
		"\u0474\u0472\x03\x02\x02\x02\u0475\u0476\x07@\x02\x02\u0476\u0477\x05" +
		"\xB0Y\x17\u0477\u048E\x03\x02\x02\x02\u0478\u0479\t\x05\x02\x02\u0479" +
		"\u048E\x05\xB0Y\x15\u047A\u047B\t\x06\x02\x02\u047B\u048E\x05\xB0Y\x14" +
		"\u047C\u048E\x05\xB2Z\x02\u047D\u047E\x05\xD0i\x02\u047E\u0484\x07k\x02" +
		"\x02\u047F\u0481\x05\xD4k\x02\u0480\u047F\x03\x02\x02\x02\u0480\u0481" +
		"\x03\x02\x02\x02\u0481\u0482\x03\x02\x02\x02\u0482\u0485\x07q\x02\x02" +
		"\u0483\u0485\x07!\x02\x02\u0484\u0480\x03\x02\x02\x02\u0484\u0483\x03" +
		"\x02\x02\x02\u0485\u048E\x03\x02\x02\x02\u0486\u0487\x05\xBA^\x02\u0487" +
		"\u0489\x07k\x02\x02\u0488\u048A\x05\xD4k\x02\u0489\u0488\x03\x02\x02\x02" +
		"\u0489\u048A\x03\x02\x02\x02\u048A\u048B\x03\x02\x02\x02\u048B\u048C\x07" +
		"!\x02\x02\u048C\u048E\x03\x02\x02\x02\u048D\u0461\x03\x02\x02\x02\u048D" +
		"\u0463\x03\x02\x02\x02\u048D\u0464\x03\x02\x02\x02\u048D\u0466\x03\x02" +
		"\x02\x02\u048D\u0478\x03\x02\x02\x02\u048D\u047A\x03\x02\x02\x02\u048D" +
		"\u047C\x03\x02\x02\x02\u048D\u047D\x03\x02\x02\x02\u048D\u0486\x03\x02" +
		"\x02\x02\u048E\u04DF\x03\x02\x02\x02\u048F\u0490\f\x13\x02\x02\u0490\u0491" +
		"\t\x07\x02\x02\u0491\u04DE\x05\xB0Y\x14\u0492\u0493\f\x12\x02\x02\u0493" +
		"\u0494\t\b\x02\x02\u0494\u04DE\x05\xB0Y\x13\u0495\u049D\f\x11\x02\x02" +
		"\u0496\u0497\x07J\x02\x02\u0497\u049E\x07J\x02\x02\u0498\u0499\x07I\x02" +
		"\x02\u0499\u049A\x07I\x02\x02\u049A\u049E\x07I\x02\x02\u049B\u049C\x07" +
		"I\x02\x02\u049C\u049E\x07I\x02\x02\u049D\u0496\x03\x02\x02\x02\u049D\u0498" +
		"\x03\x02\x02\x02\u049D\u049B\x03\x02\x02\x02\u049E\u049F\x03\x02\x02\x02" +
		"\u049F\u04DE\x05\xB0Y\x12\u04A0\u04A1\f\x10\x02\x02\u04A1\u04A2\t\t\x02" +
		"\x02\u04A2\u04DE\x05\xB0Y\x11\u04A3\u04A4\f\x0E\x02\x02\u04A4\u04A5\t" +
		"\n\x02\x02\u04A5\u04DE\x05\xB0Y\x0F\u04A6\u04A7\f\r\x02\x02\u04A7\u04A8" +
		"\x07[\x02\x02\u04A8\u04DE\x05\xB0Y\x0E\u04A9\u04AA\f\f\x02\x02\u04AA\u04AB" +
		"\x07]\x02\x02\u04AB\u04DE\x05\xB0Y\r\u04AC\u04AD\f\v\x02\x02\u04AD\u04AE" +
		"\x07\\\x02\x02\u04AE\u04DE\x05\xB0Y\f\u04AF\u04B0\f\n\x02\x02\u04B0\u04B1" +
		"\x07S\x02\x02\u04B1\u04DE\x05\xB0Y\v\u04B2\u04B3\f\t\x02\x02\u04B3\u04B4" +
		"\x07T\x02\x02\u04B4\u04DE\x05\xB0Y\n\u04B5\u04B6\f\b\x02\x02\u04B6\u04B7" +
		"\x07M\x02\x02\u04B7\u04B8\x05\xB0Y\x02\u04B8\u04B9\x07N\x02\x02\u04B9" +
		"\u04BA\x05\xB0Y\b\u04BA\u04DE\x03\x02\x02\x02\u04BB\u04BC\f\x07\x02\x02" +
		"\u04BC\u04BD\t\v\x02\x02\u04BD\u04DE\x05\xB0Y\x07\u04BE\u04BF\f\x1B\x02" +
		"\x02\u04BF\u04CB\x07G\x02\x02\u04C0\u04CC\x07q\x02\x02\u04C1\u04CC\x05" +
		"\xAEX\x02\u04C2\u04CC\x07-\x02\x02\u04C3\u04C5\x07!\x02\x02\u04C4\u04C6" +
		"\x05\xCCg\x02\u04C5\u04C4\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02\x02" +
		"\u04C6\u04C7\x03\x02\x02\x02\u04C7\u04CC\x05\xC0a\x02\u04C8\u04C9\x07" +
		"*\x02\x02\u04C9\u04CC\x05\xD6l\x02\u04CA\u04CC\x05\xC6d\x02\u04CB\u04C0" +
		"\x03\x02\x02\x02\u04CB\u04C1\x03\x02\x02\x02\u04CB\u04C2\x03\x02\x02\x02" +
		"\u04CB\u04C3\x03\x02\x02\x02\u04CB\u04C8\x03\x02\x02\x02\u04CB\u04CA\x03" +
		"\x02\x02\x02\u04CC\u04DE\x03\x02\x02\x02\u04CD\u04CE\f\x1A\x02\x02\u04CE" +
		"\u04CF\x07C\x02\x02\u04CF\u04D0\x05\xB0Y\x02\u04D0\u04D1\x07D\x02\x02" +
		"\u04D1\u04DE\x03\x02\x02\x02\u04D2\u04D3\f\x16\x02\x02\u04D3\u04DE\t\f" +
		"\x02\x02\u04D4\u04D5\f\x0F\x02\x02\u04D5\u04D6\x07\x1C\x02\x02\u04D6\u04DE" +
		"\x05\xD0i\x02\u04D7\u04D8\f\x05\x02\x02\u04D8\u04DA\x07k\x02\x02\u04D9" +
		"\u04DB\x05\xD4k\x02\u04DA\u04D9\x03\x02\x02\x02\u04DA\u04DB\x03\x02\x02" +
		"\x02\u04DB\u04DC\x03\x02\x02\x02\u04DC\u04DE\x07q\x02\x02\u04DD\u048F" +
		"\x03\x02\x02\x02\u04DD\u0492\x03\x02\x02\x02\u04DD\u0495\x03\x02\x02\x02" +
		"\u04DD\u04A0\x03\x02\x02\x02\u04DD\u04A3\x03\x02\x02\x02\u04DD\u04A6\x03" +
		"\x02\x02\x02\u04DD\u04A9\x03\x02\x02\x02\u04DD\u04AC\x03\x02\x02\x02\u04DD" +
		"\u04AF\x03\x02\x02\x02\u04DD\u04B2\x03\x02\x02\x02\u04DD\u04B5\x03\x02" +
		"\x02\x02\u04DD\u04BB\x03\x02\x02\x02\u04DD\u04BE\x03\x02\x02\x02\u04DD" +
		"\u04CD\x03\x02\x02\x02\u04DD\u04D2\x03\x02\x02\x02\u04DD\u04D4\x03\x02" +
		"\x02\x02\u04DD\u04D7\x03\x02\x02\x02\u04DE\u04E1\x03\x02\x02\x02\u04DF" +
		"\u04DD\x03\x02\x02\x02\u04DF\u04E0\x03\x02\x02\x02\u04E0\xB1\x03\x02\x02" +
		"\x02\u04E1\u04DF\x03\x02\x02\x02\u04E2\u04E3\x05\xB4[\x02\u04E3\u04E4" +
		"\x07j\x02\x02\u04E4\u04E5\x05\xB6\\\x02\u04E5\xB3\x03\x02\x02\x02\u04E6" +
		"\u04F7\x07q\x02\x02\u04E7\u04E9\x07?\x02\x02\u04E8\u04EA\x05`1\x02\u04E9" +
		"\u04E8\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EA\u04EB\x03\x02" +
		"\x02\x02\u04EB\u04F7\x07@\x02\x02\u04EC\u04ED\x07?\x02\x02\u04ED\u04F2" +
		"\x07q\x02\x02\u04EE\u04EF\x07F\x02\x02\u04EF\u04F1\x07q\x02\x02\u04F0" +
		"\u04EE\x03\x02\x02\x02\u04F1\u04F4\x03\x02\x02\x02\u04F2\u04F0\x03\x02" +
		"\x02\x02\u04F2\u04F3\x03\x02\x02\x02\u04F3\u04F5\x03\x02\x02\x02\u04F4" +
		"\u04F2\x03\x02\x02\x02\u04F5\u04F7\x07@\x02\x02\u04F6\u04E6\x03\x02\x02" +
		"\x02\u04F6\u04E7\x03\x02\x02\x02\u04F6\u04EC\x03\x02\x02\x02\u04F7\xB5" +
		"\x03\x02\x02\x02\u04F8\u04FB\x05\xB0Y\x02\u04F9\u04FB\x05\x8AF\x02\u04FA" +
		"\u04F8\x03\x02\x02\x02\u04FA\u04F9\x03\x02\x02\x02\u04FB\xB7\x03\x02\x02" +
		"\x02\u04FC\u04FD\x07?\x02\x02\u04FD\u04FE\x05\xB0Y\x02\u04FE\u04FF\x07" +
		"@\x02\x02\u04FF\u050F\x03\x02\x02\x02\u0500\u050F\x07-\x02\x02\u0501\u050F" +
		"\x07*\x02\x02\u0502\u050F\x05h5\x02\u0503\u050F\x07q\x02\x02\u0504\u0505" +
		"\x056\x1C\x02\u0505\u0506\x07G\x02\x02\u0506\u0507\x07\v\x02\x02\u0507" +
		"\u050F\x03\x02\x02\x02\u0508\u050C\x05\xCCg\x02\u0509\u050D\x05\xD8m\x02" +
		"\u050A\u050B\x07-\x02\x02\u050B\u050D\x05\xDAn\x02\u050C\u0509\x03\x02" +
		"\x02\x02\u050C\u050A\x03\x02\x02\x02\u050D\u050F\x03\x02\x02\x02\u050E" +
		"\u04FC\x03\x02\x02\x02\u050E\u0500\x03\x02\x02\x02\u050E\u0501\x03\x02" +
		"\x02\x02\u050E\u0502\x03\x02\x02\x02\u050E\u0503\x03\x02\x02\x02\u050E" +
		"\u0504\x03\x02\x02\x02\u050E\u0508\x03\x02\x02\x02\u050F\xB9\x03\x02\x02" +
		"\x02\u0510\u0511\x05X-\x02\u0511\u0512\x07G\x02\x02\u0512\u0514\x03\x02" +
		"\x02\x02\u0513\u0510\x03\x02\x02\x02\u0513\u0514\x03\x02\x02\x02\u0514" +
		"\u0518\x03\x02\x02\x02\u0515\u0517\x05p9\x02\u0516\u0515\x03\x02\x02\x02" +
		"\u0517\u051A\x03\x02\x02\x02\u0518\u0516\x03\x02\x02\x02\u0518\u0519\x03" +
		"\x02\x02\x02\u0519\u051B\x03\x02\x02\x02\u051A\u0518\x03\x02\x02\x02\u051B" +
		"\u051D\x07q\x02\x02\u051C\u051E\x05\xD4k\x02\u051D\u051C\x03\x02\x02\x02" +
		"\u051D\u051E\x03\x02\x02\x02\u051E\xBB\x03\x02\x02\x02\u051F\u0520\x05" +
		"\xCCg\x02\u0520\u0521\x05\xBE`\x02\u0521\u0522\x05\xC4c\x02\u0522\u0529" +
		"\x03\x02\x02\x02\u0523\u0526\x05\xBE`\x02\u0524\u0527\x05\xC2b\x02\u0525" +
		"\u0527\x05\xC4c\x02\u0526\u0524\x03\x02\x02\x02\u0526\u0525\x03\x02\x02" +
		"\x02\u0527\u0529\x03\x02\x02\x02\u0528\u051F\x03\x02\x02\x02\u0528\u0523" +
		"\x03\x02\x02\x02\u0529\xBD\x03\x02\x02\x02\u052A\u052C\x07q\x02\x02\u052B" +
		"\u052D\x05\xC8e\x02\u052C\u052B\x03\x02\x02\x02\u052C\u052D\x03\x02\x02" +
		"\x02\u052D\u0535\x03\x02\x02\x02\u052E\u052F\x07G\x02\x02\u052F\u0531" +
		"\x07q\x02\x02\u0530\u0532\x05\xC8e\x02\u0531\u0530\x03\x02\x02\x02\u0531" +
		"\u0532\x03\x02\x02\x02\u0532\u0534\x03\x02\x02\x02\u0533\u052E\x03\x02" +
		"\x02\x02\u0534\u0537\x03\x02\x02\x02\u0535\u0533\x03\x02\x02\x02\u0535" +
		"\u0536\x03\x02\x02\x02\u0536\u053A\x03\x02\x02\x02\u0537\u0535\x03\x02" +
		"\x02\x02\u0538\u053A\x05\xD2j\x02\u0539\u052A\x03\x02\x02\x02\u0539\u0538" +
		"\x03\x02\x02\x02\u053A\xBF\x03\x02\x02\x02\u053B\u053D\x07q\x02\x02\u053C" +
		"\u053E\x05\xCAf\x02\u053D\u053C\x03\x02\x02\x02\u053D\u053E\x03\x02\x02" +
		"\x02\u053E\u053F\x03\x02\x02\x02\u053F\u0540\x05\xC4c\x02\u0540\xC1\x03" +
		"\x02\x02\x02\u0541\u055D\x07C\x02\x02\u0542\u0547\x07D\x02\x02\u0543\u0544" +
		"\x07C\x02\x02\u0544\u0546\x07D\x02\x02\u0545\u0543\x03\x02\x02\x02\u0546" +
		"\u0549\x03\x02\x02\x02\u0547\u0545\x03\x02\x02\x02\u0547\u0548\x03\x02" +
		"\x02\x02\u0548\u054A\x03\x02\x02\x02\u0549\u0547\x03\x02\x02\x02\u054A" +
		"\u055E\x05V,\x02\u054B\u054C\x05\xB0Y\x02\u054C\u0553\x07D\x02\x02\u054D" +
		"\u054E\x07C\x02\x02\u054E\u054F\x05\xB0Y\x02\u054F\u0550\x07D\x02\x02" +
		"\u0550\u0552\x03\x02\x02\x02\u0551\u054D\x03\x02\x02\x02\u0552\u0555\x03" +
		"\x02\x02\x02\u0553\u0551\x03\x02\x02\x02\u0553\u0554\x03\x02\x02\x02\u0554" +
		"\u055A\x03\x02\x02\x02\u0555\u0553\x03\x02\x02\x02\u0556\u0557\x07C\x02" +
		"\x02\u0557\u0559\x07D\x02\x02\u0558\u0556\x03\x02\x02\x02\u0559\u055C" +
		"\x03\x02\x02\x02\u055A\u0558\x03\x02\x02\x02\u055A\u055B\x03\x02\x02\x02" +
		"\u055B\u055E\x03\x02\x02\x02\u055C\u055A\x03\x02\x02\x02\u055D\u0542\x03" +
		"\x02\x02\x02\u055D\u054B\x03\x02\x02\x02\u055E\xC3\x03\x02\x02\x02\u055F" +
		"\u0561\x05\xDAn\x02\u0560\u0562\x05(\x15\x02\u0561\u0560\x03\x02\x02\x02" +
		"\u0561\u0562\x03\x02\x02\x02\u0562\xC5\x03\x02\x02\x02\u0563\u0564\x05" +
		"\xCCg\x02\u0564\u0565\x05\xD8m\x02\u0565\xC7\x03\x02\x02\x02\u0566\u0567" +
		"\x07J\x02\x02\u0567\u056A\x07I\x02\x02\u0568\u056A\x05\xD4k\x02\u0569" +
		"\u0566\x03\x02\x02\x02\u0569\u0568\x03\x02\x02\x02\u056A\xC9\x03\x02\x02" +
		"\x02\u056B\u056C\x07J\x02\x02\u056C\u056F\x07I\x02\x02\u056D\u056F\x05" +
		"\xCCg\x02\u056E\u056B\x03\x02\x02\x02\u056E\u056D\x03\x02\x02\x02\u056F" +
		"\xCB\x03\x02\x02\x02\u0570\u0571\x07J\x02\x02\u0571\u0572\x05\xCEh\x02" +
		"\u0572\u0573\x07I\x02\x02\u0573\xCD\x03\x02\x02\x02\u0574\u0579\x05\xD0" +
		"i\x02\u0575\u0576\x07F\x02\x02\u0576\u0578\x05\xD0i\x02\u0577\u0575\x03" +
		"\x02\x02\x02\u0578\u057B\x03\x02\x02\x02\u0579\u0577\x03\x02\x02\x02\u0579" +
		"\u057A\x03\x02\x02\x02\u057A\xCF\x03\x02\x02\x02\u057B\u0579\x03\x02\x02" +
		"\x02\u057C\u057E\x05p9\x02\u057D\u057C\x03\x02\x02\x02\u057E\u0581\x03" +
		"\x02\x02\x02\u057F\u057D\x03\x02\x02\x02\u057F\u0580\x03\x02\x02\x02\u0580" +
		"\u0584\x03\x02\x02\x02\u0581\u057F\x03\x02\x02\x02\u0582\u0585\x05X-\x02" +
		"\u0583\u0585\x05\xD2j\x02\u0584\u0582\x03\x02\x02\x02\u0584\u0583\x03" +
		"\x02\x02\x02\u0585\u0590\x03\x02\x02\x02\u0586\u0588\x05p9\x02\u0587\u0586" +
		"\x03\x02\x02\x02\u0588\u058B\x03\x02\x02\x02\u0589\u0587\x03\x02\x02\x02" +
		"\u0589\u058A\x03\x02\x02\x02\u058A\u058C\x03\x02\x02\x02\u058B\u0589\x03" +
		"\x02\x02\x02\u058C\u058D\x07C\x02\x02\u058D\u058F\x07D\x02\x02\u058E\u0589" +
		"\x03\x02\x02\x02\u058F\u0592\x03\x02\x02\x02\u0590\u058E\x03\x02\x02\x02" +
		"\u0590\u0591\x03\x02\x02\x02\u0591\xD1\x03\x02\x02\x02\u0592\u0590\x03" +
		"\x02\x02\x02\u0593\u0594\t\r\x02\x02\u0594\xD3\x03\x02\x02\x02\u0595\u0596" +
		"\x07J\x02\x02\u0596\u059B\x05Z.\x02\u0597\u0598\x07F\x02\x02\u0598\u059A" +
		"\x05Z.\x02\u0599\u0597\x03\x02\x02\x02\u059A\u059D\x03\x02\x02\x02\u059B" +
		"\u0599\x03\x02\x02\x02\u059B\u059C\x03\x02\x02\x02\u059C\u059E\x03\x02" +
		"\x02\x02\u059D\u059B\x03\x02\x02\x02\u059E\u059F\x07I\x02\x02\u059F\xD5" +
		"\x03\x02\x02\x02\u05A0\u05A7\x05\xDAn\x02\u05A1\u05A2\x07G\x02\x02\u05A2" +
		"\u05A4\x07q\x02\x02\u05A3\u05A5\x05\xDAn\x02\u05A4\u05A3\x03\x02\x02\x02" +
		"\u05A4\u05A5\x03\x02\x02\x02\u05A5\u05A7\x03\x02\x02\x02\u05A6\u05A0\x03" +
		"\x02\x02\x02\u05A6\u05A1\x03\x02\x02\x02\u05A7\xD7\x03\x02\x02\x02\u05A8" +
		"\u05A9\x07*\x02\x02\u05A9\u05AD\x05\xD6l\x02\u05AA\u05AB\x07q\x02\x02" +
		"\u05AB\u05AD\x05\xDAn\x02\u05AC\u05A8\x03\x02\x02\x02\u05AC\u05AA\x03" +
		"\x02\x02\x02\u05AD\xD9\x03\x02\x02\x02\u05AE\u05B0\x07?\x02\x02\u05AF" +
		"\u05B1\x05\xACW\x02\u05B0\u05AF\x03\x02\x02\x02\u05B0\u05B1\x03\x02\x02" +
		"\x02\u05B1\u05B2\x03\x02\x02\x02\u05B2\u05B3\x07@\x02\x02\u05B3\xDB\x03" +
		"\x02\x02\x02\xB7\xDD\xE2\xE8\xF0\xF9\xFE\u0103\u0108\u010F\u0112\u0119" +
		"\u0123\u0127\u012C\u012F\u0132\u0142\u014A\u0152\u0156\u015D\u0164\u0168" +
		"\u016B\u016E\u0177\u017D\u0182\u0185\u018B\u0191\u0195\u019F\u01A8\u01AF" +
		"\u01B3\u01B8\u01BC\u01C7\u01D0\u01D4\u01DD\u01E1\u01ED\u01F8\u01FD\u0206" +
		"\u020E\u0218\u0221\u0229\u022E\u0236\u023B\u0245\u024F\u0255\u025C\u0261" +
		"\u0269\u026D\u026F\u0275\u027A\u027E\u0285\u028B\u028D\u0294\u0299\u02A2" +
		"\u02A7\u02AA\u02AF\u02B8\u02BF\u02CA\u02D3\u02DD\u02E6\u02EB\u02EE\u02F5" +
		"\u02FF\u0307\u030A\u030D\u031A\u0322\u0327\u032F\u0333\u0337\u033B\u033D" +
		"\u0341\u0347\u0352\u035C\u0361\u036A\u036F\u0372\u0379\u0382\u0399\u039C" +
		"\u039F\u03A7\u03AB\u03B3\u03B9\u03C4\u03CD\u03D2\u03DC\u03E3\u03F0\u03F9" +
		"\u0402\u0408\u0413\u0418\u041D\u0422\u0426\u042A\u042E\u0430\u0434\u0439" +
		"\u044A\u0450\u0456\u045C\u045F\u046A\u0472\u0480\u0484\u0489\u048D\u049D" +
		"\u04C5\u04CB\u04DA\u04DD\u04DF\u04E9\u04F2\u04F6\u04FA\u050C\u050E\u0513" +
		"\u0518\u051D\u0526\u0528\u052C\u0531\u0535\u0539\u053D\u0547\u0553\u055A" +
		"\u055D\u0561\u0569\u056E\u0579\u057F\u0584\u0589\u0590\u059B\u05A4\u05A6" +
		"\u05AC\u05B0";
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
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
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
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.EXTENDS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
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


export class CommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(JavaParser.COMMENT, 0); }
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
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STATIC, 0); }
	public memberDeclaration(): MemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclarationContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
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
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
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


