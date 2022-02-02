"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStateManager = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const STATE_PATH = ".evaluator_last_state.txt";
/**
 * Saves the state in a file called ".evaluator_last_state.txt"
 * This file can be pushed to GitHub so that it will persist
 */
class FileStateManager {
    constructor(workingDirectory) {
        this.path = (0, path_1.join)(workingDirectory, STATE_PATH);
    }
    save(num) {
        (0, fs_1.writeFileSync)(this.path, num + "");
    }
    load() {
        if ((0, fs_1.existsSync)(this.path)) {
            return parseFloat((0, fs_1.readFileSync)(this.path).toString());
        }
        else {
            return null;
        }
    }
}
exports.FileStateManager = FileStateManager;
//# sourceMappingURL=file_state_manager.js.map