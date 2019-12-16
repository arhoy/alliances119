import React, { useState } from 'react';
import AmazonProduct from './AmazonProduct';
import { ProductLayout1 } from '../products/ProductContainerStyles/ProductContainerStyle';
import { H2Centered } from '../reusableStyles/typography/Typography';
import { ViewMoreContainer1 } from './AmazonProductsStyling';
import { ButtonStyle2Large } from '../reusableStyles/buttons/Button';
import { getAmazonProducts } from '../../hooks/apiHooks/amazonproducts';

const AmazonProducts = ({ products, pagination, title }) => {
  const [items, setItems] = useState(products);
  const [limit, setLimit] = useState(25);

  const setLimitHandler = async () => {
    setLimit(prevLimit => prevLimit + 25);

    const results = await getAmazonProducts(1, limit + 25);
    setItems(results.data);
  };

  return (
    <>
      <H2Centered>{title}</H2Centered>

      {!items && (
        <ProductLayout1>
          {products &&
            products.length > 0 &&
            products.map(item => (
              <AmazonProduct
                key={item._id}
                product={item}
                department="amazonproducts"
              />
            ))}
        </ProductLayout1>
      )}

      <ProductLayout1>
        {items &&
          items.length > 0 &&
          items.map(item => (
            <AmazonProduct
              key={item._id}
              product={item}
              department="amazonproducts"
            />
          ))}
      </ProductLayout1>
      <ViewMoreContainer1>
        <ButtonStyle2Large onClick={setLimitHandler}>
          View More{' '}
        </ButtonStyle2Large>
      </ViewMoreContainer1>
    </>
  );
};

export default AmazonProducts;
