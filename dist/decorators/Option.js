"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var boolean_option_model_1 = require("../attribute_models/boolean_option_model");
var date_option_model_1 = require("../attribute_models/date_option_model");
var string_option_model_1 = require("../attribute_models/string_option_model");
var errors_1 = require("../errors");
var getDesignTypeMetadata_1 = require("../functions/getDesignTypeMetadata");
var world_1 = require("../world");
var addString = function (contextSpec, key, options) {
    var modelOptions = {};
    Object.assign(modelOptions, options);
    var model = new string_option_model_1.StringOptionModel(key, modelOptions);
    contextSpec.setOptionModel(model);
};
var addBoolean = function (contextSpec, key, options) {
    var modelOptions = {};
    Object.assign(modelOptions, options);
    var model = new boolean_option_model_1.BooleanOptionModel(key, modelOptions);
    contextSpec.setOptionModel(model);
};
var addDate = function (contextSpec, key, options) {
    var modelOptions = {};
    Object.assign(modelOptions, options);
    var model = new date_option_model_1.DateOptionModel(key, modelOptions);
    contextSpec.setOptionModel(model);
};
function Option(options) {
    return function (target, propertyKey, descriptor) {
        var contextSpec = world_1.WORLD.getContextSpecOfClass(target.constructor);
        options = options ? options : {};
        var type = options.type || getDesignTypeMetadata_1.getDesignTypeMetadata(target, propertyKey);
        switch (type) {
            case String:
                addString(contextSpec, propertyKey, options);
                break;
            case Boolean:
                addBoolean(contextSpec, propertyKey, options);
                break;
            case Date:
                addDate(contextSpec, propertyKey, options);
                break;
            default:
                throw new errors_1.UnknownAttributeTypeError(target.constructor, propertyKey, type);
        }
    };
}
exports.Option = Option;
//# sourceMappingURL=Option.js.map