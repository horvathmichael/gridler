import React, { useState } from 'react';
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
  const [filtersState] = useState(filters);
  const [density, setDensity] = useState('standard');
  const [sortState, setSortState] = useState(sort);

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

  return (
    <DataGrid
      localization={Localization[localization]}
      rows={rows}
      columns={columnsState}
      filters={filtersState}
      density={density}
      sort={sortState}
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
