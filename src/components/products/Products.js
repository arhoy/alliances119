import React from 'react';

import ContentfulProduct from '../ecommerceProducts/ContentfulProduct';

const Products = ({ products, productType }) =>
  products.map(product => (
    <ContentfulProduct
      key={product.id}
      product={product}
      productType={productType}
    />
  ));

export default Products;
