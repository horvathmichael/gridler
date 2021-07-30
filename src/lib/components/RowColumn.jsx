import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { YesIcon, NoIcon } from './Icons';

const useStyles = makeStyles((theme) => ({
  column: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    verticalAlign: 'middle',
    maxWidth: 'unset',
    minWidth: ({ width }) => `${width}px` || '150px',
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}));

export default function RowColumn({ column, row, onClick }) {
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

RowColumn.propTypes = {
  column: PropTypes.shape({
    field: PropTypes.string,
    width: PropTypes.number,
    type: PropTypes.string,
    renderCell: PropTypes.func,
    valueGetter: PropTypes.func,
  }).isRequired,
  row: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func,
};

RowColumn.defaultProps = {
  onClick: undefined,
};
