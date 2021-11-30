import { FileComponent } from "./file_component";
import { HierarchicalComponent } from "./hierarchical_component";
/**
 * The ParseResult has the file path and the respective component that contains all components of that file
 */
export type ParseResult = { root: FileComponent, path: string }