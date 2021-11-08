import { Accessibility, Component } from "./Component";
import { ComponentMetaInformation } from "./ComponentData";
import { StructuredComment } from "./StructuredComment";
export class HierarchicalComponent extends Component{
    private children:Component[];
    addChild(child:Component){
        this.children.push(child);
    }
    getChildren():Component[]{
        return this.children;
    }
    constructor(lineNumber:number,name:string,parent:Component|null,comment:StructuredComment|null,meta:ComponentMetaInformation){
        super(lineNumber,name,parent,comment,meta)
        this.children=[];
    }
    
}