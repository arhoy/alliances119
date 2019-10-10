import React from 'react';
import Layout from '../components/layouts/Layout';
import Skus from '../components/stripe/Skus';
import { DefaultPageContainer } from '../components/layouts/PageContainers';

const StripeProducts = () => {
  return (
    <Layout>
      <DefaultPageContainer>
        <h1>Sample Ecommerce Page powered by Stripe</h1>
        <Skus />
      </DefaultPageContainer>
    </Layout>
  );
};

export default StripeProducts;
