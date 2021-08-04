import React from 'react';
import PropTypes from 'prop-types';
import { CSVLink } from 'react-csv';
import ToolbarButton from './ToolbarButton';

export default function ToolbarExport({
  columns,
  filename,
  icon,
  local,
  rows,
}) {
  return (
    <div>
      <CSVLink
        target="_blank"
        data={
          rows.map((row) => {
            const exportRow = {};
            columns
              .filter((column) => !column.hide && column.exportable !== false)
              .forEach((column) => {
                if (column.valueFormatter) {
                  exportRow[column.field] = column.valueFormatter(row[column.field]);
                } else if (column.valueGetter) {
                  exportRow[column.field] = column.valueGetter(row);
                } else {
                  exportRow[column.field] = row[column.field];
                }
              });
            return exportRow;
          })
        }
        filename={filename}
        headers={
          columns
            .filter((column) => !column.hide && column.exportable !== false)
            .map((column) => ({ label: column.headerName, key: column.field }))
        }
      >
        <ToolbarButton icon={icon} label={local.button} />
      </CSVLink>
    </div>
  );
}

ToolbarExport.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filename: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  local: PropTypes.shape({
    button: PropTypes.string.isRequired,
  }).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
