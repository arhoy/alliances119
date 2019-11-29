import { graphql, useStaticQuery } from 'gatsby';

const getAllShirtsHook = () => {
  const data = useStaticQuery(graphql`
    query {
      allItems: allContentfulFashionTwoShirts {
        nodes {
          id
          productName
          productSlug
          shortDescription
          price
          discountPrice
          tags

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
  const items = data.allItems.nodes;
  return items;
};

export default getAllShirtsHook;
