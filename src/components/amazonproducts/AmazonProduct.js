import React from 'react';
import NumberFormat from 'react-number-format';
import {
  StyledLinkContainer,
  ImageContainer,
  DiscountBadge,
  DisplayBadgeContainer,
  StyledImage2,
  StyledOldPrice,
  StyledPrice,
  StyledDiscountPrice,
  PriceContainer,
  RatingContainer,
} from './AmazonProductsStyling';

import renderRating from '../../helpers/renderRating';
import calculatePercentage from '../../helpers/calculatePercentages';

const AmazonProduct = ({ product, department }) => {
  if (!product) {
    return <div> No products found in this category</div>;
  }
  return (
    <StyledLinkContainer to={`/app/${department}/${product.slug}`}>
      <DiscountBadge>
        {product.discountPrice
          ? `Save ${calculatePercentage(
              product.discountPrice,
              product.priceValue,
              0,
            )}% `
          : 'NEW ITEM'}
      </DiscountBadge>

      <ImageContainer>
        <StyledImage2 src={product.image} alt={product.name} />

        <h4>
          {product.name.length <= 65
            ? product.name
            : `${product.name.substring(0, 65)}...`}
        </h4>
        <DisplayBadgeContainer>
          {product.displayBadge &&
            product.displayBadge.map(badge => <span key={badge}>{badge}</span>)}
        </DisplayBadgeContainer>
      </ImageContainer>

      <RatingContainer>{renderRating(product.rating)}</RatingContainer>
      {product.discountPrice ? (
        <PriceContainer>
          <StyledOldPrice>
            <NumberFormat
              value={product.priceValue}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </StyledOldPrice>
          <StyledDiscountPrice>
            <NumberFormat
              value={product.discountPrice}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </StyledDiscountPrice>
        </PriceContainer>
      ) : (
        <PriceContainer>
          <StyledPrice>
            <NumberFormat
              value={product.priceValue}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </StyledPrice>
        </PriceContainer>
      )}
    </StyledLinkContainer>
  );
};
export default AmazonProduct;
