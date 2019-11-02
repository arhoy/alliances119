import { graphql, useStaticQuery } from 'gatsby';

const getAllBagsHook = () => {
  const data = useStaticQuery(graphql`
    {
      allBags: allContentfulFashionTwoBags {
        nodes {
          id
          productName
          productSlug
          shortDescription
          price
          discountPrice
          tags
          rating
          displayBadge
          mainImage {
            fluid(quality: 90, maxWidth: 300) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
      allShoes: allContentfulFashionTwoShoes {
        nodes {
          id
          productName
          productSlug
          shortDescription
          price
          discountPrice
          tags
          rating
          displayBadge
          mainImage {
            fluid(quality: 90, maxWidth: 300) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
      allPants: allContentfulFashionTwoPants {
        nodes {
          id
          productName
          productSlug
          shortDescription
          price
          discountPrice
          tags
          rating
          displayBadge
          mainImage {
            fluid(quality: 90, maxWidth: 300) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `);

  const items = concat(
    data.allBags.nodes,
    data.allShoes.nodes,
    data.allPants.nodes,
  );

  return items;
};

export default getAllBagsHook;
