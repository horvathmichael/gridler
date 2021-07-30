"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataGrid;

require("core-js/modules/es.array.sort.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _core = require("@material-ui/core");

var _Toolbar = _interopRequireDefault(require("./Toolbar"));

var _Header = _interopRequireDefault(require("./Header"));

var _Rows = _interopRequireDefault(require("./Rows"));

var _Footer = _interopRequireDefault(require("./Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _core.makeStyles)(() => ({
  main: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexWrap: 'nowrap',
    overflowX: 'auto',
    position: 'relative'
  }
}));

function DataGrid(_ref) {
  let {
    localization,
    height,
    rows,
    totalrows,
    columns,
    filters,
    density,
    sort,
    page,
    pageSize,
    onPageChange,
    onPageSizeChange,
    onColumnsChange,
    onFiltersChange,
    onDensityChange,
    onSortChange,
    onAdd,
    onRowClick
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    localization: localization.toolbar,
    columns: columns,
    filters: filters,
    density: density,
    onColumnsChange: onColumnsChange,
    onFiltersChange: onFiltersChange,
    onDensityChange: onDensityChange,
    onAdd: onAdd
  }), /*#__PURE__*/_react.default.createElement(_Paper.default, null, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.main
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    columns: columns,
    filters: filters,
    sort: sort,
    onSortChange: onSortChange
  }), /*#__PURE__*/_react.default.createElement(_Divider.default, null), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      maxHeight: "".concat(height, "px"),
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react.default.createElement(_Rows.default, {
    rows: rows,
    columns: columns,
    density: density,
    filters: filters,
    sort: sort,
    onRowClick: onRowClick
  })), /*#__PURE__*/_react.default.createElement(_Divider.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    localization: localization.footer,
    rows: totalrows,
    page: page,
    pageSize: pageSize,
    onPageChange: onPageChange,
    onPageSizeChange: onPageSizeChange
  }))));
}

DataGrid.propTypes = {
  localization: _propTypes.default.shape({
    toolbar: _propTypes.default.shape({}).isRequired,
    footer: _propTypes.default.shape({}).isRequired
  }).isRequired,
  rows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  totalrows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  columns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  filters: _propTypes.default.arrayOf(_propTypes.default.shape()),
  density: _propTypes.default.string.isRequired,
  sort: _propTypes.default.shape(),
  height: _propTypes.default.number,
  page: _propTypes.default.number.isRequired,
  pageSize: _propTypes.default.number.isRequired,
  onColumnsChange: _propTypes.default.func.isRequired,
  onFiltersChange: _propTypes.default.func.isRequired,
  onDensityChange: _propTypes.default.func.isRequired,
  onSortChange: _propTypes.default.func.isRequired,
  onPageChange: _propTypes.default.func.isRequired,
  onPageSizeChange: _propTypes.default.func.isRequired,
  onAdd: _propTypes.default.func,
  onRowClick: _propTypes.default.func
};
DataGrid.defaultProps = {
  filters: undefined,
  sort: undefined,
  onAdd: undefined,
  onRowClick: undefined,
  height: 500
};