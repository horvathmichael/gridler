import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { DownloadIcon } from './Icons';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
}));

export default function DataGridToolbarExport({ localization, onExport }) {
  const classes = useStyles();

  return (
    <div>
      <Button color="primary" onClick={onExport}>
        <DownloadIcon className={classes.icon} />
        {localization.button}
      </Button>
    </div>
  );
}

DataGridToolbarExport.propTypes = {
  localization: PropTypes.shape({
    button: PropTypes.string.isRequired,
  }).isRequired,
  onExport: PropTypes.func.isRequired,
};
