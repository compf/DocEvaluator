import {  SingleMemberComponent } from "./single_member_component";
import {  Component } from "./component";
import { ComponentMetaInformation } from "./component_data";
import { StructuredComment } from "./structured_comment";
/**
 * A component that represent a method in an oop language
 */
export class MethodComponent  extends SingleMemberComponent{
    private params: { type: string; name: string; }[];
    private methodBody:string="";
    constructor(lineNumber:number,name:string,type:string,parent:Component|null,comment:StructuredComment|null,meta:ComponentMetaInformation,params:{type:string,name:string}[],methodBody:string){
        super(lineNumber,name,type,parent,comment,meta);
        this.params=params;
        this.methodBody=methodBody;
    }
    /**
     * Getter for the method parameters. A parameter is a simply a pair of name and type both as string
     * @returns A list of all params
     */
    getParams():{type:string,name:string}[]{
        return this.params;
    }
    getMethodBody():string{
        return this.methodBody;
    }
    getLinesOfCode(ignoreLines:string[]):number{
        return this.getMethodBody().split("\n").filter((s)=>!ignoreLines.includes( s.trim())).length;
    }

}