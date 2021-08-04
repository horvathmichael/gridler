import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { makeStyles, Typography } from '@material-ui/core';

import {
  densityConstant,
} from './constant';
import Toolbar from './components/Toolbar';
import Header from './components/Header/Header';
import Rows from './components/Rows';
import Footer from './components/Footer';

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

export default function GridlerNode({
  columns,
  density,
  filename,
  filter,
  height,
  initialRows,
  local,
  onAddClick,
  onColumnsChange,
  onDensityChange,
  onFilterChange,
  onPageChange,
  onPageSizeChange,
  onRowClick,
  onSortChange,
  page,
  pageRows,
  pageSize,
  rows,
  sort,
  toolbarSettings,
}) {
  const classes = useStyles({ height });

  return (
    <div>
      <Toolbar
        columns={columns}
        density={density}
        filename={filename}
        filter={filter}
        local={local.toolbar}
        onAddClick={onAddClick}
        onColumnsChange={onColumnsChange}
        onDensityChange={onDensityChange}
        onFilterChange={onFilterChange}
        rows={rows}
        settings={toolbarSettings}
      />
      <Paper>
        <div className={classes.main}>
          <div className={classes.data}>
            <Header
              columns={columns}
              filter={filter}
              onSortChange={onSortChange}
              sort={sort}
            />
            {pageRows.length > 0 ? (
              <Rows
                columns={columns}
                density={density}
                pageRows={pageRows}
                onRowClick={onRowClick}
              />
            ) : (
              <div className={classes.nodata}>
                <Typography>{local.rows.nodata}</Typography>
              </div>
            )}
          </div>
          <Divider />
          <Footer
            initialRows={initialRows}
            local={local.footer}
            onPageChange={onPageChange}
            onPageSizeChange={onPageSizeChange}
            page={page}
            pageSize={pageSize}
            rows={rows}
          />
        </div>
      </Paper>
    </div>
  );
}

GridlerNode.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  density: PropTypes.oneOf([
    densityConstant.compact,
    densityConstant.default,
    densityConstant.comfort,
  ]).isRequired,
  filter: PropTypes.shape({}).isRequired,
  filename: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  initialRows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  local: PropTypes.shape({
    toolbar: PropTypes.shape({}).isRequired,
    rows: PropTypes.shape({
      nodata: PropTypes.string.isRequired,
    }).isRequired,
    footer: PropTypes.shape({}).isRequired,
  }).isRequired,
  onAddClick: PropTypes.func,
  onColumnsChange: PropTypes.func.isRequired,
  onDensityChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  onRowClick: PropTypes.func,
  onSortChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  pageRows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  pageSize: PropTypes.number.isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  sort: PropTypes.shape({}),
  toolbarSettings: PropTypes.shape({}).isRequired,
};

GridlerNode.defaultProps = {
  onAddClick: undefined,
  onRowClick: undefined,
  sort: undefined,
};
