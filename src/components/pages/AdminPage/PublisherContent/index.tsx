import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
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

import { observer } from 'mobx-react';
import { deletePublisher, newPublisher, updatePublisher } from '../../../../APIs/publisher.api';
import { useStore } from '../../../../stores/RootStore.store';
import { useEffect, useState } from 'react';
import AlertDialog from '../../../elements/AlertDialog';
import FormDialog from '../../../elements/FormDialog';
import { IPublisher } from '../../../../stores/childrens/Publishers.store';

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
  handleClick: () => void
}

function EditToolbar(props: EditToolbarProps) {
  const {handleClick} = props;
  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={()=>{handleClick()}}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

const PublishserContent = observer(() => {
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [openAddDialog, setAddOpenDialog] = useState<boolean>(false)
  const [deleteItem, setDeleteItem] = useState<GridRowId>()
  const [loading, setLoading] = useState<Boolean>(true);
  const store = useStore()
  let initialRows: GridRowsProp = [];

  const fetchPublishers = async () => {
    try {
      setLoading(true);
      await Promise.all([store.PublisherStore?.getAllPublishersAPI()])
    } catch (error) {
      console.log(error)
    }
    finally{
      store.PublisherStore?.getAllPublishers?.map((publisher)=>{
        const init = {
          id: publisher._id,
          name: publisher.name,
        }
        initialRows = [...initialRows, init]
      })
      setRows(initialRows)
      setLoading(false)
    }
  }

  const handleSubmit = async (inputVal: IPublisher) => {
    Promise.all([await newPublisher(inputVal)])
    store.PublisherStore?.addNewPublisher(inputVal);
    fetchPublishers()
  }

  const handleClick = () => {
    setAddOpenDialog(true);
  }

  useEffect(()=>{
    fetchPublishers()
  }, [])

  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => async () => {
    setRows(rows.filter((row) => row.id !== id));
    Promise.all([await deletePublisher(id.toString())])
    setOpenDialog(false)
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false } as any;
    await updatePublisher({name: updatedRow.name}, updatedRow.id)
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 220, editable: true },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
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
            onClick={()=>{
              setDeleteItem(id)
              setOpenDialog(true);
            }}
            color="inherit"
          />,
        ];
      },
    },
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
          toolbar: { setRows, setRowModesModel, handleClick},
        }}
        initialState={{
          pagination: {paginationModel: {pageSize: 5}}
        }}
        pageSizeOptions={[5, 10]}
        pagination={true}
      />
      {openDialog && 
      <div onClick={()=>(setOpenDialog(false))}>
        <AlertDialog isOpen={true} handleAccept={handleDeleteClick(deleteItem!)} handleCancle={()=>(setOpenDialog(false))}/>  
      </div>}
      {openAddDialog &&
      <FormDialog handleClose={()=>{setAddOpenDialog(false)}} handleSubmit={handleSubmit}/>}
    </Box>
  );
})

export default PublishserContent;