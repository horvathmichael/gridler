"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RowsRowCell;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _constant = require("../../constant");

var _jsxRuntime = require("react/jsx-runtime");

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
  }
}));

function RowsRowCell(_ref2) {
  let {
    column,
    row,
    onClick: _onClick
  } = _ref2;
  const classes = useStyles({
    width: column.width
  });

  const render = () => {
    if (column.renderCell) {
      return column.renderCell(row);
    }

    if (column.valueFormatter) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        children: column.valueFormatter(row[column.field])
      });
    }

    if (column.valueGetter) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        children: column.valueGetter(row)
      });
    }

    if (column.type === _constant.typeConstant.boolean) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        children: row[column.field] ? 'yes' : 'no'
      });
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      children: row[column.field]
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
    className: classes.column,
    onClick: () => _onClick ? _onClick(row) : undefined,
    children: render()
  });
}

RowsRowCell.propTypes = {
  column: _propTypes.default.shape({
    field: _propTypes.default.string,
    width: _propTypes.default.number,
    type: _propTypes.default.string,
    renderCell: _propTypes.default.func,
    valueFormatter: _propTypes.default.func,
    valueGetter: _propTypes.default.func
  }).isRequired,
  row: _propTypes.default.shape({}).isRequired,
  onClick: _propTypes.default.func
};
RowsRowCell.defaultProps = {
  onClick: undefined
};