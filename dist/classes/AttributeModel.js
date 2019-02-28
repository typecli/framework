"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fast_memoize_decorator_1 = require("@typescript-plus/fast-memoize-decorator");
var Event_1 = require("./Event");
var AttributeModel = (function () {
    function AttributeModel(key) {
        this.key = key;
    }
    AttributeModel.prototype.emitParserEvent = function (event, parser) {
        var _this = this;
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        [this.events, this.classEvents].forEach(function (events) {
            events.emit(new Event_1.AttributeParserEvent(event, _this, parser));
        });
    };
    return AttributeModel;
}());
exports.AttributeModel = AttributeModel;
var AttributeModel_optionNames = (function () {
    function AttributeModel_optionNames() {
    }
    Object.defineProperty(AttributeModel_optionNames.prototype, "optionNames", {
        get: function () {
            var names = this.options.name;
            if (Array.isArray(names)) {
                return names;
            }
            if (names !== undefined) {
                return [names];
            }
            var name = this.key;
            return [name.length === 1 ? "-" + name : "--" + name];
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], AttributeModel_optionNames.prototype, "optionNames", null);
    return AttributeModel_optionNames;
}());
exports.AttributeModel_optionNames = AttributeModel_optionNames;
//# sourceMappingURL=AttributeModel.js.map