"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToolbarColumns;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _ToolbarButton = _interopRequireDefault(require("./ToolbarButton"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _core.makeStyles)(theme => ({
  icon: {
    marginRight: theme.spacing(1)
  },
  switch: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

function ToolbarColumns(_ref) {
  let {
    columns,
    icon,
    local,
    onColumnsChange
  } = _ref;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = (0, _react.useState)();

  const onMenuOpen = event => setAnchorEl(event.currentTarget);

  const onMenuClose = () => setAnchorEl();

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ToolbarButton.default, {
      icon: icon,
      label: local.button,
      onClick: onMenuOpen
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover.default, {
      getContentAnchorEl: null,
      anchorEl: anchorEl,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      open: Boolean(anchorEl),
      onClose: onMenuClose,
      children: columns.map(column => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: classes.switch,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
          label: column.headerName,
          control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {
            color: "primary",
            checked: !column.hide,
            onChange: () => onColumnsChange(column),
            name: column.field
          })
        })
      }, column.field))
    })]
  });
}

ToolbarColumns.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  icon: _propTypes.default.node.isRequired,
  local: _propTypes.default.shape({
    button: _propTypes.default.string.isRequired
  }).isRequired,
  onColumnsChange: _propTypes.default.func.isRequired
};