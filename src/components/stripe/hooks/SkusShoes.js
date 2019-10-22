// Render any one of SkuCard, AmazonCard, etc

import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import AmazonCard from '../components/AmazonCard';

class SkusShoes extends Component {
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
          query SkuForAllWomenShoes {
            products: allStripeProduct(
              filter: { name: { regex: "/women shoes/i" } }
            ) {
              nodes {
                name
                skus {
                  url
                  data {
                    id
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
        render={({ products: { nodes } }) =>
          nodes.map(node => {
            return node.skus.data.map(sku => (
              <AmazonCard key={sku.id} sku={sku} stripe={this.state.stripe} />
            ));
          })
        }
      />
    );
  }
}

export default SkusShoes;
