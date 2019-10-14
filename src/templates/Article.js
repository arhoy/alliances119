import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import ArticleCode from '../components/articles/ArticleCode';

import { DefaultPageContainer } from '../components/layouts/PageContainers';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import { H1 } from '../components/reusableStyles/typography/Typography';
import { TagContainer, Tag } from '../components/reusableStyles/tags/Tag';

// run template query
export const query = graphql`
  query getFullArticle($slug: String!) {
    article: contentfulAlexQuasarArticles(slug: { eq: $slug }) {
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
          ...GatsbyContentfulFluid_withWebp
        }
      }
      tags
    }
  }
`;

const AritlceHeader = styled.div`
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  @media (max-width: 750px) {
    display: flex;
  }
`;

const ArticleHeaderImage = styled(Image)`
  width: 15rem;
  height: 15rem;
  margin-right: 1rem;
  justify-self: center;
  align-self: center;
  @media (max-width: 750px) {
    display: none;
  }
`;

const ArticleHeaderContent = styled.div`
  padding: 1rem;
  & p {
    font-size: 1.3rem;
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

const CodeStyle = styled.span``;

const Bold = ({ children }) => <BoldStyle>{children}</BoldStyle>;
const Text = ({ children }) => <P>{children}</P>;

const Code = ({ children }) => <CodeStyle>{children}</CodeStyle>;

const AricleTemplate = ({ data: { article } }) => {
  const {
    title,
    description: { description },
    bodyRichText: { json },
    publishDate,
    author,
    heroImage: { fluid },
    tags,
  } = article;

  // determine which prism to render based on tags
  let language = 'sql';

  if (tags.includes('javascript') || tags.includes('mongo')) {
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
      <SEO title={title} description={description} />
      <DefaultPageContainer>
        <ArticleContainer>
          <AritlceHeader>
            <ArticleHeaderImage fluid={fluid} />

            <ArticleHeaderContent>
              <H1>{title}</H1>
              <p>{publishDate}</p>
              <p>{author ? author.name : 'Anonymous'}</p>
              <TagContainer>
                {tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagContainer>
            </ArticleHeaderContent>
          </AritlceHeader>
          <main>{documentToReactComponents(json, options)}</main>
        </ArticleContainer>
      </DefaultPageContainer>
    </Layout>
  );
};

export default AricleTemplate;
