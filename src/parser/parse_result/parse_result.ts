import { HierarchicalComponent } from "./hierarchical_component";
/**
 * The ParseResult has the file path and the respective component that contains all components of that file
 */
export type ParseResult={root:HierarchicalComponent,path:string}