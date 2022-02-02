import { DefaultComponentMetaInformation } from "../component_data";
/**
 * Special data about java methods
 */
export declare class JavaMethodData extends DefaultComponentMetaInformation {
    private overriding;
    private exceptionThrown;
    constructor(isPublic: boolean, isOverriding: boolean, exceptionThrown: string[]);
    /**
     * gets all thrown exceptions as string array
     * @returns all thrown exception
     */
    getThrownException(): string[];
    /**
     * getter to check whether method is overriding
     * @returns true if the method is overriding
     */
    isOverriding(): boolean;
}
