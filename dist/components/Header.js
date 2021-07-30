"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

require("core-js/modules/es.array.sort.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _HeaderColumn = _interopRequireDefault(require("./HeaderColumn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _core.makeStyles)(theme => ({
  header: {
    padding: theme.spacing(1),
    display: 'flex',
    flexWrap: 'nowrap',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  }
}));

function Header(_ref) {
  let {
    columns,
    sort,
    onSortChange
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.header
  }, columns.filter(column => !column.hidden).map(column => /*#__PURE__*/_react.default.createElement(_HeaderColumn.default, {
    key: column.field,
    column: column,
    sort: sort,
    onSortChange: onSortChange
  })));
}

Header.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  sort: _propTypes.default.shape(),
  onSortChange: _propTypes.default.func.isRequired // filters: PropTypes.arrayOf(PropTypes.shape()).isRequired,

};
Header.defaultProps = {
  sort: undefined
};