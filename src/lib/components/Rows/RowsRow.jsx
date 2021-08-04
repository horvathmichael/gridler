import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import { densityConstant } from '../../constant';
import Cell from './RowsRowCell';

const densities = {
  [densityConstant.compact]: 0,
  [densityConstant.default]: 1,
  [densityConstant.comfort]: 2,
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
  columns,
  density,
  onClick,
  row,
}) {
  const classes = useStyles({ density, onClick });

  return (
    <div className={classes.row}>
      {columns
        .filter((column) => !column.hide)
        .map((column) => (
          <Cell
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
  density: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  row: PropTypes.shape().isRequired,
};

Row.defaultProps = {
  onClick: undefined,
};
