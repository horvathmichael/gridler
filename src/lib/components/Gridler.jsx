import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Localization from '../localization';
import DataGrid from './DataGrid';

export const ASC = 'asc';
export const DESC = 'desc';

export default function Gridler({
  localization,
  rows,
  columns,
  filters,
  sort,
  onAddClick,
  onRowClick,
}) {
  const [columnsState, setColumnsState] = useState(columns);
  const [density, setDensity] = useState('standard');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [activeFilters, setActiveFilters] = useState(filters);
  const [filteredRows, setFilteredRows] = useState(rows);
  const [pageRows, setPageRows] = useState(rows.slice(page * pageSize, page * pageSize + pageSize));
  const [activeSort, setActiveSort] = useState(sort);

  useEffect(() => {
    setFilteredRows(
      rows
        .filter((row) => {
          let result = true;
          Object.keys(activeFilters).forEach((field) => {
            const column = columns.find((item) => item.field === field);
            if (column.type === 'text' || !column.type) {
              result = result && row[column.field].includes(activeFilters[column.field]);
            } else if (column.type === 'boolean') {
              result = result && (
                activeFilters[column.field] === null
              || row[column.field] === activeFilters[column.field]);
            } else {
              console.error(`MISSING FILTER TYPE: ${column.type}`);
            }
          });
          return result;
        })
        .sort((a, b) => {
          if (!activeSort || !activeSort.column) {
            return 0;
          }
          if (activeSort.column.type === 'text' || !activeSort.column.type) {
            return activeSort.order === ASC
              ? a[activeSort.column.field].localeCompare(b[activeSort.column.field])
              : b[activeSort.column.field].localeCompare(a[activeSort.column.field]);
          }
          return 0;
        }),
    );
    setPage(1);
  }, [columns, rows, activeFilters, activeSort]);

  useEffect(() => setPageRows(filteredRows.slice((page - 1) * pageSize, page * pageSize)), [filteredRows, page, pageSize]);

  const onColumnsChange = (column) => {
    setColumnsState(columnsState.map((item) => {
      if (item !== column) return item;
      return { ...column, hidden: !column.hidden };
    }));
  };

  const onFilterChange = (column, value) => setActiveFilters({ ...activeFilters, [column]: value });

  const onSortChange = (column) => {
    if (!activeSort || activeSort.column !== column) {
      setActiveSort({ column, order: ASC });
    } else if (activeSort.column === column && activeSort.order === DESC) {
      setActiveSort();
    } else if (activeSort.column === column) {
      setActiveSort({ column, order: DESC });
    }
  };

  const onPageChange = (event, value) => setPage(Number.parseInt(value, 10));
  const onPageSizeChange = (event, value) => {
    setPage(1);
    setPageSize(Number.parseInt(value, 10));
  };

  const onExport = () => { alert('Der Export befindet sich in Entwicklung'); };

  return (
    <DataGrid
      localization={Localization[localization]}
      rows={rows}
      filteredRows={filteredRows}
      pageRows={pageRows}
      totalrows={rows}
      columns={columnsState}
      filters={activeFilters}
      density={density}
      sort={activeSort}
      page={page}
      pageSize={pageSize}
      onPageChange={onPageChange}
      onPageSizeChange={onPageSizeChange}
      onColumnsChange={onColumnsChange}
      onFilterChange={onFilterChange}
      onDensityChange={setDensity}
      onSortChange={onSortChange}
      onExport={onExport}
      onAddClick={onAddClick}
      onRowClick={onRowClick}
    />
  );
}

Gridler.propTypes = {
  localization: PropTypes.oneOf(['deDE']),
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filters: PropTypes.shape(),
  sort: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      order: PropTypes.oneOf([ASC, DESC]).isRequired,
    }),
  ),
  onAddClick: PropTypes.func,
  onRowClick: PropTypes.func,
};

Gridler.defaultProps = {
  localization: 'deDE',
  filters: {},
  sort: undefined,
  onAddClick: undefined,
  onRowClick: undefined,
};
