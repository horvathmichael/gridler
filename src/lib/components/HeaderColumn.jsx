import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { SortAscIcon, SortDescIcon } from './Icons';

const useStyles = makeStyles((theme) => ({
  column: {
    padding: theme.spacing(1),
    verticalAlign: 'middle',
    maxWidth: 'unset',
    minWidth: ({ width }) => `${width}px` || '150px',
    '&:hover': {
      cursor: ({ sortable }) => (sortable ? 'pointer' : 'default'),
    },
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}));

export default function HeaderColumn({ column, sort, onSortChange }) {
  const classes = useStyles({
    sortable: column.sortable !== false,
    width: column.width,
  });

  const onHeaderClick = () => {
    if (column.sortable !== false) {
      onSortChange(column);
    }
  };

  const renderHeader = () => {
    if (sort && sort.column === column) {
      return (
        <Box display="flex">
          <Typography color="primary" variant="h6">
            {column.headerName}
          </Typography>
          {sort.order === 'asc'
            ? <SortAscIcon className={classes.icon} />
            : <SortDescIcon className={classes.icon} />}

        </Box>
      );
    }
    return (
      <Typography color="primary" variant="h6">{column.headerName}</Typography>
    );
  };

  return (
    <Box className={classes.column} onClick={onHeaderClick}>
      {column.renderHeader
        ? column.renderHeader()
        : renderHeader()}
    </Box>
  );
}

HeaderColumn.propTypes = {
  column: PropTypes.shape({
    field: PropTypes.string,
    headerName: PropTypes.string,
    width: PropTypes.number,
    sortable: PropTypes.bool,
    renderHeader: PropTypes.func,
  }).isRequired,
  sort: PropTypes.shape({
    column: PropTypes.shape({}),
    order: PropTypes.string,
  }),
  onSortChange: PropTypes.func.isRequired,
};

HeaderColumn.defaultProps = {
  sort: undefined,
};
