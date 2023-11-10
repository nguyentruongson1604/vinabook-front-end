import * as React from 'react';
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
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../stores/RootStore.store';

import styles from './style.module.css'

function createData({
  name,
  phone,
  address,
  totalCost,
  status,
  books,
  time,
  id,
}: {
  name: string;
  phone: string;
  address: string;
  totalCost: number;
  status: string;
  books: any;
  time: string;
  id: string
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
  };
}
function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
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
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
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
    const response = await store.billStore?.getCurrentBill(searchQuery)
    
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
