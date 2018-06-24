"use strict";
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
        world_1.WORLD.runSpaces.push(this);
        this._run(world_1.WORLD.getContextSpecOfClass(contextClass), args);
    };
    RunSpace.prototype.runSync = function (contextClass, args) {
        world_1.WORLD.runSpaces.push(this);
        this._run(world_1.WORLD.getContextSpecOfClass(contextClass), args);
    };
    RunSpace.prototype._run = function (contextSpec, args) {
        var context = contextSpec.createInstance();
        var parser = parseSync_1.parseSync(context, args);
        var runMethod = contextSpec.runMethod;
        if (runMethod) {
            return context[runMethod.key]();
        }
        var subcontextSpec = parser.subcontextSpec;
        if (subcontextSpec) {
            this._run(subcontextSpec, parser.cursor.slice());
        }
    };
    return RunSpace;
}());
exports.RunSpace = RunSpace;
//# sourceMappingURL=RunSpace.js.map