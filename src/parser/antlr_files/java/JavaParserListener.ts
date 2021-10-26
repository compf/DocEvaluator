// Generated from JavaParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { JavaFileContext } from "./JavaParser";
import { ClassDecContext } from "./JavaParser";
import { ClassBlockContext } from "./JavaParser";
import { BlockStartContext } from "./JavaParser";
import { BlockEndContext } from "./JavaParser";
import { InterfaceDecContext } from "./JavaParser";
import { RelevantComponentContext } from "./JavaParser";
import { ModifiererContext } from "./JavaParser";
import { GenericsContext } from "./JavaParser";
import { MethodDeclContext } from "./JavaParser";
import { BlockContext } from "./JavaParser";
import { DataTypeContext } from "./JavaParser";
import { ParamsContext } from "./JavaParser";
import { ParamContext } from "./JavaParser";
import { FieldDecContext } from "./JavaParser";
import { CommentContext } from "./JavaParser";
import { AllRelevantComponentsContext } from "./JavaParser";
import { NotInterestingContext } from "./JavaParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `JavaParser`.
 */
export interface JavaParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JavaParser.javaFile`.
	 * @param ctx the parse tree
	 */
	enterJavaFile?: (ctx: JavaFileContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.javaFile`.
	 * @param ctx the parse tree
	 */
	exitJavaFile?: (ctx: JavaFileContext) => void;

	/**
	 * Enter a parse tree produced by `JavaParser.classDec`.
	 * @param ctx the parse tree
	 */
	enterClassDec?: (ctx: ClassDecContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.classDec`.
	 * @param ctx the parse tree
	 */
	exitClassDec?: (ctx: ClassDecContext) => void;

	/**
	 * Enter a parse tree produced by `JavaParser.classBlock`.
	 * @param ctx the parse tree
	 */
	enterClassBlock?: (ctx: ClassBlockContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.classBlock`.
	 * @param ctx the parse tree
	 */
	exitClassBlock?: (ctx: ClassBlockContext) => void;

	/**
	 * Enter a parse tree produced by `JavaParser.blockStart`.
	 * @param ctx the parse tree
	 */
	enterBlockStart?: (ctx: BlockStartContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.blockStart`.
	 * @param ctx the parse tree
	 */
	exitBlockStart?: (ctx: BlockStartContext) => void;

	/**
	 * Enter a parse tree produced by `JavaParser.blockEnd`.
	 * @param ctx the parse tree
	 */
	enterBlockEnd?: (ctx: BlockEndContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.blockEnd`.
	 * @param ctx the parse tree
	 */
	exitBlockEnd?: (ctx: BlockEndContext) => void;

	/**
	 * Enter a parse tree produced by `JavaParser.interfaceDec`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDec?: (ctx: InterfaceDecContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.interfaceDec`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDec?: (ctx: InterfaceDecContext) => void;

	/**
	 * Enter a parse tree produced by `JavaParser.relevantComponent`.
	 * @param ctx the parse tree
	 */
	enterRelevantComponent?: (ctx: RelevantComponentContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.relevantComponent`.
	 * @param ctx the parse tree
	 */
	exitRelevantComponent?: (ctx: RelevantComponentContext) => void;

	/**
	 * Enter a parse tree produced by `JavaParser.modifierer`.
	 * @param ctx the parse tree
	 */
	enterModifierer?: (ctx: ModifiererContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.modifierer`.
	 * @param ctx the parse tree
	 */
	exitModifierer?: (ctx: ModifiererContext) => void;

	/**
	 * Enter a parse tree produced by `JavaParser.generics`.
	 * @param ctx the parse tree
	 */
	enterGenerics?: (ctx: GenericsContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.generics`.
	 * @param ctx the parse tree
	 */
	exitGenerics?: (ctx: GenericsContext) => void;

	/**
	 * Enter a parse tree produced by `JavaParser.methodDecl`.
	 * @param ctx the parse tree
	 */
	enterMethodDecl?: (ctx: MethodDeclContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.methodDecl`.
	 * @param ctx the parse tree
	 */
	exitMethodDecl?: (ctx: MethodDeclContext) => void;

	/**
	 * Enter a parse tree produced by `JavaParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `JavaParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterDataType?: (ctx: DataTypeContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitDataType?: (ctx: DataTypeContext) => void;

	/**
	 * Enter a parse tree produced by `JavaParser.params`.
	 * @param ctx the parse tree
	 */
	enterParams?: (ctx: ParamsContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.params`.
	 * @param ctx the parse tree
	 */
	exitParams?: (ctx: ParamsContext) => void;

	/**
	 * Enter a parse tree produced by `JavaParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `JavaParser.fieldDec`.
	 * @param ctx the parse tree
	 */
	enterFieldDec?: (ctx: FieldDecContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.fieldDec`.
	 * @param ctx the parse tree
	 */
	exitFieldDec?: (ctx: FieldDecContext) => void;

	/**
	 * Enter a parse tree produced by `JavaParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `JavaParser.allRelevantComponents`.
	 * @param ctx the parse tree
	 */
	enterAllRelevantComponents?: (ctx: AllRelevantComponentsContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.allRelevantComponents`.
	 * @param ctx the parse tree
	 */
	exitAllRelevantComponents?: (ctx: AllRelevantComponentsContext) => void;

	/**
	 * Enter a parse tree produced by `JavaParser.notInteresting`.
	 * @param ctx the parse tree
	 */
	enterNotInteresting?: (ctx: NotInterestingContext) => void;
	/**
	 * Exit a parse tree produced by `JavaParser.notInteresting`.
	 * @param ctx the parse tree
	 */
	exitNotInteresting?: (ctx: NotInterestingContext) => void;
}

