import React from 'react';
import Wave from '../components/Wave.js';
import SimpleNetlifyForm from '../components/forms/SimpleNetlifyForm';
import Layout from '../components/layouts/Layout';
import { DefaultPageContainer } from '../components/layouts/PageContainers.js';
import { H1 } from '../components/reusableStyles/typography/Typography.js';
import Hero from '../components/heros/Hero.js';

const contact = () => {
  return (
    <Layout>
      <DefaultPageContainer>
        <H1>Contact Page</H1>
        <Wave />
        Alternatively, you can reach me at alex@cravejs.com or fill out the form
        below
        <SimpleNetlifyForm />
        <Hero />
      </DefaultPageContainer>
    </Layout>
  );
};

export default contact;
