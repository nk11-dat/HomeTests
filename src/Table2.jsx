import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    width: 90,
    // renderCell: (row) => (
    //     <div
    //       onClick={() => {
    //         // Handle the click event here
    //         alert(`Cell clicked: ${row.age}`);
    //       }}
    //     >
    //       {row.age}
    //     </div>
    // ),
    renderCell: (params) => (
      <div
        onClick={() => {
          // Handle the click event here
          alert(`Cell clicked: ${params.row.age}`);
        }}
      >
        {params.value}
      </div>
    ),
  },
];

const rows = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 25 },
  // ... more rows
];

const Table2 = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} enableColumnActions={false} />
    </div>
  );
};

export default Table2;
