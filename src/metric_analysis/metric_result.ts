import { LogMessage } from "./log_message";

export class MetricResult{
    private result:number;
    private logMessages:LogMessage[];
    constructor(res:number,msgs:LogMessage[]){
        this.result=res;
        this.logMessages=msgs;
    }
    public getResult():number{
        return this.result;
    }
    public getLogMessages():LogMessage[]{
        return this.logMessages;
    }
}