import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import renderRating from '../../helpers/renderRating';
import calculatePercentage from '../../helpers/calculatePercentages';

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
  font-size: 2.2rem;
  font-weight: bold;
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

const ContentfulProduct = ({ product, productType }) => {
  console.log(product.displayBadge);
  return (
    <StyledLinkContainer to={`/${productType}/${product.productSlug}`}>
      <DiscountBadge>
        {product.discountPrice
          ? `Save ${calculatePercentage(
              product.discountPrice,
              product.price,
              0,
            )}% `
          : 'NEW ITEM'}
      </DiscountBadge>

      <ImageContainer>
        <StyledImage fluid={product.mainImage.fluid} />

        <h4>{product.productName}</h4>
        <DisplayBadgeContainer>
          {product.displayBadge &&
            product.displayBadge.map(badge => <span key={badge}>{badge}</span>)}
        </DisplayBadgeContainer>
      </ImageContainer>

      <RatingContainer>{renderRating(product.rating)}</RatingContainer>
      {product.discountPrice ? (
        <PriceContainer>
          <StyledOldPrice>${product.price}</StyledOldPrice>
          <StyledDiscountPrice>${product.discountPrice}</StyledDiscountPrice>
        </PriceContainer>
      ) : (
        <PriceContainer>
          <StyledPrice>${product.price}</StyledPrice>
        </PriceContainer>
      )}
    </StyledLinkContainer>
  );
};

export default ContentfulProduct;
