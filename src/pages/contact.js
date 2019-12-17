import React from 'react';

import { SimpleNetlifyForm } from '../components/forms/SimpleNetlifyForm';
import MainLayout from '../components/layouts/MainLayout';

import { H1, P } from '../components/reusableStyles/typography/Typography.js';
import Hero from '../components/heros/Hero.js';
import { Section } from '../components/reusableStyles/sections/Sections.js';

const contact = () => {
  return (
    <MainLayout>
      <Section>
        <H1>Contact Page</H1>
        <P> You can reach me at (587) 772 5536 or fill out the form below</P>

        <SimpleNetlifyForm />
        <Hero />
      </Section>
    </MainLayout>
  );
};

export default contact;
