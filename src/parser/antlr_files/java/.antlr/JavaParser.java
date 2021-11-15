// Generated from /home/compf/data/uni/sem7/javadoc_evaluator/src/parser/antlr_files/java/JavaParser.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class JavaParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		ABSTRACT=1, ASSERT=2, BOOLEAN=3, BREAK=4, BYTE=5, CASE=6, CATCH=7, CHAR=8, 
		CLASS=9, CONST=10, CONTINUE=11, DEFAULT=12, DO=13, DOUBLE=14, ELSE=15, 
		ENUM=16, EXTENDS=17, FINAL=18, FINALLY=19, FLOAT=20, FOR=21, IF=22, GOTO=23, 
		IMPLEMENTS=24, IMPORT=25, INSTANCEOF=26, INT=27, INTERFACE=28, LONG=29, 
		NATIVE=30, NEW=31, PACKAGE=32, PRIVATE=33, PROTECTED=34, PUBLIC=35, RETURN=36, 
		SHORT=37, STATIC=38, STRICTFP=39, SUPER=40, SWITCH=41, SYNCHRONIZED=42, 
		THIS=43, THROW=44, THROWS=45, TRANSIENT=46, TRY=47, VOID=48, VOLATILE=49, 
		WHILE=50, DECIMAL_LITERAL=51, HEX_LITERAL=52, OCT_LITERAL=53, BINARY_LITERAL=54, 
		FLOAT_LITERAL=55, HEX_FLOAT_LITERAL=56, BOOL_LITERAL=57, CHAR_LITERAL=58, 
		STRING_LITERAL=59, NULL_LITERAL=60, LPAREN=61, RPAREN=62, LBRACE=63, RBRACE=64, 
		LBRACK=65, RBRACK=66, SEMI=67, COMMA=68, DOT=69, ASSIGN=70, GT=71, LT=72, 
		BANG=73, TILDE=74, QUESTION=75, COLON=76, EQUAL=77, LE=78, GE=79, NOTEQUAL=80, 
		AND=81, OR=82, INC=83, DEC=84, ADD=85, SUB=86, MUL=87, DIV=88, BITAND=89, 
		BITOR=90, CARET=91, MOD=92, ADD_ASSIGN=93, SUB_ASSIGN=94, MUL_ASSIGN=95, 
		DIV_ASSIGN=96, AND_ASSIGN=97, OR_ASSIGN=98, XOR_ASSIGN=99, MOD_ASSIGN=100, 
		LSHIFT_ASSIGN=101, RSHIFT_ASSIGN=102, URSHIFT_ASSIGN=103, ARROW=104, COLONCOLON=105, 
		AT=106, ELLIPSIS=107, WS=108, JCOMMENT=109, COMMENT=110, LINE_COMMENT=111, 
		IDENTIFIER=112;
	public static final int
		RULE_compilationUnit = 0, RULE_packageDeclaration = 1, RULE_importDeclaration = 2, 
		RULE_typeDeclaration = 3, RULE_modifier = 4, RULE_classOrInterfaceModifier = 5, 
		RULE_variableModifier = 6, RULE_classDeclaration = 7, RULE_extendClass = 8, 
		RULE_implementInterfaces = 9, RULE_typeParameters = 10, RULE_typeParameter = 11, 
		RULE_typeBound = 12, RULE_enumDeclaration = 13, RULE_enumConstants = 14, 
		RULE_enumConstant = 15, RULE_enumBodyDeclarations = 16, RULE_interfaceDeclaration = 17, 
		RULE_extendInterface = 18, RULE_comment = 19, RULE_classBody = 20, RULE_interfaceBody = 21, 
		RULE_classBodyDeclaration = 22, RULE_memberDeclaration = 23, RULE_methodDeclaration = 24, 
		RULE_throwList = 25, RULE_methodBody = 26, RULE_typeTypeOrVoid = 27, RULE_genericMethodDeclaration = 28, 
		RULE_genericConstructorDeclaration = 29, RULE_constructorDeclaration = 30, 
		RULE_fieldDeclaration = 31, RULE_interfaceBodyDeclaration = 32, RULE_interfaceMemberDeclaration = 33, 
		RULE_constDeclaration = 34, RULE_constantDeclarator = 35, RULE_interfaceMethodDeclaration = 36, 
		RULE_interfaceMethodModifier = 37, RULE_genericInterfaceMethodDeclaration = 38, 
		RULE_variableDeclarators = 39, RULE_variableDeclarator = 40, RULE_variableDeclaratorId = 41, 
		RULE_variableInitializer = 42, RULE_arrayInitializer = 43, RULE_classOrInterfaceType = 44, 
		RULE_typeArgument = 45, RULE_qualifiedNameList = 46, RULE_formalParameters = 47, 
		RULE_formalParameterList = 48, RULE_formalParameter = 49, RULE_lastFormalParameter = 50, 
		RULE_qualifiedName = 51, RULE_literal = 52, RULE_integerLiteral = 53, 
		RULE_floatLiteral = 54, RULE_altAnnotationQualifiedName = 55, RULE_annotation = 56, 
		RULE_elementValuePairs = 57, RULE_elementValuePair = 58, RULE_elementValue = 59, 
		RULE_elementValueArrayInitializer = 60, RULE_annotationTypeDeclaration = 61, 
		RULE_annotationTypeBody = 62, RULE_annotationTypeElementDeclaration = 63, 
		RULE_annotationTypeElementRest = 64, RULE_annotationMethodOrConstantRest = 65, 
		RULE_annotationMethodRest = 66, RULE_annotationConstantRest = 67, RULE_defaultValue = 68, 
		RULE_block = 69, RULE_blockStatement = 70, RULE_localVariableDeclaration = 71, 
		RULE_localTypeDeclaration = 72, RULE_statement = 73, RULE_catchClause = 74, 
		RULE_catchType = 75, RULE_finallyBlock = 76, RULE_resourceSpecification = 77, 
		RULE_resources = 78, RULE_resource = 79, RULE_switchBlockStatementGroup = 80, 
		RULE_switchLabel = 81, RULE_forControl = 82, RULE_forInit = 83, RULE_enhancedForControl = 84, 
		RULE_parExpression = 85, RULE_expressionList = 86, RULE_methodCall = 87, 
		RULE_expression = 88, RULE_lambdaExpression = 89, RULE_lambdaParameters = 90, 
		RULE_lambdaBody = 91, RULE_primary = 92, RULE_classType = 93, RULE_creator = 94, 
		RULE_createdName = 95, RULE_innerCreator = 96, RULE_arrayCreatorRest = 97, 
		RULE_classCreatorRest = 98, RULE_explicitGenericInvocation = 99, RULE_typeArgumentsOrDiamond = 100, 
		RULE_nonWildcardTypeArgumentsOrDiamond = 101, RULE_nonWildcardTypeArguments = 102, 
		RULE_typeList = 103, RULE_typeType = 104, RULE_primitiveType = 105, RULE_typeArguments = 106, 
		RULE_superSuffix = 107, RULE_explicitGenericInvocationSuffix = 108, RULE_arguments = 109;
	private static String[] makeRuleNames() {
		return new String[] {
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
			"variableDeclarators", "variableDeclarator", "variableDeclaratorId", 
			"variableInitializer", "arrayInitializer", "classOrInterfaceType", "typeArgument", 
			"qualifiedNameList", "formalParameters", "formalParameterList", "formalParameter", 
			"lastFormalParameter", "qualifiedName", "literal", "integerLiteral", 
			"floatLiteral", "altAnnotationQualifiedName", "annotation", "elementValuePairs", 
			"elementValuePair", "elementValue", "elementValueArrayInitializer", "annotationTypeDeclaration", 
			"annotationTypeBody", "annotationTypeElementDeclaration", "annotationTypeElementRest", 
			"annotationMethodOrConstantRest", "annotationMethodRest", "annotationConstantRest", 
			"defaultValue", "block", "blockStatement", "localVariableDeclaration", 
			"localTypeDeclaration", "statement", "catchClause", "catchType", "finallyBlock", 
			"resourceSpecification", "resources", "resource", "switchBlockStatementGroup", 
			"switchLabel", "forControl", "forInit", "enhancedForControl", "parExpression", 
			"expressionList", "methodCall", "expression", "lambdaExpression", "lambdaParameters", 
			"lambdaBody", "primary", "classType", "creator", "createdName", "innerCreator", 
			"arrayCreatorRest", "classCreatorRest", "explicitGenericInvocation", 
			"typeArgumentsOrDiamond", "nonWildcardTypeArgumentsOrDiamond", "nonWildcardTypeArguments", 
			"typeList", "typeType", "primitiveType", "typeArguments", "superSuffix", 
			"explicitGenericInvocationSuffix", "arguments"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'abstract'", "'assert'", "'boolean'", "'break'", "'byte'", "'case'", 
			"'catch'", "'char'", "'class'", "'const'", "'continue'", "'default'", 
			"'do'", "'double'", "'else'", "'enum'", "'extends'", "'final'", "'finally'", 
			"'float'", "'for'", "'if'", "'goto'", "'implements'", "'import'", "'instanceof'", 
			"'int'", "'interface'", "'long'", "'native'", "'new'", "'package'", "'private'", 
			"'protected'", "'public'", "'return'", "'short'", "'static'", "'strictfp'", 
			"'super'", "'switch'", "'synchronized'", "'this'", "'throw'", "'throws'", 
			"'transient'", "'try'", "'void'", "'volatile'", "'while'", null, null, 
			null, null, null, null, null, null, null, "'null'", "'('", "')'", "'{'", 
			"'}'", "'['", "']'", "';'", "','", "'.'", "'='", "'>'", "'<'", "'!'", 
			"'~'", "'?'", "':'", "'=='", "'<='", "'>='", "'!='", "'&&'", "'||'", 
			"'++'", "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", "'%'", 
			"'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", "'%='", "'<<='", 
			"'>>='", "'>>>='", "'->'", "'::'", "'@'", "'...'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", "CASE", "CATCH", 
			"CHAR", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO", "DOUBLE", "ELSE", 
			"ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT", "FOR", "IF", "GOTO", 
			"IMPLEMENTS", "IMPORT", "INSTANCEOF", "INT", "INTERFACE", "LONG", "NATIVE", 
			"NEW", "PACKAGE", "PRIVATE", "PROTECTED", "PUBLIC", "RETURN", "SHORT", 
			"STATIC", "STRICTFP", "SUPER", "SWITCH", "SYNCHRONIZED", "THIS", "THROW", 
			"THROWS", "TRANSIENT", "TRY", "VOID", "VOLATILE", "WHILE", "DECIMAL_LITERAL", 
			"HEX_LITERAL", "OCT_LITERAL", "BINARY_LITERAL", "FLOAT_LITERAL", "HEX_FLOAT_LITERAL", 
			"BOOL_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", "NULL_LITERAL", "LPAREN", 
			"RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", 
			"ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL", 
			"LE", "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL", 
			"DIV", "BITAND", "BITOR", "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", 
			"MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", 
			"MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "ARROW", 
			"COLONCOLON", "AT", "ELLIPSIS", "WS", "JCOMMENT", "COMMENT", "LINE_COMMENT", 
			"IDENTIFIER"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "JavaParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public JavaParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class CompilationUnitContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(JavaParser.EOF, 0); }
		public PackageDeclarationContext packageDeclaration() {
			return getRuleContext(PackageDeclarationContext.class,0);
		}
		public List<ImportDeclarationContext> importDeclaration() {
			return getRuleContexts(ImportDeclarationContext.class);
		}
		public ImportDeclarationContext importDeclaration(int i) {
			return getRuleContext(ImportDeclarationContext.class,i);
		}
		public List<TypeDeclarationContext> typeDeclaration() {
			return getRuleContexts(TypeDeclarationContext.class);
		}
		public TypeDeclarationContext typeDeclaration(int i) {
			return getRuleContext(TypeDeclarationContext.class,i);
		}
		public CompilationUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compilationUnit; }
	}

	public final CompilationUnitContext compilationUnit() throws RecognitionException {
		CompilationUnitContext _localctx = new CompilationUnitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_compilationUnit);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(221);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				{
				setState(220);
				packageDeclaration();
				}
				break;
			}
			setState(226);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(223);
					importDeclaration();
					}
					} 
				}
				setState(228);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			}
			setState(232);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << CLASS) | (1L << ENUM) | (1L << FINAL) | (1L << INTERFACE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRICTFP))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (SEMI - 67)) | (1L << (AT - 67)) | (1L << (JCOMMENT - 67)) | (1L << (IDENTIFIER - 67)))) != 0)) {
				{
				{
				setState(229);
				typeDeclaration();
				}
				}
				setState(234);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(235);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PackageDeclarationContext extends ParserRuleContext {
		public TerminalNode PACKAGE() { return getToken(JavaParser.PACKAGE, 0); }
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(JavaParser.SEMI, 0); }
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public List<AnnotationContext> annotation() {
			return getRuleContexts(AnnotationContext.class);
		}
		public AnnotationContext annotation(int i) {
			return getRuleContext(AnnotationContext.class,i);
		}
		public PackageDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_packageDeclaration; }
	}

	public final PackageDeclarationContext packageDeclaration() throws RecognitionException {
		PackageDeclarationContext _localctx = new PackageDeclarationContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_packageDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==JCOMMENT) {
				{
				setState(237);
				comment();
				}
			}

			setState(243);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AT || _la==IDENTIFIER) {
				{
				{
				setState(240);
				annotation();
				}
				}
				setState(245);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(246);
			match(PACKAGE);
			setState(247);
			qualifiedName();
			setState(248);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportDeclarationContext extends ParserRuleContext {
		public TerminalNode IMPORT() { return getToken(JavaParser.IMPORT, 0); }
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(JavaParser.SEMI, 0); }
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public TerminalNode STATIC() { return getToken(JavaParser.STATIC, 0); }
		public TerminalNode DOT() { return getToken(JavaParser.DOT, 0); }
		public TerminalNode MUL() { return getToken(JavaParser.MUL, 0); }
		public ImportDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importDeclaration; }
	}

	public final ImportDeclarationContext importDeclaration() throws RecognitionException {
		ImportDeclarationContext _localctx = new ImportDeclarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_importDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(251);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==JCOMMENT) {
				{
				setState(250);
				comment();
				}
			}

			setState(253);
			match(IMPORT);
			setState(255);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STATIC) {
				{
				setState(254);
				match(STATIC);
				}
			}

			setState(257);
			qualifiedName();
			setState(260);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOT) {
				{
				setState(258);
				match(DOT);
				setState(259);
				match(MUL);
				}
			}

			setState(262);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeDeclarationContext extends ParserRuleContext {
		public ClassDeclarationContext classDeclaration() {
			return getRuleContext(ClassDeclarationContext.class,0);
		}
		public EnumDeclarationContext enumDeclaration() {
			return getRuleContext(EnumDeclarationContext.class,0);
		}
		public InterfaceDeclarationContext interfaceDeclaration() {
			return getRuleContext(InterfaceDeclarationContext.class,0);
		}
		public AnnotationTypeDeclarationContext annotationTypeDeclaration() {
			return getRuleContext(AnnotationTypeDeclarationContext.class,0);
		}
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public List<ClassOrInterfaceModifierContext> classOrInterfaceModifier() {
			return getRuleContexts(ClassOrInterfaceModifierContext.class);
		}
		public ClassOrInterfaceModifierContext classOrInterfaceModifier(int i) {
			return getRuleContext(ClassOrInterfaceModifierContext.class,i);
		}
		public TerminalNode SEMI() { return getToken(JavaParser.SEMI, 0); }
		public TypeDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeDeclaration; }
	}

	public final TypeDeclarationContext typeDeclaration() throws RecognitionException {
		TypeDeclarationContext _localctx = new TypeDeclarationContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_typeDeclaration);
		int _la;
		try {
			int _alt;
			setState(280);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ABSTRACT:
			case CLASS:
			case ENUM:
			case FINAL:
			case INTERFACE:
			case PRIVATE:
			case PROTECTED:
			case PUBLIC:
			case STATIC:
			case STRICTFP:
			case AT:
			case JCOMMENT:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(265);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==JCOMMENT) {
					{
					setState(264);
					comment();
					}
				}

				setState(270);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(267);
						classOrInterfaceModifier();
						}
						} 
					}
					setState(272);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
				}
				setState(277);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case CLASS:
					{
					setState(273);
					classDeclaration();
					}
					break;
				case ENUM:
					{
					setState(274);
					enumDeclaration();
					}
					break;
				case INTERFACE:
					{
					setState(275);
					interfaceDeclaration();
					}
					break;
				case AT:
					{
					setState(276);
					annotationTypeDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case SEMI:
				enterOuterAlt(_localctx, 2);
				{
				setState(279);
				match(SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ModifierContext extends ParserRuleContext {
		public ClassOrInterfaceModifierContext classOrInterfaceModifier() {
			return getRuleContext(ClassOrInterfaceModifierContext.class,0);
		}
		public TerminalNode NATIVE() { return getToken(JavaParser.NATIVE, 0); }
		public TerminalNode SYNCHRONIZED() { return getToken(JavaParser.SYNCHRONIZED, 0); }
		public TerminalNode TRANSIENT() { return getToken(JavaParser.TRANSIENT, 0); }
		public TerminalNode VOLATILE() { return getToken(JavaParser.VOLATILE, 0); }
		public ModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_modifier; }
	}

	public final ModifierContext modifier() throws RecognitionException {
		ModifierContext _localctx = new ModifierContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_modifier);
		try {
			setState(287);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ABSTRACT:
			case FINAL:
			case PRIVATE:
			case PROTECTED:
			case PUBLIC:
			case STATIC:
			case STRICTFP:
			case AT:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(282);
				classOrInterfaceModifier();
				}
				break;
			case NATIVE:
				enterOuterAlt(_localctx, 2);
				{
				setState(283);
				match(NATIVE);
				}
				break;
			case SYNCHRONIZED:
				enterOuterAlt(_localctx, 3);
				{
				setState(284);
				match(SYNCHRONIZED);
				}
				break;
			case TRANSIENT:
				enterOuterAlt(_localctx, 4);
				{
				setState(285);
				match(TRANSIENT);
				}
				break;
			case VOLATILE:
				enterOuterAlt(_localctx, 5);
				{
				setState(286);
				match(VOLATILE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassOrInterfaceModifierContext extends ParserRuleContext {
		public AnnotationContext annotation() {
			return getRuleContext(AnnotationContext.class,0);
		}
		public TerminalNode PUBLIC() { return getToken(JavaParser.PUBLIC, 0); }
		public TerminalNode PROTECTED() { return getToken(JavaParser.PROTECTED, 0); }
		public TerminalNode PRIVATE() { return getToken(JavaParser.PRIVATE, 0); }
		public TerminalNode STATIC() { return getToken(JavaParser.STATIC, 0); }
		public TerminalNode ABSTRACT() { return getToken(JavaParser.ABSTRACT, 0); }
		public TerminalNode FINAL() { return getToken(JavaParser.FINAL, 0); }
		public TerminalNode STRICTFP() { return getToken(JavaParser.STRICTFP, 0); }
		public ClassOrInterfaceModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classOrInterfaceModifier; }
	}

	public final ClassOrInterfaceModifierContext classOrInterfaceModifier() throws RecognitionException {
		ClassOrInterfaceModifierContext _localctx = new ClassOrInterfaceModifierContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_classOrInterfaceModifier);
		try {
			setState(297);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AT:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(289);
				annotation();
				}
				break;
			case PUBLIC:
				enterOuterAlt(_localctx, 2);
				{
				setState(290);
				match(PUBLIC);
				}
				break;
			case PROTECTED:
				enterOuterAlt(_localctx, 3);
				{
				setState(291);
				match(PROTECTED);
				}
				break;
			case PRIVATE:
				enterOuterAlt(_localctx, 4);
				{
				setState(292);
				match(PRIVATE);
				}
				break;
			case STATIC:
				enterOuterAlt(_localctx, 5);
				{
				setState(293);
				match(STATIC);
				}
				break;
			case ABSTRACT:
				enterOuterAlt(_localctx, 6);
				{
				setState(294);
				match(ABSTRACT);
				}
				break;
			case FINAL:
				enterOuterAlt(_localctx, 7);
				{
				setState(295);
				match(FINAL);
				}
				break;
			case STRICTFP:
				enterOuterAlt(_localctx, 8);
				{
				setState(296);
				match(STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableModifierContext extends ParserRuleContext {
		public TerminalNode FINAL() { return getToken(JavaParser.FINAL, 0); }
		public AnnotationContext annotation() {
			return getRuleContext(AnnotationContext.class,0);
		}
		public VariableModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableModifier; }
	}

	public final VariableModifierContext variableModifier() throws RecognitionException {
		VariableModifierContext _localctx = new VariableModifierContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_variableModifier);
		try {
			setState(301);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FINAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(299);
				match(FINAL);
				}
				break;
			case AT:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 2);
				{
				setState(300);
				annotation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassDeclarationContext extends ParserRuleContext {
		public TerminalNode CLASS() { return getToken(JavaParser.CLASS, 0); }
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public ClassBodyContext classBody() {
			return getRuleContext(ClassBodyContext.class,0);
		}
		public TypeParametersContext typeParameters() {
			return getRuleContext(TypeParametersContext.class,0);
		}
		public ExtendClassContext extendClass() {
			return getRuleContext(ExtendClassContext.class,0);
		}
		public ImplementInterfacesContext implementInterfaces() {
			return getRuleContext(ImplementInterfacesContext.class,0);
		}
		public ClassDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classDeclaration; }
	}

	public final ClassDeclarationContext classDeclaration() throws RecognitionException {
		ClassDeclarationContext _localctx = new ClassDeclarationContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_classDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(303);
			match(CLASS);
			setState(304);
			match(IDENTIFIER);
			setState(306);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LT) {
				{
				setState(305);
				typeParameters();
				}
			}

			setState(309);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(308);
				extendClass();
				}
			}

			setState(312);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IMPLEMENTS) {
				{
				setState(311);
				implementInterfaces();
				}
			}

			setState(314);
			classBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExtendClassContext extends ParserRuleContext {
		public TerminalNode EXTENDS() { return getToken(JavaParser.EXTENDS, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public ExtendClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_extendClass; }
	}

	public final ExtendClassContext extendClass() throws RecognitionException {
		ExtendClassContext _localctx = new ExtendClassContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_extendClass);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(316);
			match(EXTENDS);
			setState(317);
			typeType();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImplementInterfacesContext extends ParserRuleContext {
		public TerminalNode IMPLEMENTS() { return getToken(JavaParser.IMPLEMENTS, 0); }
		public TypeListContext typeList() {
			return getRuleContext(TypeListContext.class,0);
		}
		public ImplementInterfacesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_implementInterfaces; }
	}

	public final ImplementInterfacesContext implementInterfaces() throws RecognitionException {
		ImplementInterfacesContext _localctx = new ImplementInterfacesContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_implementInterfaces);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(319);
			match(IMPLEMENTS);
			setState(320);
			typeList();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeParametersContext extends ParserRuleContext {
		public TerminalNode LT() { return getToken(JavaParser.LT, 0); }
		public List<TypeParameterContext> typeParameter() {
			return getRuleContexts(TypeParameterContext.class);
		}
		public TypeParameterContext typeParameter(int i) {
			return getRuleContext(TypeParameterContext.class,i);
		}
		public TerminalNode GT() { return getToken(JavaParser.GT, 0); }
		public List<TerminalNode> COMMA() { return getTokens(JavaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(JavaParser.COMMA, i);
		}
		public TypeParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeParameters; }
	}

	public final TypeParametersContext typeParameters() throws RecognitionException {
		TypeParametersContext _localctx = new TypeParametersContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_typeParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(322);
			match(LT);
			setState(323);
			typeParameter();
			setState(328);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(324);
				match(COMMA);
				setState(325);
				typeParameter();
				}
				}
				setState(330);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(331);
			match(GT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeParameterContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public List<AnnotationContext> annotation() {
			return getRuleContexts(AnnotationContext.class);
		}
		public AnnotationContext annotation(int i) {
			return getRuleContext(AnnotationContext.class,i);
		}
		public TerminalNode EXTENDS() { return getToken(JavaParser.EXTENDS, 0); }
		public TypeBoundContext typeBound() {
			return getRuleContext(TypeBoundContext.class,0);
		}
		public TypeParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeParameter; }
	}

	public final TypeParameterContext typeParameter() throws RecognitionException {
		TypeParameterContext _localctx = new TypeParameterContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_typeParameter);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(336);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(333);
					annotation();
					}
					} 
				}
				setState(338);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			}
			setState(339);
			match(IDENTIFIER);
			setState(348);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(340);
				match(EXTENDS);
				setState(344);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(341);
						annotation();
						}
						} 
					}
					setState(346);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
				}
				setState(347);
				typeBound();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeBoundContext extends ParserRuleContext {
		public List<TypeTypeContext> typeType() {
			return getRuleContexts(TypeTypeContext.class);
		}
		public TypeTypeContext typeType(int i) {
			return getRuleContext(TypeTypeContext.class,i);
		}
		public List<TerminalNode> BITAND() { return getTokens(JavaParser.BITAND); }
		public TerminalNode BITAND(int i) {
			return getToken(JavaParser.BITAND, i);
		}
		public TypeBoundContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeBound; }
	}

	public final TypeBoundContext typeBound() throws RecognitionException {
		TypeBoundContext _localctx = new TypeBoundContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_typeBound);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(350);
			typeType();
			setState(355);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==BITAND) {
				{
				{
				setState(351);
				match(BITAND);
				setState(352);
				typeType();
				}
				}
				setState(357);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumDeclarationContext extends ParserRuleContext {
		public TerminalNode ENUM() { return getToken(JavaParser.ENUM, 0); }
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public TerminalNode LBRACE() { return getToken(JavaParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(JavaParser.RBRACE, 0); }
		public TerminalNode IMPLEMENTS() { return getToken(JavaParser.IMPLEMENTS, 0); }
		public TypeListContext typeList() {
			return getRuleContext(TypeListContext.class,0);
		}
		public EnumConstantsContext enumConstants() {
			return getRuleContext(EnumConstantsContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(JavaParser.COMMA, 0); }
		public EnumBodyDeclarationsContext enumBodyDeclarations() {
			return getRuleContext(EnumBodyDeclarationsContext.class,0);
		}
		public EnumDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumDeclaration; }
	}

	public final EnumDeclarationContext enumDeclaration() throws RecognitionException {
		EnumDeclarationContext _localctx = new EnumDeclarationContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_enumDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(358);
			match(ENUM);
			setState(359);
			match(IDENTIFIER);
			setState(362);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IMPLEMENTS) {
				{
				setState(360);
				match(IMPLEMENTS);
				setState(361);
				typeList();
				}
			}

			setState(364);
			match(LBRACE);
			setState(366);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AT || _la==IDENTIFIER) {
				{
				setState(365);
				enumConstants();
				}
			}

			setState(369);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(368);
				match(COMMA);
				}
			}

			setState(372);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(371);
				enumBodyDeclarations();
				}
			}

			setState(374);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumConstantsContext extends ParserRuleContext {
		public List<EnumConstantContext> enumConstant() {
			return getRuleContexts(EnumConstantContext.class);
		}
		public EnumConstantContext enumConstant(int i) {
			return getRuleContext(EnumConstantContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(JavaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(JavaParser.COMMA, i);
		}
		public EnumConstantsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumConstants; }
	}

	public final EnumConstantsContext enumConstants() throws RecognitionException {
		EnumConstantsContext _localctx = new EnumConstantsContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_enumConstants);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(376);
			enumConstant();
			setState(381);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(377);
					match(COMMA);
					setState(378);
					enumConstant();
					}
					} 
				}
				setState(383);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumConstantContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public List<AnnotationContext> annotation() {
			return getRuleContexts(AnnotationContext.class);
		}
		public AnnotationContext annotation(int i) {
			return getRuleContext(AnnotationContext.class,i);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ClassBodyContext classBody() {
			return getRuleContext(ClassBodyContext.class,0);
		}
		public EnumConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumConstant; }
	}

	public final EnumConstantContext enumConstant() throws RecognitionException {
		EnumConstantContext _localctx = new EnumConstantContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_enumConstant);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(387);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(384);
					annotation();
					}
					} 
				}
				setState(389);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
			}
			setState(390);
			match(IDENTIFIER);
			setState(392);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(391);
				arguments();
				}
			}

			setState(395);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACE) {
				{
				setState(394);
				classBody();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumBodyDeclarationsContext extends ParserRuleContext {
		public TerminalNode SEMI() { return getToken(JavaParser.SEMI, 0); }
		public List<ClassBodyDeclarationContext> classBodyDeclaration() {
			return getRuleContexts(ClassBodyDeclarationContext.class);
		}
		public ClassBodyDeclarationContext classBodyDeclaration(int i) {
			return getRuleContext(ClassBodyDeclarationContext.class,i);
		}
		public EnumBodyDeclarationsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumBodyDeclarations; }
	}

	public final EnumBodyDeclarationsContext enumBodyDeclarations() throws RecognitionException {
		EnumBodyDeclarationsContext _localctx = new EnumBodyDeclarationsContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_enumBodyDeclarations);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(397);
			match(SEMI);
			setState(401);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << BOOLEAN) | (1L << BYTE) | (1L << CHAR) | (1L << CLASS) | (1L << DOUBLE) | (1L << ENUM) | (1L << FINAL) | (1L << FLOAT) | (1L << INT) | (1L << INTERFACE) | (1L << LONG) | (1L << NATIVE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << SHORT) | (1L << STATIC) | (1L << STRICTFP) | (1L << SYNCHRONIZED) | (1L << TRANSIENT) | (1L << VOID) | (1L << VOLATILE) | (1L << LBRACE))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (SEMI - 67)) | (1L << (LT - 67)) | (1L << (AT - 67)) | (1L << (JCOMMENT - 67)) | (1L << (IDENTIFIER - 67)))) != 0)) {
				{
				{
				setState(398);
				classBodyDeclaration();
				}
				}
				setState(403);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InterfaceDeclarationContext extends ParserRuleContext {
		public TerminalNode INTERFACE() { return getToken(JavaParser.INTERFACE, 0); }
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public InterfaceBodyContext interfaceBody() {
			return getRuleContext(InterfaceBodyContext.class,0);
		}
		public TypeParametersContext typeParameters() {
			return getRuleContext(TypeParametersContext.class,0);
		}
		public ExtendInterfaceContext extendInterface() {
			return getRuleContext(ExtendInterfaceContext.class,0);
		}
		public InterfaceDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interfaceDeclaration; }
	}

	public final InterfaceDeclarationContext interfaceDeclaration() throws RecognitionException {
		InterfaceDeclarationContext _localctx = new InterfaceDeclarationContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_interfaceDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(404);
			match(INTERFACE);
			setState(405);
			match(IDENTIFIER);
			setState(407);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LT) {
				{
				setState(406);
				typeParameters();
				}
			}

			setState(410);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(409);
				extendInterface();
				}
			}

			setState(412);
			interfaceBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExtendInterfaceContext extends ParserRuleContext {
		public TerminalNode EXTENDS() { return getToken(JavaParser.EXTENDS, 0); }
		public TypeListContext typeList() {
			return getRuleContext(TypeListContext.class,0);
		}
		public ExtendInterfaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_extendInterface; }
	}

	public final ExtendInterfaceContext extendInterface() throws RecognitionException {
		ExtendInterfaceContext _localctx = new ExtendInterfaceContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_extendInterface);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(414);
			match(EXTENDS);
			setState(415);
			typeList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CommentContext extends ParserRuleContext {
		public TerminalNode JCOMMENT() { return getToken(JavaParser.JCOMMENT, 0); }
		public CommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comment; }
	}

	public final CommentContext comment() throws RecognitionException {
		CommentContext _localctx = new CommentContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_comment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(417);
			match(JCOMMENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassBodyContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(JavaParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(JavaParser.RBRACE, 0); }
		public List<ClassBodyDeclarationContext> classBodyDeclaration() {
			return getRuleContexts(ClassBodyDeclarationContext.class);
		}
		public ClassBodyDeclarationContext classBodyDeclaration(int i) {
			return getRuleContext(ClassBodyDeclarationContext.class,i);
		}
		public ClassBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classBody; }
	}

	public final ClassBodyContext classBody() throws RecognitionException {
		ClassBodyContext _localctx = new ClassBodyContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_classBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(419);
			match(LBRACE);
			setState(423);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << BOOLEAN) | (1L << BYTE) | (1L << CHAR) | (1L << CLASS) | (1L << DOUBLE) | (1L << ENUM) | (1L << FINAL) | (1L << FLOAT) | (1L << INT) | (1L << INTERFACE) | (1L << LONG) | (1L << NATIVE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << SHORT) | (1L << STATIC) | (1L << STRICTFP) | (1L << SYNCHRONIZED) | (1L << TRANSIENT) | (1L << VOID) | (1L << VOLATILE) | (1L << LBRACE))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (SEMI - 67)) | (1L << (LT - 67)) | (1L << (AT - 67)) | (1L << (JCOMMENT - 67)) | (1L << (IDENTIFIER - 67)))) != 0)) {
				{
				{
				setState(420);
				classBodyDeclaration();
				}
				}
				setState(425);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(426);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InterfaceBodyContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(JavaParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(JavaParser.RBRACE, 0); }
		public List<InterfaceBodyDeclarationContext> interfaceBodyDeclaration() {
			return getRuleContexts(InterfaceBodyDeclarationContext.class);
		}
		public InterfaceBodyDeclarationContext interfaceBodyDeclaration(int i) {
			return getRuleContext(InterfaceBodyDeclarationContext.class,i);
		}
		public InterfaceBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interfaceBody; }
	}

	public final InterfaceBodyContext interfaceBody() throws RecognitionException {
		InterfaceBodyContext _localctx = new InterfaceBodyContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_interfaceBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(428);
			match(LBRACE);
			setState(432);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << BOOLEAN) | (1L << BYTE) | (1L << CHAR) | (1L << CLASS) | (1L << DEFAULT) | (1L << DOUBLE) | (1L << ENUM) | (1L << FINAL) | (1L << FLOAT) | (1L << INT) | (1L << INTERFACE) | (1L << LONG) | (1L << NATIVE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << SHORT) | (1L << STATIC) | (1L << STRICTFP) | (1L << SYNCHRONIZED) | (1L << TRANSIENT) | (1L << VOID) | (1L << VOLATILE))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (SEMI - 67)) | (1L << (LT - 67)) | (1L << (AT - 67)) | (1L << (JCOMMENT - 67)) | (1L << (IDENTIFIER - 67)))) != 0)) {
				{
				{
				setState(429);
				interfaceBodyDeclaration();
				}
				}
				setState(434);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(435);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassBodyDeclarationContext extends ParserRuleContext {
		public TerminalNode SEMI() { return getToken(JavaParser.SEMI, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode STATIC() { return getToken(JavaParser.STATIC, 0); }
		public MemberDeclarationContext memberDeclaration() {
			return getRuleContext(MemberDeclarationContext.class,0);
		}
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public List<ModifierContext> modifier() {
			return getRuleContexts(ModifierContext.class);
		}
		public ModifierContext modifier(int i) {
			return getRuleContext(ModifierContext.class,i);
		}
		public ClassBodyDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classBodyDeclaration; }
	}

	public final ClassBodyDeclarationContext classBodyDeclaration() throws RecognitionException {
		ClassBodyDeclarationContext _localctx = new ClassBodyDeclarationContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_classBodyDeclaration);
		int _la;
		try {
			int _alt;
			setState(452);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(437);
				match(SEMI);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(439);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==STATIC) {
					{
					setState(438);
					match(STATIC);
					}
				}

				setState(441);
				block();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(443);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==JCOMMENT) {
					{
					setState(442);
					comment();
					}
				}

				setState(448);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,38,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(445);
						modifier();
						}
						} 
					}
					setState(450);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,38,_ctx);
				}
				setState(451);
				memberDeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MemberDeclarationContext extends ParserRuleContext {
		public MethodDeclarationContext methodDeclaration() {
			return getRuleContext(MethodDeclarationContext.class,0);
		}
		public GenericMethodDeclarationContext genericMethodDeclaration() {
			return getRuleContext(GenericMethodDeclarationContext.class,0);
		}
		public FieldDeclarationContext fieldDeclaration() {
			return getRuleContext(FieldDeclarationContext.class,0);
		}
		public ConstructorDeclarationContext constructorDeclaration() {
			return getRuleContext(ConstructorDeclarationContext.class,0);
		}
		public GenericConstructorDeclarationContext genericConstructorDeclaration() {
			return getRuleContext(GenericConstructorDeclarationContext.class,0);
		}
		public InterfaceDeclarationContext interfaceDeclaration() {
			return getRuleContext(InterfaceDeclarationContext.class,0);
		}
		public AnnotationTypeDeclarationContext annotationTypeDeclaration() {
			return getRuleContext(AnnotationTypeDeclarationContext.class,0);
		}
		public ClassDeclarationContext classDeclaration() {
			return getRuleContext(ClassDeclarationContext.class,0);
		}
		public EnumDeclarationContext enumDeclaration() {
			return getRuleContext(EnumDeclarationContext.class,0);
		}
		public MemberDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_memberDeclaration; }
	}

	public final MemberDeclarationContext memberDeclaration() throws RecognitionException {
		MemberDeclarationContext _localctx = new MemberDeclarationContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_memberDeclaration);
		try {
			setState(463);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(454);
				methodDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(455);
				genericMethodDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(456);
				fieldDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(457);
				constructorDeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(458);
				genericConstructorDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(459);
				interfaceDeclaration();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(460);
				annotationTypeDeclaration();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(461);
				classDeclaration();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(462);
				enumDeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodDeclarationContext extends ParserRuleContext {
		public TypeTypeOrVoidContext typeTypeOrVoid() {
			return getRuleContext(TypeTypeOrVoidContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public FormalParametersContext formalParameters() {
			return getRuleContext(FormalParametersContext.class,0);
		}
		public MethodBodyContext methodBody() {
			return getRuleContext(MethodBodyContext.class,0);
		}
		public List<TerminalNode> LBRACK() { return getTokens(JavaParser.LBRACK); }
		public TerminalNode LBRACK(int i) {
			return getToken(JavaParser.LBRACK, i);
		}
		public List<TerminalNode> RBRACK() { return getTokens(JavaParser.RBRACK); }
		public TerminalNode RBRACK(int i) {
			return getToken(JavaParser.RBRACK, i);
		}
		public ThrowListContext throwList() {
			return getRuleContext(ThrowListContext.class,0);
		}
		public MethodDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodDeclaration; }
	}

	public final MethodDeclarationContext methodDeclaration() throws RecognitionException {
		MethodDeclarationContext _localctx = new MethodDeclarationContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_methodDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(465);
			typeTypeOrVoid();
			setState(466);
			match(IDENTIFIER);
			setState(467);
			formalParameters();
			setState(472);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LBRACK) {
				{
				{
				setState(468);
				match(LBRACK);
				setState(469);
				match(RBRACK);
				}
				}
				setState(474);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(476);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==THROWS) {
				{
				setState(475);
				throwList();
				}
			}

			setState(478);
			methodBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ThrowListContext extends ParserRuleContext {
		public TerminalNode THROWS() { return getToken(JavaParser.THROWS, 0); }
		public QualifiedNameListContext qualifiedNameList() {
			return getRuleContext(QualifiedNameListContext.class,0);
		}
		public ThrowListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_throwList; }
	}

	public final ThrowListContext throwList() throws RecognitionException {
		ThrowListContext _localctx = new ThrowListContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_throwList);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(480);
			match(THROWS);
			setState(481);
			qualifiedNameList();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodBodyContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(JavaParser.SEMI, 0); }
		public MethodBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodBody; }
	}

	public final MethodBodyContext methodBody() throws RecognitionException {
		MethodBodyContext _localctx = new MethodBodyContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_methodBody);
		try {
			setState(485);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACE:
				enterOuterAlt(_localctx, 1);
				{
				setState(483);
				block();
				}
				break;
			case SEMI:
				enterOuterAlt(_localctx, 2);
				{
				setState(484);
				match(SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeTypeOrVoidContext extends ParserRuleContext {
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TerminalNode VOID() { return getToken(JavaParser.VOID, 0); }
		public TypeTypeOrVoidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeTypeOrVoid; }
	}

	public final TypeTypeOrVoidContext typeTypeOrVoid() throws RecognitionException {
		TypeTypeOrVoidContext _localctx = new TypeTypeOrVoidContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_typeTypeOrVoid);
		try {
			setState(489);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOLEAN:
			case BYTE:
			case CHAR:
			case DOUBLE:
			case FLOAT:
			case INT:
			case LONG:
			case SHORT:
			case AT:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(487);
				typeType();
				}
				break;
			case VOID:
				enterOuterAlt(_localctx, 2);
				{
				setState(488);
				match(VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GenericMethodDeclarationContext extends ParserRuleContext {
		public TypeParametersContext typeParameters() {
			return getRuleContext(TypeParametersContext.class,0);
		}
		public MethodDeclarationContext methodDeclaration() {
			return getRuleContext(MethodDeclarationContext.class,0);
		}
		public GenericMethodDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericMethodDeclaration; }
	}

	public final GenericMethodDeclarationContext genericMethodDeclaration() throws RecognitionException {
		GenericMethodDeclarationContext _localctx = new GenericMethodDeclarationContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_genericMethodDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(491);
			typeParameters();
			setState(492);
			methodDeclaration();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GenericConstructorDeclarationContext extends ParserRuleContext {
		public TypeParametersContext typeParameters() {
			return getRuleContext(TypeParametersContext.class,0);
		}
		public ConstructorDeclarationContext constructorDeclaration() {
			return getRuleContext(ConstructorDeclarationContext.class,0);
		}
		public GenericConstructorDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericConstructorDeclaration; }
	}

	public final GenericConstructorDeclarationContext genericConstructorDeclaration() throws RecognitionException {
		GenericConstructorDeclarationContext _localctx = new GenericConstructorDeclarationContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_genericConstructorDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(494);
			typeParameters();
			setState(495);
			constructorDeclaration();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstructorDeclarationContext extends ParserRuleContext {
		public BlockContext constructorBody;
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public FormalParametersContext formalParameters() {
			return getRuleContext(FormalParametersContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode THROWS() { return getToken(JavaParser.THROWS, 0); }
		public QualifiedNameListContext qualifiedNameList() {
			return getRuleContext(QualifiedNameListContext.class,0);
		}
		public ConstructorDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constructorDeclaration; }
	}

	public final ConstructorDeclarationContext constructorDeclaration() throws RecognitionException {
		ConstructorDeclarationContext _localctx = new ConstructorDeclarationContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_constructorDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(497);
			match(IDENTIFIER);
			setState(498);
			formalParameters();
			setState(501);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==THROWS) {
				{
				setState(499);
				match(THROWS);
				setState(500);
				qualifiedNameList();
				}
			}

			setState(503);
			((ConstructorDeclarationContext)_localctx).constructorBody = block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldDeclarationContext extends ParserRuleContext {
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public VariableDeclaratorsContext variableDeclarators() {
			return getRuleContext(VariableDeclaratorsContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(JavaParser.SEMI, 0); }
		public FieldDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldDeclaration; }
	}

	public final FieldDeclarationContext fieldDeclaration() throws RecognitionException {
		FieldDeclarationContext _localctx = new FieldDeclarationContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_fieldDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(505);
			typeType();
			setState(506);
			variableDeclarators();
			setState(507);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InterfaceBodyDeclarationContext extends ParserRuleContext {
		public InterfaceMemberDeclarationContext interfaceMemberDeclaration() {
			return getRuleContext(InterfaceMemberDeclarationContext.class,0);
		}
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public List<ModifierContext> modifier() {
			return getRuleContexts(ModifierContext.class);
		}
		public ModifierContext modifier(int i) {
			return getRuleContext(ModifierContext.class,i);
		}
		public TerminalNode SEMI() { return getToken(JavaParser.SEMI, 0); }
		public InterfaceBodyDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interfaceBodyDeclaration; }
	}

	public final InterfaceBodyDeclarationContext interfaceBodyDeclaration() throws RecognitionException {
		InterfaceBodyDeclarationContext _localctx = new InterfaceBodyDeclarationContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_interfaceBodyDeclaration);
		int _la;
		try {
			int _alt;
			setState(520);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ABSTRACT:
			case BOOLEAN:
			case BYTE:
			case CHAR:
			case CLASS:
			case DEFAULT:
			case DOUBLE:
			case ENUM:
			case FINAL:
			case FLOAT:
			case INT:
			case INTERFACE:
			case LONG:
			case NATIVE:
			case PRIVATE:
			case PROTECTED:
			case PUBLIC:
			case SHORT:
			case STATIC:
			case STRICTFP:
			case SYNCHRONIZED:
			case TRANSIENT:
			case VOID:
			case VOLATILE:
			case LT:
			case AT:
			case JCOMMENT:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(510);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==JCOMMENT) {
					{
					setState(509);
					comment();
					}
				}

				setState(515);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,47,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(512);
						modifier();
						}
						} 
					}
					setState(517);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,47,_ctx);
				}
				setState(518);
				interfaceMemberDeclaration();
				}
				break;
			case SEMI:
				enterOuterAlt(_localctx, 2);
				{
				setState(519);
				match(SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InterfaceMemberDeclarationContext extends ParserRuleContext {
		public ConstDeclarationContext constDeclaration() {
			return getRuleContext(ConstDeclarationContext.class,0);
		}
		public InterfaceMethodDeclarationContext interfaceMethodDeclaration() {
			return getRuleContext(InterfaceMethodDeclarationContext.class,0);
		}
		public GenericInterfaceMethodDeclarationContext genericInterfaceMethodDeclaration() {
			return getRuleContext(GenericInterfaceMethodDeclarationContext.class,0);
		}
		public InterfaceDeclarationContext interfaceDeclaration() {
			return getRuleContext(InterfaceDeclarationContext.class,0);
		}
		public AnnotationTypeDeclarationContext annotationTypeDeclaration() {
			return getRuleContext(AnnotationTypeDeclarationContext.class,0);
		}
		public ClassDeclarationContext classDeclaration() {
			return getRuleContext(ClassDeclarationContext.class,0);
		}
		public EnumDeclarationContext enumDeclaration() {
			return getRuleContext(EnumDeclarationContext.class,0);
		}
		public InterfaceMemberDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interfaceMemberDeclaration; }
	}

	public final InterfaceMemberDeclarationContext interfaceMemberDeclaration() throws RecognitionException {
		InterfaceMemberDeclarationContext _localctx = new InterfaceMemberDeclarationContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_interfaceMemberDeclaration);
		try {
			setState(529);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,49,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(522);
				constDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(523);
				interfaceMethodDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(524);
				genericInterfaceMethodDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(525);
				interfaceDeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(526);
				annotationTypeDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(527);
				classDeclaration();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(528);
				enumDeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstDeclarationContext extends ParserRuleContext {
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public List<ConstantDeclaratorContext> constantDeclarator() {
			return getRuleContexts(ConstantDeclaratorContext.class);
		}
		public ConstantDeclaratorContext constantDeclarator(int i) {
			return getRuleContext(ConstantDeclaratorContext.class,i);
		}
		public TerminalNode SEMI() { return getToken(JavaParser.SEMI, 0); }
		public List<TerminalNode> COMMA() { return getTokens(JavaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(JavaParser.COMMA, i);
		}
		public ConstDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constDeclaration; }
	}

	public final ConstDeclarationContext constDeclaration() throws RecognitionException {
		ConstDeclarationContext _localctx = new ConstDeclarationContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_constDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(531);
			typeType();
			setState(532);
			constantDeclarator();
			setState(537);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(533);
				match(COMMA);
				setState(534);
				constantDeclarator();
				}
				}
				setState(539);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(540);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstantDeclaratorContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public TerminalNode ASSIGN() { return getToken(JavaParser.ASSIGN, 0); }
		public VariableInitializerContext variableInitializer() {
			return getRuleContext(VariableInitializerContext.class,0);
		}
		public List<TerminalNode> LBRACK() { return getTokens(JavaParser.LBRACK); }
		public TerminalNode LBRACK(int i) {
			return getToken(JavaParser.LBRACK, i);
		}
		public List<TerminalNode> RBRACK() { return getTokens(JavaParser.RBRACK); }
		public TerminalNode RBRACK(int i) {
			return getToken(JavaParser.RBRACK, i);
		}
		public ConstantDeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantDeclarator; }
	}

	public final ConstantDeclaratorContext constantDeclarator() throws RecognitionException {
		ConstantDeclaratorContext _localctx = new ConstantDeclaratorContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_constantDeclarator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(542);
			match(IDENTIFIER);
			setState(547);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LBRACK) {
				{
				{
				setState(543);
				match(LBRACK);
				setState(544);
				match(RBRACK);
				}
				}
				setState(549);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(550);
			match(ASSIGN);
			setState(551);
			variableInitializer();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InterfaceMethodDeclarationContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public FormalParametersContext formalParameters() {
			return getRuleContext(FormalParametersContext.class,0);
		}
		public MethodBodyContext methodBody() {
			return getRuleContext(MethodBodyContext.class,0);
		}
		public TypeTypeOrVoidContext typeTypeOrVoid() {
			return getRuleContext(TypeTypeOrVoidContext.class,0);
		}
		public TypeParametersContext typeParameters() {
			return getRuleContext(TypeParametersContext.class,0);
		}
		public List<InterfaceMethodModifierContext> interfaceMethodModifier() {
			return getRuleContexts(InterfaceMethodModifierContext.class);
		}
		public InterfaceMethodModifierContext interfaceMethodModifier(int i) {
			return getRuleContext(InterfaceMethodModifierContext.class,i);
		}
		public List<TerminalNode> LBRACK() { return getTokens(JavaParser.LBRACK); }
		public TerminalNode LBRACK(int i) {
			return getToken(JavaParser.LBRACK, i);
		}
		public List<TerminalNode> RBRACK() { return getTokens(JavaParser.RBRACK); }
		public TerminalNode RBRACK(int i) {
			return getToken(JavaParser.RBRACK, i);
		}
		public ThrowListContext throwList() {
			return getRuleContext(ThrowListContext.class,0);
		}
		public List<AnnotationContext> annotation() {
			return getRuleContexts(AnnotationContext.class);
		}
		public AnnotationContext annotation(int i) {
			return getRuleContext(AnnotationContext.class,i);
		}
		public InterfaceMethodDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interfaceMethodDeclaration; }
	}

	public final InterfaceMethodDeclarationContext interfaceMethodDeclaration() throws RecognitionException {
		InterfaceMethodDeclarationContext _localctx = new InterfaceMethodDeclarationContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_interfaceMethodDeclaration);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(556);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,52,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(553);
					interfaceMethodModifier();
					}
					} 
				}
				setState(558);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,52,_ctx);
			}
			setState(569);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOLEAN:
			case BYTE:
			case CHAR:
			case DOUBLE:
			case FLOAT:
			case INT:
			case LONG:
			case SHORT:
			case VOID:
			case AT:
			case IDENTIFIER:
				{
				setState(559);
				typeTypeOrVoid();
				}
				break;
			case LT:
				{
				setState(560);
				typeParameters();
				setState(564);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,53,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(561);
						annotation();
						}
						} 
					}
					setState(566);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,53,_ctx);
				}
				setState(567);
				typeTypeOrVoid();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(571);
			match(IDENTIFIER);
			setState(572);
			formalParameters();
			setState(577);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LBRACK) {
				{
				{
				setState(573);
				match(LBRACK);
				setState(574);
				match(RBRACK);
				}
				}
				setState(579);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(581);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==THROWS) {
				{
				setState(580);
				throwList();
				}
			}

			setState(583);
			methodBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InterfaceMethodModifierContext extends ParserRuleContext {
		public AnnotationContext annotation() {
			return getRuleContext(AnnotationContext.class,0);
		}
		public TerminalNode PUBLIC() { return getToken(JavaParser.PUBLIC, 0); }
		public TerminalNode ABSTRACT() { return getToken(JavaParser.ABSTRACT, 0); }
		public TerminalNode DEFAULT() { return getToken(JavaParser.DEFAULT, 0); }
		public TerminalNode STATIC() { return getToken(JavaParser.STATIC, 0); }
		public TerminalNode STRICTFP() { return getToken(JavaParser.STRICTFP, 0); }
		public InterfaceMethodModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interfaceMethodModifier; }
	}

	public final InterfaceMethodModifierContext interfaceMethodModifier() throws RecognitionException {
		InterfaceMethodModifierContext _localctx = new InterfaceMethodModifierContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_interfaceMethodModifier);
		try {
			setState(591);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AT:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(585);
				annotation();
				}
				break;
			case PUBLIC:
				enterOuterAlt(_localctx, 2);
				{
				setState(586);
				match(PUBLIC);
				}
				break;
			case ABSTRACT:
				enterOuterAlt(_localctx, 3);
				{
				setState(587);
				match(ABSTRACT);
				}
				break;
			case DEFAULT:
				enterOuterAlt(_localctx, 4);
				{
				setState(588);
				match(DEFAULT);
				}
				break;
			case STATIC:
				enterOuterAlt(_localctx, 5);
				{
				setState(589);
				match(STATIC);
				}
				break;
			case STRICTFP:
				enterOuterAlt(_localctx, 6);
				{
				setState(590);
				match(STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GenericInterfaceMethodDeclarationContext extends ParserRuleContext {
		public TypeParametersContext typeParameters() {
			return getRuleContext(TypeParametersContext.class,0);
		}
		public InterfaceMethodDeclarationContext interfaceMethodDeclaration() {
			return getRuleContext(InterfaceMethodDeclarationContext.class,0);
		}
		public GenericInterfaceMethodDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericInterfaceMethodDeclaration; }
	}

	public final GenericInterfaceMethodDeclarationContext genericInterfaceMethodDeclaration() throws RecognitionException {
		GenericInterfaceMethodDeclarationContext _localctx = new GenericInterfaceMethodDeclarationContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_genericInterfaceMethodDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(593);
			typeParameters();
			setState(594);
			interfaceMethodDeclaration();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclaratorsContext extends ParserRuleContext {
		public List<VariableDeclaratorContext> variableDeclarator() {
			return getRuleContexts(VariableDeclaratorContext.class);
		}
		public VariableDeclaratorContext variableDeclarator(int i) {
			return getRuleContext(VariableDeclaratorContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(JavaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(JavaParser.COMMA, i);
		}
		public VariableDeclaratorsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclarators; }
	}

	public final VariableDeclaratorsContext variableDeclarators() throws RecognitionException {
		VariableDeclaratorsContext _localctx = new VariableDeclaratorsContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_variableDeclarators);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(596);
			variableDeclarator();
			setState(601);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(597);
				match(COMMA);
				setState(598);
				variableDeclarator();
				}
				}
				setState(603);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclaratorContext extends ParserRuleContext {
		public VariableDeclaratorIdContext variableDeclaratorId() {
			return getRuleContext(VariableDeclaratorIdContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(JavaParser.ASSIGN, 0); }
		public VariableInitializerContext variableInitializer() {
			return getRuleContext(VariableInitializerContext.class,0);
		}
		public VariableDeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclarator; }
	}

	public final VariableDeclaratorContext variableDeclarator() throws RecognitionException {
		VariableDeclaratorContext _localctx = new VariableDeclaratorContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_variableDeclarator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(604);
			variableDeclaratorId();
			setState(607);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASSIGN) {
				{
				setState(605);
				match(ASSIGN);
				setState(606);
				variableInitializer();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclaratorIdContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public List<TerminalNode> LBRACK() { return getTokens(JavaParser.LBRACK); }
		public TerminalNode LBRACK(int i) {
			return getToken(JavaParser.LBRACK, i);
		}
		public List<TerminalNode> RBRACK() { return getTokens(JavaParser.RBRACK); }
		public TerminalNode RBRACK(int i) {
			return getToken(JavaParser.RBRACK, i);
		}
		public VariableDeclaratorIdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaratorId; }
	}

	public final VariableDeclaratorIdContext variableDeclaratorId() throws RecognitionException {
		VariableDeclaratorIdContext _localctx = new VariableDeclaratorIdContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_variableDeclaratorId);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(609);
			match(IDENTIFIER);
			setState(614);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LBRACK) {
				{
				{
				setState(610);
				match(LBRACK);
				setState(611);
				match(RBRACK);
				}
				}
				setState(616);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableInitializerContext extends ParserRuleContext {
		public ArrayInitializerContext arrayInitializer() {
			return getRuleContext(ArrayInitializerContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public VariableInitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableInitializer; }
	}

	public final VariableInitializerContext variableInitializer() throws RecognitionException {
		VariableInitializerContext _localctx = new VariableInitializerContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_variableInitializer);
		try {
			setState(619);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACE:
				enterOuterAlt(_localctx, 1);
				{
				setState(617);
				arrayInitializer();
				}
				break;
			case BOOLEAN:
			case BYTE:
			case CHAR:
			case DOUBLE:
			case FLOAT:
			case INT:
			case LONG:
			case NEW:
			case SHORT:
			case SUPER:
			case THIS:
			case VOID:
			case DECIMAL_LITERAL:
			case HEX_LITERAL:
			case OCT_LITERAL:
			case BINARY_LITERAL:
			case FLOAT_LITERAL:
			case HEX_FLOAT_LITERAL:
			case BOOL_LITERAL:
			case CHAR_LITERAL:
			case STRING_LITERAL:
			case NULL_LITERAL:
			case LPAREN:
			case LT:
			case BANG:
			case TILDE:
			case INC:
			case DEC:
			case ADD:
			case SUB:
			case AT:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 2);
				{
				setState(618);
				expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayInitializerContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(JavaParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(JavaParser.RBRACE, 0); }
		public List<VariableInitializerContext> variableInitializer() {
			return getRuleContexts(VariableInitializerContext.class);
		}
		public VariableInitializerContext variableInitializer(int i) {
			return getRuleContext(VariableInitializerContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(JavaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(JavaParser.COMMA, i);
		}
		public ArrayInitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayInitializer; }
	}

	public final ArrayInitializerContext arrayInitializer() throws RecognitionException {
		ArrayInitializerContext _localctx = new ArrayInitializerContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_arrayInitializer);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(621);
			match(LBRACE);
			setState(633);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << BYTE) | (1L << CHAR) | (1L << DOUBLE) | (1L << FLOAT) | (1L << INT) | (1L << LONG) | (1L << NEW) | (1L << SHORT) | (1L << SUPER) | (1L << THIS) | (1L << VOID) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << CHAR_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << LPAREN) | (1L << LBRACE))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (LT - 72)) | (1L << (BANG - 72)) | (1L << (TILDE - 72)) | (1L << (INC - 72)) | (1L << (DEC - 72)) | (1L << (ADD - 72)) | (1L << (SUB - 72)) | (1L << (AT - 72)) | (1L << (IDENTIFIER - 72)))) != 0)) {
				{
				setState(622);
				variableInitializer();
				setState(627);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,62,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(623);
						match(COMMA);
						setState(624);
						variableInitializer();
						}
						} 
					}
					setState(629);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,62,_ctx);
				}
				setState(631);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(630);
					match(COMMA);
					}
				}

				}
			}

			setState(635);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassOrInterfaceTypeContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(JavaParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(JavaParser.IDENTIFIER, i);
		}
		public List<TypeArgumentsContext> typeArguments() {
			return getRuleContexts(TypeArgumentsContext.class);
		}
		public TypeArgumentsContext typeArguments(int i) {
			return getRuleContext(TypeArgumentsContext.class,i);
		}
		public List<TerminalNode> DOT() { return getTokens(JavaParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(JavaParser.DOT, i);
		}
		public ClassOrInterfaceTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classOrInterfaceType; }
	}

	public final ClassOrInterfaceTypeContext classOrInterfaceType() throws RecognitionException {
		ClassOrInterfaceTypeContext _localctx = new ClassOrInterfaceTypeContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_classOrInterfaceType);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(637);
			match(IDENTIFIER);
			setState(639);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,65,_ctx) ) {
			case 1:
				{
				setState(638);
				typeArguments();
				}
				break;
			}
			setState(648);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,67,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(641);
					match(DOT);
					setState(642);
					match(IDENTIFIER);
					setState(644);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,66,_ctx) ) {
					case 1:
						{
						setState(643);
						typeArguments();
						}
						break;
					}
					}
					} 
				}
				setState(650);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,67,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeArgumentContext extends ParserRuleContext {
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TerminalNode QUESTION() { return getToken(JavaParser.QUESTION, 0); }
		public List<AnnotationContext> annotation() {
			return getRuleContexts(AnnotationContext.class);
		}
		public AnnotationContext annotation(int i) {
			return getRuleContext(AnnotationContext.class,i);
		}
		public TerminalNode EXTENDS() { return getToken(JavaParser.EXTENDS, 0); }
		public TerminalNode SUPER() { return getToken(JavaParser.SUPER, 0); }
		public TypeArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeArgument; }
	}

	public final TypeArgumentContext typeArgument() throws RecognitionException {
		TypeArgumentContext _localctx = new TypeArgumentContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_typeArgument);
		int _la;
		try {
			setState(663);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,70,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(651);
				typeType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(655);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT || _la==IDENTIFIER) {
					{
					{
					setState(652);
					annotation();
					}
					}
					setState(657);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(658);
				match(QUESTION);
				setState(661);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EXTENDS || _la==SUPER) {
					{
					setState(659);
					_la = _input.LA(1);
					if ( !(_la==EXTENDS || _la==SUPER) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(660);
					typeType();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QualifiedNameListContext extends ParserRuleContext {
		public List<QualifiedNameContext> qualifiedName() {
			return getRuleContexts(QualifiedNameContext.class);
		}
		public QualifiedNameContext qualifiedName(int i) {
			return getRuleContext(QualifiedNameContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(JavaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(JavaParser.COMMA, i);
		}
		public QualifiedNameListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qualifiedNameList; }
	}

	public final QualifiedNameListContext qualifiedNameList() throws RecognitionException {
		QualifiedNameListContext _localctx = new QualifiedNameListContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_qualifiedNameList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(665);
			qualifiedName();
			setState(670);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(666);
				match(COMMA);
				setState(667);
				qualifiedName();
				}
				}
				setState(672);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParametersContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(JavaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(JavaParser.RPAREN, 0); }
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public FormalParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameters; }
	}

	public final FormalParametersContext formalParameters() throws RecognitionException {
		FormalParametersContext _localctx = new FormalParametersContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_formalParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(673);
			match(LPAREN);
			setState(675);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << BYTE) | (1L << CHAR) | (1L << DOUBLE) | (1L << FINAL) | (1L << FLOAT) | (1L << INT) | (1L << LONG) | (1L << SHORT))) != 0) || _la==AT || _la==IDENTIFIER) {
				{
				setState(674);
				formalParameterList();
				}
			}

			setState(677);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterListContext extends ParserRuleContext {
		public List<FormalParameterContext> formalParameter() {
			return getRuleContexts(FormalParameterContext.class);
		}
		public FormalParameterContext formalParameter(int i) {
			return getRuleContext(FormalParameterContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(JavaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(JavaParser.COMMA, i);
		}
		public LastFormalParameterContext lastFormalParameter() {
			return getRuleContext(LastFormalParameterContext.class,0);
		}
		public FormalParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterList; }
	}

	public final FormalParameterListContext formalParameterList() throws RecognitionException {
		FormalParameterListContext _localctx = new FormalParameterListContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_formalParameterList);
		int _la;
		try {
			int _alt;
			setState(692);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,75,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(679);
				formalParameter();
				setState(684);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,73,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(680);
						match(COMMA);
						setState(681);
						formalParameter();
						}
						} 
					}
					setState(686);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,73,_ctx);
				}
				setState(689);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(687);
					match(COMMA);
					setState(688);
					lastFormalParameter();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(691);
				lastFormalParameter();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterContext extends ParserRuleContext {
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public VariableDeclaratorIdContext variableDeclaratorId() {
			return getRuleContext(VariableDeclaratorIdContext.class,0);
		}
		public List<VariableModifierContext> variableModifier() {
			return getRuleContexts(VariableModifierContext.class);
		}
		public VariableModifierContext variableModifier(int i) {
			return getRuleContext(VariableModifierContext.class,i);
		}
		public FormalParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameter; }
	}

	public final FormalParameterContext formalParameter() throws RecognitionException {
		FormalParameterContext _localctx = new FormalParameterContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_formalParameter);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(697);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,76,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(694);
					variableModifier();
					}
					} 
				}
				setState(699);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,76,_ctx);
			}
			setState(700);
			typeType();
			setState(701);
			variableDeclaratorId();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LastFormalParameterContext extends ParserRuleContext {
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TerminalNode ELLIPSIS() { return getToken(JavaParser.ELLIPSIS, 0); }
		public VariableDeclaratorIdContext variableDeclaratorId() {
			return getRuleContext(VariableDeclaratorIdContext.class,0);
		}
		public List<VariableModifierContext> variableModifier() {
			return getRuleContexts(VariableModifierContext.class);
		}
		public VariableModifierContext variableModifier(int i) {
			return getRuleContext(VariableModifierContext.class,i);
		}
		public List<AnnotationContext> annotation() {
			return getRuleContexts(AnnotationContext.class);
		}
		public AnnotationContext annotation(int i) {
			return getRuleContext(AnnotationContext.class,i);
		}
		public LastFormalParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lastFormalParameter; }
	}

	public final LastFormalParameterContext lastFormalParameter() throws RecognitionException {
		LastFormalParameterContext _localctx = new LastFormalParameterContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_lastFormalParameter);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(706);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,77,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(703);
					variableModifier();
					}
					} 
				}
				setState(708);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,77,_ctx);
			}
			setState(709);
			typeType();
			setState(713);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AT || _la==IDENTIFIER) {
				{
				{
				setState(710);
				annotation();
				}
				}
				setState(715);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(716);
			match(ELLIPSIS);
			setState(717);
			variableDeclaratorId();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QualifiedNameContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(JavaParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(JavaParser.IDENTIFIER, i);
		}
		public List<TerminalNode> DOT() { return getTokens(JavaParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(JavaParser.DOT, i);
		}
		public QualifiedNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qualifiedName; }
	}

	public final QualifiedNameContext qualifiedName() throws RecognitionException {
		QualifiedNameContext _localctx = new QualifiedNameContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_qualifiedName);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(719);
			match(IDENTIFIER);
			setState(724);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,79,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(720);
					match(DOT);
					setState(721);
					match(IDENTIFIER);
					}
					} 
				}
				setState(726);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,79,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public IntegerLiteralContext integerLiteral() {
			return getRuleContext(IntegerLiteralContext.class,0);
		}
		public FloatLiteralContext floatLiteral() {
			return getRuleContext(FloatLiteralContext.class,0);
		}
		public TerminalNode CHAR_LITERAL() { return getToken(JavaParser.CHAR_LITERAL, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(JavaParser.STRING_LITERAL, 0); }
		public TerminalNode BOOL_LITERAL() { return getToken(JavaParser.BOOL_LITERAL, 0); }
		public TerminalNode NULL_LITERAL() { return getToken(JavaParser.NULL_LITERAL, 0); }
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_literal);
		try {
			setState(733);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DECIMAL_LITERAL:
			case HEX_LITERAL:
			case OCT_LITERAL:
			case BINARY_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(727);
				integerLiteral();
				}
				break;
			case FLOAT_LITERAL:
			case HEX_FLOAT_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(728);
				floatLiteral();
				}
				break;
			case CHAR_LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(729);
				match(CHAR_LITERAL);
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(730);
				match(STRING_LITERAL);
				}
				break;
			case BOOL_LITERAL:
				enterOuterAlt(_localctx, 5);
				{
				setState(731);
				match(BOOL_LITERAL);
				}
				break;
			case NULL_LITERAL:
				enterOuterAlt(_localctx, 6);
				{
				setState(732);
				match(NULL_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntegerLiteralContext extends ParserRuleContext {
		public TerminalNode DECIMAL_LITERAL() { return getToken(JavaParser.DECIMAL_LITERAL, 0); }
		public TerminalNode HEX_LITERAL() { return getToken(JavaParser.HEX_LITERAL, 0); }
		public TerminalNode OCT_LITERAL() { return getToken(JavaParser.OCT_LITERAL, 0); }
		public TerminalNode BINARY_LITERAL() { return getToken(JavaParser.BINARY_LITERAL, 0); }
		public IntegerLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integerLiteral; }
	}

	public final IntegerLiteralContext integerLiteral() throws RecognitionException {
		IntegerLiteralContext _localctx = new IntegerLiteralContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_integerLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(735);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FloatLiteralContext extends ParserRuleContext {
		public TerminalNode FLOAT_LITERAL() { return getToken(JavaParser.FLOAT_LITERAL, 0); }
		public TerminalNode HEX_FLOAT_LITERAL() { return getToken(JavaParser.HEX_FLOAT_LITERAL, 0); }
		public FloatLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_floatLiteral; }
	}

	public final FloatLiteralContext floatLiteral() throws RecognitionException {
		FloatLiteralContext _localctx = new FloatLiteralContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_floatLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(737);
			_la = _input.LA(1);
			if ( !(_la==FLOAT_LITERAL || _la==HEX_FLOAT_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AltAnnotationQualifiedNameContext extends ParserRuleContext {
		public TerminalNode AT() { return getToken(JavaParser.AT, 0); }
		public List<TerminalNode> IDENTIFIER() { return getTokens(JavaParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(JavaParser.IDENTIFIER, i);
		}
		public List<TerminalNode> DOT() { return getTokens(JavaParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(JavaParser.DOT, i);
		}
		public AltAnnotationQualifiedNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_altAnnotationQualifiedName; }
	}

	public final AltAnnotationQualifiedNameContext altAnnotationQualifiedName() throws RecognitionException {
		AltAnnotationQualifiedNameContext _localctx = new AltAnnotationQualifiedNameContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_altAnnotationQualifiedName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(743);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IDENTIFIER) {
				{
				{
				setState(739);
				match(IDENTIFIER);
				setState(740);
				match(DOT);
				}
				}
				setState(745);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(746);
			match(AT);
			setState(747);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotationContext extends ParserRuleContext {
		public TerminalNode AT() { return getToken(JavaParser.AT, 0); }
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public AltAnnotationQualifiedNameContext altAnnotationQualifiedName() {
			return getRuleContext(AltAnnotationQualifiedNameContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(JavaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(JavaParser.RPAREN, 0); }
		public ElementValuePairsContext elementValuePairs() {
			return getRuleContext(ElementValuePairsContext.class,0);
		}
		public ElementValueContext elementValue() {
			return getRuleContext(ElementValueContext.class,0);
		}
		public AnnotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation; }
	}

	public final AnnotationContext annotation() throws RecognitionException {
		AnnotationContext _localctx = new AnnotationContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_annotation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(752);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,82,_ctx) ) {
			case 1:
				{
				setState(749);
				match(AT);
				setState(750);
				qualifiedName();
				}
				break;
			case 2:
				{
				setState(751);
				altAnnotationQualifiedName();
				}
				break;
			}
			setState(760);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(754);
				match(LPAREN);
				setState(757);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,83,_ctx) ) {
				case 1:
					{
					setState(755);
					elementValuePairs();
					}
					break;
				case 2:
					{
					setState(756);
					elementValue();
					}
					break;
				}
				setState(759);
				match(RPAREN);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementValuePairsContext extends ParserRuleContext {
		public List<ElementValuePairContext> elementValuePair() {
			return getRuleContexts(ElementValuePairContext.class);
		}
		public ElementValuePairContext elementValuePair(int i) {
			return getRuleContext(ElementValuePairContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(JavaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(JavaParser.COMMA, i);
		}
		public ElementValuePairsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementValuePairs; }
	}

	public final ElementValuePairsContext elementValuePairs() throws RecognitionException {
		ElementValuePairsContext _localctx = new ElementValuePairsContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_elementValuePairs);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(762);
			elementValuePair();
			setState(767);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(763);
				match(COMMA);
				setState(764);
				elementValuePair();
				}
				}
				setState(769);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementValuePairContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public TerminalNode ASSIGN() { return getToken(JavaParser.ASSIGN, 0); }
		public ElementValueContext elementValue() {
			return getRuleContext(ElementValueContext.class,0);
		}
		public ElementValuePairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementValuePair; }
	}

	public final ElementValuePairContext elementValuePair() throws RecognitionException {
		ElementValuePairContext _localctx = new ElementValuePairContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_elementValuePair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(770);
			match(IDENTIFIER);
			setState(771);
			match(ASSIGN);
			setState(772);
			elementValue();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementValueContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AnnotationContext annotation() {
			return getRuleContext(AnnotationContext.class,0);
		}
		public ElementValueArrayInitializerContext elementValueArrayInitializer() {
			return getRuleContext(ElementValueArrayInitializerContext.class,0);
		}
		public ElementValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementValue; }
	}

	public final ElementValueContext elementValue() throws RecognitionException {
		ElementValueContext _localctx = new ElementValueContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_elementValue);
		try {
			setState(777);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,86,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(774);
				expression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(775);
				annotation();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(776);
				elementValueArrayInitializer();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementValueArrayInitializerContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(JavaParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(JavaParser.RBRACE, 0); }
		public List<ElementValueContext> elementValue() {
			return getRuleContexts(ElementValueContext.class);
		}
		public ElementValueContext elementValue(int i) {
			return getRuleContext(ElementValueContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(JavaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(JavaParser.COMMA, i);
		}
		public ElementValueArrayInitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementValueArrayInitializer; }
	}

	public final ElementValueArrayInitializerContext elementValueArrayInitializer() throws RecognitionException {
		ElementValueArrayInitializerContext _localctx = new ElementValueArrayInitializerContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_elementValueArrayInitializer);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(779);
			match(LBRACE);
			setState(788);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << BYTE) | (1L << CHAR) | (1L << DOUBLE) | (1L << FLOAT) | (1L << INT) | (1L << LONG) | (1L << NEW) | (1L << SHORT) | (1L << SUPER) | (1L << THIS) | (1L << VOID) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << CHAR_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << LPAREN) | (1L << LBRACE))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (LT - 72)) | (1L << (BANG - 72)) | (1L << (TILDE - 72)) | (1L << (INC - 72)) | (1L << (DEC - 72)) | (1L << (ADD - 72)) | (1L << (SUB - 72)) | (1L << (AT - 72)) | (1L << (IDENTIFIER - 72)))) != 0)) {
				{
				setState(780);
				elementValue();
				setState(785);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,87,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(781);
						match(COMMA);
						setState(782);
						elementValue();
						}
						} 
					}
					setState(787);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,87,_ctx);
				}
				}
			}

			setState(791);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(790);
				match(COMMA);
				}
			}

			setState(793);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotationTypeDeclarationContext extends ParserRuleContext {
		public TerminalNode AT() { return getToken(JavaParser.AT, 0); }
		public TerminalNode INTERFACE() { return getToken(JavaParser.INTERFACE, 0); }
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public AnnotationTypeBodyContext annotationTypeBody() {
			return getRuleContext(AnnotationTypeBodyContext.class,0);
		}
		public AnnotationTypeDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotationTypeDeclaration; }
	}

	public final AnnotationTypeDeclarationContext annotationTypeDeclaration() throws RecognitionException {
		AnnotationTypeDeclarationContext _localctx = new AnnotationTypeDeclarationContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_annotationTypeDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(795);
			match(AT);
			setState(796);
			match(INTERFACE);
			setState(797);
			match(IDENTIFIER);
			setState(798);
			annotationTypeBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotationTypeBodyContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(JavaParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(JavaParser.RBRACE, 0); }
		public List<AnnotationTypeElementDeclarationContext> annotationTypeElementDeclaration() {
			return getRuleContexts(AnnotationTypeElementDeclarationContext.class);
		}
		public AnnotationTypeElementDeclarationContext annotationTypeElementDeclaration(int i) {
			return getRuleContext(AnnotationTypeElementDeclarationContext.class,i);
		}
		public AnnotationTypeBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotationTypeBody; }
	}

	public final AnnotationTypeBodyContext annotationTypeBody() throws RecognitionException {
		AnnotationTypeBodyContext _localctx = new AnnotationTypeBodyContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_annotationTypeBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(800);
			match(LBRACE);
			setState(804);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << BOOLEAN) | (1L << BYTE) | (1L << CHAR) | (1L << CLASS) | (1L << DOUBLE) | (1L << ENUM) | (1L << FINAL) | (1L << FLOAT) | (1L << INT) | (1L << INTERFACE) | (1L << LONG) | (1L << NATIVE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << SHORT) | (1L << STATIC) | (1L << STRICTFP) | (1L << SYNCHRONIZED) | (1L << TRANSIENT) | (1L << VOLATILE))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (SEMI - 67)) | (1L << (AT - 67)) | (1L << (IDENTIFIER - 67)))) != 0)) {
				{
				{
				setState(801);
				annotationTypeElementDeclaration();
				}
				}
				setState(806);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(807);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
		public AnnotationTypeElementRestContext annotationTypeElementRest() {
			return getRuleContext(AnnotationTypeElementRestContext.class,0);
		}
		public List<ModifierContext> modifier() {
			return getRuleContexts(ModifierContext.class);
		}
		public ModifierContext modifier(int i) {
			return getRuleContext(ModifierContext.class,i);
		}
		public TerminalNode SEMI() { return getToken(JavaParser.SEMI, 0); }
		public AnnotationTypeElementDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotationTypeElementDeclaration; }
	}

	public final AnnotationTypeElementDeclarationContext annotationTypeElementDeclaration() throws RecognitionException {
		AnnotationTypeElementDeclarationContext _localctx = new AnnotationTypeElementDeclarationContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_annotationTypeElementDeclaration);
		try {
			int _alt;
			setState(817);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ABSTRACT:
			case BOOLEAN:
			case BYTE:
			case CHAR:
			case CLASS:
			case DOUBLE:
			case ENUM:
			case FINAL:
			case FLOAT:
			case INT:
			case INTERFACE:
			case LONG:
			case NATIVE:
			case PRIVATE:
			case PROTECTED:
			case PUBLIC:
			case SHORT:
			case STATIC:
			case STRICTFP:
			case SYNCHRONIZED:
			case TRANSIENT:
			case VOLATILE:
			case AT:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(812);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,91,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(809);
						modifier();
						}
						} 
					}
					setState(814);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,91,_ctx);
				}
				setState(815);
				annotationTypeElementRest();
				}
				break;
			case SEMI:
				enterOuterAlt(_localctx, 2);
				{
				setState(816);
				match(SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotationTypeElementRestContext extends ParserRuleContext {
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public AnnotationMethodOrConstantRestContext annotationMethodOrConstantRest() {
			return getRuleContext(AnnotationMethodOrConstantRestContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(JavaParser.SEMI, 0); }
		public ClassDeclarationContext classDeclaration() {
			return getRuleContext(ClassDeclarationContext.class,0);
		}
		public InterfaceDeclarationContext interfaceDeclaration() {
			return getRuleContext(InterfaceDeclarationContext.class,0);
		}
		public EnumDeclarationContext enumDeclaration() {
			return getRuleContext(EnumDeclarationContext.class,0);
		}
		public AnnotationTypeDeclarationContext annotationTypeDeclaration() {
			return getRuleContext(AnnotationTypeDeclarationContext.class,0);
		}
		public AnnotationTypeElementRestContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotationTypeElementRest; }
	}

	public final AnnotationTypeElementRestContext annotationTypeElementRest() throws RecognitionException {
		AnnotationTypeElementRestContext _localctx = new AnnotationTypeElementRestContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_annotationTypeElementRest);
		try {
			setState(839);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,97,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(819);
				typeType();
				setState(820);
				annotationMethodOrConstantRest();
				setState(821);
				match(SEMI);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(823);
				classDeclaration();
				setState(825);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,93,_ctx) ) {
				case 1:
					{
					setState(824);
					match(SEMI);
					}
					break;
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(827);
				interfaceDeclaration();
				setState(829);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,94,_ctx) ) {
				case 1:
					{
					setState(828);
					match(SEMI);
					}
					break;
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(831);
				enumDeclaration();
				setState(833);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,95,_ctx) ) {
				case 1:
					{
					setState(832);
					match(SEMI);
					}
					break;
				}
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(835);
				annotationTypeDeclaration();
				setState(837);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,96,_ctx) ) {
				case 1:
					{
					setState(836);
					match(SEMI);
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotationMethodOrConstantRestContext extends ParserRuleContext {
		public AnnotationMethodRestContext annotationMethodRest() {
			return getRuleContext(AnnotationMethodRestContext.class,0);
		}
		public AnnotationConstantRestContext annotationConstantRest() {
			return getRuleContext(AnnotationConstantRestContext.class,0);
		}
		public AnnotationMethodOrConstantRestContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotationMethodOrConstantRest; }
	}

	public final AnnotationMethodOrConstantRestContext annotationMethodOrConstantRest() throws RecognitionException {
		AnnotationMethodOrConstantRestContext _localctx = new AnnotationMethodOrConstantRestContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_annotationMethodOrConstantRest);
		try {
			setState(843);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,98,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(841);
				annotationMethodRest();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(842);
				annotationConstantRest();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotationMethodRestContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public TerminalNode LPAREN() { return getToken(JavaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(JavaParser.RPAREN, 0); }
		public DefaultValueContext defaultValue() {
			return getRuleContext(DefaultValueContext.class,0);
		}
		public AnnotationMethodRestContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotationMethodRest; }
	}

	public final AnnotationMethodRestContext annotationMethodRest() throws RecognitionException {
		AnnotationMethodRestContext _localctx = new AnnotationMethodRestContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_annotationMethodRest);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(845);
			match(IDENTIFIER);
			setState(846);
			match(LPAREN);
			setState(847);
			match(RPAREN);
			setState(849);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DEFAULT) {
				{
				setState(848);
				defaultValue();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotationConstantRestContext extends ParserRuleContext {
		public VariableDeclaratorsContext variableDeclarators() {
			return getRuleContext(VariableDeclaratorsContext.class,0);
		}
		public AnnotationConstantRestContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotationConstantRest; }
	}

	public final AnnotationConstantRestContext annotationConstantRest() throws RecognitionException {
		AnnotationConstantRestContext _localctx = new AnnotationConstantRestContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_annotationConstantRest);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(851);
			variableDeclarators();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefaultValueContext extends ParserRuleContext {
		public TerminalNode DEFAULT() { return getToken(JavaParser.DEFAULT, 0); }
		public ElementValueContext elementValue() {
			return getRuleContext(ElementValueContext.class,0);
		}
		public DefaultValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defaultValue; }
	}

	public final DefaultValueContext defaultValue() throws RecognitionException {
		DefaultValueContext _localctx = new DefaultValueContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_defaultValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(853);
			match(DEFAULT);
			setState(854);
			elementValue();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(JavaParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(JavaParser.RBRACE, 0); }
		public List<BlockStatementContext> blockStatement() {
			return getRuleContexts(BlockStatementContext.class);
		}
		public BlockStatementContext blockStatement(int i) {
			return getRuleContext(BlockStatementContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(856);
			match(LBRACE);
			setState(860);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << ASSERT) | (1L << BOOLEAN) | (1L << BREAK) | (1L << BYTE) | (1L << CHAR) | (1L << CLASS) | (1L << CONTINUE) | (1L << DO) | (1L << DOUBLE) | (1L << FINAL) | (1L << FLOAT) | (1L << FOR) | (1L << IF) | (1L << INT) | (1L << INTERFACE) | (1L << LONG) | (1L << NEW) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << RETURN) | (1L << SHORT) | (1L << STATIC) | (1L << STRICTFP) | (1L << SUPER) | (1L << SWITCH) | (1L << SYNCHRONIZED) | (1L << THIS) | (1L << THROW) | (1L << TRY) | (1L << VOID) | (1L << WHILE) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << CHAR_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << LPAREN) | (1L << LBRACE))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (SEMI - 67)) | (1L << (LT - 67)) | (1L << (BANG - 67)) | (1L << (TILDE - 67)) | (1L << (INC - 67)) | (1L << (DEC - 67)) | (1L << (ADD - 67)) | (1L << (SUB - 67)) | (1L << (AT - 67)) | (1L << (JCOMMENT - 67)) | (1L << (IDENTIFIER - 67)))) != 0)) {
				{
				{
				setState(857);
				blockStatement();
				}
				}
				setState(862);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(863);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockStatementContext extends ParserRuleContext {
		public LocalVariableDeclarationContext localVariableDeclaration() {
			return getRuleContext(LocalVariableDeclarationContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(JavaParser.SEMI, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public LocalTypeDeclarationContext localTypeDeclaration() {
			return getRuleContext(LocalTypeDeclarationContext.class,0);
		}
		public BlockStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockStatement; }
	}

	public final BlockStatementContext blockStatement() throws RecognitionException {
		BlockStatementContext _localctx = new BlockStatementContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_blockStatement);
		try {
			setState(870);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,101,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(865);
				localVariableDeclaration();
				setState(866);
				match(SEMI);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(868);
				statement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(869);
				localTypeDeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LocalVariableDeclarationContext extends ParserRuleContext {
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public VariableDeclaratorsContext variableDeclarators() {
			return getRuleContext(VariableDeclaratorsContext.class,0);
		}
		public List<VariableModifierContext> variableModifier() {
			return getRuleContexts(VariableModifierContext.class);
		}
		public VariableModifierContext variableModifier(int i) {
			return getRuleContext(VariableModifierContext.class,i);
		}
		public LocalVariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_localVariableDeclaration; }
	}

	public final LocalVariableDeclarationContext localVariableDeclaration() throws RecognitionException {
		LocalVariableDeclarationContext _localctx = new LocalVariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_localVariableDeclaration);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(875);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,102,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(872);
					variableModifier();
					}
					} 
				}
				setState(877);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,102,_ctx);
			}
			setState(878);
			typeType();
			setState(879);
			variableDeclarators();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LocalTypeDeclarationContext extends ParserRuleContext {
		public ClassDeclarationContext classDeclaration() {
			return getRuleContext(ClassDeclarationContext.class,0);
		}
		public InterfaceDeclarationContext interfaceDeclaration() {
			return getRuleContext(InterfaceDeclarationContext.class,0);
		}
		public List<ClassOrInterfaceModifierContext> classOrInterfaceModifier() {
			return getRuleContexts(ClassOrInterfaceModifierContext.class);
		}
		public ClassOrInterfaceModifierContext classOrInterfaceModifier(int i) {
			return getRuleContext(ClassOrInterfaceModifierContext.class,i);
		}
		public TerminalNode SEMI() { return getToken(JavaParser.SEMI, 0); }
		public LocalTypeDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_localTypeDeclaration; }
	}

	public final LocalTypeDeclarationContext localTypeDeclaration() throws RecognitionException {
		LocalTypeDeclarationContext _localctx = new LocalTypeDeclarationContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_localTypeDeclaration);
		int _la;
		try {
			setState(892);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ABSTRACT:
			case CLASS:
			case FINAL:
			case INTERFACE:
			case PRIVATE:
			case PROTECTED:
			case PUBLIC:
			case STATIC:
			case STRICTFP:
			case AT:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(884);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << FINAL) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRICTFP))) != 0) || _la==AT || _la==IDENTIFIER) {
					{
					{
					setState(881);
					classOrInterfaceModifier();
					}
					}
					setState(886);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(889);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case CLASS:
					{
					setState(887);
					classDeclaration();
					}
					break;
				case INTERFACE:
					{
					setState(888);
					interfaceDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case SEMI:
				enterOuterAlt(_localctx, 2);
				{
				setState(891);
				match(SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public BlockContext blockLabel;
		public ExpressionContext statementExpression;
		public Token identifierLabel;
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode ASSERT() { return getToken(JavaParser.ASSERT, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode SEMI() { return getToken(JavaParser.SEMI, 0); }
		public TerminalNode COLON() { return getToken(JavaParser.COLON, 0); }
		public TerminalNode IF() { return getToken(JavaParser.IF, 0); }
		public ParExpressionContext parExpression() {
			return getRuleContext(ParExpressionContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(JavaParser.ELSE, 0); }
		public TerminalNode FOR() { return getToken(JavaParser.FOR, 0); }
		public TerminalNode LPAREN() { return getToken(JavaParser.LPAREN, 0); }
		public ForControlContext forControl() {
			return getRuleContext(ForControlContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(JavaParser.RPAREN, 0); }
		public TerminalNode WHILE() { return getToken(JavaParser.WHILE, 0); }
		public TerminalNode DO() { return getToken(JavaParser.DO, 0); }
		public TerminalNode TRY() { return getToken(JavaParser.TRY, 0); }
		public FinallyBlockContext finallyBlock() {
			return getRuleContext(FinallyBlockContext.class,0);
		}
		public List<CatchClauseContext> catchClause() {
			return getRuleContexts(CatchClauseContext.class);
		}
		public CatchClauseContext catchClause(int i) {
			return getRuleContext(CatchClauseContext.class,i);
		}
		public ResourceSpecificationContext resourceSpecification() {
			return getRuleContext(ResourceSpecificationContext.class,0);
		}
		public TerminalNode SWITCH() { return getToken(JavaParser.SWITCH, 0); }
		public TerminalNode LBRACE() { return getToken(JavaParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(JavaParser.RBRACE, 0); }
		public List<SwitchBlockStatementGroupContext> switchBlockStatementGroup() {
			return getRuleContexts(SwitchBlockStatementGroupContext.class);
		}
		public SwitchBlockStatementGroupContext switchBlockStatementGroup(int i) {
			return getRuleContext(SwitchBlockStatementGroupContext.class,i);
		}
		public List<SwitchLabelContext> switchLabel() {
			return getRuleContexts(SwitchLabelContext.class);
		}
		public SwitchLabelContext switchLabel(int i) {
			return getRuleContext(SwitchLabelContext.class,i);
		}
		public TerminalNode SYNCHRONIZED() { return getToken(JavaParser.SYNCHRONIZED, 0); }
		public TerminalNode RETURN() { return getToken(JavaParser.RETURN, 0); }
		public TerminalNode THROW() { return getToken(JavaParser.THROW, 0); }
		public TerminalNode BREAK() { return getToken(JavaParser.BREAK, 0); }
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public TerminalNode CONTINUE() { return getToken(JavaParser.CONTINUE, 0); }
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_statement);
		int _la;
		try {
			int _alt;
			setState(999);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,118,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(894);
				((StatementContext)_localctx).blockLabel = block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(895);
				match(ASSERT);
				setState(896);
				expression(0);
				setState(899);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COLON) {
					{
					setState(897);
					match(COLON);
					setState(898);
					expression(0);
					}
				}

				setState(901);
				match(SEMI);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(903);
				match(IF);
				setState(904);
				parExpression();
				setState(905);
				statement();
				setState(908);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,107,_ctx) ) {
				case 1:
					{
					setState(906);
					match(ELSE);
					setState(907);
					statement();
					}
					break;
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(910);
				match(FOR);
				setState(911);
				match(LPAREN);
				setState(912);
				forControl();
				setState(913);
				match(RPAREN);
				setState(914);
				statement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(916);
				match(WHILE);
				setState(917);
				parExpression();
				setState(918);
				statement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(920);
				match(DO);
				setState(921);
				statement();
				setState(922);
				match(WHILE);
				setState(923);
				parExpression();
				setState(924);
				match(SEMI);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(926);
				match(TRY);
				setState(927);
				block();
				setState(937);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case CATCH:
					{
					setState(929); 
					_errHandler.sync(this);
					_la = _input.LA(1);
					do {
						{
						{
						setState(928);
						catchClause();
						}
						}
						setState(931); 
						_errHandler.sync(this);
						_la = _input.LA(1);
					} while ( _la==CATCH );
					setState(934);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==FINALLY) {
						{
						setState(933);
						finallyBlock();
						}
					}

					}
					break;
				case FINALLY:
					{
					setState(936);
					finallyBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(939);
				match(TRY);
				setState(940);
				resourceSpecification();
				setState(941);
				block();
				setState(945);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==CATCH) {
					{
					{
					setState(942);
					catchClause();
					}
					}
					setState(947);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(949);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==FINALLY) {
					{
					setState(948);
					finallyBlock();
					}
				}

				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(951);
				match(SWITCH);
				setState(952);
				parExpression();
				setState(953);
				match(LBRACE);
				setState(957);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,113,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(954);
						switchBlockStatementGroup();
						}
						} 
					}
					setState(959);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,113,_ctx);
				}
				setState(963);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==CASE || _la==DEFAULT) {
					{
					{
					setState(960);
					switchLabel();
					}
					}
					setState(965);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(966);
				match(RBRACE);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(968);
				match(SYNCHRONIZED);
				setState(969);
				parExpression();
				setState(970);
				block();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(972);
				match(RETURN);
				setState(974);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << BYTE) | (1L << CHAR) | (1L << DOUBLE) | (1L << FLOAT) | (1L << INT) | (1L << LONG) | (1L << NEW) | (1L << SHORT) | (1L << SUPER) | (1L << THIS) | (1L << VOID) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << CHAR_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << LPAREN))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (LT - 72)) | (1L << (BANG - 72)) | (1L << (TILDE - 72)) | (1L << (INC - 72)) | (1L << (DEC - 72)) | (1L << (ADD - 72)) | (1L << (SUB - 72)) | (1L << (AT - 72)) | (1L << (IDENTIFIER - 72)))) != 0)) {
					{
					setState(973);
					expression(0);
					}
				}

				setState(976);
				match(SEMI);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(977);
				match(THROW);
				setState(978);
				expression(0);
				setState(979);
				match(SEMI);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(981);
				match(BREAK);
				setState(983);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IDENTIFIER) {
					{
					setState(982);
					match(IDENTIFIER);
					}
				}

				setState(985);
				match(SEMI);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(986);
				match(CONTINUE);
				setState(988);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IDENTIFIER) {
					{
					setState(987);
					match(IDENTIFIER);
					}
				}

				setState(990);
				match(SEMI);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(991);
				match(SEMI);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(992);
				comment();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(993);
				((StatementContext)_localctx).statementExpression = expression(0);
				setState(994);
				match(SEMI);
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(996);
				((StatementContext)_localctx).identifierLabel = match(IDENTIFIER);
				setState(997);
				match(COLON);
				setState(998);
				statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CatchClauseContext extends ParserRuleContext {
		public TerminalNode CATCH() { return getToken(JavaParser.CATCH, 0); }
		public TerminalNode LPAREN() { return getToken(JavaParser.LPAREN, 0); }
		public CatchTypeContext catchType() {
			return getRuleContext(CatchTypeContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public TerminalNode RPAREN() { return getToken(JavaParser.RPAREN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public List<VariableModifierContext> variableModifier() {
			return getRuleContexts(VariableModifierContext.class);
		}
		public VariableModifierContext variableModifier(int i) {
			return getRuleContext(VariableModifierContext.class,i);
		}
		public CatchClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catchClause; }
	}

	public final CatchClauseContext catchClause() throws RecognitionException {
		CatchClauseContext _localctx = new CatchClauseContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_catchClause);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1001);
			match(CATCH);
			setState(1002);
			match(LPAREN);
			setState(1006);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,119,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1003);
					variableModifier();
					}
					} 
				}
				setState(1008);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,119,_ctx);
			}
			setState(1009);
			catchType();
			setState(1010);
			match(IDENTIFIER);
			setState(1011);
			match(RPAREN);
			setState(1012);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CatchTypeContext extends ParserRuleContext {
		public List<QualifiedNameContext> qualifiedName() {
			return getRuleContexts(QualifiedNameContext.class);
		}
		public QualifiedNameContext qualifiedName(int i) {
			return getRuleContext(QualifiedNameContext.class,i);
		}
		public List<TerminalNode> BITOR() { return getTokens(JavaParser.BITOR); }
		public TerminalNode BITOR(int i) {
			return getToken(JavaParser.BITOR, i);
		}
		public CatchTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catchType; }
	}

	public final CatchTypeContext catchType() throws RecognitionException {
		CatchTypeContext _localctx = new CatchTypeContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_catchType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1014);
			qualifiedName();
			setState(1019);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==BITOR) {
				{
				{
				setState(1015);
				match(BITOR);
				setState(1016);
				qualifiedName();
				}
				}
				setState(1021);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FinallyBlockContext extends ParserRuleContext {
		public TerminalNode FINALLY() { return getToken(JavaParser.FINALLY, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public FinallyBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_finallyBlock; }
	}

	public final FinallyBlockContext finallyBlock() throws RecognitionException {
		FinallyBlockContext _localctx = new FinallyBlockContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_finallyBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1022);
			match(FINALLY);
			setState(1023);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ResourceSpecificationContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(JavaParser.LPAREN, 0); }
		public ResourcesContext resources() {
			return getRuleContext(ResourcesContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(JavaParser.RPAREN, 0); }
		public TerminalNode SEMI() { return getToken(JavaParser.SEMI, 0); }
		public ResourceSpecificationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resourceSpecification; }
	}

	public final ResourceSpecificationContext resourceSpecification() throws RecognitionException {
		ResourceSpecificationContext _localctx = new ResourceSpecificationContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_resourceSpecification);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1025);
			match(LPAREN);
			setState(1026);
			resources();
			setState(1028);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(1027);
				match(SEMI);
				}
			}

			setState(1030);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ResourcesContext extends ParserRuleContext {
		public List<ResourceContext> resource() {
			return getRuleContexts(ResourceContext.class);
		}
		public ResourceContext resource(int i) {
			return getRuleContext(ResourceContext.class,i);
		}
		public List<TerminalNode> SEMI() { return getTokens(JavaParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(JavaParser.SEMI, i);
		}
		public ResourcesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resources; }
	}

	public final ResourcesContext resources() throws RecognitionException {
		ResourcesContext _localctx = new ResourcesContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_resources);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1032);
			resource();
			setState(1037);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,122,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1033);
					match(SEMI);
					setState(1034);
					resource();
					}
					} 
				}
				setState(1039);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,122,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ResourceContext extends ParserRuleContext {
		public ClassOrInterfaceTypeContext classOrInterfaceType() {
			return getRuleContext(ClassOrInterfaceTypeContext.class,0);
		}
		public VariableDeclaratorIdContext variableDeclaratorId() {
			return getRuleContext(VariableDeclaratorIdContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(JavaParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<VariableModifierContext> variableModifier() {
			return getRuleContexts(VariableModifierContext.class);
		}
		public VariableModifierContext variableModifier(int i) {
			return getRuleContext(VariableModifierContext.class,i);
		}
		public ResourceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resource; }
	}

	public final ResourceContext resource() throws RecognitionException {
		ResourceContext _localctx = new ResourceContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_resource);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1043);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,123,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1040);
					variableModifier();
					}
					} 
				}
				setState(1045);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,123,_ctx);
			}
			setState(1046);
			classOrInterfaceType();
			setState(1047);
			variableDeclaratorId();
			setState(1048);
			match(ASSIGN);
			setState(1049);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwitchBlockStatementGroupContext extends ParserRuleContext {
		public List<SwitchLabelContext> switchLabel() {
			return getRuleContexts(SwitchLabelContext.class);
		}
		public SwitchLabelContext switchLabel(int i) {
			return getRuleContext(SwitchLabelContext.class,i);
		}
		public List<BlockStatementContext> blockStatement() {
			return getRuleContexts(BlockStatementContext.class);
		}
		public BlockStatementContext blockStatement(int i) {
			return getRuleContext(BlockStatementContext.class,i);
		}
		public SwitchBlockStatementGroupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchBlockStatementGroup; }
	}

	public final SwitchBlockStatementGroupContext switchBlockStatementGroup() throws RecognitionException {
		SwitchBlockStatementGroupContext _localctx = new SwitchBlockStatementGroupContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_switchBlockStatementGroup);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1052); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1051);
				switchLabel();
				}
				}
				setState(1054); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==CASE || _la==DEFAULT );
			setState(1057); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1056);
				blockStatement();
				}
				}
				setState(1059); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << ASSERT) | (1L << BOOLEAN) | (1L << BREAK) | (1L << BYTE) | (1L << CHAR) | (1L << CLASS) | (1L << CONTINUE) | (1L << DO) | (1L << DOUBLE) | (1L << FINAL) | (1L << FLOAT) | (1L << FOR) | (1L << IF) | (1L << INT) | (1L << INTERFACE) | (1L << LONG) | (1L << NEW) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << RETURN) | (1L << SHORT) | (1L << STATIC) | (1L << STRICTFP) | (1L << SUPER) | (1L << SWITCH) | (1L << SYNCHRONIZED) | (1L << THIS) | (1L << THROW) | (1L << TRY) | (1L << VOID) | (1L << WHILE) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << CHAR_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << LPAREN) | (1L << LBRACE))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (SEMI - 67)) | (1L << (LT - 67)) | (1L << (BANG - 67)) | (1L << (TILDE - 67)) | (1L << (INC - 67)) | (1L << (DEC - 67)) | (1L << (ADD - 67)) | (1L << (SUB - 67)) | (1L << (AT - 67)) | (1L << (JCOMMENT - 67)) | (1L << (IDENTIFIER - 67)))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwitchLabelContext extends ParserRuleContext {
		public ExpressionContext constantExpression;
		public Token enumConstantName;
		public TerminalNode CASE() { return getToken(JavaParser.CASE, 0); }
		public TerminalNode COLON() { return getToken(JavaParser.COLON, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public TerminalNode DEFAULT() { return getToken(JavaParser.DEFAULT, 0); }
		public SwitchLabelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchLabel; }
	}

	public final SwitchLabelContext switchLabel() throws RecognitionException {
		SwitchLabelContext _localctx = new SwitchLabelContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_switchLabel);
		try {
			setState(1069);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CASE:
				enterOuterAlt(_localctx, 1);
				{
				setState(1061);
				match(CASE);
				setState(1064);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,126,_ctx) ) {
				case 1:
					{
					setState(1062);
					((SwitchLabelContext)_localctx).constantExpression = expression(0);
					}
					break;
				case 2:
					{
					setState(1063);
					((SwitchLabelContext)_localctx).enumConstantName = match(IDENTIFIER);
					}
					break;
				}
				setState(1066);
				match(COLON);
				}
				break;
			case DEFAULT:
				enterOuterAlt(_localctx, 2);
				{
				setState(1067);
				match(DEFAULT);
				setState(1068);
				match(COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForControlContext extends ParserRuleContext {
		public ExpressionListContext forUpdate;
		public EnhancedForControlContext enhancedForControl() {
			return getRuleContext(EnhancedForControlContext.class,0);
		}
		public List<TerminalNode> SEMI() { return getTokens(JavaParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(JavaParser.SEMI, i);
		}
		public ForInitContext forInit() {
			return getRuleContext(ForInitContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public ForControlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forControl; }
	}

	public final ForControlContext forControl() throws RecognitionException {
		ForControlContext _localctx = new ForControlContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_forControl);
		int _la;
		try {
			setState(1083);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,131,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1071);
				enhancedForControl();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1073);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << BYTE) | (1L << CHAR) | (1L << DOUBLE) | (1L << FINAL) | (1L << FLOAT) | (1L << INT) | (1L << LONG) | (1L << NEW) | (1L << SHORT) | (1L << SUPER) | (1L << THIS) | (1L << VOID) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << CHAR_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << LPAREN))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (LT - 72)) | (1L << (BANG - 72)) | (1L << (TILDE - 72)) | (1L << (INC - 72)) | (1L << (DEC - 72)) | (1L << (ADD - 72)) | (1L << (SUB - 72)) | (1L << (AT - 72)) | (1L << (IDENTIFIER - 72)))) != 0)) {
					{
					setState(1072);
					forInit();
					}
				}

				setState(1075);
				match(SEMI);
				setState(1077);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << BYTE) | (1L << CHAR) | (1L << DOUBLE) | (1L << FLOAT) | (1L << INT) | (1L << LONG) | (1L << NEW) | (1L << SHORT) | (1L << SUPER) | (1L << THIS) | (1L << VOID) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << CHAR_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << LPAREN))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (LT - 72)) | (1L << (BANG - 72)) | (1L << (TILDE - 72)) | (1L << (INC - 72)) | (1L << (DEC - 72)) | (1L << (ADD - 72)) | (1L << (SUB - 72)) | (1L << (AT - 72)) | (1L << (IDENTIFIER - 72)))) != 0)) {
					{
					setState(1076);
					expression(0);
					}
				}

				setState(1079);
				match(SEMI);
				setState(1081);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << BYTE) | (1L << CHAR) | (1L << DOUBLE) | (1L << FLOAT) | (1L << INT) | (1L << LONG) | (1L << NEW) | (1L << SHORT) | (1L << SUPER) | (1L << THIS) | (1L << VOID) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << CHAR_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << LPAREN))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (LT - 72)) | (1L << (BANG - 72)) | (1L << (TILDE - 72)) | (1L << (INC - 72)) | (1L << (DEC - 72)) | (1L << (ADD - 72)) | (1L << (SUB - 72)) | (1L << (AT - 72)) | (1L << (IDENTIFIER - 72)))) != 0)) {
					{
					setState(1080);
					((ForControlContext)_localctx).forUpdate = expressionList();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForInitContext extends ParserRuleContext {
		public LocalVariableDeclarationContext localVariableDeclaration() {
			return getRuleContext(LocalVariableDeclarationContext.class,0);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public ForInitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forInit; }
	}

	public final ForInitContext forInit() throws RecognitionException {
		ForInitContext _localctx = new ForInitContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_forInit);
		try {
			setState(1087);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,132,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1085);
				localVariableDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1086);
				expressionList();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnhancedForControlContext extends ParserRuleContext {
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public VariableDeclaratorIdContext variableDeclaratorId() {
			return getRuleContext(VariableDeclaratorIdContext.class,0);
		}
		public TerminalNode COLON() { return getToken(JavaParser.COLON, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<VariableModifierContext> variableModifier() {
			return getRuleContexts(VariableModifierContext.class);
		}
		public VariableModifierContext variableModifier(int i) {
			return getRuleContext(VariableModifierContext.class,i);
		}
		public EnhancedForControlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enhancedForControl; }
	}

	public final EnhancedForControlContext enhancedForControl() throws RecognitionException {
		EnhancedForControlContext _localctx = new EnhancedForControlContext(_ctx, getState());
		enterRule(_localctx, 168, RULE_enhancedForControl);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1092);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,133,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1089);
					variableModifier();
					}
					} 
				}
				setState(1094);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,133,_ctx);
			}
			setState(1095);
			typeType();
			setState(1096);
			variableDeclaratorId();
			setState(1097);
			match(COLON);
			setState(1098);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParExpressionContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(JavaParser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(JavaParser.RPAREN, 0); }
		public ParExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parExpression; }
	}

	public final ParExpressionContext parExpression() throws RecognitionException {
		ParExpressionContext _localctx = new ParExpressionContext(_ctx, getState());
		enterRule(_localctx, 170, RULE_parExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1100);
			match(LPAREN);
			setState(1101);
			expression(0);
			setState(1102);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionListContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(JavaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(JavaParser.COMMA, i);
		}
		public ExpressionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionList; }
	}

	public final ExpressionListContext expressionList() throws RecognitionException {
		ExpressionListContext _localctx = new ExpressionListContext(_ctx, getState());
		enterRule(_localctx, 172, RULE_expressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1104);
			expression(0);
			setState(1109);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1105);
				match(COMMA);
				setState(1106);
				expression(0);
				}
				}
				setState(1111);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodCallContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public TerminalNode LPAREN() { return getToken(JavaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(JavaParser.RPAREN, 0); }
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public TerminalNode THIS() { return getToken(JavaParser.THIS, 0); }
		public TerminalNode SUPER() { return getToken(JavaParser.SUPER, 0); }
		public MethodCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodCall; }
	}

	public final MethodCallContext methodCall() throws RecognitionException {
		MethodCallContext _localctx = new MethodCallContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_methodCall);
		int _la;
		try {
			setState(1130);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(1112);
				match(IDENTIFIER);
				setState(1113);
				match(LPAREN);
				setState(1115);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << BYTE) | (1L << CHAR) | (1L << DOUBLE) | (1L << FLOAT) | (1L << INT) | (1L << LONG) | (1L << NEW) | (1L << SHORT) | (1L << SUPER) | (1L << THIS) | (1L << VOID) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << CHAR_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << LPAREN))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (LT - 72)) | (1L << (BANG - 72)) | (1L << (TILDE - 72)) | (1L << (INC - 72)) | (1L << (DEC - 72)) | (1L << (ADD - 72)) | (1L << (SUB - 72)) | (1L << (AT - 72)) | (1L << (IDENTIFIER - 72)))) != 0)) {
					{
					setState(1114);
					expressionList();
					}
				}

				setState(1117);
				match(RPAREN);
				}
				break;
			case THIS:
				enterOuterAlt(_localctx, 2);
				{
				setState(1118);
				match(THIS);
				setState(1119);
				match(LPAREN);
				setState(1121);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << BYTE) | (1L << CHAR) | (1L << DOUBLE) | (1L << FLOAT) | (1L << INT) | (1L << LONG) | (1L << NEW) | (1L << SHORT) | (1L << SUPER) | (1L << THIS) | (1L << VOID) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << CHAR_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << LPAREN))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (LT - 72)) | (1L << (BANG - 72)) | (1L << (TILDE - 72)) | (1L << (INC - 72)) | (1L << (DEC - 72)) | (1L << (ADD - 72)) | (1L << (SUB - 72)) | (1L << (AT - 72)) | (1L << (IDENTIFIER - 72)))) != 0)) {
					{
					setState(1120);
					expressionList();
					}
				}

				setState(1123);
				match(RPAREN);
				}
				break;
			case SUPER:
				enterOuterAlt(_localctx, 3);
				{
				setState(1124);
				match(SUPER);
				setState(1125);
				match(LPAREN);
				setState(1127);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << BYTE) | (1L << CHAR) | (1L << DOUBLE) | (1L << FLOAT) | (1L << INT) | (1L << LONG) | (1L << NEW) | (1L << SHORT) | (1L << SUPER) | (1L << THIS) | (1L << VOID) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << CHAR_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << LPAREN))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (LT - 72)) | (1L << (BANG - 72)) | (1L << (TILDE - 72)) | (1L << (INC - 72)) | (1L << (DEC - 72)) | (1L << (ADD - 72)) | (1L << (SUB - 72)) | (1L << (AT - 72)) | (1L << (IDENTIFIER - 72)))) != 0)) {
					{
					setState(1126);
					expressionList();
					}
				}

				setState(1129);
				match(RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public Token prefix;
		public Token bop;
		public Token postfix;
		public PrimaryContext primary() {
			return getRuleContext(PrimaryContext.class,0);
		}
		public MethodCallContext methodCall() {
			return getRuleContext(MethodCallContext.class,0);
		}
		public TerminalNode NEW() { return getToken(JavaParser.NEW, 0); }
		public CreatorContext creator() {
			return getRuleContext(CreatorContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(JavaParser.LPAREN, 0); }
		public List<TypeTypeContext> typeType() {
			return getRuleContexts(TypeTypeContext.class);
		}
		public TypeTypeContext typeType(int i) {
			return getRuleContext(TypeTypeContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(JavaParser.RPAREN, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<AnnotationContext> annotation() {
			return getRuleContexts(AnnotationContext.class);
		}
		public AnnotationContext annotation(int i) {
			return getRuleContext(AnnotationContext.class,i);
		}
		public List<TerminalNode> BITAND() { return getTokens(JavaParser.BITAND); }
		public TerminalNode BITAND(int i) {
			return getToken(JavaParser.BITAND, i);
		}
		public TerminalNode ADD() { return getToken(JavaParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(JavaParser.SUB, 0); }
		public TerminalNode INC() { return getToken(JavaParser.INC, 0); }
		public TerminalNode DEC() { return getToken(JavaParser.DEC, 0); }
		public TerminalNode TILDE() { return getToken(JavaParser.TILDE, 0); }
		public TerminalNode BANG() { return getToken(JavaParser.BANG, 0); }
		public LambdaExpressionContext lambdaExpression() {
			return getRuleContext(LambdaExpressionContext.class,0);
		}
		public TerminalNode COLONCOLON() { return getToken(JavaParser.COLONCOLON, 0); }
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public TypeArgumentsContext typeArguments() {
			return getRuleContext(TypeArgumentsContext.class,0);
		}
		public ClassTypeContext classType() {
			return getRuleContext(ClassTypeContext.class,0);
		}
		public TerminalNode MUL() { return getToken(JavaParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(JavaParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(JavaParser.MOD, 0); }
		public List<TerminalNode> LT() { return getTokens(JavaParser.LT); }
		public TerminalNode LT(int i) {
			return getToken(JavaParser.LT, i);
		}
		public List<TerminalNode> GT() { return getTokens(JavaParser.GT); }
		public TerminalNode GT(int i) {
			return getToken(JavaParser.GT, i);
		}
		public TerminalNode LE() { return getToken(JavaParser.LE, 0); }
		public TerminalNode GE() { return getToken(JavaParser.GE, 0); }
		public TerminalNode EQUAL() { return getToken(JavaParser.EQUAL, 0); }
		public TerminalNode NOTEQUAL() { return getToken(JavaParser.NOTEQUAL, 0); }
		public TerminalNode CARET() { return getToken(JavaParser.CARET, 0); }
		public TerminalNode BITOR() { return getToken(JavaParser.BITOR, 0); }
		public TerminalNode AND() { return getToken(JavaParser.AND, 0); }
		public TerminalNode OR() { return getToken(JavaParser.OR, 0); }
		public TerminalNode COLON() { return getToken(JavaParser.COLON, 0); }
		public TerminalNode QUESTION() { return getToken(JavaParser.QUESTION, 0); }
		public TerminalNode ASSIGN() { return getToken(JavaParser.ASSIGN, 0); }
		public TerminalNode ADD_ASSIGN() { return getToken(JavaParser.ADD_ASSIGN, 0); }
		public TerminalNode SUB_ASSIGN() { return getToken(JavaParser.SUB_ASSIGN, 0); }
		public TerminalNode MUL_ASSIGN() { return getToken(JavaParser.MUL_ASSIGN, 0); }
		public TerminalNode DIV_ASSIGN() { return getToken(JavaParser.DIV_ASSIGN, 0); }
		public TerminalNode AND_ASSIGN() { return getToken(JavaParser.AND_ASSIGN, 0); }
		public TerminalNode OR_ASSIGN() { return getToken(JavaParser.OR_ASSIGN, 0); }
		public TerminalNode XOR_ASSIGN() { return getToken(JavaParser.XOR_ASSIGN, 0); }
		public TerminalNode RSHIFT_ASSIGN() { return getToken(JavaParser.RSHIFT_ASSIGN, 0); }
		public TerminalNode URSHIFT_ASSIGN() { return getToken(JavaParser.URSHIFT_ASSIGN, 0); }
		public TerminalNode LSHIFT_ASSIGN() { return getToken(JavaParser.LSHIFT_ASSIGN, 0); }
		public TerminalNode MOD_ASSIGN() { return getToken(JavaParser.MOD_ASSIGN, 0); }
		public TerminalNode DOT() { return getToken(JavaParser.DOT, 0); }
		public TerminalNode THIS() { return getToken(JavaParser.THIS, 0); }
		public InnerCreatorContext innerCreator() {
			return getRuleContext(InnerCreatorContext.class,0);
		}
		public TerminalNode SUPER() { return getToken(JavaParser.SUPER, 0); }
		public SuperSuffixContext superSuffix() {
			return getRuleContext(SuperSuffixContext.class,0);
		}
		public ExplicitGenericInvocationContext explicitGenericInvocation() {
			return getRuleContext(ExplicitGenericInvocationContext.class,0);
		}
		public NonWildcardTypeArgumentsContext nonWildcardTypeArguments() {
			return getRuleContext(NonWildcardTypeArgumentsContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(JavaParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(JavaParser.RBRACK, 0); }
		public TerminalNode INSTANCEOF() { return getToken(JavaParser.INSTANCEOF, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 176;
		enterRecursionRule(_localctx, 176, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1176);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,144,_ctx) ) {
			case 1:
				{
				setState(1133);
				primary();
				}
				break;
			case 2:
				{
				setState(1134);
				methodCall();
				}
				break;
			case 3:
				{
				setState(1135);
				match(NEW);
				setState(1136);
				creator();
				}
				break;
			case 4:
				{
				setState(1137);
				match(LPAREN);
				setState(1141);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,139,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1138);
						annotation();
						}
						} 
					}
					setState(1143);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,139,_ctx);
				}
				setState(1144);
				typeType();
				setState(1149);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==BITAND) {
					{
					{
					setState(1145);
					match(BITAND);
					setState(1146);
					typeType();
					}
					}
					setState(1151);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1152);
				match(RPAREN);
				setState(1153);
				expression(21);
				}
				break;
			case 5:
				{
				setState(1155);
				((ExpressionContext)_localctx).prefix = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 83)) & ~0x3f) == 0 && ((1L << (_la - 83)) & ((1L << (INC - 83)) | (1L << (DEC - 83)) | (1L << (ADD - 83)) | (1L << (SUB - 83)))) != 0)) ) {
					((ExpressionContext)_localctx).prefix = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1156);
				expression(19);
				}
				break;
			case 6:
				{
				setState(1157);
				((ExpressionContext)_localctx).prefix = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==BANG || _la==TILDE) ) {
					((ExpressionContext)_localctx).prefix = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1158);
				expression(18);
				}
				break;
			case 7:
				{
				setState(1159);
				lambdaExpression();
				}
				break;
			case 8:
				{
				setState(1160);
				typeType();
				setState(1161);
				match(COLONCOLON);
				setState(1167);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case LT:
				case IDENTIFIER:
					{
					setState(1163);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==LT) {
						{
						setState(1162);
						typeArguments();
						}
					}

					setState(1165);
					match(IDENTIFIER);
					}
					break;
				case NEW:
					{
					setState(1166);
					match(NEW);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 9:
				{
				setState(1169);
				classType();
				setState(1170);
				match(COLONCOLON);
				setState(1172);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LT) {
					{
					setState(1171);
					typeArguments();
					}
				}

				setState(1174);
				match(NEW);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1258);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,150,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1256);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,149,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1178);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(1179);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 87)) & ~0x3f) == 0 && ((1L << (_la - 87)) & ((1L << (MUL - 87)) | (1L << (DIV - 87)) | (1L << (MOD - 87)))) != 0)) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(1180);
						expression(18);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1181);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(1182);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(1183);
						expression(17);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1184);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(1192);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,145,_ctx) ) {
						case 1:
							{
							setState(1185);
							match(LT);
							setState(1186);
							match(LT);
							}
							break;
						case 2:
							{
							setState(1187);
							match(GT);
							setState(1188);
							match(GT);
							setState(1189);
							match(GT);
							}
							break;
						case 3:
							{
							setState(1190);
							match(GT);
							setState(1191);
							match(GT);
							}
							break;
						}
						setState(1194);
						expression(16);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1195);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(1196);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & ((1L << (GT - 71)) | (1L << (LT - 71)) | (1L << (LE - 71)) | (1L << (GE - 71)))) != 0)) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(1197);
						expression(15);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1198);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(1199);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==EQUAL || _la==NOTEQUAL) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(1200);
						expression(13);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1201);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(1202);
						((ExpressionContext)_localctx).bop = match(BITAND);
						setState(1203);
						expression(12);
						}
						break;
					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1204);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(1205);
						((ExpressionContext)_localctx).bop = match(CARET);
						setState(1206);
						expression(11);
						}
						break;
					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1207);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(1208);
						((ExpressionContext)_localctx).bop = match(BITOR);
						setState(1209);
						expression(10);
						}
						break;
					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1210);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(1211);
						((ExpressionContext)_localctx).bop = match(AND);
						setState(1212);
						expression(9);
						}
						break;
					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1213);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(1214);
						((ExpressionContext)_localctx).bop = match(OR);
						setState(1215);
						expression(8);
						}
						break;
					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1216);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(1217);
						((ExpressionContext)_localctx).bop = match(QUESTION);
						setState(1218);
						expression(0);
						setState(1219);
						match(COLON);
						setState(1220);
						expression(6);
						}
						break;
					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1222);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(1223);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 70)) & ~0x3f) == 0 && ((1L << (_la - 70)) & ((1L << (ASSIGN - 70)) | (1L << (ADD_ASSIGN - 70)) | (1L << (SUB_ASSIGN - 70)) | (1L << (MUL_ASSIGN - 70)) | (1L << (DIV_ASSIGN - 70)) | (1L << (AND_ASSIGN - 70)) | (1L << (OR_ASSIGN - 70)) | (1L << (XOR_ASSIGN - 70)) | (1L << (MOD_ASSIGN - 70)) | (1L << (LSHIFT_ASSIGN - 70)) | (1L << (RSHIFT_ASSIGN - 70)) | (1L << (URSHIFT_ASSIGN - 70)))) != 0)) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(1224);
						expression(5);
						}
						break;
					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1225);
						if (!(precpred(_ctx, 25))) throw new FailedPredicateException(this, "precpred(_ctx, 25)");
						setState(1226);
						((ExpressionContext)_localctx).bop = match(DOT);
						setState(1238);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,147,_ctx) ) {
						case 1:
							{
							setState(1227);
							match(IDENTIFIER);
							}
							break;
						case 2:
							{
							setState(1228);
							methodCall();
							}
							break;
						case 3:
							{
							setState(1229);
							match(THIS);
							}
							break;
						case 4:
							{
							setState(1230);
							match(NEW);
							setState(1232);
							_errHandler.sync(this);
							_la = _input.LA(1);
							if (_la==LT) {
								{
								setState(1231);
								nonWildcardTypeArguments();
								}
							}

							setState(1234);
							innerCreator();
							}
							break;
						case 5:
							{
							setState(1235);
							match(SUPER);
							setState(1236);
							superSuffix();
							}
							break;
						case 6:
							{
							setState(1237);
							explicitGenericInvocation();
							}
							break;
						}
						}
						break;
					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1240);
						if (!(precpred(_ctx, 24))) throw new FailedPredicateException(this, "precpred(_ctx, 24)");
						setState(1241);
						match(LBRACK);
						setState(1242);
						expression(0);
						setState(1243);
						match(RBRACK);
						}
						break;
					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1245);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						setState(1246);
						((ExpressionContext)_localctx).postfix = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==INC || _la==DEC) ) {
							((ExpressionContext)_localctx).postfix = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						break;
					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1247);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(1248);
						((ExpressionContext)_localctx).bop = match(INSTANCEOF);
						setState(1249);
						typeType();
						}
						break;
					case 17:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1250);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1251);
						match(COLONCOLON);
						setState(1253);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==LT) {
							{
							setState(1252);
							typeArguments();
							}
						}

						setState(1255);
						match(IDENTIFIER);
						}
						break;
					}
					} 
				}
				setState(1260);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,150,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class LambdaExpressionContext extends ParserRuleContext {
		public LambdaParametersContext lambdaParameters() {
			return getRuleContext(LambdaParametersContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(JavaParser.ARROW, 0); }
		public LambdaBodyContext lambdaBody() {
			return getRuleContext(LambdaBodyContext.class,0);
		}
		public LambdaExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambdaExpression; }
	}

	public final LambdaExpressionContext lambdaExpression() throws RecognitionException {
		LambdaExpressionContext _localctx = new LambdaExpressionContext(_ctx, getState());
		enterRule(_localctx, 178, RULE_lambdaExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1261);
			lambdaParameters();
			setState(1262);
			match(ARROW);
			setState(1263);
			lambdaBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LambdaParametersContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(JavaParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(JavaParser.IDENTIFIER, i);
		}
		public TerminalNode LPAREN() { return getToken(JavaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(JavaParser.RPAREN, 0); }
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(JavaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(JavaParser.COMMA, i);
		}
		public LambdaParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambdaParameters; }
	}

	public final LambdaParametersContext lambdaParameters() throws RecognitionException {
		LambdaParametersContext _localctx = new LambdaParametersContext(_ctx, getState());
		enterRule(_localctx, 180, RULE_lambdaParameters);
		int _la;
		try {
			setState(1281);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,153,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1265);
				match(IDENTIFIER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1266);
				match(LPAREN);
				setState(1268);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << BYTE) | (1L << CHAR) | (1L << DOUBLE) | (1L << FINAL) | (1L << FLOAT) | (1L << INT) | (1L << LONG) | (1L << SHORT))) != 0) || _la==AT || _la==IDENTIFIER) {
					{
					setState(1267);
					formalParameterList();
					}
				}

				setState(1270);
				match(RPAREN);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1271);
				match(LPAREN);
				setState(1272);
				match(IDENTIFIER);
				setState(1277);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1273);
					match(COMMA);
					setState(1274);
					match(IDENTIFIER);
					}
					}
					setState(1279);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1280);
				match(RPAREN);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LambdaBodyContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public LambdaBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambdaBody; }
	}

	public final LambdaBodyContext lambdaBody() throws RecognitionException {
		LambdaBodyContext _localctx = new LambdaBodyContext(_ctx, getState());
		enterRule(_localctx, 182, RULE_lambdaBody);
		try {
			setState(1285);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOLEAN:
			case BYTE:
			case CHAR:
			case DOUBLE:
			case FLOAT:
			case INT:
			case LONG:
			case NEW:
			case SHORT:
			case SUPER:
			case THIS:
			case VOID:
			case DECIMAL_LITERAL:
			case HEX_LITERAL:
			case OCT_LITERAL:
			case BINARY_LITERAL:
			case FLOAT_LITERAL:
			case HEX_FLOAT_LITERAL:
			case BOOL_LITERAL:
			case CHAR_LITERAL:
			case STRING_LITERAL:
			case NULL_LITERAL:
			case LPAREN:
			case LT:
			case BANG:
			case TILDE:
			case INC:
			case DEC:
			case ADD:
			case SUB:
			case AT:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(1283);
				expression(0);
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(1284);
				block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrimaryContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(JavaParser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(JavaParser.RPAREN, 0); }
		public TerminalNode THIS() { return getToken(JavaParser.THIS, 0); }
		public TerminalNode SUPER() { return getToken(JavaParser.SUPER, 0); }
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public TypeTypeOrVoidContext typeTypeOrVoid() {
			return getRuleContext(TypeTypeOrVoidContext.class,0);
		}
		public TerminalNode DOT() { return getToken(JavaParser.DOT, 0); }
		public TerminalNode CLASS() { return getToken(JavaParser.CLASS, 0); }
		public NonWildcardTypeArgumentsContext nonWildcardTypeArguments() {
			return getRuleContext(NonWildcardTypeArgumentsContext.class,0);
		}
		public ExplicitGenericInvocationSuffixContext explicitGenericInvocationSuffix() {
			return getRuleContext(ExplicitGenericInvocationSuffixContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public PrimaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primary; }
	}

	public final PrimaryContext primary() throws RecognitionException {
		PrimaryContext _localctx = new PrimaryContext(_ctx, getState());
		enterRule(_localctx, 184, RULE_primary);
		try {
			setState(1305);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,156,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1287);
				match(LPAREN);
				setState(1288);
				expression(0);
				setState(1289);
				match(RPAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1291);
				match(THIS);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1292);
				match(SUPER);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1293);
				literal();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1294);
				match(IDENTIFIER);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1295);
				typeTypeOrVoid();
				setState(1296);
				match(DOT);
				setState(1297);
				match(CLASS);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1299);
				nonWildcardTypeArguments();
				setState(1303);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case SUPER:
				case IDENTIFIER:
					{
					setState(1300);
					explicitGenericInvocationSuffix();
					}
					break;
				case THIS:
					{
					setState(1301);
					match(THIS);
					setState(1302);
					arguments();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassTypeContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public ClassOrInterfaceTypeContext classOrInterfaceType() {
			return getRuleContext(ClassOrInterfaceTypeContext.class,0);
		}
		public TerminalNode DOT() { return getToken(JavaParser.DOT, 0); }
		public List<AnnotationContext> annotation() {
			return getRuleContexts(AnnotationContext.class);
		}
		public AnnotationContext annotation(int i) {
			return getRuleContext(AnnotationContext.class,i);
		}
		public TypeArgumentsContext typeArguments() {
			return getRuleContext(TypeArgumentsContext.class,0);
		}
		public ClassTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classType; }
	}

	public final ClassTypeContext classType() throws RecognitionException {
		ClassTypeContext _localctx = new ClassTypeContext(_ctx, getState());
		enterRule(_localctx, 186, RULE_classType);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1310);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,157,_ctx) ) {
			case 1:
				{
				setState(1307);
				classOrInterfaceType();
				setState(1308);
				match(DOT);
				}
				break;
			}
			setState(1315);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,158,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1312);
					annotation();
					}
					} 
				}
				setState(1317);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,158,_ctx);
			}
			setState(1318);
			match(IDENTIFIER);
			setState(1320);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LT) {
				{
				setState(1319);
				typeArguments();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreatorContext extends ParserRuleContext {
		public NonWildcardTypeArgumentsContext nonWildcardTypeArguments() {
			return getRuleContext(NonWildcardTypeArgumentsContext.class,0);
		}
		public CreatedNameContext createdName() {
			return getRuleContext(CreatedNameContext.class,0);
		}
		public ClassCreatorRestContext classCreatorRest() {
			return getRuleContext(ClassCreatorRestContext.class,0);
		}
		public ArrayCreatorRestContext arrayCreatorRest() {
			return getRuleContext(ArrayCreatorRestContext.class,0);
		}
		public CreatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_creator; }
	}

	public final CreatorContext creator() throws RecognitionException {
		CreatorContext _localctx = new CreatorContext(_ctx, getState());
		enterRule(_localctx, 188, RULE_creator);
		try {
			setState(1331);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LT:
				enterOuterAlt(_localctx, 1);
				{
				setState(1322);
				nonWildcardTypeArguments();
				setState(1323);
				createdName();
				setState(1324);
				classCreatorRest();
				}
				break;
			case BOOLEAN:
			case BYTE:
			case CHAR:
			case DOUBLE:
			case FLOAT:
			case INT:
			case LONG:
			case SHORT:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 2);
				{
				setState(1326);
				createdName();
				setState(1329);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case LBRACK:
					{
					setState(1327);
					arrayCreatorRest();
					}
					break;
				case LPAREN:
					{
					setState(1328);
					classCreatorRest();
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
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreatedNameContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(JavaParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(JavaParser.IDENTIFIER, i);
		}
		public List<TypeArgumentsOrDiamondContext> typeArgumentsOrDiamond() {
			return getRuleContexts(TypeArgumentsOrDiamondContext.class);
		}
		public TypeArgumentsOrDiamondContext typeArgumentsOrDiamond(int i) {
			return getRuleContext(TypeArgumentsOrDiamondContext.class,i);
		}
		public List<TerminalNode> DOT() { return getTokens(JavaParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(JavaParser.DOT, i);
		}
		public PrimitiveTypeContext primitiveType() {
			return getRuleContext(PrimitiveTypeContext.class,0);
		}
		public CreatedNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createdName; }
	}

	public final CreatedNameContext createdName() throws RecognitionException {
		CreatedNameContext _localctx = new CreatedNameContext(_ctx, getState());
		enterRule(_localctx, 190, RULE_createdName);
		int _la;
		try {
			setState(1348);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(1333);
				match(IDENTIFIER);
				setState(1335);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LT) {
					{
					setState(1334);
					typeArgumentsOrDiamond();
					}
				}

				setState(1344);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==DOT) {
					{
					{
					setState(1337);
					match(DOT);
					setState(1338);
					match(IDENTIFIER);
					setState(1340);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==LT) {
						{
						setState(1339);
						typeArgumentsOrDiamond();
						}
					}

					}
					}
					setState(1346);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case BOOLEAN:
			case BYTE:
			case CHAR:
			case DOUBLE:
			case FLOAT:
			case INT:
			case LONG:
			case SHORT:
				enterOuterAlt(_localctx, 2);
				{
				setState(1347);
				primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InnerCreatorContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public ClassCreatorRestContext classCreatorRest() {
			return getRuleContext(ClassCreatorRestContext.class,0);
		}
		public NonWildcardTypeArgumentsOrDiamondContext nonWildcardTypeArgumentsOrDiamond() {
			return getRuleContext(NonWildcardTypeArgumentsOrDiamondContext.class,0);
		}
		public InnerCreatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_innerCreator; }
	}

	public final InnerCreatorContext innerCreator() throws RecognitionException {
		InnerCreatorContext _localctx = new InnerCreatorContext(_ctx, getState());
		enterRule(_localctx, 192, RULE_innerCreator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1350);
			match(IDENTIFIER);
			setState(1352);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LT) {
				{
				setState(1351);
				nonWildcardTypeArgumentsOrDiamond();
				}
			}

			setState(1354);
			classCreatorRest();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayCreatorRestContext extends ParserRuleContext {
		public List<TerminalNode> LBRACK() { return getTokens(JavaParser.LBRACK); }
		public TerminalNode LBRACK(int i) {
			return getToken(JavaParser.LBRACK, i);
		}
		public List<TerminalNode> RBRACK() { return getTokens(JavaParser.RBRACK); }
		public TerminalNode RBRACK(int i) {
			return getToken(JavaParser.RBRACK, i);
		}
		public ArrayInitializerContext arrayInitializer() {
			return getRuleContext(ArrayInitializerContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ArrayCreatorRestContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayCreatorRest; }
	}

	public final ArrayCreatorRestContext arrayCreatorRest() throws RecognitionException {
		ArrayCreatorRestContext _localctx = new ArrayCreatorRestContext(_ctx, getState());
		enterRule(_localctx, 194, RULE_arrayCreatorRest);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1356);
			match(LBRACK);
			setState(1384);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case RBRACK:
				{
				setState(1357);
				match(RBRACK);
				setState(1362);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==LBRACK) {
					{
					{
					setState(1358);
					match(LBRACK);
					setState(1359);
					match(RBRACK);
					}
					}
					setState(1364);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1365);
				arrayInitializer();
				}
				break;
			case BOOLEAN:
			case BYTE:
			case CHAR:
			case DOUBLE:
			case FLOAT:
			case INT:
			case LONG:
			case NEW:
			case SHORT:
			case SUPER:
			case THIS:
			case VOID:
			case DECIMAL_LITERAL:
			case HEX_LITERAL:
			case OCT_LITERAL:
			case BINARY_LITERAL:
			case FLOAT_LITERAL:
			case HEX_FLOAT_LITERAL:
			case BOOL_LITERAL:
			case CHAR_LITERAL:
			case STRING_LITERAL:
			case NULL_LITERAL:
			case LPAREN:
			case LT:
			case BANG:
			case TILDE:
			case INC:
			case DEC:
			case ADD:
			case SUB:
			case AT:
			case IDENTIFIER:
				{
				setState(1366);
				expression(0);
				setState(1367);
				match(RBRACK);
				setState(1374);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,168,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1368);
						match(LBRACK);
						setState(1369);
						expression(0);
						setState(1370);
						match(RBRACK);
						}
						} 
					}
					setState(1376);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,168,_ctx);
				}
				setState(1381);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,169,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1377);
						match(LBRACK);
						setState(1378);
						match(RBRACK);
						}
						} 
					}
					setState(1383);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,169,_ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassCreatorRestContext extends ParserRuleContext {
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ClassBodyContext classBody() {
			return getRuleContext(ClassBodyContext.class,0);
		}
		public ClassCreatorRestContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classCreatorRest; }
	}

	public final ClassCreatorRestContext classCreatorRest() throws RecognitionException {
		ClassCreatorRestContext _localctx = new ClassCreatorRestContext(_ctx, getState());
		enterRule(_localctx, 196, RULE_classCreatorRest);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1386);
			arguments();
			setState(1388);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,171,_ctx) ) {
			case 1:
				{
				setState(1387);
				classBody();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExplicitGenericInvocationContext extends ParserRuleContext {
		public NonWildcardTypeArgumentsContext nonWildcardTypeArguments() {
			return getRuleContext(NonWildcardTypeArgumentsContext.class,0);
		}
		public ExplicitGenericInvocationSuffixContext explicitGenericInvocationSuffix() {
			return getRuleContext(ExplicitGenericInvocationSuffixContext.class,0);
		}
		public ExplicitGenericInvocationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_explicitGenericInvocation; }
	}

	public final ExplicitGenericInvocationContext explicitGenericInvocation() throws RecognitionException {
		ExplicitGenericInvocationContext _localctx = new ExplicitGenericInvocationContext(_ctx, getState());
		enterRule(_localctx, 198, RULE_explicitGenericInvocation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1390);
			nonWildcardTypeArguments();
			setState(1391);
			explicitGenericInvocationSuffix();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeArgumentsOrDiamondContext extends ParserRuleContext {
		public TerminalNode LT() { return getToken(JavaParser.LT, 0); }
		public TerminalNode GT() { return getToken(JavaParser.GT, 0); }
		public TypeArgumentsContext typeArguments() {
			return getRuleContext(TypeArgumentsContext.class,0);
		}
		public TypeArgumentsOrDiamondContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeArgumentsOrDiamond; }
	}

	public final TypeArgumentsOrDiamondContext typeArgumentsOrDiamond() throws RecognitionException {
		TypeArgumentsOrDiamondContext _localctx = new TypeArgumentsOrDiamondContext(_ctx, getState());
		enterRule(_localctx, 200, RULE_typeArgumentsOrDiamond);
		try {
			setState(1396);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,172,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1393);
				match(LT);
				setState(1394);
				match(GT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1395);
				typeArguments();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NonWildcardTypeArgumentsOrDiamondContext extends ParserRuleContext {
		public TerminalNode LT() { return getToken(JavaParser.LT, 0); }
		public TerminalNode GT() { return getToken(JavaParser.GT, 0); }
		public NonWildcardTypeArgumentsContext nonWildcardTypeArguments() {
			return getRuleContext(NonWildcardTypeArgumentsContext.class,0);
		}
		public NonWildcardTypeArgumentsOrDiamondContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nonWildcardTypeArgumentsOrDiamond; }
	}

	public final NonWildcardTypeArgumentsOrDiamondContext nonWildcardTypeArgumentsOrDiamond() throws RecognitionException {
		NonWildcardTypeArgumentsOrDiamondContext _localctx = new NonWildcardTypeArgumentsOrDiamondContext(_ctx, getState());
		enterRule(_localctx, 202, RULE_nonWildcardTypeArgumentsOrDiamond);
		try {
			setState(1401);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,173,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1398);
				match(LT);
				setState(1399);
				match(GT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1400);
				nonWildcardTypeArguments();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NonWildcardTypeArgumentsContext extends ParserRuleContext {
		public TerminalNode LT() { return getToken(JavaParser.LT, 0); }
		public TypeListContext typeList() {
			return getRuleContext(TypeListContext.class,0);
		}
		public TerminalNode GT() { return getToken(JavaParser.GT, 0); }
		public NonWildcardTypeArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nonWildcardTypeArguments; }
	}

	public final NonWildcardTypeArgumentsContext nonWildcardTypeArguments() throws RecognitionException {
		NonWildcardTypeArgumentsContext _localctx = new NonWildcardTypeArgumentsContext(_ctx, getState());
		enterRule(_localctx, 204, RULE_nonWildcardTypeArguments);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1403);
			match(LT);
			setState(1404);
			typeList();
			setState(1405);
			match(GT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeListContext extends ParserRuleContext {
		public List<TypeTypeContext> typeType() {
			return getRuleContexts(TypeTypeContext.class);
		}
		public TypeTypeContext typeType(int i) {
			return getRuleContext(TypeTypeContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(JavaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(JavaParser.COMMA, i);
		}
		public TypeListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeList; }
	}

	public final TypeListContext typeList() throws RecognitionException {
		TypeListContext _localctx = new TypeListContext(_ctx, getState());
		enterRule(_localctx, 206, RULE_typeList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1407);
			typeType();
			setState(1412);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1408);
				match(COMMA);
				setState(1409);
				typeType();
				}
				}
				setState(1414);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeTypeContext extends ParserRuleContext {
		public ClassOrInterfaceTypeContext classOrInterfaceType() {
			return getRuleContext(ClassOrInterfaceTypeContext.class,0);
		}
		public PrimitiveTypeContext primitiveType() {
			return getRuleContext(PrimitiveTypeContext.class,0);
		}
		public List<AnnotationContext> annotation() {
			return getRuleContexts(AnnotationContext.class);
		}
		public AnnotationContext annotation(int i) {
			return getRuleContext(AnnotationContext.class,i);
		}
		public List<TerminalNode> LBRACK() { return getTokens(JavaParser.LBRACK); }
		public TerminalNode LBRACK(int i) {
			return getToken(JavaParser.LBRACK, i);
		}
		public List<TerminalNode> RBRACK() { return getTokens(JavaParser.RBRACK); }
		public TerminalNode RBRACK(int i) {
			return getToken(JavaParser.RBRACK, i);
		}
		public TypeTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeType; }
	}

	public final TypeTypeContext typeType() throws RecognitionException {
		TypeTypeContext _localctx = new TypeTypeContext(_ctx, getState());
		enterRule(_localctx, 208, RULE_typeType);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1418);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,175,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1415);
					annotation();
					}
					} 
				}
				setState(1420);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,175,_ctx);
			}
			setState(1423);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				{
				setState(1421);
				classOrInterfaceType();
				}
				break;
			case BOOLEAN:
			case BYTE:
			case CHAR:
			case DOUBLE:
			case FLOAT:
			case INT:
			case LONG:
			case SHORT:
				{
				setState(1422);
				primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(1435);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,178,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1428);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==AT || _la==IDENTIFIER) {
						{
						{
						setState(1425);
						annotation();
						}
						}
						setState(1430);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(1431);
					match(LBRACK);
					setState(1432);
					match(RBRACK);
					}
					} 
				}
				setState(1437);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,178,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrimitiveTypeContext extends ParserRuleContext {
		public TerminalNode BOOLEAN() { return getToken(JavaParser.BOOLEAN, 0); }
		public TerminalNode CHAR() { return getToken(JavaParser.CHAR, 0); }
		public TerminalNode BYTE() { return getToken(JavaParser.BYTE, 0); }
		public TerminalNode SHORT() { return getToken(JavaParser.SHORT, 0); }
		public TerminalNode INT() { return getToken(JavaParser.INT, 0); }
		public TerminalNode LONG() { return getToken(JavaParser.LONG, 0); }
		public TerminalNode FLOAT() { return getToken(JavaParser.FLOAT, 0); }
		public TerminalNode DOUBLE() { return getToken(JavaParser.DOUBLE, 0); }
		public PrimitiveTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitiveType; }
	}

	public final PrimitiveTypeContext primitiveType() throws RecognitionException {
		PrimitiveTypeContext _localctx = new PrimitiveTypeContext(_ctx, getState());
		enterRule(_localctx, 210, RULE_primitiveType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1438);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << BYTE) | (1L << CHAR) | (1L << DOUBLE) | (1L << FLOAT) | (1L << INT) | (1L << LONG) | (1L << SHORT))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeArgumentsContext extends ParserRuleContext {
		public TerminalNode LT() { return getToken(JavaParser.LT, 0); }
		public List<TypeArgumentContext> typeArgument() {
			return getRuleContexts(TypeArgumentContext.class);
		}
		public TypeArgumentContext typeArgument(int i) {
			return getRuleContext(TypeArgumentContext.class,i);
		}
		public TerminalNode GT() { return getToken(JavaParser.GT, 0); }
		public List<TerminalNode> COMMA() { return getTokens(JavaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(JavaParser.COMMA, i);
		}
		public TypeArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeArguments; }
	}

	public final TypeArgumentsContext typeArguments() throws RecognitionException {
		TypeArgumentsContext _localctx = new TypeArgumentsContext(_ctx, getState());
		enterRule(_localctx, 212, RULE_typeArguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1440);
			match(LT);
			setState(1441);
			typeArgument();
			setState(1446);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1442);
				match(COMMA);
				setState(1443);
				typeArgument();
				}
				}
				setState(1448);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1449);
			match(GT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SuperSuffixContext extends ParserRuleContext {
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public TerminalNode DOT() { return getToken(JavaParser.DOT, 0); }
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public SuperSuffixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_superSuffix; }
	}

	public final SuperSuffixContext superSuffix() throws RecognitionException {
		SuperSuffixContext _localctx = new SuperSuffixContext(_ctx, getState());
		enterRule(_localctx, 214, RULE_superSuffix);
		try {
			setState(1457);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPAREN:
				enterOuterAlt(_localctx, 1);
				{
				setState(1451);
				arguments();
				}
				break;
			case DOT:
				enterOuterAlt(_localctx, 2);
				{
				setState(1452);
				match(DOT);
				setState(1453);
				match(IDENTIFIER);
				setState(1455);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,180,_ctx) ) {
				case 1:
					{
					setState(1454);
					arguments();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExplicitGenericInvocationSuffixContext extends ParserRuleContext {
		public TerminalNode SUPER() { return getToken(JavaParser.SUPER, 0); }
		public SuperSuffixContext superSuffix() {
			return getRuleContext(SuperSuffixContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(JavaParser.IDENTIFIER, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ExplicitGenericInvocationSuffixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_explicitGenericInvocationSuffix; }
	}

	public final ExplicitGenericInvocationSuffixContext explicitGenericInvocationSuffix() throws RecognitionException {
		ExplicitGenericInvocationSuffixContext _localctx = new ExplicitGenericInvocationSuffixContext(_ctx, getState());
		enterRule(_localctx, 216, RULE_explicitGenericInvocationSuffix);
		try {
			setState(1463);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SUPER:
				enterOuterAlt(_localctx, 1);
				{
				setState(1459);
				match(SUPER);
				setState(1460);
				superSuffix();
				}
				break;
			case IDENTIFIER:
				enterOuterAlt(_localctx, 2);
				{
				setState(1461);
				match(IDENTIFIER);
				setState(1462);
				arguments();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentsContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(JavaParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(JavaParser.RPAREN, 0); }
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 218, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1465);
			match(LPAREN);
			setState(1467);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << BYTE) | (1L << CHAR) | (1L << DOUBLE) | (1L << FLOAT) | (1L << INT) | (1L << LONG) | (1L << NEW) | (1L << SHORT) | (1L << SUPER) | (1L << THIS) | (1L << VOID) | (1L << DECIMAL_LITERAL) | (1L << HEX_LITERAL) | (1L << OCT_LITERAL) | (1L << BINARY_LITERAL) | (1L << FLOAT_LITERAL) | (1L << HEX_FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << CHAR_LITERAL) | (1L << STRING_LITERAL) | (1L << NULL_LITERAL) | (1L << LPAREN))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (LT - 72)) | (1L << (BANG - 72)) | (1L << (TILDE - 72)) | (1L << (INC - 72)) | (1L << (DEC - 72)) | (1L << (ADD - 72)) | (1L << (SUB - 72)) | (1L << (AT - 72)) | (1L << (IDENTIFIER - 72)))) != 0)) {
				{
				setState(1466);
				expressionList();
				}
			}

			setState(1469);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 88:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 17);
		case 1:
			return precpred(_ctx, 16);
		case 2:
			return precpred(_ctx, 15);
		case 3:
			return precpred(_ctx, 14);
		case 4:
			return precpred(_ctx, 12);
		case 5:
			return precpred(_ctx, 11);
		case 6:
			return precpred(_ctx, 10);
		case 7:
			return precpred(_ctx, 9);
		case 8:
			return precpred(_ctx, 8);
		case 9:
			return precpred(_ctx, 7);
		case 10:
			return precpred(_ctx, 6);
		case 11:
			return precpred(_ctx, 5);
		case 12:
			return precpred(_ctx, 25);
		case 13:
			return precpred(_ctx, 24);
		case 14:
			return precpred(_ctx, 20);
		case 15:
			return precpred(_ctx, 13);
		case 16:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3r\u05c2\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\4_\t_\4"+
		"`\t`\4a\ta\4b\tb\4c\tc\4d\td\4e\te\4f\tf\4g\tg\4h\th\4i\ti\4j\tj\4k\t"+
		"k\4l\tl\4m\tm\4n\tn\4o\to\3\2\5\2\u00e0\n\2\3\2\7\2\u00e3\n\2\f\2\16\2"+
		"\u00e6\13\2\3\2\7\2\u00e9\n\2\f\2\16\2\u00ec\13\2\3\2\3\2\3\3\5\3\u00f1"+
		"\n\3\3\3\7\3\u00f4\n\3\f\3\16\3\u00f7\13\3\3\3\3\3\3\3\3\3\3\4\5\4\u00fe"+
		"\n\4\3\4\3\4\5\4\u0102\n\4\3\4\3\4\3\4\5\4\u0107\n\4\3\4\3\4\3\5\5\5\u010c"+
		"\n\5\3\5\7\5\u010f\n\5\f\5\16\5\u0112\13\5\3\5\3\5\3\5\3\5\5\5\u0118\n"+
		"\5\3\5\5\5\u011b\n\5\3\6\3\6\3\6\3\6\3\6\5\6\u0122\n\6\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\7\3\7\5\7\u012c\n\7\3\b\3\b\5\b\u0130\n\b\3\t\3\t\3\t\5\t\u0135"+
		"\n\t\3\t\5\t\u0138\n\t\3\t\5\t\u013b\n\t\3\t\3\t\3\n\3\n\3\n\3\13\3\13"+
		"\3\13\3\f\3\f\3\f\3\f\7\f\u0149\n\f\f\f\16\f\u014c\13\f\3\f\3\f\3\r\7"+
		"\r\u0151\n\r\f\r\16\r\u0154\13\r\3\r\3\r\3\r\7\r\u0159\n\r\f\r\16\r\u015c"+
		"\13\r\3\r\5\r\u015f\n\r\3\16\3\16\3\16\7\16\u0164\n\16\f\16\16\16\u0167"+
		"\13\16\3\17\3\17\3\17\3\17\5\17\u016d\n\17\3\17\3\17\5\17\u0171\n\17\3"+
		"\17\5\17\u0174\n\17\3\17\5\17\u0177\n\17\3\17\3\17\3\20\3\20\3\20\7\20"+
		"\u017e\n\20\f\20\16\20\u0181\13\20\3\21\7\21\u0184\n\21\f\21\16\21\u0187"+
		"\13\21\3\21\3\21\5\21\u018b\n\21\3\21\5\21\u018e\n\21\3\22\3\22\7\22\u0192"+
		"\n\22\f\22\16\22\u0195\13\22\3\23\3\23\3\23\5\23\u019a\n\23\3\23\5\23"+
		"\u019d\n\23\3\23\3\23\3\24\3\24\3\24\3\25\3\25\3\26\3\26\7\26\u01a8\n"+
		"\26\f\26\16\26\u01ab\13\26\3\26\3\26\3\27\3\27\7\27\u01b1\n\27\f\27\16"+
		"\27\u01b4\13\27\3\27\3\27\3\30\3\30\5\30\u01ba\n\30\3\30\3\30\5\30\u01be"+
		"\n\30\3\30\7\30\u01c1\n\30\f\30\16\30\u01c4\13\30\3\30\5\30\u01c7\n\30"+
		"\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\5\31\u01d2\n\31\3\32\3\32"+
		"\3\32\3\32\3\32\7\32\u01d9\n\32\f\32\16\32\u01dc\13\32\3\32\5\32\u01df"+
		"\n\32\3\32\3\32\3\33\3\33\3\33\3\34\3\34\5\34\u01e8\n\34\3\35\3\35\5\35"+
		"\u01ec\n\35\3\36\3\36\3\36\3\37\3\37\3\37\3 \3 \3 \3 \5 \u01f8\n \3 \3"+
		" \3!\3!\3!\3!\3\"\5\"\u0201\n\"\3\"\7\"\u0204\n\"\f\"\16\"\u0207\13\""+
		"\3\"\3\"\5\"\u020b\n\"\3#\3#\3#\3#\3#\3#\3#\5#\u0214\n#\3$\3$\3$\3$\7"+
		"$\u021a\n$\f$\16$\u021d\13$\3$\3$\3%\3%\3%\7%\u0224\n%\f%\16%\u0227\13"+
		"%\3%\3%\3%\3&\7&\u022d\n&\f&\16&\u0230\13&\3&\3&\3&\7&\u0235\n&\f&\16"+
		"&\u0238\13&\3&\3&\5&\u023c\n&\3&\3&\3&\3&\7&\u0242\n&\f&\16&\u0245\13"+
		"&\3&\5&\u0248\n&\3&\3&\3\'\3\'\3\'\3\'\3\'\3\'\5\'\u0252\n\'\3(\3(\3("+
		"\3)\3)\3)\7)\u025a\n)\f)\16)\u025d\13)\3*\3*\3*\5*\u0262\n*\3+\3+\3+\7"+
		"+\u0267\n+\f+\16+\u026a\13+\3,\3,\5,\u026e\n,\3-\3-\3-\3-\7-\u0274\n-"+
		"\f-\16-\u0277\13-\3-\5-\u027a\n-\5-\u027c\n-\3-\3-\3.\3.\5.\u0282\n.\3"+
		".\3.\3.\5.\u0287\n.\7.\u0289\n.\f.\16.\u028c\13.\3/\3/\7/\u0290\n/\f/"+
		"\16/\u0293\13/\3/\3/\3/\5/\u0298\n/\5/\u029a\n/\3\60\3\60\3\60\7\60\u029f"+
		"\n\60\f\60\16\60\u02a2\13\60\3\61\3\61\5\61\u02a6\n\61\3\61\3\61\3\62"+
		"\3\62\3\62\7\62\u02ad\n\62\f\62\16\62\u02b0\13\62\3\62\3\62\5\62\u02b4"+
		"\n\62\3\62\5\62\u02b7\n\62\3\63\7\63\u02ba\n\63\f\63\16\63\u02bd\13\63"+
		"\3\63\3\63\3\63\3\64\7\64\u02c3\n\64\f\64\16\64\u02c6\13\64\3\64\3\64"+
		"\7\64\u02ca\n\64\f\64\16\64\u02cd\13\64\3\64\3\64\3\64\3\65\3\65\3\65"+
		"\7\65\u02d5\n\65\f\65\16\65\u02d8\13\65\3\66\3\66\3\66\3\66\3\66\3\66"+
		"\5\66\u02e0\n\66\3\67\3\67\38\38\39\39\79\u02e8\n9\f9\169\u02eb\139\3"+
		"9\39\39\3:\3:\3:\5:\u02f3\n:\3:\3:\3:\5:\u02f8\n:\3:\5:\u02fb\n:\3;\3"+
		";\3;\7;\u0300\n;\f;\16;\u0303\13;\3<\3<\3<\3<\3=\3=\3=\5=\u030c\n=\3>"+
		"\3>\3>\3>\7>\u0312\n>\f>\16>\u0315\13>\5>\u0317\n>\3>\5>\u031a\n>\3>\3"+
		">\3?\3?\3?\3?\3?\3@\3@\7@\u0325\n@\f@\16@\u0328\13@\3@\3@\3A\7A\u032d"+
		"\nA\fA\16A\u0330\13A\3A\3A\5A\u0334\nA\3B\3B\3B\3B\3B\3B\5B\u033c\nB\3"+
		"B\3B\5B\u0340\nB\3B\3B\5B\u0344\nB\3B\3B\5B\u0348\nB\5B\u034a\nB\3C\3"+
		"C\5C\u034e\nC\3D\3D\3D\3D\5D\u0354\nD\3E\3E\3F\3F\3F\3G\3G\7G\u035d\n"+
		"G\fG\16G\u0360\13G\3G\3G\3H\3H\3H\3H\3H\5H\u0369\nH\3I\7I\u036c\nI\fI"+
		"\16I\u036f\13I\3I\3I\3I\3J\7J\u0375\nJ\fJ\16J\u0378\13J\3J\3J\5J\u037c"+
		"\nJ\3J\5J\u037f\nJ\3K\3K\3K\3K\3K\5K\u0386\nK\3K\3K\3K\3K\3K\3K\3K\5K"+
		"\u038f\nK\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\6K"+
		"\u03a4\nK\rK\16K\u03a5\3K\5K\u03a9\nK\3K\5K\u03ac\nK\3K\3K\3K\3K\7K\u03b2"+
		"\nK\fK\16K\u03b5\13K\3K\5K\u03b8\nK\3K\3K\3K\3K\7K\u03be\nK\fK\16K\u03c1"+
		"\13K\3K\7K\u03c4\nK\fK\16K\u03c7\13K\3K\3K\3K\3K\3K\3K\3K\3K\5K\u03d1"+
		"\nK\3K\3K\3K\3K\3K\3K\3K\5K\u03da\nK\3K\3K\3K\5K\u03df\nK\3K\3K\3K\3K"+
		"\3K\3K\3K\3K\3K\5K\u03ea\nK\3L\3L\3L\7L\u03ef\nL\fL\16L\u03f2\13L\3L\3"+
		"L\3L\3L\3L\3M\3M\3M\7M\u03fc\nM\fM\16M\u03ff\13M\3N\3N\3N\3O\3O\3O\5O"+
		"\u0407\nO\3O\3O\3P\3P\3P\7P\u040e\nP\fP\16P\u0411\13P\3Q\7Q\u0414\nQ\f"+
		"Q\16Q\u0417\13Q\3Q\3Q\3Q\3Q\3Q\3R\6R\u041f\nR\rR\16R\u0420\3R\6R\u0424"+
		"\nR\rR\16R\u0425\3S\3S\3S\5S\u042b\nS\3S\3S\3S\5S\u0430\nS\3T\3T\5T\u0434"+
		"\nT\3T\3T\5T\u0438\nT\3T\3T\5T\u043c\nT\5T\u043e\nT\3U\3U\5U\u0442\nU"+
		"\3V\7V\u0445\nV\fV\16V\u0448\13V\3V\3V\3V\3V\3V\3W\3W\3W\3W\3X\3X\3X\7"+
		"X\u0456\nX\fX\16X\u0459\13X\3Y\3Y\3Y\5Y\u045e\nY\3Y\3Y\3Y\3Y\5Y\u0464"+
		"\nY\3Y\3Y\3Y\3Y\5Y\u046a\nY\3Y\5Y\u046d\nY\3Z\3Z\3Z\3Z\3Z\3Z\3Z\7Z\u0476"+
		"\nZ\fZ\16Z\u0479\13Z\3Z\3Z\3Z\7Z\u047e\nZ\fZ\16Z\u0481\13Z\3Z\3Z\3Z\3"+
		"Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\5Z\u048e\nZ\3Z\3Z\5Z\u0492\nZ\3Z\3Z\3Z\5Z\u0497"+
		"\nZ\3Z\3Z\5Z\u049b\nZ\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\5Z\u04ab"+
		"\nZ\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z"+
		"\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\5Z\u04d3\nZ\3Z\3Z\3Z"+
		"\3Z\5Z\u04d9\nZ\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\3Z\5Z\u04e8\nZ\3Z"+
		"\7Z\u04eb\nZ\fZ\16Z\u04ee\13Z\3[\3[\3[\3[\3\\\3\\\3\\\5\\\u04f7\n\\\3"+
		"\\\3\\\3\\\3\\\3\\\7\\\u04fe\n\\\f\\\16\\\u0501\13\\\3\\\5\\\u0504\n\\"+
		"\3]\3]\5]\u0508\n]\3^\3^\3^\3^\3^\3^\3^\3^\3^\3^\3^\3^\3^\3^\3^\3^\5^"+
		"\u051a\n^\5^\u051c\n^\3_\3_\3_\5_\u0521\n_\3_\7_\u0524\n_\f_\16_\u0527"+
		"\13_\3_\3_\5_\u052b\n_\3`\3`\3`\3`\3`\3`\3`\5`\u0534\n`\5`\u0536\n`\3"+
		"a\3a\5a\u053a\na\3a\3a\3a\5a\u053f\na\7a\u0541\na\fa\16a\u0544\13a\3a"+
		"\5a\u0547\na\3b\3b\5b\u054b\nb\3b\3b\3c\3c\3c\3c\7c\u0553\nc\fc\16c\u0556"+
		"\13c\3c\3c\3c\3c\3c\3c\3c\7c\u055f\nc\fc\16c\u0562\13c\3c\3c\7c\u0566"+
		"\nc\fc\16c\u0569\13c\5c\u056b\nc\3d\3d\5d\u056f\nd\3e\3e\3e\3f\3f\3f\5"+
		"f\u0577\nf\3g\3g\3g\5g\u057c\ng\3h\3h\3h\3h\3i\3i\3i\7i\u0585\ni\fi\16"+
		"i\u0588\13i\3j\7j\u058b\nj\fj\16j\u058e\13j\3j\3j\5j\u0592\nj\3j\7j\u0595"+
		"\nj\fj\16j\u0598\13j\3j\3j\7j\u059c\nj\fj\16j\u059f\13j\3k\3k\3l\3l\3"+
		"l\3l\7l\u05a7\nl\fl\16l\u05aa\13l\3l\3l\3m\3m\3m\3m\5m\u05b2\nm\5m\u05b4"+
		"\nm\3n\3n\3n\3n\5n\u05ba\nn\3o\3o\5o\u05be\no\3o\3o\3o\2\3\u00b2p\2\4"+
		"\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNP"+
		"RTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u008e"+
		"\u0090\u0092\u0094\u0096\u0098\u009a\u009c\u009e\u00a0\u00a2\u00a4\u00a6"+
		"\u00a8\u00aa\u00ac\u00ae\u00b0\u00b2\u00b4\u00b6\u00b8\u00ba\u00bc\u00be"+
		"\u00c0\u00c2\u00c4\u00c6\u00c8\u00ca\u00cc\u00ce\u00d0\u00d2\u00d4\u00d6"+
		"\u00d8\u00da\u00dc\2\16\4\2\23\23**\3\2\658\3\29:\3\2UX\3\2KL\4\2YZ^^"+
		"\3\2WX\4\2IJPQ\4\2OORR\4\2HH_i\3\2UV\n\2\5\5\7\7\n\n\20\20\26\26\35\35"+
		"\37\37\'\'\2\u0663\2\u00df\3\2\2\2\4\u00f0\3\2\2\2\6\u00fd\3\2\2\2\b\u011a"+
		"\3\2\2\2\n\u0121\3\2\2\2\f\u012b\3\2\2\2\16\u012f\3\2\2\2\20\u0131\3\2"+
		"\2\2\22\u013e\3\2\2\2\24\u0141\3\2\2\2\26\u0144\3\2\2\2\30\u0152\3\2\2"+
		"\2\32\u0160\3\2\2\2\34\u0168\3\2\2\2\36\u017a\3\2\2\2 \u0185\3\2\2\2\""+
		"\u018f\3\2\2\2$\u0196\3\2\2\2&\u01a0\3\2\2\2(\u01a3\3\2\2\2*\u01a5\3\2"+
		"\2\2,\u01ae\3\2\2\2.\u01c6\3\2\2\2\60\u01d1\3\2\2\2\62\u01d3\3\2\2\2\64"+
		"\u01e2\3\2\2\2\66\u01e7\3\2\2\28\u01eb\3\2\2\2:\u01ed\3\2\2\2<\u01f0\3"+
		"\2\2\2>\u01f3\3\2\2\2@\u01fb\3\2\2\2B\u020a\3\2\2\2D\u0213\3\2\2\2F\u0215"+
		"\3\2\2\2H\u0220\3\2\2\2J\u022e\3\2\2\2L\u0251\3\2\2\2N\u0253\3\2\2\2P"+
		"\u0256\3\2\2\2R\u025e\3\2\2\2T\u0263\3\2\2\2V\u026d\3\2\2\2X\u026f\3\2"+
		"\2\2Z\u027f\3\2\2\2\\\u0299\3\2\2\2^\u029b\3\2\2\2`\u02a3\3\2\2\2b\u02b6"+
		"\3\2\2\2d\u02bb\3\2\2\2f\u02c4\3\2\2\2h\u02d1\3\2\2\2j\u02df\3\2\2\2l"+
		"\u02e1\3\2\2\2n\u02e3\3\2\2\2p\u02e9\3\2\2\2r\u02f2\3\2\2\2t\u02fc\3\2"+
		"\2\2v\u0304\3\2\2\2x\u030b\3\2\2\2z\u030d\3\2\2\2|\u031d\3\2\2\2~\u0322"+
		"\3\2\2\2\u0080\u0333\3\2\2\2\u0082\u0349\3\2\2\2\u0084\u034d\3\2\2\2\u0086"+
		"\u034f\3\2\2\2\u0088\u0355\3\2\2\2\u008a\u0357\3\2\2\2\u008c\u035a\3\2"+
		"\2\2\u008e\u0368\3\2\2\2\u0090\u036d\3\2\2\2\u0092\u037e\3\2\2\2\u0094"+
		"\u03e9\3\2\2\2\u0096\u03eb\3\2\2\2\u0098\u03f8\3\2\2\2\u009a\u0400\3\2"+
		"\2\2\u009c\u0403\3\2\2\2\u009e\u040a\3\2\2\2\u00a0\u0415\3\2\2\2\u00a2"+
		"\u041e\3\2\2\2\u00a4\u042f\3\2\2\2\u00a6\u043d\3\2\2\2\u00a8\u0441\3\2"+
		"\2\2\u00aa\u0446\3\2\2\2\u00ac\u044e\3\2\2\2\u00ae\u0452\3\2\2\2\u00b0"+
		"\u046c\3\2\2\2\u00b2\u049a\3\2\2\2\u00b4\u04ef\3\2\2\2\u00b6\u0503\3\2"+
		"\2\2\u00b8\u0507\3\2\2\2\u00ba\u051b\3\2\2\2\u00bc\u0520\3\2\2\2\u00be"+
		"\u0535\3\2\2\2\u00c0\u0546\3\2\2\2\u00c2\u0548\3\2\2\2\u00c4\u054e\3\2"+
		"\2\2\u00c6\u056c\3\2\2\2\u00c8\u0570\3\2\2\2\u00ca\u0576\3\2\2\2\u00cc"+
		"\u057b\3\2\2\2\u00ce\u057d\3\2\2\2\u00d0\u0581\3\2\2\2\u00d2\u058c\3\2"+
		"\2\2\u00d4\u05a0\3\2\2\2\u00d6\u05a2\3\2\2\2\u00d8\u05b3\3\2\2\2\u00da"+
		"\u05b9\3\2\2\2\u00dc\u05bb\3\2\2\2\u00de\u00e0\5\4\3\2\u00df\u00de\3\2"+
		"\2\2\u00df\u00e0\3\2\2\2\u00e0\u00e4\3\2\2\2\u00e1\u00e3\5\6\4\2\u00e2"+
		"\u00e1\3\2\2\2\u00e3\u00e6\3\2\2\2\u00e4\u00e2\3\2\2\2\u00e4\u00e5\3\2"+
		"\2\2\u00e5\u00ea\3\2\2\2\u00e6\u00e4\3\2\2\2\u00e7\u00e9\5\b\5\2\u00e8"+
		"\u00e7\3\2\2\2\u00e9\u00ec\3\2\2\2\u00ea\u00e8\3\2\2\2\u00ea\u00eb\3\2"+
		"\2\2\u00eb\u00ed\3\2\2\2\u00ec\u00ea\3\2\2\2\u00ed\u00ee\7\2\2\3\u00ee"+
		"\3\3\2\2\2\u00ef\u00f1\5(\25\2\u00f0\u00ef\3\2\2\2\u00f0\u00f1\3\2\2\2"+
		"\u00f1\u00f5\3\2\2\2\u00f2\u00f4\5r:\2\u00f3\u00f2\3\2\2\2\u00f4\u00f7"+
		"\3\2\2\2\u00f5\u00f3\3\2\2\2\u00f5\u00f6\3\2\2\2\u00f6\u00f8\3\2\2\2\u00f7"+
		"\u00f5\3\2\2\2\u00f8\u00f9\7\"\2\2\u00f9\u00fa\5h\65\2\u00fa\u00fb\7E"+
		"\2\2\u00fb\5\3\2\2\2\u00fc\u00fe\5(\25\2\u00fd\u00fc\3\2\2\2\u00fd\u00fe"+
		"\3\2\2\2\u00fe\u00ff\3\2\2\2\u00ff\u0101\7\33\2\2\u0100\u0102\7(\2\2\u0101"+
		"\u0100\3\2\2\2\u0101\u0102\3\2\2\2\u0102\u0103\3\2\2\2\u0103\u0106\5h"+
		"\65\2\u0104\u0105\7G\2\2\u0105\u0107\7Y\2\2\u0106\u0104\3\2\2\2\u0106"+
		"\u0107\3\2\2\2\u0107\u0108\3\2\2\2\u0108\u0109\7E\2\2\u0109\7\3\2\2\2"+
		"\u010a\u010c\5(\25\2\u010b\u010a\3\2\2\2\u010b\u010c\3\2\2\2\u010c\u0110"+
		"\3\2\2\2\u010d\u010f\5\f\7\2\u010e\u010d\3\2\2\2\u010f\u0112\3\2\2\2\u0110"+
		"\u010e\3\2\2\2\u0110\u0111\3\2\2\2\u0111\u0117\3\2\2\2\u0112\u0110\3\2"+
		"\2\2\u0113\u0118\5\20\t\2\u0114\u0118\5\34\17\2\u0115\u0118\5$\23\2\u0116"+
		"\u0118\5|?\2\u0117\u0113\3\2\2\2\u0117\u0114\3\2\2\2\u0117\u0115\3\2\2"+
		"\2\u0117\u0116\3\2\2\2\u0118\u011b\3\2\2\2\u0119\u011b\7E\2\2\u011a\u010b"+
		"\3\2\2\2\u011a\u0119\3\2\2\2\u011b\t\3\2\2\2\u011c\u0122\5\f\7\2\u011d"+
		"\u0122\7 \2\2\u011e\u0122\7,\2\2\u011f\u0122\7\60\2\2\u0120\u0122\7\63"+
		"\2\2\u0121\u011c\3\2\2\2\u0121\u011d\3\2\2\2\u0121\u011e\3\2\2\2\u0121"+
		"\u011f\3\2\2\2\u0121\u0120\3\2\2\2\u0122\13\3\2\2\2\u0123\u012c\5r:\2"+
		"\u0124\u012c\7%\2\2\u0125\u012c\7$\2\2\u0126\u012c\7#\2\2\u0127\u012c"+
		"\7(\2\2\u0128\u012c\7\3\2\2\u0129\u012c\7\24\2\2\u012a\u012c\7)\2\2\u012b"+
		"\u0123\3\2\2\2\u012b\u0124\3\2\2\2\u012b\u0125\3\2\2\2\u012b\u0126\3\2"+
		"\2\2\u012b\u0127\3\2\2\2\u012b\u0128\3\2\2\2\u012b\u0129\3\2\2\2\u012b"+
		"\u012a\3\2\2\2\u012c\r\3\2\2\2\u012d\u0130\7\24\2\2\u012e\u0130\5r:\2"+
		"\u012f\u012d\3\2\2\2\u012f\u012e\3\2\2\2\u0130\17\3\2\2\2\u0131\u0132"+
		"\7\13\2\2\u0132\u0134\7r\2\2\u0133\u0135\5\26\f\2\u0134\u0133\3\2\2\2"+
		"\u0134\u0135\3\2\2\2\u0135\u0137\3\2\2\2\u0136\u0138\5\22\n\2\u0137\u0136"+
		"\3\2\2\2\u0137\u0138\3\2\2\2\u0138\u013a\3\2\2\2\u0139\u013b\5\24\13\2"+
		"\u013a\u0139\3\2\2\2\u013a\u013b\3\2\2\2\u013b\u013c\3\2\2\2\u013c\u013d"+
		"\5*\26\2\u013d\21\3\2\2\2\u013e\u013f\7\23\2\2\u013f\u0140\5\u00d2j\2"+
		"\u0140\23\3\2\2\2\u0141\u0142\7\32\2\2\u0142\u0143\5\u00d0i\2\u0143\25"+
		"\3\2\2\2\u0144\u0145\7J\2\2\u0145\u014a\5\30\r\2\u0146\u0147\7F\2\2\u0147"+
		"\u0149\5\30\r\2\u0148\u0146\3\2\2\2\u0149\u014c\3\2\2\2\u014a\u0148\3"+
		"\2\2\2\u014a\u014b\3\2\2\2\u014b\u014d\3\2\2\2\u014c\u014a\3\2\2\2\u014d"+
		"\u014e\7I\2\2\u014e\27\3\2\2\2\u014f\u0151\5r:\2\u0150\u014f\3\2\2\2\u0151"+
		"\u0154\3\2\2\2\u0152\u0150\3\2\2\2\u0152\u0153\3\2\2\2\u0153\u0155\3\2"+
		"\2\2\u0154\u0152\3\2\2\2\u0155\u015e\7r\2\2\u0156\u015a\7\23\2\2\u0157"+
		"\u0159\5r:\2\u0158\u0157\3\2\2\2\u0159\u015c\3\2\2\2\u015a\u0158\3\2\2"+
		"\2\u015a\u015b\3\2\2\2\u015b\u015d\3\2\2\2\u015c\u015a\3\2\2\2\u015d\u015f"+
		"\5\32\16\2\u015e\u0156\3\2\2\2\u015e\u015f\3\2\2\2\u015f\31\3\2\2\2\u0160"+
		"\u0165\5\u00d2j\2\u0161\u0162\7[\2\2\u0162\u0164\5\u00d2j\2\u0163\u0161"+
		"\3\2\2\2\u0164\u0167\3\2\2\2\u0165\u0163\3\2\2\2\u0165\u0166\3\2\2\2\u0166"+
		"\33\3\2\2\2\u0167\u0165\3\2\2\2\u0168\u0169\7\22\2\2\u0169\u016c\7r\2"+
		"\2\u016a\u016b\7\32\2\2\u016b\u016d\5\u00d0i\2\u016c\u016a\3\2\2\2\u016c"+
		"\u016d\3\2\2\2\u016d\u016e\3\2\2\2\u016e\u0170\7A\2\2\u016f\u0171\5\36"+
		"\20\2\u0170\u016f\3\2\2\2\u0170\u0171\3\2\2\2\u0171\u0173\3\2\2\2\u0172"+
		"\u0174\7F\2\2\u0173\u0172\3\2\2\2\u0173\u0174\3\2\2\2\u0174\u0176\3\2"+
		"\2\2\u0175\u0177\5\"\22\2\u0176\u0175\3\2\2\2\u0176\u0177\3\2\2\2\u0177"+
		"\u0178\3\2\2\2\u0178\u0179\7B\2\2\u0179\35\3\2\2\2\u017a\u017f\5 \21\2"+
		"\u017b\u017c\7F\2\2\u017c\u017e\5 \21\2\u017d\u017b\3\2\2\2\u017e\u0181"+
		"\3\2\2\2\u017f\u017d\3\2\2\2\u017f\u0180\3\2\2\2\u0180\37\3\2\2\2\u0181"+
		"\u017f\3\2\2\2\u0182\u0184\5r:\2\u0183\u0182\3\2\2\2\u0184\u0187\3\2\2"+
		"\2\u0185\u0183\3\2\2\2\u0185\u0186\3\2\2\2\u0186\u0188\3\2\2\2\u0187\u0185"+
		"\3\2\2\2\u0188\u018a\7r\2\2\u0189\u018b\5\u00dco\2\u018a\u0189\3\2\2\2"+
		"\u018a\u018b\3\2\2\2\u018b\u018d\3\2\2\2\u018c\u018e\5*\26\2\u018d\u018c"+
		"\3\2\2\2\u018d\u018e\3\2\2\2\u018e!\3\2\2\2\u018f\u0193\7E\2\2\u0190\u0192"+
		"\5.\30\2\u0191\u0190\3\2\2\2\u0192\u0195\3\2\2\2\u0193\u0191\3\2\2\2\u0193"+
		"\u0194\3\2\2\2\u0194#\3\2\2\2\u0195\u0193\3\2\2\2\u0196\u0197\7\36\2\2"+
		"\u0197\u0199\7r\2\2\u0198\u019a\5\26\f\2\u0199\u0198\3\2\2\2\u0199\u019a"+
		"\3\2\2\2\u019a\u019c\3\2\2\2\u019b\u019d\5&\24\2\u019c\u019b\3\2\2\2\u019c"+
		"\u019d\3\2\2\2\u019d\u019e\3\2\2\2\u019e\u019f\5,\27\2\u019f%\3\2\2\2"+
		"\u01a0\u01a1\7\23\2\2\u01a1\u01a2\5\u00d0i\2\u01a2\'\3\2\2\2\u01a3\u01a4"+
		"\7o\2\2\u01a4)\3\2\2\2\u01a5\u01a9\7A\2\2\u01a6\u01a8\5.\30\2\u01a7\u01a6"+
		"\3\2\2\2\u01a8\u01ab\3\2\2\2\u01a9\u01a7\3\2\2\2\u01a9\u01aa\3\2\2\2\u01aa"+
		"\u01ac\3\2\2\2\u01ab\u01a9\3\2\2\2\u01ac\u01ad\7B\2\2\u01ad+\3\2\2\2\u01ae"+
		"\u01b2\7A\2\2\u01af\u01b1\5B\"\2\u01b0\u01af\3\2\2\2\u01b1\u01b4\3\2\2"+
		"\2\u01b2\u01b0\3\2\2\2\u01b2\u01b3\3\2\2\2\u01b3\u01b5\3\2\2\2\u01b4\u01b2"+
		"\3\2\2\2\u01b5\u01b6\7B\2\2\u01b6-\3\2\2\2\u01b7\u01c7\7E\2\2\u01b8\u01ba"+
		"\7(\2\2\u01b9\u01b8\3\2\2\2\u01b9\u01ba\3\2\2\2\u01ba\u01bb\3\2\2\2\u01bb"+
		"\u01c7\5\u008cG\2\u01bc\u01be\5(\25\2\u01bd\u01bc\3\2\2\2\u01bd\u01be"+
		"\3\2\2\2\u01be\u01c2\3\2\2\2\u01bf\u01c1\5\n\6\2\u01c0\u01bf\3\2\2\2\u01c1"+
		"\u01c4\3\2\2\2\u01c2\u01c0\3\2\2\2\u01c2\u01c3\3\2\2\2\u01c3\u01c5\3\2"+
		"\2\2\u01c4\u01c2\3\2\2\2\u01c5\u01c7\5\60\31\2\u01c6\u01b7\3\2\2\2\u01c6"+
		"\u01b9\3\2\2\2\u01c6\u01bd\3\2\2\2\u01c7/\3\2\2\2\u01c8\u01d2\5\62\32"+
		"\2\u01c9\u01d2\5:\36\2\u01ca\u01d2\5@!\2\u01cb\u01d2\5> \2\u01cc\u01d2"+
		"\5<\37\2\u01cd\u01d2\5$\23\2\u01ce\u01d2\5|?\2\u01cf\u01d2\5\20\t\2\u01d0"+
		"\u01d2\5\34\17\2\u01d1\u01c8\3\2\2\2\u01d1\u01c9\3\2\2\2\u01d1\u01ca\3"+
		"\2\2\2\u01d1\u01cb\3\2\2\2\u01d1\u01cc\3\2\2\2\u01d1\u01cd\3\2\2\2\u01d1"+
		"\u01ce\3\2\2\2\u01d1\u01cf\3\2\2\2\u01d1\u01d0\3\2\2\2\u01d2\61\3\2\2"+
		"\2\u01d3\u01d4\58\35\2\u01d4\u01d5\7r\2\2\u01d5\u01da\5`\61\2\u01d6\u01d7"+
		"\7C\2\2\u01d7\u01d9\7D\2\2\u01d8\u01d6\3\2\2\2\u01d9\u01dc\3\2\2\2\u01da"+
		"\u01d8\3\2\2\2\u01da\u01db\3\2\2\2\u01db\u01de\3\2\2\2\u01dc\u01da\3\2"+
		"\2\2\u01dd\u01df\5\64\33\2\u01de\u01dd\3\2\2\2\u01de\u01df\3\2\2\2\u01df"+
		"\u01e0\3\2\2\2\u01e0\u01e1\5\66\34\2\u01e1\63\3\2\2\2\u01e2\u01e3\7/\2"+
		"\2\u01e3\u01e4\5^\60\2\u01e4\65\3\2\2\2\u01e5\u01e8\5\u008cG\2\u01e6\u01e8"+
		"\7E\2\2\u01e7\u01e5\3\2\2\2\u01e7\u01e6\3\2\2\2\u01e8\67\3\2\2\2\u01e9"+
		"\u01ec\5\u00d2j\2\u01ea\u01ec\7\62\2\2\u01eb\u01e9\3\2\2\2\u01eb\u01ea"+
		"\3\2\2\2\u01ec9\3\2\2\2\u01ed\u01ee\5\26\f\2\u01ee\u01ef\5\62\32\2\u01ef"+
		";\3\2\2\2\u01f0\u01f1\5\26\f\2\u01f1\u01f2\5> \2\u01f2=\3\2\2\2\u01f3"+
		"\u01f4\7r\2\2\u01f4\u01f7\5`\61\2\u01f5\u01f6\7/\2\2\u01f6\u01f8\5^\60"+
		"\2\u01f7\u01f5\3\2\2\2\u01f7\u01f8\3\2\2\2\u01f8\u01f9\3\2\2\2\u01f9\u01fa"+
		"\5\u008cG\2\u01fa?\3\2\2\2\u01fb\u01fc\5\u00d2j\2\u01fc\u01fd\5P)\2\u01fd"+
		"\u01fe\7E\2\2\u01feA\3\2\2\2\u01ff\u0201\5(\25\2\u0200\u01ff\3\2\2\2\u0200"+
		"\u0201\3\2\2\2\u0201\u0205\3\2\2\2\u0202\u0204\5\n\6\2\u0203\u0202\3\2"+
		"\2\2\u0204\u0207\3\2\2\2\u0205\u0203\3\2\2\2\u0205\u0206\3\2\2\2\u0206"+
		"\u0208\3\2\2\2\u0207\u0205\3\2\2\2\u0208\u020b\5D#\2\u0209\u020b\7E\2"+
		"\2\u020a\u0200\3\2\2\2\u020a\u0209\3\2\2\2\u020bC\3\2\2\2\u020c\u0214"+
		"\5F$\2\u020d\u0214\5J&\2\u020e\u0214\5N(\2\u020f\u0214\5$\23\2\u0210\u0214"+
		"\5|?\2\u0211\u0214\5\20\t\2\u0212\u0214\5\34\17\2\u0213\u020c\3\2\2\2"+
		"\u0213\u020d\3\2\2\2\u0213\u020e\3\2\2\2\u0213\u020f\3\2\2\2\u0213\u0210"+
		"\3\2\2\2\u0213\u0211\3\2\2\2\u0213\u0212\3\2\2\2\u0214E\3\2\2\2\u0215"+
		"\u0216\5\u00d2j\2\u0216\u021b\5H%\2\u0217\u0218\7F\2\2\u0218\u021a\5H"+
		"%\2\u0219\u0217\3\2\2\2\u021a\u021d\3\2\2\2\u021b\u0219\3\2\2\2\u021b"+
		"\u021c\3\2\2\2\u021c\u021e\3\2\2\2\u021d\u021b\3\2\2\2\u021e\u021f\7E"+
		"\2\2\u021fG\3\2\2\2\u0220\u0225\7r\2\2\u0221\u0222\7C\2\2\u0222\u0224"+
		"\7D\2\2\u0223\u0221\3\2\2\2\u0224\u0227\3\2\2\2\u0225\u0223\3\2\2\2\u0225"+
		"\u0226\3\2\2\2\u0226\u0228\3\2\2\2\u0227\u0225\3\2\2\2\u0228\u0229\7H"+
		"\2\2\u0229\u022a\5V,\2\u022aI\3\2\2\2\u022b\u022d\5L\'\2\u022c\u022b\3"+
		"\2\2\2\u022d\u0230\3\2\2\2\u022e\u022c\3\2\2\2\u022e\u022f\3\2\2\2\u022f"+
		"\u023b\3\2\2\2\u0230\u022e\3\2\2\2\u0231\u023c\58\35\2\u0232\u0236\5\26"+
		"\f\2\u0233\u0235\5r:\2\u0234\u0233\3\2\2\2\u0235\u0238\3\2\2\2\u0236\u0234"+
		"\3\2\2\2\u0236\u0237\3\2\2\2\u0237\u0239\3\2\2\2\u0238\u0236\3\2\2\2\u0239"+
		"\u023a\58\35\2\u023a\u023c\3\2\2\2\u023b\u0231\3\2\2\2\u023b\u0232\3\2"+
		"\2\2\u023c\u023d\3\2\2\2\u023d\u023e\7r\2\2\u023e\u0243\5`\61\2\u023f"+
		"\u0240\7C\2\2\u0240\u0242\7D\2\2\u0241\u023f\3\2\2\2\u0242\u0245\3\2\2"+
		"\2\u0243\u0241\3\2\2\2\u0243\u0244\3\2\2\2\u0244\u0247\3\2\2\2\u0245\u0243"+
		"\3\2\2\2\u0246\u0248\5\64\33\2\u0247\u0246\3\2\2\2\u0247\u0248\3\2\2\2"+
		"\u0248\u0249\3\2\2\2\u0249\u024a\5\66\34\2\u024aK\3\2\2\2\u024b\u0252"+
		"\5r:\2\u024c\u0252\7%\2\2\u024d\u0252\7\3\2\2\u024e\u0252\7\16\2\2\u024f"+
		"\u0252\7(\2\2\u0250\u0252\7)\2\2\u0251\u024b\3\2\2\2\u0251\u024c\3\2\2"+
		"\2\u0251\u024d\3\2\2\2\u0251\u024e\3\2\2\2\u0251\u024f\3\2\2\2\u0251\u0250"+
		"\3\2\2\2\u0252M\3\2\2\2\u0253\u0254\5\26\f\2\u0254\u0255\5J&\2\u0255O"+
		"\3\2\2\2\u0256\u025b\5R*\2\u0257\u0258\7F\2\2\u0258\u025a\5R*\2\u0259"+
		"\u0257\3\2\2\2\u025a\u025d\3\2\2\2\u025b\u0259\3\2\2\2\u025b\u025c\3\2"+
		"\2\2\u025cQ\3\2\2\2\u025d\u025b\3\2\2\2\u025e\u0261\5T+\2\u025f\u0260"+
		"\7H\2\2\u0260\u0262\5V,\2\u0261\u025f\3\2\2\2\u0261\u0262\3\2\2\2\u0262"+
		"S\3\2\2\2\u0263\u0268\7r\2\2\u0264\u0265\7C\2\2\u0265\u0267\7D\2\2\u0266"+
		"\u0264\3\2\2\2\u0267\u026a\3\2\2\2\u0268\u0266\3\2\2\2\u0268\u0269\3\2"+
		"\2\2\u0269U\3\2\2\2\u026a\u0268\3\2\2\2\u026b\u026e\5X-\2\u026c\u026e"+
		"\5\u00b2Z\2\u026d\u026b\3\2\2\2\u026d\u026c\3\2\2\2\u026eW\3\2\2\2\u026f"+
		"\u027b\7A\2\2\u0270\u0275\5V,\2\u0271\u0272\7F\2\2\u0272\u0274\5V,\2\u0273"+
		"\u0271\3\2\2\2\u0274\u0277\3\2\2\2\u0275\u0273\3\2\2\2\u0275\u0276\3\2"+
		"\2\2\u0276\u0279\3\2\2\2\u0277\u0275\3\2\2\2\u0278\u027a\7F\2\2\u0279"+
		"\u0278\3\2\2\2\u0279\u027a\3\2\2\2\u027a\u027c\3\2\2\2\u027b\u0270\3\2"+
		"\2\2\u027b\u027c\3\2\2\2\u027c\u027d\3\2\2\2\u027d\u027e\7B\2\2\u027e"+
		"Y\3\2\2\2\u027f\u0281\7r\2\2\u0280\u0282\5\u00d6l\2\u0281\u0280\3\2\2"+
		"\2\u0281\u0282\3\2\2\2\u0282\u028a\3\2\2\2\u0283\u0284\7G\2\2\u0284\u0286"+
		"\7r\2\2\u0285\u0287\5\u00d6l\2\u0286\u0285\3\2\2\2\u0286\u0287\3\2\2\2"+
		"\u0287\u0289\3\2\2\2\u0288\u0283\3\2\2\2\u0289\u028c\3\2\2\2\u028a\u0288"+
		"\3\2\2\2\u028a\u028b\3\2\2\2\u028b[\3\2\2\2\u028c\u028a\3\2\2\2\u028d"+
		"\u029a\5\u00d2j\2\u028e\u0290\5r:\2\u028f\u028e\3\2\2\2\u0290\u0293\3"+
		"\2\2\2\u0291\u028f\3\2\2\2\u0291\u0292\3\2\2\2\u0292\u0294\3\2\2\2\u0293"+
		"\u0291\3\2\2\2\u0294\u0297\7M\2\2\u0295\u0296\t\2\2\2\u0296\u0298\5\u00d2"+
		"j\2\u0297\u0295\3\2\2\2\u0297\u0298\3\2\2\2\u0298\u029a\3\2\2\2\u0299"+
		"\u028d\3\2\2\2\u0299\u0291\3\2\2\2\u029a]\3\2\2\2\u029b\u02a0\5h\65\2"+
		"\u029c\u029d\7F\2\2\u029d\u029f\5h\65\2\u029e\u029c\3\2\2\2\u029f\u02a2"+
		"\3\2\2\2\u02a0\u029e\3\2\2\2\u02a0\u02a1\3\2\2\2\u02a1_\3\2\2\2\u02a2"+
		"\u02a0\3\2\2\2\u02a3\u02a5\7?\2\2\u02a4\u02a6\5b\62\2\u02a5\u02a4\3\2"+
		"\2\2\u02a5\u02a6\3\2\2\2\u02a6\u02a7\3\2\2\2\u02a7\u02a8\7@\2\2\u02a8"+
		"a\3\2\2\2\u02a9\u02ae\5d\63\2\u02aa\u02ab\7F\2\2\u02ab\u02ad\5d\63\2\u02ac"+
		"\u02aa\3\2\2\2\u02ad\u02b0\3\2\2\2\u02ae\u02ac\3\2\2\2\u02ae\u02af\3\2"+
		"\2\2\u02af\u02b3\3\2\2\2\u02b0\u02ae\3\2\2\2\u02b1\u02b2\7F\2\2\u02b2"+
		"\u02b4\5f\64\2\u02b3\u02b1\3\2\2\2\u02b3\u02b4\3\2\2\2\u02b4\u02b7\3\2"+
		"\2\2\u02b5\u02b7\5f\64\2\u02b6\u02a9\3\2\2\2\u02b6\u02b5\3\2\2\2\u02b7"+
		"c\3\2\2\2\u02b8\u02ba\5\16\b\2\u02b9\u02b8\3\2\2\2\u02ba\u02bd\3\2\2\2"+
		"\u02bb\u02b9\3\2\2\2\u02bb\u02bc\3\2\2\2\u02bc\u02be\3\2\2\2\u02bd\u02bb"+
		"\3\2\2\2\u02be\u02bf\5\u00d2j\2\u02bf\u02c0\5T+\2\u02c0e\3\2\2\2\u02c1"+
		"\u02c3\5\16\b\2\u02c2\u02c1\3\2\2\2\u02c3\u02c6\3\2\2\2\u02c4\u02c2\3"+
		"\2\2\2\u02c4\u02c5\3\2\2\2\u02c5\u02c7\3\2\2\2\u02c6\u02c4\3\2\2\2\u02c7"+
		"\u02cb\5\u00d2j\2\u02c8\u02ca\5r:\2\u02c9\u02c8\3\2\2\2\u02ca\u02cd\3"+
		"\2\2\2\u02cb\u02c9\3\2\2\2\u02cb\u02cc\3\2\2\2\u02cc\u02ce\3\2\2\2\u02cd"+
		"\u02cb\3\2\2\2\u02ce\u02cf\7m\2\2\u02cf\u02d0\5T+\2\u02d0g\3\2\2\2\u02d1"+
		"\u02d6\7r\2\2\u02d2\u02d3\7G\2\2\u02d3\u02d5\7r\2\2\u02d4\u02d2\3\2\2"+
		"\2\u02d5\u02d8\3\2\2\2\u02d6\u02d4\3\2\2\2\u02d6\u02d7\3\2\2\2\u02d7i"+
		"\3\2\2\2\u02d8\u02d6\3\2\2\2\u02d9\u02e0\5l\67\2\u02da\u02e0\5n8\2\u02db"+
		"\u02e0\7<\2\2\u02dc\u02e0\7=\2\2\u02dd\u02e0\7;\2\2\u02de\u02e0\7>\2\2"+
		"\u02df\u02d9\3\2\2\2\u02df\u02da\3\2\2\2\u02df\u02db\3\2\2\2\u02df\u02dc"+
		"\3\2\2\2\u02df\u02dd\3\2\2\2\u02df\u02de\3\2\2\2\u02e0k\3\2\2\2\u02e1"+
		"\u02e2\t\3\2\2\u02e2m\3\2\2\2\u02e3\u02e4\t\4\2\2\u02e4o\3\2\2\2\u02e5"+
		"\u02e6\7r\2\2\u02e6\u02e8\7G\2\2\u02e7\u02e5\3\2\2\2\u02e8\u02eb\3\2\2"+
		"\2\u02e9\u02e7\3\2\2\2\u02e9\u02ea\3\2\2\2\u02ea\u02ec\3\2\2\2\u02eb\u02e9"+
		"\3\2\2\2\u02ec\u02ed\7l\2\2\u02ed\u02ee\7r\2\2\u02eeq\3\2\2\2\u02ef\u02f0"+
		"\7l\2\2\u02f0\u02f3\5h\65\2\u02f1\u02f3\5p9\2\u02f2\u02ef\3\2\2\2\u02f2"+
		"\u02f1\3\2\2\2\u02f3\u02fa\3\2\2\2\u02f4\u02f7\7?\2\2\u02f5\u02f8\5t;"+
		"\2\u02f6\u02f8\5x=\2\u02f7\u02f5\3\2\2\2\u02f7\u02f6\3\2\2\2\u02f7\u02f8"+
		"\3\2\2\2\u02f8\u02f9\3\2\2\2\u02f9\u02fb\7@\2\2\u02fa\u02f4\3\2\2\2\u02fa"+
		"\u02fb\3\2\2\2\u02fbs\3\2\2\2\u02fc\u0301\5v<\2\u02fd\u02fe\7F\2\2\u02fe"+
		"\u0300\5v<\2\u02ff\u02fd\3\2\2\2\u0300\u0303\3\2\2\2\u0301\u02ff\3\2\2"+
		"\2\u0301\u0302\3\2\2\2\u0302u\3\2\2\2\u0303\u0301\3\2\2\2\u0304\u0305"+
		"\7r\2\2\u0305\u0306\7H\2\2\u0306\u0307\5x=\2\u0307w\3\2\2\2\u0308\u030c"+
		"\5\u00b2Z\2\u0309\u030c\5r:\2\u030a\u030c\5z>\2\u030b\u0308\3\2\2\2\u030b"+
		"\u0309\3\2\2\2\u030b\u030a\3\2\2\2\u030cy\3\2\2\2\u030d\u0316\7A\2\2\u030e"+
		"\u0313\5x=\2\u030f\u0310\7F\2\2\u0310\u0312\5x=\2\u0311\u030f\3\2\2\2"+
		"\u0312\u0315\3\2\2\2\u0313\u0311\3\2\2\2\u0313\u0314\3\2\2\2\u0314\u0317"+
		"\3\2\2\2\u0315\u0313\3\2\2\2\u0316\u030e\3\2\2\2\u0316\u0317\3\2\2\2\u0317"+
		"\u0319\3\2\2\2\u0318\u031a\7F\2\2\u0319\u0318\3\2\2\2\u0319\u031a\3\2"+
		"\2\2\u031a\u031b\3\2\2\2\u031b\u031c\7B\2\2\u031c{\3\2\2\2\u031d\u031e"+
		"\7l\2\2\u031e\u031f\7\36\2\2\u031f\u0320\7r\2\2\u0320\u0321\5~@\2\u0321"+
		"}\3\2\2\2\u0322\u0326\7A\2\2\u0323\u0325\5\u0080A\2\u0324\u0323\3\2\2"+
		"\2\u0325\u0328\3\2\2\2\u0326\u0324\3\2\2\2\u0326\u0327\3\2\2\2\u0327\u0329"+
		"\3\2\2\2\u0328\u0326\3\2\2\2\u0329\u032a\7B\2\2\u032a\177\3\2\2\2\u032b"+
		"\u032d\5\n\6\2\u032c\u032b\3\2\2\2\u032d\u0330\3\2\2\2\u032e\u032c\3\2"+
		"\2\2\u032e\u032f\3\2\2\2\u032f\u0331\3\2\2\2\u0330\u032e\3\2\2\2\u0331"+
		"\u0334\5\u0082B\2\u0332\u0334\7E\2\2\u0333\u032e\3\2\2\2\u0333\u0332\3"+
		"\2\2\2\u0334\u0081\3\2\2\2\u0335\u0336\5\u00d2j\2\u0336\u0337\5\u0084"+
		"C\2\u0337\u0338\7E\2\2\u0338\u034a\3\2\2\2\u0339\u033b\5\20\t\2\u033a"+
		"\u033c\7E\2\2\u033b\u033a\3\2\2\2\u033b\u033c\3\2\2\2\u033c\u034a\3\2"+
		"\2\2\u033d\u033f\5$\23\2\u033e\u0340\7E\2\2\u033f\u033e\3\2\2\2\u033f"+
		"\u0340\3\2\2\2\u0340\u034a\3\2\2\2\u0341\u0343\5\34\17\2\u0342\u0344\7"+
		"E\2\2\u0343\u0342\3\2\2\2\u0343\u0344\3\2\2\2\u0344\u034a\3\2\2\2\u0345"+
		"\u0347\5|?\2\u0346\u0348\7E\2\2\u0347\u0346\3\2\2\2\u0347\u0348\3\2\2"+
		"\2\u0348\u034a\3\2\2\2\u0349\u0335\3\2\2\2\u0349\u0339\3\2\2\2\u0349\u033d"+
		"\3\2\2\2\u0349\u0341\3\2\2\2\u0349\u0345\3\2\2\2\u034a\u0083\3\2\2\2\u034b"+
		"\u034e\5\u0086D\2\u034c\u034e\5\u0088E\2\u034d\u034b\3\2\2\2\u034d\u034c"+
		"\3\2\2\2\u034e\u0085\3\2\2\2\u034f\u0350\7r\2\2\u0350\u0351\7?\2\2\u0351"+
		"\u0353\7@\2\2\u0352\u0354\5\u008aF\2\u0353\u0352\3\2\2\2\u0353\u0354\3"+
		"\2\2\2\u0354\u0087\3\2\2\2\u0355\u0356\5P)\2\u0356\u0089\3\2\2\2\u0357"+
		"\u0358\7\16\2\2\u0358\u0359\5x=\2\u0359\u008b\3\2\2\2\u035a\u035e\7A\2"+
		"\2\u035b\u035d\5\u008eH\2\u035c\u035b\3\2\2\2\u035d\u0360\3\2\2\2\u035e"+
		"\u035c\3\2\2\2\u035e\u035f\3\2\2\2\u035f\u0361\3\2\2\2\u0360\u035e\3\2"+
		"\2\2\u0361\u0362\7B\2\2\u0362\u008d\3\2\2\2\u0363\u0364\5\u0090I\2\u0364"+
		"\u0365\7E\2\2\u0365\u0369\3\2\2\2\u0366\u0369\5\u0094K\2\u0367\u0369\5"+
		"\u0092J\2\u0368\u0363\3\2\2\2\u0368\u0366\3\2\2\2\u0368\u0367\3\2\2\2"+
		"\u0369\u008f\3\2\2\2\u036a\u036c\5\16\b\2\u036b\u036a\3\2\2\2\u036c\u036f"+
		"\3\2\2\2\u036d\u036b\3\2\2\2\u036d\u036e\3\2\2\2\u036e\u0370\3\2\2\2\u036f"+
		"\u036d\3\2\2\2\u0370\u0371\5\u00d2j\2\u0371\u0372\5P)\2\u0372\u0091\3"+
		"\2\2\2\u0373\u0375\5\f\7\2\u0374\u0373\3\2\2\2\u0375\u0378\3\2\2\2\u0376"+
		"\u0374\3\2\2\2\u0376\u0377\3\2\2\2\u0377\u037b\3\2\2\2\u0378\u0376\3\2"+
		"\2\2\u0379\u037c\5\20\t\2\u037a\u037c\5$\23\2\u037b\u0379\3\2\2\2\u037b"+
		"\u037a\3\2\2\2\u037c\u037f\3\2\2\2\u037d\u037f\7E\2\2\u037e\u0376\3\2"+
		"\2\2\u037e\u037d\3\2\2\2\u037f\u0093\3\2\2\2\u0380\u03ea\5\u008cG\2\u0381"+
		"\u0382\7\4\2\2\u0382\u0385\5\u00b2Z\2\u0383\u0384\7N\2\2\u0384\u0386\5"+
		"\u00b2Z\2\u0385\u0383\3\2\2\2\u0385\u0386\3\2\2\2\u0386\u0387\3\2\2\2"+
		"\u0387\u0388\7E\2\2\u0388\u03ea\3\2\2\2\u0389\u038a\7\30\2\2\u038a\u038b"+
		"\5\u00acW\2\u038b\u038e\5\u0094K\2\u038c\u038d\7\21\2\2\u038d\u038f\5"+
		"\u0094K\2\u038e\u038c\3\2\2\2\u038e\u038f\3\2\2\2\u038f\u03ea\3\2\2\2"+
		"\u0390\u0391\7\27\2\2\u0391\u0392\7?\2\2\u0392\u0393\5\u00a6T\2\u0393"+
		"\u0394\7@\2\2\u0394\u0395\5\u0094K\2\u0395\u03ea\3\2\2\2\u0396\u0397\7"+
		"\64\2\2\u0397\u0398\5\u00acW\2\u0398\u0399\5\u0094K\2\u0399\u03ea\3\2"+
		"\2\2\u039a\u039b\7\17\2\2\u039b\u039c\5\u0094K\2\u039c\u039d\7\64\2\2"+
		"\u039d\u039e\5\u00acW\2\u039e\u039f\7E\2\2\u039f\u03ea\3\2\2\2\u03a0\u03a1"+
		"\7\61\2\2\u03a1\u03ab\5\u008cG\2\u03a2\u03a4\5\u0096L\2\u03a3\u03a2\3"+
		"\2\2\2\u03a4\u03a5\3\2\2\2\u03a5\u03a3\3\2\2\2\u03a5\u03a6\3\2\2\2\u03a6"+
		"\u03a8\3\2\2\2\u03a7\u03a9\5\u009aN\2\u03a8\u03a7\3\2\2\2\u03a8\u03a9"+
		"\3\2\2\2\u03a9\u03ac\3\2\2\2\u03aa\u03ac\5\u009aN\2\u03ab\u03a3\3\2\2"+
		"\2\u03ab\u03aa\3\2\2\2\u03ac\u03ea\3\2\2\2\u03ad\u03ae\7\61\2\2\u03ae"+
		"\u03af\5\u009cO\2\u03af\u03b3\5\u008cG\2\u03b0\u03b2\5\u0096L\2\u03b1"+
		"\u03b0\3\2\2\2\u03b2\u03b5\3\2\2\2\u03b3\u03b1\3\2\2\2\u03b3\u03b4\3\2"+
		"\2\2\u03b4\u03b7\3\2\2\2\u03b5\u03b3\3\2\2\2\u03b6\u03b8\5\u009aN\2\u03b7"+
		"\u03b6\3\2\2\2\u03b7\u03b8\3\2\2\2\u03b8\u03ea\3\2\2\2\u03b9\u03ba\7+"+
		"\2\2\u03ba\u03bb\5\u00acW\2\u03bb\u03bf\7A\2\2\u03bc\u03be\5\u00a2R\2"+
		"\u03bd\u03bc\3\2\2\2\u03be\u03c1\3\2\2\2\u03bf\u03bd\3\2\2\2\u03bf\u03c0"+
		"\3\2\2\2\u03c0\u03c5\3\2\2\2\u03c1\u03bf\3\2\2\2\u03c2\u03c4\5\u00a4S"+
		"\2\u03c3\u03c2\3\2\2\2\u03c4\u03c7\3\2\2\2\u03c5\u03c3\3\2\2\2\u03c5\u03c6"+
		"\3\2\2\2\u03c6\u03c8\3\2\2\2\u03c7\u03c5\3\2\2\2\u03c8\u03c9\7B\2\2\u03c9"+
		"\u03ea\3\2\2\2\u03ca\u03cb\7,\2\2\u03cb\u03cc\5\u00acW\2\u03cc\u03cd\5"+
		"\u008cG\2\u03cd\u03ea\3\2\2\2\u03ce\u03d0\7&\2\2\u03cf\u03d1\5\u00b2Z"+
		"\2\u03d0\u03cf\3\2\2\2\u03d0\u03d1\3\2\2\2\u03d1\u03d2\3\2\2\2\u03d2\u03ea"+
		"\7E\2\2\u03d3\u03d4\7.\2\2\u03d4\u03d5\5\u00b2Z\2\u03d5\u03d6\7E\2\2\u03d6"+
		"\u03ea\3\2\2\2\u03d7\u03d9\7\6\2\2\u03d8\u03da\7r\2\2\u03d9\u03d8\3\2"+
		"\2\2\u03d9\u03da\3\2\2\2\u03da\u03db\3\2\2\2\u03db\u03ea\7E\2\2\u03dc"+
		"\u03de\7\r\2\2\u03dd\u03df\7r\2\2\u03de\u03dd\3\2\2\2\u03de\u03df\3\2"+
		"\2\2\u03df\u03e0\3\2\2\2\u03e0\u03ea\7E\2\2\u03e1\u03ea\7E\2\2\u03e2\u03ea"+
		"\5(\25\2\u03e3\u03e4\5\u00b2Z\2\u03e4\u03e5\7E\2\2\u03e5\u03ea\3\2\2\2"+
		"\u03e6\u03e7\7r\2\2\u03e7\u03e8\7N\2\2\u03e8\u03ea\5\u0094K\2\u03e9\u0380"+
		"\3\2\2\2\u03e9\u0381\3\2\2\2\u03e9\u0389\3\2\2\2\u03e9\u0390\3\2\2\2\u03e9"+
		"\u0396\3\2\2\2\u03e9\u039a\3\2\2\2\u03e9\u03a0\3\2\2\2\u03e9\u03ad\3\2"+
		"\2\2\u03e9\u03b9\3\2\2\2\u03e9\u03ca\3\2\2\2\u03e9\u03ce\3\2\2\2\u03e9"+
		"\u03d3\3\2\2\2\u03e9\u03d7\3\2\2\2\u03e9\u03dc\3\2\2\2\u03e9\u03e1\3\2"+
		"\2\2\u03e9\u03e2\3\2\2\2\u03e9\u03e3\3\2\2\2\u03e9\u03e6\3\2\2\2\u03ea"+
		"\u0095\3\2\2\2\u03eb\u03ec\7\t\2\2\u03ec\u03f0\7?\2\2\u03ed\u03ef\5\16"+
		"\b\2\u03ee\u03ed\3\2\2\2\u03ef\u03f2\3\2\2\2\u03f0\u03ee\3\2\2\2\u03f0"+
		"\u03f1\3\2\2\2\u03f1\u03f3\3\2\2\2\u03f2\u03f0\3\2\2\2\u03f3\u03f4\5\u0098"+
		"M\2\u03f4\u03f5\7r\2\2\u03f5\u03f6\7@\2\2\u03f6\u03f7\5\u008cG\2\u03f7"+
		"\u0097\3\2\2\2\u03f8\u03fd\5h\65\2\u03f9\u03fa\7\\\2\2\u03fa\u03fc\5h"+
		"\65\2\u03fb\u03f9\3\2\2\2\u03fc\u03ff\3\2\2\2\u03fd\u03fb\3\2\2\2\u03fd"+
		"\u03fe\3\2\2\2\u03fe\u0099\3\2\2\2\u03ff\u03fd\3\2\2\2\u0400\u0401\7\25"+
		"\2\2\u0401\u0402\5\u008cG\2\u0402\u009b\3\2\2\2\u0403\u0404\7?\2\2\u0404"+
		"\u0406\5\u009eP\2\u0405\u0407\7E\2\2\u0406\u0405\3\2\2\2\u0406\u0407\3"+
		"\2\2\2\u0407\u0408\3\2\2\2\u0408\u0409\7@\2\2\u0409\u009d\3\2\2\2\u040a"+
		"\u040f\5\u00a0Q\2\u040b\u040c\7E\2\2\u040c\u040e\5\u00a0Q\2\u040d\u040b"+
		"\3\2\2\2\u040e\u0411\3\2\2\2\u040f\u040d\3\2\2\2\u040f\u0410\3\2\2\2\u0410"+
		"\u009f\3\2\2\2\u0411\u040f\3\2\2\2\u0412\u0414\5\16\b\2\u0413\u0412\3"+
		"\2\2\2\u0414\u0417\3\2\2\2\u0415\u0413\3\2\2\2\u0415\u0416\3\2\2\2\u0416"+
		"\u0418\3\2\2\2\u0417\u0415\3\2\2\2\u0418\u0419\5Z.\2\u0419\u041a\5T+\2"+
		"\u041a\u041b\7H\2\2\u041b\u041c\5\u00b2Z\2\u041c\u00a1\3\2\2\2\u041d\u041f"+
		"\5\u00a4S\2\u041e\u041d\3\2\2\2\u041f\u0420\3\2\2\2\u0420\u041e\3\2\2"+
		"\2\u0420\u0421\3\2\2\2\u0421\u0423\3\2\2\2\u0422\u0424\5\u008eH\2\u0423"+
		"\u0422\3\2\2\2\u0424\u0425\3\2\2\2\u0425\u0423\3\2\2\2\u0425\u0426\3\2"+
		"\2\2\u0426\u00a3\3\2\2\2\u0427\u042a\7\b\2\2\u0428\u042b\5\u00b2Z\2\u0429"+
		"\u042b\7r\2\2\u042a\u0428\3\2\2\2\u042a\u0429\3\2\2\2\u042b\u042c\3\2"+
		"\2\2\u042c\u0430\7N\2\2\u042d\u042e\7\16\2\2\u042e\u0430\7N\2\2\u042f"+
		"\u0427\3\2\2\2\u042f\u042d\3\2\2\2\u0430\u00a5\3\2\2\2\u0431\u043e\5\u00aa"+
		"V\2\u0432\u0434\5\u00a8U\2\u0433\u0432\3\2\2\2\u0433\u0434\3\2\2\2\u0434"+
		"\u0435\3\2\2\2\u0435\u0437\7E\2\2\u0436\u0438\5\u00b2Z\2\u0437\u0436\3"+
		"\2\2\2\u0437\u0438\3\2\2\2\u0438\u0439\3\2\2\2\u0439\u043b\7E\2\2\u043a"+
		"\u043c\5\u00aeX\2\u043b\u043a\3\2\2\2\u043b\u043c\3\2\2\2\u043c\u043e"+
		"\3\2\2\2\u043d\u0431\3\2\2\2\u043d\u0433\3\2\2\2\u043e\u00a7\3\2\2\2\u043f"+
		"\u0442\5\u0090I\2\u0440\u0442\5\u00aeX\2\u0441\u043f\3\2\2\2\u0441\u0440"+
		"\3\2\2\2\u0442\u00a9\3\2\2\2\u0443\u0445\5\16\b\2\u0444\u0443\3\2\2\2"+
		"\u0445\u0448\3\2\2\2\u0446\u0444\3\2\2\2\u0446\u0447\3\2\2\2\u0447\u0449"+
		"\3\2\2\2\u0448\u0446\3\2\2\2\u0449\u044a\5\u00d2j\2\u044a\u044b\5T+\2"+
		"\u044b\u044c\7N\2\2\u044c\u044d\5\u00b2Z\2\u044d\u00ab\3\2\2\2\u044e\u044f"+
		"\7?\2\2\u044f\u0450\5\u00b2Z\2\u0450\u0451\7@\2\2\u0451\u00ad\3\2\2\2"+
		"\u0452\u0457\5\u00b2Z\2\u0453\u0454\7F\2\2\u0454\u0456\5\u00b2Z\2\u0455"+
		"\u0453\3\2\2\2\u0456\u0459\3\2\2\2\u0457\u0455\3\2\2\2\u0457\u0458\3\2"+
		"\2\2\u0458\u00af\3\2\2\2\u0459\u0457\3\2\2\2\u045a\u045b\7r\2\2\u045b"+
		"\u045d\7?\2\2\u045c\u045e\5\u00aeX\2\u045d\u045c\3\2\2\2\u045d\u045e\3"+
		"\2\2\2\u045e\u045f\3\2\2\2\u045f\u046d\7@\2\2\u0460\u0461\7-\2\2\u0461"+
		"\u0463\7?\2\2\u0462\u0464\5\u00aeX\2\u0463\u0462\3\2\2\2\u0463\u0464\3"+
		"\2\2\2\u0464\u0465\3\2\2\2\u0465\u046d\7@\2\2\u0466\u0467\7*\2\2\u0467"+
		"\u0469\7?\2\2\u0468\u046a\5\u00aeX\2\u0469\u0468\3\2\2\2\u0469\u046a\3"+
		"\2\2\2\u046a\u046b\3\2\2\2\u046b\u046d\7@\2\2\u046c\u045a\3\2\2\2\u046c"+
		"\u0460\3\2\2\2\u046c\u0466\3\2\2\2\u046d\u00b1\3\2\2\2\u046e\u046f\bZ"+
		"\1\2\u046f\u049b\5\u00ba^\2\u0470\u049b\5\u00b0Y\2\u0471\u0472\7!\2\2"+
		"\u0472\u049b\5\u00be`\2\u0473\u0477\7?\2\2\u0474\u0476\5r:\2\u0475\u0474"+
		"\3\2\2\2\u0476\u0479\3\2\2\2\u0477\u0475\3\2\2\2\u0477\u0478\3\2\2\2\u0478"+
		"\u047a\3\2\2\2\u0479\u0477\3\2\2\2\u047a\u047f\5\u00d2j\2\u047b\u047c"+
		"\7[\2\2\u047c\u047e\5\u00d2j\2\u047d\u047b\3\2\2\2\u047e\u0481\3\2\2\2"+
		"\u047f\u047d\3\2\2\2\u047f\u0480\3\2\2\2\u0480\u0482\3\2\2\2\u0481\u047f"+
		"\3\2\2\2\u0482\u0483\7@\2\2\u0483\u0484\5\u00b2Z\27\u0484\u049b\3\2\2"+
		"\2\u0485\u0486\t\5\2\2\u0486\u049b\5\u00b2Z\25\u0487\u0488\t\6\2\2\u0488"+
		"\u049b\5\u00b2Z\24\u0489\u049b\5\u00b4[\2\u048a\u048b\5\u00d2j\2\u048b"+
		"\u0491\7k\2\2\u048c\u048e\5\u00d6l\2\u048d\u048c\3\2\2\2\u048d\u048e\3"+
		"\2\2\2\u048e\u048f\3\2\2\2\u048f\u0492\7r\2\2\u0490\u0492\7!\2\2\u0491"+
		"\u048d\3\2\2\2\u0491\u0490\3\2\2\2\u0492\u049b\3\2\2\2\u0493\u0494\5\u00bc"+
		"_\2\u0494\u0496\7k\2\2\u0495\u0497\5\u00d6l\2\u0496\u0495\3\2\2\2\u0496"+
		"\u0497\3\2\2\2\u0497\u0498\3\2\2\2\u0498\u0499\7!\2\2\u0499\u049b\3\2"+
		"\2\2\u049a\u046e\3\2\2\2\u049a\u0470\3\2\2\2\u049a\u0471\3\2\2\2\u049a"+
		"\u0473\3\2\2\2\u049a\u0485\3\2\2\2\u049a\u0487\3\2\2\2\u049a\u0489\3\2"+
		"\2\2\u049a\u048a\3\2\2\2\u049a\u0493\3\2\2\2\u049b\u04ec\3\2\2\2\u049c"+
		"\u049d\f\23\2\2\u049d\u049e\t\7\2\2\u049e\u04eb\5\u00b2Z\24\u049f\u04a0"+
		"\f\22\2\2\u04a0\u04a1\t\b\2\2\u04a1\u04eb\5\u00b2Z\23\u04a2\u04aa\f\21"+
		"\2\2\u04a3\u04a4\7J\2\2\u04a4\u04ab\7J\2\2\u04a5\u04a6\7I\2\2\u04a6\u04a7"+
		"\7I\2\2\u04a7\u04ab\7I\2\2\u04a8\u04a9\7I\2\2\u04a9\u04ab\7I\2\2\u04aa"+
		"\u04a3\3\2\2\2\u04aa\u04a5\3\2\2\2\u04aa\u04a8\3\2\2\2\u04ab\u04ac\3\2"+
		"\2\2\u04ac\u04eb\5\u00b2Z\22\u04ad\u04ae\f\20\2\2\u04ae\u04af\t\t\2\2"+
		"\u04af\u04eb\5\u00b2Z\21\u04b0\u04b1\f\16\2\2\u04b1\u04b2\t\n\2\2\u04b2"+
		"\u04eb\5\u00b2Z\17\u04b3\u04b4\f\r\2\2\u04b4\u04b5\7[\2\2\u04b5\u04eb"+
		"\5\u00b2Z\16\u04b6\u04b7\f\f\2\2\u04b7\u04b8\7]\2\2\u04b8\u04eb\5\u00b2"+
		"Z\r\u04b9\u04ba\f\13\2\2\u04ba\u04bb\7\\\2\2\u04bb\u04eb\5\u00b2Z\f\u04bc"+
		"\u04bd\f\n\2\2\u04bd\u04be\7S\2\2\u04be\u04eb\5\u00b2Z\13\u04bf\u04c0"+
		"\f\t\2\2\u04c0\u04c1\7T\2\2\u04c1\u04eb\5\u00b2Z\n\u04c2\u04c3\f\b\2\2"+
		"\u04c3\u04c4\7M\2\2\u04c4\u04c5\5\u00b2Z\2\u04c5\u04c6\7N\2\2\u04c6\u04c7"+
		"\5\u00b2Z\b\u04c7\u04eb\3\2\2\2\u04c8\u04c9\f\7\2\2\u04c9\u04ca\t\13\2"+
		"\2\u04ca\u04eb\5\u00b2Z\7\u04cb\u04cc\f\33\2\2\u04cc\u04d8\7G\2\2\u04cd"+
		"\u04d9\7r\2\2\u04ce\u04d9\5\u00b0Y\2\u04cf\u04d9\7-\2\2\u04d0\u04d2\7"+
		"!\2\2\u04d1\u04d3\5\u00ceh\2\u04d2\u04d1\3\2\2\2\u04d2\u04d3\3\2\2\2\u04d3"+
		"\u04d4\3\2\2\2\u04d4\u04d9\5\u00c2b\2\u04d5\u04d6\7*\2\2\u04d6\u04d9\5"+
		"\u00d8m\2\u04d7\u04d9\5\u00c8e\2\u04d8\u04cd\3\2\2\2\u04d8\u04ce\3\2\2"+
		"\2\u04d8\u04cf\3\2\2\2\u04d8\u04d0\3\2\2\2\u04d8\u04d5\3\2\2\2\u04d8\u04d7"+
		"\3\2\2\2\u04d9\u04eb\3\2\2\2\u04da\u04db\f\32\2\2\u04db\u04dc\7C\2\2\u04dc"+
		"\u04dd\5\u00b2Z\2\u04dd\u04de\7D\2\2\u04de\u04eb\3\2\2\2\u04df\u04e0\f"+
		"\26\2\2\u04e0\u04eb\t\f\2\2\u04e1\u04e2\f\17\2\2\u04e2\u04e3\7\34\2\2"+
		"\u04e3\u04eb\5\u00d2j\2\u04e4\u04e5\f\5\2\2\u04e5\u04e7\7k\2\2\u04e6\u04e8"+
		"\5\u00d6l\2\u04e7\u04e6\3\2\2\2\u04e7\u04e8\3\2\2\2\u04e8\u04e9\3\2\2"+
		"\2\u04e9\u04eb\7r\2\2\u04ea\u049c\3\2\2\2\u04ea\u049f\3\2\2\2\u04ea\u04a2"+
		"\3\2\2\2\u04ea\u04ad\3\2\2\2\u04ea\u04b0\3\2\2\2\u04ea\u04b3\3\2\2\2\u04ea"+
		"\u04b6\3\2\2\2\u04ea\u04b9\3\2\2\2\u04ea\u04bc\3\2\2\2\u04ea\u04bf\3\2"+
		"\2\2\u04ea\u04c2\3\2\2\2\u04ea\u04c8\3\2\2\2\u04ea\u04cb\3\2\2\2\u04ea"+
		"\u04da\3\2\2\2\u04ea\u04df\3\2\2\2\u04ea\u04e1\3\2\2\2\u04ea\u04e4\3\2"+
		"\2\2\u04eb\u04ee\3\2\2\2\u04ec\u04ea\3\2\2\2\u04ec\u04ed\3\2\2\2\u04ed"+
		"\u00b3\3\2\2\2\u04ee\u04ec\3\2\2\2\u04ef\u04f0\5\u00b6\\\2\u04f0\u04f1"+
		"\7j\2\2\u04f1\u04f2\5\u00b8]\2\u04f2\u00b5\3\2\2\2\u04f3\u0504\7r\2\2"+
		"\u04f4\u04f6\7?\2\2\u04f5\u04f7\5b\62\2\u04f6\u04f5\3\2\2\2\u04f6\u04f7"+
		"\3\2\2\2\u04f7\u04f8\3\2\2\2\u04f8\u0504\7@\2\2\u04f9\u04fa\7?\2\2\u04fa"+
		"\u04ff\7r\2\2\u04fb\u04fc\7F\2\2\u04fc\u04fe\7r\2\2\u04fd\u04fb\3\2\2"+
		"\2\u04fe\u0501\3\2\2\2\u04ff\u04fd\3\2\2\2\u04ff\u0500\3\2\2\2\u0500\u0502"+
		"\3\2\2\2\u0501\u04ff\3\2\2\2\u0502\u0504\7@\2\2\u0503\u04f3\3\2\2\2\u0503"+
		"\u04f4\3\2\2\2\u0503\u04f9\3\2\2\2\u0504\u00b7\3\2\2\2\u0505\u0508\5\u00b2"+
		"Z\2\u0506\u0508\5\u008cG\2\u0507\u0505\3\2\2\2\u0507\u0506\3\2\2\2\u0508"+
		"\u00b9\3\2\2\2\u0509\u050a\7?\2\2\u050a\u050b\5\u00b2Z\2\u050b\u050c\7"+
		"@\2\2\u050c\u051c\3\2\2\2\u050d\u051c\7-\2\2\u050e\u051c\7*\2\2\u050f"+
		"\u051c\5j\66\2\u0510\u051c\7r\2\2\u0511\u0512\58\35\2\u0512\u0513\7G\2"+
		"\2\u0513\u0514\7\13\2\2\u0514\u051c\3\2\2\2\u0515\u0519\5\u00ceh\2\u0516"+
		"\u051a\5\u00dan\2\u0517\u0518\7-\2\2\u0518\u051a\5\u00dco\2\u0519\u0516"+
		"\3\2\2\2\u0519\u0517\3\2\2\2\u051a\u051c\3\2\2\2\u051b\u0509\3\2\2\2\u051b"+
		"\u050d\3\2\2\2\u051b\u050e\3\2\2\2\u051b\u050f\3\2\2\2\u051b\u0510\3\2"+
		"\2\2\u051b\u0511\3\2\2\2\u051b\u0515\3\2\2\2\u051c\u00bb\3\2\2\2\u051d"+
		"\u051e\5Z.\2\u051e\u051f\7G\2\2\u051f\u0521\3\2\2\2\u0520\u051d\3\2\2"+
		"\2\u0520\u0521\3\2\2\2\u0521\u0525\3\2\2\2\u0522\u0524\5r:\2\u0523\u0522"+
		"\3\2\2\2\u0524\u0527\3\2\2\2\u0525\u0523\3\2\2\2\u0525\u0526\3\2\2\2\u0526"+
		"\u0528\3\2\2\2\u0527\u0525\3\2\2\2\u0528\u052a\7r\2\2\u0529\u052b\5\u00d6"+
		"l\2\u052a\u0529\3\2\2\2\u052a\u052b\3\2\2\2\u052b\u00bd\3\2\2\2\u052c"+
		"\u052d\5\u00ceh\2\u052d\u052e\5\u00c0a\2\u052e\u052f\5\u00c6d\2\u052f"+
		"\u0536\3\2\2\2\u0530\u0533\5\u00c0a\2\u0531\u0534\5\u00c4c\2\u0532\u0534"+
		"\5\u00c6d\2\u0533\u0531\3\2\2\2\u0533\u0532\3\2\2\2\u0534\u0536\3\2\2"+
		"\2\u0535\u052c\3\2\2\2\u0535\u0530\3\2\2\2\u0536\u00bf\3\2\2\2\u0537\u0539"+
		"\7r\2\2\u0538\u053a\5\u00caf\2\u0539\u0538\3\2\2\2\u0539\u053a\3\2\2\2"+
		"\u053a\u0542\3\2\2\2\u053b\u053c\7G\2\2\u053c\u053e\7r\2\2\u053d\u053f"+
		"\5\u00caf\2\u053e\u053d\3\2\2\2\u053e\u053f\3\2\2\2\u053f\u0541\3\2\2"+
		"\2\u0540\u053b\3\2\2\2\u0541\u0544\3\2\2\2\u0542\u0540\3\2\2\2\u0542\u0543"+
		"\3\2\2\2\u0543\u0547\3\2\2\2\u0544\u0542\3\2\2\2\u0545\u0547\5\u00d4k"+
		"\2\u0546\u0537\3\2\2\2\u0546\u0545\3\2\2\2\u0547\u00c1\3\2\2\2\u0548\u054a"+
		"\7r\2\2\u0549\u054b\5\u00ccg\2\u054a\u0549\3\2\2\2\u054a\u054b\3\2\2\2"+
		"\u054b\u054c\3\2\2\2\u054c\u054d\5\u00c6d\2\u054d\u00c3\3\2\2\2\u054e"+
		"\u056a\7C\2\2\u054f\u0554\7D\2\2\u0550\u0551\7C\2\2\u0551\u0553\7D\2\2"+
		"\u0552\u0550\3\2\2\2\u0553\u0556\3\2\2\2\u0554\u0552\3\2\2\2\u0554\u0555"+
		"\3\2\2\2\u0555\u0557\3\2\2\2\u0556\u0554\3\2\2\2\u0557\u056b\5X-\2\u0558"+
		"\u0559\5\u00b2Z\2\u0559\u0560\7D\2\2\u055a\u055b\7C\2\2\u055b\u055c\5"+
		"\u00b2Z\2\u055c\u055d\7D\2\2\u055d\u055f\3\2\2\2\u055e\u055a\3\2\2\2\u055f"+
		"\u0562\3\2\2\2\u0560\u055e\3\2\2\2\u0560\u0561\3\2\2\2\u0561\u0567\3\2"+
		"\2\2\u0562\u0560\3\2\2\2\u0563\u0564\7C\2\2\u0564\u0566\7D\2\2\u0565\u0563"+
		"\3\2\2\2\u0566\u0569\3\2\2\2\u0567\u0565\3\2\2\2\u0567\u0568\3\2\2\2\u0568"+
		"\u056b\3\2\2\2\u0569\u0567\3\2\2\2\u056a\u054f\3\2\2\2\u056a\u0558\3\2"+
		"\2\2\u056b\u00c5\3\2\2\2\u056c\u056e\5\u00dco\2\u056d\u056f\5*\26\2\u056e"+
		"\u056d\3\2\2\2\u056e\u056f\3\2\2\2\u056f\u00c7\3\2\2\2\u0570\u0571\5\u00ce"+
		"h\2\u0571\u0572\5\u00dan\2\u0572\u00c9\3\2\2\2\u0573\u0574\7J\2\2\u0574"+
		"\u0577\7I\2\2\u0575\u0577\5\u00d6l\2\u0576\u0573\3\2\2\2\u0576\u0575\3"+
		"\2\2\2\u0577\u00cb\3\2\2\2\u0578\u0579\7J\2\2\u0579\u057c\7I\2\2\u057a"+
		"\u057c\5\u00ceh\2\u057b\u0578\3\2\2\2\u057b\u057a\3\2\2\2\u057c\u00cd"+
		"\3\2\2\2\u057d\u057e\7J\2\2\u057e\u057f\5\u00d0i\2\u057f\u0580\7I\2\2"+
		"\u0580\u00cf\3\2\2\2\u0581\u0586\5\u00d2j\2\u0582\u0583\7F\2\2\u0583\u0585"+
		"\5\u00d2j\2\u0584\u0582\3\2\2\2\u0585\u0588\3\2\2\2\u0586\u0584\3\2\2"+
		"\2\u0586\u0587\3\2\2\2\u0587\u00d1\3\2\2\2\u0588\u0586\3\2\2\2\u0589\u058b"+
		"\5r:\2\u058a\u0589\3\2\2\2\u058b\u058e\3\2\2\2\u058c\u058a\3\2\2\2\u058c"+
		"\u058d\3\2\2\2\u058d\u0591\3\2\2\2\u058e\u058c\3\2\2\2\u058f\u0592\5Z"+
		".\2\u0590\u0592\5\u00d4k\2\u0591\u058f\3\2\2\2\u0591\u0590\3\2\2\2\u0592"+
		"\u059d\3\2\2\2\u0593\u0595\5r:\2\u0594\u0593\3\2\2\2\u0595\u0598\3\2\2"+
		"\2\u0596\u0594\3\2\2\2\u0596\u0597\3\2\2\2\u0597\u0599\3\2\2\2\u0598\u0596"+
		"\3\2\2\2\u0599\u059a\7C\2\2\u059a\u059c\7D\2\2\u059b\u0596\3\2\2\2\u059c"+
		"\u059f\3\2\2\2\u059d\u059b\3\2\2\2\u059d\u059e\3\2\2\2\u059e\u00d3\3\2"+
		"\2\2\u059f\u059d\3\2\2\2\u05a0\u05a1\t\r\2\2\u05a1\u00d5\3\2\2\2\u05a2"+
		"\u05a3\7J\2\2\u05a3\u05a8\5\\/\2\u05a4\u05a5\7F\2\2\u05a5\u05a7\5\\/\2"+
		"\u05a6\u05a4\3\2\2\2\u05a7\u05aa\3\2\2\2\u05a8\u05a6\3\2\2\2\u05a8\u05a9"+
		"\3\2\2\2\u05a9\u05ab\3\2\2\2\u05aa\u05a8\3\2\2\2\u05ab\u05ac\7I\2\2\u05ac"+
		"\u00d7\3\2\2\2\u05ad\u05b4\5\u00dco\2\u05ae\u05af\7G\2\2\u05af\u05b1\7"+
		"r\2\2\u05b0\u05b2\5\u00dco\2\u05b1\u05b0\3\2\2\2\u05b1\u05b2\3\2\2\2\u05b2"+
		"\u05b4\3\2\2\2\u05b3\u05ad\3\2\2\2\u05b3\u05ae\3\2\2\2\u05b4\u00d9\3\2"+
		"\2\2\u05b5\u05b6\7*\2\2\u05b6\u05ba\5\u00d8m\2\u05b7\u05b8\7r\2\2\u05b8"+
		"\u05ba\5\u00dco\2\u05b9\u05b5\3\2\2\2\u05b9\u05b7\3\2\2\2\u05ba\u00db"+
		"\3\2\2\2\u05bb\u05bd\7?\2\2\u05bc\u05be\5\u00aeX\2\u05bd\u05bc\3\2\2\2"+
		"\u05bd\u05be\3\2\2\2\u05be\u05bf\3\2\2\2\u05bf\u05c0\7@\2\2\u05c0\u00dd"+
		"\3\2\2\2\u00ba\u00df\u00e4\u00ea\u00f0\u00f5\u00fd\u0101\u0106\u010b\u0110"+
		"\u0117\u011a\u0121\u012b\u012f\u0134\u0137\u013a\u014a\u0152\u015a\u015e"+
		"\u0165\u016c\u0170\u0173\u0176\u017f\u0185\u018a\u018d\u0193\u0199\u019c"+
		"\u01a9\u01b2\u01b9\u01bd\u01c2\u01c6\u01d1\u01da\u01de\u01e7\u01eb\u01f7"+
		"\u0200\u0205\u020a\u0213\u021b\u0225\u022e\u0236\u023b\u0243\u0247\u0251"+
		"\u025b\u0261\u0268\u026d\u0275\u0279\u027b\u0281\u0286\u028a\u0291\u0297"+
		"\u0299\u02a0\u02a5\u02ae\u02b3\u02b6\u02bb\u02c4\u02cb\u02d6\u02df\u02e9"+
		"\u02f2\u02f7\u02fa\u0301\u030b\u0313\u0316\u0319\u0326\u032e\u0333\u033b"+
		"\u033f\u0343\u0347\u0349\u034d\u0353\u035e\u0368\u036d\u0376\u037b\u037e"+
		"\u0385\u038e\u03a5\u03a8\u03ab\u03b3\u03b7\u03bf\u03c5\u03d0\u03d9\u03de"+
		"\u03e9\u03f0\u03fd\u0406\u040f\u0415\u0420\u0425\u042a\u042f\u0433\u0437"+
		"\u043b\u043d\u0441\u0446\u0457\u045d\u0463\u0469\u046c\u0477\u047f\u048d"+
		"\u0491\u0496\u049a\u04aa\u04d2\u04d8\u04e7\u04ea\u04ec\u04f6\u04ff\u0503"+
		"\u0507\u0519\u051b\u0520\u0525\u052a\u0533\u0535\u0539\u053e\u0542\u0546"+
		"\u054a\u0554\u0560\u0567\u056a\u056e\u0576\u057b\u0586\u058c\u0591\u0596"+
		"\u059d\u05a8\u05b1\u05b3\u05b9\u05bd";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}