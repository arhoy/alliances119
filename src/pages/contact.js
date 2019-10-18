import React from 'react';

import { SimpleNetlifyForm } from '../components/forms/SimpleNetlifyForm';
import Layout from '../components/layouts/Layout';

import { H1 } from '../components/reusableStyles/typography/Typography.js';
import Hero from '../components/heros/Hero.js';
import { Section } from '../components/reusableStyles/sections/Sections.js';

const contact = () => {
  return (
    <Layout>
      <Section>
        <H1>Contact Page</H1>
        You can reach me at (587) 501 7726 or fill out the form below
        <SimpleNetlifyForm />
        <Hero />
      </Section>
    </Layout>
  );
};

export default contact;
