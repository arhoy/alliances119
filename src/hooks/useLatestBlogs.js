import { graphql, useStaticQuery } from 'gatsby';

const useLatestBlogs = () => {
  const data = useStaticQuery(graphql`
    query lastestBlogs {
      allBlogs: allContentfulBlogPost(
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
  const blogs = data.allBlogs.nodes;
  return blogs;
};

export default useLatestBlogs;
