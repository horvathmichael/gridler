import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { typeConstant } from '../../constant';

const useStyles = makeStyles((theme) => ({
  column: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    verticalAlign: 'middle',
    maxWidth: 'unset',
    minWidth: ({ width }) => `${width}px` || '150px',
  },
}));

export default function RowsRowCell({ column, row, onClick }) {
  const classes = useStyles({
    width: column.width,
  });

  const render = () => {
    if (column.renderCell) {
      return column.renderCell(row);
    }
    if (column.valueFormatter) {
      return <Typography>{column.valueFormatter(row[column.field])}</Typography>;
    }
    if (column.valueGetter) {
      return <Typography>{column.valueGetter(row)}</Typography>;
    }
    if (column.type === typeConstant.boolean) {
      return <Typography>{row[column.field] ? 'yes' : 'no'}</Typography>;
    }
    return <Typography>{row[column.field]}</Typography>;
  };

  return (
    <Box className={classes.column} onClick={() => (onClick ? onClick(row) : undefined)}>
      { render() }
    </Box>
  );
}

RowsRowCell.propTypes = {
  column: PropTypes.shape({
    field: PropTypes.string,
    width: PropTypes.number,
    type: PropTypes.string,
    renderCell: PropTypes.func,
    valueFormatter: PropTypes.func,
    valueGetter: PropTypes.func,
  }).isRequired,
  row: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func,
};

RowsRowCell.defaultProps = {
  onClick: undefined,
};
