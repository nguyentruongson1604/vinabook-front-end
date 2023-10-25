import PayForm from '../../elements/PayForm';
import Nav from '../../templates/Nav';

const PayAdressPage: React.FC<{className?: string }> = ({className }) => {
    return (
        <>
            <Nav appear={false}/>
            <div className="container">
                <PayForm/>
            </div>
            <div className="clearfix"></div>
        </>
    )
};
  
export default PayAdressPage