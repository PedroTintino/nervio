import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, interval);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]); 

  return (
    <div className=" rounded overflow-hidden">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
