"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("./errors");
exports.validateAttributeRequired = function (parser, model) {
    if (model.parsedValueIsMissing(parser)) {
        throw new errors_1.MissingAttributeError(parser, model);
    }
};
//# sourceMappingURL=validators.js.map