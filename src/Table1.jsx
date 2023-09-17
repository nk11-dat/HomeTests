import React from 'react';
import DataTable from 'react-data-table-component';

const data = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 25 },
  // ... more data
];

const columns = [
  {
    name: 'First Name',
    selector: 'firstName',
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: 'lastName',
    sortable: true,
  },
  {
    name: 'Age',
    selector: 'age',
    sortable: true,
    cell: (row) => (
      <div
        onClick={() => {
          // Handle the click event here
          alert(`Cell clicked: ${row.age}`);
        }}
      >
        {row.age}
      </div>
    ),
  },
];

const Table1 = () => {
  return (
    <DataTable
      title="My Data Table"
      data={data}
      columns={columns}
      pagination
      highlightOnHover
      responsive
    />
  );
};

export default Table1;
