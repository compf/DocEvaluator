import { DefaultComponentMetaInformation } from "../ComponentData";

export class JavaClassData extends DefaultComponentMetaInformation{
    private baseClass:string;
    private implementedInterfaces:string[];
    constructor(isPublic:boolean,baseClass:string,implementedInterfaces:string[]){
        super(isPublic)
        this.baseClass=baseClass;
        this.implementedInterfaces=implementedInterfaces;
    }
    public getBaseClass():string{
        return this.baseClass;
    }
    public getImplementedInterfaces():string[]{
        return this.implementedInterfaces;
    }
}