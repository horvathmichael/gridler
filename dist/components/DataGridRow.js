"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataGridRow;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _DataGridRowColumn = _interopRequireDefault(require("./DataGridRowColumn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _core.makeStyles)(theme => ({
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      cursor: _ref => {
        let {
          onClick
        } = _ref;
        return onClick ? 'pointer' : 'default';
      }
    }
  }
}));

function DataGridRow(_ref2) {
  let {
    row,
    columns,
    onClick
  } = _ref2;
  const classes = useStyles({
    onClick
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.row
  }, columns.filter(column => !column.hidden).map(column => /*#__PURE__*/_react.default.createElement(_DataGridRowColumn.default, {
    key: row[column.field],
    row: row,
    column: column,
    onClick: onClick
  })));
}

DataGridRow.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  row: _propTypes.default.shape().isRequired,
  onClick: _propTypes.default.func
};
DataGridRow.defaultProps = {
  onClick: undefined
};