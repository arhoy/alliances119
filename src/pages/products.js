import React from 'react';
import styled from '@emotion/styled';
import { FaAmazon, FaDollarSign, FaCarAlt } from 'react-icons/fa';

import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Layout from '../components/layouts/Layout';
import {
  Section,
  SectionGrey,
  Container1200,
} from '../components/reusableStyles/sections/Sections';
import {
  Bold,
  H2CenteredLight2,
  H1,
  PBasic,
} from '../components/reusableStyles/typography/Typography';

import SliderContainer1 from '../components/reusableStyles/slider/SliderContainer1';

import FeatureSection from '../components/features/FeatureSection';
import { ButtonStyle1 } from '../components/reusableStyles/buttons/Button';
import SuperStoreList1 from '../components/menus/MegaMenus/MegaMenuLists/Style2/SuperStoreList1';

const HerosContainer = styled.div`
  z-index: -1;

  display: flex;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
  }
`;

const HeroBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 40vh;

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.5)
  );
  background-size: cover;
  background-position: top;

  opacity: 1 !important;
`;

const HeroContentContainer = styled.div`
  min-width: 30rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const HeroContent = styled.div`
  color: ${props => props.theme.colors.white};

  padding: 1rem;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`;

const CustomH1 = styled(H1)`
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white};
  text-shadow: -3px 3px 0 ${props => props.theme.colors.black};
`;

const CustomH2 = styled(H2CenteredLight2)`
  font-size: 3.2rem;
  color: ${props => props.theme.colors.primary};
  text-shadow: -3px 3px 0 rgba(10, 14, 39, 0.1);
`;

const Blurb = styled.p`
  margin: 2rem 0.5rem;
  text-align: center;
  font-weight: bolder;
  font-size: 2rem;
  & i {
    text-decoration: underline;
  }
`;
const Blurb2 = styled(Blurb)`
  font-weight: 500;
`;

const textVehicles = () => (
  <PBasic>
    You can also purchase cars through us. If you have found a car you would
    like to purchase and ship it to Africa, please fill out the form below with
    the URL of the vehicle you would like to purchase. We will follow up with
    you shortly. Our shipping rates depend on each country and the weight of the
    car. Costs typically vary between <Bold> $500 to $900 </Bold>per car.
  </PBasic>
);

const textAmazonProducts = () => (
  <PBasic>
    For Amazon related products, you pay for the product on Amazon after finding
    it on this site, or going to this site first. After your order is shipped to
    our warehouse, we will call you to confirm and ship your product. Our fees
    for shipping and processing are <Bold>10% of your order + $20. </Bold>
  </PBasic>
);

const textOurWarehouse1 = () => (
  <>
    <PBasic>
      We are a Amazon Associate Partner When checking out on Amazon, use our
      warehouse address
      <br />
      <ButtonStyle1> XX XXX on address line 1</ButtonStyle1>
    </PBasic>
    <PBasic style={{ marginTop: '1rem' }}>
      You can reach our support team if you are having difficulty with purchases
      or if you have any other questions
    </PBasic>
  </>
);

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "superstore/hero-brand.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    slider1: file(relativePath: { eq: "superstore/slider1.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    slider2: file(relativePath: { eq: "superstore/slider2.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    slider3: file(relativePath: { eq: "superstore/slider3.png" }) {
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

const Products = ({ data }) => {
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
    <Layout full={true}>
      <HerosContainer>
        <HeroBackgroundImage fluid={data.heroImage.childImageSharp.fluid}>
          <HeroContentContainer>
            <HeroContent>
              <CustomH1>Our Products</CustomH1>
              <Blurb>
                Shop for a wide variety of Products. Some of our Products here
              </Blurb>
              <Blurb2>
                Just add our Warehouse on address line 1 during checkout
              </Blurb2>
            </HeroContent>
          </HeroContentContainer>
        </HeroBackgroundImage>
      </HerosContainer>
      <Section>
        <SuperStoreList1 />
      </Section>
      <Section>
        <CustomH2>
          <Bold>Featured</Bold> Products
        </CustomH2>
        <Slider {...settings}>
          <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.amazon.ca/s?k=monitors+asus&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=8ed51b45a03f3971b380223c4fe4e9bd&camp=15121&creative=330641"
            title={`Monitors`}
            subtitle={`Premium ASUS Monitors`}
          ></SliderContainer1>
          <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.amazon.ca/s?k=iphone&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=a94be228d0112520e15357a3e37d5f8d&camp=15121&creative=330641"
            title={`iphones`}
            subtitle={`Reburbished at Great Prices`}
          ></SliderContainer1>
          <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.amazon.ca/s?k=amazon+drones&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=412603aabc1e3fcd6b0f20c2efdbf384&camp=15121&creative=330641"
            title={`Drones`}
            subtitle={`Starting at $39.99`}
          ></SliderContainer1>
          <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.amazon.ca/s?k=monitors+asus&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=8ed51b45a03f3971b380223c4fe4e9bd&camp=15121&creative=330641"
            title={`Monitors`}
            subtitle={`Premium ASUS Monitors`}
          ></SliderContainer1>
          <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.google.com"
            title={`iphones`}
            subtitle={`Reburbished at Great Prices`}
          ></SliderContainer1>
          <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.amazon.ca/s?k=amazon+drones&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=412603aabc1e3fcd6b0f20c2efdbf384&camp=15121&creative=330641"
            title={`Drones`}
            subtitle={`Starting at $39.99`}
          ></SliderContainer1>
        </Slider>
      </Section>

      <SectionGrey>
        <Container1200>
          <FeatureSection
            heading="Amazon Products"
            subheading="Our Pricing"
            text={textAmazonProducts()}
            icon={FaDollarSign()}
            rotate="rotate(12deg)"
          />
        </Container1200>
      </SectionGrey>

      <Section>
        <Container1200>
          <FeatureSection
            heading="Vehicles"
            subheading="Our Process"
            text={textVehicles()}
            icon={FaCarAlt()}
            rotate="rotate(-15deg)"
            iconSize="10rem"
          />
        </Container1200>
      </Section>

      <SectionGrey>
        <Container1200>
          <FeatureSection
            heading="Our Warehouse"
            subheading="Amazon Associate Partner"
            text={textOurWarehouse1()}
            icon={FaAmazon()}
            rotate="rotate(0deg)"
          />
        </Container1200>
      </SectionGrey>
    </Layout>
  );
};

export default Products;
