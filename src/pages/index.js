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
  SectionGrey,
  ContainerCenterFlex,
} from '../components/reusableStyles/sections/Sections';

import BackgroundImage from 'gatsby-background-image';
import { H2 } from '../components/reusableStyles/typography/Typography';
import { SimpleNetlifyForm } from '../components/forms/SimpleNetlifyForm';

import CatchyBanner from '../components/reusableStyles/banner/CatchyBanner';
import BasicFeatureSection from '../components/features/BasicFeatureSection';
import SkusBags from '../components/stripe/hooks/SkusBags';
import SkusShoes from '../components/stripe/hooks/SkusShoes';
import SkusJeans from '../components/stripe/hooks/SkusJeans';

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

const CustomHighlight = styled.span`
  padding: 1px 2px;
  border-radius: 2px;
  font-weight: bold;
  margin: 0 4px;
  background: ${props => props.theme.colors.primaryTransparent};
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
      What we have here is <CustomHighlight>Fashion two</CustomHighlight> a
      blazingly fast Ecommerce platform powered soley by Stripe and Gatsby.
      Faster and more SEO friendy than any frontend WordPress or Shopify site
      created by the vast majority of web design agencies and at a fraction of
      the cost.
    </P>
    <P>
      My name is Alex Quasar, I am professional freelance full stack developer.
      I create sites for individuals and work with companies small and large
      using the latest and greatest technoligies the web has to offer. I have
      expertise in the
      <CustomHighlight>JAM Stack</CustomHighlight> and the
      <CustomHighlight>MERN Stack</CustomHighlight>.
    </P>
    <P>
      For Ecommerce I use any one of Gatsby combined with the following
      platforms such as Stripe, Contentful and
      <CustomHighlight>Shopify</CustomHighlight>.
    </P>
    <P>
      What platform I use to develop a custom site for a client depends on a
      individual case by case base on a wide variety of factors such as budget,
      inventory, transaction cost and client preference. For more information on
      pricing, please check out my pricing page here.
    </P>
  </>
);

const CenteredH2 = styled(H2)`
  text-align: center;
`;

const StyledItalicSpan = styled.span`
  color: ${props => props.theme.colors.primary};
  font-style: italic;
  font-size: 2rem;
`;

const StyledItalicSpan2 = styled.span`
  color: ${props => props.theme.colors.red};
  font-size: 2rem;
  font-style: italic;
`;

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
      <SEO title="Fashion two" description="Sample Fashion Store" />
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
        <CenteredH2>
          Fashion Bags <StyledItalicSpan2>Trending</StyledItalicSpan2>
        </CenteredH2>
        <ContainerCenterFlex>
          <SkusBags />
        </ContainerCenterFlex>
      </Section>

      <SectionGrey>
        <CenteredH2>
          Men's Jeans <StyledItalicSpan>Hot</StyledItalicSpan>
        </CenteredH2>
        <ContainerCenterFlex>
          <SkusJeans />
        </ContainerCenterFlex>
      </SectionGrey>

      <Section>
        <CenteredH2>
          Women's Shoes <StyledItalicSpan>Latest</StyledItalicSpan>
        </CenteredH2>
        <ContainerCenterFlex>
          <SkusShoes />
        </ContainerCenterFlex>
      </Section>

      <SectionGrey>
        <Container800>
          <BasicFeatureSection heading="Why Fashion two" text={whyFasion()} />
        </Container800>
      </SectionGrey>
      <Section>
        <Container800>
          <H2>Contact US</H2>
          <SimpleNetlifyForm />
        </Container800>
      </Section>
    </Layout>
  );
};
