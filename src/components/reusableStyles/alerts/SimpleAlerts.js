import styled from '@emotion/styled';

const SimpleAlert = styled.p`
  padding: 0.5rem 2rem;
  background: ${props => props.theme.colors.white};
  font-size: 1.5rem;
`;

const SimpleAlertRed = styled(SimpleAlert)`
  background: ${props => props.theme.colors.lightRed};
  color: ${props => props.theme.colors.red};
  font-weight: bold;
  border-radius: 6px;
`;
const SimpleAlertGreen = styled(SimpleAlert)`
  background: ${props => props.theme.colors.lightGreen};
  color: ${props => props.theme.colors.green};
  font-weight: bold;
  border-radius: 6px;
`;

export { SimpleAlert, SimpleAlertRed, SimpleAlertGreen };
