import React from 'react';
import styled from '@emotion/styled';

import { graphql } from 'gatsby';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import Hero from '../components/heros/Hero';

import {
  H1,
  H2,
  Bold,
} from '../components/reusableStyles/typography/Typography';
import { ListInline } from '../components/reusableStyles/lists/List';
import { ListVertical as ListWithDescription } from '../components/reusableStyles/lists/ListWithDescription';
import currentWebsites from '../constants/currentWebsites';
import { Margin2 } from '../components/reusableStyles/modular/modularStyles';
import currentlyUsing from '../constants/currentlyUsing';
import onlineResources from '../constants/onlineResources';
import dataVisuals from '../constants/data-visuals';
import { SimpleNetlifyForm } from '../components/forms/SimpleNetlifyForm';

import BasicFeatureSection from '../components/features/BasicFeatureSection';
import StyledHero2 from '../components/heros/StyledHero2';
import {
  Section,
  Container800,
  SectionGrey,
} from '../components/reusableStyles/sections/Sections';

const P = styled.p`
  margin: 1.5rem 0rem;
  font-family: Poppins;
  font-size: 1.7rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
    margin: 3rem 0rem;
  }
`;

const Ul1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > * {
    margin: 1rem 0;
  }
`;

const Div2 = styled.div`
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const textContentful = () => (
  <>
    <P>
      Contentful is an easy to use, modern headless CMS (content management
      system). It is used by companies like Walmart, Disney, Icelandair and
      Shell to name a few. This fast growing CMS system probably is good enough
      and easy enough for most users.
    </P>
    <P>
      While it lack some features I would like to see out of the box, it is
      possible to configure it to your liking on the developer side. This
      decoupling of the developer from the content writer, is essential to
      create efficient content flow and eliminate developer bottlenecks.
    </P>

    <P>
      If you are a developer writing your personal blog, I am still on the fence
      of whether contentful is the best choice. I'm currently experimenting with
      mdx and other resources in addition to simply creating my own custom CMS
      or content template.
    </P>
    <P>
      Depending on who you ask the later is a bad idea, but it does make
      complete customization and developer freedom possible. Perhaps the best
      solution is you can use Contentful for a lot of article templates but
      maybe not for everything on your site.
    </P>
  </>
);

const textNetlify = () => (
  <P>
    Netlify is an amazing service offering hosting, continuous deployment and
    serverless functions for developers. It's amazing out of the box
    <Bold> identity and authentication </Bold>
    and contact form features are invaluable for getting up a working site with
    minimal overhead, time and cost.ate efficient content flow and eliminate
    developer bottlenecks.
  </P>
);

const textReact = () => (
  <>
    <P>
      Maybe this is an obvious answer to some, but I think every developer
      should ask themselves the question of what a new technology, be it
      language, library or framework offers before jumping on the popularity
      bandwaggon.
    </P>

    <P>
      I use React simply because it makes developing in vanilla JavaScript much
      easier. More specifically, it makes DOM manipulation, state management,
      and creating reusable components easier.
    </P>
    <P>
      JavaScript of course is needed to make the front end application of your
      website `come to life` so to speak. It is the defacto programming language
      for web browsers, used to make a dynamic and interactive user experience.
    </P>
  </>
);

const textGatsby = () => (
  <>
    <P>
      I made this site in Gatsby because, as Gatsby puts it, it is blazingly
      fast and built on top of React. I am also a huge fan of Gatsby because of
      its ability to be a progressive web app which among other things means it
      can work offline and is more resilient to bad internet connections
    </P>
    <P>
      This coupled with the fact that Gatsby has amazing image optimization
      features means that building a site with Gatsby makes it more accessible
      to users all over the world, especially in developing countries. Finally,
      as a static site generator, Gatsby is great for SEO, something React out
      of the box fails spectaculary at.
    </P>
  </>
);

const textPorfolio = () => (
  <>
    <Div2>
      <ListInline urls={currentWebsites} />
    </Div2>
    <P>
      If you are a local business or small company I can make a blazingly fast,
      amazing website for you at a very affordable cost. Unlike most agencies I
      have multiple payment options and will work with you to create a custom
      built site at a fraction of the cost.
    </P>
  </>
);

const textAbout = () => (
  <>
    <P>
      My name is Alex Quasar (Aquasar) and
      <strong> I make websites.</strong> I started this website as a place to
      document my learning and journey of web development. And what a journey it
      has been!
    </P>
    <P>
      I am a <strong>full stack web developer</strong> (70% frontend, 30%
      backend), former data analyst and inspiring blogger!
    </P>
    <P>
      Looking for a career change, my journey into the world of web development
      has been anything but conventional. I hope to inspire and provide a
      resource for others from all walks of life and education backgrounds.
    </P>
  </>
);

export const query = graphql`
  query {
    about1: file(relativePath: { eq: "astronaut.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const about = ({ data }) => {
  const { fluid } = data.about1.childImageSharp;
  return (
    <Layout full={true}>
      <SEO
        title="About Me"
        description="This is the about me section, Alex Quasar is a mere motral develop and Gatsby is a blazzingly fast static site generator"
      />
      <StyledHero2 img={fluid} gradient="true">
        <Section>
          <Container800>
            <H1>What is Aquasar.io</H1>
            <BasicFeatureSection heading="About me" text={textAbout()} />
          </Container800>
        </Section>
      </StyledHero2>

      <SectionGrey>
        <Container800>
          <BasicFeatureSection
            heading="Portfolio"
            subheading="Select Samples"
            text={textPorfolio()}
          />
        </Container800>
      </SectionGrey>

      <Section>
        <Container800>
          <BasicFeatureSection
            heading="Current Workflow"
            subheading="List of web development tools"
            text={
              <Margin2>
                <ListWithDescription items={currentlyUsing} />
              </Margin2>
            }
          />
        </Container800>
      </Section>

      <SectionGrey>
        <Container800>
          <BasicFeatureSection heading="Why Gatsby" text={textGatsby()} />
        </Container800>
      </SectionGrey>

      <Section>
        <Container800>
          <BasicFeatureSection
            heading="Why Contentful"
            text={textContentful()}
          />
        </Container800>
      </Section>

      <SectionGrey>
        <Container800>
          <BasicFeatureSection heading="Why Netlify" text={textNetlify()} />
        </Container800>
      </SectionGrey>

      <Section>
        <Container800>
          <BasicFeatureSection heading="Why React" text={textReact()} />
        </Container800>
      </Section>

      <SectionGrey>
        <Container800>
          <BasicFeatureSection
            heading="Online Developer Resources"
            subheading="List of my go to learning resources for web development"
            text={
              <Ul1>
                <ListWithDescription items={onlineResources} />
              </Ul1>
            }
          />
        </Container800>
      </SectionGrey>

      <Section>
        <Container800>
          <BasicFeatureSection
            heading="For Data Visualization"
            subheading="Tableau and Power Bi are great for most organizations"
            text={
              <Ul1>
                <ListWithDescription items={dataVisuals} />
              </Ul1>
            }
          />
        </Container800>
      </Section>

      <SectionGrey>
        <Container800>
          <H2>Contact Me</H2>
          <SimpleNetlifyForm color="rgb(240,240,240)" />
        </Container800>
      </SectionGrey>

      <Hero />
    </Layout>
  );
};

export default about;
