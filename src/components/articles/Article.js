// Each Article in the Article List component
import React from 'react';
import styled from '@emotion/styled';
import NoStyleLink from '../Links/NoStyleLink';
import Image from 'gatsby-image';

const Div = styled.div`
  &:hover {
    cursor: pointer;
    background: ${props => props.theme.colors.lightgrey};
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
  }
  & .author {
    font-size: 1.5rem;
  }
`;

const StyledLink = styled(NoStyleLink)`
  display: grid;
  grid-template-columns: 2fr 7fr;
  align-items: center;
  padding: 1rem 1rem;
`;

const ImageContainer = styled(Image)`
  width: 6rem;
  height: 6rem;
  margin-right: 1rem;
  border-radius: 50%;
  background-size: cover;
`;

const ContentContainer = styled.div``;

const Title = styled.h2`
  display: flex;
  font-size: 1.8rem;
  justify-self: flex-start;
`;

const P = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.darkgrey};
`;

const Article = ({ article }) => {
  return (
    <Div>
      <StyledLink to={`articles/${article.slug}`}>
        <ImageContainer fluid={article.heroImage.fluid} alt={article.title} />
        <ContentContainer>
          <Title>{article.title}</Title>
          <P>{article.publishDate}</P>
        </ContentContainer>
      </StyledLink>
    </Div>
  );
};

export default Article;
