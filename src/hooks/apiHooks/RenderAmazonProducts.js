import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { ProductLayout1 } from '../../components/products/ProductContainerStyles/ProductContainerStyle';
import AmazonProductAPI from '../../components/amazonproducts/AmazonProductAPI';
import {
  H2Centered,
  Bold,
} from '../../components/reusableStyles/typography/Typography';
import { Section } from '../../components/reusableStyles/sections/Sections';
import { getAmazonProductAPI } from './amazonproducts';

const CustomH2 = styled(H2Centered)`
  font-size: 4.2rem;
  color: ${props => props.theme.colors.primary};
  text-shadow: -3px 3px 0 rgba(10, 14, 39, 0.1);
  text-transform: uppercase;
`;

const CustomSection = styled(Section)`
  background: ${props => props.background || props.theme.colors.white};
`;
const RenderAmazonProducts = ({ keyword, title }) => {
  const [results, setResults] = useState({}); // set results to empty array

  try {
    useEffect(() => {
      const fetchData = async () => {
        const results = await getAmazonProductAPI(keyword);

        setResults(results);
      };
      fetchData();
    }, [keyword]); // only run on componentDidMount and componentUnmount and query state change
  } catch (error) {
    console.error(error);
  }
  if (results.data) {
    return (
      <CustomSection>
        <CustomH2>
          <Bold>{title}</Bold>
        </CustomH2>
        <ProductLayout1>
          {results.data.length > 0 &&
            results.data.map(result => (
              <AmazonProductAPI key={result.ASIN} item={result} />
            ))}
        </ProductLayout1>
      </CustomSection>
    );
  } else {
    return <></>;
  }
};
export default RenderAmazonProducts;
