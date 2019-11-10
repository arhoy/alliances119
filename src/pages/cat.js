import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import getAllBagsHook from '../hooks/contentful/products/bags/getAllBagsHook';
import Image from 'gatsby-image';

const StyledImage = styled(Image)`
  width: 20rem;
  height: 20rem;
`;

const cat = () => {
  const products = getAllBagsHook();

  return (
    <div>
      <h2> Home Page</h2>
      {products.map(product => (
        <Link key={product.productSlug} to={`/products/${product.productSlug}`}>
          <h4>{product.productName}</h4>
          <div> $ {product.price} USD</div>
          <div>
            <StyledImage fluid={product.mainImage.fluid} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default cat;
