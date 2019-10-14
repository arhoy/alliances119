// Emotion Styled Element
import styled from '@emotion/styled';

const Section = styled.div`
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const SectionGrey = styled(Section)`
  background: ${props => props.theme.colors.lightgrey};
`;

export { Section, SectionGrey };
