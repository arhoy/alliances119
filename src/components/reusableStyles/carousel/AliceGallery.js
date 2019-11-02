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
  object-fit: cover;

  margin: 0 auto;
`;

const Container = styled.div`
  width: 100%;
`;

const AliceGallery = ({
  images,
  gatsbyImageArray,
  imageHeight,
  maxImageWidth,
  imageWidth,
  children,
  ...props
}) => {
  const handleOnDragStart = e => e.preventDefault();

  if (gatsbyImageArray) {
    console.log('here are the props', props);
    return (
      <Container>
        <AliceCarousel
          mouseDragEnabled
          autoPlay={props.autoPlay}
          duration={props.duration}
          stopAutoPlayOnHover={props.stopAutoPlayOnHover}
          autoPlayInterval={props.autoPlayInterval}
          dotsDisabled={props.dotsDisabled}
          buttonsDisabled={props.buttonsDisabled}
          playButtonEnabled={props.playButtonEnabled}
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
                height: imageHeight ? imageHeight : '',
                width: imageWidth ? imageWidth : '',
                maxWidth: maxImageWidth ? maxImageWidth : '',
              }}
            />
          ))}
        </AliceCarousel>
        {children}
      </Container>
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
        >
          {children}
        </StyledImage>
      ))}
    </AliceCarousel>
  );
};

export default AliceGallery;
