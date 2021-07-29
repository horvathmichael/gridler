import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { YesIcon, NoIcon } from './Icons';

const useStyles = makeStyles((theme) => ({
  column: {
    padding: theme.spacing(1),
    verticalAlign: 'middle',
    maxWidth: 'unset',
    minWidth: ({ width }) => width || '150px',
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}));

export default function DataGridRowColumn({ column, row, onClick }) {
  const classes = useStyles({
    width: column.width,
  });

  const onRowColumnClick = () => {
    if (onClick) {
      onClick(row);
    }
  };

  const renderCell = () => {
    if (column.renderCell) {
      return column.renderCell({ row });
    }
    if (column.valueGetter) {
      return column.valueGetter({ row });
    }
    if (column.type === 'boolean') {
      return row[column.field]
        ? <YesIcon />
        : <NoIcon />;
    }
    return <Typography>{row[column.field]}</Typography>;
  };

  return (
    <Box className={classes.column} onClick={onRowColumnClick}>
      {renderCell()}
    </Box>
  );
}

DataGridRowColumn.propTypes = {
  column: PropTypes.shape({
    field: PropTypes.string,
    width: PropTypes.string,
    type: PropTypes.string,
    renderCell: PropTypes.func,
    valueGetter: PropTypes.func,
  }).isRequired,
  row: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func,
};

DataGridRowColumn.defaultProps = {
  onClick: undefined,
};
