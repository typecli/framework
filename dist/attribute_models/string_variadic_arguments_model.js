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
var mixins_1 = require("../classes/attribute_model/mixins");
var AttributeModel_1 = require("../classes/AttributeModel");
var EventEmitter_1 = require("../classes/EventEmitter");
var events_1 = require("../events");
var STRING_VARIADIC_ARGUMENTS_PARSER_EVENTS = new EventEmitter_1.AttributeParserEventEmitter();
STRING_VARIADIC_ARGUMENTS_PARSER_EVENTS.on(events_1.ATTRIBUTE_PARSER_EVENT.INITIALIZE, function (event) {
    event.parser.context[event.model.key] = [];
}).on(events_1.ATTRIBUTE_PARSER_EVENT.VALIDATE, function (event) {
});
var StringVariadicArgumentsModel = (function (_super) {
    __extends(StringVariadicArgumentsModel, _super);
    function StringVariadicArgumentsModel(key, options) {
        var _this = _super.call(this, key) || this;
        _this.options = options;
        _this.classEvents = STRING_VARIADIC_ARGUMENTS_PARSER_EVENTS;
        _this.events = new EventEmitter_1.AttributeParserEventEmitter();
        return _this;
    }
    StringVariadicArgumentsModel.prototype.extractArgumentAndStore = function (parser) {
        parser.context[this.key].push(parser.cursor.at(0));
        return 1;
    };
    StringVariadicArgumentsModel.prototype.preinitialize = function (parser) { };
    StringVariadicArgumentsModel = __decorate([
        mixin_decorator_1.Mixin(mixins_1.AttributeModel_variableName),
        mixin_decorator_1.Mixin(mixins_1.AttributeModel_minimumElementCount)
    ], StringVariadicArgumentsModel);
    return StringVariadicArgumentsModel;
}(AttributeModel_1.AttributeModel));
exports.StringVariadicArgumentsModel = StringVariadicArgumentsModel;
//# sourceMappingURL=string_variadic_arguments_model.js.map