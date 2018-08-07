"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fast_memoize_decorator_1 = require("@typescript-plus/fast-memoize-decorator");
var Case = require("case");
var FunctionalMap_1 = require("./FunctionalMap");
var ContextSpec = (function () {
    function ContextSpec(klass) {
        this.klass = klass;
        this.arguments = new FunctionalMap_1.FunctionalMap();
        this.attributeModels = new FunctionalMap_1.FunctionalMap();
        this.handlerMethods = new FunctionalMap_1.FunctionalMap();
        this.options = new FunctionalMap_1.FunctionalMap();
        this.subspecs = [];
    }
    Object.defineProperty(ContextSpec.prototype, "caption", {
        get: function () {
            var help = this.helpData;
            return help ? help.options.caption : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextSpec.prototype, "commandName", {
        get: function () {
            return Case.kebab(this.klass.name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextSpec.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (v) {
            this._parent = v;
        },
        enumerable: true,
        configurable: true
    });
    ContextSpec.prototype.addSubspec = function (spec) {
        this.subspecs.push(spec);
        spec.parent = this;
    };
    ContextSpec.prototype.createInstance = function () {
        return new this.klass();
    };
    ContextSpec.prototype.setArgumentModel = function (model) {
        this.attributeModels.set(model.key, model);
        this.arguments.set(model.key, model);
    };
    ContextSpec.prototype.setHandlerMethod = function (handler) {
        this.handlerMethods.set(handler.targetKey, handler);
    };
    ContextSpec.prototype.setHelpData = function (data) {
        this.helpData = data;
    };
    ContextSpec.prototype.setOptionModel = function (model) {
        this.attributeModels.set(model.key, model);
        this.options.set(model.key, model);
    };
    ContextSpec.prototype.setRunMethod = function (method) {
        this.runMethod = method;
    };
    ContextSpec.prototype.setTerminatorModel = function (model) {
        this.attributeModels.set(model.key, model);
        this.terminator = model;
    };
    ContextSpec.prototype.setVariadicArgumentsModel = function (model) {
        this.attributeModels.set(model.key, model);
        this.variadicArguments = model;
    };
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], ContextSpec.prototype, "caption", null);
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], ContextSpec.prototype, "commandName", null);
    return ContextSpec;
}());
exports.ContextSpec = ContextSpec;
//# sourceMappingURL=ContextSpec.js.map