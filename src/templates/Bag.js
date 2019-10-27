import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import { P, Bold } from '../components/reusableStyles/typography/Typography';
import { TagContainer, Tag } from '../components/reusableStyles/tags/Tag';
import {
  Section,
  Container1200,
  SectionGrey,
} from '../components/reusableStyles/sections/Sections';
import { SnipCartButton1 } from '../components/reusableStyles/buttons/SnipCartAddToCartButton';
import {
  ProductContainer,
  ProductContentContainer,
  ProductImageContainer,
  StyledImage,
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
} from '../components/products/Styles1/ProductStyles';
import renderProductRating from '../helpers/renderProductRating';
import calculatePercentage from '../helpers/calculatePercentages';

import RRC from '../components/reusableStyles/carousel/RRC';
import prependIf from '../helpers/prependIf';

// run template query
export const query = graphql`
  query getFullBag($slug: String!) {
    item: contentfulFashionTwoBags(productSlug: { eq: $slug }) {
      id
      productSlug
      productName
      shortDescription
      description {
        json
      }

      mainImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      otherImages {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      price
      discountPrice
      tags
      rating
      color
    }
  }
`;

const RTFBold = ({ children }) => <Bold>{children}</Bold>;
const Text = ({ children }) => <P>{children}</P>;

const BagTemplate = ({ data: { item } }) => {
  const {
    id,
    productName,
    price,
    discountPrice,
    productSlug,
    shortDescription: { description },
    description: { json },

    mainImage,
    otherImages,

    tags,
    rating,
  } = item;

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <RTFBold>{text}</RTFBold>,
    },

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  };

  return (
    <Layout full={true}>
      <SEO title={productName} description={description} />
      <Section style={{ paddingTop: '1rem' }}>
        <Container1200>
          <ProductContainer>
            <ProductContainerLHS>
              <ProductImageContainer>
                <ProductTitle>{productName}</ProductTitle>
                <TagContainer style={{ textAlign: 'center' }}>
                  {tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagContainer>
                <ProductRating>
                  <ProductRatingStars>
                    {renderProductRating(rating)}
                  </ProductRatingStars>
                  <ProductRatingDescription>
                    {rating} stars
                  </ProductRatingDescription>
                </ProductRating>

                {otherImages ? (
                  <RRC images={prependIf(mainImage, otherImages)} />
                ) : (
                  <StyledImage fluid={mainImage.fluid} alt={productName} />
                )}

                {discountPrice ? (
                  <PriceContainer>
                    <StyledOldPrice>${price}</StyledOldPrice>
                    <StyledDiscountPrice>${discountPrice}</StyledDiscountPrice>
                    <StyledDiscountBadge>
                      {`Save ${calculatePercentage(discountPrice, price, 0)}% `}
                    </StyledDiscountBadge>
                  </PriceContainer>
                ) : (
                  <PriceContainer>
                    <StyledPrice> Sale ${price}</StyledPrice>
                  </PriceContainer>
                )}
                <SnipCartButton1
                  className={`snipcart-add-item`}
                  data-item-id={id}
                  data-item-name={productName}
                  data-item-image={mainImage.fluid.src}
                  data-item-price={discountPrice ? discountPrice : price}
                  data-item-url={`/bags/${productSlug}`}
                >
                  Add to Cart
                </SnipCartButton1>
              </ProductImageContainer>
            </ProductContainerLHS>

            <ProductContentContainer>
              <main>{documentToReactComponents(json, options)}</main>
              <div>
                <h2> The Fasion Two Guarantee</h2>
                <p>Free Shipping on orders over $20</p>
                <p> 30 Return Policy</p>
              </div>
            </ProductContentContainer>
          </ProductContainer>
        </Container1200>
      </Section>

      <Section>
        <Container1200>Customer Reviews</Container1200>
      </Section>
      <SectionGrey>
        <Container1200>Other Product you may like</Container1200>
      </SectionGrey>
    </Layout>
  );
};

export default BagTemplate;
