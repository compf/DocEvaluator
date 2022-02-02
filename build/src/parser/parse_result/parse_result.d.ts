import { FileComponent } from "./file_component";
/**
 * The ParseResult has the file path and the respective component that contains all components of that file
 */
export declare type ParseResult = {
    root: FileComponent;
    path: string;
};
