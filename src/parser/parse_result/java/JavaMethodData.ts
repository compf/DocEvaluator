import { DefaultComponentMetaInformation } from "../component_data";
/**
 * Special data about java methods
 */
export class JavaMethodData extends DefaultComponentMetaInformation {
    private overriding: boolean;
    private exceptionThrown: string[];
    constructor(isPublic: boolean, isOverriding: boolean, exceptionThrown: string[]) {
        super(isPublic);
        this.overriding = isOverriding;
        this.exceptionThrown = exceptionThrown;
    }
    /**
     * gets all thrown exceptions as string array
     * @returns all thrown exception
     */
    public getThrownException(){
        return this.exceptionThrown;
    }
    /**
     * getter to check whether method is overriding
     * @returns true if the method is overriding
     */
    public isOverriding():boolean{
        return this.overriding;
    }
}