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

var _DataGridToolbar = _interopRequireDefault(require("./DataGridToolbar"));

var _DataGridHeader = _interopRequireDefault(require("./DataGridHeader"));

var _DataGridRows = _interopRequireDefault(require("./DataGridRows"));

var _DataGridFooter = _interopRequireDefault(require("./DataGridFooter"));

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
    rows,
    columns,
    filters,
    density,
    sort,
    onColumnsChange,
    onFiltersChange,
    onDensityChange,
    onSortChange,
    onAdd,
    onRowClick
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_DataGridToolbar.default, {
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
  }, /*#__PURE__*/_react.default.createElement(_DataGridHeader.default, {
    columns: columns,
    filters: filters,
    sort: sort,
    onSortChange: onSortChange
  }), /*#__PURE__*/_react.default.createElement(_Divider.default, null), /*#__PURE__*/_react.default.createElement(_DataGridRows.default, {
    rows: rows,
    columns: columns,
    filters: filters,
    sort: sort,
    onRowClick: onRowClick
  }), /*#__PURE__*/_react.default.createElement(_Divider.default, null), /*#__PURE__*/_react.default.createElement(_DataGridFooter.default, {
    localization: localization.footer,
    rows: rows
  }))));
}

DataGrid.propTypes = {
  localization: _propTypes.default.shape({
    toolbar: _propTypes.default.shape({}).isRequired,
    footer: _propTypes.default.shape({}).isRequired
  }).isRequired,
  rows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  columns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  filters: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  density: _propTypes.default.string.isRequired,
  sort: _propTypes.default.shape(),
  onColumnsChange: _propTypes.default.func.isRequired,
  onFiltersChange: _propTypes.default.func.isRequired,
  onDensityChange: _propTypes.default.func.isRequired,
  onSortChange: _propTypes.default.func.isRequired,
  onAdd: _propTypes.default.func,
  onRowClick: _propTypes.default.func
};
DataGrid.defaultProps = {
  sort: undefined,
  onAdd: undefined,
  onRowClick: undefined
}; // {
//         field: 'avatar',
//         headerName: localization.users.fields.avatar,
//         renderHeader: avatarRenderHeader,
//         renderCell: avatarRenderCell,
//         width: 70,
//         sortable: false,
//         filterable: false,
//         // disableColumnMenu: true,
//       }, {
//         field: 'email',
//         headerName: localization.users.fields.email,
//         flex: true,
//       }, {
//         field: 'firstname',
//         headerName: localization.users.fields.firstname,
//         flex: true,
//       }, {
//         field: 'lastname',
//         headerName: localization.users.fields.lastname,
//         flex: true,
//       }, {
//         field: 'role',
//         headerName: localization.users.fields.role,
//         flex: true,
//         valueGetter: roleValueGetter,
//       }, {
//         field: 'active',
//         headerName: localization.users.fields.active,
//         width: 110,
//         type: 'boolean',
//       },