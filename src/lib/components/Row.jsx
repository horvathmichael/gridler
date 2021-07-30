import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import RowColumn from './RowColumn';

const densities = {
  compact: 0,
  standard: 1,
  comfortable: 2,
};

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    flexWrap: 'nowrap',
    paddingBottom: ({ density }) => theme.spacing(densities[density]),
    paddingTop: ({ density }) => theme.spacing(densities[density]),
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      cursor: ({ onClick }) => (onClick ? 'pointer' : 'default'),
    },
  },
}));

export default function Row({
  row, columns, density, onClick,
}) {
  const classes = useStyles({ density, onClick });

  return (
    <div className={classes.row}>
      {columns
        .filter((column) => !column.hidden)
        .map((column) => (
          <RowColumn
            key={column.field}
            row={row}
            column={column}
            onClick={onClick}
          />
        ))}
    </div>
  );
}

Row.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  row: PropTypes.shape().isRequired,
  density: PropTypes.string,
  onClick: PropTypes.func,
};

Row.defaultProps = {
  onClick: undefined,
  density: 'standard',
};
