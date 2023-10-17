import styles from './style.module.css'

import * as Yup from 'yup'
import { useFormik } from 'formik';
import {
  Button,
  TextField,
} from "@mui/material";
import { useNavigate } from 'react-router';
import { useStore } from '../../../stores/RootStore.store';
import { useState } from 'react';
import { observer } from 'mobx-react';



const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email không hợp lệ')
      .required('Email không được để trống'),
    name: Yup.string().required('Tên không được để trống'),
    currentPassword: Yup.string()
      .min(6, 'Mật khẩu phải chứa ít nhất 6 kí tự')
      .required('Mật khẩu không được để trống'),
    newPassword: Yup.string()
      .min(6, 'Mật khẩu phải chứa ít nhất 6 kí tự')
      .required('Mật khẩu không được để trống'),
    passwordConfirm: Yup.string()
      .required('Mật khẩu không được để trống')
      .oneOf([Yup.ref('newPassword'), ''], 'Mật khẩu không khớp'),
});

 


const FormUpdateUser= observer(() => {
  const store = useStore()
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState(null)
  
  const formik = useFormik({
    initialValues: {
      name: store.userAccess?.userAccess?.name,
      email: store.userAccess?.userAccess?.email,
      currentPassword: '',
      newPassword: '',
      passwordConfirm: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const data = await store.userAccess?.changePassword(values)      
      if(data?.success){
        setErrorMessage(null)
      }
      else{
        setErrorMessage(data?.res.message)
      }
    },
  });
  return (
    <div>
      <h1 className={styles.bannerReg}>Thông tin cá nhân</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label className={styles.inputName}>Họ và tên:</label>     
          <TextField
            label="Disabled"
            variant="outlined"
            name="name"
            // className={styles.input}
            value={formik.values.name}
            // onChange={formik.handleChange}
            // error={formik.touched.email && Boolean(formik.errors.name)}
            // helperText={formik.touched.email && formik.errors.name}
            InputProps={{
              classes: {
                input: styles.inputBase, // Áp dụng CSS Module cho phần tử con
              },
            }}
          />
        </div>

        <div>   
          <label className={styles.inputName}>Email:</label>     
          <TextField
            label="Disabled"
            variant="outlined"
            name="email"
            className={styles.input}
            value={formik.values.email}
            // onChange={formik.handleChange}
            // error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              classes: {
                input: styles.inputBase, // Áp dụng CSS Module cho phần tử con
              },
            }}
          />
        </div> 
        
        <div>
          <label className={styles.inputName}>Mật khẩu cũ:</label>     
          <TextField
            variant="outlined"
            name="currentPassword"
            type="password"
            className={styles.input}
            value={formik.values.currentPassword}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.currentPassword)}
            helperText={formik.touched.email && formik.errors.currentPassword}
            InputProps={{
              classes: {
                input: styles.inputBase, // Áp dụng CSS Module cho phần tử con
              },
            }}
          />
        </div>

        <div>
          <label className={styles.inputName}>Mật khẩu mới:</label>     
          <TextField
            variant="outlined"
            name="newPassword"
            type="password"
            className={styles.input}
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.newPassword)}
            helperText={formik.touched.email && formik.errors.newPassword}
            InputProps={{
              classes: {
                input: styles.inputBase, // Áp dụng CSS Module cho phần tử con
              },
            }}
          />
        </div>
        
        <div>
          <label className={styles.inputName}>Xác nhận mật khẩu:</label>     
          <TextField
            variant="outlined"
            name="passwordConfirm"
            type="password"
            className={styles.input}
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.passwordConfirm)}
            helperText={formik.touched.email && formik.errors.passwordConfirm}
            InputProps={{
              classes: {
                input: styles.inputBase, // Áp dụng CSS Module cho phần tử con
              },
            }}
          />
        </div>

        {/* <div>
        <label className={styles.inputName}>Ngày sinh:</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker 
                value={formik.values.date}
                onChange={(date) => {
                  formik.setFieldValue('date', date); // Cập nhật trường 'date' trong formik
                }}
                className={styles.abc}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div> */}
        {/* <div>
          <label className={styles.inputName}>Ngày sinh:</label>
          <input 
            type="date" 
            name='date' 
            value={formik.values.date}
            onChange={handleDateChange}
            className={styles.inputBase}
          >
          </input>
        </div>

        <div>
        <label className={styles.inputName}>Giới tính:</label>
          <RadioGroup
            row
            name="sex"
            onChange={formik.handleChange}
            className={styles.rdoGroup}
          >
            <FormControlLabel value="1" control={<Radio size="small" />}  label="Nữ" />
            <FormControlLabel value="0" control={<Radio size="small"/>} label="Nam" />
          </RadioGroup>
        </div> */}
        {
          errorMessage/*biểu thức điều kiện, nếu errorMessage = null thì {} sẽ không được thực thi*/ 
          && <div className={styles.errorMesage}>Error: {errorMessage}</div>
        }

        <label className={styles.inputName}></label>
        <Button
            fullWidth
            variant="contained"
            className={styles.buttonStyles}
            type="submit"
        >
            Lưu
        </Button>
      </form>
    </div>
  );
});
  
export default FormUpdateUser



