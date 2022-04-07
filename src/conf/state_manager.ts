/**
 * Manager to store a number to save the last result of the documentation quality
 */
export interface StateManager {
    /**
     * Save the given number somehow
     * @param num any number
     */
    save(num: number): void;
    /**
     * checks whether the documentation quality loss is too high
     * @param newResult the new documentation quality result
     * @package relativeThreshold the maximum allowed difference between old and new value
     * @return the stored number or null if number has not been stored
     */
    relativeLossTooHigh(newResult:number,relativeThreshold:number): boolean;
}