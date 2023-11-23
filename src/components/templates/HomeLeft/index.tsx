import { observer } from 'mobx-react';
import BoxHighlight from '../../collections/BoxHighlight/Index';
import BoxInfoBook from '../../collections/BoxInfoBook/Index';
import FamousAuthor from '../../collections/FamousAuthor';
import MainBoxTittle from '../../elements/MainBoxTittle/Index';
import styles from './style.module.css'
import { useStore } from '../../../stores/RootStore.store';
import { IBook, IBookCategory } from '../../../stores/childrens/Books.store';
import React, { useEffect, useState } from 'react';
const HomeLeft: React.FC<{className?: string }> = observer(({className }) => {
    const store = useStore()
    const listBookCategory = store.BooksStore?.getListBookCategory

    // const [currentIndex, setCurrentIndex] = useState(0);
    // const handleDotClick = (index: number) => {
    //     setCurrentIndex(index);
    // };
    const [currentIndexList, setCurrentIndexList] = useState<number[]>(listBookCategory?.map(() => 0) || []);

    const handleDotClick = (index: number, categoryIndex: number) => {
        setCurrentIndexList((prevIndexes) => {
            const newIndexes = [...prevIndexes];
            newIndexes[categoryIndex] = index;
            return newIndexes;
        });
    };

    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth >= 320 && window.innerWidth <= 768);
      };
  
      // Gán sự kiện resize và gọi ngay lúc khởi tạo
      window.addEventListener('resize', handleResize);
      handleResize();
  
      // Cleanup sự kiện khi component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        // <div className={className}>
        //     {
        //         listBookCategory && listBookCategory.map((item: IBookCategory, index: number)=>{
        //             if(item.listBook.length > 0){
        //                 let color
        //                 (index) % 2 ? color = '#f26c63' : color = '#0a6f3c'
        //                 return(
        //                     <div key={index}>
        <div className={className}>
            {listBookCategory && listBookCategory.map((item: IBookCategory, categoryIndex: number) => {
                if (item.listBook.length > 0) {
                    let color = (categoryIndex) % 2 ? '#f26c63' : '#0a6f3c';

                    return (
                        <div key={categoryIndex}>
                                <MainBoxTittle tittle={'Sách nổi bật ' + item.categoryName} appear= {false}/>
                                <BoxHighlight background_color={color} book={item.listBook[0]}/>
                                <MainBoxTittle tittle={'Sách ' + item.categoryName} appear= {true}/>
                                {/* <React.Fragment>
                                    {isSmallScreen ? (
                                        <div className={styles.slider}>
                                            <div className={styles.slideWrapper} style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
                                            {item.listBook.map((book: IBook) => (
                                                // <div key={index} className={styles.slide}>
                                                <BoxInfoBook key={book._id} className={styles.span4} book={book}/>
                                                // </div>
                                            ))}
                                            </div>
                                            <div className={styles.dots}>
                                            {item.listBook.slice(2).map((_, index) => (
                                                <div
                                                key={index}
                                                className={`${styles.dot} ${index  === currentIndex ? styles.active : ''}`}
                                                onClick={() => handleDotClick(index)}
                                                />
                                            ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={styles.boxInforWrapper}>
                                        {item.listBook.map((book: IBook)=>{
                                            return(
                                                <BoxInfoBook key={book._id} className={styles.span4} book={book}/>
                                            )
                                        })}
                                        </div>
                                    )}
                                </React.Fragment> */}
                                <React.Fragment>
                                {isSmallScreen ? (
                                    <div className={styles.slider}>
                                        <div className={styles.slideWrapper} style={{ transform: `translateX(-${currentIndexList[categoryIndex] * 33.33}%)` }}>
                                            {item.listBook.map((book: IBook, bookIndex: number) => (
                                                <BoxInfoBook key={book._id} className={styles.span4} book={book}/>
                                            ))}
                                        </div>
                                        <div className={styles.dots}>
                                            {item.listBook.slice(2).map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`${styles.dot} ${index  === currentIndexList[categoryIndex] ? styles.active : ''}`}
                                                    onClick={() => handleDotClick(index, categoryIndex)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.boxInforWrapper}>
                                        {item.listBook.map((book: IBook) => (
                                            <BoxInfoBook key={book._id} className={styles.span4} book={book}/>
                                        ))}
                                    </div>
                                )}
                            </React.Fragment>
                            </div>
                        )
                    }
                })
            }
            

            {/* <MainBoxTittle tittle={'Sách Hay'} appear= {false}/>
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
            </div> */}
        </div>
    )
});
  
export default HomeLeft