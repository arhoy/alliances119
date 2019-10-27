import React from 'react';
import {
  ProductPageTopSection,
  Container800,
} from '../reusableStyles/sections/Sections';
import { ProductPageH1 } from '../reusableStyles/typography/Typography';

const ProductPageHeader = ({ title, description }) => {
  return (
    <ProductPageTopSection>
      <Container800>
        <ProductPageH1> {title}</ProductPageH1>
        <p>{description}</p>
      </Container800>
    </ProductPageTopSection>
  );
};

export default ProductPageHeader;
