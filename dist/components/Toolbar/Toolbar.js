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

var _jsxRuntime = require("react/jsx-runtime");

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
    columns,
    density,
    filename,
    filter,
    local,
    onAddClick,
    onColumnsChange,
    onDensityChange,
    onFilterChange,
    rows,
    settings
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Toolbar.default, {
    className: classes.toolbar,
    children: [onAddClick && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToolbarAdd.default, {
      icon: settings.AddIcon,
      local: local.add,
      onAddClick: onAddClick
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes.flexGrow
    }), !settings.disableColumnSelector && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToolbarColumns.default, {
      columns: columns,
      icon: settings.ColumnsIcon,
      local: local.columns,
      onColumnsChange: onColumnsChange
    }), !settings.disableDensitySelector && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToolbarDensity.default, {
      density: density,
      icon: settings.DensityIcon,
      local: local.density,
      onDensityChange: onDensityChange
    }), !settings.disableExport && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToolbarExport.default, {
      columns: columns,
      filename: filename,
      icon: settings.ExportIcon,
      local: local.export,
      rows: rows
    }), !settings.disableFilter && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToolbarFilter.default, {
      columns: columns,
      filter: filter,
      icon: settings.FilterIcon,
      local: local.filter,
      onFilterChange: onFilterChange
    })]
  });
}

Toolbar.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  density: _propTypes.default.string.isRequired,
  filename: _propTypes.default.string.isRequired,
  filter: _propTypes.default.shape().isRequired,
  local: _propTypes.default.shape().isRequired,
  onAddClick: _propTypes.default.func,
  onColumnsChange: _propTypes.default.func.isRequired,
  onDensityChange: _propTypes.default.func.isRequired,
  onFilterChange: _propTypes.default.func.isRequired,
  rows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  settings: _propTypes.default.shape({
    disableColumnSelector: _propTypes.default.bool.isRequired,
    disableDensitySelector: _propTypes.default.bool.isRequired,
    disableExport: _propTypes.default.bool.isRequired,
    disableFilter: _propTypes.default.bool.isRequired,
    AddIcon: _propTypes.default.node.isRequired,
    ColumnsIcon: _propTypes.default.node.isRequired,
    DensityIcon: _propTypes.default.node.isRequired,
    ExportIcon: _propTypes.default.node.isRequired,
    FilterIcon: _propTypes.default.node.isRequired
  }).isRequired
};
Toolbar.defaultProps = {
  onAddClick: undefined
};