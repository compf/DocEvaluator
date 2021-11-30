export class LogMessage {
    private msg: string;
    constructor(msg: string) {
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