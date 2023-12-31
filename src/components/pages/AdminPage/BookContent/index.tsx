import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
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
import { useStore } from '../../../../stores/RootStore.store';
import { IBook, createNewBook, deleteBook, updateABook, uploadImageBook } from '../../../../APIs/book.api';
import AlertDialog from '../../../elements/AlertDialog';
import FormAddBookDialog from '../../../elements/FormAddBook';

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
  handleClick: () => void
}

export interface Options {
  value?: string,
  label?: string
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

const BookContent = observer(() => {
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [openAddDialog, setOpenAddDialog] = useState<boolean>(false)
  const [deleteItem, setDeleteItem] = useState<GridRowId>()
  const [loading, setLoading] = useState(true);
  const [initAuthorsOptions, setInitAuthorsOptions] = useState<Options[]>([]);
  const [initCategoriesOptions, setInitCategoriesOptions] = useState<Options[]>([]);
  const [initPublishersOptions, setInitPublishersOptions] = useState<Options[]>([]);

  const store = useStore();
  let initialRows: GridRowsProp = [];

  const fetchOptions = async () => {
    setLoading(true);
    try {
      await Promise.all([
        store.AuthorStore?.getAllAuthorsAPI(),
        store.CategoryStore?.getAllCategorysAPI(),
        store.PublisherStore?.getAllPublishersAPI(),
      ])
    } catch (error) {
      console.log(error)
    }
    finally{
      const initAuthorsOptions = store.AuthorStore?.getAllAuthors?.map((author)=>{
        const authorOptions = {
          value: author._id,
          label: author.name
        }
        return authorOptions
      })
      const initCategoriesOptions = store.CategoryStore?.getAllCategories?.map((category)=>{
        const authorOptions = {
          value: category._id,
          label: category.name
        }
        return authorOptions
      })
      const initPublishersOptions = store.PublisherStore?.getAllPublishers?.map((publisher)=>{
        const authorOptions = {
          value: publisher._id,
          label: publisher.name
        }
        return authorOptions
      })
      setInitAuthorsOptions(initAuthorsOptions!)
      setInitCategoriesOptions(initCategoriesOptions!)
      setInitPublishersOptions(initPublishersOptions!)
      setLoading(false);
    }
  }

  const fetchBooks = async () => {
    setLoading(true);
    try {
      await Promise.all([
        store.BooksStore?.getAllBooksAPI({}),
      ])
    } catch (error) {
      console.log(error)
    }
    finally{
      store.BooksStore?.getBooks?.map((book)=>{
        const init = {
          id: book._id,
          name: book.name,
          quantity: book.quantity,
          category: book.category._id,
          author: book.author._id,
          publisher: book.publisher._id
        }
        initialRows = [...initialRows, init]
      })
      setRows(initialRows)
      setLoading(false);
      // console.log(initAuthorsOptions)
    }
  }

  const handleAddBook = async (book: IBook, image: File) => {
    try {
      const newBook = await createNewBook(book)
      const id = newBook?.data.data._id
      Promise.all([await uploadImageBook(id, image!)])
      fetchBooks()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchOptions()
    fetchBooks()
  }, [])

  const handleClick = () => {
    setOpenAddDialog(true);
  }

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
    // console.log(id)
  };

  const handleDeleteClick = (id: GridRowId) => async () => {
    setRows(rows.filter((row) => row.id !== id));
    Promise.all([await deleteBook(id.toString())])
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
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    await updateABook(updatedRow, updatedRow.id)
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    {
      field: 'quantity', 
      headerName: 'Quantity', 
      width: 180, editable: true , 
      type: 'number', 
      align: 'left',
      headerAlign: 'left',
    },
    {
      field: 'category',
      headerName: 'Category',
      type: 'singleSelect',
      valueOptions:[...initCategoriesOptions],
      width: 180,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'author',
      headerName: 'Author',
      type: 'singleSelect',
      valueOptions:[...initAuthorsOptions],
      width: 180,
      editable: true,
    },
    {
      field: 'publisher',
      headerName: 'Publisher',
      width: 180,
      editable: true,
      type: 'singleSelect',
      valueOptions:[...initPublishersOptions]
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
      <FormAddBookDialog handleClose={()=>{setOpenAddDialog(false)}}
      handleSubmit={handleAddBook}
      authors={initAuthorsOptions}
      publishers={initPublishersOptions}
      categories={initCategoriesOptions}/>}
    </Box>
  );
})
export default BookContent; 