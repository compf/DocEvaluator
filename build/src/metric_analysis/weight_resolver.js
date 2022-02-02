"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultFallbackResolver = exports.StubResolver = exports.PathWeightResolver = exports.SimpleWeightResolver = void 0;
const minimatch_1 = require("minimatch");
const EvaluatorConf_1 = require("../conf/EvaluatorConf");
/**
 * Simple implementation of the WeightResolver by using a Map. Will be used for metrics
 */
class SimpleWeightResolver {
    constructor(weightMap) {
        this.weightMap = weightMap;
    }
    resolveWeight(key) {
        return this.weightMap.get(key);
    }
}
exports.SimpleWeightResolver = SimpleWeightResolver;
/**
 * Used to assign a unix path glob a weight, so that not every file needs to have a weight
 */
class PathWeightResolver {
    constructor(map, defaultWeight) {
        this.miniMatchMap = new Map();
        for (let path_weight of map) {
            let match = new minimatch_1.Minimatch(path_weight.path, EvaluatorConf_1.MiniMatchConf);
            this.miniMatchMap.set(match, path_weight.weight);
        }
        this.defaultWeight = defaultWeight;
    }
    resolveWeight(key) {
        const path = key;
        for (let mm_weight of this.miniMatchMap) {
            if (mm_weight[0].match(path)) {
                return mm_weight[1];
            }
        }
        return this.defaultWeight;
    }
}
exports.PathWeightResolver = PathWeightResolver;
/**
 * Stub class that always returns 1, regardless of the key
 */
class StubResolver {
    resolveWeight(key) {
        return 1;
    }
}
exports.StubResolver = StubResolver;
class DefaultFallbackResolver {
    constructor(map, defaultWeight) {
        this.defaultWeight = defaultWeight;
        this.map = new Map();
        for (let o of map) {
            this.map.set(o.name, o.weight);
        }
    }
    resolveWeight(key) {
        if (this.map.has(key)) {
            return this.map.get(key);
        }
        else {
            return this.defaultWeight;
        }
    }
}
exports.DefaultFallbackResolver = DefaultFallbackResolver;
//# sourceMappingURL=weight_resolver.js.map