"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Rows;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Row = _interopRequireDefault(require("./Row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Rows(_ref) {
  let {
    pageRows,
    columns,
    density,
    onRowClick
  } = _ref;
  return pageRows.map(row => /*#__PURE__*/_react.default.createElement(_Row.default, {
    key: row.id || row,
    row: row,
    columns: columns,
    density: density,
    onClick: onRowClick
  }));
}

Rows.propTypes = {
  pageRows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  columns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  density: _propTypes.default.string.isRequired,
  onRowClick: _propTypes.default.func
};
Rows.defaultProps = {
  onRowClick: undefined
};