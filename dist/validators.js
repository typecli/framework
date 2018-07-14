"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("./errors");
function validateArgumentRequired(parser, model) {
    if (model.parsedValueIsMissing(parser)) {
        throw new errors_1.MissingArgumentError(parser, model);
    }
}
exports.validateArgumentRequired = validateArgumentRequired;
function validateOptionRequired(parser, model) {
    if (model.parsedValueIsMissing(parser)) {
        throw new errors_1.MissingOptionError(parser, model);
    }
}
exports.validateOptionRequired = validateOptionRequired;
//# sourceMappingURL=validators.js.map