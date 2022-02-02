/**
 * This interface contains basic information about components
 * For example whether the component is public
 * This interface should be implemented by parsers to store important information
 */
export interface ComponentMetaInformation {
    isPublic(): boolean;
}
export declare class DefaultComponentMetaInformation implements ComponentMetaInformation {
    private _isPublic;
    constructor(isPublic: boolean);
    isPublic(): boolean;
}
