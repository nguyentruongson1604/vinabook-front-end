import styles from './style.module.css'


import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useStore } from '../../../../stores/RootStore.store';
import { observer } from 'mobx-react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BillForm = observer(() =>{
  // Lấy giá trị từ phần * trên URL
  const { '*': billID } = useParams();
  const store = useStore()
  console.log('billid',billID);
  
  const currentBill = async () => {  
    Promise.all([await store.billStore?.getCurrentBill(billID!)])    
  }
  useEffect(()=>{
    currentBill()
  }, [])
  
  
  const rows = store.billStore?.currenBill?.books.map((item: any) => {
    return {
      ...item,
      name: item.bookId.name,
      id: item._id
    }
  }) || []
  
  return (
    <div className={styles.contains}>
      <h2>Detail of bill: {billID}</h2>
      <div className={styles.rowName}>
        <label className={styles.nameField}>Họ và tên:</label>
        <input
          className={styles.inputName}
          type="text"
          value = {store.billStore?.currenBill?.name}
          readOnly
        />
      </div>

      <div className={styles.rowName}>
        <label className={styles.nameField}>Số điện thoại:</label>
        <input
          className={styles.inputName}
          type="text"
          value = {store.billStore?.currenBill?.phone}
          readOnly
        />
      </div>

      <div className={styles.rowName}>
        <label className={styles.nameField}>Ghi chú:</label>
        <input
          className={styles.inputName}
          type="text"
          value = {store.billStore?.currenBill?.note}
          readOnly
        />
      </div>

      <div className={styles.rowName}>
        <label className={styles.nameField}>Ngày tạo:</label>
        <input
          className={styles.inputName}
          type="text"
          value = {store.billStore?.date(store.billStore?.currenBill?.createdAt)}
          readOnly
        />
      </div>

      <div className={styles.rowName}>
        <label className={styles.nameField}>Trạng thái:</label>
        <input
          className={styles.inputName}
          type="text"
          value = {store.billStore?.currenBill?.status}
          readOnly
        />
      </div>

      <div className={styles.rowName}>
        <label className={styles.nameField}>Tổng tiền:</label>
        <input
          className={styles.inputName}
          type="text"
          value = {store.billStore?.currenBill?.totalCost}
          readOnly
        />
      </div>
      
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID sách</TableCell>
            <TableCell align="left">Tên sách</TableCell>
            <TableCell align="left">Số lượng</TableCell>
            <TableCell align="left">Giảm giá</TableCell>
            <TableCell align="left">Giá</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.quantity}</TableCell>
              <TableCell align="left">{row.discount}%</TableCell>
              <TableCell align="left">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
  );
})

export default BillForm;
