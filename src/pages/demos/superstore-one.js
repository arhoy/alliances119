import React from 'react';
import styled from '@emotion/styled';
import { FaGlobeAfrica } from 'react-icons/fa';

import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Image from 'gatsby-image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SuperStoreLayout from '../../components/layouts/SuperStoreLayout';
import {
  Section,
  SectionGrey,
  SectionPrimaryTransparent,
} from '../../components/reusableStyles/sections/Sections';
import {
  Bold,
  H2CenteredLight2,
  H1,
  P,
  H3,
} from '../../components/reusableStyles/typography/Typography';

const HerosContainer = styled.div`
  z-index: -1;

  display: flex;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
  }
`;

const HerosCardContainer = styled.div`
  margin-top: -20vh;

  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: flex-end;
`;

const HerosCard = styled.div`
  z-index: 2;
  background: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;

  padding: 1rem 2rem;
  text-align: center;
  & h4 {
    font-weight: bold;
    font-size: 2.4rem;
    margin-bottom: 1rem;
    display: block;
    min-height: 8rem;
  }

  & p {
    font-size: 1.6rem;
    padding: 0 1rem;
  }

  margin: 1rem;

  width: 20%;
  min-width: 20rem;
`;

const HeroBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 70vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.5)
  );
  background-size: cover;
  background-position: top;
  align-items: center;
  opacity: 1 !important;
`;

const HeroContentContainer = styled.div`
  margin-top: 1rem;

  flex-direction: column;
`;
const HeroContent = styled.div`
  color: ${props => props.theme.colors.white};
  max-width: 80rem;
  margin: 0 auto;

  padding: 3rem;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`;
const IconContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledIcon = styled(FaGlobeAfrica)`
  font-size: 25rem;
  opacity: 0.4;
`;

const ImageContainer = styled.div``;

const StyledImage = styled(Image)`
  margin: 0 1rem;
  cursor: pointer;
`;

const CustomH1 = styled(H1)`
  text-align: center;
  color: ${props => props.theme.colors.white};
`;

const Blurb = styled.p`
  text-align: center;
  font-weight: bolder;
  & i {
    text-decoration: underline;
  }
`;
const Blurb2 = styled(Blurb)`
  font-weight: 500;
  margin-top: 1rem;
`;

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "superstore/hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture1: file(relativePath: { eq: "superstore/Amazon1.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture2: file(relativePath: { eq: "superstore/Amazon2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture3: file(relativePath: { eq: "superstore/Amazon3.jpg" }) {
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

const superstoreOne = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <SuperStoreLayout full={true}>
      <HerosContainer>
        <HeroBackgroundImage fluid={data.heroImage.childImageSharp.fluid}>
          <HeroContentContainer>
            <HeroContent>
              <CustomH1>The Amazon Store For Africa</CustomH1>
              <Blurb>
                We will deliver to <i>any</i> African country when Amazon won't
              </Blurb>
              <Blurb2>
                Just add our Warehouse on address line 1 during checkout
              </Blurb2>
            </HeroContent>

            <IconContainer>
              <StyledIcon />
            </IconContainer>
          </HeroContentContainer>
        </HeroBackgroundImage>
      </HerosContainer>
      <HerosCardContainer>
        <HerosCard>
          <h4>Find Your Product</h4>
          <p>
            We are a Ecommerce Store Shipping products to Africa from Amazon,
            Best Buy, Autotrader and more
          </p>
        </HerosCard>
        <HerosCard>
          <h4>Checkout Via Amazon </h4>
          <p>
            Amazon will fullfill the orders, send it to our warehouse. We will
            ship your product with tracking number to your location immediately
          </p>
        </HerosCard>
        <HerosCard>
          <h4>Safe Secure Transactions </h4>
          <p>
            Your orders are 100% guaranteed by Amazon and by Alliances119 to
            arrive in a fast and timely manner.
          </p>
        </HerosCard>
        <HerosCard>
          <h4> Many Brands & Growing! </h4>
          <p>
            We are the fastest growing new kid on the block, delivering
            ecommerce products to the entire African continent. Providing
            unparalled customer service.
          </p>
        </HerosCard>
      </HerosCardContainer>
      <Section>
        <H2CenteredLight2>
          <Bold>Featured</Bold> Products
        </H2CenteredLight2>
        <Slider {...settings}>
          <ImageContainer>
            <StyledImage fluid={data.picture1.childImageSharp.fluid} />
          </ImageContainer>
          <ImageContainer>
            <StyledImage fluid={data.picture2.childImageSharp.fluid} />
          </ImageContainer>
          <ImageContainer>
            <StyledImage fluid={data.picture3.childImageSharp.fluid} />
          </ImageContainer>
          <ImageContainer>
            <StyledImage fluid={data.picture1.childImageSharp.fluid} />
          </ImageContainer>
          <ImageContainer>
            <StyledImage fluid={data.picture2.childImageSharp.fluid} />
          </ImageContainer>
          <ImageContainer>
            <StyledImage fluid={data.picture3.childImageSharp.fluid} />
          </ImageContainer>
        </Slider>
      </Section>
      <SectionPrimaryTransparent>
        <H2CenteredLight2>
          <Bold>Our </Bold> Pricing
        </H2CenteredLight2>
        <H3>Amazon Products</H3>
        <P>
          For Amazon related products, you pay for the product on Amazon after
          finding it on this site, or going to this site first. After your order
          is shipped to our warehouse, we will call you to confirm and ship your
          product. Our fees for shipping and processing are 10% of your order +
          $20.
        </P>
        <H3>Cars, Trucks and Automobiles</H3>
        <P>
          If you have found a car you would like to purchase and ship it to
          Africa, please fill out the form below with the URL of the vehicle you
          would like to purchase. We will follow up with you shortly. Our
          shipping rates depend on each country and the weight of the car. Costs
          typically vary between $500 to $900 per car.
        </P>
      </SectionPrimaryTransparent>
      <SectionGrey>
        <H2CenteredLight2>
          <Bold>Our </Bold> Warehouse
        </H2CenteredLight2>
        <H3>We are a Amazon Associate Partner</H3>
        <P>
          When checking out on Amazon, it is very important to add our warehouse
          address XX XXX on address line 1. so.
        </P>
        <P>Please see a video here on how to do this if you are not certain.</P>
        <H3>More Brands coming</H3>
        <P>
          While we mostly have Amazon products listed, we will continue to grow
          our site to list other ecommerce products as well. It is important to
          us that if you come to this site before checking out on Amazon with
          our Warehoue address as products, service pricing and instructions
          might change over time.
        </P>
        <P>If you have any questions please do not hesitate to contact us</P>
      </SectionGrey>
    </SuperStoreLayout>
  );
};

export default superstoreOne;
