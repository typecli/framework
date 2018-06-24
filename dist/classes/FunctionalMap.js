"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IterableIterate_1 = require("./IterableIterate");
var FunctionalMap = (function () {
    function FunctionalMap(arg) {
        this._map = new Map(arg);
    }
    Object.defineProperty(FunctionalMap.prototype, "size", {
        get: function () {
            return this._map.size;
        },
        enumerable: true,
        configurable: true
    });
    FunctionalMap.prototype.copy = function () {
        return new FunctionalMap(this.entries());
    };
    FunctionalMap.prototype.entries = function () {
        return this._map.entries();
    };
    FunctionalMap.prototype.every = function (predicate) {
        var _this = this;
        var it = new IterableIterate_1.IterableIterate(this.entries());
        return it.iterate(function (item, index, breaker) {
            var k = item[0], v = item[1];
            if (!predicate(v, k, _this)) {
                breaker.break(false);
            }
        }, true);
    };
    FunctionalMap.prototype.filter = function (predicate) {
        var _this = this;
        var result = new FunctionalMap();
        var it = new IterableIterate_1.IterableIterate(this.entries());
        it.iterate(function (item, index) {
            var k = item[0], v = item[1];
            if (predicate(v, k, _this)) {
                result.set(k, v);
            }
        }, undefined);
        return result;
    };
    FunctionalMap.prototype.find = function (predicate) {
        var _this = this;
        var it = new IterableIterate_1.IterableIterate(this.entries());
        return it.iterate(function (item, index, breaker) {
            var k = item[0], v = item[1];
            if (predicate(v, k, _this)) {
                breaker.break(v);
            }
        }, undefined);
    };
    FunctionalMap.prototype.forEach = function (callbackfn, thisArg) {
        var _this = this;
        this._map.forEach(function (value, key, map) {
            callbackfn(value, key, _this);
        }, thisArg);
    };
    FunctionalMap.prototype.get = function (key) {
        return this._map.get(key);
    };
    FunctionalMap.prototype.set = function (key, value) {
        this._map.set(key, value);
        return this;
    };
    FunctionalMap.prototype.some = function (predicate) {
        var _this = this;
        var it = new IterableIterate_1.IterableIterate(this.entries());
        return it.iterate(function (item, index, breaker) {
            var k = item[0], v = item[1];
            if (predicate(v, k, _this)) {
                breaker.break(true);
            }
        }, false);
    };
    FunctionalMap.prototype.values = function () {
        return this._map.values();
    };
    return FunctionalMap;
}());
exports.FunctionalMap = FunctionalMap;
//# sourceMappingURL=FunctionalMap.js.map