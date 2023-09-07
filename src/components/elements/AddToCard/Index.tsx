import './Style.css'
const AddToCard: React.FC<{className?: string}> = ({className}) => {
    return (
        <div className = {className}>
            <button className="btn" type="button">Mua ngay</button>
        </div>
    ) 
  };
  
export default AddToCard