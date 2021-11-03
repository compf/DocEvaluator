import { Accessibility, Component } from "./Component";
import { ComponentMetaInformation } from "./ComponentData";
import { StructuredComment } from "./StructuredComment";
export class HierarchicalMember extends Component{
    private children:Component[];
    addChild(child:Component){
        this.children.push(child);
    }
    getChildren():Component[]{
        return this.children;
    }
    constructor(name:string,parent:Component|null,comment:StructuredComment|null,meta:ComponentMetaInformation){
        super(name,parent,comment,meta)
        this.children=[];
    }
    
}