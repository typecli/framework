"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
var __1 = require("../");
var mixins_1 = require("../classes/attribute_model/mixins");
var AttributeModel_1 = require("../classes/AttributeModel");
var EventEmitter_1 = require("../classes/EventEmitter");
var events_1 = require("../events");
var PARSER_EVENTS = new EventEmitter_1.AttributeParserEventEmitter();
PARSER_EVENTS.on(events_1.ATTRIBUTE_PARSER_EVENT.INITIALIZE, function (event) {
    event.parser.context[event.model.key] = [];
});
var StringOptionArrayModel = (function (_super) {
    __extends(StringOptionArrayModel, _super);
    function StringOptionArrayModel(key, options) {
        var _this = _super.call(this, key) || this;
        _this.options = options;
        _this.classEvents = PARSER_EVENTS;
        _this.events = new EventEmitter_1.AttributeParserEventEmitter();
        _this.hasOptionParameter = true;
        return _this;
    }
    StringOptionArrayModel.prototype.extractOptionAndStore = function (parser, name) {
        if (parser.cursor.left < 2) {
            throw new __1.UndefinedOptionValueError(parser, this, name);
        }
        parser.context[this.key].push(parser.cursor.at(1));
        return 2;
    };
    StringOptionArrayModel.prototype.optionNameMatches = function (name) {
        return this.optionNames.indexOf(name) !== -1;
    };
    StringOptionArrayModel.prototype.preinitialize = function (parser) { };
    StringOptionArrayModel = __decorate([
        mixin_decorator_1.Mixin(mixins_1.AttributeModel_optionArrayNames)
    ], StringOptionArrayModel);
    return StringOptionArrayModel;
}(AttributeModel_1.AttributeModel));
exports.StringOptionArrayModel = StringOptionArrayModel;
//# sourceMappingURL=string_option_array_model.js.map