import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { DensityIcon } from './Icons';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  menuitem: {
    padding: theme.spacing(1),
    width: theme.spacing(15),
  },
  selected: {
    padding: theme.spacing(1),
    color: theme.palette.primary.main,
    width: theme.spacing(15),
  },
}));

const densities = ['compact', 'standard', 'comfortable'];

export default function ToolbarDensity({
  localization,
  density,
  onDensityChange,
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState();

  const onMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const onMenuClose = () => setAnchorEl();

  return (
    <div>
      <Button color="primary" onClick={onMenuOpen}>
        <DensityIcon className={classes.icon} />
        {localization.button}
      </Button>
      <Menu
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={onMenuClose}
      >
        {densities.map((item) => (
          <MenuItem
            key={item}
            className={item === density ? classes.selected : classes.menuitem}
            onClick={() => onDensityChange(item)}
          >
            {localization[item]}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

ToolbarDensity.propTypes = {
  localization: PropTypes.shape({
    button: PropTypes.string.isRequired,
  }).isRequired,
  density: PropTypes.string.isRequired,
  onDensityChange: PropTypes.func.isRequired,
};
