import fs from "fs"
import path from "path"
import minimatch, { IMinimatch, Minimatch } from "minimatch"
import chalk from "chalk";
import { EvaluatorConf } from "../conf/EvaluatorConf";
const MiniMatchConf = { dot: true, matchBase: true };



/**
 * This class will be used to find all files in a directory( and subdirectories)
 * You can only consider some files that match the include pattern and ignore all files that match the exclude pattern
 * 
 * The include and exclude pattern must be defined in a file ".comment_conf.json" in the base directory of the search
 * If no such file is present, default configuration will be used 
 */
export class DirectoryTraverser {
    private basePath: string;
    private conf: {exclude:string[],include:string[]};
    /**
     * 
     * @param basePath The path to the directory where traversing should start
     */
    constructor(basePath: string, jsonObject:{exclude:string[],include:string[]}) {
        this.basePath = basePath;
        this.conf=jsonObject;
        // Add all include/exclude items from the conf to the array
        // which contains Minimatch objects, this will done for caching and preventing
        // to create Minimatch objects for each file
        for(let include of this.conf.include){
            this.includeItems.push(new Minimatch(include,MiniMatchConf));
        }
        for(let exclude of this.conf.exclude){
            this.excludeItems.push(new Minimatch(exclude,MiniMatchConf));
        }
    }


    /**
     * Traverse the directory and return all relevant files recursively
     * @returns A set of all absolute filenames of all relevant files
     */
    public getRelevantFiles(): Set<string> {
        let resultSet = new Set<string>();
        this.getRelevantFilesRec(this.basePath, resultSet);
        return resultSet;
    }
    private excludeItems:IMinimatch[]=[]
    private includeItems:IMinimatch[]=[]
    /**
     * Determine if a file should be ignored
     * @param filename the filename to check
     * @returns true if file matched an exclude pattern or no include pattern, else false
     */
    private shallIgnore(filename: string): boolean {
        let exclude = this.excludeItems.some((v) => v.match(filename));
        let include = this.includeItems.some((v) => v.match(filename));
        return exclude || !include;
    }
    /**
     * Recursively traverse through the directory and find all relavant files
     * @param baseDir the current directory to enumerate the files there
     * @param resultSet will be filled during the recursion to store all relevant files
     */
    private getRelevantFilesRec(baseDir: string, resultSet: Set<String>): void {
        let entries = fs.readdirSync(baseDir, { withFileTypes: true });
        for (let entry of entries) {
            let fullname = path.join(baseDir, entry.name);
            let relName = path.relative(this.basePath, fullname);
            if (entry.isDirectory()) {
                this.getRelevantFilesRec(fullname, resultSet);
            }
            else {
                if (this.shallIgnore(relName)) {
                    continue;
                }
                resultSet.add(fullname);
            }
        }


    }
}