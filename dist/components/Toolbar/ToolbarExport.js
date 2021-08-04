"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToolbarExport;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCsv = require("react-csv");

var _ToolbarButton = _interopRequireDefault(require("./ToolbarButton"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToolbarExport(_ref) {
  let {
    columns,
    filename,
    icon,
    local,
    rows
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactCsv.CSVLink, {
      target: "_blank",
      data: rows.map(row => {
        const exportRow = {};
        columns.filter(column => !column.hide && column.exportable !== false).forEach(column => {
          if (column.valueFormatter) {
            exportRow[column.field] = column.valueFormatter(row[column.field]);
          } else if (column.valueGetter) {
            exportRow[column.field] = column.valueGetter(row);
          } else {
            exportRow[column.field] = row[column.field];
          }
        });
        return exportRow;
      }),
      filename: filename,
      headers: columns.filter(column => !column.hide && column.exportable !== false).map(column => ({
        label: column.headerName,
        key: column.field
      })),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToolbarButton.default, {
        icon: icon,
        label: local.button
      })
    })
  });
}

ToolbarExport.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  filename: _propTypes.default.string.isRequired,
  icon: _propTypes.default.node.isRequired,
  local: _propTypes.default.shape({
    button: _propTypes.default.string.isRequired
  }).isRequired,
  rows: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired
};