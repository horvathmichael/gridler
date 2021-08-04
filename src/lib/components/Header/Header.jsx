import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import HeaderColumn from './HeaderColumn';

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(1),
    display: 'flex',
    flexWrap: 'nowrap',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
}));

export default function Header({ columns, sort, onSortChange }) {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      {columns
        .filter((column) => !column.hide)
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
};

Header.defaultProps = {
  sort: undefined,
};
