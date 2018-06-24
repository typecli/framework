"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var string_variadic_arguments_model_1 = require("../attribute_models/string_variadic_arguments_model");
var errors_1 = require("../errors");
var world_1 = require("../world");
var addString = function (contextSpec, key, options) {
    var modelOptions = {};
    Object.assign(modelOptions, options);
    var model = new string_variadic_arguments_model_1.StringVariadicArgumentsModel(key, modelOptions);
    contextSpec.setVariadicArgumentsModel(model);
};
function Variadic(options) {
    return function (target, propertyKey, descriptor) {
        var contextSpec = world_1.WORLD.getContextSpecOfClass(target.constructor);
        options = options ? options : {};
        var type = options.type || String;
        switch (type) {
            case String:
                addString(contextSpec, propertyKey, options);
                break;
            default:
                throw new errors_1.UnknownAttributeTypeError(target.constructor, propertyKey, type);
        }
    };
}
exports.Variadic = Variadic;
//# sourceMappingURL=Variadic.js.map