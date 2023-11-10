import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import ViewIcon from '@mui/icons-material/RemoveRedEye'
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';
import { useStore } from '../../../../stores/RootStore.store';

import { useEffect, useCallback } from 'react';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router';
interface EditToolbarProps {
  // setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
}




const BillContent = observer(() =>{
  const navigate = useNavigate()
  const [edit, setEdit]= React.useState<boolean>(false);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});
  const store = useStore()
  const checkCurrentUser = async ()=>{  
    try{      
       await store.billStore?.getAllBill(1,100,'')
      //  setRows()
    } catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    checkCurrentUser()
  }, [])

    

  
  
  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {  //handleRowEditStop
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;      
    }
  };

  const handleEditClick = (id: any) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    setEdit(true)
  };

  const handleSaveClick = (id: any) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    setEdit(false)
  };
  const handleViewClick = (id: any) => () => {
    navigate(`${id}`)
  }
  const handleDeleteClick = (id: any) => () => {
    store.billStore?.deleteBill(id)
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow};
    store.billStore?.updateStatusBill(updatedRow.id, updatedRow)
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 250, editable: false },
    { field: 'time', headerName: 'Time',width: 100, editable: false },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      editable: edit,
      type: 'singleSelect',
      valueOptions: ['wait', 'accept', 'decline'],
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 150,
      cellClassName: 'actions',
      
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<ViewIcon />}
            label="View"
            onClick={handleViewClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

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
        rows={store.billStore?.tableData || []}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        // slotProps={{
        //   toolbar: { setRowModesModel },
        // }}
      />
    </Box>
  );
})


export default BillContent

