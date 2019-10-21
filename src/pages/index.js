import React from 'react';
import styled from '@emotion/styled';
import { FaShippingFast } from 'react-icons/fa';
import ReactTyped from 'react-typed';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import {
  Section,
  Container800,
} from '../components/reusableStyles/sections/Sections';

import BackgroundImage from 'gatsby-background-image';
import { H2 } from '../components/reusableStyles/typography/Typography';
import { SimpleNetlifyForm } from '../components/forms/SimpleNetlifyForm';

import CatchyBanner from '../components/reusableStyles/banner/CatchyBanner';
import BasicFeatureSection from '../components/features/BasicFeatureSection';

const P = styled.p`
  margin: 1.5rem 0rem;
  font-family: Poppins;
  font-size: 1.7rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
    margin: 3rem 0rem;
  }
`;

const HeroBackgroundImage = styled(BackgroundImage)`
  width: 50vw;
  min-height: 60vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 100%;
    min-height: 40vh;
    align-items:flex-end;
    
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

const FullNarrowBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  min-height: 25vh;
  max-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomSection = styled(Section)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: ${props => props.theme.colors.lightRed};
  color: ${props => props.theme.colors.red};
  font-weight: bold;
`;

const whyFasion = () => (
  <>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur
    </P>
    <P>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum. Sed viverra tellus in hac habitasse
      platea dictumst vestibulum rhoncus. Massa ultricies mi quis hendrerit.
      Nibh tellus molestie nunc non blandit massa enim nec dui.
    </P>
  </>
);

const HerosContainer = styled.div`
  display: flex;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
  }
`;
const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconContainerShipping = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;
export const query = graphql`
  {
    picture1: file(relativePath: { eq: "woman.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture2: file(relativePath: { eq: "man.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture3: file(relativePath: { eq: "fall-background.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture4: file(relativePath: { eq: "jeans.JPG" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture5: file(relativePath: { eq: "runningshoes.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture6: file(relativePath: { eq: "jeans_3.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default ({ data }) => {
  return (
    <Layout full={true}>
      <SEO title="Fashion One" description="Sample Fashion Store" />
      <HerosContainer>
        <HeroBackgroundImage fluid={data.picture1.childImageSharp.fluid}>
          <CatchyBanner color="white" title="WOMEN" width="100%" />
        </HeroBackgroundImage>

        <HeroBackgroundImage fluid={data.picture2.childImageSharp.fluid}>
          <CatchyBanner color="white" title="MEN" width="100%" />
        </HeroBackgroundImage>
      </HerosContainer>
      <FullNarrowBackgroundImage fluid={data.picture3.childImageSharp.fluid}>
        <CatchyBanner
          color="white"
          title="FALL SALE"
          background="rgb(218, 18, 31)"
        >
          <p style={{ fontWeight: 'bold', marginTop: '4px' }}>
            Up to 50% of selected brands
          </p>
        </CatchyBanner>
      </FullNarrowBackgroundImage>
      <HerosContainer>
        <HeroBackgroundImageThird fluid={data.picture4.childImageSharp.fluid}>
          <CatchyBanner
            color="white"
            title="Jeans"
            fontSize="4.5rem"
            background="none"
          />
        </HeroBackgroundImageThird>
        <HeroBackgroundImageThird fluid={data.picture5.childImageSharp.fluid}>
          <CatchyBanner
            color="white"
            title="Shoes"
            fontSize="4.5rem"
            background="none"
          />
        </HeroBackgroundImageThird>
        <HeroBackgroundImageThird fluid={data.picture6.childImageSharp.fluid}>
          <CatchyBanner
            color="white"
            title="Bags"
            fontSize="4.5rem"
            background="none"
          />
        </HeroBackgroundImageThird>
      </HerosContainer>
      <CustomSection>
        <Container800>
          <TypeContainer>
            <IconContainerShipping>
              <FaShippingFast />
            </IconContainerShipping>

            <ReactTyped
              strings={[
                'Free Shipping on orders over $50',
                'Free Shipping actually on orders over $40',
                'Free Shipping even on orders over $20!',
                'We have free shipping on all orders over $20 ❤',
              ]}
              typeSpeed={40}
              backSpeed={10}
              smartBackspace
              loop
            >
              <span type="text" />
            </ReactTyped>
          </TypeContainer>
        </Container800>
      </CustomSection>
      <Section>
        <Container800>
          <BasicFeatureSection heading="Why Fashion One" text={whyFasion()} />
        </Container800>
      </Section>
      <Section>
        <Container800>
          <H2>Contact US</H2>
          <SimpleNetlifyForm />
        </Container800>
      </Section>
    </Layout>
  );
};
