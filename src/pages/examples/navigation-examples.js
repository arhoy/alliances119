import React from 'react';
import NavFashion from '../../components/navigation/NavFashion1';
import NavFashion2 from '../../components/navigation/NavFashion2';
import Layout from '../../components/layouts/Layout';
import { H2, P } from '../../components/reusableStyles/typography/Typography';
import {
  Section,
  Container800,
} from '../../components/reusableStyles/sections/Sections';
import { Margin4V } from '../../components/reusableStyles/modular/modularStyles';

const navigationExamples = () => {
  return (
    <Layout>
      <Section style={{ padding: '1rem' }}>
        <Container800>
          <H2> Sample Navigations </H2>
          <P>Some sample navbars for your next website</P>
        </Container800>
      </Section>

      <NavFashion />
      <Margin4V />
      <NavFashion2 />
    </Layout>
  );
};

export default navigationExamples;
