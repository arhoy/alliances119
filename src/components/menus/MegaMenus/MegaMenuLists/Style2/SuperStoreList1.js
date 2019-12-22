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

const SuperStoreList1 = () => {
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
        <ListHeader title="ELECTRONICS & PHONES" />
        <MegaMenuPictureContainer>
          <MegaMenuPicture fixed={data.picture1.childImageSharp.fixed} />
        </MegaMenuPictureContainer>
        <MegaMenuLi>
          <MegaMenuLink to="/computers">TV & Theatre</MegaMenuLink>
          <MegaMenuSpan spanColor="primary">Hot</MegaMenuSpan>
        </MegaMenuLi>

        <MegaMenuLi>
          <MegaMenuLink to="/computers">Photography</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/computers">Audio</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/computers">Headphones</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/computers">Computers & Tablets</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/computers">PC Gaming</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/computers">Phones</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/computers">Wearable Tech</MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>
      <MegaMenuUl>
        <ListHeader title="CLOTHING & ACCESSORIES" />
        <MegaMenuPictureContainer>
          <MegaMenuPicture fixed={data.picture2.childImageSharp.fixed} />
        </MegaMenuPictureContainer>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Mens Fashion</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Women Fashion</MegaMenuLink>
          <MegaMenuSpan>Hot</MegaMenuSpan>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Childrens Clothing</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Active Wear</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Novelty</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Underwear</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Jewlery</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Watches</MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>
      <MegaMenuUl>
        <ListHeader title="HEALTH & HOUSEHOLD" />
        <MegaMenuPictureContainer>
          <MegaMenuPicture fixed={data.picture3.childImageSharp.fixed} />
        </MegaMenuPictureContainer>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Baby & Child Care</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Health Care</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Sports Nutrition</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Sexual Wellness</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Vision Care</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Household Items</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Personal Care</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Vitamins & Suppliments</MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>
    </>
  );
};

export default SuperStoreList1;
