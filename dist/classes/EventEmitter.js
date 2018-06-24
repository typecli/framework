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
Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitterImpl = require("events");
var EventEmitter = (function () {
    function EventEmitter() {
        this.emitter = new EventEmitterImpl();
        this.listenerWrappers = new Map();
    }
    EventEmitter.prototype.addListenerWrapper = function (event, listener, wrapper) {
        var listeners = this.listenerWrappers.get(event);
        if (!listeners) {
            listeners = new Map();
            this.listenerWrappers.set(event, listeners);
        }
        var wrappers = listeners.get(listener);
        if (!wrappers) {
            wrappers = [];
            listeners.set(listener, wrappers);
        }
        wrappers.push(wrapper);
    };
    EventEmitter.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.emitter).emit.apply(_a, [event.name, event].concat(args));
        var _a;
    };
    EventEmitter.prototype.off = function (event, listener) {
        this.removeListenerWrapper(event, listener);
    };
    EventEmitter.prototype.on = function (event, listener) {
        var wrapper = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            listener.apply(undefined, args);
        };
        this.emitter.on(event, wrapper);
        this.addListenerWrapper(event, listener, wrapper);
        return this;
    };
    EventEmitter.prototype.once = function (event, listener) {
        var wrapper = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            listener.apply(undefined, args);
        };
        this.emitter.once(event, wrapper);
        this.addListenerWrapper(event, listener, wrapper);
        return this;
    };
    EventEmitter.prototype.removeListenerWrapper = function (event, listener) {
        var _this = this;
        var listeners = this.listenerWrappers.get(event);
        if (listeners) {
            var wrappers = listeners.get(listener);
            if (wrappers) {
                wrappers.forEach(function (e) {
                    _this.emitter.removeListener(event, e);
                });
            }
        }
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
var AttributeParserEventEmitter = (function (_super) {
    __extends(AttributeParserEventEmitter, _super);
    function AttributeParserEventEmitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AttributeParserEventEmitter;
}(EventEmitter));
exports.AttributeParserEventEmitter = AttributeParserEventEmitter;
//# sourceMappingURL=EventEmitter.js.map