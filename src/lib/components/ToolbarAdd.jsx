import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { AddIcon } from './Icons';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ToolbarExport({ localization, onAdd }) {
  const classes = useStyles();

  return (
    <div>
      <Button color="primary" onClick={onAdd}>
        <AddIcon className={classes.icon} />
        {localization.button}
      </Button>
    </div>
  );
}

ToolbarExport.propTypes = {
  localization: PropTypes.shape({
    button: PropTypes.string.isRequired,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
};
