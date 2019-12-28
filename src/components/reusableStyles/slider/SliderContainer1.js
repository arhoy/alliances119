import React from 'react';
import styled from '@emotion/styled';
import { H2Centered } from '../typography/Typography';
import { ButtonStyle2 } from '../buttons/Button';

const ImageContainer = styled.a`
  height: 30rem;
  margin: 0 1rem;
  background: ${props => props.background || props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;
const Title = styled(H2Centered)`
  color: ${props => props.titleColor || props.theme.colors.white};
  text-decoration: none;
  font-size: 3.8rem;
  text-transform: uppercase;

  margin-bottom: 0;
`;

const Subtitle = styled.p`
  color: ${props => props.titleColor || props.theme.colors.white};
  text-align: center;
`;

const SliderContainer1 = ({ background, href, title, subtitle }) => {
  return (
    <ImageContainer
      background={background}
      href={href}
      target="_blank"
      without
      rel="noopener noreferrer"
    >
      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
      <ButtonStyle2>Shop Now at Amazon</ButtonStyle2>
    </ImageContainer>
  );
};

export default SliderContainer1;
