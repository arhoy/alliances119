import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layouts/Layout';
import Skus from '../components/stripe/hooks/Skus';

import { H1 } from '../components/reusableStyles/typography/Typography';
import { Section } from '../components/reusableStyles/sections/Sections';
import SkusBags from '../components/stripe/hooks/SkusBags';

const CustomSection = styled(Section)`
  padding: 4rem 1rem;
  text-align: center;
`;

const StripeProducts = () => {
  return (
    <Layout>
      <CustomSection>
        <H1>LegoCommerce </H1>
        <p> Powered by Stripe</p>

        <Skus />
        <SkusBags />
      </CustomSection>
    </Layout>
  );
};

export default StripeProducts;
