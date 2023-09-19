// src/components/ImageSlider.js
import React, { useState, useEffect, useCallback } from 'react';

const ImageSlider = () => {
  // Define an array of image URLs
  const images = [
    'https://www.koimoi.com/wp-content/new-galleries/2023/01/box-office-pathaan-takes-biggest-opening-ever-goes-past-kgf-chapter-2-and-war-the-top-10-openers-001.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD1cuhFo1Mn6Fa6YnTk2J5nJattGCxC7xtPg&usqp=CAU',
    'https://atees.in/wp-content/uploads/2016/12/IT-Company-thrissur.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="image-slider">
      <img className='slider' src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <button className="slider-arrow prev" onClick={prevSlide}>
                &#9664; 
            </button>
            <button className="slider-arrow next" onClick={nextSlide}>
                &#9654; 
            </button>
    </div>
  );
};

export default ImageSlider;
