"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RunSpace_1 = require("../classes/RunSpace");
var world_1 = require("../world");
function runSync(contextClass, args, spaceOptions) {
    var space = new RunSpace_1.RunSpace(spaceOptions ? spaceOptions : {});
    world_1.WORLD.runSpaces.push(space);
    try {
        space.runSync(contextClass, args ? args : []);
    }
    finally {
        world_1.WORLD.runSpaces.pop();
    }
}
exports.runSync = runSync;
//# sourceMappingURL=runSync.js.map