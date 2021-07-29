import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { FilterIcon } from './Icons';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  filter: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default function DataGridToolbarFilter({
  localization,
  columns,
  filters,
  onFiltersChange,
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState();

  const onMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const onMenuClose = () => setAnchorEl();

  return (
    <div>
      <Button color="primary" onClick={onMenuOpen}>
        <FilterIcon className={classes.icon} />
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
        {columns
          .filter((column) => column.filterable !== false)
          .map((column) => (
            <div className={classes.filter} key={column.field}>
              { (column.type === 'text' || !column.type) && (
                <TextField
                  color="primary"
                // variant=""
                  name={column.field}
                  label={column.headerName}
                  value={filters[column.field]}
                  onChange={onFiltersChange}
                  fullWidth
                />
              )}
              { (column.type === 'boolean') && (
                <FormControlLabel
                  label={column.headerName}
                  control={(
                    <Checkbox
                      color="primary"
                      name={column.field}
                      checked={filters[column.field] === null ? false : filters[column.field]}
                      onChange={onFiltersChange}
                      indeterminate={filters[column.field] === false}
                    />
                  )}
                />
              )}
            </div>
          ))}
      </Popover>
    </div>
  );
}

DataGridToolbarFilter.propTypes = {
  localization: PropTypes.shape({
    button: PropTypes.string.isRequired,
  }).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filters: PropTypes.PropTypes.shape(),
  onFiltersChange: PropTypes.func.isRequired,
};

DataGridToolbarFilter.defaultProps = {
  filters: {},
};
