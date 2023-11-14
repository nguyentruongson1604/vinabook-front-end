import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { observer } from "mobx-react";
import { IAuthor } from "../../../stores/childrens/Authors.store";

const FormAuthorDialog = observer(( {handleClose, handleSubmit}: {handleClose: ()=> void, handleSubmit: (author: IAuthor) => void}) => {
    const [authorName, setAuthorName] = useState<string>('');
    const [authorInfo, setAuthorInfo] = useState<string>('');
    const [isDisabled, setDisabled] = useState<boolean>(false);

    const handleAddAuthor = async () => {
        const author = {
            name: authorName,
            info: authorInfo
        } as IAuthor
        if(authorName && authorInfo){
            handleSubmit(author)
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

    return (
        <div>
            <Dialog open={true} onClose={handleClose}>
                <DialogTitle>Create new author</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Enter author infomation
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="authorName"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={handleNameChange}
                    value={authorName}
                />
                <TextField
                    margin="dense"
                    id="authorInfomation"
                    label="Infomation"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={handleInfoChange}
                    value={authorInfo}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={()=>{handleClose()}} color="error">Cancel</Button>
                <Button onClick={handleAddAuthor} disabled={isDisabled}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
});

export default FormAuthorDialog;