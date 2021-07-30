"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RowColumn;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Icons = require("./Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _core.makeStyles)(theme => ({
  column: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    verticalAlign: 'middle',
    maxWidth: 'unset',
    minWidth: _ref => {
      let {
        width
      } = _ref;
      return "".concat(width, "px") || '150px';
    }
  },
  icon: {
    marginLeft: theme.spacing(1)
  }
}));

function RowColumn(_ref2) {
  let {
    column,
    row,
    onClick
  } = _ref2;
  const classes = useStyles({
    width: column.width
  });

  const onRowColumnClick = () => {
    if (onClick) {
      onClick(row);
    }
  };

  const renderCell = () => {
    if (column.renderCell) {
      return column.renderCell({
        row
      });
    }

    if (column.valueGetter) {
      return column.valueGetter({
        row
      });
    }

    if (column.type === 'boolean') {
      return row[column.field] ? /*#__PURE__*/_react.default.createElement(_Icons.YesIcon, null) : /*#__PURE__*/_react.default.createElement(_Icons.NoIcon, null);
    }

    return /*#__PURE__*/_react.default.createElement(_Typography.default, null, row[column.field]);
  };

  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: classes.column,
    onClick: onRowColumnClick
  }, renderCell());
}

RowColumn.propTypes = {
  column: _propTypes.default.shape({
    field: _propTypes.default.string,
    width: _propTypes.default.number,
    type: _propTypes.default.string,
    renderCell: _propTypes.default.func,
    valueGetter: _propTypes.default.func
  }).isRequired,
  row: _propTypes.default.shape({}).isRequired,
  onClick: _propTypes.default.func
};
RowColumn.defaultProps = {
  onClick: undefined
};