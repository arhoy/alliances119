import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h4`
  font-size: 2.6rem;
  text-transform: uppercase;
  text-align: center;
  opacity: 1;
  position: absolute;
  color: ${props => props.theme.colors.black};
  &:hover {
    text-decoration: underline;
  }
`;

const Container = styled.a`
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  width: 30rem;
  height: 30rem;
  background: linear-gradient(
    to bottom,
    ${props => props.theme.colors.lightgrey2},
    ${props => props.theme.colors.lightgrey}
  );
  box-shadow: 0 10px 6px -6px #777;

  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    background: ${props => props.theme.colors.primary};
    ${Title} {
      font-size: 3rem;
    }
  }

  @media (max-width: ${props => props.theme.screenSize.mobileS}) {
    width: 25rem;
    height: 25rem;
  }
`;

const Store = ({ url, name, background, backgroundHover }) => {
  console.log(name);
  return (
    <Container
      background={background}
      backgroundHover={backgroundHover}
      href={url}
      target="_blank"
    >
      <Title>{name}</Title>
    </Container>
  );
};
export default Store;
