import styles from './style.module.css'
const PaginationCategory: React.FC<{num?: number, className?: string}> = ({num, className}) => {
    return (
      <div className={className}>
            <div className={styles.PaginationCategory}>
                <span>1</span>
            </div>
      </div>
    );
  };
  
export default PaginationCategory