import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import pic3 from '../../images/pic3.jpg';
import style from './style.module.css';

const CarouselBanner = () => {
    var items = [pic1, pic2, pic3]

    return (
        <div className={style.carouselBanner}>
            <Carousel navButtonsAlwaysInvisible={false} autoPlay={true} interval={5000}>
                {
                    items.map( (item, i) => <Paper key={i}><img src={item} alt="ad"/></Paper> )
                }
            </Carousel>
        </div>
    )
}

export default CarouselBanner