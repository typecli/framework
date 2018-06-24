"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
exports.getDesignTypeMetadata = Reflect && Reflect.getMetadata
    ?
        function (target, key) { return Reflect.getMetadata('design:type', target, key); }
    : function (target, key) { return undefined; };
//# sourceMappingURL=getDesignTypeMetadata.js.map