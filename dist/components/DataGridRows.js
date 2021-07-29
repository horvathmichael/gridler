"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataGridRows;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DataGridRow = _interopRequireDefault(require("./DataGridRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DataGridRows(_ref) {
  let {
    rows,
    columns,
    // filters,
    // sort,
    onRowClick
  } = _ref;
  return rows // .filter((column) => !column.hidden)
  .map(row => /*#__PURE__*/_react.default.createElement(_DataGridRow.default, {
    key: row,
    row: row,
    columns: columns,
    onClick: onRowClick
  }));
}

DataGridRows.propTypes = {
  rows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  columns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  // filters: PropTypes.arrayOf(PropTypes.shape()),
  // sort: PropTypes.shape(),
  // filters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onRowClick: _propTypes.default.func
};
DataGridRows.defaultProps = {
  // filters: undefined,
  // sort: undefined,
  onRowClick: undefined
};