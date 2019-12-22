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

const SuperStoreList2 = () => {
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
        <ListHeader title="Top Brands in Electronics" />
        <MegaMenuPictureContainer></MegaMenuPictureContainer>
        <MegaMenuLi>
          <MegaMenuLink to="/computers">Apple</MegaMenuLink>
          <MegaMenuSpan spanColor="primary">Popular</MegaMenuSpan>
        </MegaMenuLi>

        <MegaMenuLi>
          <MegaMenuLink to="/computers">Lenovo</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/computers">LG</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/computers">Sony</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/computers">ASUS</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/computers">Dell</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/computers">Samsung</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/computers">Fitbit</MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>
      <MegaMenuUl>
        <ListHeader title="Top Fashion Brands" />
        <MegaMenuPictureContainer>
          <MegaMenuPicture fixed={data.picture2.childImageSharp.fixed} />
        </MegaMenuPictureContainer>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Michael Kors</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Calvin Klein</MegaMenuLink>
          <MegaMenuSpan>Hot</MegaMenuSpan>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Stuart Weitzman</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Gucci</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Fossil</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Adidas</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Levi's</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Nike</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Under Armour</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/phones">Aldo</MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>
      <MegaMenuUl>
        <ListHeader title="Featured Products" />
        <MegaMenuPictureContainer>
          <MegaMenuPicture fixed={data.picture3.childImageSharp.fixed} />
        </MegaMenuPictureContainer>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Echo Dot</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Fire TV Stick</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Kindle</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Windows 10</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Game of Thrones S8</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Razer DeathAdder</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Samsung Galaxy</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Apple iPhone</MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>
    </>
  );
};

export default SuperStoreList2;
