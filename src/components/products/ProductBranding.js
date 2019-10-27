import React from 'react';
import styled from '@emotion/styled';
import { FaCheck } from 'react-icons/fa';
import { H2 } from '../reusableStyles/typography/Typography';

const ProductBrandingContainer = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  padding: 2rem 4rem;
  border-top-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
`;

const ProductBranding = ({ title, ...benefits }) => {
  return (
    <ProductBrandingContainer>
      <H2> {title} </H2>
      {benefits &&
        benefits.benefits.map((benefit, i) => (
          <div key={i}>
            <FaCheck /> <span> {benefit} </span>
          </div>
        ))}
    </ProductBrandingContainer>
  );
};

export default ProductBranding;
