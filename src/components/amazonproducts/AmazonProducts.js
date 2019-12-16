import React from 'react';
import AmazonProduct from './AmazonProduct';
import { ProductLayout1 } from '../products/ProductContainerStyles/ProductContainerStyle';
import { H2Centered } from '../reusableStyles/typography/Typography';

const AmazonProducts = ({ products, pagination, title }) => {
  return (
    <>
      <H2Centered>{title}</H2Centered>
      <ProductLayout1>
        <pre>{JSON.stringify(pagination, null, 2)}</pre>
        {products &&
          products.length > 0 &&
          products.map(result => (
            <AmazonProduct
              key={result._id}
              product={result}
              department="electronics"
            />
          ))}
      </ProductLayout1>
      <div>
        <div>{pagination && pagination.prev && pagination.prev.page}</div>
        <div>{pagination && pagination.next && pagination.next.page}</div>
      </div>
    </>
  );
};

export default AmazonProducts;
