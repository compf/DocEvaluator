export interface WeightResolver{
    resolveWeight(key:any):number;
}
export class SimpleWeightResolver implements WeightResolver{
    private weightMap:Map<any,number>;
    public constructor(weightMap:Map<any,number>){
        this.weightMap=weightMap;
    }
    public resolveWeight(key: any): number {
        return this.weightMap.get(key)!;
    }  
}