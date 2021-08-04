"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));

var _Icons = require("../Icons");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const useStyles = (0, _core.makeStyles)(theme => ({
  footer: {
    display: 'flex'
  },
  flexGrow: {
    flexGrow: 1
  },
  text: {
    padding: theme.spacing(2)
  },
  autocomplete: {
    padding: theme.spacing(1),
    width: '150px'
  }
}));

function Footer(_ref) {
  let {
    initialRows,
    local,
    onPageChange,
    onPageSizeChange,
    page,
    pageSize,
    rows
  } = _ref;
  const classes = useStyles();

  const countPages = () => {
    const pages = [];

    for (let index = 1; index <= rows.length / pageSize; index += 1) {
      pages.push("".concat(index));
    }

    if (rows.length % pageSize > 0) {
      pages.push("".concat(pages.length + 1));
    }

    return pages;
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.footer,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      className: classes.text,
      children: "".concat(local.rows, ": ").concat(rows.length, " / ").concat(initialRows.length)
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes.flexGrow
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Autocomplete.default, {
      className: classes.autocomplete,
      value: "".concat(pageSize),
      options: ['10', '20', '50'],
      onChange: onPageSizeChange,
      disableClearable: true,
      renderInput: params => /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default // eslint-disable-next-line react/jsx-props-no-spreading
      , _objectSpread(_objectSpread({}, params), {}, {
        label: "".concat(local.pageSize, ": ")
      })),
      renderOption: (option, _ref2) => {
        let {
          selected
        } = _ref2;
        return selected ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          style: {
            width: '100%'
          },
          display: "flex",
          justify: "center",
          children: option
        }) : option;
      }
    }), page > 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      onClick: () => onPageChange(undefined, "".concat(page - 1)),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.ArrowLeftIcon, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Autocomplete.default, {
      className: classes.autocomplete,
      value: "".concat(page),
      options: countPages(),
      onChange: onPageChange,
      disableClearable: true,
      renderInput: params => {
        const lastPage = countPages()[countPages().length - 1] || 1;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default // eslint-disable-next-line react/jsx-props-no-spreading
        , _objectSpread(_objectSpread({}, params), {}, {
          label: "".concat(local.page, " (").concat(params.inputProps.value, "/").concat(lastPage, "): ")
        }));
      },
      renderOption: (option, _ref3) => {
        let {
          selected
        } = _ref3;
        return selected ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          style: {
            width: '100%'
          },
          display: "flex",
          justify: "center",
          children: option
        }) : option;
      }
    }), page < rows.length / pageSize && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      onClick: () => onPageChange(undefined, "".concat(page + 1)),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icons.ArrowRightIcon, {})
    })]
  });
}

Footer.propTypes = {
  initialRows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  local: _propTypes.default.shape({
    rows: _propTypes.default.string.isRequired,
    page: _propTypes.default.string.isRequired,
    pageSize: _propTypes.default.string.isRequired
  }).isRequired,
  onPageChange: _propTypes.default.func.isRequired,
  onPageSizeChange: _propTypes.default.func.isRequired,
  page: _propTypes.default.number.isRequired,
  pageSize: _propTypes.default.number.isRequired,
  rows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired
};