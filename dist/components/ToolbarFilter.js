"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToolbarFilter;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));

var _Icons = require("./Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _core.makeStyles)(theme => ({
  icon: {
    marginRight: theme.spacing(1)
  },
  filter: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

function ToolbarFilter(_ref) {
  let {
    localization,
    columns,
    filters,
    onFilterChange
  } = _ref;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = (0, _react.useState)();

  const onMenuOpen = event => setAnchorEl(event.currentTarget);

  const onMenuClose = () => setAnchorEl();

  const countFilter = () => {
    let counter = null;
    Object.keys(filters).forEach(key => {
      if (filters[key] !== '' && filters[key] !== null) {
        counter += 1;
      }
    });
    return counter;
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Badge.default, {
    color: "primary",
    badgeContent: countFilter()
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    onClick: onMenuOpen
  }, /*#__PURE__*/_react.default.createElement(_Icons.FilterIcon, {
    className: classes.icon
  }), localization.button)), /*#__PURE__*/_react.default.createElement(_Popover.default, {
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
  }, columns.filter(column => column.filterable !== false).map(column => /*#__PURE__*/_react.default.createElement("div", {
    className: classes.filter,
    key: column.field
  }, (column.type === 'text' || !column.type) && /*#__PURE__*/_react.default.createElement(_TextField.default, {
    color: "primary",
    name: column.field,
    label: column.headerName,
    value: filters[column.field],
    onChange: event => onFilterChange(column.field, event.target.value),
    fullWidth: true
  }), column.type === 'boolean' && /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    label: column.headerName,
    control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      color: "primary",
      name: column.field,
      checked: filters[column.field] === null ? false : filters[column.field],
      onChange: (event, value) => {
        onFilterChange(column.field, filters[column.field] === false ? null : value);
      },
      indeterminate: filters[column.field] === false
    })
  })))));
}

ToolbarFilter.propTypes = {
  localization: _propTypes.default.shape({
    button: _propTypes.default.string.isRequired
  }).isRequired,
  columns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  filters: _propTypes.default.PropTypes.shape(),
  onFilterChange: _propTypes.default.func.isRequired
};
ToolbarFilter.defaultProps = {
  filters: {}
};