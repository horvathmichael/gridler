"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Rows;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RowsRow = _interopRequireDefault(require("./RowsRow"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Rows(_ref) {
  let {
    pageRows,
    columns,
    density,
    onRowClick
  } = _ref;
  return pageRows.map(row => /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowsRow.default, {
    row: row,
    columns: columns,
    density: density,
    onClick: onRowClick
  }, row.id || row));
}

Rows.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  density: _propTypes.default.string.isRequired,
  onRowClick: _propTypes.default.func,
  pageRows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired
};
Rows.defaultProps = {
  onRowClick: undefined
};