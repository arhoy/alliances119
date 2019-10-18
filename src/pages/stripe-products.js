import React from 'react';
import Layout from '../components/layouts/Layout';
import Skus from '../components/stripe/Skus';

import { H1 } from '../components/reusableStyles/typography/Typography';
import { Section } from '../components/reusableStyles/sections/Sections';

const StripeProducts = () => {
  return (
    <Layout>
      <Section>
        <H1>LegoCommerce </H1>
        <p> Powered by Stripe</p>

        <Skus />
      </Section>
    </Layout>
  );
};

export default StripeProducts;
