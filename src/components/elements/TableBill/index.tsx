import * as React from 'react';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../stores/RootStore.store';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import styles from './style.module.css'
import { Button } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function createData({
  name,
  phone,
  address,
  totalCost,
  status,
  books,
  time,
  id,
  iSDelete,
}: {
  name: string;
  phone: string;
  address: string;
  totalCost: number;
  status: string;
  books: any;
  time: string;
  id: string;
  iSDelete: boolean
}) {
  return {
    name,
    phone,
    address,
    totalCost,
    status,
    books,
    time,
    id,
    iSDelete,
  };
}
function Row(props: { row: ReturnType<typeof createData> }) {
  const store = useStore()
  const { row } = props;
  const [openTable, setOpenTable] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async (id: string)=>{
    setOpen(false);
    const res = await store.billStore?.deleteUserBill(id)
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpenTable(!openTable)}
          >
            {openTable ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">{row.time}</TableCell>
        <TableCell align="center">{row.phone}</TableCell>
        <TableCell align="center">{row.address}</TableCell>
        <TableCell align="center">{row.totalCost}</TableCell>
        <TableCell align="center">{row.status}</TableCell>
        {
          row.status == 'wait' ? (<TableCell align="center">
            <Button
              onClick={handleClickOpen}
            >
              <DeleteIcon/>
            </Button>
          </TableCell>) : (<TableCell align="center">shipping</TableCell>)
        }
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Xác nhận hủy đơn hàng?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Bạn có chắc muốn hủy đơn hàng đã đặt?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Bỏ qua</Button>
          <Button onClick={() => {fetchData(row.id)}}>Hủy đơn</Button>
        </DialogActions>
      </Dialog>

      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={openTable} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div" sx={{color: '#057A45', fontWeight: 'bold' }}>
                Chi tiết
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Tên sách</TableCell>
                    <TableCell>Giá</TableCell>
                    <TableCell align="right">Số lượng</TableCell>
                    <TableCell align="right">Giảm giá</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.books.map((book: any) => (
                    <TableRow key={book._id}>
                      <TableCell component="th" scope="row">
                        {book.bookName}
                      </TableCell>
                      <TableCell>{book.price}</TableCell>
                      <TableCell align="right">{book.quantity}</TableCell>
                      <TableCell align="right">{book.discount}% </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



const CollapsibleTable = observer(() => {  
  const [searchQuery, setSearchQuery] = React.useState('');
  const store = useStore()
  const handleSearch = async () => {
    const response = await store.billStore?.getCurrentBillUser(searchQuery)
    // if(response.data.status === "error" || response == )
  };
  const checkCurrentUser = async ()=>{  
    await store.billStore?.getHistoryBill(1,100,'')       
  }
  useEffect(()=>{
    checkCurrentUser()
  }, [])
  const rows = store.billStore?.tableData.map((item) => {
    return createData(item)
  }) || []

  return (
    <div>
      <div className = {styles.tittle}>
        Đơn hàng của tôi
      </div>

      <div className= {styles.inputBill}>
        <div className={styles.name}>Mã đơn hàng:</div>
        <input
          className={styles.inputName}
          type="text"
          placeholder="Nhập mã đơn hàng"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className={styles.btn}>
        <button onClick={handleSearch} className={styles.btnSearch}>Tìm Kiếm</button>
        <button onClick={checkCurrentUser} className={styles.btnBack}>Refresh</button>
      </div>
      <div className="clearfix"></div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead sx={{ backgroundColor: '#057A45' }}>
            <TableRow>
              <TableCell />
              <TableCell sx={{color: '#ffffff' }}>ID</TableCell>
              <TableCell align="center" sx={{color: '#ffffff' ,fontWeight: 'bold' }}>Khách hàng</TableCell>
              <TableCell align="center" sx={{color: '#ffffff' ,fontWeight: 'bold'}}>Ngày đặt</TableCell>
              <TableCell align="center" sx={{color: '#ffffff' ,fontWeight: 'bold'}}>Số điện thoại</TableCell>
              <TableCell align="center" sx={{color: '#ffffff' ,fontWeight: 'bold'}}>Địa chỉ</TableCell>
              <TableCell align="center" sx={{color: '#ffffff' ,fontWeight: 'bold'}}>Tổng tiền</TableCell>
              <TableCell align="center" sx={{color: '#ffffff' ,fontWeight: 'bold'}}>Trạng thái</TableCell>
              <TableCell align="center" sx={{color: '#ffffff' ,fontWeight: 'bold'}}>isDelete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
})
export default CollapsibleTable
