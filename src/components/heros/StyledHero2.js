import React from 'react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
const StyledHero2 = ({ img, className, children, home }) => (
  <BackgroundImage className={className} fluid={img} home={home}>
    {children}
  </BackgroundImage>
);

export default styled(StyledHero2);
