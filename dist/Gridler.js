"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Gridler;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icons = require("./components/Icons");

var _constant = require("./constant");

var _localization = _interopRequireDefault(require("./localization"));

var _GridlerContainer = _interopRequireDefault(require("./GridlerContainer"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initialPage = 1; // TODO

const initialPageSize = 10;

function Gridler(_ref) {
  let {
    columns,
    rows,
    density,
    disableColumnSelector,
    disableDensitySelector,
    disableExport,
    disableFilter,
    filename,
    filter,
    height,
    icons,
    local,
    onAddClick,
    onRowClick,
    sort
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_GridlerContainer.default, {
    filename: filename,
    height: height,
    initialColumns: columns,
    initialRows: rows,
    initialDensity: density,
    initialFilter: filter,
    initialSort: sort,
    initialPage: initialPage,
    initialPageSize: initialPageSize,
    local: _localization.default[local],
    onAddClick: onAddClick,
    onRowClick: onRowClick,
    toolbarSettings: {
      disableColumnSelector,
      disableDensitySelector,
      disableExport,
      disableFilter,
      AddIcon: icons.AddIcon || /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.AddIcon, {}),
      ColumnsIcon: icons.ColumnsIcon || /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.ColumnsIcon, {}),
      FilterIcon: icons.FilterIcon || /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.FilterIcon, {}),
      DensityIcon: icons.DensityIcon || /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.DensityIcon, {}),
      ExportIcon: icons.ExportIcon || /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.ExportIcon, {})
    }
  });
}

Gridler.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    field: _propTypes.default.string.isRequired,
    description: _propTypes.default.string,
    filterable: _propTypes.default.bool,
    headerName: _propTypes.default.string,
    hide: _propTypes.default.bool,
    renderHeader: _propTypes.default.func,
    renderCell: _propTypes.default.func,
    sortable: _propTypes.default.bool,
    sortComparator: _propTypes.default.func,
    type: _propTypes.default.oneOf([_constant.typeConstant.text, _constant.typeConstant.number, _constant.typeConstant.date, _constant.typeConstant.dateTime, _constant.typeConstant.boolean, _constant.typeConstant.select]),
    valueFormatter: _propTypes.default.func,
    valueGetter: _propTypes.default.func,
    width: _propTypes.default.number
  })).isRequired,
  rows: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  density: _propTypes.default.oneOf([_constant.densityConstant.compact, _constant.densityConstant.default, _constant.densityConstant.comfort]),
  disableColumnSelector: _propTypes.default.bool,
  disableDensitySelector: _propTypes.default.bool,
  disableExport: _propTypes.default.bool,
  disableFilter: _propTypes.default.bool,
  filename: _propTypes.default.string,
  filter: _propTypes.default.shape({}),
  height: _propTypes.default.number,
  icons: _propTypes.default.shape({
    AddIcon: _propTypes.default.node,
    ColumnsIcon: _propTypes.default.node,
    FilterIcon: _propTypes.default.node,
    DensityIcon: _propTypes.default.node,
    ExportIcon: _propTypes.default.node
  }),
  local: _propTypes.default.oneOf([_constant.localConstant.en, _constant.localConstant.de]),
  onAddClick: _propTypes.default.func,
  onRowClick: _propTypes.default.func,
  sort: _propTypes.default.shape({
    field: _propTypes.default.string.isRequired,
    order: _propTypes.default.oneOf([_constant.sortOrderConstant.asc, _constant.sortOrderConstant.desc])
  })
};
Gridler.defaultProps = {
  density: _constant.densityConstant.default,
  disableColumnSelector: false,
  disableDensitySelector: false,
  disableExport: false,
  disableFilter: false,
  filename: 'export.csv',
  filter: {},
  height: 600,
  icons: {},
  local: _constant.localConstant.en,
  onAddClick: undefined,
  onRowClick: undefined,
  sort: undefined
};