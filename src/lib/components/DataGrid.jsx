import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { makeStyles, Typography } from '@material-ui/core';

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
    position: 'relative',
  },
  data: {
    overflow: 'auto',
    minHeight: '100px',
    maxHeight: ({ height }) => `${height}px`,
  },
  nodata: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
  },
}));

export default function DataGrid({
  localization,
  height,
  rows,
  filteredRows,
  pageRows,
  columns,
  filters,
  density,
  sort,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
  onColumnsChange,
  onFilterChange,
  onDensityChange,
  onSortChange,
  onExport,
  onAdd,
  onRowClick,
}) {
  const classes = useStyles({ height });

  return (
    <div>
      <Toolbar
        localization={localization.toolbar}
        columns={columns}
        filters={filters}
        density={density}
        onColumnsChange={onColumnsChange}
        onFilterChange={onFilterChange}
        onDensityChange={onDensityChange}
        onExport={onExport}
        onAdd={onAdd}
      />
      <Paper>
        <div className={classes.main}>
          <div className={classes.data}>
            <Header
              columns={columns}
              filters={filters}
              sort={sort}
              onSortChange={onSortChange}
            />
            {pageRows.length > 0 ? (
              <Rows
                pageRows={pageRows}
                columns={columns}
                density={density}
                onRowClick={onRowClick}
              />
            ) : (
              <div className={classes.nodata}>
                <Typography>{localization.data.nodata}</Typography>
              </div>
            )}
          </div>
          <Divider />
          <Footer
            localization={localization.footer}
            rows={rows}
            filteredRows={filteredRows}
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
    data: PropTypes.shape({
      nodata: PropTypes.string.isRequired,
    }).isRequired,
    footer: PropTypes.shape({}).isRequired,
  }).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filteredRows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  pageRows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filters: PropTypes.shape().isRequired,
  density: PropTypes.string.isRequired,
  sort: PropTypes.shape(),
  height: PropTypes.number,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onColumnsChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onDensityChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  onExport: PropTypes.func.isRequired,
  onAdd: PropTypes.func,
  onRowClick: PropTypes.func,
};

DataGrid.defaultProps = {
  sort: undefined,
  onAdd: undefined,
  onRowClick: undefined,
  height: 600,
};
