"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exit_1 = require("../functions/exit");
var generateHelp_1 = require("../functions/generateHelp");
var Handler_1 = require("./Handler");
var Option_1 = require("./Option");
function ShowHelp() {
    return function (constructor) {
        Option_1.Option({ name: ['-h', '--help'], desc: 'Show this help.', type: Boolean })({ constructor: constructor }, '@help');
        Handler_1.Handler(function () {
            process.stdout.write(generateHelp_1.generateHelp(constructor));
            process.stdout.write('\n');
            exit_1.exit();
        })({ constructor: constructor }, 'on@help');
        return constructor;
    };
}
exports.ShowHelp = ShowHelp;
//# sourceMappingURL=ShowHelp.js.map