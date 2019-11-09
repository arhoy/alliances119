import React from 'react';

import Layout from '../../components/layouts/Layout';
import { Section } from '../../components/reusableStyles/sections/Sections';
import { H2, P } from '../../components/reusableStyles/typography/Typography';
import MailChimpForm1 from '../../components/mailchimp/templates/MailChimpForm1';
import {
  PopUpCard1,
  PopUpCard1Orange,
  PopUpCard1Purple,
} from '../../components/reusableStyles/cards/PopUpCard';

const mailChimpForms = () => {
  return (
    <>
      <Layout>
        <Section>
          <H2>Example Mail Chimp Form Templates</H2>
          <P>Mail Chimp for Popup, complete customizable to your liking</P>
        </Section>
        <MailChimpForm1 />

        <Section>
          <H2> Other Templates </H2>
          <PopUpCard1 />
          <PopUpCard1Orange />
          <PopUpCard1Purple />
        </Section>
      </Layout>
    </>
  );
};

export default mailChimpForms;
