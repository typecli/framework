"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HandlerMethod_1 = require("../classes/HandlerMethod");
var world_1 = require("../world");
function Handler(fn) {
    return function (target, propertyKey, descriptor) {
        var targetKey = propertyKey.charAt(2).toLowerCase() + propertyKey.slice(3);
        world_1.WORLD.getContextSpecOfClass(target.constructor).setHandlerMethod(new HandlerMethod_1.HandlerMethod(targetKey, fn ? fn : propertyKey));
    };
}
exports.Handler = Handler;
//# sourceMappingURL=Handler.js.map