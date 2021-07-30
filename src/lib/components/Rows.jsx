import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

export default function Rows({
  pageRows,
  columns,
  density,
  onRowClick,
}) {
  return pageRows.map((row) => (
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
  pageRows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  density: PropTypes.string.isRequired,
  onRowClick: PropTypes.func,
};

Rows.defaultProps = {
  onRowClick: undefined,
};
