import React from 'react';
import styled from '@emotion/styled';

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

const FullNarrowBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  min-height: 25vh;
  max-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
          background="rgba(61, 55, 55,0.5)"
        />
      </FullNarrowBackgroundImage>

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
