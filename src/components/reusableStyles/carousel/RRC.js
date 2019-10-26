// This is the React Responsive Gallery
// http://react-responsive-carousel.js.org/#demos
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { images } from './sampleImages';
const RRC = () => {
  return (
    <Carousel>
      {images.map(image => (
        <img src={image} alt={' '} />
      ))}
    </Carousel>
  );
};

export default RRC;
