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
import { Section } from '../../components/reusableStyles/sections/Sections';
import {
  Bold,
  H2CenteredLight2,
} from '../../components/reusableStyles/typography/Typography';

const HerosContainer = styled.div`
  z-index: -1;

  display: flex;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
  }
`;

const HerosCardContainer = styled.div`
  margin-top: -25vh;

  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: flex-end;
`;

const HerosCard = styled.div`
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
  z-index:0;
  width: 100%;
  height: 70vh;
  background-size: cover;
  background-position: top;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:-1;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 100%;
    height: 50vh;

 
    align-items:flex-start;
    
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
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

export const query = graphql`
  {
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
    <SuperStoreLayout full={false}>
      <HerosContainer>
        <HeroBackgroundImage fluid={data.picture1.childImageSharp.fluid}>
          <IconContainer>
            <StyledIcon />
          </IconContainer>
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
    </SuperStoreLayout>
  );
};

export default superstoreOne;
