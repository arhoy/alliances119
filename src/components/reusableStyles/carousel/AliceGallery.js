import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import 'react-alice-carousel/lib/alice-carousel.css';

const StyledImage = styled.img`
  max-width: 50%;
  margin: 0 auto;
`;

const StyledOptimizedImage = styled(Img)`
  max-width: 50%;
  margin: 0 auto;
`;

const AliceGallery = ({ images, gatsbyImageArray, loop, loopInterval }) => {
  const handleOnDragStart = e => e.preventDefault();
  console.log('other props are', loopInterval);
  if (gatsbyImageArray) {
    return (
      <>
        <AliceCarousel
          mouseDragEnabled
          buttonsDisabled
          autoPlay={loop}
          stopAutoPlayOnHover={true}
          autoPlayInterval={1000}
          autoPlayDirection="rtl"
        >
          {images.map((image, i) => (
            <StyledOptimizedImage
              key={i}
              fluid={image.childImageSharp.fluid}
              alt={' '}
              onDragStart={handleOnDragStart}
              style={{
                display: 'block',
                margin: '0 auto',
              }}
            />
          ))}
        </AliceCarousel>
      </>
    );
  }

  return (
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
  );
};

const StyledAliceGallery = styled(AliceGallery)`
  background: red;
`;

export default StyledAliceGallery;
