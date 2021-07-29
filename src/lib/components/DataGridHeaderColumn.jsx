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
    minWidth: ({ width }) => width || '150px',
    '&:hover': {
      cursor: ({ sortable }) => (sortable ? 'pointer' : 'default'),
    },
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}));

export default function DataGridHeaderColumn({ column, sort, onSortChange }) {
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
    if (sort && sort.field === column.field) {
      return (
        <Box display="flex">
          <Typography>
            {column.headerName}
          </Typography>
          {sort.order === 'asc'
            ? <SortAscIcon className={classes.icon} />
            : <SortDescIcon className={classes.icon} />}

        </Box>
      );
    }
    return (
      <Typography>{column.headerName}</Typography>
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

DataGridHeaderColumn.propTypes = {
  column: PropTypes.shape({
    field: PropTypes.string,
    headerName: PropTypes.string,
    width: PropTypes.string,
    sortable: PropTypes.bool,
    renderHeader: PropTypes.func,
  }).isRequired,
  sort: PropTypes.shape({
    field: PropTypes.string,
    order: PropTypes.string,
  }),
  onSortChange: PropTypes.func.isRequired,
};

DataGridHeaderColumn.defaultProps = {
  sort: undefined,
};
