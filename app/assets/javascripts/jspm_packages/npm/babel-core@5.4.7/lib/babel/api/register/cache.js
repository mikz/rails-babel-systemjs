/* */ 
"format cjs";
"use strict";

exports.__esModule = true;
exports.save = save;
exports.load = load;
exports.get = get;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _os = require("os");

var _os2 = _interopRequireDefault(_os);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _homeOrTmp = require("home-or-tmp");

var _homeOrTmp2 = _interopRequireDefault(_homeOrTmp);

var FILENAME = process.env.BABEL_CACHE_PATH || _path2["default"].join(_homeOrTmp2["default"], ".babel.json");
var data = {};

function save() {
  _fs2["default"].writeFileSync(FILENAME, JSON.stringify(data, null, "  "));
}

function load() {
  if (process.env.BABEL_DISABLE_CACHE) return;

  process.on("exit", save);
  process.nextTick(save);

  if (!_fs2["default"].existsSync(FILENAME)) return;

  try {
    data = JSON.parse(_fs2["default"].readFileSync(FILENAME));
  } catch (err) {
    return;
  }
}

function get() {
  return data;
}