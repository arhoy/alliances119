//https://www.youtube.com/watch?v=AqOaI41TADU&t=20s
import React, { useState, useEffect } from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import { images } from './sampleImages';

const GestureGallerCarousel = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Gallery
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="cover" src={image}></GalleryImage>
      ))}
    </Gallery>
  );
};

export default GestureGallerCarousel;
