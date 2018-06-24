"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var string_option_array_model_1 = require("../attribute_models/string_option_array_model");
var errors_1 = require("../errors");
var world_1 = require("../world");
var addString = function (contextSpec, key, options) {
    var modelOptions = {};
    Object.assign(modelOptions, options);
    var model = new string_option_array_model_1.StringOptionArrayModel(key, modelOptions);
    contextSpec.setOptionModel(model);
};
function Options(type, options) {
    return function (target, propertyKey, descriptor) {
        var contextSpec = world_1.WORLD.getContextSpecOfClass(target.constructor);
        options = options ? options : {};
        switch (type) {
            case String:
                addString(contextSpec, propertyKey, options);
                break;
            default:
                throw new errors_1.UnknownAttributeTypeError(target.constructor, propertyKey, type);
        }
    };
}
exports.Options = Options;
//# sourceMappingURL=Options.js.map