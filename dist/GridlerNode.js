"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GridlerNode;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _core = require("@material-ui/core");

var _constant = require("./constant");

var _Toolbar = _interopRequireDefault(require("./components/Toolbar"));

var _Header = _interopRequireDefault(require("./components/Header/Header"));

var _Rows = _interopRequireDefault(require("./components/Rows"));

var _Footer = _interopRequireDefault(require("./components/Footer"));

var _jsxRuntime = require("react/jsx-runtime");

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

function GridlerNode(_ref2) {
  let {
    columns,
    density,
    filename,
    filter,
    height,
    initialRows,
    local,
    onAddClick,
    onColumnsChange,
    onDensityChange,
    onFilterChange,
    onPageChange,
    onPageSizeChange,
    onRowClick,
    onSortChange,
    page,
    pageRows,
    pageSize,
    rows,
    sort,
    toolbarSettings
  } = _ref2;
  const classes = useStyles({
    height
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Toolbar.default, {
      columns: columns,
      density: density,
      filename: filename,
      filter: filter,
      local: local.toolbar,
      onAddClick: onAddClick,
      onColumnsChange: onColumnsChange,
      onDensityChange: onDensityChange,
      onFilterChange: onFilterChange,
      rows: rows,
      settings: toolbarSettings
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Paper.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: classes.main,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: classes.data,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
            columns: columns,
            filter: filter,
            onSortChange: onSortChange,
            sort: sort
          }), pageRows.length > 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Rows.default, {
            columns: columns,
            density: density,
            pageRows: pageRows,
            onRowClick: onRowClick
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: classes.nodata,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.Typography, {
              children: local.rows.nodata
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {
          initialRows: initialRows,
          local: local.footer,
          onPageChange: onPageChange,
          onPageSizeChange: onPageSizeChange,
          page: page,
          pageSize: pageSize,
          rows: rows
        })]
      })
    })]
  });
}

GridlerNode.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  density: _propTypes.default.oneOf([_constant.densityConstant.compact, _constant.densityConstant.default, _constant.densityConstant.comfort]).isRequired,
  filter: _propTypes.default.shape({}).isRequired,
  filename: _propTypes.default.string.isRequired,
  height: _propTypes.default.number.isRequired,
  initialRows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  local: _propTypes.default.shape({
    toolbar: _propTypes.default.shape({}).isRequired,
    rows: _propTypes.default.shape({
      nodata: _propTypes.default.string.isRequired
    }).isRequired,
    footer: _propTypes.default.shape({}).isRequired
  }).isRequired,
  onAddClick: _propTypes.default.func,
  onColumnsChange: _propTypes.default.func.isRequired,
  onDensityChange: _propTypes.default.func.isRequired,
  onFilterChange: _propTypes.default.func.isRequired,
  onPageChange: _propTypes.default.func.isRequired,
  onPageSizeChange: _propTypes.default.func.isRequired,
  onRowClick: _propTypes.default.func,
  onSortChange: _propTypes.default.func.isRequired,
  page: _propTypes.default.number.isRequired,
  pageRows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  pageSize: _propTypes.default.number.isRequired,
  rows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  sort: _propTypes.default.shape({}),
  toolbarSettings: _propTypes.default.shape({}).isRequired
};
GridlerNode.defaultProps = {
  onAddClick: undefined,
  onRowClick: undefined,
  sort: undefined
};