import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import DataGridRowColumn from './DataGridRowColumn';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      cursor: ({ onClick }) => (onClick ? 'pointer' : 'default'),
    },
  },
}));

export default function DataGridRow({ row, columns, onClick }) {
  const classes = useStyles({
    onClick,
  });

  return (
    <div className={classes.row}>
      {columns
        .filter((column) => !column.hidden)
        .map((column) => (
          <DataGridRowColumn
            key={row[column.field]}
            row={row}
            column={column}
            onClick={onClick}
          />
        ))}
    </div>
  );
}

DataGridRow.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  row: PropTypes.shape().isRequired,
  onClick: PropTypes.func,
};

DataGridRow.defaultProps = {
  onClick: undefined,
};
