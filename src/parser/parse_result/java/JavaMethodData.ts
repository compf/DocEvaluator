import { DefaultComponentMetaInformation } from "../component_data";

export class JavaMethodData extends DefaultComponentMetaInformation {
    private overriding: boolean;
    private exceptionThrown: string[];
    constructor(isPublic: boolean, isOverriding: boolean, exceptionThrown: string[]) {
        super(isPublic);
        this.overriding = isOverriding;
        this.exceptionThrown = exceptionThrown;
    }
    public getThrownException(){
        return this.exceptionThrown;
    }
    public isOverriding():boolean{
        return this.overriding;
    }
}