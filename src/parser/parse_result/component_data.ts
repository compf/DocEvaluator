
/**
 * This interface contains basic information about components
 * For example whether the component is public
 * This interface should be implemented by parsers to store important language specific information
 */
export interface ComponentMetaInformation {
    isPublic(): boolean;
}
export class DefaultComponentMetaInformation implements ComponentMetaInformation {
    private _isPublic: boolean

    constructor(isPublic: boolean) {
        this._isPublic = isPublic;
    }
    isPublic(): boolean {
        return this._isPublic;
    }
}