"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataGridToolbarExport;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Icons = require("./Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _core.makeStyles)(theme => ({
  icon: {
    marginRight: theme.spacing(1)
  }
}));

function DataGridToolbarExport(_ref) {
  let {
    localization,
    onExport
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    onClick: onExport
  }, /*#__PURE__*/_react.default.createElement(_Icons.DownloadIcon, {
    className: classes.icon
  }), localization.button));
}

DataGridToolbarExport.propTypes = {
  localization: _propTypes.default.shape({
    button: _propTypes.default.string.isRequired
  }).isRequired,
  onExport: _propTypes.default.func.isRequired
};