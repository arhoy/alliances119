import React, { useState } from 'react';
import styled from '@emotion/styled';
import * as Scroll from 'react-scroll';
import ReactTyped from 'react-typed';
import { graphql } from 'gatsby';
import Particles from 'react-particles-js';

import MainLayout from '../components/layouts/MainLayout';
import SEO from '../hooks/SEO';
import {
  Section,
  Container800,
  SectionGrey,
} from '../components/reusableStyles/sections/Sections';

import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import {
  H2,
  A,
  H2Centered,
} from '../components/reusableStyles/typography/Typography';
import { SimpleNetlifyForm } from '../components/forms/SimpleNetlifyForm';

import CatchyBanner from '../components/reusableStyles/banner/CatchyBanner';
import BasicFeatureSection from '../components/features/BasicFeatureSection';

import NoStyleLink from '../components/Links/NoStyleLink';
import {
  ButtonStyle2Large,
  ButtonStyle2,
} from '../components/reusableStyles/buttons/Button';

const P = styled.p`
  margin: 1.5rem 0rem;
  font-family: Poppins;
  font-size: 1.7rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
    margin: 3rem 0rem;
  }
`;

const CustomHighlight = styled.span`
  padding: 0px 4px;
  border-radius: 4px;

  margin: 0 2px;
  background: ${props => props.theme.colors.primaryTransparent};
`;

const HerosContainer = styled.div`
  display: flex;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
  }
`;

const MainHeroCover = styled(HerosContainer)`
  width: 100%;
  height: 100vh;
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
  padding: 4rem 1rem;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(max-content, 35rem));
`;

const MainCenterDiv = styled.div`
  position: absolute;
  color: ${props => props.theme.colors.white};
  z-index: 4;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.black};
  opacity: 0.9;
`;
const Blurb = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.white};
`;

const FashionDemos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CustomButtonStyle2 = styled(ButtonStyle2)`
  transform: translate(0, 10vh);
  padding: 1rem 2rem;
  opacity: 0;
  transition: all 0.4s ease-in;
`;
const DemoViewContainer = styled.div`
  height: 40rem;
  width: 30rem;
  background: ${props => props.theme.colors.blackTransparent};
  position: absolute;
  left: 0%;
  top: 0%;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transition: all 0.2s ease-in;
`;

const DemoImage = styled(Img)`
  background-size: contain;

  width: 100%;
  height: 100%;
`;

const DemoImageContainer = styled.div`
  height: 40rem;
  width: 30rem;
  margin: 2rem;

  position: relative;

  display: flex;
  justify-content: flex-start;

  &:before {
    content: '';
    position: absolute;
    height: 40rem;
    width: 30rem;
    border: 3px solid ${props => props.theme.colors.primary};
    box-sizing: border-box;
    top: -2rem;
    left: -2rem;
    z-index: -1;
  }
  &:hover {
    ${DemoViewContainer} {
      opacity: 1;
    }
    ${CustomButtonStyle2} {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`;

const whyRipple = () => (
  <>
    <P>
      <strong>RippleJS</strong> themes are blazingly fast website themes for any
      purpose create by Aquasar Web Development. The JAMstack is the future of
      web development, exploiting the power of front end frameworks like Gatsby
      and taking full advantage of powerful APIs and microservices like
      Snipcart, Algolia and Contentful to create a fast, user friendly browser
      experience.
    </P>
    <P>
      <CustomHighlight> Gatsby </CustomHighlight> +
      <CustomHighlight> React </CustomHighlight> +
      <CustomHighlight> Contentful </CustomHighlight> +
      <CustomHighlight> Netlify </CustomHighlight> +
      <CustomHighlight> Algolio </CustomHighlight> +
      <CustomHighlight> Snipcart </CustomHighlight> &
      <CustomHighlight> Much much more </CustomHighlight>
    </P>
    <P>
      "Faster and more SEO friendy than any frontend WordPress or Shopify site
      created by the vast majority of web design agencies and at a fraction of
      the cost."
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

export const query = graphql`
  {
    logoTrans: file(
      relativePath: { eq: "logos/main/RippleJSLogoTransparent.png" }
    ) {
      childImageSharp {
        fixed(quality: 90, width: 300) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }

    fashionDemos: allFile(
      filter: { relativePath: { regex: "/demos/fashion/" } }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }

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
    picture7: file(relativePath: { eq: "woman2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture8: file(relativePath: { eq: "woman4.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture9: file(relativePath: { eq: "man2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    picture10: file(relativePath: { eq: "man2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default ({ data }) => {
  const [typingComplete, setTypingComplete] = useState(false);

  const typingCompleteHandler = () => {
    console.log('The typing has finished!');
    setTypingComplete(true);
  };

  return (
    <MainLayout full={true}>
      <SEO title="Fashion two" description="Sample Fashion Store" />
      <MainHeroCover>
        <StyledParticles
          params={{
            particles: {
              number: {
                value: 250,
              },
              // color: {
              //   value: 'white',
              // },
              shape: {
                type: 'circle',
                stroke: {
                  width: 1,
                  color: '#e2e2e2',
                },
              },
              opacity: {
                value: 0.2,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                },
              },

              size: {
                value: 5,
                random: false,
              },
              line_linked: {
                enable: true,
                distance: 90,
                color: '#fff',
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: 'none',
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
                onclick: {
                  enable: true,
                  mode: 'bubble',
                },
              },
              modes: {
                repulse: {
                  distance: 50,
                  duration: 10,
                },
                bubble: {
                  distance: 100,
                  size: 50,
                },
              },
            },
          }}
        />

        <MainCenterDiv>
          <Img fixed={data.logoTrans.childImageSharp.fixed} />
          <Blurb>
            {typingComplete ? (
              <Scroll.Link
                to="rippleDemos"
                smooth={true}
                duration={500}
                offset={-30}
              >
                <ButtonStyle2Large>Learn More</ButtonStyle2Large>
              </Scroll.Link>
            ) : (
              <ReactTyped
                strings={[
                  'Lightning Fast Development',
                  'Full Ecommerce Solutions',
                  'Complete Customization',
                  'Full Support',
                  'Fast, Slick, Modern ',
                  'Learn More',
                ]}
                typeSpeed={50}
                backSpeed={0}
                smartBackspace
                onComplete={typingCompleteHandler}
              >
                <span type="text" />
              </ReactTyped>
            )}
          </Blurb>
        </MainCenterDiv>
      </MainHeroCover>

      <Section>
        <Scroll.Element id="rippleDemos">
          <H2Centered> DEMOS</H2Centered>
        </Scroll.Element>

        <FashionDemos>
          {data.fashionDemos.nodes.map((node, i) => (
            <NoStyleLink key={i} to="/demos/fashion-six">
              <DemoImageContainer>
                <DemoImage fluid={node.childImageSharp.fluid} />
                <DemoViewContainer>
                  <CustomButtonStyle2>View Demo</CustomButtonStyle2>
                </DemoViewContainer>
              </DemoImageContainer>
            </NoStyleLink>
          ))}
        </FashionDemos>
      </Section>
      <Section>
        <H2Centered> Many More Themes Coming Soon </H2Centered>
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
              Up to 50% Off
            </p>
          </CatchyBanner>
        </CustomBannerContainer>
      </FullNarrowBackgroundImage>
      <SectionGrey>
        <Container800>
          <BasicFeatureSection
            heading="Why RippleJS Theme"
            text={whyRipple()}
          />
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
    </MainLayout>
  );
};
