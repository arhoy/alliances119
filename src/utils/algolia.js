const productQuery = `

{
    allContentfulFashionTwoPants {
      nodes {
        productName
        shortDescription
        tags
        productSlug
      }
    }
    allContentfulFashionTwoBags {
      nodes {
        productName
        shortDescription
        tags
        productSlug
      }
    }
      allContentfulFashionTwoShoes {
      nodes {
        productName
        shortDescription
        tags
        productSlug
      }
    }
  }
  
`;

const queries = [
  {
    query: productQuery,
    transformer: ({ data }) =>
      data.allContentfulFashionTwoPants.nodes.concat(
        data.allContentfulFashionTwoBags.nodes,
        data.allContentfulFashionTwoShoes.nodes,
      ),
  },
];

module.exports = queries;
