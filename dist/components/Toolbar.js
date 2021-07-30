"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Toolbar;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _core = require("@material-ui/core");

var _ToolbarAdd = _interopRequireDefault(require("./ToolbarAdd"));

var _ToolbarColumns = _interopRequireDefault(require("./ToolbarColumns"));

var _ToolbarFilter = _interopRequireDefault(require("./ToolbarFilter"));

var _ToolbarDensity = _interopRequireDefault(require("./ToolbarDensity"));

var _ToolbarExport = _interopRequireDefault(require("./ToolbarExport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _core.makeStyles)(() => ({
  toolbar: {
    minHeight: 'unset'
  },
  flexGrow: {
    flexGrow: 1
  }
}));

function Toolbar(_ref) {
  let {
    localization,
    columns,
    filters,
    density,
    onColumnsChange,
    onFilterChange,
    onDensityChange,
    onExport,
    onAdd
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    className: classes.toolbar
  }, onAdd && /*#__PURE__*/_react.default.createElement(_ToolbarAdd.default, {
    localization: localization.add,
    onAdd: onAdd
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.flexGrow
  }), /*#__PURE__*/_react.default.createElement(_ToolbarColumns.default, {
    localization: localization.columns,
    columns: columns,
    onColumnsChange: onColumnsChange
  }), /*#__PURE__*/_react.default.createElement(_ToolbarFilter.default, {
    localization: localization.filter,
    columns: columns,
    filters: filters,
    onFilterChange: onFilterChange
  }), /*#__PURE__*/_react.default.createElement(_ToolbarDensity.default, {
    localization: localization.density,
    density: density,
    onDensityChange: onDensityChange
  }), /*#__PURE__*/_react.default.createElement(_ToolbarExport.default, {
    localization: localization.export,
    onExport: onExport
  }));
}

Toolbar.propTypes = {
  localization: _propTypes.default.shape().isRequired,
  columns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  filters: _propTypes.default.arrayOf(_propTypes.default.shape()),
  density: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  onColumnsChange: _propTypes.default.func.isRequired,
  onFilterChange: _propTypes.default.func.isRequired,
  onDensityChange: _propTypes.default.func.isRequired,
  onExport: _propTypes.default.func.isRequired,
  onAdd: _propTypes.default.func
};
Toolbar.defaultProps = {
  filters: undefined,
  onAdd: undefined
};