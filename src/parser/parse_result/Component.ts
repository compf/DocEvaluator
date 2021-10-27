import { StructuredComment } from "./StructuredComment";
export enum Accessibility{
    Public,Protected,Private
}
export interface Component{
    getParent():Component|null;
    getName():string;
    getComment():StructuredComment|null;
    getAccessibilty():Accessibility
    isStatic():boolean;
}