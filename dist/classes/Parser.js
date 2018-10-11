"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var fast_memoize_decorator_1 = require("@typescript-plus/fast-memoize-decorator");
var errors_1 = require("../errors");
var events_1 = require("../events");
var world_1 = require("../world");
var ParserCursor_1 = require("./ParserCursor");
var Parser = (function () {
    function Parser(context, args) {
        this.context = context;
        this.args = args;
        this.cursor = new ParserCursor_1.ParserCursor(this);
        this.terminated = false;
        this.contextSpec = world_1.WORLD.getContextSpecOfClass(context.constructor);
    }
    Object.defineProperty(Parser.prototype, "ramainingArguments", {
        get: function () {
            return Array.from(this.contextSpec.arguments.values());
        },
        enumerable: true,
        configurable: true
    });
    Parser.prototype.callOptionHandler = function (option) {
        var method = this.contextSpec.handlerMethods.get(option.key);
        if (method !== undefined) {
            method.call(this.context);
        }
    };
    Parser.prototype.initializeAttributes = function () {
        var _this = this;
        this.contextSpec.attributeModels.forEach(function (attribute) {
            attribute.emitParserEvent(events_1.ATTRIBUTE_PARSER_EVENT.BEFORE_INITIALIZE, _this);
        });
        this.contextSpec.attributeModels.forEach(function (attribute) {
            attribute.emitParserEvent(events_1.ATTRIBUTE_PARSER_EVENT.INITIALIZE, _this);
        });
        this.contextSpec.attributeModels.forEach(function (attribute) {
            attribute.emitParserEvent(events_1.ATTRIBUTE_PARSER_EVENT.AFTER_INITIALIZE, _this);
        });
    };
    Parser.prototype.parse = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.parseSync();
                return [2];
            });
        });
    };
    Parser.prototype.parseArgs = function () {
        for (var arg = this.cursor.at(0); arg !== undefined && !this.terminated && this.subcontextSpec === undefined; arg = this.cursor.at(0)) {
            this.parseNext(arg);
        }
    };
    Parser.prototype.parseArgument = function (arg) {
        var model = this.ramainingArguments.shift();
        if (model) {
            this.parseNamedArgument(model);
        }
        else {
            this.parseNamelessArgument(arg);
        }
    };
    Parser.prototype.parseLongOption = function (arg) {
        var _this = this;
        var parsed = this.contextSpec.options.find(function (option) {
            if (!option.optionNameMatches(arg)) {
                return false;
            }
            _this.callOptionHandler(option);
            _this.cursor.next(option.extractOptionAndStore(_this, arg));
            return true;
        });
        if (!parsed) {
            throw new errors_1.UnknownOptionError(this, arg);
        }
    };
    Parser.prototype.parseNamedArgument = function (model) {
        this.cursor.next(model.extractArgumentAndStore(this));
    };
    Parser.prototype.parseNamelessArgument = function (arg) {
        var model = this.contextSpec.variadicArguments;
        if (model) {
            this.cursor.next(model.extractArgumentAndStore(this));
        }
        else {
            this.cursor.next(1);
        }
    };
    Parser.prototype.parseNext = function (arg) {
        if (this.parseTerminator(arg)) {
        }
        else if (this.parseSubcontextSpecs(arg)) {
        }
        else if (arg.startsWith('--')) {
            this.parseLongOption(arg);
        }
        else if (arg.startsWith('-')) {
            this.parseShortOption(arg);
        }
        else {
            this.parseArgument(arg);
        }
    };
    Parser.prototype.parseShortOption = function (arg) {
        var _this = this;
        var names = arg.slice(1).split('');
        var parameterized;
        var parameterizedName;
        var size = 0;
        names.forEach(function (name) {
            var dashedName = "-" + name;
            var resolved = _this.contextSpec.options.some(function (option) {
                if (!option.optionNameMatches(dashedName)) {
                    return false;
                }
                _this.callOptionHandler(option);
                if (option.hasOptionParameter) {
                    if (parameterized !== undefined) {
                        throw new errors_1.MultipleParameterizedOptionsError(_this, parameterized, parameterizedName, option, dashedName);
                    }
                    parameterized = option;
                    parameterizedName = dashedName;
                }
                size = Math.max(size, option.extractOptionAndStore(_this, dashedName));
                return true;
            });
            if (!resolved) {
                throw new errors_1.UnknownOptionError(_this, dashedName);
            }
        });
        this.cursor.next(size);
    };
    Parser.prototype.parseSubcontextSpecs = function (arg) {
        var found = this.contextSpec.subspecs.find(function (e) { return e.commandName === arg; });
        if (found) {
            this.subcontextSpec = found;
            this.cursor.next(1);
            return true;
        }
        return false;
    };
    Parser.prototype.parseSync = function () {
        this.initializeAttributes();
        this.parseArgs();
        this.validate();
    };
    Parser.prototype.parseTerminator = function (arg) {
        var terminator = this.contextSpec.terminator;
        if (terminator) {
            if (terminator.terminatorKeywordMatches(arg)) {
                this.context[terminator.key] = this.cursor.slice(1);
                this.cursor.next(1);
                return true;
            }
        }
        return false;
    };
    Parser.prototype.validate = function () {
        var _this = this;
        this.contextSpec.attributeModels.forEach(function (v) {
            v.emitParserEvent(events_1.ATTRIBUTE_PARSER_EVENT.BEFORE_VALIDATE, _this);
        });
        this.contextSpec.attributeModels.forEach(function (v) {
            v.emitParserEvent(events_1.ATTRIBUTE_PARSER_EVENT.VALIDATE, _this);
        });
        this.contextSpec.attributeModels.forEach(function (v) {
            v.emitParserEvent(events_1.ATTRIBUTE_PARSER_EVENT.AFTER_INITIALIZE, _this);
        });
    };
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], Parser.prototype, "ramainingArguments", null);
    return Parser;
}());
exports.Parser = Parser;
//# sourceMappingURL=Parser.js.map