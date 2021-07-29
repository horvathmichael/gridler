import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core';

import DataGridToolbar from './DataGridToolbar';
import DataGridHeader from './DataGridHeader';
import DataGridRows from './DataGridRows';
import DataGridFooter from './DataGridFooter';

const useStyles = makeStyles(() => ({
  main: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexWrap: 'nowrap',
    overflowX: 'auto',
    position: 'relative',
  },
}));

export default function DataGrid({
  localization,
  rows,
  columns,
  filters,
  density,
  sort,
  onColumnsChange,
  onFiltersChange,
  onDensityChange,
  onSortChange,
  onAdd,
  onRowClick,
}) {
  const classes = useStyles();

  return (
    <div>
      <DataGridToolbar
        localization={localization.toolbar}
        columns={columns}
        filters={filters}
        density={density}
        onColumnsChange={onColumnsChange}
        onFiltersChange={onFiltersChange}
        onDensityChange={onDensityChange}
        onAdd={onAdd}
      />
      <Paper>
        <div className={classes.main}>
          <DataGridHeader
            columns={columns}
            filters={filters}
            sort={sort}
            onSortChange={onSortChange}
          />
          <Divider />
          <DataGridRows
            rows={rows}
            columns={columns}
            filters={filters}
            sort={sort}
            onRowClick={onRowClick}
          />
          <Divider />
          <DataGridFooter
            localization={localization.footer}
            rows={rows}
          />
        </div>
      </Paper>
    </div>
  );
}

DataGrid.propTypes = {
  localization: PropTypes.shape({
    toolbar: PropTypes.shape({}).isRequired,
    footer: PropTypes.shape({}).isRequired,
  }).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  density: PropTypes.string.isRequired,
  sort: PropTypes.shape(),
  onColumnsChange: PropTypes.func.isRequired,
  onFiltersChange: PropTypes.func.isRequired,
  onDensityChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func,
  onRowClick: PropTypes.func,
};

DataGrid.defaultProps = {
  sort: undefined,
  onAdd: undefined,
  onRowClick: undefined,
};

// {
//         field: 'avatar',
//         headerName: localization.users.fields.avatar,
//         renderHeader: avatarRenderHeader,
//         renderCell: avatarRenderCell,
//         width: 70,
//         sortable: false,
//         filterable: false,
//         // disableColumnMenu: true,
//       }, {
//         field: 'email',
//         headerName: localization.users.fields.email,
//         flex: true,
//       }, {
//         field: 'firstname',
//         headerName: localization.users.fields.firstname,
//         flex: true,
//       }, {
//         field: 'lastname',
//         headerName: localization.users.fields.lastname,
//         flex: true,
//       }, {
//         field: 'role',
//         headerName: localization.users.fields.role,
//         flex: true,
//         valueGetter: roleValueGetter,
//       }, {
//         field: 'active',
//         headerName: localization.users.fields.active,
//         width: 110,
//         type: 'boolean',
//       },
