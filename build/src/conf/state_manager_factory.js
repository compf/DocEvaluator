"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateManagerFactory = void 0;
const file_state_manager_1 = require("./file_state_manager");
var StateManagerFactory;
(function (StateManagerFactory) {
    /**
     * Creates a state manager based on a string
     * @param name a name to identify the state manager
     * @param workingDirectory the directory where the documentation analysis is happening
     * @returns a valid state manager
     */
    function load(name, workingDirectory) {
        switch (name) {
            case "file":
                return new file_state_manager_1.FileStateManager(workingDirectory);
            default:
                throw new Error("Could find state manager " + name);
        }
    }
    StateManagerFactory.load = load;
})(StateManagerFactory = exports.StateManagerFactory || (exports.StateManagerFactory = {}));
//# sourceMappingURL=state_manager_factory.js.map