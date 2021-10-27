import { Accessibility, Component } from "./Component";
import { StructuredComment } from "./StructuredComment";

export class ClassMemberComponent implements Component{
    private parent:Component|null;
    private name:string;
    private type:string;
    private comment:StructuredComment|null;
    private accessibility:Accessibility;
    private _isStatic:boolean;
    getParent(): Component|null {
        return this.parent;
    }
    getName(): string {
        return this.name;
    }
    getComment():StructuredComment|null{
        return this.comment;
    }
    isStatic():boolean{
        return this._isStatic;
    }
    getAccessibilty():Accessibility{
        return this.accessibility;
    }
    getType():string{
        return this.type;
    }
   
    
    constructor(name:string,type:string,parent:Component|null,comment:StructuredComment|null,accessibility:Accessibility,isStatic:boolean){
        this.name=name;
        this.parent=parent;
        this.comment=comment;
        this.accessibility=accessibility;
        this._isStatic=isStatic;
        this.type=type;
    }

}