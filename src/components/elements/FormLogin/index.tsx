import styles from './style.module.css'

import * as Yup from 'yup'
import { useFormik } from 'formik';
import {
  Button,
  TextField,
  styled,
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { useStore } from '../../../stores/RootStore.store';
import { useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import { observer } from 'mobx-react';





const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email không được để trống'),
    password: Yup.string()
      .required('Mật khẩu không được để trống'),
});

const FormLogin= observer(() => {
  const store = useStore()
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState(null)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      isChecked: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const data = await store.userAccess?.userLogin(values)        
        if (data) {
          if (data.success) {
            localStorage.setItem("accessToken", data.res.accessToken)
            localStorage.setItem("refreshToken", data.res.refreshToken)
            store.userAccess?.setUserAccess(data.res.data)
            navigate('/')
          }
          else{
            setErrorMessage(data.res.message)
          }
        }
        
      } catch (error) {
        // Xử lý lỗi từ API
        console.error('API error:', error);
      }
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
        {
          errorMessage/*biểu thức điều kiện, nếu errorMessage = null thì {} sẽ không được thực thi*/ 
          && <div className={styles.errorMesage}>Error: {errorMessage}</div>
        }
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
});
  
export default FormLogin




