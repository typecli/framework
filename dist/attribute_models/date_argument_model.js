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
var mixins_1 = require("../classes/attribute_model/mixins");
var AttributeModel_1 = require("../classes/AttributeModel");
var EventEmitter_1 = require("../classes/EventEmitter");
var events_1 = require("../events");
var validators_1 = require("../validators");
var DATE_ARGUMENT_PARSER_EVENTS = new EventEmitter_1.AttributeParserEventEmitter();
DATE_ARGUMENT_PARSER_EVENTS.on(events_1.ATTRIBUTE_PARSER_EVENT.VALIDATE, function (event) {
    if (event.model.options.required) {
        validators_1.validateArgumentRequired(event.parser, event.model);
    }
});
var DateArgumentModel = (function (_super) {
    __extends(DateArgumentModel, _super);
    function DateArgumentModel(key, options) {
        var _this = _super.call(this, key) || this;
        _this.options = options;
        _this.classEvents = DATE_ARGUMENT_PARSER_EVENTS;
        _this.events = new EventEmitter_1.AttributeParserEventEmitter();
        return _this;
    }
    DateArgumentModel.prototype.extractArgumentAndStore = function (parser) {
        parser.context[this.key] = new Date(parser.cursor.at(0));
        return 1;
    };
    DateArgumentModel.prototype.parsedValueIsMissing = function (parser) {
        return parser.context[this.key] === undefined;
    };
    DateArgumentModel.prototype.preinitialize = function (parser) { };
    DateArgumentModel = __decorate([
        mixin_decorator_1.Mixin(mixins_1.AttributeModel_defaultValue),
        mixin_decorator_1.Mixin(mixins_1.AttributeModel_variableName)
    ], DateArgumentModel);
    return DateArgumentModel;
}(AttributeModel_1.AttributeModel));
exports.DateArgumentModel = DateArgumentModel;
//# sourceMappingURL=date_argument_model.js.map