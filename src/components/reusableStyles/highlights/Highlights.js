import styled from '@emotion/styled';

const CustomHighlight = styled.span`
  display: inline-block;
  padding: 0px 4px;
  border-radius: 4px;

  margin: 0 2px;
  background: ${props => props.theme.colors.primaryTransparent};
`;

const CustomHighlight2 = styled.span`
  display: inline-block;
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 0.5rem 1rem;

  background: ${props => props.theme.colors.primaryTransparent};
`;

const CustomHighlight2Primary = styled(CustomHighlight2)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`;

export { CustomHighlight, CustomHighlight2, CustomHighlight2Primary };
