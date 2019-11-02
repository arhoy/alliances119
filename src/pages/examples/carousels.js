import React from 'react';

import Layout from '../../components/layouts/Layout';
import { P, H2 } from '../../components/reusableStyles/typography/Typography';
import { Section } from '../../components/reusableStyles/sections/Sections';

import SEO from '../../hooks/SEO';
import ProductPageHeader from '../../components/products/ProductPageHeader';

import StyledAliceGallery from '../../components/reusableStyles/carousel/AliceGallery';
export const query = graphql`
  {
    imageArray1: allFile(filter: { relativePath: { regex: "/megaMenu/" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
    imageArray2: allFile(
      filter: { relativePath: { regex: "/carouselArray1/" } }
    ) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
`;

const carousel = ({ data }) => {
  const images1 = data.imageArray1.nodes;
  const images2 = data.imageArray2.nodes;

  return (
    <Layout>
      <SEO
        title="Gatsby Aquasar Carousel Examples"
        description="Carousel examples in a Gatsby Site"
      />
      <Section style={{ padding: '1rem 4rem' }}>
        <ProductPageHeader
          title={`Carousels`}
          description={`Some example Carousels for your next Gatsby Site`}
        />
        <P></P>
      </Section>
      <Section>
        <H2> Carousel #1 </H2>

        <StyledAliceGallery
          gatsbyImageArray
          images={images1}
          loop
          loopInterval={2000}
        />
      </Section>
      <Section>
        <H2> Carousel #1 </H2>

        <StyledAliceGallery gatsbyImageArray images={images2} />
      </Section>
    </Layout>
  );
};

export default carousel;
