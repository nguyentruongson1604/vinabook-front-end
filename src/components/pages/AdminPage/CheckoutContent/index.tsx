import * as React from 'react';
import Box from '@mui/material/Box';

import {
  GridRowsProp,
  GridRowModesModel,
  DataGrid,
  GridColDef,
  GridEventListener,
  GridRowModel,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';

import { useStore } from '../../../../stores/RootStore.store';
import { useEffect, useState } from 'react';

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
}

function EditToolbar(props: EditToolbarProps) {
  return (
    <></>
  );
}

const CheckoutContent = () => {
  const store = useStore();
  const [loading, setLoading] = useState(true);
  let initialRows: GridRowsProp = [];
  const fetchCarts = async () => {
    setLoading(true); // Bắt đầu loading

    try {
      // Gọi hàm API để lấy dữ liệu tác giả
      await Promise.all([store.CartStore?.getAllCartsAPI()]);
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error("Error fetching carts:", error);
    } finally {
      setLoading(false); // Kết thúc loading dù có lỗi hay không
      store.CartStore?.getAllCarts!.map((cart)=>{
        const init = {
          id: cart._id,
          name: cart.owner?.name,
          totalCost: cart.totalCost,
          unit: 'vnđ'
        }
        initialRows = [...initialRows, init]
      })
      // console.log(initialRows)
      setRows(initialRows)
    }
  }
  useEffect(()=>{
    fetchCarts()
  }, [store.CartStore?.getAllCarts])
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 220, editable: false },
    {
      field: 'totalCost',
      headerName: 'Value',
      type: 'string',
      width: 180,
      editable: false,
    },
    {
      field: 'unit',
      headerName: 'Unit',
      type: 'string',
      width: 40,
      editable: false,
    }
  ];
  if(loading) return <div>Loading...</div>
  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        initialState={{
          pagination: {paginationModel: {pageSize: 5}}
        }}
        pageSizeOptions={[5, 10]}
        pagination={true}
      />
    </Box>
  );
}
export default CheckoutContent