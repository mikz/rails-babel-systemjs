/* */ 
"format cjs";
"use strict";

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _helpersStrict = require("../../helpers/strict");

var strict = _interopRequireWildcard(_helpersStrict);

var metadata = {
  group: "builtin-modules"
};

exports.metadata = metadata;
var Program = {
  exit: function exit(program, parent, scope, file) {
    strict.wrap(program, function () {
      // ensure that these are at the top, just like normal imports
      var _arr = file.dynamicImports;
      for (var _i = 0; _i < _arr.length; _i++) {
        var node = _arr[_i];
        node._blockHoist = 3;
      }

      program.body = file.dynamicImports.concat(program.body);
    });

    if (!file.transformers["es6.modules"].canTransform()) return;

    if (file.moduleFormatter.transform) {
      file.moduleFormatter.transform(program);
    }
  }
};
exports.Program = Program;