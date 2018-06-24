"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fast_memoize_decorator_1 = require("@typescript-plus/fast-memoize-decorator");
var Case = require("case");
var pluralize = require("pluralize");
var world_1 = require("../world");
var HeadAndBody = (function () {
    function HeadAndBody(model, head, body) {
        this.model = model;
        this.head = head;
        this.body = body;
    }
    Object.defineProperty(HeadAndBody.prototype, "bodyLines", {
        get: function () {
            return this.body.split('\n');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], HeadAndBody.prototype, "bodyLines", null);
    return HeadAndBody;
}());
var HeadsAndBodies = (function () {
    function HeadsAndBodies() {
        this.data = [];
    }
    Object.defineProperty(HeadsAndBodies.prototype, "maxHeadLength", {
        get: function () {
            return Math.max.apply(Math, this.data.map(function (e) { return e.head.length; }));
        },
        enumerable: true,
        configurable: true
    });
    HeadsAndBodies.prototype.render = function () {
        var _this = this;
        var buf = [];
        var sorted = this.data.sort(function (a, b) { return a.head.localeCompare(b.head); });
        sorted.forEach(function (hnb) {
            var bodyLines = hnb.bodyLines.slice();
            var defaultValue = hnb.model.defaultValue;
            if (defaultValue !== undefined) {
                bodyLines.push("(default: " + defaultValue + ")");
            }
            buf.push("  " + hnb.head.padEnd(_this.maxHeadLength) + "  " + bodyLines[0]);
            bodyLines.slice(1).forEach(function (e) {
                buf.push("  " + ' '.repeat(_this.maxHeadLength) + "  " + e);
            });
        });
        return buf.join('\n');
    };
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], HeadsAndBodies.prototype, "maxHeadLength", null);
    return HeadsAndBodies;
}());
var Builder = (function () {
    function Builder(contextSpec) {
        this.contextSpec = contextSpec;
    }
    Builder.build = function (contextSpec) {
        var builder = new Builder(contextSpec);
        return builder;
    };
    Object.defineProperty(Builder.prototype, "argumentsContent", {
        get: function () {
            var list = new HeadsAndBodies();
            this.contextSpec.arguments.forEach(function (arg) {
                var desc = arg.description;
                if (desc !== undefined) {
                    var head = arg.variableName;
                    list.data.push(new HeadAndBody(arg, head, desc));
                }
            });
            return list.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Builder.prototype, "data", {
        get: function () {
            return this.contextSpec.helpData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Builder.prototype, "footer", {
        get: function () {
            var data = this.data;
            return data ? data.options.footer : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Builder.prototype, "header", {
        get: function () {
            var data = this.data;
            return data ? data.options.header : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Builder.prototype, "optionIsOptional", {
        get: function () {
            return !this.contextSpec.options.every(function (e) { return e.options.required === true; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Builder.prototype, "optionsContent", {
        get: function () {
            var list = new HeadsAndBodies();
            this.contextSpec.options.forEach(function (option) {
                var desc = option.description;
                if (desc !== undefined) {
                    var head = option.optionNames.sort().join(', ');
                    list.data.push(new HeadAndBody(option, head, desc));
                }
            });
            return list.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Builder.prototype, "subcommandsContent", {
        get: function () {
            var buf = [];
            var context = world_1.WORLD.contextSpecs.get(this.contextSpec.klass);
            if (context) {
                var sorted = context.subspecs
                    .filter(function (e) { return e.caption !== undefined; })
                    .sort(function (a, b) { return a.commandName.localeCompare(b.commandName); });
                var maxHeadLength_1 = Math.max.apply(Math, sorted.map(function (e) { return e.commandName.length; }));
                sorted.forEach(function (e) {
                    buf.push("  " + e.commandName.padEnd(maxHeadLength_1) + "  " + e.caption);
                });
            }
            return buf.join('\n');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Builder.prototype, "text", {
        get: function () {
            var buf = [];
            buf.push(this.title);
            if (this.header !== undefined) {
                buf.push('');
                buf.push(this.header);
            }
            if (this.subcommandsContent.length > 0) {
                buf.push('');
                buf.push('Subcommands:');
                buf.push(this.subcommandsContent);
            }
            if (this.argumentsContent.length > 0) {
                buf.push('');
                buf.push('Arguments:');
                buf.push(this.argumentsContent);
            }
            if (this.optionsContent.length > 0) {
                buf.push('');
                buf.push('Options:');
                buf.push(this.optionsContent);
            }
            if (this.footer !== undefined) {
                buf.push('');
                buf.push(this.footer);
            }
            return buf.join('\n');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Builder.prototype, "title", {
        get: function () {
            var buf = [];
            var name = Case.kebab(this.contextSpec.commandName);
            buf.push(name);
            if (this.contextSpec.options.size > 0) {
                if (this.optionIsOptional) {
                    buf.push('[OPTIONS]');
                }
                else {
                    buf.push('OPTIONS');
                }
            }
            this.contextSpec.arguments.forEach(function (e) {
                if (e.options.required) {
                    buf.push(e.variableName);
                }
                else {
                    buf.push("[" + e.variableName + "]");
                }
            });
            if (this.contextSpec.subspecs.length > 0) {
                buf.push('SUBCOMMAND');
            }
            var variadic = this.contextSpec.variadicArguments;
            if (variadic) {
                var variadicName = Case.constant(pluralize.singular(variadic.key));
                var min = variadic.minimumElementCount;
                var index = 0;
                if (min !== undefined) {
                    for (; index < min; ++index) {
                        buf.push("" + variadicName + (index + 1));
                    }
                }
                buf.push("[" + variadicName + (index + 1) + " " + variadicName + (index + 2) + "...]");
            }
            var terminator = this.contextSpec.terminator;
            if (terminator) {
                buf.push(terminator.terminatorKeywords[0] + " ...");
            }
            return buf.join(' ');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], Builder.prototype, "argumentsContent", null);
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], Builder.prototype, "data", null);
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], Builder.prototype, "footer", null);
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], Builder.prototype, "header", null);
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], Builder.prototype, "optionIsOptional", null);
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], Builder.prototype, "optionsContent", null);
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], Builder.prototype, "subcommandsContent", null);
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], Builder.prototype, "text", null);
    __decorate([
        fast_memoize_decorator_1.Memoize()
    ], Builder.prototype, "title", null);
    return Builder;
}());
function generateHelp(contextClass) {
    return Builder.build(world_1.WORLD.getContextSpecOfClass(contextClass)).text;
}
exports.generateHelp = generateHelp;
//# sourceMappingURL=generateHelp.js.map