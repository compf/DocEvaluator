import chalk from "chalk";
import { Component } from "../parser/parse_result/component";

export class LogMessage {
    private msg: string;
    constructor(msg: string,component:Component) {
        let path= chalk.green( component.getTopParent().getName());
        let qualifiedName=chalk.yellow(component.getQualifiedName())
        let prefix=path+ " "+ qualifiedName + "(L. "+component.getLineNumber()+"): ";
        this.msg = msg;
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