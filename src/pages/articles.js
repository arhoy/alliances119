import React from 'react';
import Layout from '../components/layouts/Layout';
import { graphql } from 'gatsby';
import SEO from '../hooks/SEO';
import Articles from '../components/articles/Articles';
import { DefaultPageContainer } from '../components/layouts/PageContainers';
import { H1 } from '../components/reusableStyles/typography/Typography';

export const getArticles = graphql`
  query {
    allArticles: allContentfulAlexQuasarArticles {
      nodes {
        slug
        title
        publishDate(formatString: "MMM Do YYYY")
        author {
          name
        }
        heroImage {
          fluid {
            src
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;

const articles = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Alex Quasar Articles on Gatsby and Full Stack React"
        description="Please see all the articles below, articles on Full Stack React and Gatsby and more"
      />
      <DefaultPageContainer>
        <H1>Articles</H1>
        <Articles articles={data.allArticles.nodes} />
      </DefaultPageContainer>
    </Layout>
  );
};

export default articles;
