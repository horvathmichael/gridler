"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataGridToolbarDensity;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Icons = require("./Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _core.makeStyles)(theme => ({
  icon: {
    marginRight: theme.spacing(1)
  },
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
const densities = ['compact', 'standard', 'comfortable'];

function DataGridToolbarDensity(_ref) {
  let {
    localization,
    density,
    onDensityChange
  } = _ref;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = (0, _react.useState)();

  const onMenuOpen = event => setAnchorEl(event.currentTarget);

  const onMenuClose = () => setAnchorEl();

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    onClick: onMenuOpen
  }, /*#__PURE__*/_react.default.createElement(_Icons.DensityIcon, {
    className: classes.icon
  }), localization.button), /*#__PURE__*/_react.default.createElement(_Menu.default, {
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
    onClose: onMenuClose
  }, densities.map(item => /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    key: item,
    className: item === density ? classes.selected : classes.menuitem,
    onClick: () => onDensityChange(item)
  }, localization[item]))));
}

DataGridToolbarDensity.propTypes = {
  localization: _propTypes.default.shape({
    button: _propTypes.default.string.isRequired
  }).isRequired,
  density: _propTypes.default.string.isRequired,
  onDensityChange: _propTypes.default.func.isRequired
};