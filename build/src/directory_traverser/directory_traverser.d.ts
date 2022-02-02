/**
 * This class will be used to find all files in a directory( and subdirectories)
 * You can only consider some files that match the include pattern and ignore all files that match the exclude pattern
 *
 * The include and exclude pattern must be defined in a file ".comment_conf.json" in the base directory of the search
 * If no such file is present, default configuration will be used
 */
export declare class DirectoryTraverser {
    private basePath;
    private conf;
    /**
     *
     * @param basePath The path to the directory where traversing should start
     */
    constructor(basePath: string, jsonObject: {
        exclude: string[];
        include: string[];
    });
    /**
     * Traverse the directory and return all relevant files recursively
     * @returns A set of all absolute filenames of all relevant files
     */
    getRelevantFiles(): string[];
    private excludeItems;
    private includeItems;
    /**
     * Determine if a file should be ignored
     * @param filename the filename to check
     * @returns true if file matched an exclude pattern or no include pattern, else false
     */
    private shallIgnore;
    /**
     * Recursively traverse through the directory and find all relavant files
     * @param baseDir the current directory to enumerate the files there
     * @param resultArray will be filled during the recursion to store all relevant files
     */
    private getRelevantFilesRec;
}
