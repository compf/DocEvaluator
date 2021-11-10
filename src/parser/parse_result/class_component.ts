import { Component } from "./component";
import { ComponentMetaInformation } from "./component_data";
import { HierarchicalComponent } from "./hierarchical_component";
import { StructuredComment } from "./structured_comment";

export class ClassComponent extends HierarchicalComponent{
    private superTypes:string[]
    constructor(lineNumber:number,name:string,parent:Component|null,comment:StructuredComment|null,meta:ComponentMetaInformation,superTypes:string[]){
        super(lineNumber,name,parent,comment,meta);
        this.superTypes=superTypes;
    }
    getSuperTypes():string[]{
        return this.superTypes;
    }
}