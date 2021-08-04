import React from 'react';

const avatarRenderCell = (row) => <span>{`${row.firstname.substr(0, 1)}${row.lastname.substr(0, 1)}`}</span>;

export default [
  {
    field: 'avatar',
    headerName: 'Avatar',
    renderCell: avatarRenderCell,
    width: 50,
    sortable: false,
    filterable: false,
    exportable: false,
  }, {
    field: 'email',
    headerName: 'Email',
    width: 250,
  }, {
    field: 'name',
    headerName: 'Name',
    width: 300,
    valueGetter: (row) => `${row.firstname} ${row.lastname}`,
  }, {
    field: 'active',
    headerName: 'Aktiv',
    valueFormatter: (value) => (value ? 'Ja' : 'Nein'),
    width: 110,
    type: 'boolean',
  },
];
