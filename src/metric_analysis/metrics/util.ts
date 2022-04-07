/**
 * collection of utility methods that are shared
 */
export namespace Utils {
    /**
     * Represent a bounded growth function
     * @param S the limit of this function, the result get closer to this value
     * @param B0 the start value
     * @param k a growth factor
     * @param l the variable as the input
     * @returns a number that approaches {@code S}
     */
    export function boundedGrowth(S: number, B0: number, k: number, l: number): number {
        return S - (S - B0) * Math.exp(-k * l);

    }
}