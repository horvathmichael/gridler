import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Badge from '@material-ui/core/Badge';

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
  columns,
  filter,
  icon,
  local,
  onFilterChange,
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState();

  const onMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const onMenuClose = () => setAnchorEl();
  const countFilter = () => {
    let counter = null;
    Object.keys(filter).forEach((key) => {
      if (filter[key] !== '' && filter[key] !== null) {
        counter += 1;
      }
    });
    return counter;
  };
  return (
    <div>
      <Badge color="primary" badgeContent={countFilter()}>
        <Button color="primary" onClick={onMenuOpen}>
          {icon}
          {` ${local.button}`}
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
                  value={filter[column.field] || ''}
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
                      checked={filter[column.field] === null ? false : filter[column.field]}
                      onChange={(event, value) => {
                        onFilterChange(column.field, filter[column.field] === false ? null : value);
                      }}
                      indeterminate={filter[column.field] === false}
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
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filter: PropTypes.PropTypes.shape().isRequired,
  icon: PropTypes.node.isRequired,
  local: PropTypes.shape({
    button: PropTypes.string.isRequired,
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
