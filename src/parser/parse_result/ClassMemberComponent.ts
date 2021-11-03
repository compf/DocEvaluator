import { Accessibility, Component } from "./Component";
import { ComponentMetaInformation } from "./ComponentData";
import { StructuredComment } from "./StructuredComment";

export class ClassMemberComponent extends Component{
    private returnType:string;
   
    getReturnType():string{
        return this.returnType;
    }
   
    
    constructor(name:string,type:string,parent:Component|null,comment:StructuredComment|null,meta:ComponentMetaInformation){
       super(name,parent,comment,meta)
        this.returnType=type;
    }

}