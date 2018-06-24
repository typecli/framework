"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var terminator_model_1 = require("../attribute_models/terminator_model");
var world_1 = require("../world");
var add = function (contextSpec, key, keywords, options) {
    var modelOptions = {};
    Object.assign(modelOptions, options);
    var model = new terminator_model_1.TerminatorModel(key, keywords, modelOptions);
    contextSpec.setTerminatorModel(model);
};
function Unparsed(keywords, options) {
    return function (target, propertyKey, descriptor) {
        var contextSpec = world_1.WORLD.getContextSpecOfClass(target.constructor);
        options = options ? options : {};
        add(contextSpec, propertyKey, keywords, options);
    };
}
exports.Unparsed = Unparsed;
//# sourceMappingURL=Unparsed.js.map