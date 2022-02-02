import { Component } from "../parser/parse_result/component";
export declare class LogMessage {
    private msg;
    static BasePath: string;
    constructor(msg: string, component: Component);
    /**
     * Log the message to the console
     */
    log(): void;
    /**
     *
     * @returns The string of the message
     */
    toString(): string;
}
