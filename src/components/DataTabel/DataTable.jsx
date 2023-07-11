// Refer this data table component, good one.

import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';



function CustomDataGrid({
  rows,
  columns,
  totalDataCount,
  needCheckBox = false,
  handleRowSelection
}) {
  useEffect(() => {}, []);

  // Calculate the flex value for each column
  const columnFlex = 1 / columns.length;

  // Generate the column definitions with dynamic flex
  const columnDefs = columns.map((column) => ({
    ...column,
    flex: columnFlex,
  }));

  const getRowId = (row) => row.id;

  const CustomToolbar = () => (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );

  return (
    <div style={{ height: '400px', marginTop: '15px', backgroundColor: 'white', width:'100%' }}>
      <DataGrid
        loading={rows.length === 0}
        getRowId={getRowId}
        rows={rows}
        columns={columnDefs}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
              page: 1,

            },
          },
        }}
        checkboxSelection={needCheckBox}
        onRowSelectionModelChange={handleRowSelection}
        pageSizeOptions={[10,30,70]}

        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}

export default CustomDataGrid;
