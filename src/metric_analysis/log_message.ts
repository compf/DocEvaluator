import chalk from "chalk";
import path from "path";
import { Component } from "../parser/parse_result/component";
/**
 * stores a log message that can be displayed
 */
export class LogMessage {
    private msg: string;
    public static BasePath: string = ".";
    constructor(msg: string, component: Component) {
        let p = chalk.green(path.relative(LogMessage.BasePath, component.getTopParent().getName()));
        let qualifiedName = chalk.yellow(component.getQualifiedName())
        let prefix = p + " " + qualifiedName + "(L. " + component.getLineNumber() + "): ";
        this.msg = prefix + msg;
    }
    /**
     * Log the message to the console
     */
    log() {
        console.log(this.msg)
    }
    /**
     * 
     * @returns The string of the message
     */
    toString(): string {
        return this.msg;
    }
}