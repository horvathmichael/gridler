"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToolbarExport;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Icons = require("./Icons");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _core.makeStyles)(theme => ({
  icon: {
    marginRight: theme.spacing(1)
  }
}));

function ToolbarExport(_ref) {
  let {
    localization,
    onAdd
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button.default, {
      color: "primary",
      onClick: onAdd,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.AddIcon, {
        className: classes.icon
      }), localization.button]
    })
  });
}

ToolbarExport.propTypes = {
  localization: _propTypes.default.shape({
    button: _propTypes.default.string.isRequired
  }).isRequired,
  onAdd: _propTypes.default.func.isRequired
};