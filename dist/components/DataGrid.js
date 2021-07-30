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
    position: 'relative'
  },
  data: {
    overflow: 'auto',
    minHeight: '100px',
    maxHeight: _ref => {
      let {
        height
      } = _ref;
      return "".concat(height, "px");
    }
  },
  nodata: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px'
  }
}));

function DataGrid(_ref2) {
  let {
    localization,
    height,
    rows,
    filteredRows,
    pageRows,
    columns,
    filters,
    density,
    sort,
    page,
    pageSize,
    onPageChange,
    onPageSizeChange,
    onColumnsChange,
    onFilterChange,
    onDensityChange,
    onSortChange,
    onExport,
    onAdd,
    onRowClick
  } = _ref2;
  const classes = useStyles({
    height
  });
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    localization: localization.toolbar,
    columns: columns,
    filters: filters,
    density: density,
    onColumnsChange: onColumnsChange,
    onFilterChange: onFilterChange,
    onDensityChange: onDensityChange,
    onExport: onExport,
    onAdd: onAdd
  }), /*#__PURE__*/_react.default.createElement(_Paper.default, null, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.main
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.data
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    columns: columns,
    filters: filters,
    sort: sort,
    onSortChange: onSortChange
  }), pageRows.length > 0 ? /*#__PURE__*/_react.default.createElement(_Rows.default, {
    pageRows: pageRows,
    columns: columns,
    density: density,
    onRowClick: onRowClick
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: classes.nodata
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, null, localization.data.nodata))), /*#__PURE__*/_react.default.createElement(_Divider.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    localization: localization.footer,
    rows: rows,
    filteredRows: filteredRows,
    page: page,
    pageSize: pageSize,
    onPageChange: onPageChange,
    onPageSizeChange: onPageSizeChange
  }))));
}

DataGrid.propTypes = {
  localization: _propTypes.default.shape({
    toolbar: _propTypes.default.shape({}).isRequired,
    data: _propTypes.default.shape({
      nodata: _propTypes.default.string.isRequired
    }).isRequired,
    footer: _propTypes.default.shape({}).isRequired
  }).isRequired,
  rows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  filteredRows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  pageRows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  columns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  filters: _propTypes.default.shape().isRequired,
  density: _propTypes.default.string.isRequired,
  sort: _propTypes.default.shape(),
  height: _propTypes.default.number,
  page: _propTypes.default.number.isRequired,
  pageSize: _propTypes.default.number.isRequired,
  onColumnsChange: _propTypes.default.func.isRequired,
  onFilterChange: _propTypes.default.func.isRequired,
  onDensityChange: _propTypes.default.func.isRequired,
  onSortChange: _propTypes.default.func.isRequired,
  onPageChange: _propTypes.default.func.isRequired,
  onPageSizeChange: _propTypes.default.func.isRequired,
  onExport: _propTypes.default.func.isRequired,
  onAdd: _propTypes.default.func,
  onRowClick: _propTypes.default.func
};
DataGrid.defaultProps = {
  sort: undefined,
  onAdd: undefined,
  onRowClick: undefined,
  height: 600
};