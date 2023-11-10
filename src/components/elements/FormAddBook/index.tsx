import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Input, TableContainer, Paper, Table, TableRow, TableCell } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { createNewAuthor } from "../../../APIs/author.api";
import { observer } from "mobx-react";
import { useStore } from "../../../stores/RootStore.store";
import { IAuthor } from "../../../stores/childrens/Authors.store";

const FormAddBookDialog = observer(( {handleClose}: {handleClose: ()=> void} ) => {
    const store = useStore();
    const [imageSrc, setImageSrc] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const [authorName, setAuthorName] = useState<string>('');
    const [authorInfo, setAuthorInfo] = useState<string>('');
    const [isDisabled, setDisabled] = useState<boolean>(false);

    const handleSubmit = async () => {
        const author = {
            name: authorName,
            info: authorInfo
        } as IAuthor
        if(authorName && authorInfo){
            Promise.all([await createNewAuthor(author)])
            store.AuthorStore?.addAuthor(author);
            handleClose()
        }
    }

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setAuthorName(event.target.value);
        if(authorInfo === '' || event.target.value === ''){
            setDisabled(true);
        }
        else{
            setDisabled(false);
        }
    }
    const handleInfoChange = (event: ChangeEvent<HTMLInputElement>) =>{
        
        setAuthorInfo(event.target.value);

        if(event.target.value === '' || authorName === ''){
            setDisabled(true);
        }
        else{
            setDisabled(false);
        }
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
                <DialogTitle>Create new book</DialogTitle>
                <DialogContent>
                    <TableContainer component={Paper}>
                       <Table sx={{ minWidth: 650 }} arial-aria-label="table">
                            <TableRow style={{ height: '50px' }}>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Book name:</TableCell>
                                <TableCell>
                                    <TextField
                                        autoFocus
                                        margin="normal"
                                        id="bookName"
                                        label="Name"
                                        type="text"
                                        multiline
                                        variant="standard"
                                        onChange={handleNameChange}
                                        value={authorName}
                                        fullWidth
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Book description:</TableCell>
                                <TableCell>
                                <TextField
                                    margin="normal"
                                    id="bookDes"
                                    label="Description"
                                    type="text"
                                    fullWidth
                                    multiline
                                    variant="standard"
                                    onChange={handleInfoChange}
                                    value={authorInfo}
                                />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Page number:</TableCell>
                                <TableCell>
                                <TextField
                                    margin="normal"
                                    id="pageNumber"
                                    label="Page"
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleInfoChange}
                                    value={authorInfo}
                                />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Book price:</TableCell>
                                <TableCell>
                                <TextField
                                    margin="normal"
                                    id="price"
                                    label="Price"
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleInfoChange}
                                    value={authorInfo}
                                />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Quantity:</TableCell>
                                <TableCell>
                                <TextField
                                    margin="normal"
                                    id="quantity"
                                    label="Quantity"
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleInfoChange}
                                    value={authorInfo}
                                />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Discount:</TableCell>
                                <TableCell>
                                <TextField
                                    margin="normal"
                                    id="discount"
                                    label="Discount"
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleInfoChange}
                                    value={authorInfo}
                                />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Book language:</TableCell>
                                <TableCell>
                                <TextField
                                    margin="normal"
                                    id="language"
                                    label="Language"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleInfoChange}
                                    value={authorInfo}
                                />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Image</TableCell>
                                <TableCell>
                                    <TextField
                                        margin="normal"
                                        id="bookImage"
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
                                    margin="normal"
                                    id="category"
                                    label="Category"
                                    select
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleInfoChange}
                                    value={authorInfo}
                                />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Publisher:</TableCell>
                                <TableCell>
                                <TextField
                                    margin="normal"
                                    id="publisher"
                                    label="Publisher"
                                    select
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleInfoChange}
                                    value={authorInfo}
                                />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ width: '125px', paddingTop: '25px' }} size="small">Author:</TableCell>
                                <TableCell>
                                <TextField
                                    margin="normal"
                                    id="author"
                                    label="Author"
                                    select
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleInfoChange}
                                    value={authorInfo}
                                />
                                </TableCell>
                            </TableRow>
                       </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions>
                <Button onClick={()=>{handleClose()}} color="error">Cancel</Button>
                <Button onClick={handleSubmit} disabled={isDisabled}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
});

export default FormAddBookDialog;