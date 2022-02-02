"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IgnoreGetterSetterMetric = void 0;
const method_component_1 = require("../../parser/parse_result/method_component");
/**
 * This class expose a shallConsider method to ignore getters and setters
 */
class IgnoreGetterSetterMetric {
    shallConsider(component, params) {
        if (component instanceof method_component_1.MethodComponent) {
            return !this.isGetter(component, params) && !this.isSetter(component, params);
        }
        else {
            return true;
        }
    }
    isGetter(component, params) {
        let name = component.getName();
        let nameValid = name.match(params.getter_pattern) != null;
        let noParameter = component.getParams().length == 0;
        let hasReturnType = component.getReturnType() != "void";
        return nameValid && noParameter && hasReturnType;
    }
    isSetter(component, params) {
        let name = component.getName();
        let nameValid = name.match(params.setter_pattern) != null;
        let oneParameter = component.getParams().length == 1;
        let hasNoReturnType = component.getReturnType() == "void";
        return nameValid && oneParameter && hasNoReturnType;
    }
}
exports.IgnoreGetterSetterMetric = IgnoreGetterSetterMetric;
//# sourceMappingURL=ignore_getters_setter_metric.js.map