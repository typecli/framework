"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var world_1 = require("../world");
function Sub(klass) {
    return function (constructor) {
        world_1.WORLD.getContextSpecOfClass(constructor).addSubspec(world_1.WORLD.getContextSpecOfClass(klass));
        return constructor;
    };
}
exports.Sub = Sub;
//# sourceMappingURL=Sub.js.map