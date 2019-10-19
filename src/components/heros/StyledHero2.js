import React from 'react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
const StyledHero2 = ({ img, className, children, home }) => (
  <BackgroundImage className={className} fluid={img} home={home}>
    {children}
  </BackgroundImage>
);

export default styled(StyledHero2)`
  min-height: ${props => (props.home ? 'calc(50vh - 62px)' : '30vh')};
  background-position: left;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -100;
`;
