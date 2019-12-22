// NO STYLES IN THIS FILE! Import from MegaMenuLists/ListStyles
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  MegaMenuUl,
  MegaMenuLi,
  MegaMenuLink,
  MegaMenuSpan,
  MegaMenuPicture,
  MegaMenuPictureContainer,
} from './ListStyles';

import ListHeader from './ListHeader';

const SuperStoreList3 = () => {
  const data = useStaticQuery(graphql`
    {
      picture1: file(
        relativePath: { eq: "megaMenu/electronics/laptop-1.jpg" }
      ) {
        childImageSharp {
          fixed(quality: 90, width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      picture2: file(relativePath: { eq: "megaMenu/electronics/phone-1.jpg" }) {
        childImageSharp {
          fixed(quality: 90, width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      picture3: file(relativePath: { eq: "megaMenu/electronics/tv-2.jpg" }) {
        childImageSharp {
          fixed(quality: 90, width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <>
      <MegaMenuUl>
        <ListHeader title="Current List of Car Sites" />
        <MegaMenuPictureContainer></MegaMenuPictureContainer>
        <MegaMenuLi>
          <MegaMenuSpan spanColor="red">Go Auto</MegaMenuSpan>
          <MegaMenuSpan spanColor="primary">Auto Trader</MegaMenuSpan>
          <MegaMenuSpan spanColor="primary">Kijiji</MegaMenuSpan>
          <div>
            <p>
              Please view these sites and contact us if you have found a car of
              interest
            </p>
          </div>
        </MegaMenuLi>
      </MegaMenuUl>
    </>
  );
};

export default SuperStoreList3;
