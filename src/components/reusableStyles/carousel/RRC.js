// This is the React Responsive Gallery
// http://react-responsive-carousel.js.org/#demos
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const RRC = ({ images }) => {
  return (
    <Carousel style={{ maxWidth: '20rem', background: 'transparent' }}>
      {images.map((image, i) => (
        <img key={i} src={image.fluid.src} alt={' '} />
      ))}
    </Carousel>
  );
};

export default RRC;
