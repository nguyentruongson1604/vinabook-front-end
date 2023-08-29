import styles from './Style.module.css'

interface boxSaleOff {
  className?: string;
  boxSaleOffEdit?: string
}
const BoxSaleOff: React.FC<{ discount: number, className?: boxSaleOff }> = ({ discount,className }) => {
    return (
      <div className={className?.className}>
        <div className={`${styles.boxSaleOff} ${className?.boxSaleOffEdit}`}>-{discount}%</div>
      </div>
    );
  };
  
export default BoxSaleOff