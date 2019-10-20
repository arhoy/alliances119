import React from 'react';
import styled from '@emotion/styled';

const H1 = styled.h1`
  font-size: 6rem;
  color: ${props => props.theme.colors.primaryLight};
  line-height: 4.5rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    font-size: 4.5rem;
  }
`;
const Div = styled.div`
  padding: 2rem 4rem;
  background: ${props => props.theme.colors.primaryTransparent};
`;

const CatchyBanner = ({
  title,
  children,
  color,
  fontSize,
  width,
  background,
}) => {
  return (
    <Div style={{ width: width, background: background }}>
      <H1 style={{ color: `${color}`, fontSize: `${fontSize}` }}>{title}</H1>
      {children}
    </Div>
  );
};

export default CatchyBanner;
