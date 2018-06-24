"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parser_1 = require("../classes/Parser");
function parseSync(context, args) {
    var parser = new Parser_1.Parser(context, args);
    parser.parseSync();
    return parser;
}
exports.parseSync = parseSync;
//# sourceMappingURL=parseSync.js.map