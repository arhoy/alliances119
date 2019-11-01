import React from 'react';
import styled from '@emotion/styled';
import { FaShippingFast } from 'react-icons/fa';
import ReactTyped from 'react-typed';
import { graphql } from 'gatsby';

import Layout from '../../components/layouts/Layout';
import SEO from '../../hooks/SEO';
import {
  Section,
  Container800,
  SectionGrey,
} from '../../components/reusableStyles/sections/Sections';

import BackgroundImage from 'gatsby-background-image';
import { H2, A } from '../../components/reusableStyles/typography/Typography';
import { SimpleNetlifyForm } from '../../components/forms/SimpleNetlifyForm';

import CatchyBanner from '../../components/reusableStyles/banner/CatchyBanner';
import BasicFeatureSection from '../../components/features/BasicFeatureSection';

import getAllBags from '../../hooks/contentful/products/bags/getAllBagsHook';
import { ProductLayout1 } from '../../components/products/ProductContainerStyles/ProductContainerStyle';
import Products from '../../components/products/Products';
import getAllPantsHook from '../../hooks/contentful/products/pants/getAllPantsHook';
import getAllShoesHook from '../../hooks/contentful/products/shoes/getAllShoesHook';

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
  width: 100vw;
  height: 88vh;
  background-size: cover;
  background-position: top;
  display: flex;
  justify-content: stretch;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 100%;
    height: 50vh;

 
    align-items:flex-start;
    
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

const FullNarrowBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  min-height: 25vh;
  max-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomHighlight = styled.span`
  padding: 0px 4px;
  border-radius: 4px;

  margin: 0 2px;
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
      <strong>FashionTwo</strong> a blazingly fast Ecommerce platform powered by
    </P>
    <P>
      <CustomHighlight> Gatsby </CustomHighlight> +
      <CustomHighlight> Contentful </CustomHighlight> +
      <CustomHighlight> Snipcart </CustomHighlight>
    </P>
    <P>
      Faster and more SEO friendy than any frontend WordPress or Shopify site
      created by the vast majority of web design agencies and at a fraction of
      the cost.
    </P>
  </>
);

const aboutMe = () => (
  <>
    <P>
      My name is <strong>Alex Quasar</strong>. I am professional full stack web
      developer and digital ads consultant. I build websites for local
      businesses and work with companies small and large using the latest and
      greatest technoligies. These include:
    </P>
    <P>
      <CustomHighlight> JAM Stack </CustomHighlight> &
      <CustomHighlight> MERN Stack </CustomHighlight> &
      <CustomHighlight> Gatsby </CustomHighlight> &
      <CustomHighlight> Contentful </CustomHighlight>
    </P>
    <P>
      You can read more on my about page:{' '}
      <A href="https://aquasar.io/about/">here</A>
    </P>
  </>
);

const pricing = () => (
  <P>
    What platform I use to develop a custom site for a client depends on a
    individual case by case base on a wide variety of factors such as budget,
    inventory, transaction cost and client preference. For more information on
    pricing, please check out my pricing page:{' '}
    <A href="https://aquasar.io/pricing/">here</A>
  </P>
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

const CustomBannerContainer = styled.div`
  padding: 4rem 1rem;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(max-content, 35rem));
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
    picture3: file(relativePath: { eq: "purple-blob.jpg" }) {
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
          <CatchyBanner color="white" title="Designer Brands" />
        </HeroBackgroundImage>
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

      <HerosContainer>
        <HeroBackgroundImageHalf fluid={data.picture4.childImageSharp.fluid}>
          <CatchyBanner
            color="white"
            title="Jeans"
            fontSize="4.5rem"
            background="none"
          />
        </HeroBackgroundImageHalf>
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

      <Section>
        <CenteredH2>
          Fashion Bags <StyledItalicSpan2>Trending</StyledItalicSpan2>
        </CenteredH2>
        <ProductLayout1>
          <Products products={getAllBags()} productType="bags" />
        </ProductLayout1>
      </Section>

      <SectionGrey>
        <CenteredH2>
          Men's Jeans <StyledItalicSpan>Hot</StyledItalicSpan>
        </CenteredH2>
        <ProductLayout1>
          <Products products={getAllPantsHook()} productType="pants" />
        </ProductLayout1>
      </SectionGrey>

      <Section>
        <CenteredH2>
          Women's Shoes <StyledItalicSpan>Latest</StyledItalicSpan>
        </CenteredH2>
        <ProductLayout1>
          <Products products={getAllShoesHook()} productType="shoes" />
        </ProductLayout1>
      </Section>

      <FullNarrowBackgroundImage fluid={data.picture3.childImageSharp.fluid}>
        <CustomBannerContainer>
          <CatchyBanner
            color="white"
            title="Red Tag"
            background="rgb(218, 18, 31)"
          >
            <p
              style={{
                fontWeight: 'bold',
                marginTop: '4px',
                color: 'lightgrey',
                textAlign: 'center',
              }}
            >
              Up to 50% of selected brands
            </p>
          </CatchyBanner>
          <CatchyBanner color="white" title="Brand New" background="#5C3491">
            <p
              style={{
                fontWeight: 'bold',
                marginTop: '4px',
                color: 'lightgrey',
                textAlign: 'center',
              }}
            >
              New trending items
            </p>
          </CatchyBanner>
        </CustomBannerContainer>
      </FullNarrowBackgroundImage>

      <SectionGrey>
        <Container800>
          <BasicFeatureSection heading="Why FashionTwo" text={whyFasion()} />
        </Container800>
      </SectionGrey>
      <Section>
        <Container800>
          <BasicFeatureSection heading="About Me" text={aboutMe()} />
        </Container800>
      </Section>

      <SectionGrey>
        <Container800>
          <BasicFeatureSection heading="Pricing" text={pricing()} />
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
