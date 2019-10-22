// Render any one of SkuCard, AmazonCard, etc

import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import styled from '@emotion/styled';
import AmazonCard from './AmazonCard';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

class SkusBags extends Component {
  state = {
    stripe: null,
  };

  componentDidMount() {
    const stripe = window.Stripe(process.env.GATSBY_STRIPE_PUBLIC_KEY);
    this.setState({ stripe });
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SkuForAllBags {
            products: allStripeProduct(filter: { name: { regex: "/bag/i" } }) {
              nodes {
                name
                skus {
                  url
                  data {
                    price
                    currency
                    image
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ products: { nodes } }) => {
          return (
            <Container>
              {nodes[0].skus.data.map(sku => (
                <AmazonCard key={sku.id} sku={sku} stripe={this.state.stripe} />
              ))}
            </Container>
          );
        }}
      />
    );
  }
}

export default SkusBags;
