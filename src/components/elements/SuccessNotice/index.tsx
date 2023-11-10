import {
    Button,
  } from "@mui/material";
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router";

import { useStore } from "../../../stores/RootStore.store";
import { useParams } from 'react-router-dom';

const SuccessNotice: React.FC<{className?: string }> = ({className }) => {
    const store = useStore()
    const navigate = useNavigate()
    const  {billId}  = useParams();
    const handleBack = ()=>{
        navigate(`/`)
    }
    return (
        <div className={className}>
            <div className="container">
            <div className={styles.tittle}>HOÀN TẤT ĐẶT HÀNG</div>
            <div className={styles.notice}>
                <FontAwesomeIcon icon={faCircleCheck} style={{color: "#eff316", fontSize: "36px"}}/>
                <div className={styles.noticeText}>
                    <p className={styles.success}>ĐƠN ĐẶT HÀNG CỦA QUÝ KHÁCH ĐÃ ĐƯỢC ĐẶT THÀNH CÔNG</p>
                    <p className={styles.contact}>Cảm ơn bạn đã đặt hàng của chúng tôi. Nhân viên chúng tôi sẽ liên hệ thông báo giao hàng với bạn</p>
                </div>
            </div>
            <div className={styles.idText}>Mã đơn hàng: <p className={styles.idContent}>{billId}</p></div>
            <div className={styles.btnBack}>
                <Button
                    fullWidth
                    variant="contained"
                    className={styles.buttonBack}
                    onClick={handleBack}
                >
                    Quay lại trang mua hàng
                </Button>
            </div>
            </div>
        </div>
    );
  };
  
export default SuccessNotice