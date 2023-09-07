import ProductImage from '../../elements/ProductImage'
import ProductInfo from '../../elements/ProductInfo'
import ProductPropRight from '../../elements/ProductProps'
import style from './style.module.css'
import productImage from '../../images/372409_p95981mimage234132.jpg'

const ProductMainInfo = () => {
    return(
        <div className={style.productMainInfo}>
            <div className={style.productImage}>
                <ProductImage src={productImage}/>
            </div>
            <div className={style.productInfo}>
                <ProductInfo title='Sổ tay bác sĩ nhí – Hiểu đúng bệnh, chữa nhẹ tênh' author='Štěpánka Sekaninová' company='NXB Thanh Niên' publicCompany='Nhà phát hành SAN HÔ' intro='Đã bao giờ các bạn nhỏ gặp phải tình huống bạn bè, người thân ho ốm hay bản thân phải vật lộn cùng cơn đau bụng khi vắng mặt bố mẹ? Dù bạn nhỏ tò mò về công việc của bác sĩ hay muốn tự chăm sóc bản thân, giúp đỡ mọi người, cuốn sáchĐã bao giờ các bạn nhỏ gặp phải tình huống bạn bè, người thân ho ốm hay bản thân phải vật lộn cùng cơn đau bụng khi vắng mặt bố mẹ? Dù bạn nhỏ tò mò về công việc của bác sĩ hay muốn tự chăm sóc bản thân, giúp đỡ mọi người, cuốn sáchĐã bao giờ các bạn nhỏ gặp phải tình huống bạn bè, người thân ho ốm hay bản thân phải vật lộnĐã bao giờ các bạn nhỏ gặp phải tình huống bạn bè, người thân ho ốm hay bản thân phải vật lộn cùng cơn đau bụng khi vắng mặt bố mẹ? Dù bạn nhỏ tò mò về công việc của bác sĩ hay muốn tự chăm sóc bản thân, giúp đỡ mọi người, cuốn sáchĐã bao giờ các bạn nhỏ gặp phải tình huống bạn bè, người thân ho ốm hay bản thân phải vật lộn cùng cơn đau bụng khi vắng mặt bố mẹ? Dù bạn nhỏ tò mò về công việc của bác sĩ hay muốn tự chăm sóc bản thân, giúp đỡ mọi người, cuốn sáchĐã bao giờ các bạn nhỏ gặp phải tình huống bạn bè, người thân ho ốm hay bản thân phải vật lộn cùng cơn đau bụng khi vắng mặt bố mẹ? Dù bạn nhỏ tò mò về công việc của bác sĩ hay muốn tự chăm sóc bản thân, giúp đỡ mọi người, cuốn sách cùng cơn đau bụng khi vắng mặt bố mẹ? Dù bạn nhỏ tò mò về công việc của bác sĩ hay muốn tự chăm sóc bản thân, giúp đỡ mọi người, cuốn sách'/>
            </div>
            <div className={style.ProductPropRight}>
                <ProductPropRight price={180000} discount={15} quantity={15}/>
            </div>
        </div>
    )
}

export default ProductMainInfo