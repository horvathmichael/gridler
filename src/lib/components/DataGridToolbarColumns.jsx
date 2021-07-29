import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { ColumnIcon } from './Icons';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  switch: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default function DataGridToolbarColumns({
  columns,
  localization,
  onColumnsChange,
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState();

  const onMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const onMenuClose = () => setAnchorEl();

  return (
    <div>
      <Button color="primary" onClick={onMenuOpen}>
        <ColumnIcon className={classes.icon} />
        {localization.button}
      </Button>
      <Popover
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={onMenuClose}
      >
        {columns.map((column) => (
          <div className={classes.switch} key={column.field}>
            <FormControlLabel
              label={column.headerName}
              control={(
                <Switch
                  color="primary"
                  checked={!column.hidden}
                  onChange={() => onColumnsChange(column)}
                  name={column.field}
                />
              )}
            />
          </div>
        ))}
      </Popover>
    </div>
  );
}

DataGridToolbarColumns.propTypes = {
  localization: PropTypes.shape({
    button: PropTypes.string.isRequired,
  }).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onColumnsChange: PropTypes.func.isRequired,
};
