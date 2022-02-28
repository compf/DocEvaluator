import chalk from "chalk";
import path from "path";
import { Component } from "../parser/parse_result/component";
/**
 * stores a log message that can be displayed
 */
export class LogMessage {
    private msg: string;
    private path:string;
    private qualifiedName:string;
    private lineStart:number;
    private lineEnd:number;
    private metricName:string;
    public static BasePath: string = ".";
    constructor(msg: string, component: Component,metricName:string) {
        this.path=path.relative(LogMessage.BasePath, component.getTopParent().getName());
        this.qualifiedName = component.getQualifiedName();
        this.msg =msg;
        this.metricName=metricName;

        if(component.getComment()==null){
            this.lineStart=component.getLineNumber();
            this.lineEnd=this.lineStart;
        }
        else{
            let comment=component.getComment()!;
            let commentLines=comment.getCommentLinesCount();
            commentLines+=comment.getTags().length;
            this.lineStart=component.getLineNumber()-commentLines;
            this.lineEnd=component.getLineNumber();
        }
    }
    buildLogMessage():string{
        let path=chalk.green(this.path);
        const qualifiedName=chalk.yellow(this.qualifiedName);
        let msg=`${path}: ${qualifiedName} (L. ${this.lineStart}-${this.lineEnd}): [${this.metricName}]: ${this.msg})`;
        return msg;
    }
    /**
     * Log the message to the console
     */
    log() {
        console.log(this.buildLogMessage())
    }
    /**
     * 
     * @returns The string of the message
     */
    toString(): string {
        return this.msg;
    }
}