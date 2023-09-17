import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { data } from './makeData';

const MinimalExample = () => {
  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
        //Doesn't work like it did in Table2.jsx?¿?¿ why.....?
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
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ],
    [],
    //end
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnActions={false}
      enableColumnFilters={true}
      enablePagination={true}
      enableSorting={true}
      enableBottomToolbar={true}
      enableTopToolbar={true}
      muiTableBodyRowProps={{ hover: false }}
      muiTableProps={{
        sx: {
          border: '1px solid rgba(81, 81, 81, 1)',
        },
      }}
      muiTableHeadCellProps={{
        sx: {
          border: '1px solid rgba(81, 81, 81, 1)',
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          border: '1px solid rgba(81, 81, 81, 1)',
        },
      }}
      //#region Stuff Nicki added from looking through DOCs
      //Drag&Drop button on toolbar (more: https://www.material-react-table.com/docs/guides/column-ordering-dnd#change-the-default-column-order)
      enableColumnOrdering={true}

      //Show/hide button on toolbar
      enableHiding={true} 

      //Density button on toolbar
      enableDensityToggle={false}

      //Full Screen button on toolbar
      enableFullScreenToggle={false}

      //search feature on toolbar
      enableGlobalFilter={false}
      //#endregion
    />
  );
};

export default MinimalExample;