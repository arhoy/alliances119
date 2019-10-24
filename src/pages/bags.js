import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../hooks/SEO';
import Layout from '../components/layouts/Layout';
import Bag from '../components/ecommerceProducts/bags/Bag';
import { ContainerCenterFlex } from '../components/reusableStyles/sections/Sections';

export const getBags = graphql`
  query {
    allBags: allContentfulFashionTwoBags {
      nodes {
        id
        productName
        productSlug
        shortDescription
        price
        discountPrice
        tags
        rating
        displayBadge
        mainImage {
          fluid(quality: 90, maxWidth: 300) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;

const bags = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Fashion Two Articles"
        description="Please see all the articles below related to Fashion Two"
      />
      <ContainerCenterFlex>
        {data.allBags.nodes.map(item => (
          <Bag key={item.id} bag={item} />
        ))}
      </ContainerCenterFlex>
    </Layout>
  );
};

export default bags;
