import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { densityConstant } from '../../constant';

import ToolbarButton from './ToolbarButton';

const useStyles = makeStyles((theme) => ({
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

export default function ToolbarDensity({
  density,
  icon,
  local,
  onDensityChange,
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState();

  const onMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const onMenuClose = () => setAnchorEl();

  return (
    <div>
      <ToolbarButton icon={icon} label={local.button} onClick={onMenuOpen} />
      <Menu
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={onMenuClose}
      >
        <MenuItem
          className={density === densityConstant.compact ? classes.selected : classes.menuitem}
          onClick={() => onDensityChange(densityConstant.compact)}
        >
          {local.compact}
        </MenuItem>
        <MenuItem
          className={density === densityConstant.default ? classes.selected : classes.menuitem}
          onClick={() => onDensityChange(densityConstant.default)}
        >
          {local.default}
        </MenuItem>
        <MenuItem
          className={density === densityConstant.comfort ? classes.selected : classes.menuitem}
          onClick={() => onDensityChange(densityConstant.comfort)}
        >
          {local.comfort}
        </MenuItem>
      </Menu>
    </div>
  );
}

ToolbarDensity.propTypes = {
  density: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  local: PropTypes.shape({
    button: PropTypes.string.isRequired,
    compact: PropTypes.string.isRequired,
    default: PropTypes.string.isRequired,
    comfort: PropTypes.string.isRequired,
  }).isRequired,
  onDensityChange: PropTypes.func.isRequired,
};
