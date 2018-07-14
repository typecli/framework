"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var builtin_class_decorator_1 = require("@typescript-plus/builtin-class-decorator");
var ThisIsBugError = (function (_super) {
    __extends(ThisIsBugError, _super);
    function ThisIsBugError() {
        return _super.call(this, 'This is an unknown bug. Please report to https://github.com/typecli/framework/issues.') || this;
    }
    ThisIsBugError = __decorate([
        builtin_class_decorator_1.BuiltinClass()
    ], ThisIsBugError);
    return ThisIsBugError;
}(Error));
exports.ThisIsBugError = ThisIsBugError;
var MethodMustNotBeCalled = (function (_super) {
    __extends(MethodMustNotBeCalled, _super);
    function MethodMustNotBeCalled() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MethodMustNotBeCalled;
}(ThisIsBugError));
exports.MethodMustNotBeCalled = MethodMustNotBeCalled;
var ParserError = (function (_super) {
    __extends(ParserError, _super);
    function ParserError(parser, message) {
        var _this = _super.call(this, message) || this;
        _this.parser = parser;
        return _this;
    }
    ParserError = __decorate([
        builtin_class_decorator_1.BuiltinClass()
    ], ParserError);
    return ParserError;
}(Error));
exports.ParserError = ParserError;
var AttributeParserError = (function (_super) {
    __extends(AttributeParserError, _super);
    function AttributeParserError(parser, attributeModel, message) {
        var _this = _super.call(this, parser, message) || this;
        _this.attributeModel = attributeModel;
        return _this;
    }
    return AttributeParserError;
}(ParserError));
exports.AttributeParserError = AttributeParserError;
var MissingAttributeError = (function (_super) {
    __extends(MissingAttributeError, _super);
    function MissingAttributeError(parser, model) {
        var _this = _super.call(this, parser) || this;
        _this.model = model;
        return _this;
    }
    Object.defineProperty(MissingAttributeError.prototype, "message", {
        get: function () {
            return "Missing :";
        },
        enumerable: true,
        configurable: true
    });
    return MissingAttributeError;
}(ParserError));
exports.MissingAttributeError = MissingAttributeError;
var MissingArgumentError = (function (_super) {
    __extends(MissingArgumentError, _super);
    function MissingArgumentError(parser, model) {
        var _this = _super.call(this, parser, model) || this;
        _this.model = model;
        return _this;
    }
    Object.defineProperty(MissingArgumentError.prototype, "message", {
        get: function () {
            return "Missing argument: " + this.model.variableName;
        },
        enumerable: true,
        configurable: true
    });
    return MissingArgumentError;
}(MissingAttributeError));
exports.MissingArgumentError = MissingArgumentError;
var MissingOptionError = (function (_super) {
    __extends(MissingOptionError, _super);
    function MissingOptionError(parser, model) {
        var _this = _super.call(this, parser, model) || this;
        _this.model = model;
        return _this;
    }
    Object.defineProperty(MissingOptionError.prototype, "message", {
        get: function () {
            return "Missing option: " + this.model.optionNames[0];
        },
        enumerable: true,
        configurable: true
    });
    return MissingOptionError;
}(MissingAttributeError));
exports.MissingOptionError = MissingOptionError;
var UndefinedAttributeValueError = (function (_super) {
    __extends(UndefinedAttributeValueError, _super);
    function UndefinedAttributeValueError(parser, model, message) {
        return _super.call(this, parser, model, message) || this;
    }
    return UndefinedAttributeValueError;
}(AttributeParserError));
exports.UndefinedAttributeValueError = UndefinedAttributeValueError;
var UndefinedArgumentValueError = (function (_super) {
    __extends(UndefinedArgumentValueError, _super);
    function UndefinedArgumentValueError(parser, model) {
        return _super.call(this, parser, model) || this;
    }
    Object.defineProperty(UndefinedArgumentValueError.prototype, "message", {
        get: function () {
            return "Undefined argument: " + this.attributeModel.variableName;
        },
        enumerable: true,
        configurable: true
    });
    return UndefinedArgumentValueError;
}(UndefinedAttributeValueError));
exports.UndefinedArgumentValueError = UndefinedArgumentValueError;
var UndefinedOptionValueError = (function (_super) {
    __extends(UndefinedOptionValueError, _super);
    function UndefinedOptionValueError(parser, model, optionName) {
        var _this = _super.call(this, parser, model, "Undefined option: " + optionName) || this;
        _this.optionName = optionName;
        return _this;
    }
    return UndefinedOptionValueError;
}(UndefinedAttributeValueError));
exports.UndefinedOptionValueError = UndefinedOptionValueError;
var MultipleParameterizedOptionsError = (function (_super) {
    __extends(MultipleParameterizedOptionsError, _super);
    function MultipleParameterizedOptionsError(parser, option1, optionName1, option2, optionName2) {
        var _this = _super.call(this, parser, "Can't specify both of these options: " + optionName1 + " and " + optionName2) || this;
        _this.option1 = option1;
        _this.optionName1 = optionName1;
        _this.option2 = option2;
        _this.optionName2 = optionName2;
        return _this;
    }
    return MultipleParameterizedOptionsError;
}(ParserError));
exports.MultipleParameterizedOptionsError = MultipleParameterizedOptionsError;
var UnknownOptionError = (function (_super) {
    __extends(UnknownOptionError, _super);
    function UnknownOptionError(parser, name) {
        var _this = _super.call(this, parser, "Unknown option: " + name) || this;
        _this.parser = parser;
        return _this;
    }
    return UnknownOptionError;
}(ParserError));
exports.UnknownOptionError = UnknownOptionError;
var UnknownAttributeTypeError = (function (_super) {
    __extends(UnknownAttributeTypeError, _super);
    function UnknownAttributeTypeError(target, key, type) {
        return _super.call(this, "Unknown attribute type: " + type + " (" + key + " in " + target + ")") || this;
    }
    UnknownAttributeTypeError = __decorate([
        builtin_class_decorator_1.BuiltinClass()
    ], UnknownAttributeTypeError);
    return UnknownAttributeTypeError;
}(Error));
exports.UnknownAttributeTypeError = UnknownAttributeTypeError;
//# sourceMappingURL=errors.js.map