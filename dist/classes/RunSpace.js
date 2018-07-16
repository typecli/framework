"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Exit_1 = require("../errors/Exit");
var parseSync_1 = require("../functions/parseSync");
var world_1 = require("../world");
var RunSpace = (function () {
    function RunSpace(options) {
        this.options = options;
    }
    Object.defineProperty(RunSpace.prototype, "throwsOnExit", {
        get: function () {
            return this.options.throwOnExit === true;
        },
        enumerable: true,
        configurable: true
    });
    RunSpace.prototype.exit = function (status) {
        if (status === void 0) { status = 0; }
        if (this.throwsOnExit) {
            throw new Exit_1.Exit(status);
        }
        else {
            process.exit(status);
        }
    };
    RunSpace.prototype.run = function (contextClass, args) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                world_1.WORLD.runSpaces.push(this);
                return [2, this._run(world_1.WORLD.getContextSpecOfClass(contextClass), args)
                        .then(function () {
                        world_1.WORLD.runSpaces.pop();
                    })
                        .catch(function (e) {
                        world_1.WORLD.runSpaces.pop();
                        throw e;
                    })];
            });
        });
    };
    RunSpace.prototype._run = function (contextSpec, args) {
        return __awaiter(this, void 0, void 0, function () {
            var context, parser, runMethod, runResult, subcontextSpec;
            return __generator(this, function (_a) {
                context = contextSpec.createInstance();
                parser = parseSync_1.parseSync(context, args);
                runMethod = contextSpec.runMethod;
                if (runMethod) {
                    runResult = context[runMethod.key]();
                    if (runResult !== undefined && typeof runResult.then === 'function') {
                        return [2, runResult];
                    }
                    return [2, Promise.resolve()];
                }
                subcontextSpec = parser.subcontextSpec;
                if (subcontextSpec) {
                    return [2, this._run(subcontextSpec, parser.cursor.slice())];
                }
                return [2, Promise.resolve()];
            });
        });
    };
    return RunSpace;
}());
exports.RunSpace = RunSpace;
//# sourceMappingURL=RunSpace.js.map