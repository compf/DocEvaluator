
import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { StateManager } from "./state_manager";
const STATE_PATH = ".evaluator_last_state.txt"
/**
 * Saves the state in a file called ".evaluator_last_state.txt"
 * This file can be pushed to GitHub so that it will persist
 */
export class FileStateManager implements StateManager {
    path: string;
    save(num: number): void {
        writeFileSync(this.path, num + "");
    }
    constructor(workingDirectory: string) {
        this.path = join(workingDirectory, STATE_PATH);
    }
    relativeLossTooHigh(newResult:number,relativeThreshold:number): boolean{
        if (existsSync(this.path)) {
            let lastResult= parseFloat(readFileSync(this.path).toString());
            return  lastResult > newResult && Math.abs(lastResult - newResult) >= relativeThreshold;
        }
        else {
            return false;
        }

    }

}