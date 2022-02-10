import { IMinimatch, Minimatch } from "minimatch";
import { MiniMatchConf } from "../conf/EvaluatorConf";
/**
 * Resolves a given name to a weight
 */
export interface WeightResolver {
    /**
     * returns a weight associated with the given key
     * @param key a valid key
     * @returns a weight associated with this name. Should return a default value or throw an exception if given a unknown name
     */
    resolveWeight(key: string): number;
}
/**
 * Simple implementation of the WeightResolver by using a Map. Will be used for metrics
 */
export class SimpleWeightResolver implements WeightResolver {
    private weightMap: Map<string, number>;
    public constructor(weightMap: Map<string, number>) {
        this.weightMap = weightMap;
    }
    public resolveWeight(key: string): number {
        return this.weightMap.get(key)!;
    }
}
/**
 * Used to assign a unix path glob a weight, so that not every file needs to have a weight
 */
export class PathWeightResolver implements WeightResolver {
    private miniMatchMap: Map<IMinimatch, number> = new Map<IMinimatch, number>();
    private defaultWeight: number;
    public constructor(map: { path: string, weight: number }[], defaultWeight: number) {
        for (let path_weight of map) {
            let match = new Minimatch(path_weight.path, MiniMatchConf);
            this.miniMatchMap.set(match, path_weight.weight);
        }
        this.defaultWeight = defaultWeight;
    }
    resolveWeight(key: string): number {
        const path = key;
        for (let mm_weight of this.miniMatchMap) {
            if (mm_weight[0].match(path)) {
                return mm_weight[1];
            }
        }
        return this.defaultWeight;

    }
}
/**
 * Stub class that always returns 1, regardless of the key
 */
export class StubResolver implements WeightResolver {
    resolveWeight(key: string): number {
        return 1;
    }

}
export class DefaultFallbackResolver implements WeightResolver {
    private defaultWeight: number;
    private map: Map<string, number>
    public constructor(map: { name: string, weight: number }[], defaultWeight: number) {
        this.defaultWeight = defaultWeight;
        this.map = new Map();
        for (let o of map) {
            this.map.set(o.name, o.weight);
        }
    }
    resolveWeight(key: string): number {
        if (this.map.has(key)) {
            return this.map.get(key)!;
        }
        else {
            return this.defaultWeight;
        }
    }

}