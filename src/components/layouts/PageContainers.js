// Emotion Styled Element
import styled from '@emotion/styled';
const DefaultPageContainer = styled.div`
  max-width: ${props => props.theme.pageWidth.fixed};
  margin: 0 auto;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin: 0 2rem;
  }
`;

export { DefaultPageContainer };
