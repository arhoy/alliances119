import React from 'react';
import styled from '@emotion/styled';
import ElectronicsLayout from '../components/layouts/ElectronicsLayout';

import renderRating from '../helpers/renderRating';

import {
  Section,
  Container1200,
} from '../components/reusableStyles/sections/Sections';

import { SnipCartButton1 } from '../components/reusableStyles/buttons/SnipCartAddToCartButton';
import {
  ProductContainer,
  ProductContentContainer,
  ProductImageContainer,
  ProductTitle,
  ProductRating,
  ProductRatingStars,
  ProductRatingDescription,
  StyledOldPrice,
  StyledDiscountPrice,
  StyledPrice,
  PriceContainer,
  StyledDiscountBadge,
  ProductContainerLHS,
} from '../components/products/ProductStyle1/ProductStyles';

import prependIf from '../helpers/prependIf';
import calculatePercentage from '../helpers/calculatePercentages';

import ProductBranding from '../components/products/ProductBranding';
import { TagContainer, Tag } from '../components/reusableStyles/tags/Tag';
import RRCWithZoom from '../components/reusableStyles/carousel/RRCWithZoom';

const CustomProductContainer = styled(ProductContainer)`
  grid-template-columns: 1fr 1fr;
`;

const CustomProductImageContainer = styled(ProductImageContainer)`
  @media (min-width: ${props => props.theme.screenSize.nineHundred}) {
    max-width: 55rem;
  }
`;

const AmazonProduct = ({ pageContext }) => {
  return (
    <ElectronicsLayout>
      <Section style={{ paddingTop: '4rem' }}>
        <Container1200>
          <CustomProductContainer>
            <ProductContainerLHS>
              <CustomProductImageContainer>
                <ProductTitle>{pageContext.name}</ProductTitle>
                <TagContainer style={{ textAlign: 'center' }}>
                  {pageContext.tags &&
                    pageContext.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                </TagContainer>
                <ProductRating>
                  <ProductRatingStars>
                    {renderRating(pageContext.rating)}
                  </ProductRatingStars>
                  <ProductRatingDescription>
                    {pageContext.rating} stars
                  </ProductRatingDescription>
                </ProductRating>

                {pageContext.otherImages ? (
                  <RRCWithZoom
                    images={prependIf(
                      pageContext.mainImage,
                      pageContext.otherImages,
                    )}
                  />
                ) : (
                  <RRCWithZoom images={[pageContext.image]} />
                )}

                {pageContext.discountPrice ? (
                  <PriceContainer>
                    <StyledOldPrice>{pageContext.priceValue}</StyledOldPrice>
                    <StyledDiscountPrice>
                      {pageContext.discountPrice}
                    </StyledDiscountPrice>
                    <StyledDiscountBadge>
                      {`Save ${calculatePercentage(
                        pageContext.discountPrice,
                        pageContext.priceValue,
                        0,
                      )}% `}
                    </StyledDiscountBadge>
                  </PriceContainer>
                ) : (
                  <PriceContainer>
                    <StyledPrice> Sale {pageContext.priceValue}</StyledPrice>
                  </PriceContainer>
                )}
                <SnipCartButton1
                  className={`snipcart-add-item`}
                  data-item-id={pageContext.name}
                  data-item-name={pageContext.name}
                  data-item-image={pageContext.image}
                  data-item-price={
                    pageContext.discountPrice
                      ? pageContext.discountPrice
                      : pageContext.priceValue
                  }
                  data-item-url={`/app/${pageContext.department}/${pageContext.slug}`}
                >
                  Add to Cart
                </SnipCartButton1>
              </CustomProductImageContainer>
            </ProductContainerLHS>

            <ProductContentContainer>
              <ProductBranding
                title="The Fashion Two Guarantee"
                benefits={[
                  '30 Day Money Back Guarantee',
                  'Free Shipping over $20',
                  '100% Customer Satisfaction Guaranteed',
                  '2 Day Flat Shipping Fee, fullfilled by UPS',
                  'Delivering to Europe, Canada, US, Asia and Africa',
                ]}
              />
            </ProductContentContainer>
          </CustomProductContainer>
        </Container1200>
      </Section>
    </ElectronicsLayout>
  );
};

export default AmazonProduct;
