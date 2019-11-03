import React from 'react';

import SEO from '../hooks/SEO';
import Layout from '../components/layouts/Layout';

import getAllBags from '../hooks/contentful/products/bags/getAllBagsHook';
import Products from '../components/products/Products';
import ProductPageHeader from '../components/products/ProductPageHeader';
import { ProductLayout1 } from '../components/products/ProductContainerStyles/ProductContainerStyle';

const bags = () => {
  const title = 'Fashion Two Monnet Bags';
  const description = `We got lots of Monnet Bags, please see our amazing deals on colorful Monnet handbags`;
  return (
    <Layout>
      <SEO title={title} description={description} />
      <ProductPageHeader title={title} description={description} />
      <ProductLayout1>
        <Products products={getAllBags()} productType="products" />
      </ProductLayout1>
    </Layout>
  );
};

export default bags;
