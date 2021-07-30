import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core';

import Toolbar from './Toolbar';
import Header from './Header';
import Rows from './Rows';
import Footer from './Footer';

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
  height,
  rows,
  totalrows,
  columns,
  filters,
  density,
  sort,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
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
      <Toolbar
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
          <Header
            columns={columns}
            filters={filters}
            sort={sort}
            onSortChange={onSortChange}
          />
          <Divider />
          <div style={{ maxHeight: `${height}px`, overflow: 'auto' }}>
            <Rows
              rows={rows}
              columns={columns}
              density={density}
              filters={filters}
              sort={sort}
              onRowClick={onRowClick}
            />

          </div>
          <Divider />
          <Footer
            localization={localization.footer}
            rows={totalrows}
            page={page}
            pageSize={pageSize}
            onPageChange={onPageChange}
            onPageSizeChange={onPageSizeChange}
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
  totalrows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape()),
  density: PropTypes.string.isRequired,
  sort: PropTypes.shape(),
  height: PropTypes.number,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onColumnsChange: PropTypes.func.isRequired,
  onFiltersChange: PropTypes.func.isRequired,
  onDensityChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func,
  onRowClick: PropTypes.func,
};

DataGrid.defaultProps = {
  filters: undefined,
  sort: undefined,
  onAdd: undefined,
  onRowClick: undefined,
  height: 500,
};
