import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Layout from '../components/layouts/Layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import SEO from '../hooks/SEO';
import ArticleCode from '../components/articles/ArticleCode';
import StyledHero from '../components/heros/StyledHero';
import { H1 } from '../components/reusableStyles/typography/Typography';
import { TagContainer, Tag } from '../components/reusableStyles/tags/Tag';

// run template query
export const query = graphql`
  query getBlog($slug: String!) {
    article: contentfulBlogPost(slug: { eq: $slug }) {
      title
      description {
        description
      }
      author {
        name
      }
      publishDate(formatString: "MMM Do, Y")
      bodyRichText {
        json
      }
      heroImage {
        fluid {
          src
          ...GatsbyContentfulFluid_withWebp
        }
      }
      tags
    }
  }
`;

const AritlceHeader = styled.div`
  margin-bottom: 6rem;
  h1 {
    font-size: 4rem;
  }
`;

const ArticleContainer = styled.article`
  max-width: 75rem;
  margin: 0 auto;
  & li {
    margin-left: 4rem;
  }

  ul {
    list-style: disk;
  }
`;

const P = styled.p`
  padding: 1rem 0rem;
`;

const BoldStyle = styled.span`
  font-weight: bold;
`;

const CodeStyle = styled.span`
  color: red;
`;

const Bold = ({ children }) => <BoldStyle>{children}</BoldStyle>;
const Text = ({ children }) => <P>{children}</P>;

const Code = ({ children }) => <CodeStyle>{children}</CodeStyle>;

const BlogTemplate = ({ data: { article } }) => {
  const {
    title,
    bodyRichText: { json },
    publishDate,
    author,
    heroImage: { fluid },
    tags,
  } = article;

  // determine which prism to render based on tags
  let language = 'sql';

  if (tags.includes('javascript')) {
    language = 'javascript';
  }
  if (tags.includes('python')) {
    language = 'python';
  }

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.CODE]: text => (
        <Code>
          <ArticleCode language={language} code={text} />
        </Code>
      ),
    },

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  };

  return (
    <Layout>
      <SEO title={title} />

      <ArticleContainer>
        <AritlceHeader>
          <H1>{title}</H1>
          <p>{publishDate}</p>
          <p>{author.name}</p>
          <StyledHero img={fluid} />
          <TagContainer>
            {tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagContainer>
        </AritlceHeader>
        <main>{documentToReactComponents(json, options)}</main>
      </ArticleContainer>
    </Layout>
  );
};

export default BlogTemplate;
