import { LogMessage } from "./log_message";
export type CreatorTuple={
    path:string,
    component:string,
    metric:string
}
export class MetricResult {
    private result: number;
    private logMessages: LogMessage[];
    private creators: CreatorTuple;
    constructor(res: number, msgs: LogMessage[], creators: CreatorTuple) {
        this.result = res;
        this.logMessages = msgs;
        this.creators = creators;
    }
    /**
     * Getter to obtain the numerical score of the MetricResult
     * @returns The numerical score of the result
     */
    public getResult(): number {
        return this.result;
    }
    /**
     * Getter for all LogMessages that are part of this result
     * @returns a list of log messages
     */
    public getLogMessages(): LogMessage[] {
        return this.logMessages;
    }

    /**
     * Getter for the creator of this result. This could be a unique name of a metric, a path if the result is
     * of a file, or some other unique string
     * @returns the unique creator name
     */
    public getCreators(): CreatorTuple {
        return this.creators;
    }
}
/**
 * A result that is created when no child results are existing
 */
export class InvalidMetricResult extends MetricResult {
    constructor() {
        super(0, [], {path:"",metric:"",component:""});
    }
}