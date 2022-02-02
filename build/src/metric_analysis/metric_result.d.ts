import { LogMessage } from "./log_message";
export declare class MetricResult {
    private result;
    private logMessages;
    private creator;
    constructor(res: number, msgs: LogMessage[], creator: string);
    /**
     * Getter to obtain the numerical score of the MetricResult
     * @returns The numerical score of the result
     */
    getResult(): number;
    /**
     * Getter for all LogMessages that are part of this result
     * @returns a list of log messages
     */
    getLogMessages(): LogMessage[];
    /**
     * Getter for the creator of this result. This could be a unique name of a metric, a path if the result is
     * of a file, or some other unique string
     * @returns the unique creator name
     */
    getCreator(): string;
}
