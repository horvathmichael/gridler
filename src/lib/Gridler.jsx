import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Localization from './localization';
import DataGrid from './components/DataGrid';

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
  const [filtersState] = useState(filters);
  const [rowsState, setRowsState] = useState(rows.slice(page * pageSize, page * pageSize + pageSize));
  const [sortState, setSortState] = useState(sort);

  useEffect(() => {
    const newRows = rows.slice((page - 1) * pageSize, page * pageSize);
    setRowsState(newRows);
  }, [filtersState, page, pageSize]);

  const onColumnsChange = (column) => {
    setColumnsState(columnsState.map((item) => {
      if (item !== column) return item;
      return { ...column, hidden: !column.hidden };
    }));
  };

  const onFiltersChange = (filter) => {
    console.log(filter);
  };

  const onSortChange = (column) => {
    if (!sortState || sortState.field !== column.field) {
      setSortState({ field: column.field, order: ASC });
    } else if (sortState.field === column.field && sortState.order === DESC) {
      setSortState();
    } else if (sortState.field === column.field) {
      setSortState({ field: column.field, order: DESC });
    }
  };

  const onPageChange = (event, value) => setPage(Number.parseInt(value, 10));
  const onPageSizeChange = (event, value) => {
    setPage(1);
    setPageSize(Number.parseInt(value, 10));
  };

  return (
    <DataGrid
      localization={Localization[localization]}
      rows={rowsState}
      totalrows={rows}
      columns={columnsState}
      filters={filtersState}
      density={density}
      sort={sortState}
      page={page}
      pageSize={pageSize}
      onPageChange={onPageChange}
      onPageSizeChange={onPageSizeChange}
      onColumnsChange={onColumnsChange}
      onFiltersChange={onFiltersChange}
      onDensityChange={setDensity}
      onSortChange={onSortChange}
      onAddClick={onAddClick}
      onRowClick={onRowClick}
    />
  );
}

Gridler.propTypes = {
  localization: PropTypes.oneOf(['deDE']),
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape()),
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
  filters: undefined,
  sort: undefined,
  onAddClick: undefined,
  onRowClick: undefined,
};
