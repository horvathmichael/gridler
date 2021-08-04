import React from 'react';
import PropTypes from 'prop-types';

import RowsRow from './RowsRow';

export default function Rows({
  pageRows,
  columns,
  density,
  onRowClick,
}) {
  return pageRows.map((row) => (
    <RowsRow
      key={row.id || row}
      row={row}
      columns={columns}
      density={density}
      onClick={onRowClick}
    />
  ));
}

Rows.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  density: PropTypes.string.isRequired,
  onRowClick: PropTypes.func,
  pageRows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

Rows.defaultProps = {
  onRowClick: undefined,
};
