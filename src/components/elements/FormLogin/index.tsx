import styles from './style.module.css'

import * as Yup from 'yup'
import { useFormik } from 'formik';
import {
  Button,
  TextField,
  styled,
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';




const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email không được để trống'),
    password: Yup.string()
      .required('Mật khẩu không được để trống'),
});

 


const FormLogin= () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      isChecked: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Xử lý khi form được gửi
      console.log('Form data submitted:', values);
    },
  });

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div>
      <h1 className={styles.bannerLog}>ĐĂNG NHẬP TÀI KHOẢN</h1>
      <form onSubmit={formik.handleSubmit}>
        

        <div>   
          <label className={styles.inputName}>Email:</label>     
          <TextField
            variant="outlined"
            name="email"
            className={styles.input}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              classes: {
                input: styles.inputBase, // Áp dụng CSS Module cho phần tử con
              },
            }}
          />
        </div> 

        <div>
          <label className={styles.inputName}>Mật khẩu:</label>     
          <TextField
            variant="outlined"
            name="password"
            type="password"
            className={styles.input}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.password)}
            helperText={formik.touched.email && formik.errors.password}
            InputProps={{
              classes: {
                input: styles.inputBase, // Áp dụng CSS Module cho phần tử con
              },
            }}
          />
        </div>
        
        <div>
        <Checkbox 
          {...label}  
          defaultChecked={formik.values.isChecked}
          onChange={(e) => formik.setFieldValue('isChecked', e.target.checked)}
        />
        <p className={styles.renember}>ghi nhớ thông tin</p>
        </div>
        
        <div>
          <label className={styles.inputName}></label>
          <Button
              fullWidth
              variant="contained"
              className={styles.buttonStyles}
              type="submit"
          >
              Đăng nhập
          </Button>
        </div>
        <p className={styles.reg}>chưa có tài khoản vui lòng <a href="">đăng ký</a></p>
      </form>
    </div>
  );
};
  
export default FormLogin




