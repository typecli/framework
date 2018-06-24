"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapByArray(v) {
    if (v instanceof Array) {
        return v;
    }
    if (v === undefined) {
        return new Array();
    }
    return [v];
}
exports.wrapByArray = wrapByArray;
//# sourceMappingURL=wrapByArray.js.map