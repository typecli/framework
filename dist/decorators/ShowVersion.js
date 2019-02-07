"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exit_1 = require("../functions/exit");
var Handler_1 = require("./Handler");
var Option_1 = require("./Option");
function ShowVersion(version, options) {
    return function (constructor) {
        options = options ? options : {};
        var name = options.name === undefined ? ['--version'] : options.name;
        var desc = options.desc === undefined ? 'Show version.' : options.desc;
        Option_1.Option({ name: name, desc: desc, type: Boolean })({ constructor: constructor }, '@version');
        Handler_1.Handler(function () {
            process.stdout.write(version);
            process.stdout.write('\n');
            exit_1.exit();
        })({ constructor: constructor }, 'on@version');
        return constructor;
    };
}
exports.ShowVersion = ShowVersion;
//# sourceMappingURL=ShowVersion.js.map