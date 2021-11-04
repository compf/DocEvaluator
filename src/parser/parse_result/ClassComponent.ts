import { Component } from "./Component";
import { ComponentMetaInformation } from "./ComponentData";
import { HierarchicalMember } from "./HierarchicalMember";
import { StructuredComment } from "./StructuredComment";

export class ClassComponent extends HierarchicalMember{
    private superTypes:string[]
    constructor(lineNumber:number,name:string,parent:Component|null,comment:StructuredComment|null,meta:ComponentMetaInformation,superTypes:string[]){
        super(lineNumber,name,parent,comment,meta);
        this.superTypes=superTypes;
    }
    getSuperTypes():string[]{
        return this.superTypes;
    }
}