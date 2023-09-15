import styles from './style.module.css'

import * as Yup from 'yup'
import { useFormik } from 'formik';
import {
  Button,
  TextField,
  styled,
} from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email không hợp lệ')
      .required('Email không được để trống'),
    name: Yup.string().required('Tên không được để trống'),
    password: Yup.string()
      .min(6, 'Mật khẩu phải chứa ít nhất 6 kí tự')
      .required('Mật khẩu không được để trống'),
    passwordConfirm: Yup.string()
      .required('Mật khẩu không được để trống')
      .oneOf([Yup.ref('password'), ''], 'Mật khẩu không khớp'),
});

 


const FormRegister= () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      date: '',
      sex: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Xử lý khi form được gửi
      console.log('Form data submitted:', values);
    },
  });
  const handleDateChange = (event: any) => {
    formik.setFieldValue('date', event.target.value); // Cập nhật trường 'date' trong formik
  };
  return (
    <div>
      <h1 className={styles.bannerReg}>ĐĂNG KÝ TÀI KHOẢN</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label className={styles.inputName}>Họ và tên:</label>     
          <TextField
            variant="outlined"
            name="name"
            // className={styles.input}
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.name)}
            helperText={formik.touched.email && formik.errors.name}
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
        <div>
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
        </div>

        <label className={styles.inputName}></label>
        <Button
            fullWidth
            variant="contained"
            className={styles.buttonStyles}
            type="submit"
        >
            Đăng kí
        </Button>
      </form>
    </div>
  );
};
  
export default FormRegister




