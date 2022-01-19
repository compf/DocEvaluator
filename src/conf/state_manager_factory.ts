import { FileStateManager } from "./file_state_manager";
import { StateManager } from "./state_manager";

export namespace StateManagerFactory{
    export function load(name:string,workingDirectory:string):StateManager{
        switch(name){
            case "file":
                return  new FileStateManager(workingDirectory);
            default:
                throw new Error("Could find state manager "+name);
        }
    }
}