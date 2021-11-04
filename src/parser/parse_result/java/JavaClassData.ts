import { DefaultComponentMetaInformation } from "../ComponentData";

export class JavaClassData extends DefaultComponentMetaInformation{
    private superTypes:string[];
    constructor(isPublic:boolean,superTypes:string[]){
        super(isPublic)
        this.superTypes=superTypes;
    }
   
    public getSuperClasses():string[]{
        return this.superTypes;
    }
}