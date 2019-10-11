import React from 'react';
import styled from '@emotion/styled';
import GitHubButton from 'react-github-button';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import Insta from '../components/Insta';

import Skus from '../components/stripe/Skus';
import profileImage from '../../images/alexquasar.png';
import Articles from '../components/articles/Articles';
import Navlink from '../components/Links/Navlink';
import useLatestArticles from '../hooks/useLatestArticles';
import useLatestBlogs from '../hooks/useLatestBlogs';

import { ButtonStyle2 } from '../components/reusableStyles/buttons/Button';
import { DefaultPageContainer } from '../components/layouts/PageContainers';
import { FaTwitterSquare, FaGithub } from 'react-icons/fa';

const Section = styled.div`
  display: flex;
  padding: 4rem 0;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-wrap: wrap;
  }
`;
const SectionTop = styled(Section)`
  margin: 0 auto;
`;

const SectionMiddle = styled(Section)`
  display: block;
  margin: 0 auto;
`;

const SectionTopOne = styled.div`
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin-bottom: 3rem;
  }
`;

const SectionTopTwo = styled.div`
  background: ${props => props.theme.colors.primaryTransparent};
  padding: 2rem;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  & img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-size: contain;
  }
  h4 {
    padding: 1rem 0rem;
  }
  & p {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 3.8rem;
`;

const H2 = styled.h2`
  font-size: 3.2rem;
  margin-bottom: 3rem;
  & ${Navlink} {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    margin-left: 1rem;
    background: ${props => props.theme.colors.lightgrey};
    display: inline-block;
    transform: translateY(-0.5rem);
    text-decoration: none;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    font-size: 2.5rem;
    & ${Navlink} {
      margin: 0;
      padding: 0.5rem 1rem;
    }
  }
`;

const Blurb = styled.p`
  max-width: 450px;
  padding: 2rem 0;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.black};
`;

const Social = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const TwitterStyle = styled(FaTwitterSquare)`
  margin-left: 1rem;
  color: #1da1f2;
  cursor: pointer;
  font-size: 4rem;
`;

const GitHubStyle = styled(FaGithub)`
  cursor: pointer;
  font-size: 4rem;
`;

export default () => {
  return (
    <Layout>
      <SEO
        title="Explore Gatsby"
        description="MERN, Gatsby and other cool stuff"
      />
      <DefaultPageContainer>
        <SectionTop>
          <SectionTopOne>
            <Title>
              Hello I'm Alex
              <Blurb>
                I create websites and web apps using modern technologies like
                React and Gatsby and then write about by learnings along the
                way.
              </Blurb>
            </Title>

            <Social>
              <GitHubStyle title="Star Repo" />
              <TwitterStyle title="Follow Me" />
            </Social>
          </SectionTopOne>
          <SectionTopTwo>
            <img alt="" src={profileImage} />
            <h4>New Content Weekly</h4>
            <p> Developer tutorials and new websites </p>
            <ButtonStyle2>
              <a href="https://aquasar.substack.com"> Subscribe Me </a>
            </ButtonStyle2>
          </SectionTopTwo>
        </SectionTop>

        <SectionMiddle>
          <H2>
            Lastest Articles <Navlink to="/articles"> View All</Navlink>
          </H2>
          <Articles articles={useLatestArticles()} />
        </SectionMiddle>

        <SectionMiddle>
          <H2>
            Latest Blogs <Navlink to="/blogs"> View All</Navlink>
          </H2>
          <Articles articles={useLatestBlogs()} />
        </SectionMiddle>
        <Section>
          <Skus />
        </Section>
        <SectionMiddle>
          <Insta />
        </SectionMiddle>
      </DefaultPageContainer>
    </Layout>
  );
};
