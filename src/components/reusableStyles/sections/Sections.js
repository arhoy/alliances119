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

const SectionHexaGrey = styled(Section)`
  margin: 4rem 0;

  background: ${props => props.theme.colors.lightgrey};
  -webkit-clip-path: polygon(
    50% 0%,
    80% 10%,
    100% 0,
    100% 100%,
    80% 90%,
    50% 100%,
    20% 90%,
    0 100%,
    0 0,
    20% 10%
  );
  clip-path: polygon(
    50% 0%,
    80% 10%,
    100% 0,
    100% 100%,
    80% 90%,
    50% 100%,
    20% 90%,
    0 100%,
    0 0,
    20% 10%
  );
`;

const SectionParallelGrey = styled(Section)`
  background: ${props => props.theme.colors.lightgrey};
  -webkit-clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 80%);
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 80%);
`;

const ProductPageTopSection = styled(Section)`
  background: ${props => props.theme.colors.primaryTransparent};
  padding: 2rem 6rem;
  @media (max-width: ${props => props.theme.screenSize.mobileVS}) {
    padding: 2rem 2rem;
  }

  & p {
    font-weight: bold;
  }
`;

const TopSection = styled(Section)`
  padding-top: 2rem;
`;

const Container1200 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container1000 = styled.div`
  max-width: 1000px;
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
  SectionHexaGrey,
  SectionParallelGrey,
  TopSection,
  Container1200,
  Container1000,
  Container800,
  ContainerCenterFlex,
  ProductPageTopSection,
};
