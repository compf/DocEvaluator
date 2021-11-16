import { LogMessage } from "./log_message";

export class MetricResult{
    private result:number;
    private logMessages:LogMessage[];
    constructor(res:number,msgs:LogMessage[]){
        this.result=res;
        this.logMessages=msgs;
    }
    /**
     * Getter to obtain the numerical score of the MetricResult
     * @returns The numerical score of the result
     */
    public getResult():number{
        return this.result;
    }
    /**
     * Getter for all LogMessages that are part of this result
     * @returns a list of log messages
     */
    public getLogMessages():LogMessage[]{
        return this.logMessages;
    }
}