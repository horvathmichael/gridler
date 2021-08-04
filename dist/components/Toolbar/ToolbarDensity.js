"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToolbarDensity;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _constant = require("../../constant");

var _ToolbarButton = _interopRequireDefault(require("./ToolbarButton"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _core.makeStyles)(theme => ({
  menuitem: {
    padding: theme.spacing(1),
    width: theme.spacing(15)
  },
  selected: {
    padding: theme.spacing(1),
    color: theme.palette.primary.main,
    width: theme.spacing(15)
  }
}));

function ToolbarDensity(_ref) {
  let {
    density,
    icon,
    local,
    onDensityChange
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Menu.default, {
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
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
        className: density === _constant.densityConstant.compact ? classes.selected : classes.menuitem,
        onClick: () => onDensityChange(_constant.densityConstant.compact),
        children: local.compact
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
        className: density === _constant.densityConstant.default ? classes.selected : classes.menuitem,
        onClick: () => onDensityChange(_constant.densityConstant.default),
        children: local.default
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
        className: density === _constant.densityConstant.comfort ? classes.selected : classes.menuitem,
        onClick: () => onDensityChange(_constant.densityConstant.comfort),
        children: local.comfort
      })]
    })]
  });
}

ToolbarDensity.propTypes = {
  density: _propTypes.default.string.isRequired,
  icon: _propTypes.default.node.isRequired,
  local: _propTypes.default.shape({
    button: _propTypes.default.string.isRequired,
    compact: _propTypes.default.string.isRequired,
    default: _propTypes.default.string.isRequired,
    comfort: _propTypes.default.string.isRequired
  }).isRequired,
  onDensityChange: _propTypes.default.func.isRequired
};