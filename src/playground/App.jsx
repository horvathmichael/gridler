import React from 'react';
import Container from '@material-ui/core/Container';

import Gridler from '../lib';

import rows from './app-rows';
import columns from './app-columns';

const filter = {
  name: '1',
};
const sort = undefined;

const onAddClick = () => console.log('ADD');
const onRowClick = (row) => console.log(row.id);

export default function App() {
  return (
    <Container>
      <Gridler
        rows={rows}
        columns={columns}
        filter={filter}
        sort={sort}
        local="de"
        onAddClick={onAddClick}
        onRowClick={onRowClick}
      />
    </Container>
  );
}
