"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IterableIterate = (function () {
    function IterableIterate(iterator) {
        this.iterator = iterator;
    }
    IterableIterate.prototype.iterate = function (callback, defaultResult) {
        var _loop_1 = function (i) {
            var it_1 = this_1.iterator.next();
            if (it_1.done) {
                return { value: defaultResult };
            }
            var _break = false;
            var _result;
            callback(it_1.value, i, {
                break: function (result) {
                    _break = true;
                    _result = result;
                }
            });
            if (_break) {
                return { value: _result };
            }
        };
        var this_1 = this;
        for (var i = 0;; ++i) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    return IterableIterate;
}());
exports.IterableIterate = IterableIterate;
//# sourceMappingURL=IterableIterate.js.map