import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  densityConstant,
  sortOrderConstant,
  typeConstant,
} from './constant';
import GridlerNode from './GridlerNode';

export default function GridlerContainer({
  filename,
  height,
  initialColumns,
  initialRows,
  initialDensity,
  initialFilter,
  initialSort,
  initialPage,
  initialPageSize,
  local,
  onAddClick,
  onRowClick,
  toolbarSettings,
}) {
  const [columns, setColumns] = useState(initialColumns);
  const [rows, setRows] = useState(initialRows);
  const [density, setDensity] = useState(initialDensity);
  const [filter, setFilter] = useState(initialFilter);
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [pageRows, setPageRows] = useState(initialRows.slice((page - 1) * pageSize, page * pageSize));
  const [sort, setSort] = useState(initialSort);

  useEffect(() => { // TODO
    const sortComparator = {
      [typeConstant.text]: ({ a, b, order }) => (order === sortOrderConstant.asc
        ? a.localeCompare(b)
        : b.localeCompare(a)),
      [typeConstant.number]: ({ a, b, order }) => (order === sortOrderConstant.asc
        ? a.localeCompare(b)
        : b.localeCompare(a)),
      [typeConstant.date]: ({ a, b, order }) => (order === sortOrderConstant.asc
        ? a.localeCompare(b)
        : b.localeCompare(a)),
      [typeConstant.dateTime]: ({ a, b, order }) => (order === sortOrderConstant.asc
        ? a.localeCompare(b)
        : b.localeCompare(a)),
      [typeConstant.boolean]: ({ a, b, order }) => (order === sortOrderConstant.asc
        ? a.localeCompare(b)
        : b.localeCompare(a)),
      [typeConstant.select]: ({ a, b, order }) => (order === sortOrderConstant.asc
        ? a.localeCompare(b)
        : b.localeCompare(a)),
    };
    const typeFilter = {
      [typeConstant.text]: (field, value) => value.includes(filter[field]),
      [typeConstant.number]: (field, value) => value === filter[field],
      [typeConstant.date]: (field, value) => value === filter[field],
      [typeConstant.dateTime]: (field, value) => value === filter[field],
      [typeConstant.boolean]: (field, value) => value === filter[field],
      [typeConstant.select]: (field, value) => value === filter[field],
    };
    setRows(
      initialRows.filter((row) => {
        let result = true;
        Object.keys(filter).forEach((field) => {
          const { type, valueGetter } = columns.find((item) => item.field === field);
          const value = valueGetter ? valueGetter(row) : row[field];
          result = result && typeFilter[type || typeConstant.text](field, value);
        });
        return result;
      }).sort((a, b) => {
        if (!sort || !sort.column) {
          return 0;
        }
        if (sort.column.sortComparator) {
          return sort.order === sortOrderConstant.asc
            ? sort.column.sortComparator(a, b)
            : sort.column.sortComparator(b, a);
        }
        return sortComparator[sort.column.type || typeConstant.text]({
          order: sort.order,
          a: sort.column.valueGetter ? sort.column.valueGetter(a) : a[sort.column.field],
          b: sort.column.valueGetter ? sort.column.valueGetter(b) : b[sort.column.field],
        });
      }),
    );
    setPage(1);
  }, [initialRows, columns, filter, sort]);

  useEffect(() => setPageRows(rows.slice((page - 1) * pageSize, page * pageSize)), [rows, page, pageSize]);

  const onColumnsChange = (column) => {
    setColumns(columns.map((item) => {
      if (item !== column) return item;
      return { ...column, hide: !column.hide };
    }));
  };

  const onFilterChange = (field, value) => setFilter({ ...filter, [field]: value });

  const onSortChange = (column) => {
    if (!sort || sort.column !== column) {
      setSort({ column, order: sortOrderConstant.asc });
    } else if (sort.column === column && sort.order === sortOrderConstant.desc) {
      setSort();
    } else if (sort.column === column && sort.order === sortOrderConstant.asc) {
      setSort({ column, order: sortOrderConstant.desc });
    }
  };

  const onPageChange = (event, value) => setPage(Number.parseInt(value, 10));
  const onPageSizeChange = (event, value) => {
    setPage(1);
    setPageSize(Number.parseInt(value, 10));
  };

  const onExportClick = () => { alert('Der Export befindet sich in Entwicklung'); };

  return (
    <GridlerNode
      columns={columns}
      density={density}
      filename={filename}
      filter={filter}
      height={height}
      initialRows={initialRows}
      local={local}
      onAddClick={onAddClick}
      onColumnsChange={onColumnsChange}
      onDensityChange={setDensity}
      onExportClick={onExportClick}
      onFilterChange={onFilterChange}
      onPageChange={onPageChange}
      onPageSizeChange={onPageSizeChange}
      onRowClick={onRowClick}
      onSortChange={onSortChange}
      page={page}
      pageRows={pageRows}
      pageSize={pageSize}
      rows={rows}
      sort={sort}
      toolbarSettings={toolbarSettings}
    />
  );
}

GridlerContainer.propTypes = {
  filename: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  initialColumns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  initialRows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  initialDensity: PropTypes.oneOf([
    densityConstant.compact,
    densityConstant.default,
    densityConstant.comfort,
  ]).isRequired,
  initialFilter: PropTypes.shape({}).isRequired,
  initialSort: PropTypes.shape({
    field: PropTypes.string.isRequired,
    order: PropTypes.oneOf([sortOrderConstant.asc, sortOrderConstant.desc]),
  }),
  initialPage: PropTypes.number.isRequired,
  initialPageSize: PropTypes.number.isRequired,
  local: PropTypes.shape({}).isRequired,
  onAddClick: PropTypes.func,
  onRowClick: PropTypes.func,
  toolbarSettings: PropTypes.shape({}).isRequired,
};

GridlerContainer.defaultProps = {
  initialSort: undefined,
  onAddClick: undefined,
  onRowClick: undefined,
};
