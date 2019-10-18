import React from 'react';
import socialIcons from '../../constants/socialIcons';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

const d = new Date().getFullYear();

const FooterStyle = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  a {
    color: black;
    font-size: 3rem;
    margin: 1rem;
    padding: 1rem;
  }
`;

const StyledImage = styled(Img)`
  width: 25px;
  height: 25px;
  margin-left: 6px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "canada-flag.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 20) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <FooterStyle>
      <ul>
        {socialIcons.map(icon => (
          <a
            key={icon.url}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.icon}
          </a>
        ))}
      </ul>
      <Div>
        YEG | Alberta |
        <StyledImage alt="Made In Canada" fluid={image.sharp.fluid} />
      </Div>
      <p>Aquasar Blog {d} &copy; </p>
    </FooterStyle>
  );
};

export default Footer;
