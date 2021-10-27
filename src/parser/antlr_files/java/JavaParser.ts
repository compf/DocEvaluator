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

import { JavaParserListener } from "./JavaParserListener";
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
	public static readonly RULE_javaFile = 0;
	public static readonly RULE_allRelevantComponents = 1;
	public static readonly RULE_classDec = 2;
	public static readonly RULE_classBlock = 3;
	public static readonly RULE_blockStart = 4;
	public static readonly RULE_blockEnd = 5;
	public static readonly RULE_extendsStatement = 6;
	public static readonly RULE_implementStatement = 7;
	public static readonly RULE_importStatement = 8;
	public static readonly RULE_interfaceDec = 9;
	public static readonly RULE_commentComponentPair = 10;
	public static readonly RULE_component = 11;
	public static readonly RULE_modifierer = 12;
	public static readonly RULE_generics = 13;
	public static readonly RULE_methodDecl = 14;
	public static readonly RULE_fieldDec = 15;
	public static readonly RULE_block = 16;
	public static readonly RULE_dataType = 17;
	public static readonly RULE_params = 18;
	public static readonly RULE_param = 19;
	public static readonly RULE_comment = 20;
	public static readonly RULE_notInteresting = 21;
	public static readonly RULE_id = 22;
	public static readonly RULE_qualifiedName = 23;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"javaFile", "allRelevantComponents", "classDec", "classBlock", "blockStart", 
		"blockEnd", "extendsStatement", "implementStatement", "importStatement", 
		"interfaceDec", "commentComponentPair", "component", "modifierer", "generics", 
		"methodDecl", "fieldDec", "block", "dataType", "params", "param", "comment", 
		"notInteresting", "id", "qualifiedName",
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
	public javaFile(): JavaFileContext {
		let _localctx: JavaFileContext = new JavaFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JavaParser.RULE_javaFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.VOID - 33)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.COMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0)) {
				{
				{
				this.state = 48;
				this.commentComponentPair();
				}
				}
				this.state = 53;
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
	public allRelevantComponents(): AllRelevantComponentsContext {
		let _localctx: AllRelevantComponentsContext = new AllRelevantComponentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JavaParser.RULE_allRelevantComponents);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.IMPORT) {
				{
				{
				this.state = 54;
				this.importStatement();
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.VOID - 33)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.COMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0)) {
				{
				{
				this.state = 60;
				this.commentComponentPair();
				}
				}
				this.state = 65;
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
	public classDec(): ClassDecContext {
		let _localctx: ClassDecContext = new ClassDecContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JavaParser.RULE_classDec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (JavaParser.FINAL - 18)) | (1 << (JavaParser.PRIVATE - 18)) | (1 << (JavaParser.PROTECTED - 18)) | (1 << (JavaParser.PUBLIC - 18)) | (1 << (JavaParser.STATIC - 18)))) !== 0) || _la === JavaParser.AT) {
				{
				{
				this.state = 66;
				this.modifierer();
				}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 72;
			this.match(JavaParser.CLASS);
			this.state = 73;
			this.id();
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LT) {
				{
				this.state = 74;
				this.generics();
				}
			}

			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.EXTENDS) {
				{
				this.state = 77;
				this.extendsStatement();
				}
			}

			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.IMPLEMENTS) {
				{
				{
				this.state = 80;
				this.implementStatement();
				}
				}
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 86;
			this.classBlock();
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
	public classBlock(): ClassBlockContext {
		let _localctx: ClassBlockContext = new ClassBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JavaParser.RULE_classBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.match(JavaParser.LBRACE);
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.VOID - 33)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.COMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0)) {
				{
				{
				this.state = 89;
				this.commentComponentPair();
				}
				}
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 95;
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
	public blockStart(): BlockStartContext {
		let _localctx: BlockStartContext = new BlockStartContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JavaParser.RULE_blockStart);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(JavaParser.LBRACE);
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
	public blockEnd(): BlockEndContext {
		let _localctx: BlockEndContext = new BlockEndContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JavaParser.RULE_blockEnd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
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
	public extendsStatement(): ExtendsStatementContext {
		let _localctx: ExtendsStatementContext = new ExtendsStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JavaParser.RULE_extendsStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 101;
			this.match(JavaParser.EXTENDS);
			this.state = 102;
			this.qualifiedName();
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
	public implementStatement(): ImplementStatementContext {
		let _localctx: ImplementStatementContext = new ImplementStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, JavaParser.RULE_implementStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 104;
			this.match(JavaParser.IMPLEMENTS);
			this.state = 105;
			this.qualifiedName();
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
	public importStatement(): ImportStatementContext {
		let _localctx: ImportStatementContext = new ImportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, JavaParser.RULE_importStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this.match(JavaParser.IMPORT);
			this.state = 108;
			this.qualifiedName();
			this.state = 109;
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
	public interfaceDec(): InterfaceDecContext {
		let _localctx: InterfaceDecContext = new InterfaceDecContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, JavaParser.RULE_interfaceDec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (JavaParser.FINAL - 18)) | (1 << (JavaParser.PRIVATE - 18)) | (1 << (JavaParser.PROTECTED - 18)) | (1 << (JavaParser.PUBLIC - 18)) | (1 << (JavaParser.STATIC - 18)))) !== 0) || _la === JavaParser.AT) {
				{
				{
				this.state = 111;
				this.modifierer();
				}
				}
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 117;
			this.match(JavaParser.INTERFACE);
			this.state = 118;
			this.id();
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.IMPLEMENTS) {
				{
				{
				this.state = 119;
				this.match(JavaParser.IMPLEMENTS);
				this.state = 120;
				this.qualifiedName();
				}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 126;
			this.blockStart();
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
	public commentComponentPair(): CommentComponentPairContext {
		let _localctx: CommentComponentPairContext = new CommentComponentPairContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, JavaParser.RULE_commentComponentPair);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.COMMENT) {
				{
				this.state = 128;
				this.match(JavaParser.COMMENT);
				}
			}

			this.state = 131;
			this.component();
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
	public component(): ComponentContext {
		let _localctx: ComponentContext = new ComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, JavaParser.RULE_component);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 133;
				this.classDec();
				}
				break;

			case 2:
				{
				this.state = 134;
				this.interfaceDec();
				}
				break;

			case 3:
				{
				this.state = 135;
				this.methodDecl();
				}
				break;

			case 4:
				{
				this.state = 136;
				this.fieldDec();
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
	public modifierer(): ModifiererContext {
		let _localctx: ModifiererContext = new ModifiererContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, JavaParser.RULE_modifierer);
		try {
			this.state = 146;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.PUBLIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 139;
				this.match(JavaParser.PUBLIC);
				}
				break;
			case JavaParser.STATIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 140;
				this.match(JavaParser.STATIC);
				}
				break;
			case JavaParser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 141;
				this.match(JavaParser.PROTECTED);
				}
				break;
			case JavaParser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 142;
				this.match(JavaParser.PRIVATE);
				}
				break;
			case JavaParser.FINAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 143;
				this.match(JavaParser.FINAL);
				}
				break;
			case JavaParser.AT:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 144;
				this.match(JavaParser.AT);
				this.state = 145;
				this.match(JavaParser.IDENTIFIER);
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
	public generics(): GenericsContext {
		let _localctx: GenericsContext = new GenericsContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, JavaParser.RULE_generics);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.match(JavaParser.LT);
			this.state = 149;
			this.match(JavaParser.IDENTIFIER);
			this.state = 150;
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
	public methodDecl(): MethodDeclContext {
		let _localctx: MethodDeclContext = new MethodDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, JavaParser.RULE_methodDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (JavaParser.FINAL - 18)) | (1 << (JavaParser.PRIVATE - 18)) | (1 << (JavaParser.PROTECTED - 18)) | (1 << (JavaParser.PUBLIC - 18)) | (1 << (JavaParser.STATIC - 18)))) !== 0) || _la === JavaParser.AT) {
				{
				{
				this.state = 152;
				this.modifierer();
				}
				}
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 158;
			this.dataType();
			this.state = 159;
			this.id();
			this.state = 160;
			this.match(JavaParser.LPAREN);
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la === JavaParser.SHORT || _la === JavaParser.VOID || _la === JavaParser.IDENTIFIER) {
				{
				this.state = 161;
				this.params();
				}
			}

			this.state = 164;
			this.match(JavaParser.RPAREN);
			this.state = 165;
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
	public fieldDec(): FieldDecContext {
		let _localctx: FieldDecContext = new FieldDecContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, JavaParser.RULE_fieldDec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (JavaParser.FINAL - 18)) | (1 << (JavaParser.PRIVATE - 18)) | (1 << (JavaParser.PROTECTED - 18)) | (1 << (JavaParser.PUBLIC - 18)) | (1 << (JavaParser.STATIC - 18)))) !== 0) || _la === JavaParser.AT) {
				{
				{
				this.state = 167;
				this.modifierer();
				}
				}
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 173;
			this.dataType();
			this.state = 174;
			this.id();
			this.state = 175;
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, JavaParser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this.match(JavaParser.LBRACE);
			this.state = 181;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 178;
					this.matchWildcard();
					}
					}
				}
				this.state = 183;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LBRACE) {
				{
				this.state = 184;
				this.block();
				this.state = 188;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 185;
						this.matchWildcard();
						}
						}
					}
					this.state = 190;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				}
				}
			}

			this.state = 193;
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
	public dataType(): DataTypeContext {
		let _localctx: DataTypeContext = new DataTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, JavaParser.RULE_dataType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.VOID:
				{
				this.state = 195;
				this.match(JavaParser.VOID);
				}
				break;
			case JavaParser.INT:
				{
				this.state = 196;
				this.match(JavaParser.INT);
				}
				break;
			case JavaParser.LONG:
				{
				this.state = 197;
				this.match(JavaParser.LONG);
				}
				break;
			case JavaParser.DOUBLE:
				{
				this.state = 198;
				this.match(JavaParser.DOUBLE);
				}
				break;
			case JavaParser.FLOAT:
				{
				this.state = 199;
				this.match(JavaParser.FLOAT);
				}
				break;
			case JavaParser.SHORT:
				{
				this.state = 200;
				this.match(JavaParser.SHORT);
				}
				break;
			case JavaParser.IDENTIFIER:
				{
				this.state = 201;
				this.qualifiedName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.LBRACK) {
				{
				this.state = 204;
				this.match(JavaParser.LBRACK);
				this.state = 205;
				this.match(JavaParser.RBRACK);
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
	public params(): ParamsContext {
		let _localctx: ParamsContext = new ParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, JavaParser.RULE_params);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.param();
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.COMMA) {
				{
				{
				this.state = 209;
				this.match(JavaParser.COMMA);
				this.state = 210;
				this.param();
				}
				}
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la === JavaParser.SHORT || _la === JavaParser.VOID || _la === JavaParser.IDENTIFIER) {
				{
				this.state = 216;
				this.param();
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
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, JavaParser.RULE_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.dataType();
			this.state = 220;
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
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, JavaParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
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
	public notInteresting(): NotInterestingContext {
		let _localctx: NotInterestingContext = new NotInterestingContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, JavaParser.RULE_notInteresting);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CASE) | (1 << JavaParser.CATCH) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONST) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DEFAULT) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ELSE) | (1 << JavaParser.ENUM) | (1 << JavaParser.EXTENDS) | (1 << JavaParser.FINAL) | (1 << JavaParser.FINALLY) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.GOTO) | (1 << JavaParser.IMPLEMENTS) | (1 << JavaParser.IMPORT) | (1 << JavaParser.INSTANCEOF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JavaParser.PACKAGE - 32)) | (1 << (JavaParser.PRIVATE - 32)) | (1 << (JavaParser.PROTECTED - 32)) | (1 << (JavaParser.PUBLIC - 32)) | (1 << (JavaParser.RETURN - 32)) | (1 << (JavaParser.SHORT - 32)) | (1 << (JavaParser.STATIC - 32)) | (1 << (JavaParser.STRICTFP - 32)) | (1 << (JavaParser.SUPER - 32)) | (1 << (JavaParser.SWITCH - 32)) | (1 << (JavaParser.SYNCHRONIZED - 32)) | (1 << (JavaParser.THIS - 32)) | (1 << (JavaParser.THROW - 32)) | (1 << (JavaParser.THROWS - 32)) | (1 << (JavaParser.TRANSIENT - 32)) | (1 << (JavaParser.TRY - 32)) | (1 << (JavaParser.VOID - 32)) | (1 << (JavaParser.VOLATILE - 32)) | (1 << (JavaParser.WHILE - 32)) | (1 << (JavaParser.DECIMAL_LITERAL - 32)) | (1 << (JavaParser.HEX_LITERAL - 32)) | (1 << (JavaParser.OCT_LITERAL - 32)) | (1 << (JavaParser.BINARY_LITERAL - 32)) | (1 << (JavaParser.FLOAT_LITERAL - 32)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 32)) | (1 << (JavaParser.BOOL_LITERAL - 32)) | (1 << (JavaParser.CHAR_LITERAL - 32)) | (1 << (JavaParser.STRING_LITERAL - 32)) | (1 << (JavaParser.NULL_LITERAL - 32)) | (1 << (JavaParser.LPAREN - 32)) | (1 << (JavaParser.RPAREN - 32)) | (1 << (JavaParser.LBRACE - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.LBRACK - 65)) | (1 << (JavaParser.RBRACK - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.COMMA - 65)) | (1 << (JavaParser.DOT - 65)) | (1 << (JavaParser.ASSIGN - 65)) | (1 << (JavaParser.GT - 65)) | (1 << (JavaParser.LT - 65)) | (1 << (JavaParser.BANG - 65)) | (1 << (JavaParser.TILDE - 65)) | (1 << (JavaParser.QUESTION - 65)) | (1 << (JavaParser.COLON - 65)) | (1 << (JavaParser.EQUAL - 65)) | (1 << (JavaParser.LE - 65)) | (1 << (JavaParser.GE - 65)) | (1 << (JavaParser.NOTEQUAL - 65)) | (1 << (JavaParser.AND - 65)) | (1 << (JavaParser.OR - 65)) | (1 << (JavaParser.INC - 65)) | (1 << (JavaParser.DEC - 65)) | (1 << (JavaParser.ADD - 65)) | (1 << (JavaParser.SUB - 65)) | (1 << (JavaParser.MUL - 65)) | (1 << (JavaParser.DIV - 65)) | (1 << (JavaParser.BITAND - 65)) | (1 << (JavaParser.BITOR - 65)) | (1 << (JavaParser.CARET - 65)) | (1 << (JavaParser.MOD - 65)) | (1 << (JavaParser.ADD_ASSIGN - 65)) | (1 << (JavaParser.SUB_ASSIGN - 65)) | (1 << (JavaParser.MUL_ASSIGN - 65)) | (1 << (JavaParser.DIV_ASSIGN - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (JavaParser.AND_ASSIGN - 97)) | (1 << (JavaParser.OR_ASSIGN - 97)) | (1 << (JavaParser.XOR_ASSIGN - 97)) | (1 << (JavaParser.MOD_ASSIGN - 97)) | (1 << (JavaParser.LSHIFT_ASSIGN - 97)) | (1 << (JavaParser.RSHIFT_ASSIGN - 97)) | (1 << (JavaParser.URSHIFT_ASSIGN - 97)) | (1 << (JavaParser.ARROW - 97)) | (1 << (JavaParser.COLONCOLON - 97)) | (1 << (JavaParser.AT - 97)) | (1 << (JavaParser.ELLIPSIS - 97)) | (1 << (JavaParser.WS - 97)) | (1 << (JavaParser.COMMENT - 97)) | (1 << (JavaParser.LINE_COMMENT - 97)) | (1 << (JavaParser.IDENTIFIER - 97)))) !== 0)) {
				{
				{
				this.state = 224;
				_la = this._input.LA(1);
				if (_la <= 0 || (_la === JavaParser.RBRACE)) {
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
				this.state = 229;
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
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, JavaParser.RULE_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
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
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, JavaParser.RULE_qualifiedName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.id();
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.DOT) {
				{
				{
				this.state = 233;
				this.match(JavaParser.DOT);
				this.state = 234;
				this.id();
				}
				}
				this.state = 239;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03q\xF3\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x03\x02\x07\x024\n\x02\f\x02\x0E\x027\v\x02\x03" +
		"\x03\x07\x03:\n\x03\f\x03\x0E\x03=\v\x03\x03\x03\x07\x03@\n\x03\f\x03" +
		"\x0E\x03C\v\x03\x03\x04\x07\x04F\n\x04\f\x04\x0E\x04I\v\x04\x03\x04\x03" +
		"\x04\x03\x04\x05\x04N\n\x04\x03\x04\x05\x04Q\n\x04\x03\x04\x07\x04T\n" +
		"\x04\f\x04\x0E\x04W\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x07\x05]\n\x05" +
		"\f\x05\x0E\x05`\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x07" +
		"\vs\n\v\f\v\x0E\vv\v\v\x03\v\x03\v\x03\v\x03\v\x07\v|\n\v\f\v\x0E\v\x7F" +
		"\v\v\x03\v\x03\v\x03\f\x05\f\x84\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
		"\r\x05\r\x8C\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\x95\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x07\x10\x9C" +
		"\n\x10\f\x10\x0E\x10\x9F\v\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\xA5\n\x10\x03\x10\x03\x10\x03\x10\x03\x11\x07\x11\xAB\n\x11\f\x11\x0E" +
		"\x11\xAE\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x07\x12" +
		"\xB6\n\x12\f\x12\x0E\x12\xB9\v\x12\x03\x12\x03\x12\x07\x12\xBD\n\x12\f" +
		"\x12\x0E\x12\xC0\v\x12\x05\x12\xC2\n\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xCD\n\x13\x03\x13\x03" +
		"\x13\x05\x13\xD1\n\x13\x03\x14\x03\x14\x03\x14\x07\x14\xD6\n\x14\f\x14" +
		"\x0E\x14\xD9\v\x14\x03\x14\x05\x14\xDC\n\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x17\x07\x17\xE4\n\x17\f\x17\x0E\x17\xE7\v\x17\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x03\x19\x07\x19\xEE\n\x19\f\x19\x0E\x19\xF1\v" +
		"\x19\x03\x19\x04\xB7\xBE\x02\x02\x1A\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02\x02\x03\x03\x02" +
		"BB\x02\xFE\x025\x03\x02\x02\x02\x04;\x03\x02\x02\x02\x06G\x03\x02\x02" +
		"\x02\bZ\x03\x02\x02\x02\nc\x03\x02\x02\x02\fe\x03\x02\x02\x02\x0Eg\x03" +
		"\x02\x02\x02\x10j\x03\x02\x02\x02\x12m\x03\x02\x02\x02\x14t\x03\x02\x02" +
		"\x02\x16\x83\x03\x02\x02\x02\x18\x8B\x03\x02\x02\x02\x1A\x94\x03\x02\x02" +
		"\x02\x1C\x96\x03\x02\x02\x02\x1E\x9D\x03\x02\x02\x02 \xAC\x03\x02\x02" +
		"\x02\"\xB3\x03\x02\x02\x02$\xCC\x03\x02\x02\x02&\xD2\x03\x02\x02\x02(" +
		"\xDD\x03\x02\x02\x02*\xE0\x03\x02\x02\x02,\xE5\x03\x02\x02\x02.\xE8\x03" +
		"\x02\x02\x020\xEA\x03\x02\x02\x0224\x05\x16\f\x0232\x03\x02\x02\x0247" +
		"\x03\x02\x02\x0253\x03\x02\x02\x0256\x03\x02\x02\x026\x03\x03\x02\x02" +
		"\x0275\x03\x02\x02\x028:\x05\x12\n\x0298\x03\x02\x02\x02:=\x03\x02\x02" +
		"\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<A\x03\x02\x02\x02=;\x03\x02\x02" +
		"\x02>@\x05\x16\f\x02?>\x03\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02" +
		"\x02AB\x03\x02\x02\x02B\x05\x03\x02\x02\x02CA\x03\x02\x02\x02DF\x05\x1A" +
		"\x0E\x02ED\x03\x02\x02\x02FI\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02" +
		"\x02\x02HJ\x03\x02\x02\x02IG\x03\x02\x02\x02JK\x07\v\x02\x02KM\x05.\x18" +
		"\x02LN\x05\x1C\x0F\x02ML\x03\x02\x02\x02MN\x03\x02\x02\x02NP\x03\x02\x02" +
		"\x02OQ\x05\x0E\b\x02PO\x03\x02\x02\x02PQ\x03\x02\x02\x02QU\x03\x02\x02" +
		"\x02RT\x05\x10\t\x02SR\x03\x02\x02\x02TW\x03\x02\x02\x02US\x03\x02\x02" +
		"\x02UV\x03\x02\x02\x02VX\x03\x02\x02\x02WU\x03\x02\x02\x02XY\x05\b\x05" +
		"\x02Y\x07\x03\x02\x02\x02Z^\x07A\x02\x02[]\x05\x16\f\x02\\[\x03\x02\x02" +
		"\x02]`\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_a\x03\x02" +
		"\x02\x02`^\x03\x02\x02\x02ab\x07B\x02\x02b\t\x03\x02\x02\x02cd\x07A\x02" +
		"\x02d\v\x03\x02\x02\x02ef\x07B\x02\x02f\r\x03\x02\x02\x02gh\x07\x13\x02" +
		"\x02hi\x050\x19\x02i\x0F\x03\x02\x02\x02jk\x07\x1A\x02\x02kl\x050\x19" +
		"\x02l\x11\x03\x02\x02\x02mn\x07\x1B\x02\x02no\x050\x19\x02op\x07E\x02" +
		"\x02p\x13\x03\x02\x02\x02qs\x05\x1A\x0E\x02rq\x03\x02\x02\x02sv\x03\x02" +
		"\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02uw\x03\x02\x02\x02vt\x03\x02" +
		"\x02\x02wx\x07\x1E\x02\x02x}\x05.\x18\x02yz\x07\x1A\x02\x02z|\x050\x19" +
		"\x02{y\x03\x02\x02\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02" +
		"\x02\x02~\x80\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80\x81\x05\n\x06\x02" +
		"\x81\x15\x03\x02\x02\x02\x82\x84\x07o\x02\x02\x83\x82\x03\x02\x02\x02" +
		"\x83\x84\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86\x05\x18\r\x02" +
		"\x86\x17\x03\x02\x02\x02\x87\x8C\x05\x06\x04\x02\x88\x8C\x05\x14\v\x02" +
		"\x89\x8C\x05\x1E\x10\x02\x8A\x8C\x05 \x11\x02\x8B\x87\x03\x02\x02\x02" +
		"\x8B\x88\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8A\x03\x02\x02\x02" +
		"\x8C\x19\x03\x02\x02\x02\x8D\x95\x07%\x02\x02\x8E\x95\x07(\x02\x02\x8F" +
		"\x95\x07$\x02\x02\x90\x95\x07#\x02\x02\x91\x95\x07\x14\x02\x02\x92\x93" +
		"\x07l\x02\x02\x93\x95\x07q\x02\x02\x94\x8D\x03\x02\x02\x02\x94\x8E\x03" +
		"\x02\x02\x02\x94\x8F\x03\x02\x02\x02\x94\x90\x03\x02\x02\x02\x94\x91\x03" +
		"\x02\x02\x02\x94\x92\x03\x02\x02\x02\x95\x1B\x03\x02\x02\x02\x96\x97\x07" +
		"J\x02\x02\x97\x98\x07q\x02\x02\x98\x99\x07I\x02\x02\x99\x1D\x03\x02\x02" +
		"\x02\x9A\x9C\x05\x1A\x0E\x02\x9B\x9A\x03\x02\x02\x02\x9C\x9F\x03\x02\x02" +
		"\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA0\x03\x02\x02" +
		"\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA1\x05$\x13\x02\xA1\xA2\x05.\x18\x02" +
		"\xA2\xA4\x07?\x02\x02\xA3\xA5\x05&\x14\x02\xA4\xA3\x03\x02\x02\x02\xA4" +
		"\xA5\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7\x07@\x02\x02\xA7" +
		"\xA8\x05\"\x12\x02\xA8\x1F\x03\x02\x02\x02\xA9\xAB\x05\x1A\x0E\x02\xAA" +
		"\xA9\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC" +
		"\xAD\x03\x02\x02\x02\xAD\xAF\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAF" +
		"\xB0\x05$\x13\x02\xB0\xB1\x05.\x18\x02\xB1\xB2\x07E\x02\x02\xB2!\x03\x02" +
		"\x02\x02\xB3\xB7\x07A\x02\x02\xB4\xB6\v\x02\x02\x02\xB5\xB4\x03\x02\x02" +
		"\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB7\xB5\x03\x02\x02" +
		"\x02\xB8\xC1\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBE\x05\"\x12" +
		"\x02\xBB\xBD\v\x02\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\xC0\x03\x02\x02" +
		"\x02\xBE\xBF\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC2\x03\x02\x02" +
		"\x02\xC0\xBE\x03\x02\x02\x02\xC1\xBA\x03\x02\x02\x02\xC1\xC2\x03\x02\x02" +
		"\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x07B\x02\x02\xC4#\x03\x02\x02\x02" +
		"\xC5\xCD\x072\x02\x02\xC6\xCD\x07\x1D\x02\x02\xC7\xCD\x07\x1F\x02\x02" +
		"\xC8\xCD\x07\x10\x02\x02\xC9\xCD\x07\x16\x02\x02\xCA\xCD\x07\'\x02\x02" +
		"\xCB\xCD\x050\x19\x02\xCC\xC5\x03\x02\x02\x02\xCC\xC6\x03\x02\x02\x02" +
		"\xCC\xC7\x03\x02\x02\x02\xCC\xC8\x03\x02\x02\x02\xCC\xC9\x03\x02\x02\x02" +
		"\xCC\xCA\x03\x02\x02\x02\xCC\xCB\x03\x02\x02\x02\xCD\xD0\x03\x02\x02\x02" +
		"\xCE\xCF\x07C\x02\x02\xCF\xD1\x07D\x02\x02\xD0\xCE\x03\x02\x02\x02\xD0" +
		"\xD1\x03\x02\x02\x02\xD1%\x03\x02\x02\x02\xD2\xD7\x05(\x15\x02\xD3\xD4" +
		"\x07F\x02\x02\xD4\xD6\x05(\x15\x02\xD5\xD3\x03\x02\x02\x02\xD6\xD9\x03" +
		"\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xDB\x03" +
		"\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDC\x05(\x15\x02\xDB\xDA\x03" +
		"\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\'\x03\x02\x02\x02\xDD\xDE\x05" +
		"$\x13\x02\xDE\xDF\x07q\x02\x02\xDF)\x03\x02\x02\x02\xE0\xE1\x07o\x02\x02" +
		"\xE1+\x03\x02\x02\x02\xE2\xE4\n\x02\x02\x02\xE3\xE2\x03\x02\x02\x02\xE4" +
		"\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6" +
		"-\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xE9\x07q\x02\x02\xE9/\x03" +
		"\x02\x02\x02\xEA\xEF\x05.\x18\x02\xEB\xEC\x07G\x02\x02\xEC\xEE\x05.\x18" +
		"\x02\xED\xEB\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02\x02" +
		"\x02\xEF\xF0\x03\x02\x02\x02\xF01\x03\x02\x02\x02\xF1\xEF\x03\x02\x02" +
		"\x02\x1B5;AGMPU^t}\x83\x8B\x94\x9D\xA4\xAC\xB7\xBE\xC1\xCC\xD0\xD7\xDB" +
		"\xE5\xEF";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JavaParser.__ATN) {
			JavaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JavaParser._serializedATN));
		}

		return JavaParser.__ATN;
	}

}

export class JavaFileContext extends ParserRuleContext {
	public commentComponentPair(): CommentComponentPairContext[];
	public commentComponentPair(i: number): CommentComponentPairContext;
	public commentComponentPair(i?: number): CommentComponentPairContext | CommentComponentPairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentComponentPairContext);
		} else {
			return this.getRuleContext(i, CommentComponentPairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_javaFile; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterJavaFile) {
			listener.enterJavaFile(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitJavaFile) {
			listener.exitJavaFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitJavaFile) {
			return visitor.visitJavaFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AllRelevantComponentsContext extends ParserRuleContext {
	public importStatement(): ImportStatementContext[];
	public importStatement(i: number): ImportStatementContext;
	public importStatement(i?: number): ImportStatementContext | ImportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportStatementContext);
		} else {
			return this.getRuleContext(i, ImportStatementContext);
		}
	}
	public commentComponentPair(): CommentComponentPairContext[];
	public commentComponentPair(i: number): CommentComponentPairContext;
	public commentComponentPair(i?: number): CommentComponentPairContext | CommentComponentPairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentComponentPairContext);
		} else {
			return this.getRuleContext(i, CommentComponentPairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_allRelevantComponents; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterAllRelevantComponents) {
			listener.enterAllRelevantComponents(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitAllRelevantComponents) {
			listener.exitAllRelevantComponents(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitAllRelevantComponents) {
			return visitor.visitAllRelevantComponents(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDecContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(JavaParser.CLASS, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public classBlock(): ClassBlockContext {
		return this.getRuleContext(0, ClassBlockContext);
	}
	public modifierer(): ModifiererContext[];
	public modifierer(i: number): ModifiererContext;
	public modifierer(i?: number): ModifiererContext | ModifiererContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifiererContext);
		} else {
			return this.getRuleContext(i, ModifiererContext);
		}
	}
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
	}
	public extendsStatement(): ExtendsStatementContext | undefined {
		return this.tryGetRuleContext(0, ExtendsStatementContext);
	}
	public implementStatement(): ImplementStatementContext[];
	public implementStatement(i: number): ImplementStatementContext;
	public implementStatement(i?: number): ImplementStatementContext | ImplementStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImplementStatementContext);
		} else {
			return this.getRuleContext(i, ImplementStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classDec; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterClassDec) {
			listener.enterClassDec(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitClassDec) {
			listener.exitClassDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitClassDec) {
			return visitor.visitClassDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public commentComponentPair(): CommentComponentPairContext[];
	public commentComponentPair(i: number): CommentComponentPairContext;
	public commentComponentPair(i?: number): CommentComponentPairContext | CommentComponentPairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentComponentPairContext);
		} else {
			return this.getRuleContext(i, CommentComponentPairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classBlock; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterClassBlock) {
			listener.enterClassBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitClassBlock) {
			listener.exitClassBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitClassBlock) {
			return visitor.visitClassBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStartContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_blockStart; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterBlockStart) {
			listener.enterBlockStart(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitBlockStart) {
			listener.exitBlockStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitBlockStart) {
			return visitor.visitBlockStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockEndContext extends ParserRuleContext {
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_blockEnd; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterBlockEnd) {
			listener.enterBlockEnd(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitBlockEnd) {
			listener.exitBlockEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitBlockEnd) {
			return visitor.visitBlockEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtendsStatementContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.EXTENDS, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_extendsStatement; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterExtendsStatement) {
			listener.enterExtendsStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitExtendsStatement) {
			listener.exitExtendsStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitExtendsStatement) {
			return visitor.visitExtendsStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementStatementContext extends ParserRuleContext {
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IMPLEMENTS, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_implementStatement; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterImplementStatement) {
			listener.enterImplementStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitImplementStatement) {
			listener.exitImplementStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitImplementStatement) {
			return visitor.visitImplementStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(JavaParser.IMPORT, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(JavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_importStatement; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterImportStatement) {
			listener.enterImportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitImportStatement) {
			listener.exitImportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitImportStatement) {
			return visitor.visitImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDecContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(JavaParser.INTERFACE, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public blockStart(): BlockStartContext {
		return this.getRuleContext(0, BlockStartContext);
	}
	public modifierer(): ModifiererContext[];
	public modifierer(i: number): ModifiererContext;
	public modifierer(i?: number): ModifiererContext | ModifiererContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifiererContext);
		} else {
			return this.getRuleContext(i, ModifiererContext);
		}
	}
	public IMPLEMENTS(): TerminalNode[];
	public IMPLEMENTS(i: number): TerminalNode;
	public IMPLEMENTS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.IMPLEMENTS);
		} else {
			return this.getToken(JavaParser.IMPLEMENTS, i);
		}
	}
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceDec; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterInterfaceDec) {
			listener.enterInterfaceDec(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitInterfaceDec) {
			listener.exitInterfaceDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDec) {
			return visitor.visitInterfaceDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentComponentPairContext extends ParserRuleContext {
	public component(): ComponentContext {
		return this.getRuleContext(0, ComponentContext);
	}
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_commentComponentPair; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterCommentComponentPair) {
			listener.enterCommentComponentPair(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitCommentComponentPair) {
			listener.exitCommentComponentPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitCommentComponentPair) {
			return visitor.visitCommentComponentPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentContext extends ParserRuleContext {
	public classDec(): ClassDecContext | undefined {
		return this.tryGetRuleContext(0, ClassDecContext);
	}
	public interfaceDec(): InterfaceDecContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDecContext);
	}
	public methodDecl(): MethodDeclContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclContext);
	}
	public fieldDec(): FieldDecContext | undefined {
		return this.tryGetRuleContext(0, FieldDecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_component; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterComponent) {
			listener.enterComponent(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitComponent) {
			listener.exitComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitComponent) {
			return visitor.visitComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifiererContext extends ParserRuleContext {
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PUBLIC, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STATIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PRIVATE, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FINAL, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.AT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_modifierer; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterModifierer) {
			listener.enterModifierer(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitModifierer) {
			listener.exitModifierer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitModifierer) {
			return visitor.visitModifierer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(JavaParser.LT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public GT(): TerminalNode { return this.getToken(JavaParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_generics; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterGenerics) {
			listener.enterGenerics(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitGenerics) {
			listener.exitGenerics(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitGenerics) {
			return visitor.visitGenerics(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclContext extends ParserRuleContext {
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(JavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(JavaParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public modifierer(): ModifiererContext[];
	public modifierer(i: number): ModifiererContext;
	public modifierer(i?: number): ModifiererContext | ModifiererContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifiererContext);
		} else {
			return this.getRuleContext(i, ModifiererContext);
		}
	}
	public params(): ParamsContext | undefined {
		return this.tryGetRuleContext(0, ParamsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_methodDecl; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterMethodDecl) {
			listener.enterMethodDecl(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitMethodDecl) {
			listener.exitMethodDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitMethodDecl) {
			return visitor.visitMethodDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDecContext extends ParserRuleContext {
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public SEMI(): TerminalNode { return this.getToken(JavaParser.SEMI, 0); }
	public modifierer(): ModifiererContext[];
	public modifierer(i: number): ModifiererContext;
	public modifierer(i?: number): ModifiererContext | ModifiererContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifiererContext);
		} else {
			return this.getRuleContext(i, ModifiererContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_fieldDec; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterFieldDec) {
			listener.enterFieldDec(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitFieldDec) {
			listener.exitFieldDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitFieldDec) {
			return visitor.visitFieldDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(JavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(JavaParser.RBRACE, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_block; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataTypeContext extends ParserRuleContext {
	public VOID(): TerminalNode | undefined { return this.tryGetToken(JavaParser.VOID, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.INT, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LONG, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DOUBLE, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FLOAT, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SHORT, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_dataType; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterDataType) {
			listener.enterDataType(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitDataType) {
			listener.exitDataType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitDataType) {
			return visitor.visitDataType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamsContext extends ParserRuleContext {
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
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
	public get ruleIndex(): number { return JavaParser.RULE_params; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterParams) {
			listener.enterParams(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitParams) {
			listener.exitParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitParams) {
			return visitor.visitParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_param; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterParam) {
			listener.enterParam(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitParam) {
			listener.exitParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitParam) {
			return visitor.visitParam(this);
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
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotInterestingContext extends ParserRuleContext {
	public RBRACE(): TerminalNode[];
	public RBRACE(i: number): TerminalNode;
	public RBRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.RBRACE);
		} else {
			return this.getToken(JavaParser.RBRACE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_notInteresting; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterNotInteresting) {
			listener.enterNotInteresting(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitNotInteresting) {
			listener.exitNotInteresting(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitNotInteresting) {
			return visitor.visitNotInteresting(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_id; }
	// @Override
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
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
	public enterRule(listener: JavaParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


