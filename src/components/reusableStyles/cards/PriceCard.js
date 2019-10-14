import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 30rem;
  box-shadow: 0 0 20px ${props => props.theme.colors.primaryTransparent};
  text-align: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 90%;
  }
`;

const Top = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  padding: 1rem 0;
  background: ${props => props.theme.colors.primaryTransparent};
`;

const PriceContainer = styled.div`
  border-bottom: 1px solid black;
`;

const Price = styled.h2`
  font-size: 4rem;
  text-align: center;
`;

const Span = styled.span`
  font-size: 1.4rem;
  margin-left: -1rem;
`;

const Li = styled.li`
  list-style: none;
  padding: 1rem;
  font-weight: bolder;
`;

const ContentContainer = styled.div``;

const Card = ({
  title,
  price,
  priceText,
  features,
  backgroundColor,
  topBarColor,
  topBarBackgroundColor,
  color,
}) => {
  return (
    <Container style={{ background: `${backgroundColor}`, color }}>
      <Top
        style={{ background: `${topBarBackgroundColor}`, color: topBarColor }}
      >
        {title}
      </Top>
      <PriceContainer>
        <Price>
          ${price} <Span>{priceText}</Span>
        </Price>
      </PriceContainer>
      <ContentContainer>
        {features.map((feature, i) => (
          <Li key={i}>{feature}</Li>
        ))}
      </ContentContainer>
    </Container>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.array.isRequired,
  backgroundColor: PropTypes.string,
};

export default Card;
