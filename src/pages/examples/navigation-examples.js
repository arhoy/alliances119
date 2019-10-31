import React from 'react';
import NavFashion from '../../components/navigation/NavFashion1';
import NavFashion2 from '../../components/navigation/NavFashion2';
import Layout from '../../components/layouts/Layout';
import { H2, P } from '../../components/reusableStyles/typography/Typography';
import { Section } from '../../components/reusableStyles/sections/Sections';

import SEO from '../../hooks/SEO';
import ProductPageHeader from '../../components/products/ProductPageHeader';
import NavFashion3 from '../../components/navigation/NavFashion3';

const navigationExamples = () => {
  return (
    <Layout>
      <SEO
        title="Gatsby Navigation Examples"
        description="Gatsby Navigation Bar Examples for Aquasar Fashion Two"
      />
      <Section style={{ padding: '1rem 4rem' }}>
        <ProductPageHeader
          title={`Navbars`}
          description={`Some sample Navbars for your next website`}
        />
        <P></P>
      </Section>

      <Section>
        <H2> Simple Navigation </H2>
        <NavFashion />
      </Section>
      <Section>
        <H2> Navigation with Simple Mega Menu </H2>
        <NavFashion2 />
      </Section>
      <Section>
        <H2> Navigation + Mega Menu + Pictures </H2>
        <NavFashion3 />
      </Section>
    </Layout>
  );
};

export default navigationExamples;
