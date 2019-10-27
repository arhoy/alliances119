// Emotion Styled Element
import styled from '@emotion/styled';

const Section = styled.div`
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 8rem 4rem;
  @media (max-width: ${props => props.theme.screenSize.mobileVS}) {
    padding: 6rem 2rem;
  }
`;

const SectionGrey = styled(Section)`
  background: ${props => props.theme.colors.lightgrey};
`;

const SectionPrimaryTransparent = styled(Section)`
  background: ${props => props.theme.colors.primaryTransparent};
`;

const TopSection = styled(Section)`
  padding-top: 2rem;
`;

const Container1200 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container800 = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContainerCenterFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export {
  Section,
  SectionGrey,
  SectionPrimaryTransparent,
  TopSection,
  Container1200,
  Container800,
  ContainerCenterFlex,
};
