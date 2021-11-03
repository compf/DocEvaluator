import { ComponentMetaInformation } from "./ComponentData";
import { StructuredComment } from "./StructuredComment";
export enum Accessibility{
    Public,Protected,Private
}
export class Component{
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
    constructor(name:string,parent:Component|null,comment:StructuredComment|null,meta:ComponentMetaInformation){
        this.name=name;
        this.comment=comment;
        this.parent=parent;
        this.metaInformation=meta;
    }
}