import { FileStateManager } from "./file_state_manager";
import { StateManager } from "./state_manager";

export namespace StateManagerFactory {
    /**
     * Creates a state manager based on a string
     * @param name a name to identify the state manager
     * @param workingDirectory the directory where the documentation analysis is happening
     * @returns a valid state manager
     */
    export function createStateManager(name: string, workingDirectory: string): StateManager {
        switch (name) {
            case "file":
                return new FileStateManager(workingDirectory);
            case "none":
                return new NoneStateManager();
            default:
                throw new Error("Could not find state manager " + name);
        }
    }
    /**
     * A state manager that does absolutely nothing
     */
    class NoneStateManager implements StateManager{
        relativeLossTooHigh(newResult: number, relativeThreshold: number): boolean {
            return false;
        }
        save(num: number): void {
            // do nothing
        }
       
        
    }
}