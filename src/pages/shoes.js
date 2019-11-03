import React from 'react';

import SEO from '../hooks/SEO';
import Layout from '../components/layouts/Layout';

import getAllShoes from '../hooks/contentful/products/shoes/getAllShoesHook';
import Products from '../components/products/Products';

import ProductPageHeader from '../components/products/ProductPageHeader';
import { ProductLayout1 } from '../components/products/ProductContainerStyles/ProductContainerStyle';

const shoes = () => {
  const title = 'Fashion Two Shoes';
  const description =
    'We got lots of Monnet Shoes, please see our amazing deals on Shoes';
  return (
    <Layout>
      <SEO title={title} description={description} />
      <ProductPageHeader title={title} description={description} />

      <ProductLayout1>
        <Products products={getAllShoes()} productType="products" />
      </ProductLayout1>
    </Layout>
  );
};

export default shoes;
