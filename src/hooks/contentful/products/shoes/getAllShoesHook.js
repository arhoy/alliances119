import { graphql, useStaticQuery } from 'gatsby';

const getAllShoesHook = () => {
  const data = useStaticQuery(graphql`
    query {
      allItems: allContentfulFashionTwoShoes {
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
  const items = data.allItems.nodes;
  return items;
};

export default getAllShoesHook;
