import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import DataGridHeaderColumn from './DataGridHeaderColumn';

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
}));

export default function DataGridHeader({ columns, sort, onSortChange }) {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      {columns
        .filter((column) => !column.hidden)
        .map((column) => (
          <DataGridHeaderColumn
            key={column.field}
            column={column}
            sort={sort}
            onSortChange={onSortChange}
          />
        ))}
    </div>
  );
}

DataGridHeader.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  sort: PropTypes.shape(),
  onSortChange: PropTypes.func.isRequired,
  // filters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

DataGridHeader.defaultProps = {
  sort: undefined,
};
