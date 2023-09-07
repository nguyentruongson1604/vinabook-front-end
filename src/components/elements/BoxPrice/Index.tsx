import styles from './Style.module.css'
interface Price {
  className?: string;
  oldPriceEdit?: string
  newPriceEdit?: string
}
const BoxPrice: React.FC<{ newprice?: number; oldprice?: number, className?: Price}> = ({ newprice, oldprice, className}) => {
    return (
      <div className={className?.className}>
        <span className={`${styles.oldPrice} ${className?.oldPriceEdit}`}>{oldprice}đ</span>
        <span className={`${styles.newPrice} ${className?.newPriceEdit}`}>{newprice}đ</span>
      </div>
    );
  };
  
export default BoxPrice