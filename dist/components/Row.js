"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Row;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _RowColumn = _interopRequireDefault(require("./RowColumn"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const densities = {
  compact: 0,
  standard: 1,
  comfortable: 2
};
const useStyles = (0, _core.makeStyles)(theme => ({
  row: {
    display: 'flex',
    flexWrap: 'nowrap',
    paddingBottom: _ref => {
      let {
        density
      } = _ref;
      return theme.spacing(densities[density]);
    },
    paddingTop: _ref2 => {
      let {
        density
      } = _ref2;
      return theme.spacing(densities[density]);
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      cursor: _ref3 => {
        let {
          onClick
        } = _ref3;
        return onClick ? 'pointer' : 'default';
      }
    }
  }
}));

function Row(_ref4) {
  let {
    row,
    columns,
    density,
    onClick
  } = _ref4;
  const classes = useStyles({
    density,
    onClick
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: classes.row,
    children: columns.filter(column => !column.hidden).map(column => /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowColumn.default, {
      row: row,
      column: column,
      onClick: onClick
    }, column.field))
  });
}

Row.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  row: _propTypes.default.shape().isRequired,
  density: _propTypes.default.string,
  onClick: _propTypes.default.func
};
Row.defaultProps = {
  onClick: undefined,
  density: 'standard'
};