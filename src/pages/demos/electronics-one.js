import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import BackgroundImage from 'gatsby-background-image';
import { FaCanadianMapleLeaf } from 'react-icons/fa';

import ElectronicsLayout from '../../components/layouts/ElectronicsLayout';

import { H1 } from '../../components/reusableStyles/typography/Typography';
import { ButtonStyle2Large } from '../../components/reusableStyles/buttons/Button';
import { Section } from '../../components/reusableStyles/sections/Sections';

const HerosContainer = styled.div`
  display: flex;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
  }
`;

const FullNarrowBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  min-height: 25vh;
  max-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomBannerContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
  }
  h4 {
    border-radius: 1rem;
    color: ${props => props.theme.colors.white};
    font-size: 1.8rem;
    background: ${props => props.theme.colors.primaryDark};
    padding: 1rem;
    margin: 1rem;
    font-weight: 500;
    text-align: center;
    &:hover {
      background: ${props => props.theme.colors.red};
    }
  }
`;

const HeroBackgroundImage = styled.div`
  width: 100vw;
  height: 92vh;
  background-size: cover;
  background-position: top;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    ${props => props.theme.colors.primaryLight},
    ${props => props.theme.colors.primaryDark}
  );
`;

const StyledH1 = styled(H1)`
  color: ${props => props.theme.colors.white};

  text-align: center;
  font-size: 6rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    font-size: 4.1rem;
  }
`;

const ButtonStyle2LargeCustom = styled(ButtonStyle2Large)`
  background: ${props => props.theme.colors.primaryDark};
  transition: all 0.3s ease;
  &: hover {
    background: ${props => props.theme.colors.red};
  }
`;

const StyledImage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  color: ${props => props.theme.colors.red};
`;

const StyledFaCanadianMapleLeaf = styled(FaCanadianMapleLeaf)`
  font-size: 5rem;
  &:before {
    content: '|';
    top: 0;
    left: 0;
  }
`;

export const query = graphql`
  {
    picture1: file(relativePath: { eq: "blur.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const electronicsOne = ({ data }) => {
  const [results, setResults] = useState([]); // set results to empty array

  try {
    useEffect(() => {
      const fetchData = async () => {
        const results = await axios(
          `https://jsonplaceholder.typicode.com/albums`,
        );

        // setstate of results to results array.
        setResults(results.data);
      };

      fetchData();
    }, []); // only run on componentDidMount and componentUnmount and query state change
  } catch (error) {
    console.error(error);
  }

  return (
    <ElectronicsLayout>
      <HerosContainer>
        <HeroBackgroundImage>
          <StyledH1>Canada's Choice Electronic Store</StyledH1>
          <StyledImage>
            <StyledFaCanadianMapleLeaf />
          </StyledImage>

          <ButtonStyle2LargeCustom>Shop Now</ButtonStyle2LargeCustom>
        </HeroBackgroundImage>
      </HerosContainer>
      <Section>
        <FullNarrowBackgroundImage fluid={data.picture1.childImageSharp.fluid}>
          <CustomBannerContainer>
            <h4>Free Shipping</h4>
            <h4>Low Prices</h4>
            <h4>Amazing Customer Support</h4>
            <h4>Made In Canada</h4>
          </CustomBannerContainer>
        </FullNarrowBackgroundImage>
      </Section>

      <div>
        {results.length > 0 &&
          results.map(result => <div key={result.id}>{result.title}</div>)}
      </div>
    </ElectronicsLayout>
  );
};

export default electronicsOne;
