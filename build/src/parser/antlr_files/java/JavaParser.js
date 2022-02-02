"use strict";
// Generated from JavaParser.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormalParameterListContext = exports.FormalParametersContext = exports.QualifiedNameListContext = exports.TypeArgumentContext = exports.ClassOrInterfaceTypeContext = exports.ArrayInitializerContext = exports.VariableInitializerContext = exports.VariableDeclaratorIdContext = exports.VariableDeclaratorContext = exports.VariableDeclaratorsContext = exports.GenericInterfaceMethodDeclarationContext = exports.InterfaceMethodModifierContext = exports.InterfaceMethodDeclarationContext = exports.ConstantDeclaratorContext = exports.ConstDeclarationContext = exports.InterfaceMemberDeclarationContext = exports.InterfaceBodyDeclarationContext = exports.FieldDeclarationContext = exports.ConstructorDeclarationContext = exports.GenericConstructorDeclarationContext = exports.GenericMethodDeclarationContext = exports.TypeTypeOrVoidContext = exports.MethodBodyContext = exports.ThrowListContext = exports.MethodDeclarationContext = exports.MemberDeclarationContext = exports.ClassBodyDeclarationContext = exports.InterfaceBodyContext = exports.ClassBodyContext = exports.CommentContext = exports.ExtendInterfaceContext = exports.InterfaceDeclarationContext = exports.EnumBodyDeclarationsContext = exports.EnumConstantContext = exports.EnumConstantsContext = exports.EnumDeclarationContext = exports.TypeBoundContext = exports.TypeParameterContext = exports.TypeParametersContext = exports.ImplementInterfacesContext = exports.ExtendClassContext = exports.ClassDeclarationContext = exports.VariableModifierContext = exports.ClassOrInterfaceModifierContext = exports.ModifierContext = exports.TypeDeclarationContext = exports.ImportDeclarationContext = exports.PackageDeclarationContext = exports.CompilationUnitContext = exports.JavaParser = void 0;
exports.ClassCreatorRestContext = exports.ArrayCreatorRestContext = exports.InnerCreatorContext = exports.CreatedNameContext = exports.CreatorContext = exports.ClassTypeContext = exports.PrimaryContext = exports.LambdaBodyContext = exports.LambdaParametersContext = exports.LambdaExpressionContext = exports.ExpressionContext = exports.MethodCallContext = exports.ExpressionListContext = exports.ParExpressionContext = exports.EnhancedForControlContext = exports.ForInitContext = exports.ForControlContext = exports.SwitchLabelContext = exports.SwitchBlockStatementGroupContext = exports.ResourceContext = exports.ResourcesContext = exports.ResourceSpecificationContext = exports.FinallyBlockContext = exports.CatchTypeContext = exports.CatchClauseContext = exports.StatementContext = exports.LocalTypeDeclarationContext = exports.LocalVariableDeclarationContext = exports.BlockStatementContext = exports.BlockContext = exports.DefaultValueContext = exports.AnnotationConstantRestContext = exports.AnnotationMethodRestContext = exports.AnnotationMethodOrConstantRestContext = exports.AnnotationTypeElementRestContext = exports.AnnotationTypeElementDeclarationContext = exports.AnnotationTypeBodyContext = exports.AnnotationTypeDeclarationContext = exports.ElementValueArrayInitializerContext = exports.ElementValueContext = exports.ElementValuePairContext = exports.ElementValuePairsContext = exports.AnnotationContext = exports.AltAnnotationQualifiedNameContext = exports.FloatLiteralContext = exports.IntegerLiteralContext = exports.LiteralContext = exports.QualifiedNameContext = exports.LastFormalParameterContext = exports.FormalParameterContext = void 0;
exports.ArgumentsContext = exports.ExplicitGenericInvocationSuffixContext = exports.SuperSuffixContext = exports.TypeArgumentsContext = exports.PrimitiveTypeContext = exports.TypeTypeContext = exports.TypeListContext = exports.NonWildcardTypeArgumentsContext = exports.NonWildcardTypeArgumentsOrDiamondContext = exports.TypeArgumentsOrDiamondContext = exports.ExplicitGenericInvocationContext = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class JavaParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(JavaParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return JavaParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "JavaParser.g4"; }
    // @Override
    get ruleNames() { return JavaParser.ruleNames; }
    // @Override
    get serializedATN() { return JavaParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    compilationUnit() {
        let _localctx = new CompilationUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, JavaParser.RULE_compilationUnit);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 221;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
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
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    packageDeclaration() {
        let _localctx = new PackageDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, JavaParser.RULE_packageDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.JCOMMENT) {
                    {
                        this.state = 237;
                        this.comment();
                    }
                }
                this.state = 243;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 240;
                            this.annotation();
                        }
                    }
                    this.state = 245;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 246;
                this.match(JavaParser.PACKAGE);
                this.state = 247;
                this.qualifiedName();
                this.state = 248;
                this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    importDeclaration() {
        let _localctx = new ImportDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, JavaParser.RULE_importDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 251;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.JCOMMENT) {
                    {
                        this.state = 250;
                        this.comment();
                    }
                }
                this.state = 253;
                this.match(JavaParser.IMPORT);
                this.state = 255;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.STATIC) {
                    {
                        this.state = 254;
                        this.match(JavaParser.STATIC);
                    }
                }
                this.state = 257;
                this.qualifiedName();
                this.state = 260;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.DOT) {
                    {
                        this.state = 258;
                        this.match(JavaParser.DOT);
                        this.state = 259;
                        this.match(JavaParser.MUL);
                    }
                }
                this.state = 262;
                this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeDeclaration() {
        let _localctx = new TypeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, JavaParser.RULE_typeDeclaration);
        let _la;
        try {
            let _alt;
            this.state = 280;
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
                        this.state = 265;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.JCOMMENT) {
                            {
                                this.state = 264;
                                this.comment();
                            }
                        }
                        this.state = 270;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 267;
                                        this.classOrInterfaceModifier();
                                    }
                                }
                            }
                            this.state = 272;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                        }
                        this.state = 277;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.CLASS:
                                {
                                    this.state = 273;
                                    this.classDeclaration();
                                }
                                break;
                            case JavaParser.ENUM:
                                {
                                    this.state = 274;
                                    this.enumDeclaration();
                                }
                                break;
                            case JavaParser.INTERFACE:
                                {
                                    this.state = 275;
                                    this.interfaceDeclaration();
                                }
                                break;
                            case JavaParser.AT:
                                {
                                    this.state = 276;
                                    this.annotationTypeDeclaration();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 279;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    modifier() {
        let _localctx = new ModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, JavaParser.RULE_modifier);
        try {
            this.state = 287;
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
                        this.state = 282;
                        this.classOrInterfaceModifier();
                    }
                    break;
                case JavaParser.NATIVE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 283;
                        this.match(JavaParser.NATIVE);
                    }
                    break;
                case JavaParser.SYNCHRONIZED:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 284;
                        this.match(JavaParser.SYNCHRONIZED);
                    }
                    break;
                case JavaParser.TRANSIENT:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 285;
                        this.match(JavaParser.TRANSIENT);
                    }
                    break;
                case JavaParser.VOLATILE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 286;
                        this.match(JavaParser.VOLATILE);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classOrInterfaceModifier() {
        let _localctx = new ClassOrInterfaceModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, JavaParser.RULE_classOrInterfaceModifier);
        try {
            this.state = 297;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 289;
                        this.annotation();
                    }
                    break;
                case JavaParser.PUBLIC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 290;
                        this.match(JavaParser.PUBLIC);
                    }
                    break;
                case JavaParser.PROTECTED:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 291;
                        this.match(JavaParser.PROTECTED);
                    }
                    break;
                case JavaParser.PRIVATE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 292;
                        this.match(JavaParser.PRIVATE);
                    }
                    break;
                case JavaParser.STATIC:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 293;
                        this.match(JavaParser.STATIC);
                    }
                    break;
                case JavaParser.ABSTRACT:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 294;
                        this.match(JavaParser.ABSTRACT);
                    }
                    break;
                case JavaParser.FINAL:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 295;
                        this.match(JavaParser.FINAL);
                    }
                    break;
                case JavaParser.STRICTFP:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 296;
                        this.match(JavaParser.STRICTFP);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableModifier() {
        let _localctx = new VariableModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, JavaParser.RULE_variableModifier);
        try {
            this.state = 301;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.FINAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 299;
                        this.match(JavaParser.FINAL);
                    }
                    break;
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 300;
                        this.annotation();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classDeclaration() {
        let _localctx = new ClassDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, JavaParser.RULE_classDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 303;
                this.match(JavaParser.CLASS);
                this.state = 304;
                this.match(JavaParser.IDENTIFIER);
                this.state = 306;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 305;
                        this.typeParameters();
                    }
                }
                this.state = 309;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.EXTENDS) {
                    {
                        this.state = 308;
                        this.extendClass();
                    }
                }
                this.state = 312;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.IMPLEMENTS) {
                    {
                        this.state = 311;
                        this.implementInterfaces();
                    }
                }
                this.state = 314;
                this.classBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    extendClass() {
        let _localctx = new ExtendClassContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, JavaParser.RULE_extendClass);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 316;
                this.match(JavaParser.EXTENDS);
                this.state = 317;
                this.typeType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    implementInterfaces() {
        let _localctx = new ImplementInterfacesContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, JavaParser.RULE_implementInterfaces);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 319;
                    this.match(JavaParser.IMPLEMENTS);
                    this.state = 320;
                    this.typeList();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeParameters() {
        let _localctx = new TypeParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, JavaParser.RULE_typeParameters);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 322;
                this.match(JavaParser.LT);
                this.state = 323;
                this.typeParameter();
                this.state = 328;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 324;
                            this.match(JavaParser.COMMA);
                            this.state = 325;
                            this.typeParameter();
                        }
                    }
                    this.state = 330;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 331;
                this.match(JavaParser.GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeParameter() {
        let _localctx = new TypeParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, JavaParser.RULE_typeParameter);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 336;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                }
                this.state = 339;
                this.match(JavaParser.IDENTIFIER);
                this.state = 348;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.EXTENDS) {
                    {
                        this.state = 340;
                        this.match(JavaParser.EXTENDS);
                        this.state = 344;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 341;
                                        this.annotation();
                                    }
                                }
                            }
                            this.state = 346;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                        }
                        this.state = 347;
                        this.typeBound();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeBound() {
        let _localctx = new TypeBoundContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, JavaParser.RULE_typeBound);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 350;
                this.typeType();
                this.state = 355;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.BITAND) {
                    {
                        {
                            this.state = 351;
                            this.match(JavaParser.BITAND);
                            this.state = 352;
                            this.typeType();
                        }
                    }
                    this.state = 357;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumDeclaration() {
        let _localctx = new EnumDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, JavaParser.RULE_enumDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 358;
                this.match(JavaParser.ENUM);
                this.state = 359;
                this.match(JavaParser.IDENTIFIER);
                this.state = 362;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.IMPLEMENTS) {
                    {
                        this.state = 360;
                        this.match(JavaParser.IMPLEMENTS);
                        this.state = 361;
                        this.typeList();
                    }
                }
                this.state = 364;
                this.match(JavaParser.LBRACE);
                this.state = 366;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.JCOMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0)) {
                    {
                        this.state = 365;
                        this.enumConstants();
                    }
                }
                this.state = 369;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.COMMA) {
                    {
                        this.state = 368;
                        this.match(JavaParser.COMMA);
                    }
                }
                this.state = 372;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.SEMI) {
                    {
                        this.state = 371;
                        this.enumBodyDeclarations();
                    }
                }
                this.state = 374;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumConstants() {
        let _localctx = new EnumConstantsContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, JavaParser.RULE_enumConstants);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 376;
                this.enumConstant();
                this.state = 381;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 377;
                                this.match(JavaParser.COMMA);
                                this.state = 378;
                                this.enumConstant();
                            }
                        }
                    }
                    this.state = 383;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumConstant() {
        let _localctx = new EnumConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, JavaParser.RULE_enumConstant);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 385;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.JCOMMENT) {
                    {
                        this.state = 384;
                        this.comment();
                    }
                }
                this.state = 390;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 387;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 392;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                }
                this.state = 393;
                this.match(JavaParser.IDENTIFIER);
                this.state = 395;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LPAREN) {
                    {
                        this.state = 394;
                        this.arguments();
                    }
                }
                this.state = 398;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LBRACE) {
                    {
                        this.state = 397;
                        this.classBody();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumBodyDeclarations() {
        let _localctx = new EnumBodyDeclarationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, JavaParser.RULE_enumBodyDeclarations);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 400;
                this.match(JavaParser.SEMI);
                this.state = 404;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.LT || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.JCOMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0)) {
                    {
                        {
                            this.state = 401;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 406;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceDeclaration() {
        let _localctx = new InterfaceDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, JavaParser.RULE_interfaceDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 407;
                this.match(JavaParser.INTERFACE);
                this.state = 408;
                this.match(JavaParser.IDENTIFIER);
                this.state = 410;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 409;
                        this.typeParameters();
                    }
                }
                this.state = 413;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.EXTENDS) {
                    {
                        this.state = 412;
                        this.extendInterface();
                    }
                }
                this.state = 415;
                this.interfaceBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    extendInterface() {
        let _localctx = new ExtendInterfaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, JavaParser.RULE_extendInterface);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 417;
                this.match(JavaParser.EXTENDS);
                this.state = 418;
                this.typeList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    comment() {
        let _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, JavaParser.RULE_comment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 420;
                this.match(JavaParser.JCOMMENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classBody() {
        let _localctx = new ClassBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, JavaParser.RULE_classBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 422;
                this.match(JavaParser.LBRACE);
                this.state = 426;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.LT || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.JCOMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0)) {
                    {
                        {
                            this.state = 423;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 428;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 429;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceBody() {
        let _localctx = new InterfaceBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, JavaParser.RULE_interfaceBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 431;
                this.match(JavaParser.LBRACE);
                this.state = 435;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DEFAULT) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.LT || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.JCOMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0)) {
                    {
                        {
                            this.state = 432;
                            this.interfaceBodyDeclaration();
                        }
                    }
                    this.state = 437;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 438;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classBodyDeclaration() {
        let _localctx = new ClassBodyDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, JavaParser.RULE_classBodyDeclaration);
        let _la;
        try {
            let _alt;
            this.state = 455;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 440;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 442;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.STATIC) {
                            {
                                this.state = 441;
                                this.match(JavaParser.STATIC);
                            }
                        }
                        this.state = 444;
                        this.block();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 446;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.JCOMMENT) {
                            {
                                this.state = 445;
                                this.comment();
                            }
                        }
                        this.state = 451;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 448;
                                        this.modifier();
                                    }
                                }
                            }
                            this.state = 453;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
                        }
                        this.state = 454;
                        this.memberDeclaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    memberDeclaration() {
        let _localctx = new MemberDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, JavaParser.RULE_memberDeclaration);
        try {
            this.state = 466;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 41, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 457;
                        this.methodDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 458;
                        this.genericMethodDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 459;
                        this.fieldDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 460;
                        this.constructorDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 461;
                        this.genericConstructorDeclaration();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 462;
                        this.interfaceDeclaration();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 463;
                        this.annotationTypeDeclaration();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 464;
                        this.classDeclaration();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 465;
                        this.enumDeclaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    methodDeclaration() {
        let _localctx = new MethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, JavaParser.RULE_methodDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 468;
                this.typeTypeOrVoid();
                this.state = 469;
                this.match(JavaParser.IDENTIFIER);
                this.state = 470;
                this.formalParameters();
                this.state = 475;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 471;
                            this.match(JavaParser.LBRACK);
                            this.state = 472;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 477;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 479;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.THROWS) {
                    {
                        this.state = 478;
                        this.throwList();
                    }
                }
                this.state = 481;
                this.methodBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    throwList() {
        let _localctx = new ThrowListContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, JavaParser.RULE_throwList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 483;
                    this.match(JavaParser.THROWS);
                    this.state = 484;
                    this.qualifiedNameList();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    methodBody() {
        let _localctx = new MethodBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, JavaParser.RULE_methodBody);
        try {
            this.state = 488;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LBRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 486;
                        this.block();
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 487;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeTypeOrVoid() {
        let _localctx = new TypeTypeOrVoidContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, JavaParser.RULE_typeTypeOrVoid);
        try {
            this.state = 492;
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
                        this.state = 490;
                        this.typeType();
                    }
                    break;
                case JavaParser.VOID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 491;
                        this.match(JavaParser.VOID);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    genericMethodDeclaration() {
        let _localctx = new GenericMethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, JavaParser.RULE_genericMethodDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 494;
                this.typeParameters();
                this.state = 495;
                this.methodDeclaration();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    genericConstructorDeclaration() {
        let _localctx = new GenericConstructorDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, JavaParser.RULE_genericConstructorDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 497;
                this.typeParameters();
                this.state = 498;
                this.constructorDeclaration();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constructorDeclaration() {
        let _localctx = new ConstructorDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, JavaParser.RULE_constructorDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 500;
                this.match(JavaParser.IDENTIFIER);
                this.state = 501;
                this.formalParameters();
                this.state = 504;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.THROWS) {
                    {
                        this.state = 502;
                        this.match(JavaParser.THROWS);
                        this.state = 503;
                        this.qualifiedNameList();
                    }
                }
                this.state = 506;
                _localctx._constructorBody = this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fieldDeclaration() {
        let _localctx = new FieldDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, JavaParser.RULE_fieldDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 508;
                this.typeType();
                this.state = 509;
                this.variableDeclarators();
                this.state = 510;
                this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceBodyDeclaration() {
        let _localctx = new InterfaceBodyDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, JavaParser.RULE_interfaceBodyDeclaration);
        let _la;
        try {
            let _alt;
            this.state = 523;
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
                        this.state = 513;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.JCOMMENT) {
                            {
                                this.state = 512;
                                this.comment();
                            }
                        }
                        this.state = 518;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 515;
                                        this.modifier();
                                    }
                                }
                            }
                            this.state = 520;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                        }
                        this.state = 521;
                        this.interfaceMemberDeclaration();
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 522;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceMemberDeclaration() {
        let _localctx = new InterfaceMemberDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, JavaParser.RULE_interfaceMemberDeclaration);
        try {
            this.state = 532;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 525;
                        this.constDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 526;
                        this.interfaceMethodDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 527;
                        this.genericInterfaceMethodDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 528;
                        this.interfaceDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 529;
                        this.annotationTypeDeclaration();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 530;
                        this.classDeclaration();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 531;
                        this.enumDeclaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constDeclaration() {
        let _localctx = new ConstDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, JavaParser.RULE_constDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 534;
                this.typeType();
                this.state = 535;
                this.constantDeclarator();
                this.state = 540;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 536;
                            this.match(JavaParser.COMMA);
                            this.state = 537;
                            this.constantDeclarator();
                        }
                    }
                    this.state = 542;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 543;
                this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constantDeclarator() {
        let _localctx = new ConstantDeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, JavaParser.RULE_constantDeclarator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 545;
                this.match(JavaParser.IDENTIFIER);
                this.state = 550;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 546;
                            this.match(JavaParser.LBRACK);
                            this.state = 547;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 552;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 553;
                this.match(JavaParser.ASSIGN);
                this.state = 554;
                this.variableInitializer();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceMethodDeclaration() {
        let _localctx = new InterfaceMethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, JavaParser.RULE_interfaceMethodDeclaration);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 559;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 556;
                                this.interfaceMethodModifier();
                            }
                        }
                    }
                    this.state = 561;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                }
                this.state = 572;
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
                            this.state = 562;
                            this.typeTypeOrVoid();
                        }
                        break;
                    case JavaParser.LT:
                        {
                            this.state = 563;
                            this.typeParameters();
                            this.state = 567;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 564;
                                            this.annotation();
                                        }
                                    }
                                }
                                this.state = 569;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
                            }
                            this.state = 570;
                            this.typeTypeOrVoid();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 574;
                this.match(JavaParser.IDENTIFIER);
                this.state = 575;
                this.formalParameters();
                this.state = 580;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 576;
                            this.match(JavaParser.LBRACK);
                            this.state = 577;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 582;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 584;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.THROWS) {
                    {
                        this.state = 583;
                        this.throwList();
                    }
                }
                this.state = 586;
                this.methodBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceMethodModifier() {
        let _localctx = new InterfaceMethodModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, JavaParser.RULE_interfaceMethodModifier);
        try {
            this.state = 594;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 588;
                        this.annotation();
                    }
                    break;
                case JavaParser.PUBLIC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 589;
                        this.match(JavaParser.PUBLIC);
                    }
                    break;
                case JavaParser.ABSTRACT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 590;
                        this.match(JavaParser.ABSTRACT);
                    }
                    break;
                case JavaParser.DEFAULT:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 591;
                        this.match(JavaParser.DEFAULT);
                    }
                    break;
                case JavaParser.STATIC:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 592;
                        this.match(JavaParser.STATIC);
                    }
                    break;
                case JavaParser.STRICTFP:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 593;
                        this.match(JavaParser.STRICTFP);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    genericInterfaceMethodDeclaration() {
        let _localctx = new GenericInterfaceMethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, JavaParser.RULE_genericInterfaceMethodDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 596;
                this.typeParameters();
                this.state = 597;
                this.interfaceMethodDeclaration();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableDeclarators() {
        let _localctx = new VariableDeclaratorsContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, JavaParser.RULE_variableDeclarators);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 599;
                this.variableDeclarator();
                this.state = 604;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 600;
                            this.match(JavaParser.COMMA);
                            this.state = 601;
                            this.variableDeclarator();
                        }
                    }
                    this.state = 606;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableDeclarator() {
        let _localctx = new VariableDeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, JavaParser.RULE_variableDeclarator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 607;
                this.variableDeclaratorId();
                this.state = 610;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.ASSIGN) {
                    {
                        this.state = 608;
                        this.match(JavaParser.ASSIGN);
                        this.state = 609;
                        this.variableInitializer();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableDeclaratorId() {
        let _localctx = new VariableDeclaratorIdContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, JavaParser.RULE_variableDeclaratorId);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 612;
                this.match(JavaParser.IDENTIFIER);
                this.state = 617;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 613;
                            this.match(JavaParser.LBRACK);
                            this.state = 614;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 619;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableInitializer() {
        let _localctx = new VariableInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, JavaParser.RULE_variableInitializer);
        try {
            this.state = 622;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LBRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 620;
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
                        this.state = 621;
                        this.expression(0);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arrayInitializer() {
        let _localctx = new ArrayInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, JavaParser.RULE_arrayInitializer);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 624;
                this.match(JavaParser.LBRACE);
                this.state = 636;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LBRACE - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        this.state = 625;
                        this.variableInitializer();
                        this.state = 630;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 626;
                                        this.match(JavaParser.COMMA);
                                        this.state = 627;
                                        this.variableInitializer();
                                    }
                                }
                            }
                            this.state = 632;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
                        }
                        this.state = 634;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.COMMA) {
                            {
                                this.state = 633;
                                this.match(JavaParser.COMMA);
                            }
                        }
                    }
                }
                this.state = 638;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classOrInterfaceType() {
        let _localctx = new ClassOrInterfaceTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, JavaParser.RULE_classOrInterfaceType);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 640;
                this.match(JavaParser.IDENTIFIER);
                this.state = 642;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 66, this._ctx)) {
                    case 1:
                        {
                            this.state = 641;
                            this.typeArguments();
                        }
                        break;
                }
                this.state = 651;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 644;
                                this.match(JavaParser.DOT);
                                this.state = 645;
                                this.match(JavaParser.IDENTIFIER);
                                this.state = 647;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 67, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 646;
                                            this.typeArguments();
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 653;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeArgument() {
        let _localctx = new TypeArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, JavaParser.RULE_typeArgument);
        let _la;
        try {
            this.state = 666;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 71, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 654;
                        this.typeType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 658;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                {
                                    this.state = 655;
                                    this.annotation();
                                }
                            }
                            this.state = 660;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 661;
                        this.match(JavaParser.QUESTION);
                        this.state = 664;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.EXTENDS || _la === JavaParser.SUPER) {
                            {
                                this.state = 662;
                                _la = this._input.LA(1);
                                if (!(_la === JavaParser.EXTENDS || _la === JavaParser.SUPER)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 663;
                                this.typeType();
                            }
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    qualifiedNameList() {
        let _localctx = new QualifiedNameListContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, JavaParser.RULE_qualifiedNameList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 668;
                this.qualifiedName();
                this.state = 673;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 669;
                            this.match(JavaParser.COMMA);
                            this.state = 670;
                            this.qualifiedName();
                        }
                    }
                    this.state = 675;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    formalParameters() {
        let _localctx = new FormalParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, JavaParser.RULE_formalParameters);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 676;
                this.match(JavaParser.LPAREN);
                this.state = 678;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la === JavaParser.SHORT || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        this.state = 677;
                        this.formalParameterList();
                    }
                }
                this.state = 680;
                this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    formalParameterList() {
        let _localctx = new FormalParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, JavaParser.RULE_formalParameterList);
        let _la;
        try {
            let _alt;
            this.state = 695;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 76, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 682;
                        this.formalParameter();
                        this.state = 687;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 683;
                                        this.match(JavaParser.COMMA);
                                        this.state = 684;
                                        this.formalParameter();
                                    }
                                }
                            }
                            this.state = 689;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                        }
                        this.state = 692;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.COMMA) {
                            {
                                this.state = 690;
                                this.match(JavaParser.COMMA);
                                this.state = 691;
                                this.lastFormalParameter();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 694;
                        this.lastFormalParameter();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    formalParameter() {
        let _localctx = new FormalParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, JavaParser.RULE_formalParameter);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 700;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 697;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 702;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
                }
                this.state = 703;
                this.typeType();
                this.state = 704;
                this.variableDeclaratorId();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lastFormalParameter() {
        let _localctx = new LastFormalParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, JavaParser.RULE_lastFormalParameter);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 709;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 706;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 711;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                }
                this.state = 712;
                this.typeType();
                this.state = 716;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 713;
                            this.annotation();
                        }
                    }
                    this.state = 718;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 719;
                this.match(JavaParser.ELLIPSIS);
                this.state = 720;
                this.variableDeclaratorId();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    qualifiedName() {
        let _localctx = new QualifiedNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, JavaParser.RULE_qualifiedName);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 722;
                this.match(JavaParser.IDENTIFIER);
                this.state = 727;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 723;
                                this.match(JavaParser.DOT);
                                this.state = 724;
                                this.match(JavaParser.IDENTIFIER);
                            }
                        }
                    }
                    this.state = 729;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    literal() {
        let _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, JavaParser.RULE_literal);
        try {
            this.state = 736;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.DECIMAL_LITERAL:
                case JavaParser.HEX_LITERAL:
                case JavaParser.OCT_LITERAL:
                case JavaParser.BINARY_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 730;
                        this.integerLiteral();
                    }
                    break;
                case JavaParser.FLOAT_LITERAL:
                case JavaParser.HEX_FLOAT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 731;
                        this.floatLiteral();
                    }
                    break;
                case JavaParser.CHAR_LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 732;
                        this.match(JavaParser.CHAR_LITERAL);
                    }
                    break;
                case JavaParser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 733;
                        this.match(JavaParser.STRING_LITERAL);
                    }
                    break;
                case JavaParser.BOOL_LITERAL:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 734;
                        this.match(JavaParser.BOOL_LITERAL);
                    }
                    break;
                case JavaParser.NULL_LITERAL:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 735;
                        this.match(JavaParser.NULL_LITERAL);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    integerLiteral() {
        let _localctx = new IntegerLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, JavaParser.RULE_integerLiteral);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 738;
                _la = this._input.LA(1);
                if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.DECIMAL_LITERAL - 51)) | (1 << (JavaParser.HEX_LITERAL - 51)) | (1 << (JavaParser.OCT_LITERAL - 51)) | (1 << (JavaParser.BINARY_LITERAL - 51)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    floatLiteral() {
        let _localctx = new FloatLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, JavaParser.RULE_floatLiteral);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 740;
                _la = this._input.LA(1);
                if (!(_la === JavaParser.FLOAT_LITERAL || _la === JavaParser.HEX_FLOAT_LITERAL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    altAnnotationQualifiedName() {
        let _localctx = new AltAnnotationQualifiedNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, JavaParser.RULE_altAnnotationQualifiedName);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 746;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 742;
                            this.match(JavaParser.IDENTIFIER);
                            this.state = 743;
                            this.match(JavaParser.DOT);
                        }
                    }
                    this.state = 748;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 749;
                this.match(JavaParser.AT);
                this.state = 750;
                this.match(JavaParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation() {
        let _localctx = new AnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, JavaParser.RULE_annotation);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 755;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 83, this._ctx)) {
                    case 1:
                        {
                            this.state = 752;
                            this.match(JavaParser.AT);
                            this.state = 753;
                            this.qualifiedName();
                        }
                        break;
                    case 2:
                        {
                            this.state = 754;
                            this.altAnnotationQualifiedName();
                        }
                        break;
                }
                this.state = 763;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LPAREN) {
                    {
                        this.state = 757;
                        this.match(JavaParser.LPAREN);
                        this.state = 760;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                            case 1:
                                {
                                    this.state = 758;
                                    this.elementValuePairs();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 759;
                                    this.elementValue();
                                }
                                break;
                        }
                        this.state = 762;
                        this.match(JavaParser.RPAREN);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elementValuePairs() {
        let _localctx = new ElementValuePairsContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, JavaParser.RULE_elementValuePairs);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 765;
                this.elementValuePair();
                this.state = 770;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 766;
                            this.match(JavaParser.COMMA);
                            this.state = 767;
                            this.elementValuePair();
                        }
                    }
                    this.state = 772;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elementValuePair() {
        let _localctx = new ElementValuePairContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, JavaParser.RULE_elementValuePair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 773;
                this.match(JavaParser.IDENTIFIER);
                this.state = 774;
                this.match(JavaParser.ASSIGN);
                this.state = 775;
                this.elementValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elementValue() {
        let _localctx = new ElementValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, JavaParser.RULE_elementValue);
        try {
            this.state = 780;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 777;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 778;
                        this.annotation();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 779;
                        this.elementValueArrayInitializer();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elementValueArrayInitializer() {
        let _localctx = new ElementValueArrayInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, JavaParser.RULE_elementValueArrayInitializer);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 782;
                this.match(JavaParser.LBRACE);
                this.state = 791;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LBRACE - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        this.state = 783;
                        this.elementValue();
                        this.state = 788;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 784;
                                        this.match(JavaParser.COMMA);
                                        this.state = 785;
                                        this.elementValue();
                                    }
                                }
                            }
                            this.state = 790;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
                        }
                    }
                }
                this.state = 794;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.COMMA) {
                    {
                        this.state = 793;
                        this.match(JavaParser.COMMA);
                    }
                }
                this.state = 796;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotationTypeDeclaration() {
        let _localctx = new AnnotationTypeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, JavaParser.RULE_annotationTypeDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 798;
                this.match(JavaParser.AT);
                this.state = 799;
                this.match(JavaParser.INTERFACE);
                this.state = 800;
                this.match(JavaParser.IDENTIFIER);
                this.state = 801;
                this.annotationTypeBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotationTypeBody() {
        let _localctx = new AnnotationTypeBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, JavaParser.RULE_annotationTypeBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 803;
                this.match(JavaParser.LBRACE);
                this.state = 807;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOLATILE - 33)))) !== 0) || _la === JavaParser.SEMI || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 804;
                            this.annotationTypeElementDeclaration();
                        }
                    }
                    this.state = 809;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 810;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotationTypeElementDeclaration() {
        let _localctx = new AnnotationTypeElementDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, JavaParser.RULE_annotationTypeElementDeclaration);
        try {
            let _alt;
            this.state = 820;
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
                        this.state = 815;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 812;
                                        this.modifier();
                                    }
                                }
                            }
                            this.state = 817;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
                        }
                        this.state = 818;
                        this.annotationTypeElementRest();
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 819;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotationTypeElementRest() {
        let _localctx = new AnnotationTypeElementRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, JavaParser.RULE_annotationTypeElementRest);
        try {
            this.state = 842;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 822;
                        this.typeType();
                        this.state = 823;
                        this.annotationMethodOrConstantRest();
                        this.state = 824;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 826;
                        this.classDeclaration();
                        this.state = 828;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 94, this._ctx)) {
                            case 1:
                                {
                                    this.state = 827;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 830;
                        this.interfaceDeclaration();
                        this.state = 832;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 95, this._ctx)) {
                            case 1:
                                {
                                    this.state = 831;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 834;
                        this.enumDeclaration();
                        this.state = 836;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                            case 1:
                                {
                                    this.state = 835;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 838;
                        this.annotationTypeDeclaration();
                        this.state = 840;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                            case 1:
                                {
                                    this.state = 839;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotationMethodOrConstantRest() {
        let _localctx = new AnnotationMethodOrConstantRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, JavaParser.RULE_annotationMethodOrConstantRest);
        try {
            this.state = 846;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 844;
                        this.annotationMethodRest();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 845;
                        this.annotationConstantRest();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotationMethodRest() {
        let _localctx = new AnnotationMethodRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, JavaParser.RULE_annotationMethodRest);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 848;
                this.match(JavaParser.IDENTIFIER);
                this.state = 849;
                this.match(JavaParser.LPAREN);
                this.state = 850;
                this.match(JavaParser.RPAREN);
                this.state = 852;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.DEFAULT) {
                    {
                        this.state = 851;
                        this.defaultValue();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotationConstantRest() {
        let _localctx = new AnnotationConstantRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, JavaParser.RULE_annotationConstantRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 854;
                this.variableDeclarators();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    defaultValue() {
        let _localctx = new DefaultValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, JavaParser.RULE_defaultValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 856;
                this.match(JavaParser.DEFAULT);
                this.state = 857;
                this.elementValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    block() {
        let _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, JavaParser.RULE_block);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 859;
                this.match(JavaParser.LBRACE);
                this.state = 863;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.DECIMAL_LITERAL - 33)) | (1 << (JavaParser.HEX_LITERAL - 33)) | (1 << (JavaParser.OCT_LITERAL - 33)) | (1 << (JavaParser.BINARY_LITERAL - 33)) | (1 << (JavaParser.FLOAT_LITERAL - 33)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 33)) | (1 << (JavaParser.BOOL_LITERAL - 33)) | (1 << (JavaParser.CHAR_LITERAL - 33)) | (1 << (JavaParser.STRING_LITERAL - 33)) | (1 << (JavaParser.NULL_LITERAL - 33)) | (1 << (JavaParser.LPAREN - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JavaParser.SEMI - 67)) | (1 << (JavaParser.LT - 67)) | (1 << (JavaParser.BANG - 67)) | (1 << (JavaParser.TILDE - 67)) | (1 << (JavaParser.INC - 67)) | (1 << (JavaParser.DEC - 67)) | (1 << (JavaParser.ADD - 67)) | (1 << (JavaParser.SUB - 67)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.JCOMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0)) {
                    {
                        {
                            this.state = 860;
                            this.blockStatement();
                        }
                    }
                    this.state = 865;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 866;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    blockStatement() {
        let _localctx = new BlockStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, JavaParser.RULE_blockStatement);
        try {
            this.state = 873;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 868;
                        this.localVariableDeclaration();
                        this.state = 869;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 871;
                        this.statement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 872;
                        this.localTypeDeclaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    localVariableDeclaration() {
        let _localctx = new LocalVariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, JavaParser.RULE_localVariableDeclaration);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 878;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 875;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 880;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
                }
                this.state = 881;
                this.typeType();
                this.state = 882;
                this.variableDeclarators();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    localTypeDeclaration() {
        let _localctx = new LocalTypeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, JavaParser.RULE_localTypeDeclaration);
        let _la;
        try {
            this.state = 895;
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
                        this.state = 887;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.ABSTRACT || _la === JavaParser.FINAL || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                {
                                    this.state = 884;
                                    this.classOrInterfaceModifier();
                                }
                            }
                            this.state = 889;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 892;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.CLASS:
                                {
                                    this.state = 890;
                                    this.classDeclaration();
                                }
                                break;
                            case JavaParser.INTERFACE:
                                {
                                    this.state = 891;
                                    this.interfaceDeclaration();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 894;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, JavaParser.RULE_statement);
        let _la;
        try {
            let _alt;
            this.state = 1002;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 897;
                        _localctx._blockLabel = this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 898;
                        this.match(JavaParser.ASSERT);
                        this.state = 899;
                        this.expression(0);
                        this.state = 902;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.COLON) {
                            {
                                this.state = 900;
                                this.match(JavaParser.COLON);
                                this.state = 901;
                                this.expression(0);
                            }
                        }
                        this.state = 904;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 906;
                        this.match(JavaParser.IF);
                        this.state = 907;
                        this.parExpression();
                        this.state = 908;
                        this.statement();
                        this.state = 911;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                            case 1:
                                {
                                    this.state = 909;
                                    this.match(JavaParser.ELSE);
                                    this.state = 910;
                                    this.statement();
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 913;
                        this.match(JavaParser.FOR);
                        this.state = 914;
                        this.match(JavaParser.LPAREN);
                        this.state = 915;
                        this.forControl();
                        this.state = 916;
                        this.match(JavaParser.RPAREN);
                        this.state = 917;
                        this.statement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 919;
                        this.match(JavaParser.WHILE);
                        this.state = 920;
                        this.parExpression();
                        this.state = 921;
                        this.statement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 923;
                        this.match(JavaParser.DO);
                        this.state = 924;
                        this.statement();
                        this.state = 925;
                        this.match(JavaParser.WHILE);
                        this.state = 926;
                        this.parExpression();
                        this.state = 927;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 929;
                        this.match(JavaParser.TRY);
                        this.state = 930;
                        this.block();
                        this.state = 940;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.CATCH:
                                {
                                    this.state = 932;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 931;
                                                this.catchClause();
                                            }
                                        }
                                        this.state = 934;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === JavaParser.CATCH);
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
                            case JavaParser.FINALLY:
                                {
                                    this.state = 939;
                                    this.finallyBlock();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 942;
                        this.match(JavaParser.TRY);
                        this.state = 943;
                        this.resourceSpecification();
                        this.state = 944;
                        this.block();
                        this.state = 948;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.CATCH) {
                            {
                                {
                                    this.state = 945;
                                    this.catchClause();
                                }
                            }
                            this.state = 950;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 952;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.FINALLY) {
                            {
                                this.state = 951;
                                this.finallyBlock();
                            }
                        }
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 954;
                        this.match(JavaParser.SWITCH);
                        this.state = 955;
                        this.parExpression();
                        this.state = 956;
                        this.match(JavaParser.LBRACE);
                        this.state = 960;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 957;
                                        this.switchBlockStatementGroup();
                                    }
                                }
                            }
                            this.state = 962;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
                        }
                        this.state = 966;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT) {
                            {
                                {
                                    this.state = 963;
                                    this.switchLabel();
                                }
                            }
                            this.state = 968;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 969;
                        this.match(JavaParser.RBRACE);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 971;
                        this.match(JavaParser.SYNCHRONIZED);
                        this.state = 972;
                        this.parExpression();
                        this.state = 973;
                        this.block();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 975;
                        this.match(JavaParser.RETURN);
                        this.state = 977;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 976;
                                this.expression(0);
                            }
                        }
                        this.state = 979;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 980;
                        this.match(JavaParser.THROW);
                        this.state = 981;
                        this.expression(0);
                        this.state = 982;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 984;
                        this.match(JavaParser.BREAK);
                        this.state = 986;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 985;
                                this.match(JavaParser.IDENTIFIER);
                            }
                        }
                        this.state = 988;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 989;
                        this.match(JavaParser.CONTINUE);
                        this.state = 991;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 990;
                                this.match(JavaParser.IDENTIFIER);
                            }
                        }
                        this.state = 993;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 994;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 995;
                        this.comment();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 996;
                        _localctx._statementExpression = this.expression(0);
                        this.state = 997;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 999;
                        _localctx._identifierLabel = this.match(JavaParser.IDENTIFIER);
                        this.state = 1000;
                        this.match(JavaParser.COLON);
                        this.state = 1001;
                        this.statement();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    catchClause() {
        let _localctx = new CatchClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, JavaParser.RULE_catchClause);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1004;
                this.match(JavaParser.CATCH);
                this.state = 1005;
                this.match(JavaParser.LPAREN);
                this.state = 1009;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1006;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 1011;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
                }
                this.state = 1012;
                this.catchType();
                this.state = 1013;
                this.match(JavaParser.IDENTIFIER);
                this.state = 1014;
                this.match(JavaParser.RPAREN);
                this.state = 1015;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    catchType() {
        let _localctx = new CatchTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, JavaParser.RULE_catchType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1017;
                this.qualifiedName();
                this.state = 1022;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.BITOR) {
                    {
                        {
                            this.state = 1018;
                            this.match(JavaParser.BITOR);
                            this.state = 1019;
                            this.qualifiedName();
                        }
                    }
                    this.state = 1024;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    finallyBlock() {
        let _localctx = new FinallyBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, JavaParser.RULE_finallyBlock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1025;
                this.match(JavaParser.FINALLY);
                this.state = 1026;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    resourceSpecification() {
        let _localctx = new ResourceSpecificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, JavaParser.RULE_resourceSpecification);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1028;
                this.match(JavaParser.LPAREN);
                this.state = 1029;
                this.resources();
                this.state = 1031;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.SEMI) {
                    {
                        this.state = 1030;
                        this.match(JavaParser.SEMI);
                    }
                }
                this.state = 1033;
                this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    resources() {
        let _localctx = new ResourcesContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, JavaParser.RULE_resources);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1035;
                this.resource();
                this.state = 1040;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1036;
                                this.match(JavaParser.SEMI);
                                this.state = 1037;
                                this.resource();
                            }
                        }
                    }
                    this.state = 1042;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    resource() {
        let _localctx = new ResourceContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, JavaParser.RULE_resource);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1046;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1043;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 1048;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
                }
                this.state = 1049;
                this.classOrInterfaceType();
                this.state = 1050;
                this.variableDeclaratorId();
                this.state = 1051;
                this.match(JavaParser.ASSIGN);
                this.state = 1052;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    switchBlockStatementGroup() {
        let _localctx = new SwitchBlockStatementGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, JavaParser.RULE_switchBlockStatementGroup);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1055;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1054;
                            this.switchLabel();
                        }
                    }
                    this.state = 1057;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT);
                this.state = 1060;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1059;
                            this.blockStatement();
                        }
                    }
                    this.state = 1062;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.DECIMAL_LITERAL - 33)) | (1 << (JavaParser.HEX_LITERAL - 33)) | (1 << (JavaParser.OCT_LITERAL - 33)) | (1 << (JavaParser.BINARY_LITERAL - 33)) | (1 << (JavaParser.FLOAT_LITERAL - 33)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 33)) | (1 << (JavaParser.BOOL_LITERAL - 33)) | (1 << (JavaParser.CHAR_LITERAL - 33)) | (1 << (JavaParser.STRING_LITERAL - 33)) | (1 << (JavaParser.NULL_LITERAL - 33)) | (1 << (JavaParser.LPAREN - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JavaParser.SEMI - 67)) | (1 << (JavaParser.LT - 67)) | (1 << (JavaParser.BANG - 67)) | (1 << (JavaParser.TILDE - 67)) | (1 << (JavaParser.INC - 67)) | (1 << (JavaParser.DEC - 67)) | (1 << (JavaParser.ADD - 67)) | (1 << (JavaParser.SUB - 67)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (JavaParser.AT - 106)) | (1 << (JavaParser.JCOMMENT - 106)) | (1 << (JavaParser.IDENTIFIER - 106)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    switchLabel() {
        let _localctx = new SwitchLabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, JavaParser.RULE_switchLabel);
        try {
            this.state = 1072;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.CASE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1064;
                        this.match(JavaParser.CASE);
                        this.state = 1067;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 127, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1065;
                                    _localctx._constantExpression = this.expression(0);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1066;
                                    _localctx._enumConstantName = this.match(JavaParser.IDENTIFIER);
                                }
                                break;
                        }
                        this.state = 1069;
                        this.match(JavaParser.COLON);
                    }
                    break;
                case JavaParser.DEFAULT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1070;
                        this.match(JavaParser.DEFAULT);
                        this.state = 1071;
                        this.match(JavaParser.COLON);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    forControl() {
        let _localctx = new ForControlContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, JavaParser.RULE_forControl);
        let _la;
        try {
            this.state = 1086;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1074;
                        this.enhancedForControl();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1076;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1075;
                                this.forInit();
                            }
                        }
                        this.state = 1078;
                        this.match(JavaParser.SEMI);
                        this.state = 1080;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1079;
                                this.expression(0);
                            }
                        }
                        this.state = 1082;
                        this.match(JavaParser.SEMI);
                        this.state = 1084;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1083;
                                _localctx._forUpdate = this.expressionList();
                            }
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    forInit() {
        let _localctx = new ForInitContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, JavaParser.RULE_forInit);
        try {
            this.state = 1090;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 133, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1088;
                        this.localVariableDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1089;
                        this.expressionList();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enhancedForControl() {
        let _localctx = new EnhancedForControlContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, JavaParser.RULE_enhancedForControl);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1095;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1092;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 1097;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
                }
                this.state = 1098;
                this.typeType();
                this.state = 1099;
                this.variableDeclaratorId();
                this.state = 1100;
                this.match(JavaParser.COLON);
                this.state = 1101;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parExpression() {
        let _localctx = new ParExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, JavaParser.RULE_parExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1103;
                this.match(JavaParser.LPAREN);
                this.state = 1104;
                this.expression(0);
                this.state = 1105;
                this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expressionList() {
        let _localctx = new ExpressionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, JavaParser.RULE_expressionList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1107;
                this.expression(0);
                this.state = 1112;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1108;
                            this.match(JavaParser.COMMA);
                            this.state = 1109;
                            this.expression(0);
                        }
                    }
                    this.state = 1114;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    methodCall() {
        let _localctx = new MethodCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, JavaParser.RULE_methodCall);
        let _la;
        try {
            this.state = 1133;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1115;
                        this.match(JavaParser.IDENTIFIER);
                        this.state = 1116;
                        this.match(JavaParser.LPAREN);
                        this.state = 1118;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1117;
                                this.expressionList();
                            }
                        }
                        this.state = 1120;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case JavaParser.THIS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1121;
                        this.match(JavaParser.THIS);
                        this.state = 1122;
                        this.match(JavaParser.LPAREN);
                        this.state = 1124;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1123;
                                this.expressionList();
                            }
                        }
                        this.state = 1126;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case JavaParser.SUPER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1127;
                        this.match(JavaParser.SUPER);
                        this.state = 1128;
                        this.match(JavaParser.LPAREN);
                        this.state = 1130;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1129;
                                this.expressionList();
                            }
                        }
                        this.state = 1132;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 176;
        this.enterRecursionRule(_localctx, 176, JavaParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1179;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 145, this._ctx)) {
                    case 1:
                        {
                            this.state = 1136;
                            this.primary();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1137;
                            this.methodCall();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1138;
                            this.match(JavaParser.NEW);
                            this.state = 1139;
                            this.creator();
                        }
                        break;
                    case 4:
                        {
                            this.state = 1140;
                            this.match(JavaParser.LPAREN);
                            this.state = 1144;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1141;
                                            this.annotation();
                                        }
                                    }
                                }
                                this.state = 1146;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                            }
                            this.state = 1147;
                            this.typeType();
                            this.state = 1152;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === JavaParser.BITAND) {
                                {
                                    {
                                        this.state = 1148;
                                        this.match(JavaParser.BITAND);
                                        this.state = 1149;
                                        this.typeType();
                                    }
                                }
                                this.state = 1154;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1155;
                            this.match(JavaParser.RPAREN);
                            this.state = 1156;
                            this.expression(21);
                        }
                        break;
                    case 5:
                        {
                            this.state = 1158;
                            _localctx._prefix = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (JavaParser.INC - 83)) | (1 << (JavaParser.DEC - 83)) | (1 << (JavaParser.ADD - 83)) | (1 << (JavaParser.SUB - 83)))) !== 0))) {
                                _localctx._prefix = this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1159;
                            this.expression(19);
                        }
                        break;
                    case 6:
                        {
                            this.state = 1160;
                            _localctx._prefix = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(_la === JavaParser.BANG || _la === JavaParser.TILDE)) {
                                _localctx._prefix = this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1161;
                            this.expression(18);
                        }
                        break;
                    case 7:
                        {
                            this.state = 1162;
                            this.lambdaExpression();
                        }
                        break;
                    case 8:
                        {
                            this.state = 1163;
                            this.typeType();
                            this.state = 1164;
                            this.match(JavaParser.COLONCOLON);
                            this.state = 1170;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case JavaParser.LT:
                                case JavaParser.IDENTIFIER:
                                    {
                                        this.state = 1166;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === JavaParser.LT) {
                                            {
                                                this.state = 1165;
                                                this.typeArguments();
                                            }
                                        }
                                        this.state = 1168;
                                        this.match(JavaParser.IDENTIFIER);
                                    }
                                    break;
                                case JavaParser.NEW:
                                    {
                                        this.state = 1169;
                                        this.match(JavaParser.NEW);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        break;
                    case 9:
                        {
                            this.state = 1172;
                            this.classType();
                            this.state = 1173;
                            this.match(JavaParser.COLONCOLON);
                            this.state = 1175;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === JavaParser.LT) {
                                {
                                    this.state = 1174;
                                    this.typeArguments();
                                }
                            }
                            this.state = 1177;
                            this.match(JavaParser.NEW);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1261;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 1259;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 150, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1181;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 1182;
                                        _localctx._bop = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (JavaParser.MUL - 87)) | (1 << (JavaParser.DIV - 87)) | (1 << (JavaParser.MOD - 87)))) !== 0))) {
                                            _localctx._bop = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1183;
                                        this.expression(18);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1184;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 1185;
                                        _localctx._bop = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === JavaParser.ADD || _la === JavaParser.SUB)) {
                                            _localctx._bop = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1186;
                                        this.expression(17);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1187;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 1195;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1188;
                                                    this.match(JavaParser.LT);
                                                    this.state = 1189;
                                                    this.match(JavaParser.LT);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1190;
                                                    this.match(JavaParser.GT);
                                                    this.state = 1191;
                                                    this.match(JavaParser.GT);
                                                    this.state = 1192;
                                                    this.match(JavaParser.GT);
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1193;
                                                    this.match(JavaParser.GT);
                                                    this.state = 1194;
                                                    this.match(JavaParser.GT);
                                                }
                                                break;
                                        }
                                        this.state = 1197;
                                        this.expression(16);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1198;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 1199;
                                        _localctx._bop = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (JavaParser.GT - 71)) | (1 << (JavaParser.LT - 71)) | (1 << (JavaParser.LE - 71)) | (1 << (JavaParser.GE - 71)))) !== 0))) {
                                            _localctx._bop = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1200;
                                        this.expression(15);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1201;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 1202;
                                        _localctx._bop = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === JavaParser.EQUAL || _la === JavaParser.NOTEQUAL)) {
                                            _localctx._bop = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1203;
                                        this.expression(13);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1204;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 1205;
                                        _localctx._bop = this.match(JavaParser.BITAND);
                                        this.state = 1206;
                                        this.expression(12);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1207;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 1208;
                                        _localctx._bop = this.match(JavaParser.CARET);
                                        this.state = 1209;
                                        this.expression(11);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1210;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 1211;
                                        _localctx._bop = this.match(JavaParser.BITOR);
                                        this.state = 1212;
                                        this.expression(10);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1213;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 1214;
                                        _localctx._bop = this.match(JavaParser.AND);
                                        this.state = 1215;
                                        this.expression(9);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1216;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 1217;
                                        _localctx._bop = this.match(JavaParser.OR);
                                        this.state = 1218;
                                        this.expression(8);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1219;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 1220;
                                        _localctx._bop = this.match(JavaParser.QUESTION);
                                        this.state = 1221;
                                        this.expression(0);
                                        this.state = 1222;
                                        this.match(JavaParser.COLON);
                                        this.state = 1223;
                                        this.expression(6);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1225;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 1226;
                                        _localctx._bop = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JavaParser.ASSIGN - 70)) | (1 << (JavaParser.ADD_ASSIGN - 70)) | (1 << (JavaParser.SUB_ASSIGN - 70)) | (1 << (JavaParser.MUL_ASSIGN - 70)) | (1 << (JavaParser.DIV_ASSIGN - 70)) | (1 << (JavaParser.AND_ASSIGN - 70)) | (1 << (JavaParser.OR_ASSIGN - 70)) | (1 << (JavaParser.XOR_ASSIGN - 70)) | (1 << (JavaParser.MOD_ASSIGN - 70)) | (1 << (JavaParser.LSHIFT_ASSIGN - 70)))) !== 0) || _la === JavaParser.RSHIFT_ASSIGN || _la === JavaParser.URSHIFT_ASSIGN)) {
                                            _localctx._bop = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1227;
                                        this.expression(5);
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1228;
                                        if (!(this.precpred(this._ctx, 25))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
                                        }
                                        this.state = 1229;
                                        _localctx._bop = this.match(JavaParser.DOT);
                                        this.state = 1241;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1230;
                                                    this.match(JavaParser.IDENTIFIER);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1231;
                                                    this.methodCall();
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1232;
                                                    this.match(JavaParser.THIS);
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 1233;
                                                    this.match(JavaParser.NEW);
                                                    this.state = 1235;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    if (_la === JavaParser.LT) {
                                                        {
                                                            this.state = 1234;
                                                            this.nonWildcardTypeArguments();
                                                        }
                                                    }
                                                    this.state = 1237;
                                                    this.innerCreator();
                                                }
                                                break;
                                            case 5:
                                                {
                                                    this.state = 1238;
                                                    this.match(JavaParser.SUPER);
                                                    this.state = 1239;
                                                    this.superSuffix();
                                                }
                                                break;
                                            case 6:
                                                {
                                                    this.state = 1240;
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
                                        this.state = 1243;
                                        if (!(this.precpred(this._ctx, 24))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
                                        }
                                        this.state = 1244;
                                        this.match(JavaParser.LBRACK);
                                        this.state = 1245;
                                        this.expression(0);
                                        this.state = 1246;
                                        this.match(JavaParser.RBRACK);
                                    }
                                    break;
                                case 15:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1248;
                                        if (!(this.precpred(this._ctx, 20))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
                                        }
                                        this.state = 1249;
                                        _localctx._postfix = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === JavaParser.INC || _la === JavaParser.DEC)) {
                                            _localctx._postfix = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
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
                                        this.state = 1250;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 1251;
                                        _localctx._bop = this.match(JavaParser.INSTANCEOF);
                                        this.state = 1252;
                                        this.typeType();
                                    }
                                    break;
                                case 17:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1253;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 1254;
                                        this.match(JavaParser.COLONCOLON);
                                        this.state = 1256;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === JavaParser.LT) {
                                            {
                                                this.state = 1255;
                                                this.typeArguments();
                                            }
                                        }
                                        this.state = 1258;
                                        this.match(JavaParser.IDENTIFIER);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1263;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lambdaExpression() {
        let _localctx = new LambdaExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, JavaParser.RULE_lambdaExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1264;
                this.lambdaParameters();
                this.state = 1265;
                this.match(JavaParser.ARROW);
                this.state = 1266;
                this.lambdaBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lambdaParameters() {
        let _localctx = new LambdaParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, JavaParser.RULE_lambdaParameters);
        let _la;
        try {
            this.state = 1284;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 154, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1268;
                        this.match(JavaParser.IDENTIFIER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1269;
                        this.match(JavaParser.LPAREN);
                        this.state = 1271;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la === JavaParser.SHORT || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1270;
                                this.formalParameterList();
                            }
                        }
                        this.state = 1273;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1274;
                        this.match(JavaParser.LPAREN);
                        this.state = 1275;
                        this.match(JavaParser.IDENTIFIER);
                        this.state = 1280;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.COMMA) {
                            {
                                {
                                    this.state = 1276;
                                    this.match(JavaParser.COMMA);
                                    this.state = 1277;
                                    this.match(JavaParser.IDENTIFIER);
                                }
                            }
                            this.state = 1282;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1283;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lambdaBody() {
        let _localctx = new LambdaBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, JavaParser.RULE_lambdaBody);
        try {
            this.state = 1288;
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
                        this.state = 1286;
                        this.expression(0);
                    }
                    break;
                case JavaParser.LBRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1287;
                        this.block();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    primary() {
        let _localctx = new PrimaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, JavaParser.RULE_primary);
        try {
            this.state = 1308;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1290;
                        this.match(JavaParser.LPAREN);
                        this.state = 1291;
                        this.expression(0);
                        this.state = 1292;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1294;
                        this.match(JavaParser.THIS);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1295;
                        this.match(JavaParser.SUPER);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1296;
                        this.literal();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1297;
                        this.match(JavaParser.IDENTIFIER);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1298;
                        this.typeTypeOrVoid();
                        this.state = 1299;
                        this.match(JavaParser.DOT);
                        this.state = 1300;
                        this.match(JavaParser.CLASS);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1302;
                        this.nonWildcardTypeArguments();
                        this.state = 1306;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.SUPER:
                            case JavaParser.IDENTIFIER:
                                {
                                    this.state = 1303;
                                    this.explicitGenericInvocationSuffix();
                                }
                                break;
                            case JavaParser.THIS:
                                {
                                    this.state = 1304;
                                    this.match(JavaParser.THIS);
                                    this.state = 1305;
                                    this.arguments();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classType() {
        let _localctx = new ClassTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, JavaParser.RULE_classType);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1313;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 158, this._ctx)) {
                    case 1:
                        {
                            this.state = 1310;
                            this.classOrInterfaceType();
                            this.state = 1311;
                            this.match(JavaParser.DOT);
                        }
                        break;
                }
                this.state = 1318;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1315;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 1320;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
                }
                this.state = 1321;
                this.match(JavaParser.IDENTIFIER);
                this.state = 1323;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 1322;
                        this.typeArguments();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    creator() {
        let _localctx = new CreatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, JavaParser.RULE_creator);
        try {
            this.state = 1334;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1325;
                        this.nonWildcardTypeArguments();
                        this.state = 1326;
                        this.createdName();
                        this.state = 1327;
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
                        this.state = 1329;
                        this.createdName();
                        this.state = 1332;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.LBRACK:
                                {
                                    this.state = 1330;
                                    this.arrayCreatorRest();
                                }
                                break;
                            case JavaParser.LPAREN:
                                {
                                    this.state = 1331;
                                    this.classCreatorRest();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    createdName() {
        let _localctx = new CreatedNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, JavaParser.RULE_createdName);
        let _la;
        try {
            this.state = 1351;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1336;
                        this.match(JavaParser.IDENTIFIER);
                        this.state = 1338;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.LT) {
                            {
                                this.state = 1337;
                                this.typeArgumentsOrDiamond();
                            }
                        }
                        this.state = 1347;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.DOT) {
                            {
                                {
                                    this.state = 1340;
                                    this.match(JavaParser.DOT);
                                    this.state = 1341;
                                    this.match(JavaParser.IDENTIFIER);
                                    this.state = 1343;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === JavaParser.LT) {
                                        {
                                            this.state = 1342;
                                            this.typeArgumentsOrDiamond();
                                        }
                                    }
                                }
                            }
                            this.state = 1349;
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
                        this.state = 1350;
                        this.primitiveType();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    innerCreator() {
        let _localctx = new InnerCreatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, JavaParser.RULE_innerCreator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1353;
                this.match(JavaParser.IDENTIFIER);
                this.state = 1355;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 1354;
                        this.nonWildcardTypeArgumentsOrDiamond();
                    }
                }
                this.state = 1357;
                this.classCreatorRest();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arrayCreatorRest() {
        let _localctx = new ArrayCreatorRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, JavaParser.RULE_arrayCreatorRest);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1359;
                this.match(JavaParser.LBRACK);
                this.state = 1387;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JavaParser.RBRACK:
                        {
                            this.state = 1360;
                            this.match(JavaParser.RBRACK);
                            this.state = 1365;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === JavaParser.LBRACK) {
                                {
                                    {
                                        this.state = 1361;
                                        this.match(JavaParser.LBRACK);
                                        this.state = 1362;
                                        this.match(JavaParser.RBRACK);
                                    }
                                }
                                this.state = 1367;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1368;
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
                            this.state = 1369;
                            this.expression(0);
                            this.state = 1370;
                            this.match(JavaParser.RBRACK);
                            this.state = 1377;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1371;
                                            this.match(JavaParser.LBRACK);
                                            this.state = 1372;
                                            this.expression(0);
                                            this.state = 1373;
                                            this.match(JavaParser.RBRACK);
                                        }
                                    }
                                }
                                this.state = 1379;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
                            }
                            this.state = 1384;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1380;
                                            this.match(JavaParser.LBRACK);
                                            this.state = 1381;
                                            this.match(JavaParser.RBRACK);
                                        }
                                    }
                                }
                                this.state = 1386;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classCreatorRest() {
        let _localctx = new ClassCreatorRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, JavaParser.RULE_classCreatorRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1389;
                this.arguments();
                this.state = 1391;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 172, this._ctx)) {
                    case 1:
                        {
                            this.state = 1390;
                            this.classBody();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    explicitGenericInvocation() {
        let _localctx = new ExplicitGenericInvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, JavaParser.RULE_explicitGenericInvocation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1393;
                this.nonWildcardTypeArguments();
                this.state = 1394;
                this.explicitGenericInvocationSuffix();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeArgumentsOrDiamond() {
        let _localctx = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, JavaParser.RULE_typeArgumentsOrDiamond);
        try {
            this.state = 1399;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 173, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1396;
                        this.match(JavaParser.LT);
                        this.state = 1397;
                        this.match(JavaParser.GT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1398;
                        this.typeArguments();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    nonWildcardTypeArgumentsOrDiamond() {
        let _localctx = new NonWildcardTypeArgumentsOrDiamondContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond);
        try {
            this.state = 1404;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 174, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1401;
                        this.match(JavaParser.LT);
                        this.state = 1402;
                        this.match(JavaParser.GT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1403;
                        this.nonWildcardTypeArguments();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    nonWildcardTypeArguments() {
        let _localctx = new NonWildcardTypeArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, JavaParser.RULE_nonWildcardTypeArguments);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1406;
                this.match(JavaParser.LT);
                this.state = 1407;
                this.typeList();
                this.state = 1408;
                this.match(JavaParser.GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeList() {
        let _localctx = new TypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, JavaParser.RULE_typeList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1410;
                this.typeType();
                this.state = 1415;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1411;
                            this.match(JavaParser.COMMA);
                            this.state = 1412;
                            this.typeType();
                        }
                    }
                    this.state = 1417;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeType() {
        let _localctx = new TypeTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 208, JavaParser.RULE_typeType);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1421;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1418;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 1423;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
                }
                this.state = 1426;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JavaParser.IDENTIFIER:
                        {
                            this.state = 1424;
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
                            this.state = 1425;
                            this.primitiveType();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1438;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1431;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                                    {
                                        {
                                            this.state = 1428;
                                            this.annotation();
                                        }
                                    }
                                    this.state = 1433;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1434;
                                this.match(JavaParser.LBRACK);
                                this.state = 1435;
                                this.match(JavaParser.RBRACK);
                            }
                        }
                    }
                    this.state = 1440;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    primitiveType() {
        let _localctx = new PrimitiveTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 210, JavaParser.RULE_primitiveType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1441;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la === JavaParser.SHORT)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeArguments() {
        let _localctx = new TypeArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 212, JavaParser.RULE_typeArguments);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1443;
                this.match(JavaParser.LT);
                this.state = 1444;
                this.typeArgument();
                this.state = 1449;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1445;
                            this.match(JavaParser.COMMA);
                            this.state = 1446;
                            this.typeArgument();
                        }
                    }
                    this.state = 1451;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1452;
                this.match(JavaParser.GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    superSuffix() {
        let _localctx = new SuperSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 214, JavaParser.RULE_superSuffix);
        try {
            this.state = 1460;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LPAREN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1454;
                        this.arguments();
                    }
                    break;
                case JavaParser.DOT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1455;
                        this.match(JavaParser.DOT);
                        this.state = 1456;
                        this.match(JavaParser.IDENTIFIER);
                        this.state = 1458;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 181, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1457;
                                    this.arguments();
                                }
                                break;
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    explicitGenericInvocationSuffix() {
        let _localctx = new ExplicitGenericInvocationSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 216, JavaParser.RULE_explicitGenericInvocationSuffix);
        try {
            this.state = 1466;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.SUPER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1462;
                        this.match(JavaParser.SUPER);
                        this.state = 1463;
                        this.superSuffix();
                    }
                    break;
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1464;
                        this.match(JavaParser.IDENTIFIER);
                        this.state = 1465;
                        this.arguments();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arguments() {
        let _localctx = new ArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 218, JavaParser.RULE_arguments);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1468;
                this.match(JavaParser.LPAREN);
                this.state = 1470;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        this.state = 1469;
                        this.expressionList();
                    }
                }
                this.state = 1472;
                this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 88:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
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
    static get _ATN() {
        if (!JavaParser.__ATN) {
            JavaParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(JavaParser._serializedATN));
        }
        return JavaParser.__ATN;
    }
}
exports.JavaParser = JavaParser;
JavaParser.ABSTRACT = 1;
JavaParser.ASSERT = 2;
JavaParser.BOOLEAN = 3;
JavaParser.BREAK = 4;
JavaParser.BYTE = 5;
JavaParser.CASE = 6;
JavaParser.CATCH = 7;
JavaParser.CHAR = 8;
JavaParser.CLASS = 9;
JavaParser.CONST = 10;
JavaParser.CONTINUE = 11;
JavaParser.DEFAULT = 12;
JavaParser.DO = 13;
JavaParser.DOUBLE = 14;
JavaParser.ELSE = 15;
JavaParser.ENUM = 16;
JavaParser.EXTENDS = 17;
JavaParser.FINAL = 18;
JavaParser.FINALLY = 19;
JavaParser.FLOAT = 20;
JavaParser.FOR = 21;
JavaParser.IF = 22;
JavaParser.GOTO = 23;
JavaParser.IMPLEMENTS = 24;
JavaParser.IMPORT = 25;
JavaParser.INSTANCEOF = 26;
JavaParser.INT = 27;
JavaParser.INTERFACE = 28;
JavaParser.LONG = 29;
JavaParser.NATIVE = 30;
JavaParser.NEW = 31;
JavaParser.PACKAGE = 32;
JavaParser.PRIVATE = 33;
JavaParser.PROTECTED = 34;
JavaParser.PUBLIC = 35;
JavaParser.RETURN = 36;
JavaParser.SHORT = 37;
JavaParser.STATIC = 38;
JavaParser.STRICTFP = 39;
JavaParser.SUPER = 40;
JavaParser.SWITCH = 41;
JavaParser.SYNCHRONIZED = 42;
JavaParser.THIS = 43;
JavaParser.THROW = 44;
JavaParser.THROWS = 45;
JavaParser.TRANSIENT = 46;
JavaParser.TRY = 47;
JavaParser.VOID = 48;
JavaParser.VOLATILE = 49;
JavaParser.WHILE = 50;
JavaParser.DECIMAL_LITERAL = 51;
JavaParser.HEX_LITERAL = 52;
JavaParser.OCT_LITERAL = 53;
JavaParser.BINARY_LITERAL = 54;
JavaParser.FLOAT_LITERAL = 55;
JavaParser.HEX_FLOAT_LITERAL = 56;
JavaParser.BOOL_LITERAL = 57;
JavaParser.CHAR_LITERAL = 58;
JavaParser.STRING_LITERAL = 59;
JavaParser.NULL_LITERAL = 60;
JavaParser.LPAREN = 61;
JavaParser.RPAREN = 62;
JavaParser.LBRACE = 63;
JavaParser.RBRACE = 64;
JavaParser.LBRACK = 65;
JavaParser.RBRACK = 66;
JavaParser.SEMI = 67;
JavaParser.COMMA = 68;
JavaParser.DOT = 69;
JavaParser.ASSIGN = 70;
JavaParser.GT = 71;
JavaParser.LT = 72;
JavaParser.BANG = 73;
JavaParser.TILDE = 74;
JavaParser.QUESTION = 75;
JavaParser.COLON = 76;
JavaParser.EQUAL = 77;
JavaParser.LE = 78;
JavaParser.GE = 79;
JavaParser.NOTEQUAL = 80;
JavaParser.AND = 81;
JavaParser.OR = 82;
JavaParser.INC = 83;
JavaParser.DEC = 84;
JavaParser.ADD = 85;
JavaParser.SUB = 86;
JavaParser.MUL = 87;
JavaParser.DIV = 88;
JavaParser.BITAND = 89;
JavaParser.BITOR = 90;
JavaParser.CARET = 91;
JavaParser.MOD = 92;
JavaParser.ADD_ASSIGN = 93;
JavaParser.SUB_ASSIGN = 94;
JavaParser.MUL_ASSIGN = 95;
JavaParser.DIV_ASSIGN = 96;
JavaParser.AND_ASSIGN = 97;
JavaParser.OR_ASSIGN = 98;
JavaParser.XOR_ASSIGN = 99;
JavaParser.MOD_ASSIGN = 100;
JavaParser.LSHIFT_ASSIGN = 101;
JavaParser.RSHIFT_ASSIGN = 102;
JavaParser.URSHIFT_ASSIGN = 103;
JavaParser.ARROW = 104;
JavaParser.COLONCOLON = 105;
JavaParser.AT = 106;
JavaParser.ELLIPSIS = 107;
JavaParser.WS = 108;
JavaParser.JCOMMENT = 109;
JavaParser.COMMENT = 110;
JavaParser.LINE_COMMENT = 111;
JavaParser.IDENTIFIER = 112;
JavaParser.RULE_compilationUnit = 0;
JavaParser.RULE_packageDeclaration = 1;
JavaParser.RULE_importDeclaration = 2;
JavaParser.RULE_typeDeclaration = 3;
JavaParser.RULE_modifier = 4;
JavaParser.RULE_classOrInterfaceModifier = 5;
JavaParser.RULE_variableModifier = 6;
JavaParser.RULE_classDeclaration = 7;
JavaParser.RULE_extendClass = 8;
JavaParser.RULE_implementInterfaces = 9;
JavaParser.RULE_typeParameters = 10;
JavaParser.RULE_typeParameter = 11;
JavaParser.RULE_typeBound = 12;
JavaParser.RULE_enumDeclaration = 13;
JavaParser.RULE_enumConstants = 14;
JavaParser.RULE_enumConstant = 15;
JavaParser.RULE_enumBodyDeclarations = 16;
JavaParser.RULE_interfaceDeclaration = 17;
JavaParser.RULE_extendInterface = 18;
JavaParser.RULE_comment = 19;
JavaParser.RULE_classBody = 20;
JavaParser.RULE_interfaceBody = 21;
JavaParser.RULE_classBodyDeclaration = 22;
JavaParser.RULE_memberDeclaration = 23;
JavaParser.RULE_methodDeclaration = 24;
JavaParser.RULE_throwList = 25;
JavaParser.RULE_methodBody = 26;
JavaParser.RULE_typeTypeOrVoid = 27;
JavaParser.RULE_genericMethodDeclaration = 28;
JavaParser.RULE_genericConstructorDeclaration = 29;
JavaParser.RULE_constructorDeclaration = 30;
JavaParser.RULE_fieldDeclaration = 31;
JavaParser.RULE_interfaceBodyDeclaration = 32;
JavaParser.RULE_interfaceMemberDeclaration = 33;
JavaParser.RULE_constDeclaration = 34;
JavaParser.RULE_constantDeclarator = 35;
JavaParser.RULE_interfaceMethodDeclaration = 36;
JavaParser.RULE_interfaceMethodModifier = 37;
JavaParser.RULE_genericInterfaceMethodDeclaration = 38;
JavaParser.RULE_variableDeclarators = 39;
JavaParser.RULE_variableDeclarator = 40;
JavaParser.RULE_variableDeclaratorId = 41;
JavaParser.RULE_variableInitializer = 42;
JavaParser.RULE_arrayInitializer = 43;
JavaParser.RULE_classOrInterfaceType = 44;
JavaParser.RULE_typeArgument = 45;
JavaParser.RULE_qualifiedNameList = 46;
JavaParser.RULE_formalParameters = 47;
JavaParser.RULE_formalParameterList = 48;
JavaParser.RULE_formalParameter = 49;
JavaParser.RULE_lastFormalParameter = 50;
JavaParser.RULE_qualifiedName = 51;
JavaParser.RULE_literal = 52;
JavaParser.RULE_integerLiteral = 53;
JavaParser.RULE_floatLiteral = 54;
JavaParser.RULE_altAnnotationQualifiedName = 55;
JavaParser.RULE_annotation = 56;
JavaParser.RULE_elementValuePairs = 57;
JavaParser.RULE_elementValuePair = 58;
JavaParser.RULE_elementValue = 59;
JavaParser.RULE_elementValueArrayInitializer = 60;
JavaParser.RULE_annotationTypeDeclaration = 61;
JavaParser.RULE_annotationTypeBody = 62;
JavaParser.RULE_annotationTypeElementDeclaration = 63;
JavaParser.RULE_annotationTypeElementRest = 64;
JavaParser.RULE_annotationMethodOrConstantRest = 65;
JavaParser.RULE_annotationMethodRest = 66;
JavaParser.RULE_annotationConstantRest = 67;
JavaParser.RULE_defaultValue = 68;
JavaParser.RULE_block = 69;
JavaParser.RULE_blockStatement = 70;
JavaParser.RULE_localVariableDeclaration = 71;
JavaParser.RULE_localTypeDeclaration = 72;
JavaParser.RULE_statement = 73;
JavaParser.RULE_catchClause = 74;
JavaParser.RULE_catchType = 75;
JavaParser.RULE_finallyBlock = 76;
JavaParser.RULE_resourceSpecification = 77;
JavaParser.RULE_resources = 78;
JavaParser.RULE_resource = 79;
JavaParser.RULE_switchBlockStatementGroup = 80;
JavaParser.RULE_switchLabel = 81;
JavaParser.RULE_forControl = 82;
JavaParser.RULE_forInit = 83;
JavaParser.RULE_enhancedForControl = 84;
JavaParser.RULE_parExpression = 85;
JavaParser.RULE_expressionList = 86;
JavaParser.RULE_methodCall = 87;
JavaParser.RULE_expression = 88;
JavaParser.RULE_lambdaExpression = 89;
JavaParser.RULE_lambdaParameters = 90;
JavaParser.RULE_lambdaBody = 91;
JavaParser.RULE_primary = 92;
JavaParser.RULE_classType = 93;
JavaParser.RULE_creator = 94;
JavaParser.RULE_createdName = 95;
JavaParser.RULE_innerCreator = 96;
JavaParser.RULE_arrayCreatorRest = 97;
JavaParser.RULE_classCreatorRest = 98;
JavaParser.RULE_explicitGenericInvocation = 99;
JavaParser.RULE_typeArgumentsOrDiamond = 100;
JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond = 101;
JavaParser.RULE_nonWildcardTypeArguments = 102;
JavaParser.RULE_typeList = 103;
JavaParser.RULE_typeType = 104;
JavaParser.RULE_primitiveType = 105;
JavaParser.RULE_typeArguments = 106;
JavaParser.RULE_superSuffix = 107;
JavaParser.RULE_explicitGenericInvocationSuffix = 108;
JavaParser.RULE_arguments = 109;
// tslint:disable:no-trailing-whitespace
JavaParser.ruleNames = [
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
JavaParser._LITERAL_NAMES = [
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
JavaParser._SYMBOLIC_NAMES = [
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
JavaParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(JavaParser._LITERAL_NAMES, JavaParser._SYMBOLIC_NAMES, []);
JavaParser._serializedATNSegments = 3;
JavaParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03r\u05C5\x04\x02" +
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
    "\xE9\n\x02\f\x02\x0E\x02\xEC\v\x02\x03\x02\x03\x02\x03\x03\x05\x03\xF1" +
    "\n\x03\x03\x03\x07\x03\xF4\n\x03\f\x03\x0E\x03\xF7\v\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x04\x05\x04\xFE\n\x04\x03\x04\x03\x04\x05\x04\u0102" +
    "\n\x04\x03\x04\x03\x04\x03\x04\x05\x04\u0107\n\x04\x03\x04\x03\x04\x03" +
    "\x05\x05\x05\u010C\n\x05\x03\x05\x07\x05\u010F\n\x05\f\x05\x0E\x05\u0112" +
    "\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0118\n\x05\x03\x05\x05" +
    "\x05\u011B\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0122" +
    "\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
    "\x05\x07\u012C\n\x07\x03\b\x03\b\x05\b\u0130\n\b\x03\t\x03\t\x03\t\x05" +
    "\t\u0135\n\t\x03\t\x05\t\u0138\n\t\x03\t\x05\t\u013B\n\t\x03\t\x03\t\x03" +
    "\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x07\f\u0149\n" +
    "\f\f\f\x0E\f\u014C\v\f\x03\f\x03\f\x03\r\x07\r\u0151\n\r\f\r\x0E\r\u0154" +
    "\v\r\x03\r\x03\r\x03\r\x07\r\u0159\n\r\f\r\x0E\r\u015C\v\r\x03\r\x05\r" +
    "\u015F\n\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0164\n\x0E\f\x0E\x0E\x0E\u0167" +
    "\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u016D\n\x0F\x03\x0F\x03" +
    "\x0F\x05\x0F\u0171\n\x0F\x03\x0F\x05\x0F\u0174\n\x0F\x03\x0F\x05\x0F\u0177" +
    "\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u017E\n\x10\f\x10" +
    "\x0E\x10\u0181\v\x10\x03\x11\x05\x11\u0184\n\x11\x03\x11\x07\x11\u0187" +
    "\n\x11\f\x11\x0E\x11\u018A\v\x11\x03\x11\x03\x11\x05\x11\u018E\n\x11\x03" +
    "\x11\x05\x11\u0191\n\x11\x03\x12\x03\x12\x07\x12\u0195\n\x12\f\x12\x0E" +
    "\x12\u0198\v\x12\x03\x13\x03\x13\x03\x13\x05\x13\u019D\n\x13\x03\x13\x05" +
    "\x13\u01A0\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
    "\x03\x16\x03\x16\x07\x16\u01AB\n\x16\f\x16\x0E\x16\u01AE\v\x16\x03\x16" +
    "\x03\x16\x03\x17\x03\x17\x07\x17\u01B4\n\x17\f\x17\x0E\x17\u01B7\v\x17" +
    "\x03\x17\x03\x17\x03\x18\x03\x18\x05\x18\u01BD\n\x18\x03\x18\x03\x18\x05" +
    "\x18\u01C1\n\x18\x03\x18\x07\x18\u01C4\n\x18\f\x18\x0E\x18\u01C7\v\x18" +
    "\x03\x18\x05\x18\u01CA\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
    "\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01D5\n\x19\x03\x1A\x03\x1A\x03\x1A" +
    "\x03\x1A\x03\x1A\x07\x1A\u01DC\n\x1A\f\x1A\x0E\x1A\u01DF\v\x1A\x03\x1A" +
    "\x05\x1A\u01E2\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03" +
    "\x1C\x05\x1C\u01EB\n\x1C\x03\x1D\x03\x1D\x05\x1D\u01EF\n\x1D\x03\x1E\x03" +
    "\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x05 \u01FB\n" +
    " \x03 \x03 \x03!\x03!\x03!\x03!\x03\"\x05\"\u0204\n\"\x03\"\x07\"\u0207" +
    "\n\"\f\"\x0E\"\u020A\v\"\x03\"\x03\"\x05\"\u020E\n\"\x03#\x03#\x03#\x03" +
    "#\x03#\x03#\x03#\x05#\u0217\n#\x03$\x03$\x03$\x03$\x07$\u021D\n$\f$\x0E" +
    "$\u0220\v$\x03$\x03$\x03%\x03%\x03%\x07%\u0227\n%\f%\x0E%\u022A\v%\x03" +
    "%\x03%\x03%\x03&\x07&\u0230\n&\f&\x0E&\u0233\v&\x03&\x03&\x03&\x07&\u0238" +
    "\n&\f&\x0E&\u023B\v&\x03&\x03&\x05&\u023F\n&\x03&\x03&\x03&\x03&\x07&" +
    "\u0245\n&\f&\x0E&\u0248\v&\x03&\x05&\u024B\n&\x03&\x03&\x03\'\x03\'\x03" +
    "\'\x03\'\x03\'\x03\'\x05\'\u0255\n\'\x03(\x03(\x03(\x03)\x03)\x03)\x07" +
    ")\u025D\n)\f)\x0E)\u0260\v)\x03*\x03*\x03*\x05*\u0265\n*\x03+\x03+\x03" +
    "+\x07+\u026A\n+\f+\x0E+\u026D\v+\x03,\x03,\x05,\u0271\n,\x03-\x03-\x03" +
    "-\x03-\x07-\u0277\n-\f-\x0E-\u027A\v-\x03-\x05-\u027D\n-\x05-\u027F\n" +
    "-\x03-\x03-\x03.\x03.\x05.\u0285\n.\x03.\x03.\x03.\x05.\u028A\n.\x07." +
    "\u028C\n.\f.\x0E.\u028F\v.\x03/\x03/\x07/\u0293\n/\f/\x0E/\u0296\v/\x03" +
    "/\x03/\x03/\x05/\u029B\n/\x05/\u029D\n/\x030\x030\x030\x070\u02A2\n0\f" +
    "0\x0E0\u02A5\v0\x031\x031\x051\u02A9\n1\x031\x031\x032\x032\x032\x072" +
    "\u02B0\n2\f2\x0E2\u02B3\v2\x032\x032\x052\u02B7\n2\x032\x052\u02BA\n2" +
    "\x033\x073\u02BD\n3\f3\x0E3\u02C0\v3\x033\x033\x033\x034\x074\u02C6\n" +
    "4\f4\x0E4\u02C9\v4\x034\x034\x074\u02CD\n4\f4\x0E4\u02D0\v4\x034\x034" +
    "\x034\x035\x035\x035\x075\u02D8\n5\f5\x0E5\u02DB\v5\x036\x036\x036\x03" +
    "6\x036\x036\x056\u02E3\n6\x037\x037\x038\x038\x039\x039\x079\u02EB\n9" +
    "\f9\x0E9\u02EE\v9\x039\x039\x039\x03:\x03:\x03:\x05:\u02F6\n:\x03:\x03" +
    ":\x03:\x05:\u02FB\n:\x03:\x05:\u02FE\n:\x03;\x03;\x03;\x07;\u0303\n;\f" +
    ";\x0E;\u0306\v;\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x05=\u030F\n=\x03>" +
    "\x03>\x03>\x03>\x07>\u0315\n>\f>\x0E>\u0318\v>\x05>\u031A\n>\x03>\x05" +
    ">\u031D\n>\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x07@\u0328\n@" +
    "\f@\x0E@\u032B\v@\x03@\x03@\x03A\x07A\u0330\nA\fA\x0EA\u0333\vA\x03A\x03" +
    "A\x05A\u0337\nA\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u033F\nB\x03B\x03B" +
    "\x05B\u0343\nB\x03B\x03B\x05B\u0347\nB\x03B\x03B\x05B\u034B\nB\x05B\u034D" +
    "\nB\x03C\x03C\x05C\u0351\nC\x03D\x03D\x03D\x03D\x05D\u0357\nD\x03E\x03" +
    "E\x03F\x03F\x03F\x03G\x03G\x07G\u0360\nG\fG\x0EG\u0363\vG\x03G\x03G\x03" +
    "H\x03H\x03H\x03H\x03H\x05H\u036C\nH\x03I\x07I\u036F\nI\fI\x0EI\u0372\v" +
    "I\x03I\x03I\x03I\x03J\x07J\u0378\nJ\fJ\x0EJ\u037B\vJ\x03J\x03J\x05J\u037F" +
    "\nJ\x03J\x05J\u0382\nJ\x03K\x03K\x03K\x03K\x03K\x05K\u0389\nK\x03K\x03" +
    "K\x03K\x03K\x03K\x03K\x03K\x05K\u0392\nK\x03K\x03K\x03K\x03K\x03K\x03" +
    "K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x06" +
    "K\u03A7\nK\rK\x0EK\u03A8\x03K\x05K\u03AC\nK\x03K\x05K\u03AF\nK\x03K\x03" +
    "K\x03K\x03K\x07K\u03B5\nK\fK\x0EK\u03B8\vK\x03K\x05K\u03BB\nK\x03K\x03" +
    "K\x03K\x03K\x07K\u03C1\nK\fK\x0EK\u03C4\vK\x03K\x07K\u03C7\nK\fK\x0EK" +
    "\u03CA\vK\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u03D4\nK\x03K\x03" +
    "K\x03K\x03K\x03K\x03K\x03K\x05K\u03DD\nK\x03K\x03K\x03K\x05K\u03E2\nK" +
    "\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u03ED\nK\x03L\x03L" +
    "\x03L\x07L\u03F2\nL\fL\x0EL\u03F5\vL\x03L\x03L\x03L\x03L\x03L\x03M\x03" +
    "M\x03M\x07M\u03FF\nM\fM\x0EM\u0402\vM\x03N\x03N\x03N\x03O\x03O\x03O\x05" +
    "O\u040A\nO\x03O\x03O\x03P\x03P\x03P\x07P\u0411\nP\fP\x0EP\u0414\vP\x03" +
    "Q\x07Q\u0417\nQ\fQ\x0EQ\u041A\vQ\x03Q\x03Q\x03Q\x03Q\x03Q\x03R\x06R\u0422" +
    "\nR\rR\x0ER\u0423\x03R\x06R\u0427\nR\rR\x0ER\u0428\x03S\x03S\x03S\x05" +
    "S\u042E\nS\x03S\x03S\x03S\x05S\u0433\nS\x03T\x03T\x05T\u0437\nT\x03T\x03" +
    "T\x05T\u043B\nT\x03T\x03T\x05T\u043F\nT\x05T\u0441\nT\x03U\x03U\x05U\u0445" +
    "\nU\x03V\x07V\u0448\nV\fV\x0EV\u044B\vV\x03V\x03V\x03V\x03V\x03V\x03W" +
    "\x03W\x03W\x03W\x03X\x03X\x03X\x07X\u0459\nX\fX\x0EX\u045C\vX\x03Y\x03" +
    "Y\x03Y\x05Y\u0461\nY\x03Y\x03Y\x03Y\x03Y\x05Y\u0467\nY\x03Y\x03Y\x03Y" +
    "\x03Y\x05Y\u046D\nY\x03Y\x05Y\u0470\nY\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
    "Z\x07Z\u0479\nZ\fZ\x0EZ\u047C\vZ\x03Z\x03Z\x03Z\x07Z\u0481\nZ\fZ\x0EZ" +
    "\u0484\vZ\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z" +
    "\u0491\nZ\x03Z\x03Z\x05Z\u0495\nZ\x03Z\x03Z\x03Z\x05Z\u049A\nZ\x03Z\x03" +
    "Z\x05Z\u049E\nZ\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
    "Z\x03Z\x03Z\x03Z\x05Z\u04AE\nZ\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
    "Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
    "Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
    "Z\x03Z\x03Z\x05Z\u04D6\nZ\x03Z\x03Z\x03Z\x03Z\x05Z\u04DC\nZ\x03Z\x03Z" +
    "\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u04EB\nZ" +
    "\x03Z\x07Z\u04EE\nZ\fZ\x0EZ\u04F1\vZ\x03[\x03[\x03[\x03[\x03\\\x03\\\x03" +
    "\\\x05\\\u04FA\n\\\x03\\\x03\\\x03\\\x03\\\x03\\\x07\\\u0501\n\\\f\\\x0E" +
    "\\\u0504\v\\\x03\\\x05\\\u0507\n\\\x03]\x03]\x05]\u050B\n]\x03^\x03^\x03" +
    "^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05" +
    "^\u051D\n^\x05^\u051F\n^\x03_\x03_\x03_\x05_\u0524\n_\x03_\x07_\u0527" +
    "\n_\f_\x0E_\u052A\v_\x03_\x03_\x05_\u052E\n_\x03`\x03`\x03`\x03`\x03`" +
    "\x03`\x03`\x05`\u0537\n`\x05`\u0539\n`\x03a\x03a\x05a\u053D\na\x03a\x03" +
    "a\x03a\x05a\u0542\na\x07a\u0544\na\fa\x0Ea\u0547\va\x03a\x05a\u054A\n" +
    "a\x03b\x03b\x05b\u054E\nb\x03b\x03b\x03c\x03c\x03c\x03c\x07c\u0556\nc" +
    "\fc\x0Ec\u0559\vc\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x07c\u0562\nc\fc" +
    "\x0Ec\u0565\vc\x03c\x03c\x07c\u0569\nc\fc\x0Ec\u056C\vc\x05c\u056E\nc" +
    "\x03d\x03d\x05d\u0572\nd\x03e\x03e\x03e\x03f\x03f\x03f\x05f\u057A\nf\x03" +
    "g\x03g\x03g\x05g\u057F\ng\x03h\x03h\x03h\x03h\x03i\x03i\x03i\x07i\u0588" +
    "\ni\fi\x0Ei\u058B\vi\x03j\x07j\u058E\nj\fj\x0Ej\u0591\vj\x03j\x03j\x05" +
    "j\u0595\nj\x03j\x07j\u0598\nj\fj\x0Ej\u059B\vj\x03j\x03j\x07j\u059F\n" +
    "j\fj\x0Ej\u05A2\vj\x03k\x03k\x03l\x03l\x03l\x03l\x07l\u05AA\nl\fl\x0E" +
    "l\u05AD\vl\x03l\x03l\x03m\x03m\x03m\x03m\x05m\u05B5\nm\x05m\u05B7\nm\x03" +
    "n\x03n\x03n\x03n\x05n\u05BD\nn\x03o\x03o\x05o\u05C1\no\x03o\x03o\x03o" +
    "\x02\x02\x03\xB2p\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
    "\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
    "$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
    "@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
    "\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
    "x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
    "\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
    "\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0" +
    "\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2" +
    "\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4" +
    "\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\x02\x0E\x04\x02\x13\x13**\x03\x02" +
    "58\x03\x029:\x03\x02UX\x03\x02KL\x04\x02YZ^^\x03\x02WX\x04\x02IJPQ\x04" +
    "\x02OORR\x04\x02HH_i\x03\x02UV\n\x02\x05\x05\x07\x07\n\n\x10\x10\x16\x16" +
    "\x1D\x1D\x1F\x1F\'\'\x02\u0667\x02\xDF\x03\x02\x02\x02\x04\xF0\x03\x02" +
    "\x02\x02\x06\xFD\x03\x02\x02\x02\b\u011A\x03\x02\x02\x02\n\u0121\x03\x02" +
    "\x02\x02\f\u012B\x03\x02\x02\x02\x0E\u012F\x03\x02\x02\x02\x10\u0131\x03" +
    "\x02\x02\x02\x12\u013E\x03\x02\x02\x02\x14\u0141\x03\x02\x02\x02\x16\u0144" +
    "\x03\x02\x02\x02\x18\u0152\x03\x02\x02\x02\x1A\u0160\x03\x02\x02\x02\x1C" +
    "\u0168\x03\x02\x02\x02\x1E\u017A\x03\x02\x02\x02 \u0183\x03\x02\x02\x02" +
    "\"\u0192\x03\x02\x02\x02$\u0199\x03\x02\x02\x02&\u01A3\x03\x02\x02\x02" +
    "(\u01A6\x03\x02\x02\x02*\u01A8\x03\x02\x02\x02,\u01B1\x03\x02\x02\x02" +
    ".\u01C9\x03\x02\x02\x020\u01D4\x03\x02\x02\x022\u01D6\x03\x02\x02\x02" +
    "4\u01E5\x03\x02\x02\x026\u01EA\x03\x02\x02\x028\u01EE\x03\x02\x02\x02" +
    ":\u01F0\x03\x02\x02\x02<\u01F3\x03\x02\x02\x02>\u01F6\x03\x02\x02\x02" +
    "@\u01FE\x03\x02\x02\x02B\u020D\x03\x02\x02\x02D\u0216\x03\x02\x02\x02" +
    "F\u0218\x03\x02\x02\x02H\u0223\x03\x02\x02\x02J\u0231\x03\x02\x02\x02" +
    "L\u0254\x03\x02\x02\x02N\u0256\x03\x02\x02\x02P\u0259\x03\x02\x02\x02" +
    "R\u0261\x03\x02\x02\x02T\u0266\x03\x02\x02\x02V\u0270\x03\x02\x02\x02" +
    "X\u0272\x03\x02\x02\x02Z\u0282\x03\x02\x02\x02\\\u029C\x03\x02\x02\x02" +
    "^\u029E\x03\x02\x02\x02`\u02A6\x03\x02\x02\x02b\u02B9\x03\x02\x02\x02" +
    "d\u02BE\x03\x02\x02\x02f\u02C7\x03\x02\x02\x02h\u02D4\x03\x02\x02\x02" +
    "j\u02E2\x03\x02\x02\x02l\u02E4\x03\x02\x02\x02n\u02E6\x03\x02\x02\x02" +
    "p\u02EC\x03\x02\x02\x02r\u02F5\x03\x02\x02\x02t\u02FF\x03\x02\x02\x02" +
    "v\u0307\x03\x02\x02\x02x\u030E\x03\x02\x02\x02z\u0310\x03\x02\x02\x02" +
    "|\u0320\x03\x02\x02\x02~\u0325\x03\x02\x02\x02\x80\u0336\x03\x02\x02\x02" +
    "\x82\u034C\x03\x02\x02\x02\x84\u0350\x03\x02\x02\x02\x86\u0352\x03\x02" +
    "\x02\x02\x88\u0358\x03\x02\x02\x02\x8A\u035A\x03\x02\x02\x02\x8C\u035D" +
    "\x03\x02\x02\x02\x8E\u036B\x03\x02\x02\x02\x90\u0370\x03\x02\x02\x02\x92" +
    "\u0381\x03\x02\x02\x02\x94\u03EC\x03\x02\x02\x02\x96\u03EE\x03\x02\x02" +
    "\x02\x98\u03FB\x03\x02\x02\x02\x9A\u0403\x03\x02\x02\x02\x9C\u0406\x03" +
    "\x02\x02\x02\x9E\u040D\x03\x02\x02\x02\xA0\u0418\x03\x02\x02\x02\xA2\u0421" +
    "\x03\x02\x02\x02\xA4\u0432\x03\x02\x02\x02\xA6\u0440\x03\x02\x02\x02\xA8" +
    "\u0444\x03\x02\x02\x02\xAA\u0449\x03\x02\x02\x02\xAC\u0451\x03\x02\x02" +
    "\x02\xAE\u0455\x03\x02\x02\x02\xB0\u046F\x03\x02\x02\x02\xB2\u049D\x03" +
    "\x02\x02\x02\xB4\u04F2\x03\x02\x02\x02\xB6\u0506\x03\x02\x02\x02\xB8\u050A" +
    "\x03\x02\x02\x02\xBA\u051E\x03\x02\x02\x02\xBC\u0523\x03\x02\x02\x02\xBE" +
    "\u0538\x03\x02\x02\x02\xC0\u0549\x03\x02\x02\x02\xC2\u054B\x03\x02\x02" +
    "\x02\xC4\u0551\x03\x02\x02\x02\xC6\u056F\x03\x02\x02\x02\xC8\u0573\x03" +
    "\x02\x02\x02\xCA\u0579\x03\x02\x02\x02\xCC\u057E\x03\x02\x02\x02\xCE\u0580" +
    "\x03\x02\x02\x02\xD0\u0584\x03\x02\x02\x02\xD2\u058F\x03\x02\x02\x02\xD4" +
    "\u05A3\x03\x02\x02\x02\xD6\u05A5\x03\x02\x02\x02\xD8\u05B6\x03\x02\x02" +
    "\x02\xDA\u05BC\x03\x02\x02\x02\xDC\u05BE\x03\x02\x02\x02\xDE\xE0\x05\x04" +
    "\x03\x02\xDF\xDE\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE4\x03\x02" +
    "\x02\x02\xE1\xE3\x05\x06\x04\x02\xE2\xE1\x03\x02\x02\x02\xE3\xE6\x03\x02" +
    "\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xEA\x03\x02" +
    "\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xE9\x05\b\x05\x02\xE8\xE7\x03\x02" +
    "\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02" +
    "\x02\x02\xEB\xED\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xED\xEE\x07\x02" +
    "\x02\x03\xEE\x03\x03\x02\x02\x02\xEF\xF1\x05(\x15\x02\xF0\xEF\x03\x02" +
    "\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF5\x03\x02\x02\x02\xF2\xF4\x05r" +
    ":\x02\xF3\xF2\x03\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02" +
    "\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF8\x03\x02\x02\x02\xF7\xF5\x03\x02" +
    "\x02\x02\xF8\xF9\x07\"\x02\x02\xF9\xFA\x05h5\x02\xFA\xFB\x07E\x02\x02" +
    "\xFB\x05\x03\x02\x02\x02\xFC\xFE\x05(\x15\x02\xFD\xFC\x03\x02\x02\x02" +
    "\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0101\x07\x1B\x02" +
    "\x02\u0100\u0102\x07(\x02\x02\u0101\u0100\x03\x02\x02\x02\u0101\u0102" +
    "\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0106\x05h5\x02\u0104" +
    "\u0105\x07G\x02\x02\u0105\u0107\x07Y\x02\x02\u0106\u0104\x03\x02\x02\x02" +
    "\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0109\x07" +
    "E\x02\x02\u0109\x07\x03\x02\x02\x02\u010A\u010C\x05(\x15\x02\u010B\u010A" +
    "\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u0110\x03\x02\x02\x02" +
    "\u010D\u010F\x05\f\x07\x02\u010E\u010D\x03\x02\x02\x02\u010F\u0112\x03" +
    "\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111" +
    "\u0117\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0113\u0118\x05\x10" +
    "\t\x02\u0114\u0118\x05\x1C\x0F\x02\u0115\u0118\x05$\x13\x02\u0116\u0118" +
    "\x05|?\x02\u0117\u0113\x03\x02\x02\x02\u0117\u0114\x03\x02\x02\x02\u0117" +
    "\u0115\x03\x02\x02\x02\u0117\u0116\x03\x02\x02\x02\u0118\u011B\x03\x02" +
    "\x02\x02\u0119\u011B\x07E\x02\x02\u011A\u010B\x03\x02\x02\x02\u011A\u0119" +
    "\x03\x02\x02\x02\u011B\t\x03\x02\x02\x02\u011C\u0122\x05\f\x07\x02\u011D" +
    "\u0122\x07 \x02\x02\u011E\u0122\x07,\x02\x02\u011F\u0122\x070\x02\x02" +
    "\u0120\u0122\x073\x02\x02\u0121\u011C\x03\x02\x02\x02\u0121\u011D\x03" +
    "\x02\x02\x02\u0121\u011E\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121" +
    "\u0120\x03\x02\x02\x02\u0122\v\x03\x02\x02\x02\u0123\u012C\x05r:\x02\u0124" +
    "\u012C\x07%\x02\x02\u0125\u012C\x07$\x02\x02\u0126\u012C\x07#\x02\x02" +
    "\u0127\u012C\x07(\x02\x02\u0128\u012C\x07\x03\x02\x02\u0129\u012C\x07" +
    "\x14\x02\x02\u012A\u012C\x07)\x02\x02\u012B\u0123\x03\x02\x02\x02\u012B" +
    "\u0124\x03\x02\x02\x02\u012B\u0125\x03\x02\x02\x02\u012B\u0126\x03\x02" +
    "\x02\x02\u012B\u0127\x03\x02\x02\x02\u012B\u0128\x03\x02\x02\x02\u012B" +
    "\u0129\x03\x02\x02\x02\u012B\u012A\x03\x02\x02\x02\u012C\r\x03\x02\x02" +
    "\x02\u012D\u0130\x07\x14\x02\x02\u012E\u0130\x05r:\x02\u012F\u012D\x03" +
    "\x02\x02\x02\u012F\u012E\x03\x02\x02\x02\u0130\x0F\x03\x02\x02\x02\u0131" +
    "\u0132\x07\v\x02\x02\u0132\u0134\x07r\x02\x02\u0133\u0135\x05\x16\f\x02" +
    "\u0134\u0133\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0137\x03" +
    "\x02\x02\x02\u0136\u0138\x05\x12\n\x02\u0137\u0136\x03\x02\x02\x02\u0137" +
    "\u0138\x03\x02\x02\x02\u0138\u013A\x03\x02\x02\x02\u0139\u013B\x05\x14" +
    "\v\x02\u013A\u0139\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013C" +
    "\x03\x02\x02\x02\u013C\u013D\x05*\x16\x02\u013D\x11\x03\x02\x02\x02\u013E" +
    "\u013F\x07\x13\x02\x02\u013F\u0140\x05\xD2j\x02\u0140\x13\x03\x02\x02" +
    "\x02\u0141\u0142\x07\x1A\x02\x02\u0142\u0143\x05\xD0i\x02\u0143\x15\x03" +
    "\x02\x02\x02\u0144\u0145\x07J\x02\x02\u0145\u014A\x05\x18\r\x02\u0146" +
    "\u0147\x07F\x02\x02\u0147\u0149\x05\x18\r\x02\u0148\u0146\x03\x02\x02" +
    "\x02\u0149\u014C\x03\x02\x02\x02\u014A\u0148\x03\x02\x02";
JavaParser._serializedATNSegment1 = "\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014D\x03\x02\x02\x02\u014C\u014A" +
    "\x03\x02\x02\x02\u014D\u014E\x07I\x02\x02\u014E\x17\x03\x02\x02\x02\u014F" +
    "\u0151\x05r:\x02\u0150\u014F\x03\x02\x02\x02\u0151\u0154\x03\x02\x02\x02" +
    "\u0152\u0150\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0155\x03" +
    "\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0155\u015E\x07r\x02\x02\u0156" +
    "\u015A\x07\x13\x02\x02\u0157\u0159\x05r:\x02\u0158\u0157\x03\x02\x02\x02" +
    "\u0159\u015C\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015A\u015B\x03" +
    "\x02\x02\x02\u015B\u015D\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015D" +
    "\u015F\x05\x1A\x0E\x02\u015E\u0156\x03\x02\x02\x02\u015E\u015F\x03\x02" +
    "\x02\x02\u015F\x19\x03\x02\x02\x02\u0160\u0165\x05\xD2j\x02\u0161\u0162" +
    "\x07[\x02\x02\u0162\u0164\x05\xD2j\x02\u0163\u0161\x03\x02\x02\x02\u0164" +
    "\u0167\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0166\x03\x02" +
    "\x02\x02\u0166\x1B\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0168\u0169" +
    "\x07\x12\x02\x02\u0169\u016C\x07r\x02\x02\u016A\u016B\x07\x1A\x02\x02" +
    "\u016B\u016D\x05\xD0i\x02\u016C\u016A\x03\x02\x02\x02\u016C\u016D\x03" +
    "\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u0170\x07A\x02\x02\u016F" +
    "\u0171\x05\x1E\x10\x02\u0170\u016F\x03\x02\x02\x02\u0170\u0171\x03\x02" +
    "\x02\x02\u0171\u0173\x03\x02\x02\x02\u0172\u0174\x07F\x02\x02\u0173\u0172" +
    "\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0176\x03\x02\x02\x02" +
    "\u0175\u0177\x05\"\x12\x02\u0176\u0175\x03\x02\x02\x02\u0176\u0177\x03" +
    "\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u0179\x07B\x02\x02\u0179" +
    "\x1D\x03\x02\x02\x02\u017A\u017F\x05 \x11\x02\u017B\u017C\x07F\x02\x02" +
    "\u017C\u017E\x05 \x11\x02\u017D\u017B\x03\x02\x02\x02\u017E\u0181\x03" +
    "\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180" +
    "\x1F\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02\u0182\u0184\x05(\x15" +
    "\x02\u0183\u0182\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0188" +
    "\x03\x02\x02\x02\u0185\u0187\x05r:\x02\u0186\u0185\x03\x02\x02\x02\u0187" +
    "\u018A\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188\u0189\x03\x02" +
    "\x02\x02\u0189\u018B\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018B" +
    "\u018D\x07r\x02\x02\u018C\u018E\x05\xDCo\x02\u018D\u018C\x03\x02\x02\x02" +
    "\u018D\u018E\x03\x02\x02\x02\u018E\u0190\x03\x02\x02\x02\u018F\u0191\x05" +
    "*\x16\x02\u0190\u018F\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191" +
    "!\x03\x02\x02\x02\u0192\u0196\x07E\x02\x02\u0193\u0195\x05.\x18\x02\u0194" +
    "\u0193\x03\x02\x02\x02\u0195\u0198\x03\x02\x02\x02\u0196\u0194\x03\x02" +
    "\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197#\x03\x02\x02\x02\u0198\u0196" +
    "\x03\x02\x02\x02\u0199\u019A\x07\x1E\x02\x02\u019A\u019C\x07r\x02\x02" +
    "\u019B\u019D\x05\x16\f\x02\u019C\u019B\x03\x02\x02\x02\u019C\u019D\x03" +
    "\x02\x02\x02\u019D\u019F\x03\x02\x02\x02\u019E\u01A0\x05&\x14\x02\u019F" +
    "\u019E\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A1\x03\x02" +
    "\x02\x02\u01A1\u01A2\x05,\x17\x02\u01A2%\x03\x02\x02\x02\u01A3\u01A4\x07" +
    "\x13\x02\x02\u01A4\u01A5\x05\xD0i\x02\u01A5\'\x03\x02\x02\x02\u01A6\u01A7" +
    "\x07o\x02\x02\u01A7)\x03\x02\x02\x02\u01A8\u01AC\x07A\x02\x02\u01A9\u01AB" +
    "\x05.\x18\x02\u01AA\u01A9\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02" +
    "\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AF\x03" +
    "\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AF\u01B0\x07B\x02\x02\u01B0" +
    "+\x03\x02\x02\x02\u01B1\u01B5\x07A\x02\x02\u01B2\u01B4\x05B\"\x02\u01B3" +
    "\u01B2\x03\x02\x02\x02\u01B4\u01B7\x03\x02\x02\x02\u01B5\u01B3\x03\x02" +
    "\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B8\x03\x02\x02\x02\u01B7" +
    "\u01B5\x03\x02\x02\x02\u01B8\u01B9\x07B\x02\x02\u01B9-\x03\x02\x02\x02" +
    "\u01BA\u01CA\x07E\x02\x02\u01BB\u01BD\x07(\x02\x02\u01BC\u01BB\x03\x02" +
    "\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE" +
    "\u01CA\x05\x8CG\x02\u01BF\u01C1\x05(\x15\x02\u01C0\u01BF\x03\x02\x02\x02" +
    "\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C5\x03\x02\x02\x02\u01C2\u01C4\x05" +
    "\n\x06\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4\u01C7\x03\x02\x02\x02\u01C5" +
    "\u01C3\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C8\x03\x02" +
    "\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C8\u01CA\x050\x19\x02\u01C9\u01BA" +
    "\x03\x02\x02\x02\u01C9\u01BC\x03\x02\x02\x02\u01C9\u01C0\x03\x02\x02\x02" +
    "\u01CA/\x03\x02\x02\x02\u01CB\u01D5\x052\x1A\x02\u01CC\u01D5\x05:\x1E" +
    "\x02\u01CD\u01D5\x05@!\x02\u01CE\u01D5\x05> \x02\u01CF\u01D5\x05<\x1F" +
    "\x02\u01D0\u01D5\x05$\x13\x02\u01D1\u01D5\x05|?\x02\u01D2\u01D5\x05\x10" +
    "\t\x02\u01D3\u01D5\x05\x1C\x0F\x02\u01D4\u01CB\x03\x02\x02\x02\u01D4\u01CC" +
    "\x03\x02\x02\x02\u01D4\u01CD\x03\x02\x02\x02\u01D4\u01CE\x03\x02\x02\x02" +
    "\u01D4\u01CF\x03\x02\x02\x02\u01D4\u01D0\x03\x02\x02\x02\u01D4\u01D1\x03" +
    "\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D3\x03\x02\x02\x02\u01D5" +
    "1\x03\x02\x02\x02\u01D6\u01D7\x058\x1D\x02\u01D7\u01D8\x07r\x02\x02\u01D8" +
    "\u01DD\x05`1\x02\u01D9\u01DA\x07C\x02\x02\u01DA\u01DC\x07D\x02\x02\u01DB" +
    "\u01D9\x03\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DB\x03\x02" +
    "\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01E1\x03\x02\x02\x02\u01DF" +
    "\u01DD\x03\x02\x02\x02\u01E0\u01E2\x054\x1B\x02\u01E1\u01E0\x03\x02\x02" +
    "\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E4" +
    "\x056\x1C\x02\u01E43\x03\x02\x02\x02\u01E5\u01E6\x07/\x02\x02\u01E6\u01E7" +
    "\x05^0\x02\u01E75\x03\x02\x02\x02\u01E8\u01EB\x05\x8CG\x02\u01E9\u01EB" +
    "\x07E\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EA\u01E9\x03\x02\x02\x02" +
    "\u01EB7\x03\x02\x02\x02\u01EC\u01EF\x05\xD2j\x02\u01ED\u01EF\x072\x02" +
    "\x02\u01EE\u01EC\x03\x02\x02\x02\u01EE\u01ED\x03\x02\x02\x02\u01EF9\x03" +
    "\x02\x02\x02\u01F0\u01F1\x05\x16\f\x02\u01F1\u01F2\x052\x1A\x02\u01F2" +
    ";\x03\x02\x02\x02\u01F3\u01F4\x05\x16\f\x02\u01F4\u01F5\x05> \x02\u01F5" +
    "=\x03\x02\x02\x02\u01F6\u01F7\x07r\x02\x02\u01F7\u01FA\x05`1\x02\u01F8" +
    "\u01F9\x07/\x02\x02\u01F9\u01FB\x05^0\x02\u01FA\u01F8\x03\x02\x02\x02" +
    "\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FD\x05" +
    "\x8CG\x02\u01FD?\x03\x02\x02\x02\u01FE\u01FF\x05\xD2j\x02\u01FF\u0200" +
    "\x05P)\x02\u0200\u0201\x07E\x02\x02\u0201A\x03\x02\x02\x02\u0202\u0204" +
    "\x05(\x15\x02\u0203\u0202\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02" +
    "\u0204\u0208\x03\x02\x02\x02\u0205\u0207\x05\n\x06\x02\u0206\u0205\x03" +
    "\x02\x02\x02\u0207\u020A\x03\x02\x02\x02\u0208\u0206\x03\x02\x02\x02\u0208" +
    "\u0209\x03\x02\x02\x02\u0209\u020B\x03\x02\x02\x02\u020A\u0208\x03\x02" +
    "\x02\x02\u020B\u020E\x05D#\x02\u020C\u020E\x07E\x02\x02\u020D\u0203\x03" +
    "\x02\x02\x02\u020D\u020C\x03\x02\x02\x02\u020EC\x03\x02\x02\x02\u020F" +
    "\u0217\x05F$\x02\u0210\u0217\x05J&\x02\u0211\u0217\x05N(\x02\u0212\u0217" +
    "\x05$\x13\x02\u0213\u0217\x05|?\x02\u0214\u0217\x05\x10\t\x02\u0215\u0217" +
    "\x05\x1C\x0F\x02\u0216\u020F\x03\x02\x02\x02\u0216\u0210\x03\x02\x02\x02" +
    "\u0216\u0211\x03\x02\x02\x02\u0216\u0212\x03\x02\x02\x02\u0216\u0213\x03" +
    "\x02\x02\x02\u0216\u0214\x03\x02\x02\x02\u0216\u0215\x03\x02\x02\x02\u0217" +
    "E\x03\x02\x02\x02\u0218\u0219\x05\xD2j\x02\u0219\u021E\x05H%\x02\u021A" +
    "\u021B\x07F\x02\x02\u021B\u021D\x05H%\x02\u021C\u021A\x03\x02\x02\x02" +
    "\u021D\u0220\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021E\u021F\x03" +
    "\x02\x02\x02\u021F\u0221\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02\u0221" +
    "\u0222\x07E\x02\x02\u0222G\x03\x02\x02\x02\u0223\u0228\x07r\x02\x02\u0224" +
    "\u0225\x07C\x02\x02\u0225\u0227\x07D\x02\x02\u0226\u0224\x03\x02\x02\x02" +
    "\u0227\u022A\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03" +
    "\x02\x02\x02\u0229\u022B\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B" +
    "\u022C\x07H\x02\x02\u022C\u022D\x05V,\x02\u022DI\x03\x02\x02\x02\u022E" +
    "\u0230\x05L\'\x02\u022F\u022E\x03\x02\x02\x02\u0230\u0233\x03\x02\x02" +
    "\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232\u023E" +
    "\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0234\u023F\x058\x1D\x02" +
    "\u0235\u0239\x05\x16\f\x02\u0236\u0238\x05r:\x02\u0237\u0236\x03\x02\x02" +
    "\x02\u0238\u023B\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u0239\u023A" +
    "\x03\x02\x02\x02\u023A\u023C\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02" +
    "\u023C\u023D\x058\x1D\x02\u023D\u023F\x03\x02\x02\x02\u023E\u0234\x03" +
    "\x02\x02\x02\u023E\u0235\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240" +
    "\u0241\x07r\x02\x02\u0241\u0246\x05`1\x02\u0242\u0243\x07C\x02\x02\u0243" +
    "\u0245\x07D\x02\x02\u0244\u0242\x03\x02\x02\x02\u0245\u0248\x03\x02\x02" +
    "\x02\u0246\u0244\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\u024A" +
    "\x03\x02\x02\x02\u0248\u0246\x03\x02\x02\x02\u0249\u024B\x054\x1B\x02" +
    "\u024A\u0249\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024C\x03" +
    "\x02\x02\x02\u024C\u024D\x056\x1C\x02\u024DK\x03\x02\x02\x02\u024E\u0255" +
    "\x05r:\x02\u024F\u0255\x07%\x02\x02\u0250\u0255\x07\x03\x02\x02\u0251" +
    "\u0255\x07\x0E\x02\x02\u0252\u0255\x07(\x02\x02\u0253\u0255\x07)\x02\x02" +
    "\u0254\u024E\x03\x02\x02\x02\u0254\u024F\x03\x02\x02\x02\u0254\u0250\x03" +
    "\x02\x02\x02\u0254\u0251\x03\x02\x02\x02\u0254\u0252\x03\x02\x02\x02\u0254" +
    "\u0253\x03\x02\x02\x02\u0255M\x03\x02\x02\x02\u0256\u0257\x05\x16\f\x02" +
    "\u0257\u0258\x05J&\x02\u0258O\x03\x02\x02\x02\u0259\u025E\x05R*\x02\u025A" +
    "\u025B\x07F\x02\x02\u025B\u025D\x05R*\x02\u025C\u025A\x03\x02\x02\x02" +
    "\u025D\u0260\x03\x02\x02\x02\u025E\u025C\x03\x02\x02\x02\u025E\u025F\x03" +
    "\x02\x02\x02\u025FQ\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0261" +
    "\u0264\x05T+\x02\u0262\u0263\x07H\x02\x02\u0263\u0265\x05V,\x02\u0264" +
    "\u0262\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265S\x03\x02\x02" +
    "\x02\u0266\u026B\x07r\x02\x02\u0267\u0268\x07C\x02\x02\u0268\u026A\x07" +
    "D\x02\x02\u0269\u0267\x03\x02\x02\x02\u026A\u026D\x03\x02\x02\x02\u026B" +
    "\u0269\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02\u026CU\x03\x02\x02" +
    "\x02\u026D\u026B\x03\x02\x02\x02\u026E\u0271\x05X-\x02\u026F\u0271\x05" +
    "\xB2Z\x02\u0270\u026E\x03\x02\x02\x02\u0270\u026F\x03\x02\x02\x02\u0271" +
    "W\x03\x02\x02\x02\u0272\u027E\x07A\x02\x02\u0273\u0278\x05V,\x02\u0274" +
    "\u0275\x07F\x02\x02\u0275\u0277\x05V,\x02\u0276\u0274\x03\x02\x02\x02" +
    "\u0277\u027A\x03\x02\x02\x02\u0278\u0276\x03\x02\x02\x02\u0278\u0279\x03" +
    "\x02\x02\x02\u0279\u027C\x03\x02\x02\x02\u027A\u0278\x03\x02\x02\x02\u027B" +
    "\u027D\x07F\x02\x02\u027C\u027B\x03\x02\x02\x02\u027C\u027D\x03\x02\x02" +
    "\x02\u027D\u027F\x03\x02\x02\x02\u027E\u0273\x03\x02\x02\x02\u027E\u027F" +
    "\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280\u0281\x07B\x02\x02" +
    "\u0281Y\x03\x02\x02\x02\u0282\u0284\x07r\x02\x02\u0283\u0285\x05\xD6l" +
    "\x02\u0284\u0283\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u028D" +
    "\x03\x02\x02\x02\u0286\u0287\x07G\x02\x02\u0287\u0289\x07r\x02\x02\u0288" +
    "\u028A\x05\xD6l\x02\u0289\u0288\x03\x02\x02\x02\u0289\u028A\x03\x02\x02" +
    "\x02\u028A\u028C\x03\x02\x02\x02\u028B\u0286\x03\x02\x02\x02\u028C\u028F" +
    "\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02" +
    "\u028E[\x03\x02\x02\x02\u028F\u028D\x03\x02\x02\x02\u0290\u029D\x05\xD2" +
    "j\x02\u0291\u0293\x05r:\x02\u0292\u0291\x03\x02\x02\x02\u0293\u0296\x03" +
    "\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295" +
    "\u0297\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0297\u029A\x07M\x02" +
    "\x02\u0298\u0299\t\x02\x02\x02\u0299\u029B\x05\xD2j\x02\u029A\u0298\x03" +
    "\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B\u029D\x03\x02\x02\x02\u029C" +
    "\u0290\x03\x02\x02\x02\u029C\u0294\x03\x02\x02\x02\u029D]\x03\x02\x02" +
    "\x02\u029E\u02A3\x05h5\x02\u029F\u02A0\x07F\x02\x02\u02A0\u02A2\x05h5" +
    "\x02\u02A1\u029F\x03\x02\x02\x02\u02A2\u02A5\x03\x02\x02\x02\u02A3\u02A1" +
    "\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4_\x03\x02\x02\x02\u02A5" +
    "\u02A3\x03\x02\x02\x02\u02A6\u02A8\x07?\x02\x02\u02A7\u02A9\x05b2\x02" +
    "\u02A8\u02A7\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02AA\x03" +
    "\x02\x02\x02\u02AA\u02AB\x07@\x02\x02\u02ABa\x03\x02\x02\x02\u02AC\u02B1" +
    "\x05d3\x02\u02AD\u02AE\x07F\x02\x02\u02AE\u02B0\x05d3\x02\u02AF\u02AD" +
    "\x03\x02\x02\x02\u02B0\u02B3\x03\x02\x02\x02\u02B1\u02AF\x03\x02\x02\x02" +
    "\u02B1\u02B2\x03\x02\x02\x02\u02B2\u02B6\x03\x02\x02\x02\u02B3\u02B1\x03" +
    "\x02\x02\x02\u02B4\u02B5\x07F\x02\x02\u02B5\u02B7\x05f4\x02\u02B6\u02B4" +
    "\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02BA\x03\x02\x02\x02" +
    "\u02B8\u02BA\x05f4\x02\u02B9\u02AC\x03\x02\x02\x02\u02B9\u02B8\x03\x02" +
    "\x02\x02\u02BAc\x03\x02\x02\x02\u02BB\u02BD\x05\x0E\b\x02\u02BC\u02BB" +
    "\x03\x02\x02\x02\u02BD\u02C0\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02\x02" +
    "\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C1\x03\x02\x02\x02\u02C0\u02BE\x03" +
    "\x02\x02\x02\u02C1\u02C2\x05\xD2j\x02\u02C2\u02C3\x05T+\x02\u02C3e\x03" +
    "\x02\x02\x02\u02C4\u02C6\x05\x0E\b\x02\u02C5\u02C4\x03\x02\x02\x02\u02C6" +
    "\u02C9\x03\x02\x02\x02\u02C7\u02C5\x03\x02\x02\x02\u02C7\u02C8\x03\x02" +
    "\x02\x02\u02C8\u02CA\x03\x02\x02\x02\u02C9\u02C7\x03\x02\x02\x02\u02CA" +
    "\u02CE\x05\xD2j\x02\u02CB\u02CD\x05r:\x02\u02CC\u02CB\x03\x02\x02\x02" +
    "\u02CD\u02D0\x03\x02\x02\x02\u02CE\u02CC\x03\x02\x02\x02\u02CE\u02CF\x03" +
    "\x02\x02\x02\u02CF\u02D1\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D1" +
    "\u02D2\x07m\x02\x02\u02D2\u02D3\x05T+\x02\u02D3g\x03\x02\x02\x02\u02D4" +
    "\u02D9\x07r\x02\x02\u02D5\u02D6\x07G\x02\x02\u02D6\u02D8\x07r\x02\x02" +
    "\u02D7\u02D5\x03\x02\x02\x02\u02D8\u02DB\x03\x02\x02\x02\u02D9\u02D7\x03" +
    "\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DAi\x03\x02\x02\x02\u02DB" +
    "\u02D9\x03\x02\x02\x02\u02DC\u02E3\x05l7\x02\u02DD\u02E3\x05n8\x02\u02DE" +
    "\u02E3\x07<\x02\x02\u02DF\u02E3\x07=\x02\x02\u02E0\u02E3\x07;\x02\x02" +
    "\u02E1\u02E3\x07>\x02\x02\u02E2\u02DC\x03\x02\x02\x02\u02E2\u02DD\x03" +
    "\x02\x02\x02\u02E2\u02DE\x03\x02\x02\x02\u02E2\u02DF\x03\x02\x02\x02\u02E2" +
    "\u02E0\x03\x02\x02\x02\u02E2\u02E1\x03\x02\x02\x02\u02E3k\x03\x02\x02" +
    "\x02\u02E4\u02E5\t\x03\x02\x02\u02E5m\x03\x02\x02\x02\u02E6\u02E7\t\x04" +
    "\x02\x02\u02E7o\x03\x02\x02\x02\u02E8\u02E9\x07r\x02\x02\u02E9\u02EB\x07" +
    "G\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EB\u02EE\x03\x02\x02\x02\u02EC" +
    "\u02EA\x03\x02\x02\x02\u02EC\u02ED\x03\x02\x02\x02\u02ED\u02EF\x03\x02" +
    "\x02\x02\u02EE\u02EC\x03\x02\x02\x02\u02EF\u02F0\x07l\x02\x02\u02F0\u02F1" +
    "\x07r\x02\x02\u02F1q\x03\x02\x02\x02\u02F2\u02F3\x07l\x02\x02\u02F3\u02F6" +
    "\x05h5\x02\u02F4\u02F6\x05p9\x02\u02F5\u02F2\x03\x02\x02\x02\u02F5\u02F4" +
    "\x03\x02\x02\x02\u02F6\u02FD\x03\x02\x02\x02\u02F7\u02FA\x07?\x02\x02" +
    "\u02F8\u02FB\x05t;\x02\u02F9\u02FB\x05x=\x02\u02FA\u02F8\x03\x02\x02\x02" +
    "\u02FA\u02F9\x03\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\u02FC\x03" +
    "\x02\x02\x02\u02FC\u02FE\x07@\x02\x02\u02FD\u02F7\x03\x02\x02\x02\u02FD" +
    "\u02FE\x03\x02\x02\x02\u02FEs\x03\x02\x02\x02\u02FF\u0304\x05v<\x02\u0300" +
    "\u0301\x07F\x02\x02\u0301\u0303\x05v<\x02\u0302\u0300\x03\x02\x02\x02" +
    "\u0303\u0306\x03\x02\x02\x02\u0304\u0302\x03\x02\x02\x02\u0304\u0305\x03" +
    "\x02\x02\x02\u0305u\x03\x02\x02\x02\u0306\u0304\x03\x02\x02\x02\u0307" +
    "\u0308\x07r\x02\x02\u0308\u0309\x07H\x02\x02\u0309\u030A\x05x=\x02\u030A" +
    "w\x03\x02\x02\x02\u030B\u030F\x05\xB2Z\x02\u030C\u030F\x05r:\x02\u030D" +
    "\u030F\x05z>\x02\u030E\u030B\x03\x02\x02\x02\u030E\u030C\x03\x02\x02\x02" +
    "\u030E\u030D\x03\x02\x02\x02\u030Fy\x03\x02\x02\x02\u0310\u0319\x07A\x02" +
    "\x02\u0311\u0316\x05x=\x02\u0312\u0313\x07F\x02\x02\u0313\u0315\x05x=" +
    "\x02\u0314\u0312\x03\x02\x02\x02\u0315\u0318\x03\x02\x02\x02\u0316\u0314" +
    "\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317\u031A\x03\x02\x02\x02" +
    "\u0318\u0316\x03\x02\x02\x02\u0319\u0311\x03\x02\x02\x02\u0319\u031A\x03" +
    "\x02\x02\x02\u031A\u031C\x03\x02\x02\x02\u031B\u031D\x07F\x02\x02\u031C" +
    "\u031B\x03\x02\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D\u031E\x03\x02" +
    "\x02\x02\u031E\u031F\x07B\x02\x02\u031F{\x03\x02\x02\x02\u0320\u0321\x07" +
    "l\x02\x02\u0321\u0322\x07\x1E\x02\x02\u0322\u0323\x07r\x02\x02\u0323\u0324" +
    "\x05~@\x02\u0324}\x03\x02\x02\x02\u0325\u0329\x07A\x02\x02\u0326\u0328" +
    "\x05\x80A\x02\u0327\u0326\x03\x02\x02\x02\u0328\u032B\x03\x02\x02\x02" +
    "\u0329\u0327\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02\u032A\u032C\x03" +
    "\x02\x02\x02\u032B\u0329\x03\x02\x02\x02\u032C\u032D\x07B\x02\x02\u032D" +
    "\x7F\x03\x02\x02\x02\u032E\u0330\x05\n\x06\x02\u032F\u032E\x03\x02\x02" +
    "\x02\u0330\u0333\x03\x02\x02\x02\u0331\u032F\x03\x02\x02\x02\u0331\u0332" +
    "\x03\x02\x02\x02\u0332\u0334\x03\x02\x02\x02\u0333\u0331\x03\x02\x02\x02" +
    "\u0334\u0337\x05\x82B\x02\u0335\u0337\x07E\x02\x02\u0336\u0331\x03\x02" +
    "\x02\x02\u0336\u0335\x03\x02\x02\x02\u0337\x81\x03\x02\x02\x02\u0338\u0339" +
    "\x05\xD2j\x02\u0339\u033A\x05\x84C\x02\u033A\u033B\x07E\x02\x02\u033B" +
    "\u034D\x03\x02\x02\x02\u033C\u033E\x05\x10\t\x02\u033D\u033F\x07E\x02" +
    "\x02\u033E\u033D\x03\x02\x02\x02\u033E\u033F\x03\x02\x02\x02\u033F\u034D" +
    "\x03\x02\x02\x02\u0340\u0342\x05$\x13\x02\u0341\u0343\x07E\x02\x02\u0342" +
    "\u0341\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343\u034D\x03\x02" +
    "\x02\x02\u0344\u0346\x05\x1C\x0F\x02\u0345\u0347\x07E\x02\x02\u0346\u0345" +
    "\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347\u034D\x03\x02\x02\x02" +
    "\u0348\u034A\x05|?\x02\u0349\u034B\x07E\x02\x02\u034A\u0349\x03\x02\x02" +
    "\x02\u034A\u034B\x03\x02\x02\x02\u034B\u034D\x03\x02\x02\x02\u034C\u0338" +
    "\x03\x02\x02\x02\u034C\u033C\x03\x02\x02\x02\u034C\u0340\x03\x02\x02\x02" +
    "\u034C\u0344\x03\x02\x02\x02\u034C\u0348\x03\x02\x02\x02\u034D\x83\x03" +
    "\x02\x02\x02\u034E\u0351\x05\x86D\x02\u034F\u0351\x05\x88E\x02\u0350\u034E" +
    "\x03\x02\x02\x02\u0350\u034F\x03\x02\x02\x02\u0351\x85\x03\x02\x02\x02" +
    "\u0352\u0353\x07r\x02\x02\u0353\u0354\x07?\x02\x02\u0354\u0356\x07@\x02" +
    "\x02\u0355\u0357\x05\x8AF\x02\u0356\u0355\x03\x02\x02\x02\u0356\u0357" +
    "\x03\x02\x02\x02\u0357\x87\x03\x02\x02\x02\u0358\u0359\x05P)\x02\u0359" +
    "\x89\x03\x02\x02\x02\u035A\u035B\x07\x0E\x02\x02\u035B\u035C\x05x=\x02" +
    "\u035C\x8B\x03\x02\x02\x02\u035D\u0361\x07A\x02\x02\u035E\u0360\x05\x8E" +
    "H\x02\u035F\u035E\x03\x02\x02\x02\u0360\u0363\x03\x02\x02\x02\u0361\u035F" +
    "\x03\x02\x02\x02\u0361\u0362\x03\x02\x02\x02\u0362\u0364\x03\x02\x02\x02" +
    "\u0363\u0361\x03\x02\x02\x02\u0364\u0365\x07B\x02\x02\u0365\x8D\x03\x02" +
    "\x02\x02\u0366\u0367\x05\x90I\x02\u0367\u0368\x07E\x02\x02\u0368\u036C" +
    "\x03\x02\x02\x02\u0369\u036C\x05\x94K\x02\u036A\u036C\x05\x92J\x02\u036B" +
    "\u0366\x03\x02\x02\x02\u036B\u0369\x03\x02\x02\x02\u036B\u036A\x03\x02" +
    "\x02\x02\u036C\x8F\x03\x02\x02\x02\u036D\u036F\x05\x0E\b\x02\u036E\u036D" +
    "\x03\x02\x02\x02\u036F\u0372\x03\x02\x02\x02\u0370\u036E\x03\x02\x02\x02" +
    "\u0370\u0371\x03\x02\x02\x02\u0371\u0373\x03\x02\x02\x02\u0372\u0370\x03" +
    "\x02\x02\x02\u0373\u0374\x05\xD2j\x02\u0374\u0375\x05P)\x02\u0375\x91" +
    "\x03\x02\x02\x02\u0376\u0378\x05\f\x07\x02\u0377\u0376\x03\x02\x02\x02" +
    "\u0378\u037B\x03\x02\x02\x02\u0379\u0377\x03\x02\x02\x02\u0379\u037A\x03" +
    "\x02\x02\x02\u037A\u037E\x03\x02\x02\x02\u037B\u0379\x03\x02\x02\x02\u037C" +
    "\u037F\x05\x10\t\x02\u037D\u037F\x05$\x13\x02\u037E\u037C\x03\x02\x02" +
    "\x02\u037E\u037D\x03\x02\x02\x02\u037F\u0382\x03\x02\x02\x02\u0380\u0382" +
    "\x07E\x02\x02\u0381\u0379\x03\x02\x02\x02\u0381\u0380\x03\x02\x02\x02" +
    "\u0382\x93\x03\x02\x02\x02\u0383\u03ED\x05\x8CG\x02\u0384\u0385\x07\x04" +
    "\x02\x02\u0385\u0388\x05\xB2Z\x02\u0386\u0387\x07N\x02\x02\u0387\u0389" +
    "\x05\xB2Z\x02\u0388\u0386\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02" +
    "\u0389\u038A\x03\x02\x02\x02\u038A\u038B\x07E\x02\x02\u038B\u03ED\x03" +
    "\x02\x02\x02\u038C\u038D\x07\x18\x02\x02\u038D\u038E\x05\xACW\x02\u038E" +
    "\u0391\x05\x94K\x02\u038F\u0390\x07\x11\x02\x02\u0390\u0392\x05\x94K\x02" +
    "\u0391\u038F\x03\x02\x02\x02\u0391\u0392\x03\x02\x02\x02\u0392\u03ED\x03" +
    "\x02\x02\x02\u0393\u0394\x07\x17\x02\x02\u0394\u0395\x07?\x02\x02\u0395" +
    "\u0396\x05\xA6T\x02\u0396\u0397\x07@\x02\x02\u0397\u0398\x05\x94K\x02" +
    "\u0398\u03ED\x03\x02\x02\x02\u0399\u039A\x074\x02\x02\u039A\u039B\x05" +
    "\xACW\x02\u039B\u039C\x05\x94K\x02\u039C\u03ED\x03\x02\x02\x02\u039D\u039E" +
    "\x07\x0F\x02\x02\u039E\u039F\x05\x94K\x02\u039F\u03A0\x074\x02\x02\u03A0" +
    "\u03A1\x05\xACW\x02\u03A1\u03A2\x07E\x02\x02\u03A2\u03ED\x03\x02\x02\x02" +
    "\u03A3\u03A4\x071\x02\x02\u03A4\u03AE\x05\x8CG\x02\u03A5\u03A7\x05\x96" +
    "L\x02\u03A6\u03A5\x03\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8\u03A6" +
    "\x03\x02\x02\x02\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03AB\x03\x02\x02\x02" +
    "\u03AA\u03AC\x05\x9AN\x02\u03AB\u03AA\x03\x02\x02\x02\u03AB\u03AC\x03" +
    "\x02\x02\x02\u03AC\u03AF\x03\x02\x02\x02\u03AD\u03AF\x05\x9AN\x02\u03AE" +
    "\u03A6\x03\x02\x02\x02\u03AE\u03AD\x03\x02\x02\x02\u03AF\u03ED\x03\x02" +
    "\x02\x02\u03B0\u03B1\x071\x02\x02\u03B1\u03B2\x05\x9CO\x02\u03B2\u03B6" +
    "\x05\x8CG\x02\u03B3\u03B5\x05\x96L\x02\u03B4\u03B3\x03\x02\x02\x02\u03B5" +
    "\u03B8\x03\x02\x02\x02\u03B6\u03B4\x03\x02\x02\x02\u03B6\u03B7\x03\x02" +
    "\x02\x02\u03B7\u03BA\x03\x02\x02\x02\u03B8\u03B6\x03\x02\x02\x02\u03B9" +
    "\u03BB\x05\x9AN\x02\u03BA\u03B9\x03\x02\x02\x02\u03BA\u03BB\x03\x02\x02" +
    "\x02\u03BB\u03ED\x03\x02\x02\x02\u03BC\u03BD\x07+\x02\x02\u03BD\u03BE" +
    "\x05\xACW\x02\u03BE\u03C2\x07A\x02\x02\u03BF\u03C1\x05\xA2R\x02\u03C0" +
    "\u03BF\x03\x02\x02\x02\u03C1\u03C4\x03\x02\x02\x02\u03C2\u03C0\x03\x02" +
    "\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03C8\x03\x02\x02\x02\u03C4" +
    "\u03C2\x03\x02\x02\x02\u03C5\u03C7\x05\xA4S\x02\u03C6\u03C5\x03\x02\x02" +
    "\x02\u03C7\u03CA\x03\x02\x02\x02\u03C8\u03C6\x03\x02\x02\x02\u03C8\u03C9" +
    "\x03\x02\x02\x02\u03C9\u03CB\x03\x02\x02\x02\u03CA\u03C8\x03\x02\x02\x02" +
    "\u03CB\u03CC\x07B\x02\x02\u03CC\u03ED\x03\x02\x02\x02\u03CD\u03CE\x07" +
    ",\x02\x02\u03CE\u03CF\x05\xACW\x02\u03CF\u03D0\x05\x8CG\x02\u03D0\u03ED" +
    "\x03\x02\x02\x02\u03D1\u03D3\x07&\x02\x02\u03D2\u03D4\x05\xB2Z\x02\u03D3" +
    "\u03D2\x03\x02\x02\x02\u03D3\u03D4\x03\x02\x02\x02\u03D4\u03D5\x03\x02" +
    "\x02\x02\u03D5\u03ED\x07E\x02\x02\u03D6\u03D7\x07.\x02\x02\u03D7\u03D8" +
    "\x05\xB2Z\x02\u03D8\u03D9\x07E\x02\x02\u03D9\u03ED\x03\x02\x02\x02\u03DA" +
    "\u03DC\x07\x06\x02\x02\u03DB\u03DD\x07r\x02\x02\u03DC\u03DB\x03\x02\x02" +
    "\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03DE\x03\x02\x02\x02\u03DE\u03ED" +
    "\x07E\x02\x02\u03DF\u03E1\x07\r\x02\x02\u03E0\u03E2\x07r\x02\x02\u03E1" +
    "\u03E0\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03E3\x03\x02" +
    "\x02\x02\u03E3\u03ED\x07E\x02\x02\u03E4\u03ED\x07E\x02\x02\u03E5\u03ED" +
    "\x05(\x15\x02\u03E6\u03E7\x05\xB2Z\x02\u03E7\u03E8\x07E\x02\x02\u03E8" +
    "\u03ED\x03\x02\x02\x02\u03E9\u03EA\x07r\x02\x02\u03EA\u03EB\x07N\x02\x02" +
    "\u03EB\u03ED\x05\x94K\x02\u03EC\u0383\x03\x02\x02\x02\u03EC\u0384\x03" +
    "\x02\x02\x02\u03EC\u038C\x03\x02\x02\x02\u03EC\u0393\x03\x02\x02\x02\u03EC" +
    "\u0399\x03\x02\x02\x02\u03EC\u039D\x03\x02\x02\x02\u03EC\u03A3\x03\x02" +
    "\x02\x02\u03EC\u03B0\x03\x02\x02\x02\u03EC\u03BC\x03\x02\x02\x02\u03EC" +
    "\u03CD\x03\x02\x02\x02\u03EC\u03D1\x03\x02\x02\x02\u03EC\u03D6\x03\x02" +
    "\x02\x02\u03EC\u03DA\x03\x02\x02\x02\u03EC\u03DF\x03\x02\x02\x02\u03EC" +
    "\u03E4\x03\x02\x02\x02\u03EC\u03E5\x03\x02\x02\x02\u03EC\u03E6\x03\x02" +
    "\x02\x02\u03EC\u03E9\x03\x02\x02\x02\u03ED\x95\x03\x02\x02\x02\u03EE\u03EF" +
    "\x07\t\x02\x02\u03EF\u03F3\x07?\x02\x02\u03F0\u03F2\x05\x0E\b\x02\u03F1" +
    "\u03F0\x03\x02\x02\x02\u03F2\u03F5\x03\x02\x02\x02\u03F3\u03F1\x03\x02" +
    "\x02\x02\u03F3\u03F4\x03\x02\x02\x02\u03F4\u03F6\x03\x02\x02\x02\u03F5" +
    "\u03F3\x03\x02\x02\x02\u03F6\u03F7\x05\x98M\x02\u03F7\u03F8\x07r\x02\x02" +
    "\u03F8\u03F9\x07@\x02\x02\u03F9\u03FA\x05\x8CG\x02\u03FA";
JavaParser._serializedATNSegment2 = "\x97\x03\x02\x02\x02\u03FB\u0400\x05h5\x02\u03FC\u03FD\x07\\\x02\x02\u03FD" +
    "\u03FF\x05h5\x02\u03FE\u03FC\x03\x02\x02\x02\u03FF\u0402\x03\x02\x02\x02" +
    "\u0400\u03FE\x03\x02\x02\x02\u0400\u0401\x03\x02\x02\x02\u0401\x99\x03" +
    "\x02\x02\x02\u0402\u0400\x03\x02\x02\x02\u0403\u0404\x07\x15\x02\x02\u0404" +
    "\u0405\x05\x8CG\x02\u0405\x9B\x03\x02\x02\x02\u0406\u0407\x07?\x02\x02" +
    "\u0407\u0409\x05\x9EP\x02\u0408\u040A\x07E\x02\x02\u0409\u0408\x03\x02" +
    "\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A\u040B\x03\x02\x02\x02\u040B" +
    "\u040C\x07@\x02\x02\u040C\x9D\x03\x02\x02\x02\u040D\u0412\x05\xA0Q\x02" +
    "\u040E\u040F\x07E\x02\x02\u040F\u0411\x05\xA0Q\x02\u0410\u040E\x03\x02" +
    "\x02\x02\u0411\u0414\x03\x02\x02\x02\u0412\u0410\x03\x02\x02\x02\u0412" +
    "\u0413\x03\x02\x02\x02\u0413\x9F\x03\x02\x02\x02\u0414\u0412\x03\x02\x02" +
    "\x02\u0415\u0417\x05\x0E\b\x02\u0416\u0415\x03\x02\x02\x02\u0417\u041A" +
    "\x03\x02\x02\x02\u0418\u0416\x03\x02\x02\x02\u0418\u0419\x03\x02\x02\x02" +
    "\u0419\u041B\x03\x02\x02\x02\u041A\u0418\x03\x02\x02\x02\u041B\u041C\x05" +
    "Z.\x02\u041C\u041D\x05T+\x02\u041D\u041E\x07H\x02\x02\u041E\u041F\x05" +
    "\xB2Z\x02\u041F\xA1\x03\x02\x02\x02\u0420\u0422\x05\xA4S\x02\u0421\u0420" +
    "\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423\u0421\x03\x02\x02\x02" +
    "\u0423\u0424\x03\x02\x02\x02\u0424\u0426\x03\x02\x02\x02\u0425\u0427\x05" +
    "\x8EH\x02\u0426\u0425\x03\x02\x02\x02\u0427\u0428\x03\x02\x02\x02\u0428" +
    "\u0426\x03\x02\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429\xA3\x03\x02\x02" +
    "\x02\u042A\u042D\x07\b\x02\x02\u042B\u042E\x05\xB2Z\x02\u042C\u042E\x07" +
    "r\x02\x02\u042D\u042B\x03\x02\x02\x02\u042D\u042C\x03\x02\x02\x02\u042E" +
    "\u042F\x03\x02\x02\x02\u042F\u0433\x07N\x02\x02\u0430\u0431\x07\x0E\x02" +
    "\x02\u0431\u0433\x07N\x02\x02\u0432\u042A\x03\x02\x02\x02\u0432\u0430" +
    "\x03\x02\x02\x02\u0433\xA5\x03\x02\x02\x02\u0434\u0441\x05\xAAV\x02\u0435" +
    "\u0437\x05\xA8U\x02\u0436\u0435\x03\x02\x02\x02\u0436\u0437\x03\x02\x02" +
    "\x02\u0437\u0438\x03\x02\x02\x02\u0438\u043A\x07E\x02\x02\u0439\u043B" +
    "\x05\xB2Z\x02\u043A\u0439\x03\x02\x02\x02\u043A\u043B\x03\x02\x02\x02" +
    "\u043B\u043C\x03\x02\x02\x02\u043C\u043E\x07E\x02\x02\u043D\u043F\x05" +
    "\xAEX\x02\u043E\u043D\x03\x02\x02\x02\u043E\u043F\x03\x02\x02\x02\u043F" +
    "\u0441\x03\x02\x02\x02\u0440\u0434\x03\x02\x02\x02\u0440\u0436\x03\x02" +
    "\x02\x02\u0441\xA7\x03\x02\x02\x02\u0442\u0445\x05\x90I\x02\u0443\u0445" +
    "\x05\xAEX\x02\u0444\u0442\x03\x02\x02\x02\u0444\u0443\x03\x02\x02\x02" +
    "\u0445\xA9\x03\x02\x02\x02\u0446\u0448\x05\x0E\b\x02\u0447\u0446\x03\x02" +
    "\x02\x02\u0448\u044B\x03\x02\x02\x02\u0449\u0447\x03\x02\x02\x02\u0449" +
    "\u044A\x03\x02\x02\x02\u044A\u044C\x03\x02\x02\x02\u044B\u0449\x03\x02" +
    "\x02\x02\u044C\u044D\x05\xD2j\x02\u044D\u044E\x05T+\x02\u044E\u044F\x07" +
    "N\x02\x02\u044F\u0450\x05\xB2Z\x02\u0450\xAB\x03\x02\x02\x02\u0451\u0452" +
    "\x07?\x02\x02\u0452\u0453\x05\xB2Z\x02\u0453\u0454\x07@\x02\x02\u0454" +
    "\xAD\x03\x02\x02\x02\u0455\u045A\x05\xB2Z\x02\u0456\u0457\x07F\x02\x02" +
    "\u0457\u0459\x05\xB2Z\x02\u0458\u0456\x03\x02\x02\x02\u0459\u045C\x03" +
    "\x02\x02\x02\u045A\u0458\x03\x02\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B" +
    "\xAF\x03\x02\x02\x02\u045C\u045A\x03\x02\x02\x02\u045D\u045E\x07r\x02" +
    "\x02\u045E\u0460\x07?\x02\x02\u045F\u0461\x05\xAEX\x02\u0460\u045F\x03" +
    "\x02\x02\x02\u0460\u0461\x03\x02\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462" +
    "\u0470\x07@\x02\x02\u0463\u0464\x07-\x02\x02\u0464\u0466\x07?\x02\x02" +
    "\u0465\u0467\x05\xAEX\x02\u0466\u0465\x03\x02\x02\x02\u0466\u0467\x03" +
    "\x02\x02\x02\u0467\u0468\x03\x02\x02\x02\u0468\u0470\x07@\x02\x02\u0469" +
    "\u046A\x07*\x02\x02\u046A\u046C\x07?\x02\x02\u046B\u046D\x05\xAEX\x02" +
    "\u046C\u046B\x03\x02\x02\x02\u046C\u046D\x03\x02\x02\x02\u046D\u046E\x03" +
    "\x02\x02\x02\u046E\u0470\x07@\x02\x02\u046F\u045D\x03\x02\x02\x02\u046F" +
    "\u0463\x03\x02\x02\x02\u046F\u0469\x03\x02\x02\x02\u0470\xB1\x03\x02\x02" +
    "\x02\u0471\u0472\bZ\x01\x02\u0472\u049E\x05\xBA^\x02\u0473\u049E\x05\xB0" +
    "Y\x02\u0474\u0475\x07!\x02\x02\u0475\u049E\x05\xBE`\x02\u0476\u047A\x07" +
    "?\x02\x02\u0477\u0479\x05r:\x02\u0478\u0477\x03\x02\x02\x02\u0479\u047C" +
    "\x03\x02\x02\x02\u047A\u0478\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02" +
    "\u047B\u047D\x03\x02\x02\x02\u047C\u047A\x03\x02\x02\x02\u047D\u0482\x05" +
    "\xD2j\x02\u047E\u047F\x07[\x02\x02\u047F\u0481\x05\xD2j\x02\u0480\u047E" +
    "\x03\x02\x02\x02\u0481\u0484\x03\x02\x02\x02\u0482\u0480\x03\x02\x02\x02" +
    "\u0482\u0483\x03\x02\x02\x02\u0483\u0485\x03\x02\x02\x02\u0484\u0482\x03" +
    "\x02\x02\x02\u0485\u0486\x07@\x02\x02\u0486\u0487\x05\xB2Z\x17\u0487\u049E" +
    "\x03\x02\x02\x02\u0488\u0489\t\x05\x02\x02\u0489\u049E\x05\xB2Z\x15\u048A" +
    "\u048B\t\x06\x02\x02\u048B\u049E\x05\xB2Z\x14\u048C\u049E\x05\xB4[\x02" +
    "\u048D\u048E\x05\xD2j\x02\u048E\u0494\x07k\x02\x02\u048F\u0491\x05\xD6" +
    "l\x02\u0490\u048F\x03\x02\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491\u0492" +
    "\x03\x02\x02\x02\u0492\u0495\x07r\x02\x02\u0493\u0495\x07!\x02\x02\u0494" +
    "\u0490\x03\x02\x02\x02\u0494\u0493\x03\x02\x02\x02\u0495\u049E\x03\x02" +
    "\x02\x02\u0496\u0497\x05\xBC_\x02\u0497\u0499\x07k\x02\x02\u0498\u049A" +
    "\x05\xD6l\x02\u0499\u0498\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02" +
    "\u049A\u049B\x03\x02\x02\x02\u049B\u049C\x07!\x02\x02\u049C\u049E\x03" +
    "\x02\x02\x02\u049D\u0471\x03\x02\x02\x02\u049D\u0473\x03\x02\x02\x02\u049D" +
    "\u0474\x03\x02\x02\x02\u049D\u0476\x03\x02\x02\x02\u049D\u0488\x03\x02" +
    "\x02\x02\u049D\u048A\x03\x02\x02\x02\u049D\u048C\x03\x02\x02\x02\u049D" +
    "\u048D\x03\x02\x02\x02\u049D\u0496\x03\x02\x02\x02\u049E\u04EF\x03\x02" +
    "\x02\x02\u049F\u04A0\f\x13\x02\x02\u04A0\u04A1\t\x07\x02\x02\u04A1\u04EE" +
    "\x05\xB2Z\x14\u04A2\u04A3\f\x12\x02\x02\u04A3\u04A4\t\b\x02\x02\u04A4" +
    "\u04EE\x05\xB2Z\x13\u04A5\u04AD\f\x11\x02\x02\u04A6\u04A7\x07J\x02\x02" +
    "\u04A7\u04AE\x07J\x02\x02\u04A8\u04A9\x07I\x02\x02\u04A9\u04AA\x07I\x02" +
    "\x02\u04AA\u04AE\x07I\x02\x02\u04AB\u04AC\x07I\x02\x02\u04AC\u04AE\x07" +
    "I\x02\x02\u04AD\u04A6\x03\x02\x02\x02\u04AD\u04A8\x03\x02\x02\x02\u04AD" +
    "\u04AB\x03\x02\x02\x02\u04AE\u04AF\x03\x02\x02\x02\u04AF\u04EE\x05\xB2" +
    "Z\x12\u04B0\u04B1\f\x10\x02\x02\u04B1\u04B2\t\t\x02\x02\u04B2\u04EE\x05" +
    "\xB2Z\x11\u04B3\u04B4\f\x0E\x02\x02\u04B4\u04B5\t\n\x02\x02\u04B5\u04EE" +
    "\x05\xB2Z\x0F\u04B6\u04B7\f\r\x02\x02\u04B7\u04B8\x07[\x02\x02\u04B8\u04EE" +
    "\x05\xB2Z\x0E\u04B9\u04BA\f\f\x02\x02\u04BA\u04BB\x07]\x02\x02\u04BB\u04EE" +
    "\x05\xB2Z\r\u04BC\u04BD\f\v\x02\x02\u04BD\u04BE\x07\\\x02\x02\u04BE\u04EE" +
    "\x05\xB2Z\f\u04BF\u04C0\f\n\x02\x02\u04C0\u04C1\x07S\x02\x02\u04C1\u04EE" +
    "\x05\xB2Z\v\u04C2\u04C3\f\t\x02\x02\u04C3\u04C4\x07T\x02\x02\u04C4\u04EE" +
    "\x05\xB2Z\n\u04C5\u04C6\f\b\x02\x02\u04C6\u04C7\x07M\x02\x02\u04C7\u04C8" +
    "\x05\xB2Z\x02\u04C8\u04C9\x07N\x02\x02\u04C9\u04CA\x05\xB2Z\b\u04CA\u04EE" +
    "\x03\x02\x02\x02\u04CB\u04CC\f\x07\x02\x02\u04CC\u04CD\t\v\x02\x02\u04CD" +
    "\u04EE\x05\xB2Z\x07\u04CE\u04CF\f\x1B\x02\x02\u04CF\u04DB\x07G\x02\x02" +
    "\u04D0\u04DC\x07r\x02\x02\u04D1\u04DC\x05\xB0Y\x02\u04D2\u04DC\x07-\x02" +
    "\x02\u04D3\u04D5\x07!\x02\x02\u04D4\u04D6\x05\xCEh\x02\u04D5\u04D4\x03" +
    "\x02\x02\x02\u04D5\u04D6\x03\x02\x02\x02\u04D6\u04D7\x03\x02\x02\x02\u04D7" +
    "\u04DC\x05\xC2b\x02\u04D8\u04D9\x07*\x02\x02\u04D9\u04DC\x05\xD8m\x02" +
    "\u04DA\u04DC\x05\xC8e\x02\u04DB\u04D0\x03\x02\x02\x02\u04DB\u04D1\x03" +
    "\x02\x02\x02\u04DB\u04D2\x03\x02\x02\x02\u04DB\u04D3\x03\x02\x02\x02\u04DB" +
    "\u04D8\x03\x02\x02\x02\u04DB\u04DA\x03\x02\x02\x02\u04DC\u04EE\x03\x02" +
    "\x02\x02\u04DD\u04DE\f\x1A\x02\x02\u04DE\u04DF\x07C\x02\x02\u04DF\u04E0" +
    "\x05\xB2Z\x02\u04E0\u04E1\x07D\x02\x02\u04E1\u04EE\x03\x02\x02\x02\u04E2" +
    "\u04E3\f\x16\x02\x02\u04E3\u04EE\t\f\x02\x02\u04E4\u04E5\f\x0F\x02\x02" +
    "\u04E5\u04E6\x07\x1C\x02\x02\u04E6\u04EE\x05\xD2j\x02\u04E7\u04E8\f\x05" +
    "\x02\x02\u04E8\u04EA\x07k\x02\x02\u04E9\u04EB\x05\xD6l\x02\u04EA\u04E9" +
    "\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02\u04EB\u04EC\x03\x02\x02\x02" +
    "\u04EC\u04EE\x07r\x02\x02\u04ED\u049F\x03\x02\x02\x02\u04ED\u04A2\x03" +
    "\x02\x02\x02\u04ED\u04A5\x03\x02\x02\x02\u04ED\u04B0\x03\x02\x02\x02\u04ED" +
    "\u04B3\x03\x02\x02\x02\u04ED\u04B6\x03\x02\x02\x02\u04ED\u04B9\x03\x02" +
    "\x02\x02\u04ED\u04BC\x03\x02\x02\x02\u04ED\u04BF\x03\x02\x02\x02\u04ED" +
    "\u04C2\x03\x02\x02\x02\u04ED\u04C5\x03\x02\x02\x02\u04ED\u04CB\x03\x02" +
    "\x02\x02\u04ED\u04CE\x03\x02\x02\x02\u04ED\u04DD\x03\x02\x02\x02\u04ED" +
    "\u04E2\x03\x02\x02\x02\u04ED\u04E4\x03\x02\x02\x02\u04ED\u04E7\x03\x02" +
    "\x02\x02\u04EE\u04F1\x03\x02\x02\x02\u04EF\u04ED\x03\x02\x02\x02\u04EF" +
    "\u04F0\x03\x02\x02\x02\u04F0\xB3\x03\x02\x02\x02\u04F1\u04EF\x03\x02\x02" +
    "\x02\u04F2\u04F3\x05\xB6\\\x02\u04F3\u04F4\x07j\x02\x02\u04F4\u04F5\x05" +
    "\xB8]\x02\u04F5\xB5\x03\x02\x02\x02\u04F6\u0507\x07r\x02\x02\u04F7\u04F9" +
    "\x07?\x02\x02\u04F8\u04FA\x05b2\x02\u04F9\u04F8\x03\x02\x02\x02\u04F9" +
    "\u04FA\x03\x02\x02\x02\u04FA\u04FB\x03\x02\x02\x02\u04FB\u0507\x07@\x02" +
    "\x02\u04FC\u04FD\x07?\x02\x02\u04FD\u0502\x07r\x02\x02\u04FE\u04FF\x07" +
    "F\x02\x02\u04FF\u0501\x07r\x02\x02\u0500\u04FE\x03\x02\x02\x02\u0501\u0504" +
    "\x03\x02\x02\x02\u0502\u0500\x03\x02\x02\x02\u0502\u0503\x03\x02\x02\x02" +
    "\u0503\u0505\x03\x02\x02\x02\u0504\u0502\x03\x02\x02\x02\u0505\u0507\x07" +
    "@\x02\x02\u0506\u04F6\x03\x02\x02\x02\u0506\u04F7\x03\x02\x02\x02\u0506" +
    "\u04FC\x03\x02\x02\x02\u0507\xB7\x03\x02\x02\x02\u0508\u050B\x05\xB2Z" +
    "\x02\u0509\u050B\x05\x8CG\x02\u050A\u0508\x03\x02\x02\x02\u050A\u0509" +
    "\x03\x02\x02\x02\u050B\xB9\x03\x02\x02\x02\u050C\u050D\x07?\x02\x02\u050D" +
    "\u050E\x05\xB2Z\x02\u050E\u050F\x07@\x02\x02\u050F\u051F\x03\x02\x02\x02" +
    "\u0510\u051F\x07-\x02\x02\u0511\u051F\x07*\x02\x02\u0512\u051F\x05j6\x02" +
    "\u0513\u051F\x07r\x02\x02\u0514\u0515\x058\x1D\x02\u0515\u0516\x07G\x02" +
    "\x02\u0516\u0517\x07\v\x02\x02\u0517\u051F\x03\x02\x02\x02\u0518\u051C" +
    "\x05\xCEh\x02\u0519\u051D\x05\xDAn\x02\u051A\u051B\x07-\x02\x02\u051B" +
    "\u051D\x05\xDCo\x02\u051C\u0519\x03\x02\x02\x02\u051C\u051A\x03\x02\x02" +
    "\x02\u051D\u051F\x03\x02\x02\x02\u051E\u050C\x03\x02\x02\x02\u051E\u0510" +
    "\x03\x02\x02\x02\u051E\u0511\x03\x02\x02\x02\u051E\u0512\x03\x02\x02\x02" +
    "\u051E\u0513\x03\x02\x02\x02\u051E\u0514\x03\x02\x02\x02\u051E\u0518\x03" +
    "\x02\x02\x02\u051F\xBB\x03\x02\x02\x02\u0520\u0521\x05Z.\x02\u0521\u0522" +
    "\x07G\x02\x02\u0522\u0524\x03\x02\x02\x02\u0523\u0520\x03\x02\x02\x02" +
    "\u0523\u0524\x03\x02\x02\x02\u0524\u0528\x03\x02\x02\x02\u0525\u0527\x05" +
    "r:\x02\u0526\u0525\x03\x02\x02\x02\u0527\u052A\x03\x02\x02\x02\u0528\u0526" +
    "\x03\x02\x02\x02\u0528\u0529\x03\x02\x02\x02\u0529\u052B\x03\x02\x02\x02" +
    "\u052A\u0528\x03\x02\x02\x02\u052B\u052D\x07r\x02\x02\u052C\u052E\x05" +
    "\xD6l\x02\u052D\u052C\x03\x02\x02\x02\u052D\u052E\x03\x02\x02\x02\u052E" +
    "\xBD\x03\x02\x02\x02\u052F\u0530\x05\xCEh\x02\u0530\u0531\x05\xC0a\x02" +
    "\u0531\u0532\x05\xC6d\x02\u0532\u0539\x03\x02\x02\x02\u0533\u0536\x05" +
    "\xC0a\x02\u0534\u0537\x05\xC4c\x02\u0535\u0537\x05\xC6d\x02\u0536\u0534" +
    "\x03\x02\x02\x02\u0536\u0535\x03\x02\x02\x02\u0537\u0539\x03\x02\x02\x02" +
    "\u0538\u052F\x03\x02\x02\x02\u0538\u0533\x03\x02\x02\x02\u0539\xBF\x03" +
    "\x02\x02\x02\u053A\u053C\x07r\x02\x02\u053B\u053D\x05\xCAf\x02\u053C\u053B" +
    "\x03\x02\x02\x02\u053C\u053D\x03\x02\x02\x02\u053D\u0545\x03\x02\x02\x02" +
    "\u053E\u053F\x07G\x02\x02\u053F\u0541\x07r\x02\x02\u0540\u0542\x05\xCA" +
    "f\x02\u0541\u0540\x03\x02\x02\x02\u0541\u0542\x03\x02\x02\x02\u0542\u0544" +
    "\x03\x02\x02\x02\u0543\u053E\x03\x02\x02\x02\u0544\u0547\x03\x02\x02\x02" +
    "\u0545\u0543\x03\x02\x02\x02\u0545\u0546\x03\x02\x02\x02\u0546\u054A\x03" +
    "\x02\x02\x02\u0547\u0545\x03\x02\x02\x02\u0548\u054A\x05\xD4k\x02\u0549" +
    "\u053A\x03\x02\x02\x02\u0549\u0548\x03\x02\x02\x02\u054A\xC1\x03\x02\x02" +
    "\x02\u054B\u054D\x07r\x02\x02\u054C\u054E\x05\xCCg\x02\u054D\u054C\x03" +
    "\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E\u054F\x03\x02\x02\x02\u054F" +
    "\u0550\x05\xC6d\x02\u0550\xC3\x03\x02\x02\x02\u0551\u056D\x07C\x02\x02" +
    "\u0552\u0557\x07D\x02\x02\u0553\u0554\x07C\x02\x02\u0554\u0556\x07D\x02" +
    "\x02\u0555\u0553\x03\x02\x02\x02\u0556\u0559\x03\x02\x02\x02\u0557\u0555" +
    "\x03\x02\x02\x02\u0557\u0558\x03\x02\x02\x02\u0558\u055A\x03\x02\x02\x02" +
    "\u0559\u0557\x03\x02\x02\x02\u055A\u056E\x05X-\x02\u055B\u055C\x05\xB2" +
    "Z\x02\u055C\u0563\x07D\x02\x02\u055D\u055E\x07C\x02\x02\u055E\u055F\x05" +
    "\xB2Z\x02\u055F\u0560\x07D\x02\x02\u0560\u0562\x03\x02\x02\x02\u0561\u055D" +
    "\x03\x02\x02\x02\u0562\u0565\x03\x02\x02\x02\u0563\u0561\x03\x02\x02\x02" +
    "\u0563\u0564\x03\x02\x02\x02\u0564\u056A\x03\x02\x02\x02\u0565\u0563\x03" +
    "\x02\x02\x02\u0566\u0567\x07C\x02\x02\u0567\u0569\x07D\x02\x02\u0568\u0566" +
    "\x03\x02\x02\x02\u0569\u056C\x03\x02\x02\x02\u056A\u0568\x03\x02\x02\x02" +
    "\u056A\u056B\x03\x02\x02\x02\u056B\u056E\x03\x02\x02\x02\u056C\u056A\x03" +
    "\x02\x02\x02\u056D\u0552\x03\x02\x02\x02\u056D\u055B\x03\x02\x02\x02\u056E" +
    "\xC5\x03\x02\x02\x02\u056F\u0571\x05\xDCo\x02\u0570\u0572\x05*\x16\x02" +
    "\u0571\u0570\x03\x02\x02\x02\u0571\u0572\x03\x02\x02\x02\u0572\xC7\x03" +
    "\x02\x02\x02\u0573\u0574\x05\xCEh\x02\u0574\u0575\x05\xDAn\x02\u0575\xC9" +
    "\x03\x02\x02\x02\u0576\u0577\x07J\x02\x02\u0577\u057A\x07I\x02\x02\u0578" +
    "\u057A\x05\xD6l\x02\u0579\u0576\x03\x02\x02\x02\u0579\u0578\x03\x02\x02" +
    "\x02\u057A\xCB\x03\x02\x02\x02\u057B\u057C\x07J\x02\x02\u057C\u057F\x07" +
    "I\x02\x02\u057D\u057F\x05\xCEh\x02\u057E\u057B\x03\x02\x02\x02\u057E\u057D" +
    "\x03\x02\x02\x02\u057F\xCD\x03\x02\x02\x02\u0580\u0581\x07J\x02\x02\u0581" +
    "\u0582\x05\xD0i\x02\u0582\u0583\x07I\x02\x02\u0583\xCF\x03\x02\x02\x02" +
    "\u0584\u0589\x05\xD2j\x02\u0585\u0586\x07F\x02\x02\u0586\u0588\x05\xD2" +
    "j\x02\u0587\u0585\x03\x02\x02\x02\u0588\u058B\x03\x02\x02\x02\u0589\u0587" +
    "\x03\x02\x02\x02\u0589\u058A\x03\x02\x02\x02\u058A\xD1\x03\x02\x02\x02" +
    "\u058B\u0589\x03\x02\x02\x02\u058C\u058E\x05r:\x02\u058D\u058C\x03\x02" +
    "\x02\x02\u058E\u0591\x03\x02\x02\x02\u058F\u058D\x03\x02\x02\x02\u058F" +
    "\u0590\x03\x02\x02\x02\u0590\u0594\x03\x02\x02\x02\u0591\u058F\x03\x02" +
    "\x02\x02\u0592\u0595\x05Z.\x02\u0593\u0595\x05\xD4k\x02\u0594\u0592\x03" +
    "\x02\x02\x02\u0594\u0593\x03\x02\x02\x02\u0595\u05A0\x03\x02\x02\x02\u0596" +
    "\u0598\x05r:\x02\u0597\u0596\x03\x02\x02\x02\u0598\u059B\x03\x02\x02\x02" +
    "\u0599\u0597\x03\x02\x02\x02\u0599\u059A\x03\x02\x02\x02\u059A\u059C\x03" +
    "\x02\x02\x02\u059B\u0599\x03\x02\x02\x02\u059C\u059D\x07C\x02\x02\u059D" +
    "\u059F\x07D\x02\x02\u059E\u0599\x03\x02\x02\x02\u059F\u05A2\x03\x02\x02" +
    "\x02\u05A0\u059E\x03\x02\x02\x02\u05A0\u05A1\x03\x02\x02\x02\u05A1\xD3" +
    "\x03\x02\x02\x02\u05A2\u05A0\x03\x02\x02\x02\u05A3\u05A4\t\r\x02\x02\u05A4" +
    "\xD5\x03\x02\x02\x02\u05A5\u05A6\x07J\x02\x02\u05A6\u05AB\x05\\/\x02\u05A7" +
    "\u05A8\x07F\x02\x02\u05A8\u05AA\x05\\/\x02\u05A9\u05A7\x03\x02\x02\x02" +
    "\u05AA\u05AD\x03\x02\x02\x02\u05AB\u05A9\x03\x02\x02\x02\u05AB\u05AC\x03" +
    "\x02\x02\x02\u05AC\u05AE\x03\x02\x02\x02\u05AD\u05AB\x03\x02\x02\x02\u05AE" +
    "\u05AF\x07I\x02\x02\u05AF\xD7\x03\x02\x02\x02\u05B0\u05B7\x05\xDCo\x02" +
    "\u05B1\u05B2\x07G\x02\x02\u05B2\u05B4\x07r\x02\x02\u05B3\u05B5\x05\xDC" +
    "o\x02\u05B4\u05B3\x03\x02\x02\x02\u05B4\u05B5\x03\x02\x02\x02\u05B5\u05B7" +
    "\x03\x02\x02\x02\u05B6\u05B0\x03\x02\x02\x02\u05B6\u05B1\x03\x02\x02\x02" +
    "\u05B7\xD9\x03\x02\x02\x02\u05B8\u05B9\x07*\x02\x02\u05B9\u05BD\x05\xD8" +
    "m\x02\u05BA\u05BB\x07r\x02\x02\u05BB\u05BD\x05\xDCo\x02\u05BC\u05B8\x03" +
    "\x02\x02\x02\u05BC\u05BA\x03\x02\x02\x02\u05BD\xDB\x03\x02\x02\x02\u05BE" +
    "\u05C0\x07?\x02\x02\u05BF\u05C1\x05\xAEX\x02\u05C0\u05BF\x03\x02\x02\x02" +
    "\u05C0\u05C1\x03\x02\x02\x02\u05C1\u05C2\x03\x02\x02\x02\u05C2\u05C3\x07" +
    "@\x02\x02\u05C3\xDD\x03\x02\x02\x02\xBB\xDF\xE4\xEA\xF0\xF5\xFD\u0101" +
    "\u0106\u010B\u0110\u0117\u011A\u0121\u012B\u012F\u0134\u0137\u013A\u014A" +
    "\u0152\u015A\u015E\u0165\u016C\u0170\u0173\u0176\u017F\u0183\u0188\u018D" +
    "\u0190\u0196\u019C\u019F\u01AC\u01B5\u01BC\u01C0\u01C5\u01C9\u01D4\u01DD" +
    "\u01E1\u01EA\u01EE\u01FA\u0203\u0208\u020D\u0216\u021E\u0228\u0231\u0239" +
    "\u023E\u0246\u024A\u0254\u025E\u0264\u026B\u0270\u0278\u027C\u027E\u0284" +
    "\u0289\u028D\u0294\u029A\u029C\u02A3\u02A8\u02B1\u02B6\u02B9\u02BE\u02C7" +
    "\u02CE\u02D9\u02E2\u02EC\u02F5\u02FA\u02FD\u0304\u030E\u0316\u0319\u031C" +
    "\u0329\u0331\u0336\u033E\u0342\u0346\u034A\u034C\u0350\u0356\u0361\u036B" +
    "\u0370\u0379\u037E\u0381\u0388\u0391\u03A8\u03AB\u03AE\u03B6\u03BA\u03C2" +
    "\u03C8\u03D3\u03DC\u03E1\u03EC\u03F3\u0400\u0409\u0412\u0418\u0423\u0428" +
    "\u042D\u0432\u0436\u043A\u043E\u0440\u0444\u0449\u045A\u0460\u0466\u046C" +
    "\u046F\u047A\u0482\u0490\u0494\u0499\u049D\u04AD\u04D5\u04DB\u04EA\u04ED" +
    "\u04EF\u04F9\u0502\u0506\u050A\u051C\u051E\u0523\u0528\u052D\u0536\u0538" +
    "\u053C\u0541\u0545\u0549\u054D\u0557\u0563\u056A\u056D\u0571\u0579\u057E" +
    "\u0589\u058F\u0594\u0599\u05A0\u05AB\u05B4\u05B6\u05BC\u05C0";
JavaParser._serializedATN = Utils.join([
    JavaParser._serializedATNSegment0,
    JavaParser._serializedATNSegment1,
    JavaParser._serializedATNSegment2,
], "");
class CompilationUnitContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(JavaParser.EOF, 0); }
    packageDeclaration() {
        return this.tryGetRuleContext(0, PackageDeclarationContext);
    }
    importDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ImportDeclarationContext);
        }
    }
    typeDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeDeclarationContext);
        }
        else {
            return this.getRuleContext(i, TypeDeclarationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_compilationUnit; }
    // @Override
    accept(visitor) {
        if (visitor.visitCompilationUnit) {
            return visitor.visitCompilationUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CompilationUnitContext = CompilationUnitContext;
class PackageDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    PACKAGE() { return this.getToken(JavaParser.PACKAGE, 0); }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    SEMI() { return this.getToken(JavaParser.SEMI, 0); }
    comment() {
        return this.tryGetRuleContext(0, CommentContext);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_packageDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitPackageDeclaration) {
            return visitor.visitPackageDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PackageDeclarationContext = PackageDeclarationContext;
class ImportDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    IMPORT() { return this.getToken(JavaParser.IMPORT, 0); }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    SEMI() { return this.getToken(JavaParser.SEMI, 0); }
    comment() {
        return this.tryGetRuleContext(0, CommentContext);
    }
    STATIC() { return this.tryGetToken(JavaParser.STATIC, 0); }
    DOT() { return this.tryGetToken(JavaParser.DOT, 0); }
    MUL() { return this.tryGetToken(JavaParser.MUL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_importDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitImportDeclaration) {
            return visitor.visitImportDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImportDeclarationContext = ImportDeclarationContext;
class TypeDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    classDeclaration() {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    }
    enumDeclaration() {
        return this.tryGetRuleContext(0, EnumDeclarationContext);
    }
    interfaceDeclaration() {
        return this.tryGetRuleContext(0, InterfaceDeclarationContext);
    }
    annotationTypeDeclaration() {
        return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
    }
    comment() {
        return this.tryGetRuleContext(0, CommentContext);
    }
    classOrInterfaceModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassOrInterfaceModifierContext);
        }
        else {
            return this.getRuleContext(i, ClassOrInterfaceModifierContext);
        }
    }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeDeclaration) {
            return visitor.visitTypeDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeDeclarationContext = TypeDeclarationContext;
class ModifierContext extends ParserRuleContext_1.ParserRuleContext {
    classOrInterfaceModifier() {
        return this.tryGetRuleContext(0, ClassOrInterfaceModifierContext);
    }
    NATIVE() { return this.tryGetToken(JavaParser.NATIVE, 0); }
    SYNCHRONIZED() { return this.tryGetToken(JavaParser.SYNCHRONIZED, 0); }
    TRANSIENT() { return this.tryGetToken(JavaParser.TRANSIENT, 0); }
    VOLATILE() { return this.tryGetToken(JavaParser.VOLATILE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_modifier; }
    // @Override
    accept(visitor) {
        if (visitor.visitModifier) {
            return visitor.visitModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModifierContext = ModifierContext;
class ClassOrInterfaceModifierContext extends ParserRuleContext_1.ParserRuleContext {
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    PUBLIC() { return this.tryGetToken(JavaParser.PUBLIC, 0); }
    PROTECTED() { return this.tryGetToken(JavaParser.PROTECTED, 0); }
    PRIVATE() { return this.tryGetToken(JavaParser.PRIVATE, 0); }
    STATIC() { return this.tryGetToken(JavaParser.STATIC, 0); }
    ABSTRACT() { return this.tryGetToken(JavaParser.ABSTRACT, 0); }
    FINAL() { return this.tryGetToken(JavaParser.FINAL, 0); }
    STRICTFP() { return this.tryGetToken(JavaParser.STRICTFP, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_classOrInterfaceModifier; }
    // @Override
    accept(visitor) {
        if (visitor.visitClassOrInterfaceModifier) {
            return visitor.visitClassOrInterfaceModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassOrInterfaceModifierContext = ClassOrInterfaceModifierContext;
class VariableModifierContext extends ParserRuleContext_1.ParserRuleContext {
    FINAL() { return this.tryGetToken(JavaParser.FINAL, 0); }
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_variableModifier; }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableModifier) {
            return visitor.visitVariableModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableModifierContext = VariableModifierContext;
class ClassDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    CLASS() { return this.getToken(JavaParser.CLASS, 0); }
    IDENTIFIER() { return this.getToken(JavaParser.IDENTIFIER, 0); }
    classBody() {
        return this.getRuleContext(0, ClassBodyContext);
    }
    typeParameters() {
        return this.tryGetRuleContext(0, TypeParametersContext);
    }
    extendClass() {
        return this.tryGetRuleContext(0, ExtendClassContext);
    }
    implementInterfaces() {
        return this.tryGetRuleContext(0, ImplementInterfacesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_classDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitClassDeclaration) {
            return visitor.visitClassDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassDeclarationContext = ClassDeclarationContext;
class ExtendClassContext extends ParserRuleContext_1.ParserRuleContext {
    EXTENDS() { return this.getToken(JavaParser.EXTENDS, 0); }
    typeType() {
        return this.getRuleContext(0, TypeTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_extendClass; }
    // @Override
    accept(visitor) {
        if (visitor.visitExtendClass) {
            return visitor.visitExtendClass(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExtendClassContext = ExtendClassContext;
class ImplementInterfacesContext extends ParserRuleContext_1.ParserRuleContext {
    IMPLEMENTS() { return this.tryGetToken(JavaParser.IMPLEMENTS, 0); }
    typeList() {
        return this.tryGetRuleContext(0, TypeListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_implementInterfaces; }
    // @Override
    accept(visitor) {
        if (visitor.visitImplementInterfaces) {
            return visitor.visitImplementInterfaces(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImplementInterfacesContext = ImplementInterfacesContext;
class TypeParametersContext extends ParserRuleContext_1.ParserRuleContext {
    LT() { return this.getToken(JavaParser.LT, 0); }
    typeParameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterContext);
        }
        else {
            return this.getRuleContext(i, TypeParameterContext);
        }
    }
    GT() { return this.getToken(JavaParser.GT, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeParameters; }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeParameters) {
            return visitor.visitTypeParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeParametersContext = TypeParametersContext;
class TypeParameterContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JavaParser.IDENTIFIER, 0); }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    EXTENDS() { return this.tryGetToken(JavaParser.EXTENDS, 0); }
    typeBound() {
        return this.tryGetRuleContext(0, TypeBoundContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeParameter; }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeParameter) {
            return visitor.visitTypeParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeParameterContext = TypeParameterContext;
class TypeBoundContext extends ParserRuleContext_1.ParserRuleContext {
    typeType(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeTypeContext);
        }
        else {
            return this.getRuleContext(i, TypeTypeContext);
        }
    }
    BITAND(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.BITAND);
        }
        else {
            return this.getToken(JavaParser.BITAND, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeBound; }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeBound) {
            return visitor.visitTypeBound(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeBoundContext = TypeBoundContext;
class EnumDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    ENUM() { return this.getToken(JavaParser.ENUM, 0); }
    IDENTIFIER() { return this.getToken(JavaParser.IDENTIFIER, 0); }
    LBRACE() { return this.getToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.getToken(JavaParser.RBRACE, 0); }
    IMPLEMENTS() { return this.tryGetToken(JavaParser.IMPLEMENTS, 0); }
    typeList() {
        return this.tryGetRuleContext(0, TypeListContext);
    }
    enumConstants() {
        return this.tryGetRuleContext(0, EnumConstantsContext);
    }
    COMMA() { return this.tryGetToken(JavaParser.COMMA, 0); }
    enumBodyDeclarations() {
        return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_enumDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumDeclaration) {
            return visitor.visitEnumDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumDeclarationContext = EnumDeclarationContext;
class EnumConstantsContext extends ParserRuleContext_1.ParserRuleContext {
    enumConstant(i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumConstantContext);
        }
        else {
            return this.getRuleContext(i, EnumConstantContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_enumConstants; }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumConstants) {
            return visitor.visitEnumConstants(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumConstantsContext = EnumConstantsContext;
class EnumConstantContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JavaParser.IDENTIFIER, 0); }
    comment() {
        return this.tryGetRuleContext(0, CommentContext);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    arguments() {
        return this.tryGetRuleContext(0, ArgumentsContext);
    }
    classBody() {
        return this.tryGetRuleContext(0, ClassBodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_enumConstant; }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumConstant) {
            return visitor.visitEnumConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumConstantContext = EnumConstantContext;
class EnumBodyDeclarationsContext extends ParserRuleContext_1.ParserRuleContext {
    SEMI() { return this.getToken(JavaParser.SEMI, 0); }
    classBodyDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassBodyDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ClassBodyDeclarationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_enumBodyDeclarations; }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumBodyDeclarations) {
            return visitor.visitEnumBodyDeclarations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumBodyDeclarationsContext = EnumBodyDeclarationsContext;
class InterfaceDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    INTERFACE() { return this.getToken(JavaParser.INTERFACE, 0); }
    IDENTIFIER() { return this.getToken(JavaParser.IDENTIFIER, 0); }
    interfaceBody() {
        return this.getRuleContext(0, InterfaceBodyContext);
    }
    typeParameters() {
        return this.tryGetRuleContext(0, TypeParametersContext);
    }
    extendInterface() {
        return this.tryGetRuleContext(0, ExtendInterfaceContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_interfaceDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceDeclaration) {
            return visitor.visitInterfaceDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceDeclarationContext = InterfaceDeclarationContext;
class ExtendInterfaceContext extends ParserRuleContext_1.ParserRuleContext {
    EXTENDS() { return this.getToken(JavaParser.EXTENDS, 0); }
    typeList() {
        return this.getRuleContext(0, TypeListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_extendInterface; }
    // @Override
    accept(visitor) {
        if (visitor.visitExtendInterface) {
            return visitor.visitExtendInterface(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExtendInterfaceContext = ExtendInterfaceContext;
class CommentContext extends ParserRuleContext_1.ParserRuleContext {
    JCOMMENT() { return this.getToken(JavaParser.JCOMMENT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_comment; }
    // @Override
    accept(visitor) {
        if (visitor.visitComment) {
            return visitor.visitComment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CommentContext = CommentContext;
class ClassBodyContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACE() { return this.getToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.getToken(JavaParser.RBRACE, 0); }
    classBodyDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassBodyDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ClassBodyDeclarationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_classBody; }
    // @Override
    accept(visitor) {
        if (visitor.visitClassBody) {
            return visitor.visitClassBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassBodyContext = ClassBodyContext;
class InterfaceBodyContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACE() { return this.getToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.getToken(JavaParser.RBRACE, 0); }
    interfaceBodyDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceBodyDeclarationContext);
        }
        else {
            return this.getRuleContext(i, InterfaceBodyDeclarationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_interfaceBody; }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceBody) {
            return visitor.visitInterfaceBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceBodyContext = InterfaceBodyContext;
class ClassBodyDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    STATIC() { return this.tryGetToken(JavaParser.STATIC, 0); }
    memberDeclaration() {
        return this.tryGetRuleContext(0, MemberDeclarationContext);
    }
    comment() {
        return this.tryGetRuleContext(0, CommentContext);
    }
    modifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }
        else {
            return this.getRuleContext(i, ModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_classBodyDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitClassBodyDeclaration) {
            return visitor.visitClassBodyDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassBodyDeclarationContext = ClassBodyDeclarationContext;
class MemberDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    methodDeclaration() {
        return this.tryGetRuleContext(0, MethodDeclarationContext);
    }
    genericMethodDeclaration() {
        return this.tryGetRuleContext(0, GenericMethodDeclarationContext);
    }
    fieldDeclaration() {
        return this.tryGetRuleContext(0, FieldDeclarationContext);
    }
    constructorDeclaration() {
        return this.tryGetRuleContext(0, ConstructorDeclarationContext);
    }
    genericConstructorDeclaration() {
        return this.tryGetRuleContext(0, GenericConstructorDeclarationContext);
    }
    interfaceDeclaration() {
        return this.tryGetRuleContext(0, InterfaceDeclarationContext);
    }
    annotationTypeDeclaration() {
        return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
    }
    classDeclaration() {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    }
    enumDeclaration() {
        return this.tryGetRuleContext(0, EnumDeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_memberDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitMemberDeclaration) {
            return visitor.visitMemberDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MemberDeclarationContext = MemberDeclarationContext;
class MethodDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    typeTypeOrVoid() {
        return this.getRuleContext(0, TypeTypeOrVoidContext);
    }
    IDENTIFIER() { return this.getToken(JavaParser.IDENTIFIER, 0); }
    formalParameters() {
        return this.getRuleContext(0, FormalParametersContext);
    }
    methodBody() {
        return this.getRuleContext(0, MethodBodyContext);
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
        }
    }
    throwList() {
        return this.tryGetRuleContext(0, ThrowListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_methodDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitMethodDeclaration) {
            return visitor.visitMethodDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MethodDeclarationContext = MethodDeclarationContext;
class ThrowListContext extends ParserRuleContext_1.ParserRuleContext {
    THROWS() { return this.tryGetToken(JavaParser.THROWS, 0); }
    qualifiedNameList() {
        return this.tryGetRuleContext(0, QualifiedNameListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_throwList; }
    // @Override
    accept(visitor) {
        if (visitor.visitThrowList) {
            return visitor.visitThrowList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ThrowListContext = ThrowListContext;
class MethodBodyContext extends ParserRuleContext_1.ParserRuleContext {
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_methodBody; }
    // @Override
    accept(visitor) {
        if (visitor.visitMethodBody) {
            return visitor.visitMethodBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MethodBodyContext = MethodBodyContext;
class TypeTypeOrVoidContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.tryGetRuleContext(0, TypeTypeContext);
    }
    VOID() { return this.tryGetToken(JavaParser.VOID, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeTypeOrVoid; }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeTypeOrVoid) {
            return visitor.visitTypeTypeOrVoid(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeTypeOrVoidContext = TypeTypeOrVoidContext;
class GenericMethodDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    typeParameters() {
        return this.getRuleContext(0, TypeParametersContext);
    }
    methodDeclaration() {
        return this.getRuleContext(0, MethodDeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_genericMethodDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitGenericMethodDeclaration) {
            return visitor.visitGenericMethodDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GenericMethodDeclarationContext = GenericMethodDeclarationContext;
class GenericConstructorDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    typeParameters() {
        return this.getRuleContext(0, TypeParametersContext);
    }
    constructorDeclaration() {
        return this.getRuleContext(0, ConstructorDeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_genericConstructorDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitGenericConstructorDeclaration) {
            return visitor.visitGenericConstructorDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GenericConstructorDeclarationContext = GenericConstructorDeclarationContext;
class ConstructorDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() { return this.getToken(JavaParser.IDENTIFIER, 0); }
    formalParameters() {
        return this.getRuleContext(0, FormalParametersContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    THROWS() { return this.tryGetToken(JavaParser.THROWS, 0); }
    qualifiedNameList() {
        return this.tryGetRuleContext(0, QualifiedNameListContext);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_constructorDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitConstructorDeclaration) {
            return visitor.visitConstructorDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstructorDeclarationContext = ConstructorDeclarationContext;
class FieldDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.getRuleContext(0, TypeTypeContext);
    }
    variableDeclarators() {
        return this.getRuleContext(0, VariableDeclaratorsContext);
    }
    SEMI() { return this.getToken(JavaParser.SEMI, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_fieldDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitFieldDeclaration) {
            return visitor.visitFieldDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FieldDeclarationContext = FieldDeclarationContext;
class InterfaceBodyDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    interfaceMemberDeclaration() {
        return this.tryGetRuleContext(0, InterfaceMemberDeclarationContext);
    }
    comment() {
        return this.tryGetRuleContext(0, CommentContext);
    }
    modifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }
        else {
            return this.getRuleContext(i, ModifierContext);
        }
    }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_interfaceBodyDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceBodyDeclaration) {
            return visitor.visitInterfaceBodyDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceBodyDeclarationContext = InterfaceBodyDeclarationContext;
class InterfaceMemberDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constDeclaration() {
        return this.tryGetRuleContext(0, ConstDeclarationContext);
    }
    interfaceMethodDeclaration() {
        return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
    }
    genericInterfaceMethodDeclaration() {
        return this.tryGetRuleContext(0, GenericInterfaceMethodDeclarationContext);
    }
    interfaceDeclaration() {
        return this.tryGetRuleContext(0, InterfaceDeclarationContext);
    }
    annotationTypeDeclaration() {
        return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
    }
    classDeclaration() {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    }
    enumDeclaration() {
        return this.tryGetRuleContext(0, EnumDeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_interfaceMemberDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceMemberDeclaration) {
            return visitor.visitInterfaceMemberDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceMemberDeclarationContext = InterfaceMemberDeclarationContext;
class ConstDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.getRuleContext(0, TypeTypeContext);
    }
    constantDeclarator(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantDeclaratorContext);
        }
        else {
            return this.getRuleContext(i, ConstantDeclaratorContext);
        }
    }
    SEMI() { return this.getToken(JavaParser.SEMI, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_constDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitConstDeclaration) {
            return visitor.visitConstDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstDeclarationContext = ConstDeclarationContext;
class ConstantDeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JavaParser.IDENTIFIER, 0); }
    ASSIGN() { return this.getToken(JavaParser.ASSIGN, 0); }
    variableInitializer() {
        return this.getRuleContext(0, VariableInitializerContext);
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_constantDeclarator; }
    // @Override
    accept(visitor) {
        if (visitor.visitConstantDeclarator) {
            return visitor.visitConstantDeclarator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstantDeclaratorContext = ConstantDeclaratorContext;
class InterfaceMethodDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JavaParser.IDENTIFIER, 0); }
    formalParameters() {
        return this.getRuleContext(0, FormalParametersContext);
    }
    methodBody() {
        return this.getRuleContext(0, MethodBodyContext);
    }
    typeTypeOrVoid() {
        return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
    }
    typeParameters() {
        return this.tryGetRuleContext(0, TypeParametersContext);
    }
    interfaceMethodModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceMethodModifierContext);
        }
        else {
            return this.getRuleContext(i, InterfaceMethodModifierContext);
        }
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
        }
    }
    throwList() {
        return this.tryGetRuleContext(0, ThrowListContext);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_interfaceMethodDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceMethodDeclaration) {
            return visitor.visitInterfaceMethodDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceMethodDeclarationContext = InterfaceMethodDeclarationContext;
class InterfaceMethodModifierContext extends ParserRuleContext_1.ParserRuleContext {
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    PUBLIC() { return this.tryGetToken(JavaParser.PUBLIC, 0); }
    ABSTRACT() { return this.tryGetToken(JavaParser.ABSTRACT, 0); }
    DEFAULT() { return this.tryGetToken(JavaParser.DEFAULT, 0); }
    STATIC() { return this.tryGetToken(JavaParser.STATIC, 0); }
    STRICTFP() { return this.tryGetToken(JavaParser.STRICTFP, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_interfaceMethodModifier; }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceMethodModifier) {
            return visitor.visitInterfaceMethodModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceMethodModifierContext = InterfaceMethodModifierContext;
class GenericInterfaceMethodDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    typeParameters() {
        return this.getRuleContext(0, TypeParametersContext);
    }
    interfaceMethodDeclaration() {
        return this.getRuleContext(0, InterfaceMethodDeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_genericInterfaceMethodDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitGenericInterfaceMethodDeclaration) {
            return visitor.visitGenericInterfaceMethodDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GenericInterfaceMethodDeclarationContext = GenericInterfaceMethodDeclarationContext;
class VariableDeclaratorsContext extends ParserRuleContext_1.ParserRuleContext {
    variableDeclarator(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclaratorContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclaratorContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_variableDeclarators; }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableDeclarators) {
            return visitor.visitVariableDeclarators(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableDeclaratorsContext = VariableDeclaratorsContext;
class VariableDeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    variableDeclaratorId() {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    }
    ASSIGN() { return this.tryGetToken(JavaParser.ASSIGN, 0); }
    variableInitializer() {
        return this.tryGetRuleContext(0, VariableInitializerContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_variableDeclarator; }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableDeclarator) {
            return visitor.visitVariableDeclarator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableDeclaratorContext = VariableDeclaratorContext;
class VariableDeclaratorIdContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JavaParser.IDENTIFIER, 0); }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_variableDeclaratorId; }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableDeclaratorId) {
            return visitor.visitVariableDeclaratorId(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableDeclaratorIdContext = VariableDeclaratorIdContext;
class VariableInitializerContext extends ParserRuleContext_1.ParserRuleContext {
    arrayInitializer() {
        return this.tryGetRuleContext(0, ArrayInitializerContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_variableInitializer; }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableInitializer) {
            return visitor.visitVariableInitializer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableInitializerContext = VariableInitializerContext;
class ArrayInitializerContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACE() { return this.getToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.getToken(JavaParser.RBRACE, 0); }
    variableInitializer(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableInitializerContext);
        }
        else {
            return this.getRuleContext(i, VariableInitializerContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_arrayInitializer; }
    // @Override
    accept(visitor) {
        if (visitor.visitArrayInitializer) {
            return visitor.visitArrayInitializer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArrayInitializerContext = ArrayInitializerContext;
class ClassOrInterfaceTypeContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.IDENTIFIER);
        }
        else {
            return this.getToken(JavaParser.IDENTIFIER, i);
        }
    }
    typeArguments(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentsContext);
        }
        else {
            return this.getRuleContext(i, TypeArgumentsContext);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.DOT);
        }
        else {
            return this.getToken(JavaParser.DOT, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_classOrInterfaceType; }
    // @Override
    accept(visitor) {
        if (visitor.visitClassOrInterfaceType) {
            return visitor.visitClassOrInterfaceType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassOrInterfaceTypeContext = ClassOrInterfaceTypeContext;
class TypeArgumentContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.tryGetRuleContext(0, TypeTypeContext);
    }
    QUESTION() { return this.tryGetToken(JavaParser.QUESTION, 0); }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    EXTENDS() { return this.tryGetToken(JavaParser.EXTENDS, 0); }
    SUPER() { return this.tryGetToken(JavaParser.SUPER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeArgument; }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeArgument) {
            return visitor.visitTypeArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeArgumentContext = TypeArgumentContext;
class QualifiedNameListContext extends ParserRuleContext_1.ParserRuleContext {
    qualifiedName(i) {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }
        else {
            return this.getRuleContext(i, QualifiedNameContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_qualifiedNameList; }
    // @Override
    accept(visitor) {
        if (visitor.visitQualifiedNameList) {
            return visitor.visitQualifiedNameList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QualifiedNameListContext = QualifiedNameListContext;
class FormalParametersContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(JavaParser.LPAREN, 0); }
    RPAREN() { return this.getToken(JavaParser.RPAREN, 0); }
    formalParameterList() {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_formalParameters; }
    // @Override
    accept(visitor) {
        if (visitor.visitFormalParameters) {
            return visitor.visitFormalParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FormalParametersContext = FormalParametersContext;
class FormalParameterListContext extends ParserRuleContext_1.ParserRuleContext {
    formalParameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(FormalParameterContext);
        }
        else {
            return this.getRuleContext(i, FormalParameterContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    lastFormalParameter() {
        return this.tryGetRuleContext(0, LastFormalParameterContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_formalParameterList; }
    // @Override
    accept(visitor) {
        if (visitor.visitFormalParameterList) {
            return visitor.visitFormalParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FormalParameterListContext = FormalParameterListContext;
class FormalParameterContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.getRuleContext(0, TypeTypeContext);
    }
    variableDeclaratorId() {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_formalParameter; }
    // @Override
    accept(visitor) {
        if (visitor.visitFormalParameter) {
            return visitor.visitFormalParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FormalParameterContext = FormalParameterContext;
class LastFormalParameterContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.getRuleContext(0, TypeTypeContext);
    }
    ELLIPSIS() { return this.getToken(JavaParser.ELLIPSIS, 0); }
    variableDeclaratorId() {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_lastFormalParameter; }
    // @Override
    accept(visitor) {
        if (visitor.visitLastFormalParameter) {
            return visitor.visitLastFormalParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LastFormalParameterContext = LastFormalParameterContext;
class QualifiedNameContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.IDENTIFIER);
        }
        else {
            return this.getToken(JavaParser.IDENTIFIER, i);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.DOT);
        }
        else {
            return this.getToken(JavaParser.DOT, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_qualifiedName; }
    // @Override
    accept(visitor) {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QualifiedNameContext = QualifiedNameContext;
class LiteralContext extends ParserRuleContext_1.ParserRuleContext {
    integerLiteral() {
        return this.tryGetRuleContext(0, IntegerLiteralContext);
    }
    floatLiteral() {
        return this.tryGetRuleContext(0, FloatLiteralContext);
    }
    CHAR_LITERAL() { return this.tryGetToken(JavaParser.CHAR_LITERAL, 0); }
    STRING_LITERAL() { return this.tryGetToken(JavaParser.STRING_LITERAL, 0); }
    BOOL_LITERAL() { return this.tryGetToken(JavaParser.BOOL_LITERAL, 0); }
    NULL_LITERAL() { return this.tryGetToken(JavaParser.NULL_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_literal; }
    // @Override
    accept(visitor) {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LiteralContext = LiteralContext;
class IntegerLiteralContext extends ParserRuleContext_1.ParserRuleContext {
    DECIMAL_LITERAL() { return this.tryGetToken(JavaParser.DECIMAL_LITERAL, 0); }
    HEX_LITERAL() { return this.tryGetToken(JavaParser.HEX_LITERAL, 0); }
    OCT_LITERAL() { return this.tryGetToken(JavaParser.OCT_LITERAL, 0); }
    BINARY_LITERAL() { return this.tryGetToken(JavaParser.BINARY_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_integerLiteral; }
    // @Override
    accept(visitor) {
        if (visitor.visitIntegerLiteral) {
            return visitor.visitIntegerLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IntegerLiteralContext = IntegerLiteralContext;
class FloatLiteralContext extends ParserRuleContext_1.ParserRuleContext {
    FLOAT_LITERAL() { return this.tryGetToken(JavaParser.FLOAT_LITERAL, 0); }
    HEX_FLOAT_LITERAL() { return this.tryGetToken(JavaParser.HEX_FLOAT_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_floatLiteral; }
    // @Override
    accept(visitor) {
        if (visitor.visitFloatLiteral) {
            return visitor.visitFloatLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FloatLiteralContext = FloatLiteralContext;
class AltAnnotationQualifiedNameContext extends ParserRuleContext_1.ParserRuleContext {
    AT() { return this.getToken(JavaParser.AT, 0); }
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.IDENTIFIER);
        }
        else {
            return this.getToken(JavaParser.IDENTIFIER, i);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.DOT);
        }
        else {
            return this.getToken(JavaParser.DOT, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_altAnnotationQualifiedName; }
    // @Override
    accept(visitor) {
        if (visitor.visitAltAnnotationQualifiedName) {
            return visitor.visitAltAnnotationQualifiedName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AltAnnotationQualifiedNameContext = AltAnnotationQualifiedNameContext;
class AnnotationContext extends ParserRuleContext_1.ParserRuleContext {
    AT() { return this.tryGetToken(JavaParser.AT, 0); }
    qualifiedName() {
        return this.tryGetRuleContext(0, QualifiedNameContext);
    }
    altAnnotationQualifiedName() {
        return this.tryGetRuleContext(0, AltAnnotationQualifiedNameContext);
    }
    LPAREN() { return this.tryGetToken(JavaParser.LPAREN, 0); }
    RPAREN() { return this.tryGetToken(JavaParser.RPAREN, 0); }
    elementValuePairs() {
        return this.tryGetRuleContext(0, ElementValuePairsContext);
    }
    elementValue() {
        return this.tryGetRuleContext(0, ElementValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_annotation; }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation) {
            return visitor.visitAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationContext = AnnotationContext;
class ElementValuePairsContext extends ParserRuleContext_1.ParserRuleContext {
    elementValuePair(i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementValuePairContext);
        }
        else {
            return this.getRuleContext(i, ElementValuePairContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_elementValuePairs; }
    // @Override
    accept(visitor) {
        if (visitor.visitElementValuePairs) {
            return visitor.visitElementValuePairs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementValuePairsContext = ElementValuePairsContext;
class ElementValuePairContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JavaParser.IDENTIFIER, 0); }
    ASSIGN() { return this.getToken(JavaParser.ASSIGN, 0); }
    elementValue() {
        return this.getRuleContext(0, ElementValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_elementValuePair; }
    // @Override
    accept(visitor) {
        if (visitor.visitElementValuePair) {
            return visitor.visitElementValuePair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementValuePairContext = ElementValuePairContext;
class ElementValueContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    elementValueArrayInitializer() {
        return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_elementValue; }
    // @Override
    accept(visitor) {
        if (visitor.visitElementValue) {
            return visitor.visitElementValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementValueContext = ElementValueContext;
class ElementValueArrayInitializerContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACE() { return this.getToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.getToken(JavaParser.RBRACE, 0); }
    elementValue(i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementValueContext);
        }
        else {
            return this.getRuleContext(i, ElementValueContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_elementValueArrayInitializer; }
    // @Override
    accept(visitor) {
        if (visitor.visitElementValueArrayInitializer) {
            return visitor.visitElementValueArrayInitializer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementValueArrayInitializerContext = ElementValueArrayInitializerContext;
class AnnotationTypeDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    AT() { return this.getToken(JavaParser.AT, 0); }
    INTERFACE() { return this.getToken(JavaParser.INTERFACE, 0); }
    IDENTIFIER() { return this.getToken(JavaParser.IDENTIFIER, 0); }
    annotationTypeBody() {
        return this.getRuleContext(0, AnnotationTypeBodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_annotationTypeDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotationTypeDeclaration) {
            return visitor.visitAnnotationTypeDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationTypeDeclarationContext = AnnotationTypeDeclarationContext;
class AnnotationTypeBodyContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACE() { return this.getToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.getToken(JavaParser.RBRACE, 0); }
    annotationTypeElementDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationTypeElementDeclarationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationTypeElementDeclarationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_annotationTypeBody; }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotationTypeBody) {
            return visitor.visitAnnotationTypeBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationTypeBodyContext = AnnotationTypeBodyContext;
class AnnotationTypeElementDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    annotationTypeElementRest() {
        return this.tryGetRuleContext(0, AnnotationTypeElementRestContext);
    }
    modifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }
        else {
            return this.getRuleContext(i, ModifierContext);
        }
    }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_annotationTypeElementDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotationTypeElementDeclaration) {
            return visitor.visitAnnotationTypeElementDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationTypeElementDeclarationContext = AnnotationTypeElementDeclarationContext;
class AnnotationTypeElementRestContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.tryGetRuleContext(0, TypeTypeContext);
    }
    annotationMethodOrConstantRest() {
        return this.tryGetRuleContext(0, AnnotationMethodOrConstantRestContext);
    }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    classDeclaration() {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    }
    interfaceDeclaration() {
        return this.tryGetRuleContext(0, InterfaceDeclarationContext);
    }
    enumDeclaration() {
        return this.tryGetRuleContext(0, EnumDeclarationContext);
    }
    annotationTypeDeclaration() {
        return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_annotationTypeElementRest; }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotationTypeElementRest) {
            return visitor.visitAnnotationTypeElementRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationTypeElementRestContext = AnnotationTypeElementRestContext;
class AnnotationMethodOrConstantRestContext extends ParserRuleContext_1.ParserRuleContext {
    annotationMethodRest() {
        return this.tryGetRuleContext(0, AnnotationMethodRestContext);
    }
    annotationConstantRest() {
        return this.tryGetRuleContext(0, AnnotationConstantRestContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_annotationMethodOrConstantRest; }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotationMethodOrConstantRest) {
            return visitor.visitAnnotationMethodOrConstantRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationMethodOrConstantRestContext = AnnotationMethodOrConstantRestContext;
class AnnotationMethodRestContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JavaParser.IDENTIFIER, 0); }
    LPAREN() { return this.getToken(JavaParser.LPAREN, 0); }
    RPAREN() { return this.getToken(JavaParser.RPAREN, 0); }
    defaultValue() {
        return this.tryGetRuleContext(0, DefaultValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_annotationMethodRest; }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotationMethodRest) {
            return visitor.visitAnnotationMethodRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationMethodRestContext = AnnotationMethodRestContext;
class AnnotationConstantRestContext extends ParserRuleContext_1.ParserRuleContext {
    variableDeclarators() {
        return this.getRuleContext(0, VariableDeclaratorsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_annotationConstantRest; }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotationConstantRest) {
            return visitor.visitAnnotationConstantRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationConstantRestContext = AnnotationConstantRestContext;
class DefaultValueContext extends ParserRuleContext_1.ParserRuleContext {
    DEFAULT() { return this.getToken(JavaParser.DEFAULT, 0); }
    elementValue() {
        return this.getRuleContext(0, ElementValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_defaultValue; }
    // @Override
    accept(visitor) {
        if (visitor.visitDefaultValue) {
            return visitor.visitDefaultValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DefaultValueContext = DefaultValueContext;
class BlockContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACE() { return this.getToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.getToken(JavaParser.RBRACE, 0); }
    blockStatement(i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockStatementContext);
        }
        else {
            return this.getRuleContext(i, BlockStatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_block; }
    // @Override
    accept(visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockContext = BlockContext;
class BlockStatementContext extends ParserRuleContext_1.ParserRuleContext {
    localVariableDeclaration() {
        return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
    }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    statement() {
        return this.tryGetRuleContext(0, StatementContext);
    }
    localTypeDeclaration() {
        return this.tryGetRuleContext(0, LocalTypeDeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_blockStatement; }
    // @Override
    accept(visitor) {
        if (visitor.visitBlockStatement) {
            return visitor.visitBlockStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockStatementContext = BlockStatementContext;
class LocalVariableDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.getRuleContext(0, TypeTypeContext);
    }
    variableDeclarators() {
        return this.getRuleContext(0, VariableDeclaratorsContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_localVariableDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitLocalVariableDeclaration) {
            return visitor.visitLocalVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LocalVariableDeclarationContext = LocalVariableDeclarationContext;
class LocalTypeDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    classDeclaration() {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    }
    interfaceDeclaration() {
        return this.tryGetRuleContext(0, InterfaceDeclarationContext);
    }
    classOrInterfaceModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassOrInterfaceModifierContext);
        }
        else {
            return this.getRuleContext(i, ClassOrInterfaceModifierContext);
        }
    }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_localTypeDeclaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitLocalTypeDeclaration) {
            return visitor.visitLocalTypeDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LocalTypeDeclarationContext = LocalTypeDeclarationContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    ASSERT() { return this.tryGetToken(JavaParser.ASSERT, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    COLON() { return this.tryGetToken(JavaParser.COLON, 0); }
    IF() { return this.tryGetToken(JavaParser.IF, 0); }
    parExpression() {
        return this.tryGetRuleContext(0, ParExpressionContext);
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    ELSE() { return this.tryGetToken(JavaParser.ELSE, 0); }
    FOR() { return this.tryGetToken(JavaParser.FOR, 0); }
    LPAREN() { return this.tryGetToken(JavaParser.LPAREN, 0); }
    forControl() {
        return this.tryGetRuleContext(0, ForControlContext);
    }
    RPAREN() { return this.tryGetToken(JavaParser.RPAREN, 0); }
    WHILE() { return this.tryGetToken(JavaParser.WHILE, 0); }
    DO() { return this.tryGetToken(JavaParser.DO, 0); }
    TRY() { return this.tryGetToken(JavaParser.TRY, 0); }
    finallyBlock() {
        return this.tryGetRuleContext(0, FinallyBlockContext);
    }
    catchClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(CatchClauseContext);
        }
        else {
            return this.getRuleContext(i, CatchClauseContext);
        }
    }
    resourceSpecification() {
        return this.tryGetRuleContext(0, ResourceSpecificationContext);
    }
    SWITCH() { return this.tryGetToken(JavaParser.SWITCH, 0); }
    LBRACE() { return this.tryGetToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.tryGetToken(JavaParser.RBRACE, 0); }
    switchBlockStatementGroup(i) {
        if (i === undefined) {
            return this.getRuleContexts(SwitchBlockStatementGroupContext);
        }
        else {
            return this.getRuleContext(i, SwitchBlockStatementGroupContext);
        }
    }
    switchLabel(i) {
        if (i === undefined) {
            return this.getRuleContexts(SwitchLabelContext);
        }
        else {
            return this.getRuleContext(i, SwitchLabelContext);
        }
    }
    SYNCHRONIZED() { return this.tryGetToken(JavaParser.SYNCHRONIZED, 0); }
    RETURN() { return this.tryGetToken(JavaParser.RETURN, 0); }
    THROW() { return this.tryGetToken(JavaParser.THROW, 0); }
    BREAK() { return this.tryGetToken(JavaParser.BREAK, 0); }
    IDENTIFIER() { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
    CONTINUE() { return this.tryGetToken(JavaParser.CONTINUE, 0); }
    comment() {
        return this.tryGetRuleContext(0, CommentContext);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_statement; }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementContext = StatementContext;
class CatchClauseContext extends ParserRuleContext_1.ParserRuleContext {
    CATCH() { return this.getToken(JavaParser.CATCH, 0); }
    LPAREN() { return this.getToken(JavaParser.LPAREN, 0); }
    catchType() {
        return this.getRuleContext(0, CatchTypeContext);
    }
    IDENTIFIER() { return this.getToken(JavaParser.IDENTIFIER, 0); }
    RPAREN() { return this.getToken(JavaParser.RPAREN, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_catchClause; }
    // @Override
    accept(visitor) {
        if (visitor.visitCatchClause) {
            return visitor.visitCatchClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CatchClauseContext = CatchClauseContext;
class CatchTypeContext extends ParserRuleContext_1.ParserRuleContext {
    qualifiedName(i) {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }
        else {
            return this.getRuleContext(i, QualifiedNameContext);
        }
    }
    BITOR(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.BITOR);
        }
        else {
            return this.getToken(JavaParser.BITOR, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_catchType; }
    // @Override
    accept(visitor) {
        if (visitor.visitCatchType) {
            return visitor.visitCatchType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CatchTypeContext = CatchTypeContext;
class FinallyBlockContext extends ParserRuleContext_1.ParserRuleContext {
    FINALLY() { return this.getToken(JavaParser.FINALLY, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_finallyBlock; }
    // @Override
    accept(visitor) {
        if (visitor.visitFinallyBlock) {
            return visitor.visitFinallyBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FinallyBlockContext = FinallyBlockContext;
class ResourceSpecificationContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(JavaParser.LPAREN, 0); }
    resources() {
        return this.getRuleContext(0, ResourcesContext);
    }
    RPAREN() { return this.getToken(JavaParser.RPAREN, 0); }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_resourceSpecification; }
    // @Override
    accept(visitor) {
        if (visitor.visitResourceSpecification) {
            return visitor.visitResourceSpecification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ResourceSpecificationContext = ResourceSpecificationContext;
class ResourcesContext extends ParserRuleContext_1.ParserRuleContext {
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    SEMI(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.SEMI);
        }
        else {
            return this.getToken(JavaParser.SEMI, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_resources; }
    // @Override
    accept(visitor) {
        if (visitor.visitResources) {
            return visitor.visitResources(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ResourcesContext = ResourcesContext;
class ResourceContext extends ParserRuleContext_1.ParserRuleContext {
    classOrInterfaceType() {
        return this.getRuleContext(0, ClassOrInterfaceTypeContext);
    }
    variableDeclaratorId() {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    }
    ASSIGN() { return this.getToken(JavaParser.ASSIGN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_resource; }
    // @Override
    accept(visitor) {
        if (visitor.visitResource) {
            return visitor.visitResource(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ResourceContext = ResourceContext;
class SwitchBlockStatementGroupContext extends ParserRuleContext_1.ParserRuleContext {
    switchLabel(i) {
        if (i === undefined) {
            return this.getRuleContexts(SwitchLabelContext);
        }
        else {
            return this.getRuleContext(i, SwitchLabelContext);
        }
    }
    blockStatement(i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockStatementContext);
        }
        else {
            return this.getRuleContext(i, BlockStatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_switchBlockStatementGroup; }
    // @Override
    accept(visitor) {
        if (visitor.visitSwitchBlockStatementGroup) {
            return visitor.visitSwitchBlockStatementGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SwitchBlockStatementGroupContext = SwitchBlockStatementGroupContext;
class SwitchLabelContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CASE() { return this.tryGetToken(JavaParser.CASE, 0); }
    COLON() { return this.getToken(JavaParser.COLON, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    IDENTIFIER() { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
    DEFAULT() { return this.tryGetToken(JavaParser.DEFAULT, 0); }
    // @Override
    get ruleIndex() { return JavaParser.RULE_switchLabel; }
    // @Override
    accept(visitor) {
        if (visitor.visitSwitchLabel) {
            return visitor.visitSwitchLabel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SwitchLabelContext = SwitchLabelContext;
class ForControlContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    enhancedForControl() {
        return this.tryGetRuleContext(0, EnhancedForControlContext);
    }
    SEMI(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.SEMI);
        }
        else {
            return this.getToken(JavaParser.SEMI, i);
        }
    }
    forInit() {
        return this.tryGetRuleContext(0, ForInitContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    expressionList() {
        return this.tryGetRuleContext(0, ExpressionListContext);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_forControl; }
    // @Override
    accept(visitor) {
        if (visitor.visitForControl) {
            return visitor.visitForControl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ForControlContext = ForControlContext;
class ForInitContext extends ParserRuleContext_1.ParserRuleContext {
    localVariableDeclaration() {
        return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
    }
    expressionList() {
        return this.tryGetRuleContext(0, ExpressionListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_forInit; }
    // @Override
    accept(visitor) {
        if (visitor.visitForInit) {
            return visitor.visitForInit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ForInitContext = ForInitContext;
class EnhancedForControlContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.getRuleContext(0, TypeTypeContext);
    }
    variableDeclaratorId() {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    }
    COLON() { return this.getToken(JavaParser.COLON, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_enhancedForControl; }
    // @Override
    accept(visitor) {
        if (visitor.visitEnhancedForControl) {
            return visitor.visitEnhancedForControl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnhancedForControlContext = EnhancedForControlContext;
class ParExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(JavaParser.LPAREN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() { return this.getToken(JavaParser.RPAREN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_parExpression; }
    // @Override
    accept(visitor) {
        if (visitor.visitParExpression) {
            return visitor.visitParExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParExpressionContext = ParExpressionContext;
class ExpressionListContext extends ParserRuleContext_1.ParserRuleContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_expressionList; }
    // @Override
    accept(visitor) {
        if (visitor.visitExpressionList) {
            return visitor.visitExpressionList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionListContext = ExpressionListContext;
class MethodCallContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
    LPAREN() { return this.getToken(JavaParser.LPAREN, 0); }
    RPAREN() { return this.getToken(JavaParser.RPAREN, 0); }
    expressionList() {
        return this.tryGetRuleContext(0, ExpressionListContext);
    }
    THIS() { return this.tryGetToken(JavaParser.THIS, 0); }
    SUPER() { return this.tryGetToken(JavaParser.SUPER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_methodCall; }
    // @Override
    accept(visitor) {
        if (visitor.visitMethodCall) {
            return visitor.visitMethodCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MethodCallContext = MethodCallContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    primary() {
        return this.tryGetRuleContext(0, PrimaryContext);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    DOT() { return this.tryGetToken(JavaParser.DOT, 0); }
    IDENTIFIER() { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
    methodCall() {
        return this.tryGetRuleContext(0, MethodCallContext);
    }
    THIS() { return this.tryGetToken(JavaParser.THIS, 0); }
    NEW() { return this.tryGetToken(JavaParser.NEW, 0); }
    innerCreator() {
        return this.tryGetRuleContext(0, InnerCreatorContext);
    }
    SUPER() { return this.tryGetToken(JavaParser.SUPER, 0); }
    superSuffix() {
        return this.tryGetRuleContext(0, SuperSuffixContext);
    }
    explicitGenericInvocation() {
        return this.tryGetRuleContext(0, ExplicitGenericInvocationContext);
    }
    nonWildcardTypeArguments() {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    LBRACK() { return this.tryGetToken(JavaParser.LBRACK, 0); }
    RBRACK() { return this.tryGetToken(JavaParser.RBRACK, 0); }
    creator() {
        return this.tryGetRuleContext(0, CreatorContext);
    }
    LPAREN() { return this.tryGetToken(JavaParser.LPAREN, 0); }
    typeType(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeTypeContext);
        }
        else {
            return this.getRuleContext(i, TypeTypeContext);
        }
    }
    RPAREN() { return this.tryGetToken(JavaParser.RPAREN, 0); }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    BITAND(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.BITAND);
        }
        else {
            return this.getToken(JavaParser.BITAND, i);
        }
    }
    INC() { return this.tryGetToken(JavaParser.INC, 0); }
    DEC() { return this.tryGetToken(JavaParser.DEC, 0); }
    ADD() { return this.tryGetToken(JavaParser.ADD, 0); }
    SUB() { return this.tryGetToken(JavaParser.SUB, 0); }
    TILDE() { return this.tryGetToken(JavaParser.TILDE, 0); }
    BANG() { return this.tryGetToken(JavaParser.BANG, 0); }
    MUL() { return this.tryGetToken(JavaParser.MUL, 0); }
    DIV() { return this.tryGetToken(JavaParser.DIV, 0); }
    MOD() { return this.tryGetToken(JavaParser.MOD, 0); }
    LT(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LT);
        }
        else {
            return this.getToken(JavaParser.LT, i);
        }
    }
    GT(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.GT);
        }
        else {
            return this.getToken(JavaParser.GT, i);
        }
    }
    LE() { return this.tryGetToken(JavaParser.LE, 0); }
    GE() { return this.tryGetToken(JavaParser.GE, 0); }
    INSTANCEOF() { return this.tryGetToken(JavaParser.INSTANCEOF, 0); }
    EQUAL() { return this.tryGetToken(JavaParser.EQUAL, 0); }
    NOTEQUAL() { return this.tryGetToken(JavaParser.NOTEQUAL, 0); }
    CARET() { return this.tryGetToken(JavaParser.CARET, 0); }
    BITOR() { return this.tryGetToken(JavaParser.BITOR, 0); }
    AND() { return this.tryGetToken(JavaParser.AND, 0); }
    OR() { return this.tryGetToken(JavaParser.OR, 0); }
    COLON() { return this.tryGetToken(JavaParser.COLON, 0); }
    QUESTION() { return this.tryGetToken(JavaParser.QUESTION, 0); }
    ASSIGN() { return this.tryGetToken(JavaParser.ASSIGN, 0); }
    ADD_ASSIGN() { return this.tryGetToken(JavaParser.ADD_ASSIGN, 0); }
    SUB_ASSIGN() { return this.tryGetToken(JavaParser.SUB_ASSIGN, 0); }
    MUL_ASSIGN() { return this.tryGetToken(JavaParser.MUL_ASSIGN, 0); }
    DIV_ASSIGN() { return this.tryGetToken(JavaParser.DIV_ASSIGN, 0); }
    AND_ASSIGN() { return this.tryGetToken(JavaParser.AND_ASSIGN, 0); }
    OR_ASSIGN() { return this.tryGetToken(JavaParser.OR_ASSIGN, 0); }
    XOR_ASSIGN() { return this.tryGetToken(JavaParser.XOR_ASSIGN, 0); }
    RSHIFT_ASSIGN() { return this.tryGetToken(JavaParser.RSHIFT_ASSIGN, 0); }
    URSHIFT_ASSIGN() { return this.tryGetToken(JavaParser.URSHIFT_ASSIGN, 0); }
    LSHIFT_ASSIGN() { return this.tryGetToken(JavaParser.LSHIFT_ASSIGN, 0); }
    MOD_ASSIGN() { return this.tryGetToken(JavaParser.MOD_ASSIGN, 0); }
    lambdaExpression() {
        return this.tryGetRuleContext(0, LambdaExpressionContext);
    }
    COLONCOLON() { return this.tryGetToken(JavaParser.COLONCOLON, 0); }
    typeArguments() {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    }
    classType() {
        return this.tryGetRuleContext(0, ClassTypeContext);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_expression; }
    // @Override
    accept(visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionContext = ExpressionContext;
class LambdaExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    lambdaParameters() {
        return this.getRuleContext(0, LambdaParametersContext);
    }
    ARROW() { return this.getToken(JavaParser.ARROW, 0); }
    lambdaBody() {
        return this.getRuleContext(0, LambdaBodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_lambdaExpression; }
    // @Override
    accept(visitor) {
        if (visitor.visitLambdaExpression) {
            return visitor.visitLambdaExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LambdaExpressionContext = LambdaExpressionContext;
class LambdaParametersContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.IDENTIFIER);
        }
        else {
            return this.getToken(JavaParser.IDENTIFIER, i);
        }
    }
    LPAREN() { return this.tryGetToken(JavaParser.LPAREN, 0); }
    RPAREN() { return this.tryGetToken(JavaParser.RPAREN, 0); }
    formalParameterList() {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_lambdaParameters; }
    // @Override
    accept(visitor) {
        if (visitor.visitLambdaParameters) {
            return visitor.visitLambdaParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LambdaParametersContext = LambdaParametersContext;
class LambdaBodyContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_lambdaBody; }
    // @Override
    accept(visitor) {
        if (visitor.visitLambdaBody) {
            return visitor.visitLambdaBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LambdaBodyContext = LambdaBodyContext;
class PrimaryContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.tryGetToken(JavaParser.LPAREN, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    RPAREN() { return this.tryGetToken(JavaParser.RPAREN, 0); }
    THIS() { return this.tryGetToken(JavaParser.THIS, 0); }
    SUPER() { return this.tryGetToken(JavaParser.SUPER, 0); }
    literal() {
        return this.tryGetRuleContext(0, LiteralContext);
    }
    IDENTIFIER() { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
    typeTypeOrVoid() {
        return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
    }
    DOT() { return this.tryGetToken(JavaParser.DOT, 0); }
    CLASS() { return this.tryGetToken(JavaParser.CLASS, 0); }
    nonWildcardTypeArguments() {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    explicitGenericInvocationSuffix() {
        return this.tryGetRuleContext(0, ExplicitGenericInvocationSuffixContext);
    }
    arguments() {
        return this.tryGetRuleContext(0, ArgumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_primary; }
    // @Override
    accept(visitor) {
        if (visitor.visitPrimary) {
            return visitor.visitPrimary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrimaryContext = PrimaryContext;
class ClassTypeContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JavaParser.IDENTIFIER, 0); }
    classOrInterfaceType() {
        return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
    }
    DOT() { return this.tryGetToken(JavaParser.DOT, 0); }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    typeArguments() {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_classType; }
    // @Override
    accept(visitor) {
        if (visitor.visitClassType) {
            return visitor.visitClassType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassTypeContext = ClassTypeContext;
class CreatorContext extends ParserRuleContext_1.ParserRuleContext {
    nonWildcardTypeArguments() {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    createdName() {
        return this.getRuleContext(0, CreatedNameContext);
    }
    classCreatorRest() {
        return this.tryGetRuleContext(0, ClassCreatorRestContext);
    }
    arrayCreatorRest() {
        return this.tryGetRuleContext(0, ArrayCreatorRestContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_creator; }
    // @Override
    accept(visitor) {
        if (visitor.visitCreator) {
            return visitor.visitCreator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CreatorContext = CreatorContext;
class CreatedNameContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.IDENTIFIER);
        }
        else {
            return this.getToken(JavaParser.IDENTIFIER, i);
        }
    }
    typeArgumentsOrDiamond(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentsOrDiamondContext);
        }
        else {
            return this.getRuleContext(i, TypeArgumentsOrDiamondContext);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.DOT);
        }
        else {
            return this.getToken(JavaParser.DOT, i);
        }
    }
    primitiveType() {
        return this.tryGetRuleContext(0, PrimitiveTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_createdName; }
    // @Override
    accept(visitor) {
        if (visitor.visitCreatedName) {
            return visitor.visitCreatedName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CreatedNameContext = CreatedNameContext;
class InnerCreatorContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JavaParser.IDENTIFIER, 0); }
    classCreatorRest() {
        return this.getRuleContext(0, ClassCreatorRestContext);
    }
    nonWildcardTypeArgumentsOrDiamond() {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsOrDiamondContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_innerCreator; }
    // @Override
    accept(visitor) {
        if (visitor.visitInnerCreator) {
            return visitor.visitInnerCreator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InnerCreatorContext = InnerCreatorContext;
class ArrayCreatorRestContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
        }
    }
    arrayInitializer() {
        return this.tryGetRuleContext(0, ArrayInitializerContext);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_arrayCreatorRest; }
    // @Override
    accept(visitor) {
        if (visitor.visitArrayCreatorRest) {
            return visitor.visitArrayCreatorRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArrayCreatorRestContext = ArrayCreatorRestContext;
class ClassCreatorRestContext extends ParserRuleContext_1.ParserRuleContext {
    arguments() {
        return this.getRuleContext(0, ArgumentsContext);
    }
    classBody() {
        return this.tryGetRuleContext(0, ClassBodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_classCreatorRest; }
    // @Override
    accept(visitor) {
        if (visitor.visitClassCreatorRest) {
            return visitor.visitClassCreatorRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassCreatorRestContext = ClassCreatorRestContext;
class ExplicitGenericInvocationContext extends ParserRuleContext_1.ParserRuleContext {
    nonWildcardTypeArguments() {
        return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    explicitGenericInvocationSuffix() {
        return this.getRuleContext(0, ExplicitGenericInvocationSuffixContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_explicitGenericInvocation; }
    // @Override
    accept(visitor) {
        if (visitor.visitExplicitGenericInvocation) {
            return visitor.visitExplicitGenericInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExplicitGenericInvocationContext = ExplicitGenericInvocationContext;
class TypeArgumentsOrDiamondContext extends ParserRuleContext_1.ParserRuleContext {
    LT() { return this.tryGetToken(JavaParser.LT, 0); }
    GT() { return this.tryGetToken(JavaParser.GT, 0); }
    typeArguments() {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeArgumentsOrDiamond; }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeArgumentsOrDiamond) {
            return visitor.visitTypeArgumentsOrDiamond(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeArgumentsOrDiamondContext = TypeArgumentsOrDiamondContext;
class NonWildcardTypeArgumentsOrDiamondContext extends ParserRuleContext_1.ParserRuleContext {
    LT() { return this.tryGetToken(JavaParser.LT, 0); }
    GT() { return this.tryGetToken(JavaParser.GT, 0); }
    nonWildcardTypeArguments() {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond; }
    // @Override
    accept(visitor) {
        if (visitor.visitNonWildcardTypeArgumentsOrDiamond) {
            return visitor.visitNonWildcardTypeArgumentsOrDiamond(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NonWildcardTypeArgumentsOrDiamondContext = NonWildcardTypeArgumentsOrDiamondContext;
class NonWildcardTypeArgumentsContext extends ParserRuleContext_1.ParserRuleContext {
    LT() { return this.getToken(JavaParser.LT, 0); }
    typeList() {
        return this.getRuleContext(0, TypeListContext);
    }
    GT() { return this.getToken(JavaParser.GT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_nonWildcardTypeArguments; }
    // @Override
    accept(visitor) {
        if (visitor.visitNonWildcardTypeArguments) {
            return visitor.visitNonWildcardTypeArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NonWildcardTypeArgumentsContext = NonWildcardTypeArgumentsContext;
class TypeListContext extends ParserRuleContext_1.ParserRuleContext {
    typeType(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeTypeContext);
        }
        else {
            return this.getRuleContext(i, TypeTypeContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeList; }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeList) {
            return visitor.visitTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeListContext = TypeListContext;
class TypeTypeContext extends ParserRuleContext_1.ParserRuleContext {
    classOrInterfaceType() {
        return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
    }
    primitiveType() {
        return this.tryGetRuleContext(0, PrimitiveTypeContext);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeType; }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeType) {
            return visitor.visitTypeType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeTypeContext = TypeTypeContext;
class PrimitiveTypeContext extends ParserRuleContext_1.ParserRuleContext {
    BOOLEAN() { return this.tryGetToken(JavaParser.BOOLEAN, 0); }
    CHAR() { return this.tryGetToken(JavaParser.CHAR, 0); }
    BYTE() { return this.tryGetToken(JavaParser.BYTE, 0); }
    SHORT() { return this.tryGetToken(JavaParser.SHORT, 0); }
    INT() { return this.tryGetToken(JavaParser.INT, 0); }
    LONG() { return this.tryGetToken(JavaParser.LONG, 0); }
    FLOAT() { return this.tryGetToken(JavaParser.FLOAT, 0); }
    DOUBLE() { return this.tryGetToken(JavaParser.DOUBLE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_primitiveType; }
    // @Override
    accept(visitor) {
        if (visitor.visitPrimitiveType) {
            return visitor.visitPrimitiveType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrimitiveTypeContext = PrimitiveTypeContext;
class TypeArgumentsContext extends ParserRuleContext_1.ParserRuleContext {
    LT() { return this.getToken(JavaParser.LT, 0); }
    typeArgument(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentContext);
        }
        else {
            return this.getRuleContext(i, TypeArgumentContext);
        }
    }
    GT() { return this.getToken(JavaParser.GT, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeArguments; }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeArguments) {
            return visitor.visitTypeArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeArgumentsContext = TypeArgumentsContext;
class SuperSuffixContext extends ParserRuleContext_1.ParserRuleContext {
    arguments() {
        return this.tryGetRuleContext(0, ArgumentsContext);
    }
    DOT() { return this.tryGetToken(JavaParser.DOT, 0); }
    IDENTIFIER() { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_superSuffix; }
    // @Override
    accept(visitor) {
        if (visitor.visitSuperSuffix) {
            return visitor.visitSuperSuffix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SuperSuffixContext = SuperSuffixContext;
class ExplicitGenericInvocationSuffixContext extends ParserRuleContext_1.ParserRuleContext {
    SUPER() { return this.tryGetToken(JavaParser.SUPER, 0); }
    superSuffix() {
        return this.tryGetRuleContext(0, SuperSuffixContext);
    }
    IDENTIFIER() { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
    arguments() {
        return this.tryGetRuleContext(0, ArgumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_explicitGenericInvocationSuffix; }
    // @Override
    accept(visitor) {
        if (visitor.visitExplicitGenericInvocationSuffix) {
            return visitor.visitExplicitGenericInvocationSuffix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExplicitGenericInvocationSuffixContext = ExplicitGenericInvocationSuffixContext;
class ArgumentsContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(JavaParser.LPAREN, 0); }
    RPAREN() { return this.getToken(JavaParser.RPAREN, 0); }
    expressionList() {
        return this.tryGetRuleContext(0, ExpressionListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_arguments; }
    // @Override
    accept(visitor) {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArgumentsContext = ArgumentsContext;
//# sourceMappingURL=JavaParser.js.map