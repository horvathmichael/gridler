import React from 'react';
import Container from '@material-ui/core/Container';

import Gridler from '../lib';

import rows from './app-rows';
import columns from './app-columns';

const filters = undefined;
const sort = undefined;

const onAddClick = () => console.log('ADD');
const onRowClick = (row) => console.log(row.id);

function App() {
  return (
    <Container>
      {console.log({ columns, rows })}
      <Gridler
        rows={rows}
        columns={columns}
        filters={filters}
        sort={sort}
        onAddClick={onAddClick}
        onRowClick={onRowClick}
      />
    </Container>
  );
}

export default App;
