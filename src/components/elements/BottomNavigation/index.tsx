import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import style from './style.module.css';

const LabelBottomNavigation = ({handleOpenMenu}: {handleOpenMenu: () => void }) => {
    return(
        <div className={style.bottomNavigation + " container"}>
            <BottomNavigation showLabels>
                <BottomNavigationAction
                    label="Trang chủ"
                    icon={<HomeOutlinedIcon/>}
                />
                <BottomNavigationAction
                    label="Danh mục"
                    icon={<ClassOutlinedIcon/>}
                    onClick={()=>{handleOpenMenu()}}
                />
                <BottomNavigationAction
                    label="Giỏ hàng"
                    icon={<ShoppingCartOutlinedIcon/>}
                />
                <BottomNavigationAction
                    label="Hỗ trợ"
                    icon={<ContactSupportOutlinedIcon/>}
                />
                {/* <BottomNavigationAction
                    label="Cá nhân"
                    icon={<AccountBoxOutlinedIcon/>}
                />     */}
            </BottomNavigation>
        </div>
    )
}

export default LabelBottomNavigation