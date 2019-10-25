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
} from '../components/products/Styles1/ProductStyles';
import renderProductRating from '../helpers/renderProductRating';

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

    mainImage: { fluid },
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
      <Section>
        <Container1200>
          <ProductContainer>
            <ProductImageContainer>
              <ProductTitle>{productName}</ProductTitle>
              <TagContainer style={{ textAlign: 'center' }}>
                {tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagContainer>
              <ProductRating>
                {renderProductRating(rating)} {rating} stars
              </ProductRating>
              <StyledImage fluid={fluid} alt={productName} />
              <SnipCartButton1
                className={`snipcart-add-item`}
                data-item-id={id}
                data-item-name={productName}
                data-item-image={fluid}
                data-item-price={discountPrice ? discountPrice : price}
                data-item-url={`/bags/${productSlug}`}
              >
                Add to Cart
              </SnipCartButton1>
            </ProductImageContainer>
            <ProductContentContainer>
              <main>{documentToReactComponents(json, options)}</main>
            </ProductContentContainer>
          </ProductContainer>
        </Container1200>
      </Section>
      <SectionGrey>
        <Container1200>Other Images</Container1200>
      </SectionGrey>
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
