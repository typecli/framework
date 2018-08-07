"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RunMethod_1 = require("../classes/RunMethod");
var world_1 = require("../world");
function RunSync() {
    return function (target, propertyKey, descriptor) {
        world_1.WORLD.getContextSpecOfClass(target.constructor).setRunSyncMethod(new RunMethod_1.RunMethod(propertyKey));
    };
}
exports.RunSync = RunSync;
//# sourceMappingURL=RunSync.js.map