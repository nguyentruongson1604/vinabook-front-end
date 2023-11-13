import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, TableContainer, Paper, Table, TableRow, TableCell, MenuItem, TableBody } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { observer } from "mobx-react";
import { IBook, createNewBook, uploadImageBook } from "../../../APIs/book.api";
import { Options } from "../../pages/AdminPage/BookContent";

const initBook = {
    name: "",
    description: "",
    page: 0,
    price: 0,
    quantity: 0,
    discount: 0,
    language: "",
    imageUrl: "http://localhost:5000/images/books/null.png",
    publisher: "",
    author: "",
    category:""
}

const FormAddBookDialog = observer(( {handleClose, handleSubmit, authors, categories, publishers}: {handleClose: ()=> void, handleSubmit: (book: IBook, image: File) => void, authors: Options[], categories: Options[], publishers: Options[]} ) => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const [formData, setFormData] = useState<IBook>(initBook);

    const handleAddNewBook = async () => {
        try {
            handleSubmit(formData, image!)
            handleClose()
        } catch (error) {
            console.log(error)
        }
    }

    const onchangeValue = (event: ChangeEvent<HTMLInputElement>) =>{
        const { name, value} = event.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]: value
        }))
        console.log(formData)
    }
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        
        if (file) {
        // Đọc và hiển thị hình ảnh
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result as string;
            setImageSrc(result);
        };
        reader.readAsDataURL(file);
        setImage(file);
        }
    };

    return (
        <div>
            <Dialog open={true} onClose={handleClose} fullScreen  style={{ width: '70%', margin: 'auto' }}>
            <form onSubmit={(e)=>{e.preventDefault(); handleAddNewBook()}}>
                <DialogTitle>Create new book</DialogTitle>
                <DialogContent>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} arial-aria-label="table">
                            <TableBody>
                            <TableRow style={{ height: '50px' }}>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Book name:</TableCell>
                                <TableCell>
                                    <TextField
                                        required
                                        autoFocus
                                        margin="normal"
                                        name="name"
                                        label="Name"
                                        type="text"
                                        multiline
                                        variant="standard"
                                        onChange={onchangeValue}
                                        value={formData?.name}
                                        fullWidth
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Book description:</TableCell>
                                <TableCell>
                                <TextField
                                    required
                                    margin="normal"
                                    name="description"
                                    label="Description"
                                    type="text"
                                    fullWidth
                                    multiline
                                    variant="standard"
                                    onChange={onchangeValue}
                                    value={formData?.description}
                                />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Page number:</TableCell>
                                <TableCell>
                                <TextField
                                    required
                                    margin="normal"
                                    name="page"
                                    label="Page"
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                    onChange={onchangeValue}
                                    value={formData?.page}
                                />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Book price:</TableCell>
                                <TableCell>
                                <TextField
                                    required
                                    margin="normal"
                                    name="price"
                                    label="Price"
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                    onChange={onchangeValue}
                                    value={formData?.price}
                                />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Quantity:</TableCell>
                                <TableCell>
                                <TextField
                                    required
                                    margin="normal"
                                    name="quantity"
                                    label="Quantity"
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                    onChange={onchangeValue}
                                    value={formData?.quantity}
                                />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Discount:</TableCell>
                                <TableCell>
                                <TextField
                                    required
                                    margin="normal"
                                    name="discount"
                                    label="Discount"
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                    onChange={onchangeValue}
                                    value={formData?.discount}
                                />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Book language:</TableCell>
                                <TableCell>
                                <TextField
                                    required
                                    margin="normal"
                                    name="language"
                                    label="Language"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={onchangeValue}
                                    value={formData?.language}
                                />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Image</TableCell>
                                <TableCell>
                                    <TextField
                                        required
                                        margin="normal"
                                        name="imageUrl"
                                        label="Image"
                                        type="file"
                                        variant="standard"
                                        onChange={handleImageChange}
                                    />
                                    {imageSrc && (
                                    <img
                                        src={imageSrc}
                                        alt="Selected"
                                        style={{ maxWidth: '100px', maxHeight: '100px', marginTop: '10px', float: 'right' }}
                                    />
                                    )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Category:</TableCell>
                                <TableCell>
                                <TextField
                                    required
                                    margin="normal"
                                    name="category"
                                    label="Category"
                                    select
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={onchangeValue}
                                    value={formData?.category}
                                >
                                    {categories.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Publisher:</TableCell>
                                <TableCell>
                                <TextField
                                    required
                                    margin="normal"
                                    name="publisher"
                                    label="Publisher"
                                    select
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={onchangeValue}
                                    value={formData?.publisher}
                                >
                                    {publishers.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Author:</TableCell>
                                <TableCell>
                                <TextField
                                    required
                                    margin="normal"
                                    name="author"
                                    label="Author"
                                    select
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={onchangeValue}
                                    value={formData?.author}
                                >
                                    {authors.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                </TableCell>
                            </TableRow>
                            </TableBody>
                        </Table>
                        
                    </TableContainer>
                </DialogContent>
                <DialogActions>
                <Button onClick={()=>{handleClose()}} color="error">Cancel</Button>
                <Button type='submit'
                //  onClick={()=>{handleAddNewBook()}}
                 >Add</Button>
                </DialogActions>
            </form>
            </Dialog>
        </div>
    )
});

export default FormAddBookDialog;