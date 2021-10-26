// Generated from JavaParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JavaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface JavaParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `JavaParser.javaFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJavaFile?: (ctx: JavaFileContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaParser.classDec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDec?: (ctx: ClassDecContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaParser.classBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBlock?: (ctx: ClassBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaParser.blockStart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStart?: (ctx: BlockStartContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaParser.blockEnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockEnd?: (ctx: BlockEndContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaParser.interfaceDec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDec?: (ctx: InterfaceDecContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaParser.relevantComponent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelevantComponent?: (ctx: RelevantComponentContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaParser.modifierer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifierer?: (ctx: ModifiererContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaParser.generics`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenerics?: (ctx: GenericsContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaParser.methodDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDecl?: (ctx: MethodDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataType?: (ctx: DataTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaParser.params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParams?: (ctx: ParamsContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaParser.fieldDec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDec?: (ctx: FieldDecContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaParser.allRelevantComponents`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAllRelevantComponents?: (ctx: AllRelevantComponentsContext) => Result;

	/**
	 * Visit a parse tree produced by `JavaParser.notInteresting`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotInteresting?: (ctx: NotInterestingContext) => Result;
}

