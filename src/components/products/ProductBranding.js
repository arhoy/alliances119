import React from 'react';
import styled from '@emotion/styled';
import { FaCheck } from 'react-icons/fa';

const ProductBrandingContainer = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  padding: 2rem 4rem;
  border-top-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
`;

const ProductBranding = ({ title, ...benefits }) => {
  return (
    <ProductBrandingContainer>
      <h3> {title} </h3>
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
