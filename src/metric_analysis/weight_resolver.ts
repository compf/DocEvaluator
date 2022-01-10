import { IMinimatch, Minimatch } from "minimatch";
import { MiniMatchConf } from "../conf/EvaluatorConf";

export interface WeightResolver{
    resolveWeight(key:string):number;
}
export class SimpleWeightResolver implements WeightResolver{
    private weightMap:Map<string,number>;
    public constructor(weightMap:Map<string,number>){
        this.weightMap=weightMap;
    }
    public resolveWeight(key: string): number {
        return this.weightMap.get(key)!;
    }  
}
export class PathWeightResolver implements WeightResolver{
    private miniMatchMap:Map<IMinimatch,number>=new Map<IMinimatch,number>();
    private defaultWeight:number;
    public constructor(map:{path:string,weight:number}[],defaultWeight:number){
        for(let path_weight of map){
            let match=new Minimatch(path_weight.path,MiniMatchConf);
            this.miniMatchMap.set(match,path_weight.weight);
        }
        this.defaultWeight=defaultWeight;
    }
    resolveWeight(key: string): number {
        const path=key;
        for(let mm_weight of this.miniMatchMap){
            if(mm_weight[0].match(path)){
                return mm_weight[1];
            }
        }
        return this.defaultWeight;

    }
    
}