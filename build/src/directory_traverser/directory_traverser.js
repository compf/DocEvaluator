"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryTraverser = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const minimatch_1 = require("minimatch");
const EvaluatorConf_1 = require("../conf/EvaluatorConf");
/**
 * This class will be used to find all files in a directory( and subdirectories)
 * You can only consider some files that match the include pattern and ignore all files that match the exclude pattern
 *
 * The include and exclude pattern must be defined in a file ".comment_conf.json" in the base directory of the search
 * If no such file is present, default configuration will be used
 */
class DirectoryTraverser {
    /**
     *
     * @param basePath The path to the directory where traversing should start
     */
    constructor(basePath, jsonObject) {
        this.excludeItems = [];
        this.includeItems = [];
        this.basePath = basePath;
        this.conf = jsonObject;
        // Add all include/exclude items from the conf to the array
        // which contains Minimatch objects, this will done for caching and preventing
        // to create Minimatch objects for each file
        for (let include of this.conf.include) {
            this.includeItems.push(new minimatch_1.Minimatch(include, EvaluatorConf_1.MiniMatchConf));
        }
        for (let exclude of this.conf.exclude) {
            this.excludeItems.push(new minimatch_1.Minimatch(exclude, EvaluatorConf_1.MiniMatchConf));
        }
    }
    /**
     * Traverse the directory and return all relevant files recursively
     * @returns A set of all absolute filenames of all relevant files
     */
    getRelevantFiles() {
        let resultArray = [];
        this.getRelevantFilesRec(this.basePath, resultArray);
        return resultArray;
    }
    /**
     * Determine if a file should be ignored
     * @param filename the filename to check
     * @returns true if file matched an exclude pattern or no include pattern, else false
     */
    shallIgnore(filename) {
        let exclude = this.excludeItems.some((v) => v.match(filename));
        let include = this.includeItems.some((v) => v.match(filename));
        return exclude || !include;
    }
    /**
     * Recursively traverse through the directory and find all relavant files
     * @param baseDir the current directory to enumerate the files there
     * @param resultArray will be filled during the recursion to store all relevant files
     */
    getRelevantFilesRec(baseDir, resultArray) {
        let entries = fs_1.default.readdirSync(baseDir, { withFileTypes: true });
        for (let entry of entries) {
            let fullname = path_1.default.join(baseDir, entry.name);
            let relName = path_1.default.relative(this.basePath, fullname);
            if (entry.isDirectory()) {
                this.getRelevantFilesRec(fullname, resultArray);
            }
            else {
                if (this.shallIgnore(relName)) {
                    continue;
                }
                resultArray.push(fullname);
            }
        }
    }
}
exports.DirectoryTraverser = DirectoryTraverser;
//# sourceMappingURL=directory_traverser.js.map