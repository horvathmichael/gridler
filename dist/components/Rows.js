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
    rows,
    columns,
    density,
    // filters,
    // sort,
    onRowClick
  } = _ref;
  return rows // .filter((column) => !column.hidden)
  .map(row => /*#__PURE__*/_react.default.createElement(_Row.default, {
    key: row.id || row,
    row: row,
    columns: columns,
    density: density,
    onClick: onRowClick
  }));
}

Rows.propTypes = {
  rows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  columns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  density: _propTypes.default.string.isRequired,
  // filters: PropTypes.arrayOf(PropTypes.shape()),
  // sort: PropTypes.shape(),
  // filters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onRowClick: _propTypes.default.func
};
Rows.defaultProps = {
  // filters: undefined,
  // sort: undefined,
  onRowClick: undefined
};