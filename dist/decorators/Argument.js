"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_argument_model_1 = require("../attribute_models/date_argument_model");
var string_argument_model_1 = require("../attribute_models/string_argument_model");
var errors_1 = require("../errors");
var getDesignTypeMetadata_1 = require("../functions/getDesignTypeMetadata");
var world_1 = require("../world");
var addString = function (contextSpec, key, options) {
    var modelOptions = {};
    Object.assign(modelOptions, options);
    var model = new string_argument_model_1.StringArgumentModel(key, modelOptions);
    contextSpec.setArgumentModel(model);
};
var addDate = function (contextSpec, key, options) {
    var modelOptions = {};
    Object.assign(modelOptions, options);
    var model = new date_argument_model_1.DateArgumentModel(key, modelOptions);
    contextSpec.setArgumentModel(model);
};
function Argument(options) {
    return function (target, propertyKey, descriptor) {
        var contextSpec = world_1.WORLD.getContextSpecOfClass(target.constructor);
        options = options ? options : {};
        var type = options.type || getDesignTypeMetadata_1.getDesignTypeMetadata(target, propertyKey);
        switch (type) {
            case String:
                addString(contextSpec, propertyKey, options);
                break;
            case Date:
                addDate(contextSpec, propertyKey, options);
                break;
            default:
                throw new errors_1.UnknownAttributeTypeError(target.constructor, propertyKey, type);
        }
    };
}
exports.Argument = Argument;
//# sourceMappingURL=Argument.js.map