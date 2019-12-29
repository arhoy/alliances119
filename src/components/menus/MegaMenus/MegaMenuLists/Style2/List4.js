// // NO STYLES IN THIS FILE! Import from MegaMenuLists/ListStyles
// import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
// import {
//   MegaMenuUl,
//   MegaMenuLi,
//   MegaMenuLink,
//   MegaMenuSpan,
//   MegaMenuPicture,
//   MegaMenuPictureContainer,
// } from './ListStyles';

// import ListHeader from './ListHeader';

// const List4 = () => {
//   const data = useStaticQuery(graphql`
//     {
//       picture1: file(
//         relativePath: { eq: "megaMenu/bags-monnet-limegreen.jpg" }
//       ) {
//         childImageSharp {
//           fixed(quality: 90, width: 150, height: 150) {
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//       picture2: file(
//         relativePath: { eq: "megaMenu/women-shoes-boots-vayne-black.jpg" }
//       ) {
//         childImageSharp {
//           fixed(quality: 90, width: 150, height: 150) {
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//       picture3: file(relativePath: { eq: "megaMenu/jeans-Lun-blue.jpg" }) {
//         childImageSharp {
//           fixed(quality: 90, width: 150, height: 150) {
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//     }
//   `);

//   return (
//     <>
//       <MegaMenuUl>
//         <ListHeader title="Bags" />
//         <MegaMenuPictureContainer>
//           <MegaMenuPicture fixed={data.picture1.childImageSharp.fixed} />
//         </MegaMenuPictureContainer>
//         <MegaMenuLi>
//           <MegaMenuLink to="/bags">Monnet</MegaMenuLink>
//           <MegaMenuSpan spanColor="primary">New</MegaMenuSpan>
//         </MegaMenuLi>

//         <MegaMenuLi>
//           <MegaMenuLink to="/bags">Gucci</MegaMenuLink>
//         </MegaMenuLi>
//         <MegaMenuLi>
//           <MegaMenuLink to="/bags">Prada</MegaMenuLink>
//         </MegaMenuLi>
//         <MegaMenuLi>
//           <MegaMenuLink to="/bags">Fendi</MegaMenuLink>
//         </MegaMenuLi>
//         <MegaMenuLi>
//           <MegaMenuLink to="/bags">Coach</MegaMenuLink>
//         </MegaMenuLi>
//         <MegaMenuLi>
//           <MegaMenuLink to="/bags">Lacoste</MegaMenuLink>
//         </MegaMenuLi>
//       </MegaMenuUl>
//       <MegaMenuUl>
//         <ListHeader title="Shoes" />
//         <MegaMenuPictureContainer>
//           <MegaMenuPicture fixed={data.picture2.childImageSharp.fixed} />
//         </MegaMenuPictureContainer>
//         <MegaMenuLi>
//           <MegaMenuLink to="/shoes">Chloé</MegaMenuLink>
//         </MegaMenuLi>
//         <MegaMenuLi>
//           <MegaMenuLink to="/shoes">Isnom</MegaMenuLink>
//           <MegaMenuSpan>Hot</MegaMenuSpan>
//         </MegaMenuLi>
//         <MegaMenuLi>
//           <MegaMenuLink to="/shoes">Matisse</MegaMenuLink>
//         </MegaMenuLi>
//         <MegaMenuLi>
//           <MegaMenuLink to="/shoes">Staud</MegaMenuLink>
//         </MegaMenuLi>
//         <MegaMenuLi>
//           <MegaMenuLink to="/shoes">Zara</MegaMenuLink>
//         </MegaMenuLi>
//       </MegaMenuUl>
//       <MegaMenuUl>
//         <ListHeader title="Pants" />
//         <MegaMenuPictureContainer>
//           <MegaMenuPicture fixed={data.picture3.childImageSharp.fixed} />
//         </MegaMenuPictureContainer>
//         <MegaMenuLi>
//           <MegaMenuLink to="/pants">Levis</MegaMenuLink>
//         </MegaMenuLi>
//         <MegaMenuLi>
//           <MegaMenuLink to="/pants">Cele</MegaMenuLink>
//         </MegaMenuLi>
//         <MegaMenuLi>
//           <MegaMenuLink to="/pants">St Lun</MegaMenuLink>
//         </MegaMenuLi>
//         <MegaMenuLi>
//           <MegaMenuLink to="/pants">Givenchy</MegaMenuLink>
//         </MegaMenuLi>
//         <MegaMenuLi>
//           <MegaMenuLink to="/pants">Versace</MegaMenuLink>
//         </MegaMenuLi>
//       </MegaMenuUl>
//     </>
//   );
// };

// export default List4;
