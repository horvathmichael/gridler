"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToolbarButton;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _core.makeStyles)(theme => ({
  toolbarbuttonlabel: {
    textDecoration: 'none',
    marginLeft: theme.spacing(1)
  }
}));

function ToolbarButton(_ref) {
  let {
    icon,
    label,
    onClick
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button.default, {
    color: "primary",
    onClick: onClick,
    children: [icon, /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      className: classes.toolbarbuttonlabel,
      children: label
    })]
  });
}

ToolbarButton.propTypes = {
  icon: _propTypes.default.node.isRequired,
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};
ToolbarButton.defaultProps = {
  onClick: undefined
};