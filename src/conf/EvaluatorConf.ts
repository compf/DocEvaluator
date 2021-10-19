import minimatch, { Minimatch } from "minimatch"
const MiniMatchConf = { dot: true, matchBase: true };


/**
 * Contains the interface for the JSON file that holds all important information about the configuration of the tool
 */
export interface JSONConf{
    include:string[],
    exclude:string[]
}
/**
 * This class contains the configuration information for the tool
 */
export class EvaluatorConf  implements JSONConf {
    include: string[]=["*.java"];
    exclude: string[]=[];

    private includeMinimatchItems:minimatch.IMinimatch[]|null=null;
    private excludeMinimatchItems:minimatch.IMinimatch[]|null=null;
    public getIncludeItems():minimatch.IMinimatch[]{
        if(this.includeMinimatchItems==null){
            this.includeMinimatchItems=this.include.map((s)=>new minimatch.Minimatch(s,MiniMatchConf));
        }
        return this.includeMinimatchItems;
    }
    public getExcludeItems(){
        if(this.excludeMinimatchItems==null){
            this.excludeMinimatchItems=this.exclude.map((s)=>new minimatch.Minimatch(s,MiniMatchConf));
        }
        return this.excludeMinimatchItems;
    }
}