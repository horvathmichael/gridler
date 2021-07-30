import React from 'react';

import { ProfileIcon } from './lib/components/Icons';

const avatarRenderHeader = () => <ProfileIcon />;
const avatarRenderCell = ({ row }) => <span>{`${row.firstname.substr(0, 1)}${row.lastname.substr(0, 1)}`}</span>;
const nameValueGetter = ({ row }) => <span>{`${row.firstname} ${row.lastname}`}</span>;

export default [
  {
    field: 'avatar',
    headerName: 'Avatar',
    renderHeader: avatarRenderHeader,
    renderCell: avatarRenderCell,
    width: 50,
    sortable: false,
    filterable: false,
  }, {
    field: 'email',
    headerName: 'Email',
    width: 250,
  }, {
    field: 'name',
    headerName: 'Name',
    valueGetter: nameValueGetter,
    width: 200,
  }, {
    field: 'active',
    headerName: 'Aktiv',
    width: 110,
    type: 'boolean',
  },
];
