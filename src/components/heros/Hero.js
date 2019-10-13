import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  height: 60vh;
  background-position: bottom center;
  positiion: relative;
`;

const TextBox = styled.div`
  text-transform: uppercase;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.colors.white};
`;

const TextBox2 = styled.div`
  text-transform: uppercase;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.colors.white};
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero.jpeg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>Built Using Gatsby</TextBox>
      <TextBox2>With You in Mind</TextBox2>
    </ImageBackground>
  );
};

export default Hero;
