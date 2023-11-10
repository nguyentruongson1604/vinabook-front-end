import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { useState } from "react";

const AlertDialog = ({isOpen, handleAccept, handleCancle}:{isOpen: boolean, handleAccept: ()=>void, handleCancle: ()=>void}) => {
    const [open, setOpen] = useState(isOpen);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Xác nhận xóa ?"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Bản ghi sẽ không thể khôi phục!
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={()=>{handleCancle();handleClose()}} autoFocus>Hủy</Button>
            <Button onClick={()=>{handleAccept();handleClose()}}>
                Xác nhận
            </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AlertDialog;