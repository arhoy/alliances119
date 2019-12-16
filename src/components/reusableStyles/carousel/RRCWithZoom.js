// No Libraries other than React Image Magnify

import React, { useState } from 'react';
import styled from '@emotion/styled';

import ReactImageMagnify from 'react-image-magnify';

const SimpleSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const length = images.length - 1;

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1);
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1);

  const ButtonWrapper = styled.div`
    & button {
      border: none;
      outline: none;
      padding: 0.5rem 1rem;
      margin: 0.5rem;
    }
  `;

  const Div = styled.div`
    max-width: 30rem;
    margin: 0 auto;
  `;

  return (
    <Div>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: ' ',
            isFluidWidth: true,
            src: images[index].fluid ? images[index].fluid.src : images[index],
          },
          largeImage: {
            src: images[index].fluid ? images[index].fluid.src : images[index],
            width: 600,
            height: 600,
          },
          lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
        }}
      />
      {images.length > 1 ? (
        <ButtonWrapper>
          <button onClick={() => handlePrevious()}>Previous</button>
          <button onClick={() => handleNext()}>Next</button>
        </ButtonWrapper>
      ) : null}
    </Div>
  );
};

export default SimpleSlider;
