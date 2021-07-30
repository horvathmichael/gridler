import React from 'react';
import PropTypes from 'prop-types';
import MuiToolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';

import DataGridToolbarAdd from './ToolbarAdd';
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
  localization,
  columns,
  filters,
  density,
  onColumnsChange,
  onFilterChange,
  onDensityChange,
  onExport,
  onAdd,
}) {
  const classes = useStyles();

  return (
    <MuiToolbar className={classes.toolbar}>
      { onAdd && (
        <DataGridToolbarAdd
          localization={localization.add}
          onAdd={onAdd}
        />
      )}
      <div className={classes.flexGrow} />
      <ToolbarColumns
        localization={localization.columns}
        columns={columns}
        onColumnsChange={onColumnsChange}
      />
      <ToolbarFilter
        localization={localization.filter}
        columns={columns}
        filters={filters}
        onFilterChange={onFilterChange}
      />
      <ToolbarDensity
        localization={localization.density}
        density={density}
        onDensityChange={onDensityChange}
      />
      <ToolbarExport
        localization={localization.export}
        onExport={onExport}
      />
    </MuiToolbar>
  );
}

Toolbar.propTypes = {
  localization: PropTypes.shape().isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape()),
  density: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onColumnsChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onDensityChange: PropTypes.func.isRequired,
  onExport: PropTypes.func.isRequired,
  onAdd: PropTypes.func,
};

Toolbar.defaultProps = {
  filters: undefined,
  onAdd: undefined,
};
