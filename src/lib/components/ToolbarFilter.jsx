import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Badge from '@material-ui/core/Badge';

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

export default function ToolbarFilter({
  localization,
  columns,
  filters,
  onFilterChange,
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState();

  const onMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const onMenuClose = () => setAnchorEl();
  const countFilter = () => {
    let counter = null;
    Object.keys(filters).forEach((key) => {
      if (filters[key] !== '' && filters[key] !== null) {
        counter += 1;
      }
    });
    return counter;
  };
  return (
    <div>
      <Badge color="primary" badgeContent={countFilter()}>
        <Button color="primary" onClick={onMenuOpen}>
          <FilterIcon className={classes.icon} />
          {localization.button}
        </Button>
      </Badge>
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
                  name={column.field}
                  label={column.headerName}
                  value={filters[column.field]}
                  onChange={(event) => onFilterChange(column.field, event.target.value)}
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
                      onChange={(event, value) => {
                        onFilterChange(column.field, filters[column.field] === false ? null : value);
                      }}
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

ToolbarFilter.propTypes = {
  localization: PropTypes.shape({
    button: PropTypes.string.isRequired,
  }).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filters: PropTypes.PropTypes.shape(),
  onFilterChange: PropTypes.func.isRequired,
};

ToolbarFilter.defaultProps = {
  filters: {},
};
