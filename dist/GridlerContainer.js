"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GridlerContainer;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constant = require("./constant");

var _GridlerNode = _interopRequireDefault(require("./GridlerNode"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function GridlerContainer(_ref) {
  let {
    filename,
    height,
    initialColumns,
    initialRows,
    initialDensity,
    initialFilter,
    initialSort,
    initialPage,
    initialPageSize,
    local,
    onAddClick,
    onRowClick,
    toolbarSettings
  } = _ref;
  const [columns, setColumns] = (0, _react.useState)(initialColumns);
  const [rows, setRows] = (0, _react.useState)(initialRows);
  const [density, setDensity] = (0, _react.useState)(initialDensity);
  const [filter, setFilter] = (0, _react.useState)(initialFilter);
  const [page, setPage] = (0, _react.useState)(initialPage);
  const [pageSize, setPageSize] = (0, _react.useState)(initialPageSize);
  const [pageRows, setPageRows] = (0, _react.useState)(initialRows.slice((page - 1) * pageSize, page * pageSize));
  const [sort, setSort] = (0, _react.useState)(initialSort);
  (0, _react.useEffect)(() => {
    // TODO
    const sortComparator = {
      [_constant.typeConstant.text]: _ref2 => {
        let {
          a,
          b,
          order
        } = _ref2;
        return order === _constant.sortOrderConstant.asc ? a.localeCompare(b) : b.localeCompare(a);
      },
      [_constant.typeConstant.number]: _ref3 => {
        let {
          a,
          b,
          order
        } = _ref3;
        return order === _constant.sortOrderConstant.asc ? a.localeCompare(b) : b.localeCompare(a);
      },
      [_constant.typeConstant.date]: _ref4 => {
        let {
          a,
          b,
          order
        } = _ref4;
        return order === _constant.sortOrderConstant.asc ? a.localeCompare(b) : b.localeCompare(a);
      },
      [_constant.typeConstant.dateTime]: _ref5 => {
        let {
          a,
          b,
          order
        } = _ref5;
        return order === _constant.sortOrderConstant.asc ? a.localeCompare(b) : b.localeCompare(a);
      },
      [_constant.typeConstant.boolean]: _ref6 => {
        let {
          a,
          b,
          order
        } = _ref6;
        return order === _constant.sortOrderConstant.asc ? a.localeCompare(b) : b.localeCompare(a);
      },
      [_constant.typeConstant.select]: _ref7 => {
        let {
          a,
          b,
          order
        } = _ref7;
        return order === _constant.sortOrderConstant.asc ? a.localeCompare(b) : b.localeCompare(a);
      }
    };
    const typeFilter = {
      [_constant.typeConstant.text]: (field, value) => value.includes(filter[field]),
      [_constant.typeConstant.number]: (field, value) => value === filter[field],
      [_constant.typeConstant.date]: (field, value) => value === filter[field],
      [_constant.typeConstant.dateTime]: (field, value) => value === filter[field],
      [_constant.typeConstant.boolean]: (field, value) => value === filter[field],
      [_constant.typeConstant.select]: (field, value) => value === filter[field]
    };
    setRows(initialRows.filter(row => {
      let result = true;
      Object.keys(filter).forEach(field => {
        const {
          type,
          valueGetter
        } = columns.find(item => item.field === field);
        const value = valueGetter ? valueGetter(row) : row[field];
        result = result && typeFilter[type || _constant.typeConstant.text](field, value);
      });
      return result;
    }).sort((a, b) => {
      if (!sort || !sort.column) {
        return 0;
      }

      if (sort.column.sortComparator) {
        return sort.order === _constant.sortOrderConstant.asc ? sort.column.sortComparator(a, b) : sort.column.sortComparator(b, a);
      }

      return sortComparator[sort.column.type || _constant.typeConstant.text]({
        order: sort.order,
        a: sort.column.valueGetter ? sort.column.valueGetter(a) : a[sort.column.field],
        b: sort.column.valueGetter ? sort.column.valueGetter(b) : b[sort.column.field]
      });
    }));
    setPage(1);
  }, [initialRows, columns, filter, sort]);
  (0, _react.useEffect)(() => setPageRows(rows.slice((page - 1) * pageSize, page * pageSize)), [rows, page, pageSize]);

  const onColumnsChange = column => {
    setColumns(columns.map(item => {
      if (item !== column) return item;
      return _objectSpread(_objectSpread({}, column), {}, {
        hide: !column.hide
      });
    }));
  };

  const onFilterChange = (field, value) => setFilter(_objectSpread(_objectSpread({}, filter), {}, {
    [field]: value
  }));

  const onSortChange = column => {
    if (!sort || sort.column !== column) {
      setSort({
        column,
        order: _constant.sortOrderConstant.asc
      });
    } else if (sort.column === column && sort.order === _constant.sortOrderConstant.desc) {
      setSort();
    } else if (sort.column === column && sort.order === _constant.sortOrderConstant.asc) {
      setSort({
        column,
        order: _constant.sortOrderConstant.desc
      });
    }
  };

  const onPageChange = (event, value) => setPage(Number.parseInt(value, 10));

  const onPageSizeChange = (event, value) => {
    setPage(1);
    setPageSize(Number.parseInt(value, 10));
  };

  const onExportClick = () => {
    alert('Der Export befindet sich in Entwicklung');
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_GridlerNode.default, {
    columns: columns,
    density: density,
    filename: filename,
    filter: filter,
    height: height,
    initialRows: initialRows,
    local: local,
    onAddClick: onAddClick,
    onColumnsChange: onColumnsChange,
    onDensityChange: setDensity,
    onExportClick: onExportClick,
    onFilterChange: onFilterChange,
    onPageChange: onPageChange,
    onPageSizeChange: onPageSizeChange,
    onRowClick: onRowClick,
    onSortChange: onSortChange,
    page: page,
    pageRows: pageRows,
    pageSize: pageSize,
    rows: rows,
    sort: sort,
    toolbarSettings: toolbarSettings
  });
}

GridlerContainer.propTypes = {
  filename: _propTypes.default.string.isRequired,
  height: _propTypes.default.number.isRequired,
  initialColumns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  initialRows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  initialDensity: _propTypes.default.oneOf([_constant.densityConstant.compact, _constant.densityConstant.default, _constant.densityConstant.comfort]).isRequired,
  initialFilter: _propTypes.default.shape({}).isRequired,
  initialSort: _propTypes.default.shape({
    field: _propTypes.default.string.isRequired,
    order: _propTypes.default.oneOf([_constant.sortOrderConstant.asc, _constant.sortOrderConstant.desc])
  }),
  initialPage: _propTypes.default.number.isRequired,
  initialPageSize: _propTypes.default.number.isRequired,
  local: _propTypes.default.shape({}).isRequired,
  onAddClick: _propTypes.default.func,
  onRowClick: _propTypes.default.func,
  toolbarSettings: _propTypes.default.shape({}).isRequired
};
GridlerContainer.defaultProps = {
  initialSort: undefined,
  onAddClick: undefined,
  onRowClick: undefined
};