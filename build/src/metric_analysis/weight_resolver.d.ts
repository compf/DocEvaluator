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
export declare class SimpleWeightResolver implements WeightResolver {
    private weightMap;
    constructor(weightMap: Map<string, number>);
    resolveWeight(key: string): number;
}
/**
 * Used to assign a unix path glob a weight, so that not every file needs to have a weight
 */
export declare class PathWeightResolver implements WeightResolver {
    private miniMatchMap;
    private defaultWeight;
    constructor(map: {
        path: string;
        weight: number;
    }[], defaultWeight: number);
    resolveWeight(key: string): number;
}
/**
 * Stub class that always returns 1, regardless of the key
 */
export declare class StubResolver implements WeightResolver {
    resolveWeight(key: string): number;
}
export declare class DefaultFallbackResolver implements WeightResolver {
    private defaultWeight;
    private map;
    constructor(map: {
        name: string;
        weight: number;
    }[], defaultWeight: number);
    resolveWeight(key: string): number;
}
