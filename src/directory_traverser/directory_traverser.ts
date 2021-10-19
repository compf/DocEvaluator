import fs from "fs"
import path from "path"
import minimatch, { Minimatch } from "minimatch"
import chalk from "chalk";
const CONF_FILENAME = "comment_conf.json";
/**
 * Contains the interface for the JSON file that holds all important information about the configuration of the tool
 */
interface JSONConf{
    include:string[],
    exclude:string[]
}
const MiniMatchConf = { dot: true, matchBase: true };
/**
 * This class contains the configuration information for the DirectoryTraverser
 */
class DirectoryTraverserConfig {
    exclude: minimatch.IMinimatch[] = [];
    include: minimatch.IMinimatch[] = ["*.java"].map((s) => new Minimatch(s, MiniMatchConf))
}
/**
 * Converts a jsonObject that contains the necessary information about the directory traverser to a equivalent 
 * DirectoryTraverserConfig
 * @param jsonObject a json Object that is compatible with the JSONConf interface
 * @returns a valid DirectorytraverserConfig that holds the converted information
 */
function convertJSONToDirectoryTraverserConf(jsonObject:JSONConf):DirectoryTraverserConfig{
    let resultObject=new DirectoryTraverserConfig();
    for(let s of jsonObject.exclude){
        resultObject.exclude.push(new Minimatch(s, MiniMatchConf));
    }
    for(let s of jsonObject.include){
        resultObject.include.push(new Minimatch(s, MiniMatchConf));
    }
    return resultObject;
}
/**
     * load the configuration from the comment_conf.json file
     * @returns A valid DirectoryTraverserConfig that is set to default values if no config file is found
     */
 function loadConfFromFile(basePath:string):DirectoryTraverserConfig {
    try {
        let jsonContent = fs.readFileSync(path.join(basePath, CONF_FILENAME)).toString();
        let jsonObject=JSON.parse(jsonContent);
        return convertJSONToDirectoryTraverserConf(jsonObject); 
    }
    catch (err) {
        console.log(chalk.yellow("No config file found. Using default values "))
    }
    return new DirectoryTraverserConfig();
}

/**
 * This class will be used to find all files in a directory( and subdirectories)
 * You can only consider some files that match the include pattern and ignore all files that match the exclude pattern
 * 
 * The include and exclude pattern must be defined in a file ".comment_conf.json" in the base directory of the search
 * If no such file is present, default configuration will be used 
 */
export class DirectoryTraverser {
    private basePath: string;
    private conf: DirectoryTraverserConfig;
    /**
     * 
     * @param basePath The path to the directory where traversing should start
     */
    constructor(basePath: string, jsonObject:JSONConf|null = null) {
        this.basePath = basePath;
        if (jsonObject != null) {
            this.conf = convertJSONToDirectoryTraverserConf(jsonObject);
        }
        else {
            this.conf = loadConfFromFile(this.basePath);
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
    /**
     * Determine if a file should be ignored
     * @param filename the filename to check
     * @returns true if file matched an exclude pattern or no include pattern, else false
     */
    private shallIgnore(filename: string): boolean {
        let exclude = this.conf.exclude.some((v) => v.match(filename));
        let include = this.conf.include.some((v) => v.match(filename));
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