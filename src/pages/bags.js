import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../hooks/SEO';
import Layout from '../components/layouts/Layout';
import Bag from '../components/ecommerceProducts/bags/Bag';

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
        mainImage {
          fluid {
            src
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
      {data.allBags.nodes.map(item => (
        <Bag key={item.id} bag={item} />
      ))}
    </Layout>
  );
};

export default bags;
