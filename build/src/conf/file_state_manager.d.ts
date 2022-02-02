import { StateManager } from "./state_manager";
/**
 * Saves the state in a file called ".evaluator_last_state.txt"
 * This file can be pushed to GitHub so that it will persist
 */
export declare class FileStateManager implements StateManager {
    path: string;
    save(num: number): void;
    constructor(workingDirectory: string);
    load(): number | null;
}
