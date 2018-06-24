"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParserCursor = (function () {
    function ParserCursor(parser, index) {
        if (index === void 0) { index = 0; }
        this.parser = parser;
        this.index = index;
    }
    Object.defineProperty(ParserCursor.prototype, "args", {
        get: function () {
            return this.parser.args;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParserCursor.prototype, "left", {
        get: function () {
            return this.length - this.index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParserCursor.prototype, "length", {
        get: function () {
            return this.args.length;
        },
        enumerable: true,
        configurable: true
    });
    ParserCursor.prototype.at = function (offset) {
        return this.args[this.index + offset];
    };
    ParserCursor.prototype.next = function (size) {
        var sliced = this.args.slice(this.index, this.index + size);
        this.index += size;
        return sliced;
    };
    ParserCursor.prototype.slice = function (start) {
        if (start === void 0) { start = 0; }
        return this.args.slice(this.index + start);
    };
    return ParserCursor;
}());
exports.ParserCursor = ParserCursor;
//# sourceMappingURL=ParserCursor.js.map