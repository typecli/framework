"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HandlerMethod = (function () {
    function HandlerMethod(targetKey, keyOrFn) {
        this.targetKey = targetKey;
        this.keyOrFn = keyOrFn;
    }
    HandlerMethod.prototype.call = function (context) {
        var keyOrFn = this.keyOrFn;
        if (typeof keyOrFn === 'string') {
            context[keyOrFn]();
        }
        else {
            keyOrFn.call(context);
        }
    };
    return HandlerMethod;
}());
exports.HandlerMethod = HandlerMethod;
//# sourceMappingURL=HandlerMethod.js.map