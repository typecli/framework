"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContextSpec_1 = require("./ContextSpec");
var FunctionalMap_1 = require("./FunctionalMap");
var World = (function () {
    function World() {
        this.contexts = [];
        this.contextSpecs = new FunctionalMap_1.FunctionalMap();
        this.runSpaces = [];
    }
    World.prototype.getContextSpecOfClass = function (klass) {
        var spec = this.contextSpecs.get(klass);
        if (spec === undefined) {
            spec = new ContextSpec_1.ContextSpec(klass);
            this.contextSpecs.set(klass, spec);
        }
        return spec;
    };
    return World;
}());
exports.World = World;
//# sourceMappingURL=World.js.map