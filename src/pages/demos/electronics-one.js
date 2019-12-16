import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import * as Scroll from 'react-scroll';

import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { FaCanadianMapleLeaf } from 'react-icons/fa';

import { getAmazonProducts } from '../../hooks/apiHooks/amazonproducts';
import ElectronicsLayout from '../../components/layouts/ElectronicsLayout';

import {
  H1,
  H2Centered,
} from '../../components/reusableStyles/typography/Typography';
import { ButtonStyle2Large } from '../../components/reusableStyles/buttons/Button';
import {
  Section,
  Container1200,
} from '../../components/reusableStyles/sections/Sections';
import AmazonProducts from '../../components/amazonproducts/AmazonProducts';
import { SimpleNetlifyForm } from '../../components/forms/SimpleNetlifyForm';
import CatchyBanner from '../../components/reusableStyles/banner/CatchyBanner';
import NoStyleLink from '../../components/Links/NoStyleLink';

const HerosContainer = styled.div`
  display: flex;
  padding: 1rem 0;

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

  font-size: 6rem;
  color: ${props => props.theme.colors.red};

  &:before,
  &:after {
    content: '|';
    top: 0;
    left: 0;
    padding: 0 1rem;
  }
`;

const StyledFaCanadianMapleLeaf = styled(FaCanadianMapleLeaf)`
  font-size: 7rem;
`;

const HeroBackgroundImageThird = styled(BackgroundImage)`
  width: 33.33vw;
  min-height: 30vh;
  background-size: cover;
  background-position: center;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease-in;
  &:hover {
    background: ${props => props.theme.colors.blackTransparent};
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 100%;
    min-height: 30vh;
`;

const HeroBackgroundImageHalf = styled(BackgroundImage)`
  width: 50vw;
  min-height: 30vh;
  background-size: cover;
  background-position: center;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease-in;
  &:hover {
    background: ${props => props.theme.colors.blackTransparent};
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 100%;
    min-height: 30vh;
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

    picture4: file(relativePath: { eq: "watch.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    picture5: file(relativePath: { eq: "tv.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    picture6: file(relativePath: { eq: "apple-iphone-1.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    heroCarousel: allFile(
      filter: { relativePath: { regex: "/carouselArray1/" } }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
`;

const electronicsOne = ({ data }) => {
  const [results, setResults] = useState({}); // set results to empty array

  try {
    useEffect(() => {
      const fetchData = async () => {
        const results = await getAmazonProducts();

        setResults(results);
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

          <Scroll.Link to="inventory" smooth={true} duration={500} offset={-30}>
            <ButtonStyle2LargeCustom>Shop Now</ButtonStyle2LargeCustom>
          </Scroll.Link>
        </HeroBackgroundImage>
      </HerosContainer>

      <HerosContainer>
        <HeroBackgroundImageHalf fluid={data.picture4.childImageSharp.fluid}>
          <NoStyleLink to="/electronics">
            <CatchyBanner
              color="white"
              title="Watches"
              fontSize="4.5rem"
              background="none"
            />
          </NoStyleLink>
        </HeroBackgroundImageHalf>
        <HeroBackgroundImageThird fluid={data.picture5.childImageSharp.fluid}>
          <NoStyleLink to="/electronics">
            <CatchyBanner
              color="white"
              title="TVs"
              fontSize="4.5rem"
              background="none"
            />
          </NoStyleLink>
        </HeroBackgroundImageThird>
        <HeroBackgroundImageThird fluid={data.picture6.childImageSharp.fluid}>
          <NoStyleLink to="/electronics">
            <CatchyBanner
              color="white"
              title="Phones"
              fontSize="4.5rem"
              background="none"
            />
          </NoStyleLink>
        </HeroBackgroundImageThird>
      </HerosContainer>

      <Section id="inventory">
        <AmazonProducts
          title={'Our Inventory'}
          products={results.data}
          pagination={results.pagination}
        />
      </Section>

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
      <Section>
        <Container1200>
          <H2Centered>Can't find what you need? Give us a shout!</H2Centered>
          <SimpleNetlifyForm />
        </Container1200>
      </Section>
    </ElectronicsLayout>
  );
};

export default electronicsOne;
