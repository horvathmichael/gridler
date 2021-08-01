"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Gridler;
exports.DESC = exports.ASC = void 0;

require("core-js/modules/es.array.sort.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _localization = _interopRequireDefault(require("../localization"));

var _DataGrid = _interopRequireDefault(require("./DataGrid"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ASC = 'asc';
exports.ASC = ASC;
const DESC = 'desc';
exports.DESC = DESC;

function Gridler(_ref) {
  let {
    localization,
    rows,
    columns,
    filters,
    sort,
    onAddClick,
    onRowClick
  } = _ref;
  const [columnsState, setColumnsState] = (0, _react.useState)(columns);
  const [density, setDensity] = (0, _react.useState)('standard');
  const [page, setPage] = (0, _react.useState)(1);
  const [pageSize, setPageSize] = (0, _react.useState)(10);
  const [activeFilters, setActiveFilters] = (0, _react.useState)(filters);
  const [filteredRows, setFilteredRows] = (0, _react.useState)(rows);
  const [pageRows, setPageRows] = (0, _react.useState)(rows.slice(page * pageSize, page * pageSize + pageSize));
  const [activeSort, setActiveSort] = (0, _react.useState)(sort);
  (0, _react.useEffect)(() => {
    setFilteredRows(rows.filter(row => {
      let result = true;
      Object.keys(activeFilters).forEach(field => {
        const column = columns.find(item => item.field === field);

        if (column.type === 'text' || !column.type) {
          result = result && row[column.field].includes(activeFilters[column.field]);
        } else if (column.type === 'boolean') {
          result = result && (activeFilters[column.field] === null || row[column.field] === activeFilters[column.field]);
        } else {
          console.error("MISSING FILTER TYPE: ".concat(column.type));
        }
      });
      return result;
    }).sort((a, b) => {
      if (!activeSort || !activeSort.column) {
        return 0;
      }

      if (activeSort.column.type === 'text' || !activeSort.column.type) {
        return activeSort.order === ASC ? a[activeSort.column.field].localeCompare(b[activeSort.column.field]) : b[activeSort.column.field].localeCompare(a[activeSort.column.field]);
      }

      return 0;
    }));
    setPage(1);
  }, [columns, rows, activeFilters, activeSort]);
  (0, _react.useEffect)(() => setPageRows(filteredRows.slice((page - 1) * pageSize, page * pageSize)), [filteredRows, page, pageSize]);

  const onColumnsChange = column => {
    setColumnsState(columnsState.map(item => {
      if (item !== column) return item;
      return _objectSpread(_objectSpread({}, column), {}, {
        hidden: !column.hidden
      });
    }));
  };

  const onFilterChange = (column, value) => setActiveFilters(_objectSpread(_objectSpread({}, activeFilters), {}, {
    [column]: value
  }));

  const onSortChange = column => {
    if (!activeSort || activeSort.column !== column) {
      setActiveSort({
        column,
        order: ASC
      });
    } else if (activeSort.column === column && activeSort.order === DESC) {
      setActiveSort();
    } else if (activeSort.column === column) {
      setActiveSort({
        column,
        order: DESC
      });
    }
  };

  const onPageChange = (event, value) => setPage(Number.parseInt(value, 10));

  const onPageSizeChange = (event, value) => {
    setPage(1);
    setPageSize(Number.parseInt(value, 10));
  };

  const onExport = () => {
    alert('Der Export befindet sich in Entwicklung');
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DataGrid.default, {
    localization: _localization.default[localization],
    rows: rows,
    filteredRows: filteredRows,
    pageRows: pageRows,
    totalrows: rows,
    columns: columnsState,
    filters: activeFilters,
    density: density,
    sort: activeSort,
    page: page,
    pageSize: pageSize,
    onPageChange: onPageChange,
    onPageSizeChange: onPageSizeChange,
    onColumnsChange: onColumnsChange,
    onFilterChange: onFilterChange,
    onDensityChange: setDensity,
    onSortChange: onSortChange,
    onExport: onExport,
    onAddClick: onAddClick,
    onRowClick: onRowClick
  });
}

Gridler.propTypes = {
  localization: _propTypes.default.oneOf(['deDE']),
  rows: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  columns: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  filters: _propTypes.default.shape(),
  sort: _propTypes.default.arrayOf(_propTypes.default.shape({
    field: _propTypes.default.string.isRequired,
    order: _propTypes.default.oneOf([ASC, DESC]).isRequired
  })),
  onAddClick: _propTypes.default.func,
  onRowClick: _propTypes.default.func
};
Gridler.defaultProps = {
  localization: 'deDE',
  filters: {},
  sort: undefined,
  onAddClick: undefined,
  onRowClick: undefined
};