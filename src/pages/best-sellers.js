import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';

import { H1 } from '../components/reusableStyles/typography/Typography';
import {
  Section,
  Container1200,
} from '../components/reusableStyles/sections/Sections';
import RenderAmazonProducts from '../hooks/apiHooks/RenderAmazonProducts';

const BestSellers = () => {
  return (
    <Layout>
      <Section>
        <Container1200>
          <SEO
            title="Amazon Best Sellers"
            description="This is the best sellers page"
          />
          <H1>Best Sellers from Amazon</H1>
          <RenderAmazonProducts
            keyword={'best sellers'}
            title={'Best Sellers'}
          />
        </Container1200>
      </Section>
    </Layout>
  );
};

export default BestSellers;
