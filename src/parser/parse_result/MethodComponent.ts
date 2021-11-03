import {  ClassMemberComponent } from "./ClassMemberComponent";
import { Accessibility, Component } from "./Component";
import { ComponentMetaInformation } from "./ComponentData";
import { StructuredComment } from "./StructuredComment";

export class MethodComponent  extends ClassMemberComponent{
    private params: { type: string; name: string; }[];
    constructor(name:string,type:string,parent:Component|null,comment:StructuredComment|null,meta:ComponentMetaInformation,params:{type:string,name:string}[]){
        super(name,type,parent,comment,meta);
        this.params=params;
    }
    getParams():{type:string,name:string}[]{
        return this.params;
    }

}