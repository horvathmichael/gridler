import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

export default function Rows({
  rows,
  columns,
  density,
  // filters,
  // sort,
  onRowClick,
}) {
  return rows
  // .filter((column) => !column.hidden)
    .map((row) => (
      <Row
        key={row.id || row}
        row={row}
        columns={columns}
        density={density}
        onClick={onRowClick}
      />
    ));
}

Rows.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  density: PropTypes.string.isRequired,
  // filters: PropTypes.arrayOf(PropTypes.shape()),
  // sort: PropTypes.shape(),
  // filters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onRowClick: PropTypes.func,
};

Rows.defaultProps = {
  // filters: undefined,
  // sort: undefined,
  onRowClick: undefined,
};
