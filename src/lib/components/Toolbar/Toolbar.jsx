import React from 'react';
import PropTypes from 'prop-types';
import MuiToolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';

import ToolbarAdd from './ToolbarAdd';
import ToolbarColumns from './ToolbarColumns';
import ToolbarFilter from './ToolbarFilter';
import ToolbarDensity from './ToolbarDensity';
import ToolbarExport from './ToolbarExport';

const useStyles = makeStyles(() => ({
  toolbar: {
    minHeight: 'unset',
  },
  flexGrow: {
    flexGrow: 1,
  },
}));

export default function Toolbar({
  columns,
  density,
  filename,
  filter,
  local,
  onAddClick,
  onColumnsChange,
  onDensityChange,
  onFilterChange,
  rows,
  settings,
}) {
  const classes = useStyles();

  return (
    <MuiToolbar className={classes.toolbar}>
      { onAddClick && (
        <ToolbarAdd
          icon={settings.AddIcon}
          local={local.add}
          onAddClick={onAddClick}
        />
      )}
      <div className={classes.flexGrow} />
      { !settings.disableColumnSelector && (
        <ToolbarColumns
          columns={columns}
          icon={settings.ColumnsIcon}
          local={local.columns}
          onColumnsChange={onColumnsChange}
        />
      )}
      { !settings.disableDensitySelector && (
        <ToolbarDensity
          density={density}
          icon={settings.DensityIcon}
          local={local.density}
          onDensityChange={onDensityChange}
        />
      )}
      { !settings.disableExport && (
        <ToolbarExport
          columns={columns}
          filename={filename}
          icon={settings.ExportIcon}
          local={local.export}
          rows={rows}
        />
      )}
      { !settings.disableFilter && (
        <ToolbarFilter
          columns={columns}
          filter={filter}
          icon={settings.FilterIcon}
          local={local.filter}
          onFilterChange={onFilterChange}
        />
      )}
    </MuiToolbar>
  );
}

Toolbar.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  density: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  filter: PropTypes.shape().isRequired,
  local: PropTypes.shape().isRequired,
  onAddClick: PropTypes.func,
  onColumnsChange: PropTypes.func.isRequired,
  onDensityChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  settings: PropTypes.shape({
    disableColumnSelector: PropTypes.bool.isRequired,
    disableDensitySelector: PropTypes.bool.isRequired,
    disableExport: PropTypes.bool.isRequired,
    disableFilter: PropTypes.bool.isRequired,
    AddIcon: PropTypes.node.isRequired,
    ColumnsIcon: PropTypes.node.isRequired,
    DensityIcon: PropTypes.node.isRequired,
    ExportIcon: PropTypes.node.isRequired,
    FilterIcon: PropTypes.node.isRequired,
  }).isRequired,
};

Toolbar.defaultProps = {
  onAddClick: undefined,
};
