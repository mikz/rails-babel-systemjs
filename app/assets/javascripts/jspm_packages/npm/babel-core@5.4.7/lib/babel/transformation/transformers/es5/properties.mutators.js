/* */ 
"format cjs";
"use strict";

exports.__esModule = true;
exports.ObjectExpression = ObjectExpression;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _helpersDefineMap = require("../../helpers/define-map");

var defineMap = _interopRequireWildcard(_helpersDefineMap);

var _types = require("../../../types");

var t = _interopRequireWildcard(_types);

function ObjectExpression(node, parent, scope, file) {
  var mutatorMap = {};
  var hasAny = false;

  node.properties = node.properties.filter(function (prop) {
    if (prop.kind === "get" || prop.kind === "set") {
      hasAny = true;
      defineMap.push(mutatorMap, prop, prop.kind, file);
      return false;
    } else {
      return true;
    }
  });

  if (!hasAny) return;

  return t.callExpression(t.memberExpression(t.identifier("Object"), t.identifier("defineProperties")), [node, defineMap.toDefineObject(mutatorMap)]);
}