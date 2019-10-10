import React from 'react';
import Wave from '../components/Wave.js';
import SimpleNetlifyForm from '../components/forms/SimpleNetlifyForm';
import Layout from '../components/layouts/Layout';
import { DefaultPageContainer } from '../components/layouts/PageContainers.js';

const contact = () => {
  return (
    <Layout>
      <DefaultPageContainer>
        <h1> Contact Page </h1>
        <Wave />
        Alternatively, you can reach me at alex@cravejs.com or fill out the form
        below
        <SimpleNetlifyForm />
      </DefaultPageContainer>
    </Layout>
  );
};

export default contact;
