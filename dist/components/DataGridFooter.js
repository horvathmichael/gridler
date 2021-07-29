"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataGridFooter;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _core.makeStyles)(theme => ({
  footer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  sum: {
    padding: theme.spacing(2)
  }
}));

function DataGridFooter(_ref) {
  let {
    localization,
    rows
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.footer
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.sum
  }, "".concat(localization.sum, ": ").concat(rows.length)));
}

DataGridFooter.propTypes = {
  localization: _propTypes.default.shape({
    sum: _propTypes.default.string
  }).isRequired,
  rows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired
};