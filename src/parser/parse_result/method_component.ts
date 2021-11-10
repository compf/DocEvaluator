import {  SingleMemberComponent } from "./single_member_component";
import { Accessibility, Component } from "./component";
import { ComponentMetaInformation } from "./component_data";
import { StructuredComment } from "./structured_comment";

export class MethodComponent  extends SingleMemberComponent{
    private params: { type: string; name: string; }[];
    constructor(lineNumber:number,name:string,type:string,parent:Component|null,comment:StructuredComment|null,meta:ComponentMetaInformation,params:{type:string,name:string}[]){
        super(lineNumber,name,type,parent,comment,meta);
        this.params=params;
    }
    getParams():{type:string,name:string}[]{
        return this.params;
    }

}