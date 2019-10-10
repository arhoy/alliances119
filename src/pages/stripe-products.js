import React from 'react';
import Layout from '../components/layouts/Layout';
import Skus from '../components/stripe/Skus';
import { DefaultPageContainer } from '../components/layouts/PageContainers';
import { H1 } from '../components/reusableStyles/typography/Typography';

const StripeProducts = () => {
  return (
    <Layout>
      <DefaultPageContainer>
        <H1>LegoCommerce </H1>
        <p> Powered by Stripe</p>

        <Skus />
      </DefaultPageContainer>
    </Layout>
  );
};

export default StripeProducts;
