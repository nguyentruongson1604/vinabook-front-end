import './style.css';
import AllBanner from '../../collections/AllBanner';
import SmallBannerBottom from '../../elements/SmallBannerBottom';
import CarouselBanner from '../../elements/CarouselBanner';

function Banner() {
  return (
    <>
        <AllBanner/>
        <SmallBannerBottom/>
        <CarouselBanner/>
    </>
    
  )
}

export default Banner;