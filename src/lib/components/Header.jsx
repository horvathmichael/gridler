import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import HeaderColumn from './HeaderColumn';

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
}));

export default function Header({ columns, sort, onSortChange }) {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      {columns
        .filter((column) => !column.hidden)
        .map((column) => (
          <HeaderColumn
            key={column.field}
            column={column}
            sort={sort}
            onSortChange={onSortChange}
          />
        ))}
    </div>
  );
}

Header.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  sort: PropTypes.shape(),
  onSortChange: PropTypes.func.isRequired,
  // filters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

Header.defaultProps = {
  sort: undefined,
};
