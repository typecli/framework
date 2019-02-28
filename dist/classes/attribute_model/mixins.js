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
var pluralize = require("pluralize");
var AttributeModel_defaultValue = (function () {
    function AttributeModel_defaultValue() {
    }
    Object.defineProperty(AttributeModel_defaultValue.prototype, "defaultValue", {
        get: function () {
            return this.options.default;
        },
        enumerable: true,
        configurable: true
    });
    return AttributeModel_defaultValue;
}());
exports.AttributeModel_defaultValue = AttributeModel_defaultValue;
var AttributeModel_description = (function () {
    function AttributeModel_description() {
    }
    Object.defineProperty(AttributeModel_description.prototype, "description", {
        get: function () {
            return this.options.desc;
        },
        enumerable: true,
        configurable: true
    });
    return AttributeModel_description;
}());
exports.AttributeModel_description = AttributeModel_description;
var AttributeModel_minimumElementCount = (function () {
    function AttributeModel_minimumElementCount() {
    }
    Object.defineProperty(AttributeModel_minimumElementCount.prototype, "minimumElementCount", {
        get: function () {
            return this.options.min;
        },
        enumerable: true,
        configurable: true
    });
    return AttributeModel_minimumElementCount;
}());
exports.AttributeModel_minimumElementCount = AttributeModel_minimumElementCount;
var AttributeModel_optionArrayNames = (function () {
    function AttributeModel_optionArrayNames() {
    }
    Object.defineProperty(AttributeModel_optionArrayNames.prototype, "optionNames", {
        get: function () {
            var names = this.options.name;
            if (Array.isArray(names)) {
                return names;
            }
            if (names !== undefined) {
                return [names];
            }
            var name = pluralize.singular(this.key);
            return [name.length === 1 ? "-" + name : "--" + name];
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], AttributeModel_optionArrayNames.prototype, "optionNames", null);
    return AttributeModel_optionArrayNames;
}());
exports.AttributeModel_optionArrayNames = AttributeModel_optionArrayNames;
var AttributeModel_variableName = (function () {
    function AttributeModel_variableName() {
    }
    Object.defineProperty(AttributeModel_variableName.prototype, "variableName", {
        get: function () {
            var name = this.options.variableName;
            return name !== undefined ? name : Case.constant(this.key);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], AttributeModel_variableName.prototype, "variableName", null);
    return AttributeModel_variableName;
}());
exports.AttributeModel_variableName = AttributeModel_variableName;
//# sourceMappingURL=mixins.js.map