import BoxHighlight from '../../collections/BoxHighlight/Index';
import BoxInfoBook from '../../collections/BoxInfoBook/Index';
import FamousAuthor from '../../collections/FamousAuthor';
import MainBoxTittle from '../../elements/MainBoxTittle/Index';
import styles from './style.module.css'
const HomeLeft: React.FC<{className?: string }> = ({className }) => {
    return (
        <div className={className}>
            <MainBoxTittle tittle={'Sách Mới Hay'} appear= {false}/>
            <BoxHighlight background_color={'#f26c63'}/>
            <MainBoxTittle tittle={'Sách Bán Chạy'} appear= {true}/>
            <div className={styles.boxInforWrapper}>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
            </div>

            <MainBoxTittle tittle={'Sách Hay'} appear= {false}/>
            <BoxHighlight background_color={'#0a6f3c'}/>
            <MainBoxTittle tittle={'Sách Văn Học Mới'} appear= {true}/>
            <div className={styles.boxInforWrapper}>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
            </div>
            
            <MainBoxTittle tittle={'Truyện Tranh'} appear= {false}/>
            <BoxHighlight background_color={'#cf1133'}/>
            <MainBoxTittle tittle={'Sách Kinh Tế Mới'} appear= {true}/>
            <div className={styles.boxInforWrapper}>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
            </div>

            <FamousAuthor/>

            <MainBoxTittle tittle={'Tạp Chí Bán Chạy Nhất'} appear= {true}/>
            <div className={styles.boxInforWrapper}>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
                <BoxInfoBook className={styles.span4}/>
            </div>
        </div>
    )
};
  
export default HomeLeft