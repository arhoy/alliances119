import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import Insta from '../components/Insta';
import Checkout from '../components/stripe/Checkout';
import Skus from '../components/stripe/Skus';
import styled from '@emotion/styled';
import profileImage from '../../images/alexquasar.png';
import { ButtonStyle2 } from '../components/reusableStyles/buttons/Button';

const Container = styled.div`
  max-width: ${props => props.theme.pageWidth.fixed};
  margin: 0 auto;
`;

const SectionTop = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 4rem 0;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-wrap: wrap;
  }
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
  background: ${props => props.theme.colors.lightgrey};
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
  font-size: 3.4rem;
`;

const Blurb = styled.p`
  max-width: 450px;
  padding: 2rem 0;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.black};
`;

const Social = styled.div`
  display: flex;
  color: red;
`;

export default () => {
  console.log(profileImage);
  return (
    <Layout>
      <SEO
        title="Explore Gatsby"
        description="MERN, Gatsby and other cool stuff"
      />
      <Container>
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
              <div>
                <span>Github</span>
                <span>Github</span>
                <span>Github</span>
              </div>
            </Social>
          </SectionTopOne>
          <SectionTopTwo>
            <img alt="" src={profileImage} />
            <h4>New Content Weekly</h4>
            <p> Developer tutorials and new websites </p>
            <ButtonStyle2>Subscribe Me</ButtonStyle2>
          </SectionTopTwo>
        </SectionTop>

        <h2>Latest Articles</h2>

        <h2>React Articles</h2>

        <h2>Gatsby Articles</h2>

        <h2>Mongo DB Articles</h2>

        <h2>Latest Websites</h2>

        <h2>VS Code Set Up</h2>

        <Checkout />
        <Skus />
        <Insta />
      </Container>
    </Layout>
  );
};
