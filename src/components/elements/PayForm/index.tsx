import styles from './style.module.css'

import * as Yup from 'yup'
import { useFormik } from 'formik';
import {
  Button,
  TextField,
  styled,
} from "@mui/material";
import { observer } from 'mobx-react';
import { useStore } from '../../../stores/RootStore.store';
import { IBookInCart } from '../../../stores/childrens/Carts.store';
import { IBooksInBill } from '../../../APIs/bill.api';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import { IBookInCart } from '../../../stores/childrens/Carts.store';


const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('ho vầ tên không được để trống'),
    phone: Yup.string()
        // .matches(phoneRegExp, "Số điện thoại không hợp lệ")
        .required("Số điện thoại không được để trống"),
    // city: Yup.string()
    //     .required("Tỉnh thành không được để trống"),
    address: Yup.string()
        .required("Địa chỉ không được để trống"),
    note: Yup.string()
});

// const a = () =>{
//   if(dataFromLocalStorage){
//     return JSON.parse(dataFromLocalStorage)
//   }
//   else
//   return undefined
// }
// console.log(a().name);

const PayForm= observer(() => {
  const dataFromLocalStorage  = localStorage.getItem("adress")
  const store = useStore()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name:  '',
      phone: '',
      address: '',
      note: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      localStorage.setItem('adress', JSON.stringify(values));
      const data = await store.CartStore?.getCurrentCart
      // const data:IBooksInBill[] = books?.listBook!
      const newData = data?.listBook.map((book)=>{
        return{
          bookId: book.bookId,
          quantity: book.quantity,
          discount: book.bookId.discount!,
          price: book.bookId.price!,
        }
      })
      const convertData = {
        books: newData
      }         
      const dataBill = {...values, ...convertData}
      await store.billStore?.setCurrentBill(dataBill)
      navigate(`/confirmBill/`)
    },
  });


  const fetchData = () => {
      if(dataFromLocalStorage){
        const dataAdress = JSON.parse(dataFromLocalStorage)
        formik.setValues({
          name:  dataAdress.name,
          phone: dataAdress.phone ,
          address: dataAdress.address ,
          note: dataAdress.note ,
        })
      }
  };

  useEffect(() => {
    fetchData();
  }, [dataFromLocalStorage]);
  
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    formik.handleSubmit(e);
  };

  return (
    <div>
    <div className={styles.logo}>
        <img width="252" height="33" src="https://www.vinabook.com/images/thumbnails/img/252/33/vnb_logo_2x.png"/>
    </div>
    <div className={styles.leftBox}>
      <form onSubmit={formik.handleSubmit} >
        <div>   
          <label className={styles.inputName}>Họ và tên:</label>     
          <TextField
            variant="outlined"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            InputProps={{
              classes: {
                input: styles.inputBase, // Áp dụng CSS Module cho phần tử con
              },
            }}
          />
        </div> 

        <div>   
          <label className={styles.inputName}>Số điện thoại:</label>     
          <TextField
            variant="outlined"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            InputProps={{
              classes: {
                input: styles.inputBase, // Áp dụng CSS Module cho phần tử con
              },
            }}
          />
        </div> 
        
        <div>   
          <label className={styles.inputName}>Địa chỉ:</label>     
          <TextField
          className={styles.inputAdd}
            variant="outlined"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            multiline
            rows={4}
            
          />
        </div>
        
        <p className={styles.noteTxt}>GHI CHÚ GIAO HÀNG</p>
        <TextField
            variant="outlined"
            name="note"
            className={styles.input}
            value={formik.values.note}
            onChange={formik.handleChange}
            error={formik.touched.note && Boolean(formik.errors.note)}
            helperText={formik.touched.note && formik.errors.note}
            multiline
            rows={4}
            placeholder="ghi chú giao hàng"
            fullWidth
          />
      </form>
    </div>
        <div className={styles.boxBtnLeft}>
          <Link to='/checkout'>
            <Button
                fullWidth
                variant="contained"
                className={styles.buttonBack}
            >
                Quay lại
            </Button>
          </Link>
        </div>

        <div className={styles.boxBtnRight}>
        
          <Button
              fullWidth
              variant="contained"
              className={styles.buttonPay}
              onClick={handleFormSubmit}
          >
            Thanh toán
          </Button>
        </div>
    </div>  
  );
});
  
export default PayForm




