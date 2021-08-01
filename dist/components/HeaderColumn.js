"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeaderColumn;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Icons = require("./Icons");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _core.makeStyles)(theme => ({
  column: {
    padding: theme.spacing(1),
    verticalAlign: 'middle',
    maxWidth: 'unset',
    minWidth: _ref => {
      let {
        width
      } = _ref;
      return "".concat(width, "px") || '150px';
    },
    '&:hover': {
      cursor: _ref2 => {
        let {
          sortable
        } = _ref2;
        return sortable ? 'pointer' : 'default';
      }
    }
  },
  icon: {
    marginLeft: theme.spacing(1)
  }
}));

function HeaderColumn(_ref3) {
  let {
    column,
    sort,
    onSortChange
  } = _ref3;
  const classes = useStyles({
    sortable: column.sortable !== false,
    width: column.width
  });

  const onHeaderClick = () => {
    if (column.sortable !== false) {
      onSortChange(column);
    }
  };

  const renderHeader = () => {
    if (sort && sort.column === column) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        display: "flex",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          color: "primary",
          variant: "h6",
          children: column.headerName
        }), sort.order === 'asc' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.SortAscIcon, {
          className: classes.icon
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.SortDescIcon, {
          className: classes.icon
        })]
      });
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      color: "primary",
      variant: "h6",
      children: column.headerName
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
    className: classes.column,
    onClick: onHeaderClick,
    children: column.renderHeader ? column.renderHeader() : renderHeader()
  });
}

HeaderColumn.propTypes = {
  column: _propTypes.default.shape({
    field: _propTypes.default.string,
    headerName: _propTypes.default.string,
    width: _propTypes.default.number,
    sortable: _propTypes.default.bool,
    renderHeader: _propTypes.default.func
  }).isRequired,
  sort: _propTypes.default.shape({
    column: _propTypes.default.shape({}),
    order: _propTypes.default.string
  }),
  onSortChange: _propTypes.default.func.isRequired
};
HeaderColumn.defaultProps = {
  sort: undefined
};