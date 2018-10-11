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
var validators_1 = require("../validators");
var STRING_ARGUMENT_PARSER_EVENTS = new EventEmitter_1.AttributeParserEventEmitter();
STRING_ARGUMENT_PARSER_EVENTS.on(events_1.ATTRIBUTE_PARSER_EVENT.VALIDATE, function (event) {
    if (event.model.options.required) {
        validators_1.validateArgumentRequired(event.parser, event.model);
    }
});
var StringArgumentModel = (function (_super) {
    __extends(StringArgumentModel, _super);
    function StringArgumentModel(key, options) {
        var _this = _super.call(this, key) || this;
        _this.options = options;
        _this.classEvents = STRING_ARGUMENT_PARSER_EVENTS;
        _this.events = new EventEmitter_1.AttributeParserEventEmitter();
        return _this;
    }
    StringArgumentModel.prototype.extractArgumentAndStore = function (parser) {
        parser.context[this.key] = parser.cursor.at(0);
        return 1;
    };
    StringArgumentModel.prototype.parsedValueIsMissing = function (parser) {
        return parser.context[this.key] === undefined;
    };
    StringArgumentModel.prototype.preinitialize = function (parser) { };
    StringArgumentModel = __decorate([
        mixin_decorator_1.Mixin(mixins_1.AttributeModel_defaultValue),
        mixin_decorator_1.Mixin(mixins_1.AttributeModel_description),
        mixin_decorator_1.Mixin(mixins_1.AttributeModel_variableName)
    ], StringArgumentModel);
    return StringArgumentModel;
}(AttributeModel_1.AttributeModel));
exports.StringArgumentModel = StringArgumentModel;
//# sourceMappingURL=string_argument_model.js.map