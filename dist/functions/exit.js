"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var world_1 = require("../world");
function exit(status) {
    if (status === void 0) { status = 0; }
    world_1.WORLD.runSpaces[world_1.WORLD.runSpaces.length - 1].exit(status);
}
exports.exit = exit;
//# sourceMappingURL=exit.js.map