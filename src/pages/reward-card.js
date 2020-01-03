import React from 'react';

import Layout from '../components/layouts/Layout';

import { H1, P } from '../components/reusableStyles/typography/Typography.js';

import {
  Section,
  Container800,
} from '../components/reusableStyles/sections/Sections.js';
import { NetlifyFormV2 } from '../components/forms/NetlifyFormV2';
import { ButtonStyle1 } from '../components/reusableStyles/buttons/Button';

const RewardsCard = () => {
  return (
    <Layout>
      <Section>
        <Container800>
          <H1>Rewards Card</H1>
          <P>
            {' '}
            Sign Up Below to with your info to get{' '}
            <ButtonStyle1>10% OFF</ButtonStyle1> your next purchase{' '}
          </P>

          <NetlifyFormV2
            title={'E-Achatafrica.com Gives Back'}
            background="#EAEDED"
            color="black"
          />
        </Container800>
      </Section>
    </Layout>
  );
};

export default RewardsCard;
