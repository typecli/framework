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
var fast_memoize_decorator_1 = require("@typescript-plus/fast-memoize-decorator");
var mixin_decorator_1 = require("@typescript-plus/mixin-decorator");
var mixins_1 = require("../classes/attribute_model/mixins");
var AttributeModel_1 = require("../classes/AttributeModel");
var EventEmitter_1 = require("../classes/EventEmitter");
var events_1 = require("../events");
var PARSER_EVENTS = new EventEmitter_1.AttributeParserEventEmitter();
PARSER_EVENTS.on(events_1.ATTRIBUTE_PARSER_EVENT.INITIALIZE, function (event) {
    event.parser.context[event.model.key] = event.model.defaultValue;
});
var BooleanOptionModel = (function (_super) {
    __extends(BooleanOptionModel, _super);
    function BooleanOptionModel(key, options) {
        var _this = _super.call(this, key) || this;
        _this.options = options;
        _this.classEvents = PARSER_EVENTS;
        _this.events = new EventEmitter_1.AttributeParserEventEmitter();
        _this.hasOptionParameter = false;
        return _this;
    }
    Object.defineProperty(BooleanOptionModel.prototype, "negatedOptionNames", {
        get: function () {
            var not = this.options.not;
            return not ? not : [];
        },
        enumerable: true,
        configurable: true
    });
    BooleanOptionModel.prototype.extractOptionAndStore = function (parser, name) {
        parser.context[this.key] = this.optionNames.indexOf(name) !== -1;
        return 1;
    };
    BooleanOptionModel.prototype.optionNameMatches = function (name) {
        return this.optionNames.indexOf(name) !== -1 || this.negatedOptionNames.indexOf(name) !== -1;
    };
    BooleanOptionModel.prototype.preinitialize = function (parser) { };
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], BooleanOptionModel.prototype, "negatedOptionNames", null);
    BooleanOptionModel = __decorate([
        mixin_decorator_1.Mixin(mixins_1.AttributeModel_defaultValue),
        mixin_decorator_1.Mixin(mixins_1.AttributeModel_description),
        mixin_decorator_1.Mixin(AttributeModel_1.AttributeModel_optionNames)
    ], BooleanOptionModel);
    return BooleanOptionModel;
}(AttributeModel_1.AttributeModel));
exports.BooleanOptionModel = BooleanOptionModel;
//# sourceMappingURL=boolean_option_model.js.map