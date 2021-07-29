"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataGridToolbar;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _core = require("@material-ui/core");

var _DataGridToolbarAdd = _interopRequireDefault(require("./DataGridToolbarAdd"));

var _DataGridToolbarColumns = _interopRequireDefault(require("./DataGridToolbarColumns"));

var _DataGridToolbarFilter = _interopRequireDefault(require("./DataGridToolbarFilter"));

var _DataGridToolbarExport = _interopRequireDefault(require("./DataGridToolbarExport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import DataGridToolbarDensity from './DataGridToolbarDensity';
const useStyles = (0, _core.makeStyles)(() => ({
  toolbar: {
    minHeight: 'unset'
  },
  flexGrow: {
    flexGrow: 1
  }
}));

function DataGridToolbar(_ref) {
  let {
    localization,
    columns,
    filters,
    // density,
    onColumnsChange,
    onFilterChange,
    // onDensityChange,
    onExport,
    onAdd
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    className: classes.toolbar
  }, onAdd && /*#__PURE__*/_react.default.createElement(_DataGridToolbarAdd.default, {
    localization: localization.add,
    onAdd: onAdd
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.flexGrow
  }), /*#__PURE__*/_react.default.createElement(_DataGridToolbarColumns.default, {
    localization: localization.columns,
    columns: columns,
    onColumnsChange: onColumnsChange
  }), /*#__PURE__*/_react.default.createElement(_DataGridToolbarFilter.default, {
    localization: localization.filter,
    columns: columns,
    filters: filters,
    onFilterChange: onFilterChange
  }), /*#__PURE__*/_react.default.createElement(_DataGridToolbarExport.default, {
    localization: localization.export,
    onExport: onExport
  }));
}

DataGridToolbar.propTypes = {
  localization: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  columns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  filters: _propTypes.default.arrayOf(_propTypes.default.shape()),
  // density: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onColumnsChange: _propTypes.default.func.isRequired,
  onFilterChange: _propTypes.default.func.isRequired,
  // onDensityChange: PropTypes.func.isRequired,
  onExport: _propTypes.default.func.isRequired,
  onAdd: _propTypes.default.func
};
DataGridToolbar.defaultProps = {
  filters: undefined,
  onAdd: undefined
};