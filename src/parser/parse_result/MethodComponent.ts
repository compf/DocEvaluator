import {  ClassMemberComponent } from "./ClassMemberComponent";
import { Accessibility, Component } from "./Component";
import { StructuredComment } from "./StructuredComment";

export class MethodComponent  extends ClassMemberComponent{
    private isOverride:boolean;
    private params: { type: string; name: string; }[];
    constructor(name:string,type:string,parent:Component|null,comment:StructuredComment|null,accessibility:Accessibility,isStatic:boolean,isOverride:boolean,params:{type:string,name:string}[]){
        super(name,type,parent,comment,accessibility,isStatic);
        this.isOverride=isOverride;
        this.params=params;
    }
    getParams():{type:string,name:string}[]{
        return this.params;
    }

}