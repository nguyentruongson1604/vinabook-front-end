import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { createNewAuthor } from "../../../APIs/author.api";
import { observer } from "mobx-react";
import { useStore } from "../../../stores/RootStore.store";
import { IAuthor } from "../../../stores/childrens/Authors.store";

const FormAuthorDialog = observer(( {handleClose}: {handleClose: ()=> void} ) => {
    const store = useStore();
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
                <Button onClick={handleSubmit} disabled={isDisabled}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
});

export default FormAuthorDialog;