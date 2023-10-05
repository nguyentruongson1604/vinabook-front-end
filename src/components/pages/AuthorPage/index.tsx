import Nav from '../../templates/Nav';
import styles from './style.module.css'
import AuthorContent from '../../templates/AuthorContent';
import { useParams } from 'react-router';
const AuthorPage: React.FC<{className?: string }> = ({className }) => {
    const {authorId} = useParams()
    return (
        <>
            <Nav appear={false}/>
            <div className="clearfix"></div>
            <div className="container">
                <AuthorContent/>
            </div>
            <div className="clearfix"></div>
        </>
    )
};
  
export default AuthorPage