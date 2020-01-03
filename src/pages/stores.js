import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import Layout from '../components/layouts/Layout';

import { ProductLayout1 } from '../components/products/ProductContainerStyles/ProductContainerStyle';
import {
  H1,
  PCenter,
} from '../components/reusableStyles/typography/Typography';
import { Section } from '../components/reusableStyles/sections/Sections';
import Store from '../components/stores/Store';
import storeData from '../constants/storeData';

const CustomP = styled(PCenter)`
  font-size: 2.3rem;
`;

const StorePage = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    setStores(storeData);
  }, [stores]);
  return (
    <Layout>
      <Section>
        <H1>OUR STORES</H1>
        <CustomP> Brands You Can Shop, Checkout using our Warehouse </CustomP>

        <ProductLayout1>
          {stores &&
            stores.map(store => <Store url={store.url} name={store.name} />)}
        </ProductLayout1>
      </Section>
    </Layout>
  );
};

export default StorePage;
