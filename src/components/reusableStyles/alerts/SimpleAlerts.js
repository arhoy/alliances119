import styled from '@emotion/styled';

const SimpleAlert = styled.p`
  display: inline-block;
  padding: 0.5rem 2rem;
  background: ${props => props.theme.colors.white};
  font-size: 1.5rem;
  border-radius: 6px;
`;

const SimpleAlertRed = styled(SimpleAlert)`
  background: ${props => props.theme.colors.lightRed};
  color: ${props => props.theme.colors.red};
`;
const SimpleAlertGreen = styled(SimpleAlert)`
  background: ${props => props.theme.colors.lightGreen};
  color: ${props => props.theme.colors.green};
`;
const SimpleAlertPrimary = styled(SimpleAlert)`
  background: ${props => props.theme.colors.primaryTransparent};
  color: ${props => props.theme.colors.primaryDark};
`;

export { SimpleAlert, SimpleAlertRed, SimpleAlertGreen, SimpleAlertPrimary };
