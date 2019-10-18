import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import styled from '@emotion/styled';
import { H1 } from '../components/reusableStyles/typography/Typography';

const StyledH1 = styled(H1)`
  text-align: center;
`;
const NotFound = () => {
  return (
    <Layout>
      <SEO
        title="NOT FOUND PAGE"
        description="The page you are looking for has returned 404 not found"
      />
      <StyledH1>
        The page you are looking for may have moved or does not exist!
      </StyledH1>
    </Layout>
  );
};

export default NotFound;
