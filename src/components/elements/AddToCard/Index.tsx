import './Style.css'
const AddToCard: React.FC<{className?: string, handleAddBook:() => void}> = ({className, handleAddBook}) => {

    return (
        <div className = {className}>
            <button className="btn" type="button" onClick={()=>{handleAddBook()}}>Mua ngay</button>
        </div>
    ) 
  };
  
export default AddToCard