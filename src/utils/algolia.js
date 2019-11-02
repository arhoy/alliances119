const productQuery = `

{
    allContentfulFashionTwoPants {
      nodes {
        productName
        shortDescription
        tags
      }
    }
    allContentfulFashionTwoBags {
      nodes {
        productName
        shortDescription
        tags
      }
    }
      allContentfulFashionTwoShoes {
      nodes {
        productName
        shortDescription
        tags
      }
    }
  }
  
`;

const queries = [
  {
    query: productQuery,
    transformer: ({ data }) =>
      concat(
        data.allContentfulFashionTwoPants.nodes,
        data.allContentfulFashionTwoBags.nodes,
        data.allContentfulFashionTwoShoes.nodes,
      ),
  },
];

module.exports = queries;
