import React from 'react';

import { Highlight } from 'react-instantsearch-dom';
import NoStyleLink from '../Links/NoStyleLink';

const ProductSearchPreview = ({ hit }) => {
  console.log('hit is ', hit);
  if (hit) {
    return (
      <>
        <h4>{hit.productName}</h4>
      </>
    );
  } else {
    return null;
  }
};

export default ProductSearchPreview;
