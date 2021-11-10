export class LogMessage{
    private msg:string;
    constructor(msg:string){
        this.msg=msg;
    }
    log(){
        console.log(this.msg)
    }
    toString():string{
        return this.msg;
    }
}