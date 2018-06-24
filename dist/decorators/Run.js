"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RunMethod_1 = require("../classes/RunMethod");
var world_1 = require("../world");
function Run() {
    return function (target, propertyKey, descriptor) {
        world_1.WORLD.getContextSpecOfClass(target.constructor).setRunMethod(new RunMethod_1.RunMethod(propertyKey));
    };
}
exports.Run = Run;
//# sourceMappingURL=Run.js.map