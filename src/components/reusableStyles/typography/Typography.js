import styled from '@emotion/styled';

const H1 = styled.h1`
  font-size: 4rem;
  color: ${props => props.theme.colors.black};
`;

const H2 = styled.h2`
  font-size: 3rem;
  color: ${props => props.theme.colors.black};
`;

const A = styled.a`
  color: ${props => props.theme.colors.black};
`;

export { H1, H2, A };
