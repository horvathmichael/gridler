# gridler

## Table of Contents
- [Installation](#installation)
- [Import](#import)
- [Props](#props)
  - [GridlerColumn](#gridlercolumn)
  - [Row rendering](#row-rendering)
- [Getting Started](#getting-started)

## Installation
```
npm install gridler
```

## Import 
```js
import Gridler from "gridler";
```

## Props
|Name|Type|Default|Description|
|---|---|---|---|
|columns*|[GridlerColumn](#gridlercolumn)[]||List of columns of type 'GridlerColumn'. See [GridlerColumn](#gridlercolumn) below for more details.|
|rows*|object[]||List of rows |
|density|'compact' \| 'default' \| 'comfort'|'default'|Sets the density of the rows.|
|filter|object||Sets the initial filter criteria. For example {id: 5, name: 'Doe'}|
|sort|object||Sets the initial sort field and order. For example { field: 'id', order:'asc'}|
|disableColumnSelector|boolean|false|If **true**, the column selector is disabled.|
|disableDensitySelector|boolean|false|If **true**, the density selector is disabled.|
|local|'en' \| 'de'|'en'|Sets which set of text labels should be used in the Gridler|
|onAddClick|() => void||If defined, a 'Add' button will be displayed in the toolbar and the callback fired when a click event comes|
|onRowClick|(row, event: React.MouseEvent) => void||Callback fired when a click event comes from a row container element.|

### GridlerColumn
|Name|Type|Default|Description|
|---|---|---|---|
|field*|string||Name of the row-object field to use in this column|
|description|string||description of the column|
|filterable|boolean|true|if **true** the rows can be filtered by the value in this column|
|headerName|string|`column${index}`|Label for the column header|
|hide|boolean|false|if **true** the column will not be displayed|
|renderHeader|() => node||Set this function if you want to render more than a simple label as header|
|renderCell|(row) => node||Set this function if you want to render a node as row value|
|sortable|boolean|true|if **true**, the rows can be sorted by the value in this column|
|sortComparator|(a,b) => integer||You can set a custom sort comparator to define how this column should be sorted|
|type|'text' \| 'number' \| 'date' \| 'dateTime' \| 'boolean' \| 'select'|'text'|the type of the column|
|valueFormatter|(value) => string||You can set a value formatter to format the value for display without changing the underlaying value (for example '0.2' to '20%')|
|valueGetter|(row) => string||Use this function if the column doesn´t have a corresponding value, or if you want to render a combination of different fields.|
|width|integer|200|width of the column|

### Row rendering
By default, the gridler renders the value as a string in the cell. It resolves the rendered output in the following order:

1. renderCell(row) => ReactElement
2. valueFormatter(value) => string
3. valueGetter(row) => string
4. row[field]

## Getting Started
```js
import Gridler from "gridler";

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 50,
  }, {
    field: 'name',
    headerName: 'Name',
    valueGetter: ({row}) => `${row.firstname} ${row.lastname}`,
    width: 200,
  }, {
    field: 'email',
    headerName: 'Email',
    width: 250,
  },
];

const rows = [
  { id: 1, firstname: 'John', lastname: 'Doe', email: 'john@thisisnotareal.adress'},
  { id: 1, firstname: 'Jane', lastname: 'Doe', email: 'jane@thisisnotareal.adress'},
];

export default function App() {
  return (
    <Gridler 
      columns={columns}
      rows={rows}
    />
  );
};
```
