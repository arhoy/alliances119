import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Logo = () => {
  const data = useStaticQuery(
    graphql`
      {
        logoNavigation: file(
          relativePath: { eq: "logos/main/RippleJSLogoTransparent.png" }
        ) {
          childImageSharp {
            fixed(quality: 90, width: 120) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `,
  );
  console.log(data);
  return <Img fixed={data.logoNavigation.childImageSharp.fixed} />;
};

export default Logo;
