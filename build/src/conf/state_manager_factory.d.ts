import { StateManager } from "./state_manager";
export declare namespace StateManagerFactory {
    /**
     * Creates a state manager based on a string
     * @param name a name to identify the state manager
     * @param workingDirectory the directory where the documentation analysis is happening
     * @returns a valid state manager
     */
    function load(name: string, workingDirectory: string): StateManager;
}
