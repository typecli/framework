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
var mixin_decorator_1 = require("@typescript-plus/mixin-decorator");
var _1 = require("../");
var mixins_1 = require("../classes/attribute_model/mixins");
var AttributeModel_1 = require("../classes/AttributeModel");
var EventEmitter_1 = require("../classes/EventEmitter");
var DATE_ARGUMENT_PARSER_EVENTS = new EventEmitter_1.AttributeParserEventEmitter();
var DateOptionModel = (function (_super) {
    __extends(DateOptionModel, _super);
    function DateOptionModel(key, options) {
        var _this = _super.call(this, key) || this;
        _this.options = options;
        _this.classEvents = DATE_ARGUMENT_PARSER_EVENTS;
        _this.events = new EventEmitter_1.AttributeParserEventEmitter();
        _this.hasOptionParameter = true;
        return _this;
    }
    DateOptionModel.prototype.extractOptionAndStore = function (parser, name) {
        if (parser.cursor.left < 2) {
            throw new _1.UndefinedOptionValueError(parser, this, name);
        }
        parser.context[this.key] = new Date(parser.cursor.at(1));
        return 2;
    };
    DateOptionModel.prototype.optionNameMatches = function (name) {
        return this.optionNames.indexOf(name) !== -1;
    };
    DateOptionModel.prototype.preinitialize = function (parser) { };
    DateOptionModel = __decorate([
        mixin_decorator_1.Mixin(mixins_1.AttributeModel_defaultValue),
        mixin_decorator_1.Mixin(AttributeModel_1.AttributeModel_optionNames)
    ], DateOptionModel);
    return DateOptionModel;
}(AttributeModel_1.AttributeModel));
exports.DateOptionModel = DateOptionModel;
//# sourceMappingURL=date_option_model.js.map