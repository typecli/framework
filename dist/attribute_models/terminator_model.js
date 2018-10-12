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
Object.defineProperty(exports, "__esModule", { value: true });
var AttributeModel_1 = require("../classes/AttributeModel");
var EventEmitter_1 = require("../classes/EventEmitter");
var PARSER_EVENTS = new EventEmitter_1.AttributeParserEventEmitter();
var TerminatorModel = (function (_super) {
    __extends(TerminatorModel, _super);
    function TerminatorModel(key, terminatorKeywords, options) {
        var _this = _super.call(this, key) || this;
        _this.terminatorKeywords = terminatorKeywords;
        _this.options = options;
        _this.classEvents = PARSER_EVENTS;
        _this.events = new EventEmitter_1.AttributeParserEventEmitter();
        return _this;
    }
    TerminatorModel.prototype.preinitialize = function (parser) { };
    TerminatorModel.prototype.terminatorKeywordMatches = function (word) {
        return this.terminatorKeywords.indexOf(word) !== -1;
    };
    return TerminatorModel;
}(AttributeModel_1.AttributeModel));
exports.TerminatorModel = TerminatorModel;
//# sourceMappingURL=terminator_model.js.map