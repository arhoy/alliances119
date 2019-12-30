import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';

import { H1 } from '../components/reusableStyles/typography/Typography';
import {
  Section,
  Container1200,
} from '../components/reusableStyles/sections/Sections';
import RenderAmazonProducts from '../hooks/apiHooks/RenderAmazonProducts';

const NewReleases = () => {
  return (
    <Layout>
      <Section>
        <Container1200>
          <SEO title="New Releases" description="Amazon New Releases" />
          <H1>New Releases from Amazon</H1>
          <RenderAmazonProducts
            keyword={'new releases'}
            title={'Latest Products'}
          />
        </Container1200>
      </Section>
    </Layout>
  );
};

export default NewReleases;
