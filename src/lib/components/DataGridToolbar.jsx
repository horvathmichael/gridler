import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';

import DataGridToolbarAdd from './DataGridToolbarAdd';
import DataGridToolbarColumns from './DataGridToolbarColumns';
import DataGridToolbarFilter from './DataGridToolbarFilter';
// import DataGridToolbarDensity from './DataGridToolbarDensity';
import DataGridToolbarExport from './DataGridToolbarExport';

const useStyles = makeStyles(() => ({
  toolbar: {
    minHeight: 'unset',
  },
  flexGrow: {
    flexGrow: 1,
  },
}));

export default function DataGridToolbar({
  localization,
  columns,
  filters,
  // density,
  onColumnsChange,
  onFilterChange,
  // onDensityChange,
  onExport,
  onAdd,
}) {
  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar}>
      { onAdd && (
        <DataGridToolbarAdd
          localization={localization.add}
          onAdd={onAdd}
        />
      )}
      <div className={classes.flexGrow} />
      <DataGridToolbarColumns
        localization={localization.columns}
        columns={columns}
        onColumnsChange={onColumnsChange}
      />
      <DataGridToolbarFilter
        localization={localization.filter}
        columns={columns}
        filters={filters}
        onFilterChange={onFilterChange}
      />
      {/* <DataGridToolbarDensity
        localization={localization.density}
        density={density}
        onDensityChange={onDensityChange}
      /> */}
      <DataGridToolbarExport
        localization={localization.export}
        onExport={onExport}
      />
    </Toolbar>
  );
}

DataGridToolbar.propTypes = {
  localization: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape()),
  // density: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onColumnsChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  // onDensityChange: PropTypes.func.isRequired,
  onExport: PropTypes.func.isRequired,
  onAdd: PropTypes.func,
};

DataGridToolbar.defaultProps = {
  filters: undefined,
  onAdd: undefined,
};
