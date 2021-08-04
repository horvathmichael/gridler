"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToolbarAdd;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ToolbarButton = _interopRequireDefault(require("./ToolbarButton"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToolbarAdd(_ref) {
  let {
    icon,
    local,
    onAddClick
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToolbarButton.default, {
      icon: icon,
      label: local.button,
      onClick: onAddClick
    })
  });
}

ToolbarAdd.propTypes = {
  icon: _propTypes.default.node.isRequired,
  local: _propTypes.default.shape({
    button: _propTypes.default.string.isRequired
  }).isRequired,
  onAddClick: _propTypes.default.func.isRequired
};