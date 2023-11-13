/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
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
import { useStore } from '../../../../stores/RootStore.store';
import { observer } from 'mobx-react';
import { IAuthor } from '../../../../stores/childrens/Authors.store';
import { useEffect, useState } from 'react';
import { createNewAuthor, deleteAAuthor, updateAuthor } from '../../../../APIs/author.api';
import AlertDialog from '../../../elements/AlertDialog';
import FormAuthorDialog from '../../../elements/FormAuthorDialog';

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

const AuthorContent = observer(()=>{
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [openAddDialog, setAddOpenDialog] = useState<boolean>(false)
  const [deleteItem, setDeleteItem] = useState<GridRowId>()
  const store = useStore();
  const [loading, setLoading] = useState(true);
  let initialRows: GridRowsProp = [];
  const fetchAuthors = async () => {
    setLoading(true); // Bắt đầu loading

    try {
      // Gọi hàm API để lấy dữ liệu tác giả
      await store.AuthorStore?.getAllAuthorsAPI();
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error("Error fetching authors:", error);
    } finally {
      setLoading(false); // Kết thúc loading dù có lỗi hay không
      store.AuthorStore?.getAllAuthors!.map((author: IAuthor)=>{
        const init = {
          id: author._id,
          name: author.name,
          joinDate: new Date(Date.parse(author.createdAt!))
        }
        initialRows = [...initialRows, init]
      })
      // console.log(initialRows)
      setRows(initialRows)
    }
  }

  const handleAddAuthor = async (author: IAuthor) => {
    Promise.all([await createNewAuthor(author)])
    fetchAuthors()
  }

  useEffect(()=>{
      fetchAuthors()
  }, [])
  
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleClick = () => {
    setAddOpenDialog(true);
  }

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    // console.log(id)
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => async () => {
    setRows(rows.filter((row) => row.id !== id));
    Promise.all([await deleteAAuthor(id.toString())])
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
    const id = updatedRow.id
    // console.log(updatedRow)
    await updateAuthor({name: updatedRow.name}, id)
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 200, editable: true },
    {
      field: 'joinDate',
      headerName: 'Join date',
      type: 'date',
      width: 180,
      editable: false,
    },
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
          toolbar: { setRows, setRowModesModel, handleClick },
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
      <FormAuthorDialog handleClose={()=>{setAddOpenDialog(false)}} handleSubmit={handleAddAuthor}/> }
    </Box>
  );
})
export default AuthorContent