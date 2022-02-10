
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
    load(): number | null {
        if (existsSync(this.path)) {
            return parseFloat(readFileSync(this.path).toString());
        }
        else {
            return null;
        }

    }

}