import styles from './style.module.css'

import * as Yup from 'yup'
import { useFormik } from 'formik';
import {
  Button,
  TextField,
  styled,
} from "@mui/material";


const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('ho vầ tên không được để trống'),
    phone: Yup.string()
        .matches(phoneRegExp, "Số điện thoại không hợp lệ")
        .required("Số điện thoại không được để trống"),
    city: Yup.string()
        .required("Tỉnh thành không được để trống"),
    address: Yup.string()
        .required("Địa chỉ không được để trống"),
    note: Yup.string()
});


const PayForm= () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      city: '',
      address: '',
      note: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Xử lý khi form được gửi
      console.log('Form data submitted:', values);
    },
  });


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
          <div>
          
        </div>
      </form>
    </div>
    <div className={styles.boxBtnLeft}>
      <Button
          fullWidth
          variant="contained"
          className={styles.buttonBack}
      >
          Quay lại
      </Button>
    </div>

    <div className={styles.boxBtnRight}>
      <Button
          fullWidth
          variant="contained"
          className={styles.buttonPay}
      >
          Thanh toán
      </Button>
    </div>
    </div>
  );
};
  
export default PayForm




