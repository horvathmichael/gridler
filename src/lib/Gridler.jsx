import React from 'react';
import PropTypes from 'prop-types';

import {
  AddIcon,
  ColumnsIcon,
  FilterIcon,
  DensityIcon,
  ExportIcon,
} from './components/Icons';
import {
  localConstant,
  densityConstant,
  sortOrderConstant,
  typeConstant,
} from './constant';
import localization from './localization';
import GridlerContainer from './GridlerContainer';

const initialPage = 1; // TODO
const initialPageSize = 10;

export default function Gridler({
  columns,
  rows,
  density,
  disableColumnSelector,
  disableDensitySelector,
  disableExport,
  disableFilter,
  filename,
  filter,
  height,
  icons,
  local,
  onAddClick,
  onRowClick,
  sort,
}) {
  return (
    <GridlerContainer
      filename={filename}
      height={height}
      initialColumns={columns}
      initialRows={rows}
      initialDensity={density}
      initialFilter={filter}
      initialSort={sort}
      initialPage={initialPage}
      initialPageSize={initialPageSize}
      local={localization[local]}
      onAddClick={onAddClick}
      onRowClick={onRowClick}
      toolbarSettings={{
        disableColumnSelector,
        disableDensitySelector,
        disableExport,
        disableFilter,
        AddIcon: icons.AddIcon || <AddIcon />,
        ColumnsIcon: icons.ColumnsIcon || <ColumnsIcon />,
        FilterIcon: icons.FilterIcon || <FilterIcon />,
        DensityIcon: icons.DensityIcon || <DensityIcon />,
        ExportIcon: icons.ExportIcon || <ExportIcon />,
      }}
    />
  );
}

Gridler.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      description: PropTypes.string,
      filterable: PropTypes.bool,
      headerName: PropTypes.string,
      hide: PropTypes.bool,
      renderHeader: PropTypes.func,
      renderCell: PropTypes.func,
      sortable: PropTypes.bool,
      sortComparator: PropTypes.func,
      type: PropTypes.oneOf([
        typeConstant.text,
        typeConstant.number,
        typeConstant.date,
        typeConstant.dateTime,
        typeConstant.boolean,
        typeConstant.select,
      ]),
      valueFormatter: PropTypes.func,
      valueGetter: PropTypes.func,
      width: PropTypes.number,
    }),
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  density: PropTypes.oneOf([
    densityConstant.compact,
    densityConstant.default,
    densityConstant.comfort,
  ]),
  disableColumnSelector: PropTypes.bool,
  disableDensitySelector: PropTypes.bool,
  disableExport: PropTypes.bool,
  disableFilter: PropTypes.bool,
  filename: PropTypes.string,
  filter: PropTypes.shape({}),
  height: PropTypes.number,
  icons: PropTypes.shape({
    AddIcon: PropTypes.node,
    ColumnsIcon: PropTypes.node,
    FilterIcon: PropTypes.node,
    DensityIcon: PropTypes.node,
    ExportIcon: PropTypes.node,
  }),
  local: PropTypes.oneOf([
    localConstant.en,
    localConstant.de,
  ]),
  onAddClick: PropTypes.func,
  onRowClick: PropTypes.func,
  sort: PropTypes.shape({
    field: PropTypes.string.isRequired,
    order: PropTypes.oneOf([sortOrderConstant.asc, sortOrderConstant.desc]),
  }),
};

Gridler.defaultProps = {
  density: densityConstant.default,
  disableColumnSelector: false,
  disableDensitySelector: false,
  disableExport: false,
  disableFilter: false,
  filename: 'export.csv',
  filter: {},
  height: 600,
  icons: {},
  local: localConstant.en,
  onAddClick: undefined,
  onRowClick: undefined,
  sort: undefined,
};
