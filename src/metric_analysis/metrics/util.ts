/**
 * collection of utility methods that are shared
 */
export namespace Utils {
    export function boundedGrowth(S: number, B0: number, k: number, l: number): number {
        return S - (S - B0) * Math.exp(-k * l);

    }
}