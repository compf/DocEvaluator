import internal from "stream";
import { ComponentMetaInformation } from "./ComponentData";
import { StructuredComment } from "./StructuredComment";
export enum Accessibility{
    Public,Protected,Private
}
export class Component{
    private lineNumber:number;
    private parent:Component|null;
    private name:string;
    private comment:StructuredComment|null;
    private metaInformation:ComponentMetaInformation;
    getParent():Component|null{
        return this.parent;
    }
    getName():string{
        return this.name;
    }
    getComment():StructuredComment|null{
        return this.comment;
    }
    getComponentMetaInformation():ComponentMetaInformation{
        return this.metaInformation;
    }
    getLineNumber():number{
        return this.lineNumber;
    }
    constructor(lineNumber:number,name:string,parent:Component|null,comment:StructuredComment|null,meta:ComponentMetaInformation){
        this.name=name;
        this.comment=comment;
        this.parent=parent;
        this.metaInformation=meta;
        this.lineNumber=lineNumber;
    }
}