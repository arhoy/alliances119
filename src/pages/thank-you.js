import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';

import styled from '@emotion/styled';
import {
  P,
  H2Centered,
} from '../components/reusableStyles/typography/Typography';
import {
  Section,
  Container1200,
} from '../components/reusableStyles/sections/Sections';

const CustomP = styled(P)`
  text-align: center;
  font-size: 2rem;
`;

const Thankyou = () => {
  return (
    <Layout>
      <Section>
        <Container1200>
          <SEO
            title="Thank you form"
            description="This is the thank you page."
          />
          <H2Centered>Your form submission was recieved. Thank you!</H2Centered>
          <CustomP>We will contact you shortly.</CustomP>
        </Container1200>
      </Section>
    </Layout>
  );
};

export default Thankyou;
