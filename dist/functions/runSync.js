"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RunSpace_1 = require("../classes/RunSpace");
function runSync(contextClass, args, spaceOptions) {
    var space = new RunSpace_1.RunSpace(spaceOptions ? spaceOptions : {});
    space.runSync(contextClass, args ? args : []);
}
exports.runSync = runSync;
//# sourceMappingURL=runSync.js.map