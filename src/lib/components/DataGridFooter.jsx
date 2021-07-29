import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  sum: {
    padding: theme.spacing(2),
  },
}));

export default function DataGridFooter({ localization, rows }) {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography className={classes.sum}>
        {`${localization.sum}: ${rows.length}`}
      </Typography>
    </div>
  );
}

DataGridFooter.propTypes = {
  localization: PropTypes.shape({
    sum: PropTypes.string,
  }).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
