import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { H2 } from '../reusableStyles/typography/Typography';

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  padding: 4rem 0;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column-reverse;
  }
`;

const ContentContainer = styled.div`
  margin-right: 2rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin-top: 3rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  color: ${props => props.theme.colors.primary};
`;

const Header = styled(H2)`
  color: ${props => props.theme.colors.secondary};
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
  }
`;

const SubHeading = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
  }
`;
const TextContainer = styled.div``;

const FeatureSection = ({
  heading,
  subheading,
  text,
  icon,
  iconSize,
  rotate,
  color,
}) => {
  return (
    <Container>
      <ContentContainer>
        <Header>{heading}</Header>
        <SubHeading> {subheading} </SubHeading>
        <TextContainer>{text}</TextContainer>
      </ContentContainer>
      <IconContainer
        style={{ fontSize: `${iconSize}`, transform: `${rotate}`, color }}
      >
        {icon}
      </IconContainer>
    </Container>
  );
};

FeatureSection.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
};

export default FeatureSection;
