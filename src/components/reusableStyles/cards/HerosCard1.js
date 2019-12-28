import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  z-index: 2;
  background: ${props => props.background || props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 2rem;
  text-align: center;
  & h4 {
    color: ${props => props.color || props.theme.colors.primary};
    text-shadow: -3px 3px 0 rgba(10, 14, 39, 0.1);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-bottom: 1rem;
    display: block;
  }

  & p {
    font-size: 1.6rem;
    padding: 0 1rem;
  }

  margin: 1rem;

  width: 20%;
  min-width: 25rem;
`;

const IconContainer = styled.div`
  display: flex;
  color: ${props => props.theme.colors.blackTransparent};
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const HerosCard1 = ({ title, blurb, icon, background }) => (
  <Container background={background}>
    <h4>{title}</h4>
    <IconContainer>{icon}</IconContainer>
    <p>{blurb}</p>
  </Container>
);

export default HerosCard1;
