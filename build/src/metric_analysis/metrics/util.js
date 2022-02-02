"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
/**
 * collection of utility methods that are shared
 */
var Utils;
(function (Utils) {
    function boundedGrowth(S, B0, k, l) {
        return S - (S - B0) * Math.exp(-k * l);
    }
    Utils.boundedGrowth = boundedGrowth;
})(Utils = exports.Utils || (exports.Utils = {}));
//# sourceMappingURL=util.js.map