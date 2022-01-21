/**
 * Manager to store a number to save the last result of the documentation quality
 */
export interface StateManager{
    /**
     * Save the given number somehow
     * @param num any number
     */
    save(num:number):void;
    /**
     * gets the stored number o null if no number was stored
     * @return the stored number or null if number has not been stored
     */
    load():number|null;
}