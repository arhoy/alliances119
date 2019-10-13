import { graphql, useStaticQuery } from 'gatsby';
const useInsta = props => {
  const data = useStaticQuery(graphql`
    query($limit: Int) {
      allInstaNode(limit: $limit) {
        nodes {
          id
          caption
          username
          localFile {
            childImageSharp {
              fluid(maxWidth: 120, maxHeight: 120) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  return data.allInstaNode.nodes.map(node => ({
    ...node.localFile.childImageSharp,
    id: node.id,
    caption: node.caption,
    username: node.username,
  }));
};

export default useInsta;
