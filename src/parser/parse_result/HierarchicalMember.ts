import { Accessibility, Component } from "./Component";
import { StructuredComment } from "./StructuredComment";
export class HierarchicalMember implements Component{
    private parent:Component|null;
    private name:string;
    private comment:StructuredComment|null;
    private children:Component[];
    private accessibility:Accessibility;
    private _isStatic:boolean;
    getParent(): Component|null {
        return this.parent;
    }
    getName(): string {
        return this.name;
    }
    getComment(): StructuredComment|null {
        return this.comment;
    }
    addChild(child:Component){
        this.children.push(child);
    }
    getChildren():Component[]{
        return this.children;
    }
    getAccessibilty():Accessibility{
        return this.accessibility;
    }
    isStatic():boolean{
        return this._isStatic;
    }
    constructor(name:string,parent:Component|null,comment:StructuredComment|null,accessibilty:Accessibility,isStatic:boolean){
        this.name=name;
        this.parent=parent;
        this.comment=comment;
        this.children=[];
        this.accessibility=accessibilty;
        this._isStatic=isStatic;
    }
    
}