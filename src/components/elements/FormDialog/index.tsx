import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { observer } from "mobx-react";
import { ICategory } from "../../../APIs/category.api";
import { IPublisher } from "../../../APIs/publisher.api";

const FormDialog = observer(( {handleClose, handleSubmit}: {handleClose: ()=> void, handleSubmit:(inputVal: Object) => void} ) => {
    const [inputVal, setInputVal] = useState<string>('');
    const [isDisabled, setDisabled] = useState<boolean>(false);

    const handleSubmitForm = async () => {
        const input = {
            name: inputVal,
        } as ICategory | IPublisher
        if(inputVal){
            handleSubmit(input);
            handleClose()
        }
    }

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setInputVal(event.target.value);
        if(event.target.value === ''){
            setDisabled(true);
        }
        else{
            setDisabled(false);
        }
    }

    return (
        <div>
            <Dialog open={true} onClose={handleClose}>
                <DialogTitle>Create new record</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Enter record infomation
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="inputVal"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={handleNameChange}
                    value={inputVal}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={()=>{handleClose()}} color="error">Cancel</Button>
                <Button onClick={handleSubmitForm} disabled={isDisabled}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
});

export default FormDialog;