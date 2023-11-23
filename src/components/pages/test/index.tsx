// Slider.tsx
import React, { useState, useEffect } from 'react';
import styles from './style.module.css';

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const newIndex = (currentIndex + 1) % images.length;
  //     setCurrentIndex(newIndex);
  //   }, 3000); // Đổi giá trị này để điều chỉnh tốc độ tự động chuyển đổi ảnh

  //   return () => clearInterval(intervalId);
  // }, [currentIndex, images.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slideWrapper} style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {images.slice(2).map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index + 3 === currentIndex ? styles.active : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
