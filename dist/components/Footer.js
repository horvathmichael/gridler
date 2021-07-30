"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));

var _Icons = require("./Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    localization,
    rows,
    page,
    pageSize,
    onPageChange,
    onPageSizeChange
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

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.footer
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.text
  }, "".concat(localization.sum, ": ").concat(rows.length)), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.flexGrow
  }), /*#__PURE__*/_react.default.createElement(_Autocomplete.default, {
    className: classes.autocomplete,
    value: "".concat(pageSize),
    options: ['10', '20', '50'],
    onChange: onPageSizeChange,
    disableClearable: true,
    renderInput: params => /*#__PURE__*/_react.default.createElement(_TextField.default // eslint-disable-next-line react/jsx-props-no-spreading
    , _extends({}, params, {
      label: "".concat(localization.pageSize, ": ")
    })),
    renderOption: (option, _ref2) => {
      let {
        selected
      } = _ref2;
      return selected ? /*#__PURE__*/_react.default.createElement(_Box.default, {
        style: {
          width: '100%'
        },
        display: "flex",
        justify: "center"
      }, option) : option;
    }
  }), page > 1 && /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: () => onPageChange(undefined, "".concat(page - 1))
  }, /*#__PURE__*/_react.default.createElement(_Icons.ArrowLeftIcon, null)), /*#__PURE__*/_react.default.createElement(_Autocomplete.default, {
    className: classes.autocomplete,
    value: "".concat(page),
    options: countPages(),
    onChange: onPageChange,
    disableClearable: true,
    renderInput: params => /*#__PURE__*/_react.default.createElement(_TextField.default // eslint-disable-next-line react/jsx-props-no-spreading
    , _extends({}, params, {
      label: "".concat(localization.page, ": ")
    })),
    renderOption: (option, _ref3) => {
      let {
        selected
      } = _ref3;
      return selected ? /*#__PURE__*/_react.default.createElement(_Box.default, {
        style: {
          width: '100%'
        },
        display: "flex",
        justify: "center"
      }, option) : option;
    }
  }), page < rows.length / pageSize && /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: () => onPageChange(undefined, "".concat(page + 1))
  }, /*#__PURE__*/_react.default.createElement(_Icons.ArrowRightIcon, null)));
}

Footer.propTypes = {
  localization: _propTypes.default.shape({
    sum: _propTypes.default.string.isRequired,
    page: _propTypes.default.string.isRequired,
    pageSize: _propTypes.default.string.isRequired
  }).isRequired,
  rows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  page: _propTypes.default.number.isRequired,
  pageSize: _propTypes.default.number.isRequired,
  onPageChange: _propTypes.default.func.isRequired,
  onPageSizeChange: _propTypes.default.func.isRequired
};