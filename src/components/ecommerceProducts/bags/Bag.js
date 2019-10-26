import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import renderProductRating from '../../../helpers/renderProductRating';
import calculatePercentage from '../../../helpers/calculatePercentages';

const StyledLinkContainer = styled(Link)`
  position: relative;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => props.theme.colors.black};

  margin: 3rem;
  background: ${props => props.theme.colors.lightgrey};
  border-radius: 1rem;

  &:hover {
    background: ${props => props.theme.colors.primaryTransparent};
  }

  width: 28rem;
  height: 25rem;
`;

const ImageContainer = styled.div`
  text-align: center;
  padding: 0 2rem;
`;

const DiscountBadge = styled.span`
  position: absolute;
  padding: 2px 4px;

  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  font-size: 1.2rem;

  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`;

const DisplayBadgeContainer = styled.div`
  font-size: 1.4rem;
  & > * {
    margin-right: 4px;
  }
`;

const StyledImage = styled(Image)`
  width: 50%;
  object-fit: cover;
  margin: 0 auto;
`;

const StyledOldPrice = styled.span`
  color: ${props => props.theme.colors.darkgrey};
  text-decoration: line-through;
`;

const StyledPrice = styled.span`
  color: ${props => props.theme.colors.black};
  font-size: 1.9rem;
`;

const StyledDiscountPrice = styled.span`
  font-size: 2.2rem;
  font-weight: bold;
  margin-left: 6px;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RatingContainer = styled.div`
  text-align: center;
`;

const Bag = ({ bag: item }) => {
  return (
    <StyledLinkContainer to={`/bags/${item.productSlug}`}>
      <DiscountBadge>
        {item.discountPrice
          ? `Save ${calculatePercentage(item.discountPrice, item.price, 0)}% `
          : 'NEW ITEM'}
      </DiscountBadge>

      <ImageContainer>
        <StyledImage fluid={item.mainImage.fluid} />

        <h4>{item.productName}</h4>
        <DisplayBadgeContainer>
          {item.displayBadge.map(badge => (
            <span key={badge}>{badge}</span>
          ))}
        </DisplayBadgeContainer>
      </ImageContainer>

      <RatingContainer>{renderProductRating(item.rating)}</RatingContainer>
      {item.discountPrice ? (
        <PriceContainer>
          <StyledOldPrice>${item.price}</StyledOldPrice>
          <StyledDiscountPrice>${item.discountPrice}</StyledDiscountPrice>
        </PriceContainer>
      ) : (
        <PriceContainer>
          <StyledPrice>{item.price}</StyledPrice>
        </PriceContainer>
      )}
    </StyledLinkContainer>
  );
};

export default Bag;
