import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import styled from '@emotion/styled';
import 'react-alice-carousel/lib/alice-carousel.css';

const StyledImage = styled.img`
  max-width: 50%;
  margin: 0 auto;
`;

const AliceGallery = ({ images }) => {
  const handleOnDragStart = e => e.preventDefault();

  return (
    <div>
      <AliceCarousel mouseDragEnabled buttonsDisabled>
        {images.map((image, i) => (
          <StyledImage
            key={i}
            src={image.fluid.src}
            alt={' '}
            onDragStart={handleOnDragStart}
            style={{
              display: 'block',
              margin: '0 auto',
            }}
          />
        ))}
      </AliceCarousel>
    </div>
  );
};

const StyledAliceGallery = styled(AliceGallery)`
  background: red;
`;

export default StyledAliceGallery;
