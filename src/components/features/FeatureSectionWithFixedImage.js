import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { H2 } from '../reusableStyles/typography/Typography';

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 4rem 0;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const ContentContainer = styled.div`
  margin-right: 2rem;
`;

const Header = styled(H2)`
  color: ${props => props.theme.colors.secondary};
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
  }
`;

const ImageContainerFixed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    display: none;
  }
`;

const ImageFluid = styled(Img)`
  object-fit: cover;
  object-fit: 50% 50%;
`;

const SubHeading = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
  }
`;
const TextContainer = styled.div``;

const FeatureSectionWithImage = ({
  heading,
  subheading,
  text,
  fluid,
  fixed,
  title,
  alt,
}) => {
  return (
    <Container>
      <ContentContainer>
        <Header>{heading}</Header>
        <SubHeading> {subheading} </SubHeading>
        <TextContainer>{text}</TextContainer>
      </ContentContainer>
      {fixed ? (
        <ImageContainerFixed>
          <Img title={title} alt={alt} fixed={fixed} />
        </ImageContainerFixed>
      ) : (
        <ImageFluid title={title} alt={alt} fluid={fluid} />
      )}
    </Container>
  );
};

FeatureSectionWithImage.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
};

export default FeatureSectionWithImage;
