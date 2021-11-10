import { DefaultComponentMetaInformation } from "../component_data";

export class JavaMethodData extends DefaultComponentMetaInformation{
    private  isOverriding:boolean;
    private exceptionThrown:string[];
    constructor(isPublic:boolean,isOverriding:boolean,exceptionThrown:string[]){
        super(isPublic);
        this.isOverriding=isOverriding;
        this.exceptionThrown=exceptionThrown;
    }
}