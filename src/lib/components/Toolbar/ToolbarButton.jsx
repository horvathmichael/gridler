import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  toolbarbuttonlabel: {
    textDecoration: 'none',
    marginLeft: theme.spacing(1),
  },
}));

export default function ToolbarButton({ icon, label, onClick }) {
  const classes = useStyles();
  return (
    <Button color="primary" onClick={onClick}>
      {icon}
      <Typography className={classes.toolbarbuttonlabel}>{label}</Typography>
    </Button>
  );
}

ToolbarButton.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ToolbarButton.defaultProps = {
  onClick: undefined,
};
