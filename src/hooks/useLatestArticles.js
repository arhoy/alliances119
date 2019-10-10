import { graphql, useStaticQuery } from 'gatsby';

const useLatestArticles = () => {
  const data = useStaticQuery(graphql`
    query lastestArticles {
      allArticles: allContentfulAlexQuasarArticles(
        limit: 5
        sort: { fields: publishDate, order: DESC }
      ) {
        nodes {
          slug
          title
          publishDate(formatString: "MMM Do YYYY")
          author {
            name
          }
          heroImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `);
  const articles = data.allArticles.nodes;
  return articles;
};

export default useLatestArticles;
