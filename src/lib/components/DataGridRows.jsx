import React from 'react';
import PropTypes from 'prop-types';

import DataGridRow from './DataGridRow';

export default function DataGridRows({
  rows,
  columns,
  // filters,
  // sort,
  onRowClick,
}) {
  return rows
  // .filter((column) => !column.hidden)
    .map((row) => (
      <DataGridRow
        key={row}
        row={row}
        columns={columns}
        onClick={onRowClick}
      />
    ));
}

DataGridRows.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  // filters: PropTypes.arrayOf(PropTypes.shape()),
  // sort: PropTypes.shape(),
  // filters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onRowClick: PropTypes.func,
};

DataGridRows.defaultProps = {
  // filters: undefined,
  // sort: undefined,
  onRowClick: undefined,
};
