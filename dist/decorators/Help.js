"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelpData_1 = require("../classes/HelpData");
var world_1 = require("../world");
function Help(options) {
    return function (constructor) {
        world_1.WORLD.getContextSpecOfClass(constructor).setHelpData(new HelpData_1.HelpData(constructor, options ? options : {}));
        return constructor;
    };
}
exports.Help = Help;
//# sourceMappingURL=Help.js.map